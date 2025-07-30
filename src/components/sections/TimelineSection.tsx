'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Calendar, TrendingUp, Users, Award, ChevronRight, Play } from 'lucide-react';

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  significance: string;
  category: 'milestone' | 'technology' | 'cultural' | 'economic';
  era: string;
}

interface TimelineSectionProps {
  activeEra?: string;
  onEraChange?: (era: string) => void;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ 
  activeEra, 
  onEraChange 
}) => {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [viewMode, setViewMode] = useState<'timeline' | 'grid'>('timeline');
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const timelineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Timeline data
  const timelineEvents: TimelineEvent[] = [
    {
      year: 1907,
      title: "The Dull Sword (Namakura Gatana)",
      description: "Japan's first animated film by Jun'ichi Kōuchi",
      significance: "Birth of anime as an art form",
      category: 'milestone',
      era: 'origins'
    },
    {
      year: 1917,
      title: "The Imokawa Mukuzo Genkanban no Maki",
      description: "First commercial anime by Ōten Shimokawa",
      significance: "Commercial anime industry begins",
      category: 'economic',
      era: 'origins'
    },
    {
      year: 1963,
      title: "Astro Boy TV Series",
      description: "First anime TV series by Osamu Tezuka",
      significance: "Television anime format established",
      category: 'milestone',
      era: 'foundation'
    },
    {
      year: 1975,
      title: "Space Battleship Yamato",
      description: "First space opera anime series",
      significance: "Adult-oriented anime emerges",
      category: 'cultural',
      era: 'expansion'
    },
    {
      year: 1988,
      title: "Akira Movie Release",
      description: "Groundbreaking cyberpunk anime film",
      significance: "International recognition begins",
      category: 'milestone',
      era: 'expansion'
    },
    {
      year: 1995,
      title: "Neon Genesis Evangelion",
      description: "Psychological mecha anime series",
      significance: "Anime as serious artistic medium",
      category: 'cultural',
      era: 'golden-age'
    },
    {
      year: 1997,
      title: "Princess Mononoke",
      description: "Studio Ghibli's environmental epic",
      significance: "Anime enters mainstream cinema",
      category: 'milestone',
      era: 'golden-age'
    },
    {
      year: 2013,
      title: "Attack on Titan",
      description: "Global streaming phenomenon begins",
      significance: "Digital distribution transforms industry",
      category: 'technology',
      era: 'digital-age'
    },
    {
      year: 2020,
      title: "Demon Slayer Movie",
      description: "Highest-grossing anime film ever",
      significance: "Pandemic era box office dominance",
      category: 'economic',
      era: 'current-era'
    },
    {
      year: 2024,
      title: "Dandadan Global Success",
      description: "Multi-platform simultaneous release",
      significance: "New era of global anime production",
      category: 'technology',
      era: 'current-era'
    }
  ];

  const eras = [
    { 
      id: 'origins', 
      name: 'Origins', 
      period: '1900s-1930s', 
      color: 'from-amber-500 to-amber-700',
      bgColor: 'bg-amber-500/10'
    },
    { 
      id: 'foundation', 
      name: 'Foundation', 
      period: '1950s-1960s', 
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-500/10'
    },
    { 
      id: 'expansion', 
      name: 'Expansion', 
      period: '1970s-1980s', 
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-500/10'
    },
    { 
      id: 'golden-age', 
      name: 'Golden Age', 
      period: '1990s-2000s', 
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-red-500/10'
    },
    { 
      id: 'digital-age', 
      name: 'Digital Age', 
      period: '2010s', 
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-500/10'
    },
    { 
      id: 'current-era', 
      name: 'Current Era', 
      period: '2020s-2025', 
      color: 'from-cyan-500 to-cyan-700',
      bgColor: 'bg-cyan-500/10'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'milestone': return <Award className="w-4 h-4" />;
      case 'technology': return <TrendingUp className="w-4 h-4" />;
      case 'cultural': return <Users className="w-4 h-4" />;
      case 'economic': return <Calendar className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'milestone': return 'text-yellow-400 bg-yellow-400/20';
      case 'technology': return 'text-blue-400 bg-blue-400/20';
      case 'cultural': return 'text-purple-400 bg-purple-400/20';
      case 'economic': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/ui/backgrounds/film-grain-texture.jpg')] opacity-5" />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '20%']) }}
          className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-900/5 to-transparent"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-6">
            Timeline
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Journey through the pivotal moments that shaped anime from silent films 
            to the global phenomenon we know today.
          </p>
        </motion.div>

        {/* Era Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {eras.map((era, index) => (
            <motion.button
              key={era.id}
              onClick={() => onEraChange?.(era.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                activeEra === era.id
                  ? `bg-gradient-to-r ${era.color} text-white border-transparent shadow-lg`
                  : 'text-gray-300 border-gray-600 hover:border-gray-400 hover:text-white'
              }`}
            >
              <div className="text-sm font-semibold">{era.name}</div>
              <div className="text-xs opacity-80">{era.period}</div>
            </motion.button>
          ))}
        </motion.div>

        {/* View Mode Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-800/50 p-1 rounded-lg backdrop-blur-sm border border-gray-700">
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-4 py-2 rounded-md transition-all ${
                viewMode === 'timeline'
                  ? 'bg-cyan-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Timeline View
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-md transition-all ${
                viewMode === 'grid'
                  ? 'bg-cyan-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Grid View
            </button>
          </div>
        </motion.div>

        {/* Timeline Content */}
        <div className="relative">
          {viewMode === 'timeline' ? (
            <div ref={timelineRef} className="relative">
              {/* Progress Line */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full"
                style={{ height: timelineProgress }}
                initial={{ height: 0 }}
                animate={{ height: '100%' }}
                transition={{ duration: 2, delay: 1 }}
              />

              {/* Timeline Events */}
              <div className="space-y-16">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 * index }}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Event Card */}
                    <div className="w-5/12">
                      <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        onClick={() => setSelectedEvent(event)}
                        className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 cursor-pointer hover:border-cyan-500/50 transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-2 rounded-lg ${getCategoryColor(event.category)}`}>
                            {getCategoryIcon(event.category)}
                          </div>
                          <div className="text-2xl font-bold text-cyan-400">
                            {event.year}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {event.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-3 leading-relaxed">
                          {event.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-cyan-400 font-medium">
                            {event.significance}
                          </span>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Timeline Node */}
                    <div className="flex-shrink-0 w-2/12 flex justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg shadow-cyan-500/25 relative z-10"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse opacity-50" />
                      </motion.div>
                    </div>

                    {/* Spacer */}
                    <div className="w-5/12" />
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            /* Grid View */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  onClick={() => setSelectedEvent(event)}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 cursor-pointer hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${getCategoryColor(event.category)}`}>
                      {getCategoryIcon(event.category)}
                    </div>
                    <div className="text-2xl font-bold text-cyan-400">
                      {event.year}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-3 leading-relaxed line-clamp-3">
                    {event.description}
                  </p>

                  <div className="text-xs text-cyan-400 font-medium">
                    {event.significance}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Event Modal */}
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl ${getCategoryColor(selectedEvent.category)}`}>
                  {getCategoryIcon(selectedEvent.category)}
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">
                    {selectedEvent.year}
                  </div>
                  <div className="text-sm text-gray-400 capitalize">
                    {selectedEvent.category} Event
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">
                {selectedEvent.title}
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                {selectedEvent.description}
              </p>

              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  Historical Significance
                </h3>
                <p className="text-gray-200">
                  {selectedEvent.significance}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  Era: <span className="text-cyan-400 capitalize">{selectedEvent.era.replace('-', ' ')}</span>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Years of History', value: '125+', icon: <Calendar className="w-6 h-6" /> },
            { label: 'Major Milestones', value: '50+', icon: <Award className="w-6 h-6" /> },
            { label: 'Global Reach', value: '190+', icon: <Users className="w-6 h-6" /> },
            { label: 'Market Growth', value: '400%', icon: <TrendingUp className="w-6 h-6" /> },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex justify-center mb-3 text-cyan-400">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-full text-gray-300">
            <Play className="w-4 h-4" />
            <span className="text-sm">Scroll down to explore each era in detail</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Timeline Progress */}
      <motion.div
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full p-3">
          <div className="w-2 h-32 bg-gray-700 rounded-full relative overflow-hidden">
            <motion.div
              className="absolute bottom-0 w-full bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full"
              style={{ height: timelineProgress }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TimelineSection;