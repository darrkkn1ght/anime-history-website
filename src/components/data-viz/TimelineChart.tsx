'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Calendar, PlayCircle, Star, Users, Zap, Film, Tv, Smartphone } from 'lucide-react';

// Timeline era data with historical milestones
const timelineData = [
  {
    era: 'Origins',
    period: '1900s-1930s',
    years: [1907, 1917, 1923, 1928],
    color: '#8B4513',
    bgColor: 'from-amber-900/20 to-yellow-800/20',
    icon: Film,
    milestones: [
      {
        year: 1907,
        title: 'Katsudō Shashin',
        description: 'First Japanese animated film',
        significance: 'Birth of anime',
        type: 'creation'
      },
      {
        year: 1917,
        title: 'Namakura Gatana',
        description: 'Professional anime production begins',
        significance: 'Industry foundation',
        type: 'milestone'
      },
      {
        year: 1923,
        title: 'Great Kantō Earthquake',
        description: 'Animation studios destroyed, industry reset',
        significance: 'Major setback',
        type: 'event'
      },
      {
        year: 1928,
        title: 'Sound Era Begins',
        description: 'First experiments with synchronized sound',
        significance: 'Technical evolution',
        type: 'innovation'
      }
    ]
  },
  {
    era: 'Foundation',
    period: '1950s-1960s',
    years: [1958, 1961, 1963, 1968],
    color: '#4169E1',
    bgColor: 'from-blue-900/20 to-indigo-800/20',
    icon: Tv,
    milestones: [
      {
        year: 1958,
        title: 'Hakujaden (White Snake)',
        description: 'First color anime feature film',
        significance: 'Technical breakthrough',
        type: 'creation'
      },
      {
        year: 1961,
        title: 'Mushi Production Founded',
        description: 'Osamu Tezuka establishes iconic studio',
        significance: 'Studio system begins',
        type: 'milestone'
      },
      {
        year: 1963,
        title: 'Astro Boy TV Series',
        description: 'First weekly animated TV series',
        significance: 'TV anime revolution',
        type: 'innovation'
      },
      {
        year: 1968,
        title: 'Speed Racer International',
        description: 'First anime exported globally',
        significance: 'Global expansion',
        type: 'milestone'
      }
    ]
  },
  {
    era: 'Expansion',
    period: '1970s-1980s',
    years: [1974, 1979, 1984, 1988],
    color: '#FF6347',
    bgColor: 'from-red-900/20 to-orange-800/20',
    icon: Star,
    milestones: [
      {
        year: 1974,
        title: 'Space Battleship Yamato',
        description: 'Adult-oriented anime gains popularity',
        significance: 'Mature themes',
        type: 'creation'
      },
      {
        year: 1979,
        title: 'Mobile Suit Gundam',
        description: 'Real robot mecha genre established',
        significance: 'Genre innovation',
        type: 'innovation'
      },
      {
        year: 1984,
        title: 'Nausicaä of the Valley',
        description: 'Miyazaki\'s environmental masterpiece',
        significance: 'Artistic maturity',
        type: 'creation'
      },
      {
        year: 1988,
        title: 'Akira',
        description: 'International anime recognition',
        significance: 'Global breakthrough',
        type: 'milestone'
      }
    ]
  },
  {
    era: 'Golden Age',
    period: '1990s-2000s',
    years: [1995, 1997, 1999, 2001],
    color: '#FFD700',
    bgColor: 'from-yellow-900/20 to-amber-800/20',
    icon: Zap,
    milestones: [
      {
        year: 1995,
        title: 'Neon Genesis Evangelion',
        description: 'Psychological complexity reaches new heights',
        significance: 'Cultural phenomenon',
        type: 'creation'
      },
      {
        year: 1997,
        title: 'Princess Mononoke',
        description: 'Record-breaking box office success',
        significance: 'Mainstream acceptance',
        type: 'milestone'
      },
      {
        year: 1999,
        title: 'One Piece Begins',
        description: 'Long-running series model perfected',
        significance: 'Franchise evolution',
        type: 'innovation'
      },
      {
        year: 2001,
        title: 'Spirited Away',
        description: 'Academy Award winner',
        significance: 'International acclaim',
        type: 'milestone'
      }
    ]
  },
  {
    era: 'Digital Age',
    period: '2010s',
    years: [2011, 2013, 2016, 2019],
    color: '#00CED1',
    bgColor: 'from-cyan-900/20 to-teal-800/20',
    icon: PlayCircle,
    milestones: [
      {
        year: 2011,
        title: 'Crunchyroll Expansion',
        description: 'Legal streaming transforms distribution',
        significance: 'Digital revolution',
        type: 'innovation'
      },
      {
        year: 2013,
        title: 'Attack on Titan',
        description: 'Global social media phenomenon',
        significance: 'Viral culture',
        type: 'creation'
      },
      {
        year: 2016,
        title: 'Your Name',
        description: 'Highest-grossing anime film',
        significance: 'Box office record',
        type: 'milestone'
      },
      {
        year: 2019,
        title: 'Demon Slayer Movie',
        description: 'Pandemic-era theatrical success',
        significance: 'Resilient market',
        type: 'milestone'
      }
    ]
  },
  {
    era: 'Current Era',
    period: '2020s-2025',
    years: [2020, 2022, 2024, 2025],
    color: '#FF69B4',
    bgColor: 'from-pink-900/20 to-purple-800/20',
    icon: Smartphone,
    milestones: [
      {
        year: 2020,
        title: 'COVID-19 Streaming Boom',
        description: 'Anime viewership increases 1000%',
        significance: 'Pandemic growth',
        type: 'event'
      },
      {
        year: 2022,
        title: 'Netflix Anime Strategy',
        description: '$500M investment in original content',
        significance: 'Platform competition',
        type: 'milestone'
      },
      {
        year: 2024,
        title: 'AI Animation Tools',
        description: 'Machine learning transforms production',
        significance: 'Tech disruption',
        type: 'innovation'
      },
      {
        year: 2025,
        title: 'Global Market Peak',
        description: '$34B industry valuation',
        significance: 'Economic milestone',
        type: 'milestone'
      }
    ]
  }
];

