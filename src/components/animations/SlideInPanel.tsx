'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';

interface SlideInPanelProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  distance?: number | string;
  triggerOnce?: boolean;
  overlay?: boolean;
  overlayColor?: string;
  maskColor?: string;
  clipPath?: boolean;
  easing?: string;
  viewport?: {
    once?: boolean;
    amount?: number | 'some' | 'all';
  };
  onAnimationStart?: () => void;
  onAnimationComplete?: () => void;
}

const SlideInPanel: React.FC<SlideInPanelProps> = ({
  children,
  className = '',
  direction = 'left',
  delay = 0,
  duration = 0.8,
  distance = '100%',
  triggerOnce = true,
  overlay = false,
  overlayColor = 'rgba(0, 0, 0, 0.8)',
  maskColor = '#ffd700',
  clipPath = false,
  easing = 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  viewport = { once: true, amount: 0.3 },
  onAnimationStart,
  onAnimationComplete
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, viewport);
  const controls = useAnimation();
  const overlayControls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  // Get transform values based on direction
  const getTransformValues = (isInitial: boolean) => {
    const distanceValue = typeof distance === 'string' && distance.includes('%') 
      ? distance 
      : `${distance}px`;

    switch (direction) {
      case 'left':
        return { x: isInitial ? `-${distanceValue}` : '0%' };
      case 'right':
        return { x: isInitial ? distanceValue : '0%' };
      case 'up':
        return { y: isInitial ? `-${distanceValue}` : '0%' };
      case 'down':
        return { y: isInitial ? distanceValue : '0%' };
      default:
        return { x: isInitial ? `-${distanceValue}` : '0%' };
    }
  };

  // Get clip-path values for reveal effect
  const getClipPath = (isInitial: boolean) => {
    if (!clipPath) return {};
    
    switch (direction) {
      case 'left':
        return { clipPath: isInitial ? 'inset(0 100% 0 0)' : 'inset(0 0% 0 0)' };
      case 'right':
        return { clipPath: isInitial ? 'inset(0 0 0 100%)' : 'inset(0 0 0 0%)' };
      case 'up':
        return { clipPath: isInitial ? 'inset(100% 0 0 0)' : 'inset(0% 0 0 0)' };
      case 'down':
        return { clipPath: isInitial ? 'inset(0 0 100% 0)' : 'inset(0 0 0% 0)' };
      default:
        return { clipPath: isInitial ? 'inset(0 100% 0 0)' : 'inset(0 0% 0 0)' };
    }
  };

  // Animation variants
  const panelVariants = {
    hidden: {
      ...getTransformValues(true),
      ...getClipPath(true),
      opacity: clipPath ? 1 : 0
    },
    visible: {
      ...getTransformValues(false),
      ...getClipPath(false),
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: easing,
        type: 'tween'
      }
    }
  };

  // Overlay variants for cinematic effect
  const overlayVariants = {
    hidden: {
      ...getTransformValues(true),
      opacity: 1
    },
    visible: {
      ...getTransformValues(false),
      opacity: 0,
      transition: {
        duration: duration * 0.6,
        delay: delay + (duration * 0.4),
        ease: easing
      }
    }
  };

  useEffect(() => {
    if (isInView && (!triggerOnce || !hasAnimated)) {
      onAnimationStart?.();
      controls.start('visible');
      if (overlay) {
        overlayControls.start('visible');
      }
      if (triggerOnce) {
        setHasAnimated(true);
      }
    } else if (!isInView && !triggerOnce) {
      controls.start('hidden');
      if (overlay) {
        overlayControls.start('hidden');
      }
    }
  }, [isInView, controls, overlayControls, triggerOnce, hasAnimated, onAnimationStart]);

  const handleAnimationComplete = () => {
    onAnimationComplete?.();
  };

  return (
    <div 
      ref={ref} 
      className={`slide-in-panel-container relative overflow-hidden ${className}`}
    >
      {/* Main content panel */}
      <motion.div
        className="slide-in-panel-content"
        variants={panelVariants}
        initial="hidden"
        animate={controls}
        onAnimationComplete={handleAnimationComplete}
        style={{
          willChange: 'transform, opacity, clip-path',
          backfaceVisibility: 'hidden'
        }}
      >
        {children}
      </motion.div>

      {/* Overlay mask for cinematic effect */}
      <AnimatePresence>
        {overlay && (
          <motion.div
            className="slide-in-panel-overlay absolute inset-0 pointer-events-none"
            variants={overlayVariants}
            initial="hidden"
            animate={overlayControls}
            exit="visible"
            style={{
              backgroundColor: overlayColor,
              background: `linear-gradient(
                ${direction === 'left' || direction === 'right' ? '90deg' : '180deg'}, 
                ${maskColor} 0%, 
                ${overlayColor} 20%, 
                ${overlayColor} 80%, 
                ${maskColor} 100%
              )`,
              willChange: 'transform, opacity'
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// Preset variants for common use cases
export const SlideInLeft: React.FC<Omit<SlideInPanelProps, 'direction'>> = (props) => (
  <SlideInPanel {...props} direction="left" />
);

export const SlideInRight: React.FC<Omit<SlideInPanelProps, 'direction'>> = (props) => (
  <SlideInPanel {...props} direction="right" />
);

export const SlideInUp: React.FC<Omit<SlideInPanelProps, 'direction'>> = (props) => (
  <SlideInPanel {...props} direction="up" />
);

export const SlideInDown: React.FC<Omit<SlideInPanelProps, 'direction'>> = (props) => (
  <SlideInPanel {...props} direction="down" />
);

// Cinematic reveal with overlay
export const CinematicReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
}> = ({ children, className = '', direction = 'right', delay = 0 }) => (
  <SlideInPanel
    className={className}
    direction={direction}
    delay={delay}
    duration={1.2}
    overlay={true}
    overlayColor="rgba(10, 10, 10, 0.9)"
    maskColor="#ffd700"
    easing="cubic-bezier(0.16, 1, 0.3, 1)"
  >
    {children}
  </SlideInPanel>
);

// Era transition panel
export const EraTransition: React.FC<{
  children: React.ReactNode;
  className?: string;
  eraColor?: string;
  delay?: number;
}> = ({ children, className = '', eraColor = '#ffd700', delay = 0 }) => (
  <SlideInPanel
    className={className}
    direction="left"
    delay={delay}
    duration={1.0}
    clipPath={true}
    overlay={true}
    maskColor={eraColor}
    overlayColor={`${eraColor}20`}
    easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)"
  >
    {children}
  </SlideInPanel>
);

// Content panel with custom distance
export const ContentPanel: React.FC<{
  children: React.ReactNode;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  distance?: number | string;
  delay?: number;
}> = ({ children, className = '', direction = 'left', distance = 200, delay = 0 }) => (
  <SlideInPanel
    className={className}
    direction={direction}
    distance={distance}
    delay={delay}
    duration={0.8}
    easing="cubic-bezier(0.4, 0.0, 0.2, 1)"
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </SlideInPanel>
);

// Image reveal panel
export const ImageReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
}> = ({ children, className = '', direction = 'left' }) => (
  <SlideInPanel
    className={className}
    direction={direction}
    duration={1.0}
    clipPath={true}
    easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    viewport={{ once: true, amount: 0.1 }}
  >
    {children}
  </SlideInPanel>
);

// Sequential panel system
interface SequentialPanelsProps {
  children: React.ReactNode[];
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  staggerDelay?: number;
  startDelay?: number;
}

export const SequentialPanels: React.FC<SequentialPanelsProps> = ({
  children,
  className = '',
  direction = 'left',
  staggerDelay = 0.2,
  startDelay = 0
}) => (
  <div className={`sequential-panels ${className}`}>
    {React.Children.map(children, (child, index) => (
      <SlideInPanel
        key={index}
        direction={direction}
        delay={startDelay + (index * staggerDelay)}
        duration={0.8}
        triggerOnce={true}
      >
        {child}
      </SlideInPanel>
    ))}
  </div>
);

export default SlideInPanel;