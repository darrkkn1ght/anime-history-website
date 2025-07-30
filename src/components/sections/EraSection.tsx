'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Era } from '@/types/era';
import FadeInView from '@/components/animations/FadeInView';
import { ParallaxContainer } from '@/components/animations/ParallaxContainer';
import CinematicTransition from '@/components/animations/CinematicTransition';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface EraSectionProps {
  era: Era;
  children: React.ReactNode;
  index: number;
  onEnterView?: () => void;
  className?: string;
}

export const EraSection: React.FC<EraSectionProps> = ({
  era,
  children,
  index,
  onEnterView,
  className = ''
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(sectionRef, { 
    margin: "-20% 0px -20% 0px" 
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.4, 0.8]);

  // Color scheme based on era
  const getEraColors = (eraName: string) => {
    const colorMap: Record<string, any> = {
      origins: {
        primary: 'from-amber-900/20 to-yellow-700/20',
        accent: 'border-amber-400/30',
        text: 'text-amber-100',
        glow: 'shadow-amber-500/20'
      },
      foundation: {
        primary: 'from-blue-900/20 to-indigo-700/20',
        accent: 'border-blue-400/30',
        text: 'text-blue-100',
        glow: 'shadow-blue-500/20'
      },
      expansion: {
        primary: 'from-purple-900/20 to-pink-700/20',
        accent: 'border-purple-400/30',
        text: 'text-purple-100',
        glow: 'shadow-purple-500/20'
      },
      golden: {
        primary: 'from-yellow-900/20 to-orange-700/20',
        accent: 'border-yellow-400/30',
        text: 'text-yellow-100',
        glow: 'shadow-yellow-500/20'
      },
      digital: {
        primary: 'from-cyan-900/20 to-blue-700/20',
        accent: 'border-cyan-400/30',
        text: 'text-cyan-100',
        glow: 'shadow-cyan-500/20'
      },
      current: {
        primary: 'from-emerald-900/20 to-teal-700/20',
        accent: 'border-emerald-400/30',
        text: 'text-emerald-100',
        glow: 'shadow-emerald-500/20'
      }
    };

    const eraKey = eraName.toLowerCase().replace(/[^a-z]/g, '');
    return colorMap[eraKey] || colorMap.current;
  };

  const colors = getEraColors(era.name);

  useEffect(() => {
    if (isInView && onEnterView) {
      onEnterView();
    }
  }, [isInView, onEnterView]);

  useEffect(() => {
    const section = sectionRef.current;
    const background = backgroundRef.current;
    const content = contentRef.current;
    const overlay = overlayRef.current;

    if (!section || !background || !content || !overlay) return;

    // GSAP scroll-triggered animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        scrub: false,
        onEnter: () => {
          gsap.to(background, {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out"
          });
          
          gsap.to(content, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.3,
            ease: "power2.out"
          });
        },
        onLeave: () => {
          gsap.to(overlay, {
            opacity: 0.2,
            duration: 0.8,
            ease: "power2.inOut"
          });
        },
        onEnterBack: () => {
          gsap.to(overlay, {
            opacity: 0.8,
            duration: 0.8,
            ease: "power2.inOut"
          });
        }
      }
    });

    // Film grain effect
    const filmGrain = gsap.to(overlay, {
      backgroundPosition: "100% 100%",
      duration: 0.1,
      repeat: -1,
      ease: "none"
    });

    return () => {
      tl.kill();
      filmGrain.kill();
    };
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Parallax Background */}
      <ParallaxContainer>
        <motion.div
          ref={backgroundRef}
          className={`absolute inset-0 bg-gradient-to-br ${colors.primary} backdrop-blur-sm`}
          style={{ y: backgroundY }}
          initial={{ scale: 1.1, opacity: 0 }}
        />
      </ParallaxContainer>

      {/* Film Grain Overlay */}
      <motion.div
        ref={overlayRef}
        className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: overlayOpacity
        }}
      />

      {/* Era Number */}
      <motion.div
        className="absolute top-8 left-8 z-20"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <div className={`text-8xl font-bold ${colors.text} opacity-20 select-none`}>
          {String(index + 1).padStart(2, '0')}
        </div>
      </motion.div>

      {/* Era Title */}
      <motion.div
        className="absolute top-12 right-8 z-20 text-right"
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <h2 className={`text-4xl md:text-6xl font-bold ${colors.text} mb-2`}>
          {era.name}
        </h2>
        <p className={`text-lg ${colors.text} opacity-80`}>
          {era.period}
        </p>
      </motion.div>

      {/* Content Container */}
      <motion.div
        ref={contentRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24"
        style={{ y: contentY }}
        initial={{ y: 50, opacity: 0 }}
      >
        <FadeInView>
          <div className={`backdrop-blur-lg bg-black/10 rounded-2xl border ${colors.accent} p-8 md:p-12 ${colors.glow} shadow-2xl`}>
            {children}
          </div>
        </FadeInView>
      </motion.div>

      {/* Era Transition */}
      <CinematicTransition
        toEra={{
          id: era.id,
          name: era.name,
          period: era.period,
          color: colors.primary,
          theme: 'modern'
        }}
        duration={1.5}
      >
        <div />
      </CinematicTransition>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          className={`w-px h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent`}
          initial={{ height: 0 }}
          animate={isInView ? { height: 64 } : { height: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </div>

      {/* Side Navigation Indicator */}
      <motion.div
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="flex flex-col space-y-2">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? `bg-white ${colors.glow}`
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};