const getMilestoneIcon = (type: string) => {
  switch (type) {
    case 'creation': return <Star className="w-4 h-4" />;
    case 'milestone': return <Calendar className="w-4 h-4" />;
    case 'innovation': return <Zap className="w-4 h-4" />;
    case 'event': return <Users className="w-4 h-4" />;
    default: return <PlayCircle className="w-4 h-4" />;
  }
};

const getMilestoneColor = (type: string) => {
  switch (type) {
    case 'creation': return 'from-yellow-500 to-orange-500';
    case 'milestone': return 'from-green-500 to-teal-500';
    case 'innovation': return 'from-blue-500 to-purple-500';
    case 'event': return 'from-red-500 to-pink-500';
    default: return 'from-gray-500 to-gray-600';
  }
};

interface TimelineChartProps {
  className?: string;
}

const TimelineChart: React.FC<TimelineChartProps> = ({ className = '' }) => {
  const [activeEra, setActiveEra] = useState<number | null>(null);
  const [visibleMilestones, setVisibleMilestones] = useState<Set<number>>(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleMilestones(prev => new Set([...prev, index]));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3,
      rootMargin: '50px'
    });

    const milestoneElements = document.querySelectorAll('[data-milestone]');
    milestoneElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black rounded-2xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_50%)]" />
      
      {/* Content Container */}
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white">
              Anime History Timeline
            </h2>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Journey through 125+ years of animation evolution, from silent films to global entertainment empire
          </p>
          
          {/* Progress Indicator */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="bg-white/10 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-out"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
            <div className="text-sm text-gray-400 mt-2">
              Timeline Progress: {Math.round(scrollProgress * 100)}%
            </div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/20" />
          
          {/* Era Sections */}
          <div className="space-y-16">
            {timelineData.map((era, eraIndex) => (
              <div 
                key={era.era}
                className={`relative transition-all duration-1000 ${
                  visibleMilestones.has(eraIndex) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                data-milestone
                data-index={eraIndex}
              >
                {/* Era Header */}
                <div 
                  className={`relative bg-gradient-to-r ${era.bgColor} backdrop-blur-sm rounded-2xl p-6 border border-white/10 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
                  onClick={() => setActiveEra(activeEra === eraIndex ? null : eraIndex)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div 
                        className="p-4 rounded-full shadow-lg"
                        style={{ backgroundColor: era.color }}
                      >
                        <era.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {era.era} Era
                        </h3>
                        <p className="text-gray-300 text-lg">{era.period}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">
                        {era.milestones.length}
                      </div>
                      <div className="text-sm text-gray-400">Milestones</div>
                    </div>
                  </div>

                  {/* Era Timeline Dots */}
                  <div className="mt-6 flex justify-center">
                    <div className="flex items-center gap-2">
                      {era.years.map((year, yearIndex) => (
                        <div key={year} className="flex flex-col items-center">
                          <div 
                            className="w-4 h-4 rounded-full border-2 border-white shadow-lg transition-all duration-300 hover:scale-125"
                            style={{ backgroundColor: era.color }}
                          />
                          <div className="text-xs text-gray-300 mt-1 font-mono">
                            {year}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Expanded Milestones */}
                {activeEra === eraIndex && (
                  <div className="mt-6 space-y-4 animate-fadeIn">
                    {era.milestones.map((milestone, milestoneIndex) => (
                      <div 
                        key={milestone.year}
                        className={`flex items-start gap-4 p-6 bg-gradient-to-r from-white/5 to-white/0 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-500`}
                        style={{ 
                          animationDelay: `${milestoneIndex * 100}ms`,
                          transform: activeEra === eraIndex ? 'translateX(0)' : 'translateX(-20px)'
                        }}
                      >
                        {/* Year Badge */}
                        <div className="flex-shrink-0">
                          <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                            <div className="text-lg font-bold text-white font-mono">
                              {milestone.year}
                            </div>
                          </div>
                        </div>

                        {/* Milestone Content */}
                        <div className="flex-grow">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="text-xl font-semibold text-white mb-1">
                                {milestone.title}
                              </h4>
                              <p className="text-gray-300">
                                {milestone.description}
                              </p>
                            </div>
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${getMilestoneColor(milestone.type)}`}>
                              {getMilestoneIcon(milestone.type)}
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="px-3 py-1 bg-white/10 rounded-full">
                              <span className="text-sm text-gray-300 capitalize">
                                {milestone.type}
                              </span>
                            </div>
                            <div className="text-sm text-yellow-400 font-medium">
                              {milestone.significance}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Era Connection Line */}
                {eraIndex < timelineData.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-8">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Timeline Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Years', value: '125+', icon: Calendar },
              { label: 'Major Eras', value: '6', icon: Star },
              { label: 'Key Milestones', value: '24', icon: Zap },
              { label: 'Global Impact', value: '∞', icon: Users }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Helper */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm mb-4">
              Click on any era to explore its milestones in detail
            </p>
            <div className="flex justify-center gap-2">
              {timelineData.map((era, index) => (
                <button
                  key={era.era}
                  onClick={() => setActiveEra(activeEra === index ? null : index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeEra === index 
                      ? 'scale-150 shadow-lg' 
                      : 'hover:scale-125'
                  }`}
                  style={{ 
                    backgroundColor: era.color,
                    boxShadow: activeEra === index ? `0 0 20px ${era.color}40` : 'none'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default TimelineChart;