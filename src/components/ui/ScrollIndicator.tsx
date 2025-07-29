'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Film, Clock } from 'lucide-react';
import { clsx } from 'clsx';

interface ScrollIndicatorProps {
  /** Position of the indicator */
  position?: 'top' | 'bottom' | 'side';
  /** Visual variant */
  variant?: 'minimal' | 'cinematic' | 'timeline' | 'era';
  /** Show percentage text */
  showPercentage?: boolean;
  /** Show current era name */
  showEraName?: boolean;
  /** Current era information */
  currentEra?: {
    name: string;
    color: string;
    period: string;
  };
  /** Custom className */
  className?: string;
  /** Show back to top button when near bottom */
  showBackToTop?: boolean;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  position = 'top',
  variant = 'minimal',
  showPercentage = false,
  showEraName = false,
  currentEra,
  className,
  showBackToTop = true
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      
      setScrollProgress(scrolled);
      setIsVisible(scrolled > 5);
      setShowBackButton(scrolled > 80 && showBackToTop);
    };

    window.addEventListener('scroll', calculateScrollProgress);
    calculateScrollProgress();

    return () => window.removeEventListener('scroll', calculateScrollProgress);
  }, [showBackToTop]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Position classes
  const positionClasses = {
    top: 'fixed top-0 left-0 right-0 z-50',
    bottom: 'fixed bottom-0 left-0 right-0 z-50',
    side: 'fixed top-1/2 -translate-y-1/2 right-4 z-50'
  };

  // Variant styles
  const getVariantStyles = () => {
    switch (variant) {
      case 'minimal':
        return {
          container: 'bg-black/20 backdrop-blur-sm',
          fill: 'bg-gradient-to-r from-amber-400 to-yellow-500',
          height: 'h-1'
        };
      case 'cinematic':
        return {
          container: 'bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-md',
          fill: 'bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600',
          height: 'h-2'
        };
      case 'timeline':
        return {
          container: 'bg-black/30 backdrop-blur-sm border-t border-amber-500/20',
          fill: 'bg-gradient-to-r from-amber-400 to-yellow-500',
          height: 'h-1.5'
        };
      case 'era':
        return {
          container: 'bg-black/40 backdrop-blur-md',
          fill: currentEra ? `bg-gradient-to-r from-${currentEra.color}-400 to-${currentEra.color}-600` : 'bg-gradient-to-r from-purple-400 to-purple-600',
          height: 'h-2'
        };
      default:
        return {
          container: 'bg-black/20 backdrop-blur-sm',
          fill: 'bg-gradient-to-r from-amber-400 to-yellow-500',
          height: 'h-1'
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <>
      {/* Main Scroll Indicator */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={clsx(positionClasses[position], className)}
            initial={{ opacity: 0, y: position === 'top' ? -20 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: position === 'top' ? -20 : 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Era Information Bar (for timeline/era variants) */}
            {(variant === 'timeline' || variant === 'era') && showEraName && currentEra && (
              <div className="px-4 py-2 bg-black/50 backdrop-blur-md border-b border-amber-500/20">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Film className="w-4 h-4 text-amber-400" />
                    <span className="text-white font-medium">{currentEra.name}</span>
                    <span className="text-gray-400">({currentEra.period})</span>
                  </div>
                  {showPercentage && (
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span className="text-amber-400 font-mono">
                        {Math.round(scrollProgress)}%
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Progress Bar */}
            <div className={clsx('relative overflow-hidden', variantStyles.container, variantStyles.height)}>
              <motion.div
                className={clsx('h-full', variantStyles.fill)}
                initial={{ width: 0 }}
                animate={{ width: `${scrollProgress}%` }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
              >
                {/* Animated glow effect */}
                {variant === 'cinematic' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/40 via-yellow-500/40 to-amber-600/40 blur-sm" />
                )}
                
                {/* Film grain texture overlay */}
                {variant === 'cinematic' && (
                  <div 
                    className="absolute inset-0 opacity-20 mix-blend-multiply"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      backgroundSize: '128px 128px'
                    }}
                  />
                )}
              </motion.div>

              {/* Milestone markers for timeline variant */}
              {variant === 'timeline' && (
                <div className="absolute inset-y-0 left-0 right-0">
                  {[16.67, 33.33, 50, 66.67, 83.33].map((position) => (
                    <div
                      key={position}
                      className="absolute top-0 bottom-0 w-px bg-amber-500/40"
                      style={{ left: `${position}%` }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Minimal percentage display */}
            {showPercentage && variant === 'minimal' && (
              <div className="absolute right-4" style={{ top: '50%', transform: 'translateY(-50%)' }}>
                <span className="text-xs text-amber-400 font-mono bg-black/50 px-2 py-1 rounded">
                  {Math.round(scrollProgress)}%
                </span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Side Scroll Indicator (for side position) */}
      {position === 'side' && (
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="fixed right-4 top-1/2 -translate-y-1/2 z-50 w-2 h-32 bg-black/20 backdrop-blur-sm rounded-full overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <motion.div
                className="w-full bg-gradient-to-t from-amber-400 to-yellow-500 rounded-full"
                initial={{ height: 0 }}
                animate={{ height: `${scrollProgress}%` }}
                transition={{ duration: 0.1 }}
                style={{ transformOrigin: 'bottom' }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackButton && (
          <motion.button
            className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-black rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 group"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp className="w-5 h-5 group-hover:animate-bounce" />
            
            {/* Cinematic glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity -z-10" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollIndicator;