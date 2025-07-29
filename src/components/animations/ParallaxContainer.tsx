'use client';

import React, { useRef, useEffect, ReactNode, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Types for parallax configurations
interface ParallaxLayer {
  id: string;
  speed: number;
  element?: ReactNode | string;
  className?: string;
  zIndex?: number;
  opacity?: number;
  scale?: number;
  blur?: number;
}

interface ParallaxContainerProps {
  children: ReactNode;
  className?: string;
  height?: string;
  layers?: ParallaxLayer[];
  intensity?: number;
  direction?: 'vertical' | 'horizontal' | 'both';
  easing?: 'linear' | 'smooth' | 'spring';
  debugMode?: boolean;
}

interface SimpleParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  scale?: boolean;
  opacity?: boolean;
  blur?: boolean;
}

interface CinematicParallaxProps {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
  midgroundElement?: ReactNode;
  foregroundElement?: ReactNode;
  intensity?: number;
  filmGrain?: boolean;
}

// Advanced Multi-Layer Parallax Container
export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  className = '',
  height = '100vh',
  layers = [],
  intensity = 1,
  direction = 'vertical',
  easing = 'smooth',
  debugMode = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Apply spring animation for smooth easing
  const smoothProgress = easing === 'spring' 
    ? useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 1 })
    : easing === 'smooth'
    ? useSpring(scrollYProgress, { stiffness: 400, damping: 90, mass: 1 })
    : scrollYProgress;

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ height }}
    >
      {/* Debug overlay */}
      {debugMode && (
        <div className="absolute top-4 left-4 z-50 bg-black/80 text-white p-2 rounded text-sm font-mono">
          <div>Scroll Progress: {Math.round(scrollYProgress.get() * 100)}%</div>
          <div>Layers: {layers.length}</div>
          <div>Direction: {direction}</div>
          <div>Easing: {easing}</div>
        </div>
      )}

      {/* Parallax Layers */}
      {layers.map((layer) => {
        const yTransform = useTransform(
          smoothProgress,
          [0, 1],
          direction === 'vertical' || direction === 'both' 
            ? [0, -layer.speed * intensity * 100]
            : [0, 0]
        );
        
        const xTransform = useTransform(
          smoothProgress,
          [0, 1],
          direction === 'horizontal' || direction === 'both'
            ? [0, -layer.speed * intensity * 100]
            : [0, 0]
        );

        const scaleTransform = useTransform(
          smoothProgress,
          [0, 1],
          layer.scale ? [layer.scale, layer.scale * 1.2] : [1, 1]
        );

        const opacityTransform = useTransform(
          smoothProgress,
          [0, 1],
          layer.opacity ? [layer.opacity, Math.max(0, layer.opacity - 0.3)] : [1, 1]
        );

        return (
          <motion.div
            key={layer.id}
            className={`absolute inset-0 ${layer.className || ''}`}
            style={{
              x: xTransform,
              y: yTransform,
              scale: scaleTransform,
              opacity: opacityTransform,
              zIndex: layer.zIndex || 0,
              filter: layer.blur ? `blur(${layer.blur}px)` : 'none'
            }}
          >
            {typeof layer.element === 'string' ? (
              <div 
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${layer.element})` }}
              />
            ) : (
              layer.element
            )}
          </motion.div>
        );
      })}

      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Simple Parallax Component for individual elements
export const SimpleParallax: React.FC<SimpleParallaxProps> = ({
  children,
  speed = 0.5,
  className = '',
  direction = 'up',
  scale = false,
  opacity = false,
  blur = false
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  // Calculate transform values based on direction
  const getTransformValue = () => {
    const distance = speed * 100;
    switch (direction) {
      case 'up':
        return [distance, -distance];
      case 'down':
        return [-distance, distance];
      case 'left':
        return [distance, -distance];
      case 'right':
        return [-distance, distance];
      default:
        return [0, 0];
    }
  };

  const [start, end] = getTransformValue();
  
  const transform = direction === 'left' || direction === 'right'
    ? useTransform(scrollYProgress, [0, 1], [start, end])
    : useTransform(scrollYProgress, [0, 1], [start, end]);

  const scaleTransform = scale
    ? useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1])
    : 1;

  const opacityTransform = opacity
    ? useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7])
    : 1;

  const blurTransform = blur
    ? useTransform(scrollYProgress, [0, 0.5, 1], [2, 0, 2])
    : 0;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        [direction === 'left' || direction === 'right' ? 'x' : 'y']: transform,
        scale: scaleTransform,
        opacity: opacityTransform,
        filter: blur ? `blur(${blurTransform}px)` : 'none'
      }}
    >
      {children}
    </motion.div>
  );
};

// Cinematic Parallax with multiple depth layers
export const CinematicParallax: React.FC<CinematicParallaxProps> = ({
  children,
  className = '',
  backgroundImage,
  midgroundElement,
  foregroundElement,
  intensity = 1.5,
  filmGrain = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Smooth spring animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 1
  });

  // Different speeds for depth layers
  const backgroundY = useTransform(smoothProgress, [0, 1], [0, -150 * intensity]);
  const midgroundY = useTransform(smoothProgress, [0, 1], [0, -75 * intensity]);
  const foregroundY = useTransform(smoothProgress, [0, 1], [0, -25 * intensity]);

  // Scale effects for depth
  const backgroundScale = useTransform(smoothProgress, [0, 1], [1, 1.2]);
  const midgroundScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);

  // Opacity effects
  const backgroundOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 0.6]);
  const foregroundOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Background Layer */}
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            y: backgroundY,
            scale: backgroundScale,
            opacity: backgroundOpacity,
            zIndex: 1
          }}
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `url(${backgroundImage})`,
              filter: 'brightness(0.7) contrast(1.1)'
            }}
          />
        </motion.div>
      )}

      {/* Film Grain Overlay */}
      {filmGrain && (
        <motion.div 
          className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
          style={{
            zIndex: 2,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            animation: 'grain 8s steps(10) infinite'
          }}
        />
      )}

      {/* Midground Layer */}
      {midgroundElement && (
        <motion.div
          className="absolute inset-0"
          style={{
            y: midgroundY,
            scale: midgroundScale,
            zIndex: 3
          }}
        >
          {midgroundElement}
        </motion.div>
      )}

      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Foreground Layer */}
      {foregroundElement && (
        <motion.div
          className="absolute inset-0"
          style={{
            y: foregroundY,
            opacity: foregroundOpacity,
            zIndex: 15
          }}
        >
          {foregroundElement}
        </motion.div>
      )}
    </div>
  );
};

// GSAP-powered smooth parallax for performance-critical sections
interface GSAPParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  pin?: boolean;
  scrub?: boolean | number;
  markers?: boolean;
}

export const GSAPParallax: React.FC<GSAPParallaxProps> = ({
  children,
  className = '',
  speed = 0.5,
  pin = false,
  scrub = true,
  markers = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: scrub,
        pin: pin,
        markers: markers,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(content, {
            y: -progress * speed * window.innerHeight,
            ease: 'none'
          });
        }
      }
    });

    return () => {
      tl.kill();
    };
  }, [speed, pin, scrub, markers]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

// Horizontal parallax for era transitions
interface HorizontalParallaxProps {
  children: ReactNode;
  className?: string;
  sections: ReactNode[];
  sectionWidth?: string;
}

export const HorizontalParallax: React.FC<HorizontalParallaxProps> = ({
  children,
  className = '',
  sections,
  sectionWidth = '100vw'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContainer = scrollRef.current;
    if (!container || !scrollContainer) return;

    const totalWidth = sections.length * window.innerWidth;

    gsap.to(scrollContainer, {
      x: -totalWidth + window.innerWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => `+=${totalWidth - window.innerWidth}`,
        invalidateOnRefresh: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [sections.length]);

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ height: '100vh' }}>
      <div 
        ref={scrollRef}
        className="flex h-full"
        style={{ width: `${sections.length * 100}vw` }}
      >
        {sections.map((section, index) => (
          <div 
            key={index}
            className="flex-shrink-0 h-full"
            style={{ width: sectionWidth }}
          >
            {section}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

// Particle parallax effect for magical moments
interface ParticleParallaxProps {
  children: ReactNode;
  className?: string;
  particleCount?: number;
  particleColor?: string;
  particleSize?: number;
  speed?: number;
}

export const ParticleParallax: React.FC<ParticleParallaxProps> = ({
  children,
  className = '',
  particleCount = 50,
  particleColor = '#ffd700',
  particleSize = 2,
  speed = 0.5
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
  }>>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Generate particles on mount
  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: particleSize + Math.random() * particleSize,
      opacity: 0.1 + Math.random() * 0.6,
      speed: speed + Math.random() * speed
    }));
    setParticles(newParticles);
  }, [particleCount, particleSize, speed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => {
          const y = useTransform(
            scrollYProgress,
            [0, 1],
            [particle.y, particle.y - particle.speed * 100]
          );
          
          const opacity = useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            [particle.opacity * 0.5, particle.opacity, particle.opacity * 0.2]
          );

          return (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                left: `${particle.x}%`,
                y: y,
                width: particle.size,
                height: particle.size,
                backgroundColor: particleColor,
                opacity: opacity,
                filter: 'blur(0.5px)',
                boxShadow: `0 0 ${particle.size * 2}px ${particleColor}`
              }}
            />
          );
        })}
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Text parallax with staggered words
interface TextParallaxProps {
  text: string;
  className?: string;
  wordDelay?: number;
  speed?: number;
}

export const TextParallax: React.FC<TextParallaxProps> = ({
  text,
  className = '',
  wordDelay = 0.1,
  speed = 0.3
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(' ');
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  return (
    <div ref={containerRef} className={`${className}`}>
      {words.map((word, index) => {
        const y = useTransform(
          scrollYProgress,
          [0, 1],
          [0, -(speed * 100 * (1 + index * wordDelay))]
        );
        
        const opacity = useTransform(
          scrollYProgress,
          [0, 0.2, 0.8, 1],
          [0, 1, 1, 0]
        );

        return (
          <motion.span
            key={index}
            className="inline-block mr-2"
            style={{ y, opacity }}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};

// Image parallax with depth of field
interface ImageParallaxProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  blur?: boolean;
  scale?: boolean;
}

export const ImageParallax: React.FC<ImageParallaxProps> = ({
  src,
  alt,
  className = '',
  speed = 0.5,
  blur = false,
  scale = false
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -speed * 100]);
  const scaleTransform = scale 
    ? useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1])
    : 1;
  const blurTransform = blur
    ? useTransform(scrollYProgress, [0, 0.5, 1], [0, 2, 0])
    : 0;

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      style={{
        y,
        scale: scaleTransform,
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{
          filter: blur ? `blur(${blurTransform}px)` : 'none'
        }}
      />
    </motion.div>
  );
};

// Export all components
export default {
  ParallaxContainer,
  SimpleParallax,
  CinematicParallax,
  GSAPParallax,
  HorizontalParallax,
  ParticleParallax,
  TextParallax,
  ImageParallax
};