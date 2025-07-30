'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Pause, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onScrollToTimeline?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToTimeline }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentText, setCurrentText] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 0.9]);

  // Animated text sequences
  const heroTexts = [
    "From Silent Films to Global Phenomenon",
    "100+ Years of Japanese Animation",
    "A Journey Through Time and Art",
    "The Evolution Continues..."
  ];

  // Auto-cycling text animation
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, heroTexts.length]);

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section 
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-[120%]"
      >
        {/* Film Grain Texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-blue-900/20 opacity-60" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </motion.div>

      {/* Scroll Overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-black pointer-events-none"
      />

      {/* Main Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
      >
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-amber-300 font-serif tracking-tight leading-none">
            ANIME
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 1 }}
            className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto my-4"
          />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white/90 tracking-wide">
            HISTORY
          </h2>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.div
          key={currentText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="mb-12 h-16 flex items-center"
        >
          <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl">
            {heroTexts[currentText]}
          </p>
        </motion.div>

        {/* Interactive Controls */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex items-center gap-8 mb-16"
        >
          {/* Play/Pause Button */}
          <motion.button
            onClick={handlePlayToggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold rounded-full hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 shadow-lg shadow-yellow-400/25"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            <span className="hidden sm:inline">
              {isPlaying ? 'Pause' : 'Play'} Experience
            </span>
          </motion.button>

          {/* Timeline Dots */}
          <div className="flex gap-2">
            {heroTexts.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentText(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentText 
                    ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Era Preview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16 max-w-6xl"
        >
          {[
            { era: '1900s', label: 'Origins', color: 'from-amber-600 to-amber-800' },
            { era: '1960s', label: 'Foundation', color: 'from-blue-600 to-blue-800' },
            { era: '1980s', label: 'Expansion', color: 'from-purple-600 to-purple-800' },
            { era: '1990s', label: 'Golden Age', color: 'from-red-600 to-red-800' },
            { era: '2010s', label: 'Digital Age', color: 'from-green-600 to-green-800' },
            { era: '2020s', label: 'Current Era', color: 'from-cyan-600 to-cyan-800' },
          ].map((item, index) => (
            <motion.div
              key={item.era}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`p-4 rounded-lg bg-gradient-to-br ${item.color} backdrop-blur-sm border border-white/10 cursor-pointer`}
            >
              <div className="text-lg font-bold text-white">{item.era}</div>
              <div className="text-sm text-white/80">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={onScrollToTimeline}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors group"
        >
          <span className="text-sm font-light tracking-wide">Begin Journey</span>
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="p-2 rounded-full border-2 border-white/30 group-hover:border-yellow-400 transition-colors"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Film Strip Effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black via-transparent to-transparent opacity-50" />
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-black via-transparent to-transparent opacity-50" />
        
        {/* Sprocket holes effect */}
        <div className="absolute top-0 left-2 w-4 h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-4 bg-black/50 mb-6 rounded-sm"
              style={{ marginTop: i === 0 ? '2rem' : '0' }}
            />
          ))}
        </div>
        <div className="absolute top-0 right-2 w-4 h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-4 bg-black/50 mb-6 rounded-sm"
              style={{ marginTop: i === 0 ? '2rem' : '0' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;