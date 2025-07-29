'use client';

import React, { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation variants for different effects
const animationVariants = {
  fadeInUp: {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1],
        staggerChildren: 0.1
      }
    }
  },
  fadeInDown: {
    hidden: { 
      opacity: 0, 
      y: -80,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  },
  fadeInLeft: {
    hidden: { 
      opacity: 0, 
      x: -100,
      rotateY: -15
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.9,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  },
  fadeInRight: {
    hidden: { 
      opacity: 0, 
      x: 100,
      rotateY: 15
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.9,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  },
  scaleIn: {
    hidden: { 
      opacity: 0, 
      scale: 0.3,
      rotate: -10
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  },
  slideInScale: {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      filter: 'blur(10px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  },
  cinematic: {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.9,
      filter: 'brightness(0.3) sepia(1)',
      clipPath: 'inset(10% 0 10% 0)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: 'brightness(1) sepia(0)',
      clipPath: 'inset(0% 0 0% 0)',
      transition: {
        duration: 1.5,
        ease: [0.4, 0.0, 0.2, 1],
        filter: { duration: 2 },
        clipPath: { duration: 1.2, ease: 'easeOut' }
      }
    }
  }
};

// Props interfaces
interface ScrollFadeProps {
  children: ReactNode;
  variant?: keyof typeof animationVariants;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  className?: string;
  duration?: number;
}

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  delay?: number;
  easing?: string;
  className?: string;
}

interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

interface CounterProps {
  end: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

// Main scroll-triggered fade component with Framer Motion
export const ScrollFade: React.FC<ScrollFadeProps> = ({
  children,
  variant = 'fadeInUp',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  className = '',
  duration
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: threshold, 
    once: triggerOnce,
    margin: '-50px 0px -50px 0px'
  });
  
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!triggerOnce) {
      controls.start('hidden');
    }
  }, [isInView, controls, triggerOnce]);

  const customVariant = duration ? {
    ...animationVariants[variant],
    visible: {
      ...animationVariants[variant].visible,
      transition: {
        ...animationVariants[variant].visible.transition,
        duration,
        delay
      }
    }
  } : {
    ...animationVariants[variant],
    visible: {
      ...animationVariants[variant].visible,
      transition: {
        ...animationVariants[variant].visible.transition,
        delay
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={customVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// GSAP-powered scroll reveal for more complex animations
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  distance = 80,
  duration = 0.8,
  delay = 0,
  easing = 'power2.out',
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Set initial state
    const initialState: any = {
      opacity: 0,
      ease: easing,
      duration,
      delay
    };

    switch (direction) {
      case 'up':
        initialState.y = distance;
        break;
      case 'down':
        initialState.y = -distance;
        break;
      case 'left':
        initialState.x = distance;
        break;
      case 'right':
        initialState.x = -distance;
        break;
    }

    gsap.set(element, initialState);

    // Create scroll trigger
    ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      end: 'bottom 15%',
      onEnter: () => {
        gsap.to(element, {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: easing
        });
      },
      onLeave: () => {
        gsap.to(element, {
          opacity: 0,
          ...initialState,
          duration: duration * 0.5
        });
      },
      onEnterBack: () => {
        gsap.to(element, {
          opacity: 1,
          x: 0,
          y: 0,
          duration: duration * 0.7,
          ease: easing
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [direction, distance, duration, delay, easing]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

// Typewriter effect with scroll trigger
export const ScrollTypewriter: React.FC<TypewriterProps> = ({
  text,
  className = '',
  speed = 50,
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = React.useState('');
  const isInView = useInView(ref, { amount: 0.5, once: true });

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, index + 1));
        index++;
        if (index >= text.length) {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, text, speed, delay]);

  return (
    <div ref={ref} className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

// Animated counter with scroll trigger
export const ScrollCounter: React.FC<CounterProps> = ({
  end,
  duration = 2,
  className = '',
  prefix = '',
  suffix = '',
  decimals = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = React.useState(0);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = easeOutQuart * end;
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, end, duration]);

  const formattedCount = decimals > 0 
    ? count.toFixed(decimals)
    : Math.floor(count).toLocaleString();

  return (
    <div ref={ref} className={className}>
      {prefix}{formattedCount}{suffix}
    </div>
  );
};

// Staggered children animation
interface StaggerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export const ScrollStagger: React.FC<StaggerProps> = ({
  children,
  staggerDelay = 0.1,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Cinematic reveal with film grain effect
interface CinematicRevealProps {
  children: ReactNode;
  className?: string;
  filmGrain?: boolean;
}

export const CinematicReveal: React.FC<CinematicRevealProps> = ({
  children,
  className = '',
  filmGrain = true
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Initial state
    gsap.set(element, {
      opacity: 0,
      scale: 0.95,
      filter: 'brightness(0.3) contrast(1.2) sepia(0.8)',
      clipPath: 'inset(10% 0 10% 0)'
    });

    // Scroll trigger animation
    ScrollTrigger.create({
      trigger: element,
      start: 'top 75%',
      onEnter: () => {
        const tl = gsap.timeline();
        
        tl.to(element, {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out'
        })
        .to(element, {
          scale: 1,
          clipPath: 'inset(0% 0 0% 0)',
          duration: 1.2,
          ease: 'power2.out'
        }, 0.2)
        .to(element, {
          filter: 'brightness(1) contrast(1) sepia(0)',
          duration: 2,
          ease: 'power2.inOut'
        }, 0.5);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className={`relative ${className}`}
    >
      {filmGrain && (
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            animation: 'grain 8s steps(10) infinite'
          }}
        />
      )}
      {children}
    </div>
  );
};

// Export all components
export default {
  ScrollFade,
  ScrollReveal,
  ScrollTypewriter,
  ScrollCounter,
  ScrollStagger,
  CinematicReveal
};