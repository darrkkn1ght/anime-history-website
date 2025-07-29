'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { COLORS } from '@/data/constants/colors';
import { ANIMATIONS } from '@/data/constants/animations';

interface TimelineProgressProps {
  eras: Array<{
    id: string;
    name: string;
    period: string;
    startYear: number;
    endYear: number;
    color: string;
  }>;
  onEraChange?: (eraId: string) => void;
  showLabels?: boolean;
  position?: 'fixed' | 'sticky' | 'relative';
  orientation?: 'horizontal' | 'vertical';
}

const TimelineProgress: React.FC<TimelineProgressProps> = ({
  eras,
  onEraChange,
  showLabels = true,
  position = 'fixed',
  orientation = 'horizontal'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeEra, setActiveEra] = useState<string>(eras[0]?.id || '');
  const [isVisible, setIsVisible] = useState(true);
  
  const { scrollYProgress } = useScroll();
  const { isScrollingDown } = useScrollProgress();
  
  // Smooth progress animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Transform progress to timeline segments
  const timelineProgress = useTransform(
    smoothProgress,
    [0, 1],
    [0, eras.length]
  );
  
  // Calculate current era based on scroll progress
  useEffect(() => {
    const unsubscribe = timelineProgress.on('change', (latest) => {
      const currentEraIndex = Math.floor(Math.min(latest, eras.length - 1));
      const newActiveEra = eras[currentEraIndex]?.id;
      
      if (newActiveEra && newActiveEra !== activeEra) {
        setActiveEra(newActiveEra);
        onEraChange?.(newActiveEra);
      }
    });
    
    return unsubscribe;
  }, [timelineProgress, eras, activeEra, onEraChange]);
  
  // Hide/show based on scroll direction
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (isScrollingDown) {
      timeoutId = setTimeout(() => setIsVisible(false), 2000);
    } else {
      setIsVisible(true);
    }
    
    return () => clearTimeout(timeoutId);
  }, [isScrollingDown]);
  
  const containerClasses = `
    ${position === 'fixed' ? 'fixed' : position === 'sticky' ? 'sticky' : 'relative'}
    ${orientation === 'horizontal' 
      ? 'top-6 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6' 
      : 'left-6 top-1/2 -translate-y-1/2 h-full max-h-96 py-6'
    }
    z-40 pointer-events-none
  `;
  
  return (
    <motion.div
      ref={containerRef}
      className={containerClasses}
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0.3,
        y: isVisible ? 0 : -20
      }}
      transition={{ duration: 0.5, ease: ANIMATIONS.EASING.smooth }}
    >
      <div className={`
        relative
        ${orientation === 'horizontal' ? 'w-full h-2' : 'w-2 h-full'}
        bg-black/20 backdrop-blur-sm rounded-full border border-white/10
        pointer-events-auto
      `}>
        {/* Background Track */}
        <div className={`
          absolute inset-0 rounded-full overflow-hidden
          ${orientation === 'horizontal' ? '' : 'w-full h-full'}
        `}>
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            style={{
              background: orientation === 'horizontal'
                ? 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)'
                : 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)'
            }}
          />
        </div>
        
        {/* Era Segments */}
        {eras.map((era, index) => {
          const segmentWidth = 100 / eras.length;
          const isActive = era.id === activeEra;
          
          return (
            <motion.div
              key={era.id}
              className={`
                absolute rounded-full transition-all duration-500
                ${orientation === 'horizontal' 
                  ? 'h-full top-0' 
                  : 'w-full left-0'
                }
              `}
              style={{
                [orientation === 'horizontal' ? 'left' : 'top']: `${index * segmentWidth}%`,
                [orientation === 'horizontal' ? 'width' : 'height']: `${segmentWidth}%`,
                backgroundColor: isActive ? era.color : `${era.color}40`
              }}
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{
                scale: isActive ? 1.1 : 0.8,
                opacity: isActive ? 1 : 0.5
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          );
        })}
        
        {/* Progress Indicator */}
        <motion.div
          className={`
            absolute rounded-full pointer-events-none
            ${orientation === 'horizontal' 
              ? 'w-4 h-4 -top-1 -translate-x-1/2' 
              : 'w-4 h-4 -left-1 -translate-y-1/2'
            }
          `}
          style={{
            background: `linear-gradient(135deg, ${COLORS.BRAND.primary.gold}, ${COLORS.BRAND.electric.blue})`,
            boxShadow: `0 0 20px ${COLORS.BRAND.primary.gold}40`,
            [orientation === 'horizontal' ? 'left' : 'top']: useTransform(
              smoothProgress,
              [0, 1],
              ['0%', '100%']
            )
          }}
        >
          <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm" />
          <motion.div
            className="absolute inset-0.5 rounded-full bg-white"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        {/* Era Markers */}
        {eras.map((era, index) => {
          const position = (index / (eras.length - 1)) * 100;
          const isActive = era.id === activeEra;
          
          return (
            <motion.button
              key={`marker-${era.id}`}
              className={`
                absolute w-3 h-3 rounded-full border-2 border-white/30
                transition-all duration-300 hover:scale-125 focus:outline-none
                ${orientation === 'horizontal' 
                  ? '-top-0.5 -translate-x-1/2' 
                  : '-left-0.5 -translate-y-1/2'
                }
              `}
              style={{
                [orientation === 'horizontal' ? 'left' : 'top']: `${position}%`,
                backgroundColor: isActive ? era.color : 'transparent',
                borderColor: isActive ? era.color : 'rgba(255,255,255,0.3)',
                boxShadow: isActive ? `0 0 12px ${era.color}60` : 'none'
              }}
              onClick={() => {
                setActiveEra(era.id);
                onEraChange?.(era.id);
                
                // Smooth scroll to era section
                const eraElement = document.getElementById(era.id);
                if (eraElement) {
                  eraElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.95 }}
            />
          );
        })}
      </div>
      
      {/* Era Labels */}
      {showLabels && (
        <motion.div
          className={`
            absolute pointer-events-none
            ${orientation === 'horizontal' 
              ? 'top-6 left-0 right-0' 
              : 'left-6 top-0 bottom-0 w-32'
            }
          `}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 0.2 }}
        >
          {eras.map((era, index) => {
            const position = (index / (eras.length - 1)) * 100;
            const isActive = era.id === activeEra;
            
            return (
              <motion.div
                key={`label-${era.id}`}
                className={`
                  absolute text-center pointer-events-auto cursor-pointer
                  ${orientation === 'horizontal' 
                    ? 'top-0 -translate-x-1/2' 
                    : 'left-0 -translate-y-1/2 -rotate-90 origin-center'
                  }
                `}
                style={{
                  [orientation === 'horizontal' ? 'left' : 'top']: `${position}%`
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: isActive ? 1 : 0.7,
                  y: isActive ? 0 : 10,
                  scale: isActive ? 1.05 : 1
                }}
                transition={{ duration: 0.5, ease: ANIMATIONS.EASING.smooth }}
                onClick={() => {
                  setActiveEra(era.id);
                  onEraChange?.(era.id);
                }}
              >
                <div className={`
                  px-3 py-1.5 rounded-lg backdrop-blur-md border
                  ${isActive 
                    ? 'bg-white/10 border-white/20 text-white' 
                    : 'bg-black/20 border-white/10 text-white/70'
                  }
                  transition-all duration-300 hover:bg-white/15 hover:border-white/30
                `}>
                  <div className="text-xs font-medium">{era.name}</div>
                  <div className="text-xs opacity-75">{era.period}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}
      
      {/* Progress Text */}
      <motion.div
        className={`
          absolute text-white/80 text-sm font-medium
          ${orientation === 'horizontal' 
            ? 'top-20 left-1/2 -translate-x-1/2' 
            : 'left-10 top-1/2 -translate-y-1/2'
          }
        `}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
      >
        <motion.span
          key={activeEra}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: ANIMATIONS.EASING.smooth }}
        >
          {eras.find(era => era.id === activeEra)?.name || 'Loading...'}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default TimelineProgress;