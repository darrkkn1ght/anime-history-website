'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Play, Pause } from 'lucide-react';

interface HeaderProps {
  currentEra?: string;
  isScrolled?: boolean;
  onMenuToggle?: () => void;
  isMenuOpen?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  currentEra = "Origins", 
  isScrolled = false, 
  onMenuToggle,
  isMenuOpen = false 
}) => {
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  if (!mounted) return null;

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
    >
      {/* Film grain overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo Section */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/25">
                <motion.div
                  className="w-6 h-6 lg:w-7 lg:h-7 border-2 border-white rounded-full"
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 w-10 h-10 lg:w-12 lg:h-12 bg-yellow-400 rounded-full blur-md opacity-30 animate-pulse" />
            </div>
            
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Anime History
              </h1>
              <p className="text-xs lg:text-sm text-gray-400 font-medium tracking-wide">
                1900 - 2025
              </p>
            </div>
          </motion.div>

          {/* Current Era Indicator */}
          <motion.div 
            className="hidden md:flex items-center space-x-4 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-300">
              Current: <span className="text-white">{currentEra} Era</span>
            </span>
          </motion.div>

          {/* Controls Section */}
          <div className="flex items-center space-x-3">
            
            {/* Play/Pause Control */}
            <motion.button
              onClick={handlePlayToggle}
              className="hidden lg:flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isPlaying ? (
                  <motion.div
                    key="pause"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: -180 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Pause className="w-4 h-4 text-white group-hover:text-yellow-400 transition-colors" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="play"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Play className="w-4 h-4 text-white group-hover:text-yellow-400 transition-colors ml-0.5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Menu Toggle */}
            <motion.button
              onClick={onMenuToggle}
              className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 group relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-white group-hover:text-yellow-400 transition-colors" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ scale: 0, rotate: 90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-white group-hover:text-yellow-400 transition-colors" />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Notification dot */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-75" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full" />
            </motion.button>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-blue-400 to-purple-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.4, 0.0, 0.2, 1] }}
          style={{ transformOrigin: 'left' }}
        />
      </div>

      {/* Cinematic lens flare effect */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-radial from-yellow-400/20 to-transparent rounded-full blur-2xl pointer-events-none"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.header>
  );
};

export default Header;