'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Globe, TrendingUp, Users, DollarSign } from 'lucide-react';

interface CountryData {
  name: string;
  code: string;
  x: number; // SVG coordinates
  y: number;
  marketSize: number; // in millions USD
  fanbase: number; // in millions
  studios: number;
  streamingPlatforms: string[];
  popularGenres: string[];
  keyEvents: {
    year: number;
    event: string;
  }[];
  growthRate: number; // percentage
}

interface MapTimeframe {
  year: number;
  label: string;
  description: string;
  activeCountries: string[];
}

const WORLD_MAP_COUNTRIES: CountryData[] = [
  {
    name: 'Japan',
    code: 'JP',
    x: 850,
    y: 180,
    marketSize: 25000,
    fanbase: 127,
    studios: 430,
    streamingPlatforms: ['Crunchyroll', 'Funimation', 'Netflix', 'Amazon Prime'],
    popularGenres: ['Shonen', 'Slice of Life', 'Mecha', 'Romance'],
    keyEvents: [
      { year: 1963, event: 'Astro Boy TV debut' },
      { year: 1988, event: 'Akira international breakthrough' },
      { year: 1997, event: 'Pokemon global phenomenon' },
      { year: 2016, event: 'Your Name international success' }
    ],
    growthRate: 8.5
  },
  {
    name: 'United States',
    code: 'US',
    x: 200,
    y: 150,
    marketSize: 18500,
    fanbase: 44,
    studios: 15,
    streamingPlatforms: ['Crunchyroll', 'Funimation', 'Netflix', 'Hulu', 'Adult Swim'],
    popularGenres: ['Action', 'Adventure', 'Supernatural', 'Comedy'],
    keyEvents: [
      { year: 1997, event: 'Dragon Ball Z on Toonami' },
      { year: 2001, event: 'Adult Swim anime block' },
      { year: 2006, event: 'Crunchyroll founding' },
      { year: 2021, event: 'Demon Slayer box office success' }
    ],
    growthRate: 100.3
  },
  {
    name: 'China',
    code: 'CN',
    x: 750,
    y: 160,
    marketSize: 15200,
    fanbase: 400,
    studios: 180,
    streamingPlatforms: ['Bilibili', 'iQiyi', 'Tencent Video', 'Youku'],
    popularGenres: ['Donghua', 'Historical', 'Fantasy', 'Romance'],
    keyEvents: [
      { year: 2004, event: 'Bilibili launch' },
      { year: 2017, event: 'The King\'s Avatar success' },
      { year: 2019, event: 'Ne Zha breaks records' },
      { year: 2023, event: 'Government support for animation' }
    ],
    growthRate: 78.9
  },
  {
    name: 'South Korea',
    code: 'KR',
    x: 820,
    y: 180,
    marketSize: 3800,
    fanbase: 25,
    studios: 45,
    streamingPlatforms: ['Netflix', 'Wavve', 'Tving', 'Crunchyroll'],
    popularGenres: ['Webtoon Adaptations', 'Romance', 'Action', 'Thriller'],
    keyEvents: [
      { year: 2020, event: 'Tower of God Netflix debut' },
      { year: 2021, event: 'Squid Game anime announcement' },
      { year: 2022, event: 'Solo Leveling adaptation' },
      { year: 2024, event: 'Record webtoon investments' }
    ],
    growthRate: 156.7
  },
  {
    name: 'France',
    code: 'FR',
    x: 480,
    y: 130,
    marketSize: 2100,
    fanbase: 18,
    studios: 8,
    streamingPlatforms: ['Crunchyroll', 'Netflix', 'ADN', 'Wakanim'],
    popularGenres: ['Shonen', 'Adventure', 'Comedy', 'Slice of Life'],
    keyEvents: [
      { year: 1988, event: 'Club Dorothée anime boom' },
      { year: 2000, event: 'Mangas overtake BD sales' },
      { year: 2019, event: 'Netflix European expansion' },
      { year: 2023, event: 'Demon Slayer cinema success' }
    ],
    growthRate: 89.4
  },
  {
    name: 'Germany',
    code: 'DE',
    x: 500,
    y: 120,
    marketSize: 1800,
    fanbase: 12,
    studios: 3,
    streamingPlatforms: ['Crunchyroll', 'Netflix', 'ProSieben MAXX'],
    popularGenres: ['Action', 'Mecha', 'Thriller', 'Fantasy'],
    keyEvents: [
      { year: 1999, event: 'Dragon Ball on RTL II' },
      { year: 2003, event: 'Anime boom on VIVA' },
      { year: 2020, event: 'Record manga sales' },
      { year: 2024, event: 'First German anime convention sellout' }
    ],
    growthRate: 125.8
  },
  {
    name: 'Brazil',
    code: 'BR',
    x: 300,
    y: 320,
    marketSize: 1200,
    fanbase: 35,
    studios: 2,
    streamingPlatforms: ['Crunchyroll', 'Netflix', 'Funimation'],
    popularGenres: ['Shonen', 'Sports', 'Romance', 'Comedy'],
    keyEvents: [
      { year: 1994, event: 'Saint Seiya on Manchete' },
      { year: 2001, event: 'Dragon Ball Z phenomenon' },
      { year: 2019, event: 'Netflix Brazil anime push' },
      { year: 2023, event: 'Anime Film Festival success' }
    ],
    growthRate: 187.3
  },
  {
    name: 'India',
    code: 'IN',
    x: 720,
    y: 220,
    marketSize: 900,
    fanbase: 78,
    studios: 12,
    streamingPlatforms: ['Crunchyroll', 'Netflix', 'Funimation', 'MX Player'],
    popularGenres: ['Action', 'Adventure', 'Supernatural', 'Romance'],
    keyEvents: [
      { year: 2003, event: 'Dragon Ball Z on Cartoon Network' },
      { year: 2017, event: 'Netflix India expansion' },
      { year: 2021, event: 'Demon Slayer Hindi dub success' },
      { year: 2024, event: 'First Indian anime co-production' }
    ],
    growthRate: 234.6
  }
];

