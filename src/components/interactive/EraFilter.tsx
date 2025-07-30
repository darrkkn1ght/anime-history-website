'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, Calendar, TrendingUp, Users, Globe } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
  value: string;
  count?: number;
}

interface EraFilterProps {
  onFilterChange: (filters: FilterState) => void;
  activeFilters: FilterState;
  isOpen: boolean;
  onToggle: () => void;
}

interface FilterState {
  eras: string[];
  genres: string[];
  studios: string[];
  decades: string[];
  influence: string[];
}

const eraOptions: FilterOption[] = [
  { id: 'origins', label: 'Origins Era', value: 'origins', count: 12 },
  { id: 'foundation', label: 'Foundation Era', value: 'foundation', count: 45 },
  { id: 'expansion', label: 'Expansion Era', value: 'expansion', count: 78 },
  { id: 'golden', label: 'Golden Age', value: 'golden', count: 156 },
  { id: 'digital', label: 'Digital Age', value: 'digital', count: 234 },
  { id: 'current', label: 'Current Era', value: 'current', count: 89 }
];

const genreOptions: FilterOption[] = [
  { id: 'mecha', label: 'Mecha', value: 'mecha' },
  { id: 'shounen', label: 'Shounen', value: 'shounen' },
  { id: 'shoujo', label: 'Shoujo', value: 'shoujo' },
  { id: 'seinen', label: 'Seinen', value: 'seinen' },
  { id: 'josei', label: 'Josei', value: 'josei' },
  { id: 'supernatural', label: 'Supernatural', value: 'supernatural' },
  { id: 'slice-of-life', label: 'Slice of Life', value: 'slice-of-life' },
  { id: 'psychological', label: 'Psychological', value: 'psychological' }
];

const studioOptions: FilterOption[] = [
  { id: 'toei', label: 'Toei Animation', value: 'toei' },
  { id: 'mushi', label: 'Mushi Production', value: 'mushi' },
  { id: 'ghibli', label: 'Studio Ghibli', value: 'ghibli' },
  { id: 'gainax', label: 'Gainax', value: 'gainax' },
  { id: 'pierrot', label: 'Studio Pierrot', value: 'pierrot' },
  { id: 'madhouse', label: 'Madhouse', value: 'madhouse' },
  { id: 'wit', label: 'WIT Studio', value: 'wit' },
  { id: 'mappa', label: 'MAPPA', value: 'mappa' }
];

const decadeOptions: FilterOption[] = [
  { id: '1900s', label: '1900s', value: '1900s' },
  { id: '1950s', label: '1950s', value: '1950s' },
  { id: '1960s', label: '1960s', value: '1960s' },
  { id: '1970s', label: '1970s', value: '1970s' },
  { id: '1980s', label: '1980s', value: '1980s' },
  { id: '1990s', label: '1990s', value: '1990s' },
  { id: '2000s', label: '2000s', value: '2000s' },
  { id: '2010s', label: '2010s', value: '2010s' },
  { id: '2020s', label: '2020s', value: '2020s' }
];

const influenceOptions: FilterOption[] = [
  { id: 'cultural-impact', label: 'Cultural Impact', value: 'cultural-impact' },
  { id: 'technical-innovation', label: 'Technical Innovation', value: 'technical-innovation' },
  { id: 'global-reach', label: 'Global Reach', value: 'global-reach' },
  { id: 'artistic-milestone', label: 'Artistic Milestone', value: 'artistic-milestone' },
  { id: 'commercial-success', label: 'Commercial Success', value: 'commercial-success' }
];

