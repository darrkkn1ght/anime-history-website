'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Clock, Calendar, Users, TrendingUp, Sparkles, Zap } from 'lucide-react';

interface Era {
  id: string;
  name: string;
  period: string;
  description: string;
  color: string;
  icon: React.ReactNode;
  progress: number;
}

interface NavigationProps {
  isOpen: boolean;
  currentEra: string;
  onEraSelect: (eraId: string) => void;
  onClose: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isOpen,
  currentEra,
  onEraSelect,
  onClose
}) => {
  const [mounted, setMounted] = useState(false);
  const [hoveredEra, setHoveredEra] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const eras: Era[] = [
    {
      id: 'origins',
      name: 'Origins',
      period: '1900s - 1930s',
      description: 'Silent films and early animation experiments',
      color: 'from-amber-600 to-orange-700',
      icon: <Clock className="w-5 h-5" />,
      progress: 5
    },
    {
      id: 'foundation',
      name: 'Foundation',
      period: '1950s - 1960s',
      description: 'Birth of TV anime and Osamu Tezuka era',
      color: 'from-blue-600 to-indigo-700',
      icon: <Calendar className="w-5 h-5" />,
      progress: 25
    },
    {
      id: 'expansion',
      name: 'Expansion',
      period: '1970s - 1980s',
      description: 'Mecha boom and international recognition',
      color: 'from-purple-600 to-pink-700',
      icon: <TrendingUp className="w-5 h-5" />,
      progress: 45
    },
    {
      id: 'golden-age',
      name: 'Golden Age',
      period: '1990s - 2000s',
      description: 'Studio Ghibli and global anime phenomenon',
      color: 'from-green-600 to-emerald-700',
      icon: <Sparkles className="w-5 h-5" />,
      progress: 70
    },
    {
      id: 'digital-age',
      name: 'Digital Age',
      period: '2010s',
      description: 'Digital animation and streaming revolution',
      color: 'from-cyan-600 to-blue-700',
      icon: <Zap className="w-5 h-5" />,
      progress: 90
    },
    {
      id: 'current-era',
      name: 'Current Era',
      period: '2020s - 2025',
      description: 'Global dominance and cultural impact',
      color: 'from-yellow-500 to-orange-600',
      icon: <Users className="w-5 h-5" />,
      progress: 100
    }
  ];

  const handleEraClick = (eraId: string) => {
    onEraSelect(eraId);
    onClose();
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Navigation Panel */}
          <motion.nav
            className="fixed top-16 lg:top-20 right-4 w-80 max-w-[calc(100vw-2rem)] bg-black/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10">
              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Timeline Navigation</h2>
                  <p className="text-xs text-gray-400">Explore anime history</p>
                </div>
              </motion.div>
            </div>

            {/* Era List */}
            <div className="p-2 max-h-96 overflow-y-auto">
              {eras.map((era, index) => (
                <motion.button
                  key={era.id}
                  onClick={() => handleEraClick(era.id)}
                  onMouseEnter={() => setHoveredEra(era.id)}
                  onMouseLeave={() => setHoveredEra(null)}
                  className={`w-full p-4 mb-2 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                    currentEra === era.id
                      ? 'bg-white/10 border border-white/20'
                      : 'bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10'
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${era.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Progress bar */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${era.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${era.progress}%` }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
                    />
                  </div>

                  <div className="relative flex items-center space-x-3">
                    {/* Icon */}
                    <div className={`w-10 h-10 bg-gradient-to-br ${era.color} rounded-lg flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}>
                      {era.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-white group-hover:text-yellow-400 transition-colors">
                          {era.name}
                        </h3>
                        {currentEra === era.id && (
                          <motion.div
                            className="w-2 h-2 bg-yellow-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </div>
                      <p className="text-sm text-gray-400 mb-1">{era.period}</p>
                      <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                        {era.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <motion.div
                      className="text-gray-500 group-hover:text-white transition-colors"
                      animate={{ x: hoveredEra === era.id ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                    </motion.div>
                  </div>

                  {/* Hover effect */}
                  <AnimatePresence>
                    {hoveredEra === era.id && (
                      <motion.div
                        className="absolute inset-0 border border-white/20 rounded-xl pointer-events-none"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>

            {/* Footer */}
            <motion.div
              className="p-4 border-t border-white/10 bg-white/5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>125+ years of animation</span>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
                  <span>Live timeline</span>
                </div>
              </div>
            </motion.div>

            {/* Cinematic film strip effect */}
            <div className="absolute top-0 right-0 w-6 h-full bg-gradient-to-b from-yellow-400/20 via-transparent to-yellow-400/20 pointer-events-none">
              <div className="w-full h-2 bg-black/50 mb-2" />
              <div className="w-full h-2 bg-black/50 mb-2" />
              <div className="w-full h-2 bg-black/50 mb-2" />
              <div className="w-full h-2 bg-black/50 mb-2" />
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default Navigation;