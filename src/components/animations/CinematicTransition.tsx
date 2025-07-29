'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ANIMATIONS } from '@/data/constants/animations';

interface CinematicTransitionProps {
  fromEra?: {
    id: string;
    name: string;
    period: string;
    color: string;
    theme: 'vintage' | 'classic' | 'modern' | 'digital' | 'future';
  };
  toEra: {
    id: string;
    name: string;
    period: string;
    color: string;
    theme: 'vintage' | 'classic' | 'modern' | 'digital' | 'future';
  };
  children: React.ReactNode;
  triggerOnScroll?: boolean;
  transitionType?: 'fade' | 'slide' | 'film-burn' | 'digital-glitch' | 'time-warp';
  duration?: number;
  className?: string;
}

const CinematicTransition: React.FC<CinematicTransitionProps> = ({
  fromEra,
  toEra,
  children,
  triggerOnScroll = true,
  transitionType = 'film-burn',
  duration = 2,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState<'enter' | 'transition' | 'exit'>('enter');
  const isInView = useInView(containerRef, { 
    amount: 0.3
  });

  // Auto-trigger transition when element comes into view
  useEffect(() => {
    if (triggerOnScroll && isInView && !isTransitioning) {
      setIsTransitioning(true);
      
      // Transition phases
      setTimeout(() => setTransitionPhase('transition'), 100);
      setTimeout(() => setTransitionPhase('exit'), duration * 500);
      setTimeout(() => {
        setIsTransitioning(false);
        setTransitionPhase('enter');
      }, duration * 1000);
    }
  }, [isInView, triggerOnScroll, duration, isTransitioning]);

  // Theme-based background patterns
  const getThemePattern = (theme: string) => {
    switch (theme) {
      case 'vintage':
        return 'radial-gradient(circle at center, rgba(139,69,19,0.3) 0%, rgba(244,228,188,0.1) 100%)';
      case 'classic':
        return 'linear-gradient(45deg, rgba(255,215,0,0.2) 0%, rgba(255,140,0,0.1) 100%)';
      case 'modern':
        return 'linear-gradient(135deg, rgba(0,212,255,0.2) 0%, rgba(0,128,255,0.1) 100%)';
      case 'digital':
        return 'linear-gradient(90deg, rgba(255,107,107,0.2) 0%, rgba(78,205,196,0.1) 100%)';
      case 'future':
        return 'radial-gradient(ellipse at center, rgba(138,43,226,0.3) 0%, rgba(0,255,127,0.1) 100%)';
      default:
        return 'transparent';
    }
  };

  // Film grain overlay
  const FilmGrain = () => (
    <motion.div
      className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundSize: '256px 256px'
      }}
      animate={{
        x: [0, -256, 0],
        y: [0, -256, 0]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );

  // Scanlines effect
  const Scanlines = () => (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
      }}
      animate={{
        y: [0, -4, 0]
      }}
      transition={{
        duration: 0.1,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );

  // Transition effect variants
  const transitionVariants = {
    fade: {
      enter: { opacity: 0 },
      transition: { opacity: 1 },
      exit: { opacity: 0 }
    },
    slide: {
      enter: { x: '100%', opacity: 0 },
      transition: { x: 0, opacity: 1 },
      exit: { x: '-100%', opacity: 0 }
    },
    'film-burn': {
      enter: { 
        scale: 1.1, 
        opacity: 0,
        filter: 'brightness(0) contrast(2) sepia(1) hue-rotate(30deg)'
      },
      transition: { 
        scale: 1, 
        opacity: 1,
        filter: 'brightness(1) contrast(1) sepia(0) hue-rotate(0deg)'
      },
      exit: { 
        scale: 0.9, 
        opacity: 0,
        filter: 'brightness(2) contrast(3) sepia(0.5) hue-rotate(60deg)'
      }
    },
    'digital-glitch': {
      enter: { 
        x: [0, -5, 5, 0], 
        opacity: 0,
        filter: 'hue-rotate(0deg) saturate(1)'
      },
      transition: { 
        x: 0, 
        opacity: 1,
        filter: 'hue-rotate(180deg) saturate(1.5)'
      },
      exit: { 
        x: [0, 10, -10, 0], 
        opacity: 0,
        filter: 'hue-rotate(360deg) saturate(2)'
      }
    },
    'time-warp': {
      enter: { 
        scale: 0.8, 
        rotate: -5, 
        opacity: 0,
        y: 50
      },
      transition: { 
        scale: 1, 
        rotate: 0, 
        opacity: 1,
        y: 0
      },
      exit: { 
        scale: 1.2, 
        rotate: 5, 
        opacity: 0,
        y: -50
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Background Era Transition */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isTransitioning ? 1 : 0,
          background: fromEra ? getThemePattern(fromEra.theme) : getThemePattern(toEra.theme)
        }}
        transition={{ duration: duration * 0.3 }}
      />

      {/* Film Effects Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="absolute inset-0 -z-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration * 0.2 }}
          >
            <FilmGrain />
            {toEra.theme === 'digital' && <Scanlines />}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Era Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <>
            {/* From Era Fade Out */}
            {fromEra && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-white z-10"
                style={{ 
                  background: `linear-gradient(45deg, ${fromEra.color}20, transparent)` 
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: duration * 0.4 }}
              >
                <div className="text-center backdrop-blur-sm bg-black/30 px-8 py-4 rounded-lg border border-white/20">
                  <motion.h3 
                    className="text-2xl font-bold mb-2"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    {fromEra.name}
                  </motion.h3>
                  <motion.p 
                    className="text-sm opacity-80"
                    animate={{ opacity: [0.8, 0.4, 0.8] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    {fromEra.period}
                  </motion.p>
                </div>
              </motion.div>
            )}

            {/* Transition Effect Overlay */}
            <motion.div
              className="absolute inset-0 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: transitionPhase === 'transition' ? 1 : 0 }}
              transition={{ duration: duration * 0.3 }}
            >
              {/* Center Burst Effect */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: transitionPhase === 'transition' ? 20 : 0,
                  rotate: 360
                }}
                transition={{ 
                  duration: duration * 0.6,
                  ease: "easeInOut"
                }}
              >
                <div 
                  className="w-8 h-8 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${toEra.color}, transparent 70%)`
                  }}
                />
              </motion.div>

              {/* Radial Lines */}
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 origin-left w-full h-0.5"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                    background: `linear-gradient(90deg, ${toEra.color}, transparent)`
                  }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ 
                    scaleX: transitionPhase === 'transition' ? 1 : 0,
                    opacity: transitionPhase === 'transition' ? 0.6 : 0
                  }}
                  transition={{ 
                    duration: duration * 0.4,
                    delay: i * 0.05,
                    ease: "easeOut"
                  }}
                />
              ))}
            </motion.div>

            {/* To Era Fade In */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-white z-30"
              style={{ 
                background: `linear-gradient(135deg, ${toEra.color}20, transparent)` 
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: transitionPhase === 'exit' ? 1 : 0 }}
              transition={{ duration: duration * 0.4 }}
            >
              <div className="text-center backdrop-blur-sm bg-black/40 px-8 py-4 rounded-lg border border-white/30">
                <motion.h3 
                  className="text-3xl font-bold mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: duration * 0.3 }}
                >
                  {toEra.name}
                </motion.h3>
                <motion.p 
                  className="text-sm opacity-90"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: duration * 0.4 }}
                >
                  {toEra.period}
                </motion.p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        className="relative z-40"
        variants={transitionVariants[transitionType]}
        initial="enter"
        animate={isTransitioning ? transitionPhase : "transition"}
        transition={{
          duration: duration * 0.5,
          ease: ANIMATIONS.EASING.smooth
        }}
      >
        {children}
      </motion.div>

      {/* Era Color Accent */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1 z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          background: `linear-gradient(90deg, transparent, ${toEra.color}, transparent)`,
          transformOrigin: 'center'
        }}
      />

      {/* Progress Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-50">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: toEra.color }}
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{ 
              opacity: isTransitioning && transitionPhase === 'transition' ? 1 : 0.3,
              scale: isTransitioning && transitionPhase === 'transition' ? 1.2 : 0.8
            }}
            transition={{ 
              duration: 0.3,
              delay: i * 0.1,
              repeat: isTransitioning ? Infinity : 0,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CinematicTransition;