const EraFilter: React.FC<EraFilterProps> = ({
  onFilterChange,
  activeFilters,
  isOpen,
  onToggle
}) => {
  const [localFilters, setLocalFilters] = useState<FilterState>(activeFilters);
  const [activeTab, setActiveTab] = useState<string>('eras');

  useEffect(() => {
    setLocalFilters(activeFilters);
  }, [activeFilters]);

  const handleFilterToggle = (category: keyof FilterState, value: string) => {
    const updatedFilters = { ...localFilters };
    const categoryFilters = updatedFilters[category];
    
    if (categoryFilters.includes(value)) {
      updatedFilters[category] = categoryFilters.filter(item => item !== value);
    } else {
      updatedFilters[category] = [...categoryFilters, value];
    }
    
    setLocalFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters: FilterState = {
      eras: [],
      genres: [],
      studios: [],
      decades: [],
      influence: []
    };
    setLocalFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  const getActiveFilterCount = () => {
    return Object.values(localFilters).reduce((acc, curr) => acc + curr.length, 0);
  };

  const renderFilterOptions = (options: FilterOption[], category: keyof FilterState) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((option) => {
          const isActive = localFilters[category].includes(option.value);
          return (
            <motion.button
              key={option.id}
              onClick={() => handleFilterToggle(category, option.value)}
              className={`
                group relative p-3 rounded-lg border transition-all duration-300
                flex items-center justify-between text-left
                ${isActive 
                  ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border-amber-400/50 text-amber-300'
                  : 'bg-zinc-900/50 border-zinc-700/50 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-800/50'
                }
              `}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-3">
                <div className={`
                  w-2 h-2 rounded-full transition-colors duration-300
                  ${isActive ? 'bg-amber-400' : 'bg-zinc-600 group-hover:bg-zinc-500'}
                `} />
                <span className="text-sm font-medium">{option.label}</span>
              </div>
              {option.count && (
                <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-1 rounded-full">
                  {option.count}
                </span>
              )}
              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-500/10 to-yellow-500/10"
                  layoutId={`filter-active-${option.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    );
  };

  const tabs = [
    { id: 'eras', label: 'Eras', icon: Calendar, options: eraOptions, category: 'eras' as keyof FilterState },
    { id: 'genres', label: 'Genres', icon: TrendingUp, options: genreOptions, category: 'genres' as keyof FilterState },
    { id: 'studios', label: 'Studios', icon: Users, options: studioOptions, category: 'studios' as keyof FilterState },
    { id: 'decades', label: 'Decades', icon: Calendar, options: decadeOptions, category: 'decades' as keyof FilterState },
    { id: 'influence', label: 'Influence', icon: Globe, options: influenceOptions, category: 'influence' as keyof FilterState }
  ];

  return (
    <>
      {/* Filter Toggle Button */}
      <motion.button
        onClick={onToggle}
        className="
          relative inline-flex items-center space-x-2 px-4 py-2 
          bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 
          rounded-lg text-zinc-300 hover:text-white hover:border-zinc-600
          transition-all duration-300 group
        "
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Filter className="w-4 h-4" />
        <span className="text-sm font-medium">Filter</span>
        {getActiveFilterCount() > 0 && (
          <motion.div
            className="absolute -top-2 -right-2 bg-amber-500 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            {getActiveFilterCount()}
          </motion.div>
        )}
      </motion.button>

      {/* Filter Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onToggle}
            />

            {/* Filter Panel */}
            <motion.div
              className="
                fixed right-4 top-20 bottom-4 w-96 max-w-[calc(100vw-2rem)]
                bg-zinc-900/95 backdrop-blur-md border border-zinc-700/50 
                rounded-xl shadow-2xl z-50 overflow-hidden
              "
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.95 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
              {/* Header */}
              <div className="sticky top-0 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-700/50 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Filter className="w-5 h-5 text-amber-400" />
                    <h3 className="text-lg font-semibold text-white">Filter Content</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getActiveFilterCount() > 0 && (
                      <motion.button
                        onClick={clearAllFilters}
                        className="text-xs text-amber-400 hover:text-amber-300 px-2 py-1 rounded transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Clear All
                      </motion.button>
                    )}
                    <button
                      onClick={onToggle}
                      className="text-zinc-400 hover:text-white transition-colors p-1"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex space-x-1 mt-4 bg-zinc-800/50 rounded-lg p-1">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                          relative flex-1 flex items-center justify-center space-x-1 py-2 px-3 rounded-md
                          text-xs font-medium transition-all duration-300
                          ${isActive 
                            ? 'text-amber-300 bg-amber-500/20' 
                            : 'text-zinc-400 hover:text-zinc-300 hover:bg-zinc-700/50'
                          }
                        `}
                      >
                        <Icon className="w-3 h-3" />
                        <span>{tab.label}</span>
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 bg-amber-500/20 rounded-md"
                            layoutId="active-tab"
                            initial={false}
                            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Filter Content */}
              <div className="p-4 overflow-y-auto max-h-[calc(100vh-200px)]">
                <AnimatePresence mode="wait">
                  {tabs.map((tab) => (
                    activeTab === tab.id && (
                      <motion.div
                        key={tab.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium text-zinc-300">
                            {tab.label} ({localFilters[tab.category].length} selected)
                          </h4>
                        </div>
                        {renderFilterOptions(tab.options, tab.category)}
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-zinc-900/95 backdrop-blur-md border-t border-zinc-700/50 p-4">
                <div className="text-xs text-zinc-500 text-center">
                  {getActiveFilterCount()} filter{getActiveFilterCount() !== 1 ? 's' : ''} applied
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default EraFilter;