const TIMEFRAMES: MapTimeframe[] = [
  {
    year: 1980,
    label: 'Early Exports',
    description: 'Japan begins exporting anime to select markets',
    activeCountries: ['JP', 'US']
  },
  {
    year: 1990,
    label: 'Western Expansion',
    description: 'Anime gains foothold in Western markets',
    activeCountries: ['JP', 'US', 'FR', 'DE']
  },
  {
    year: 2000,
    label: 'Digital Revolution',
    description: 'Internet enables global anime distribution',
    activeCountries: ['JP', 'US', 'FR', 'DE', 'BR', 'KR']
  },
  {
    year: 2010,
    label: 'Streaming Era',
    description: 'Legal streaming platforms transform accessibility',
    activeCountries: ['JP', 'US', 'FR', 'DE', 'BR', 'KR', 'CN']
  },
  {
    year: 2025,
    label: 'Global Phenomenon',
    description: 'Anime becomes truly worldwide entertainment',
    activeCountries: ['JP', 'US', 'FR', 'DE', 'BR', 'KR', 'CN', 'IN']
  }
];

const GlobalReachMap: React.FC = () => {
  const [currentTimeframe, setCurrentTimeframe] = useState(4);
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const currentFrame = TIMEFRAMES[currentTimeframe];
  const activeCountries = useMemo(() => 
    WORLD_MAP_COUNTRIES.filter(country => 
      currentFrame.activeCountries.includes(country.code)
    ), [currentFrame]
  );

  // Auto-play animation
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTimeframe(prev => {
        if (prev >= TIMEFRAMES.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleCountryClick = (country: CountryData) => {
    setSelectedCountry(country);
  };

  const resetAnimation = () => {
    setCurrentTimeframe(0);
    setIsPlaying(false);
  };

  const togglePlayback = () => {
    if (currentTimeframe >= TIMEFRAMES.length - 1) {
      resetAnimation();
    }
    setIsPlaying(!isPlaying);
  };

  const totalMarketSize = activeCountries.reduce((sum, country) => sum + country.marketSize, 0);
  const totalFanbase = activeCountries.reduce((sum, country) => sum + country.fanbase, 0);

  return (
    <div className="w-full max-w-7xl mx-auto p-6 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <Globe className="text-blue-400" size={32} />
          Global Anime Expansion
        </h2>
        <p className="text-slate-300 text-lg">
          Interactive timeline of anime's worldwide growth and cultural impact
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlayback}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button
            onClick={resetAnimation}
            className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
          >
            <RotateCcw size={18} />
            Reset
          </button>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <DollarSign size={16} className="text-green-400" />
            <span className="text-slate-300">Market: ${totalMarketSize.toLocaleString()}M</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={16} className="text-purple-400" />
            <span className="text-slate-300">Fans: {totalFanbase}M</span>
          </div>
        </div>
      </div>

      {/* Timeline Scrubber */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-semibold text-white">{currentFrame.label}</span>
          <span className="text-slate-400">{currentFrame.year}</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${((currentTimeframe + 1) / TIMEFRAMES.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="flex justify-between">
          {TIMEFRAMES.map((frame, index) => (
            <button
              key={frame.year}
              onClick={() => setCurrentTimeframe(index)}
              className={`text-xs px-2 py-1 rounded transition-colors ${
                index === currentTimeframe
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {frame.year}
            </button>
          ))}
        </div>
        <p className="text-slate-300 mt-2 text-center">{currentFrame.description}</p>
      </div>

      {/* World Map SVG */}
      <div className="relative bg-slate-800/50 rounded-xl p-4 mb-6">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-auto max-h-96"
          style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
        >
          {/* World Map Outline (Simplified) */}
          <g fill="none" stroke="#475569" strokeWidth="1" opacity="0.3">
            {/* Continents simplified outlines */}
            <path d="M100,100 L400,80 L420,200 L350,300 L100,280 Z" /> {/* North America */}
            <path d="M200,280 L400,270 L380,400 L200,420 Z" /> {/* South America */}
            <path d="M420,80 L700,90 L720,300 L450,320 Z" /> {/* Europe/Africa */}
            <path d="M700,90 L950,100 L930,350 L720,340 Z" /> {/* Asia */}
            <path d="M750,350 L900,340 L920,450 L770,460 Z" /> {/* Australia */}
          </g>

          {/* Country Markers */}
          <AnimatePresence>
            {activeCountries.map((country, index) => (
              <motion.g
                key={country.code}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                {/* Market Size Circle */}
                <motion.circle
                  cx={country.x}
                  cy={country.y}
                  r={Math.max(8, Math.min(30, country.marketSize / 1000))}
                  fill="rgba(59, 130, 246, 0.2)"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  className="cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  onClick={() => handleCountryClick(country)}
                  onMouseEnter={() => setHoveredCountry(country.code)}
                  onMouseLeave={() => setHoveredCountry(null)}
                />
                
                {/* Growth Pulse Animation */}
                <motion.circle
                  cx={country.x}
                  cy={country.y}
                  r={Math.max(8, Math.min(30, country.marketSize / 1000))}
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="1"
                  opacity="0.6"
                  animate={{
                    r: [
                      Math.max(8, Math.min(30, country.marketSize / 1000)),
                      Math.max(12, Math.min(40, country.marketSize / 800))
                    ],
                    opacity: [0.6, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />

                {/* Country Label */}
                <text
                  x={country.x}
                  y={country.y - Math.max(12, Math.min(35, country.marketSize / 1000))}
                  textAnchor="middle"
                  className="fill-white text-xs font-medium"
                  style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))' }}
                >
                  {country.name}
                </text>

                {/* Hover Tooltip */}
                {hoveredCountry === country.code && (
                  <motion.g
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <rect
                      x={country.x - 60}
                      y={country.y + 40}
                      width="120"
                      height="60"
                      rx="8"
                      fill="rgba(15, 23, 42, 0.95)"
                      stroke="rgba(59, 130, 246, 0.5)"
                      strokeWidth="1"
                    />
                    <text x={country.x} y={country.y + 55} textAnchor="middle" className="fill-blue-400 text-xs font-semibold">
                      Market: ${country.marketSize}M
                    </text>
                    <text x={country.x} y={country.y + 70} textAnchor="middle" className="fill-purple-400 text-xs">
                      Fans: {country.fanbase}M
                    </text>
                    <text x={country.x} y={country.y + 85} textAnchor="middle" className="fill-green-400 text-xs">
                      Growth: +{country.growthRate}%
                    </text>
                  </motion.g>
                )}
              </motion.g>
            ))}
          </AnimatePresence>

          {/* Connection Lines Between Major Markets */}
          <AnimatePresence>
            {currentTimeframe >= 1 && (
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
              >
                {/* Japan to US */}
                <path
                  d={`M 850,180 Q 500,100 200,150`}
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
                {/* US to Europe */}
                <path
                  d={`M 200,150 Q 300,120 480,130`}
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
              </motion.g>
            )}
          </AnimatePresence>
        </svg>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800/50 rounded-lg p-4">
          <h4 className="font-semibold text-white mb-2">Circle Size</h4>
          <p className="text-sm text-slate-300">Represents market size in millions USD</p>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-4">
          <h4 className="font-semibold text-white mb-2">Growth Animation</h4>
          <p className="text-sm text-slate-300">Pulsing indicates active growth markets</p>
        </div>
        <div className="bg-slate-800/50 rounded-lg p-4">
          <h4 className="font-semibold text-white mb-2">Connection Lines</h4>
          <p className="text-sm text-slate-300">Show major distribution routes</p>
        </div>
      </div>

      {/* Country Detail Modal */}
      <AnimatePresence>
        {selectedCountry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCountry(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 rounded-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{selectedCountry.name}</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-lg p-3">
                    <div className="text-sm text-slate-400">Market Size</div>
                    <div className="text-xl font-bold text-green-400">${selectedCountry.marketSize}M</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3">
                    <div className="text-sm text-slate-400">Fanbase</div>
                    <div className="text-xl font-bold text-purple-400">{selectedCountry.fanbase}M</div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-sm text-slate-400 mb-2">Popular Genres</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedCountry.popularGenres.map((genre) => (
                      <span key={genre} className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs">
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-3">
                  <div className="text-sm text-slate-400 mb-2">Key Milestones</div>
                  <div className="space-y-2">
                    {selectedCountry.keyEvents.slice(0, 3).map((event) => (
                      <div key={event.year} className="flex items-start gap-2">
                        <span className="text-xs font-mono text-slate-500 mt-0.5">{event.year}</span>
                        <span className="text-sm text-slate-300">{event.event}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-green-400" />
                    <span className="text-sm text-slate-300">Growth Rate: +{selectedCountry.growthRate}%</span>
                  </div>
                  <button
                    onClick={() => setSelectedCountry(null)}
                    className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GlobalReachMap;