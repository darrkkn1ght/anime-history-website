'use client';

import React, { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { initializeGSAP, getGSAP, getScrollTrigger } from '@/utils/gsap-init';
// import { useAppReady } from '@/hooks/useAppReady';

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
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  },
  blurIn: {
    hidden: { 
      opacity: 0, 
      filter: 'blur(20px)',
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  },
  slideInFromBottom: {
    hidden: { 
      opacity: 0, 
      y: 100,
      rotateX: 15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  },
  slideInFromTop: {
    hidden: { 
      opacity: 0, 
      y: -100,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  },
  rotateIn: {
    hidden: { 
      opacity: 0, 
      rotate: -180,
      scale: 0.5
    },
    visible: { 
      opacity: 1, 
      rotate: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  },
  bounceIn: {
    hidden: { 
      opacity: 0, 
      scale: 0.3,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.68, -0.55, 0.265, 1.55]
      }
    }
  }
};

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

export const ScrollFade: React.FC<ScrollFadeProps> = ({
  children,
  variant = 'fadeInUp',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  className = '',
  duration
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    amount: threshold, 
    once: triggerOnce,
    margin: '0px 0px -100px 0px'
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const customVariants = duration ? {
    ...animationVariants[variant],
    visible: {
      ...animationVariants[variant].visible,
      transition: {
        ...animationVariants[variant].visible.transition,
        delay,
        duration: duration / 1000 // Convert to seconds
      }
    }
  } : animationVariants[variant];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={customVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

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
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const initializeAnimation = async () => {
      if (typeof window === 'undefined') return;
      
      try {
        await initializeGSAP();
        const gsap = getGSAP();
        const ScrollTrigger = getScrollTrigger();
        
        if (!gsap || !ScrollTrigger) {
          console.warn('GSAP not available for ScrollReveal');
          return;
        }

        gsap.fromTo(ref.current, 
          {
            opacity: 0,
            y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
            x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
            duration: 0
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration,
            delay,
            ease: easing,
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      } catch (error) {
        console.warn('ScrollReveal animation failed:', error);
      }
    };

    initializeAnimation();
  }, [direction, distance, duration, delay, easing]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export const ScrollTypewriter: React.FC<TypewriterProps> = ({
  text,
  className = '',
  speed = 50,
  delay = 0
}) => {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [currentIndex, text, speed]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex(0);
      setDisplayText('');
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export const ScrollCounter: React.FC<CounterProps> = ({
  end,
  duration = 2,
  className = '',
  prefix = '',
  suffix = '',
  decimals = 0
}) => {
  const [count, setCount] = React.useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const startTime = Date.now();
          const startValue = 0;
          
          const animate = (timestamp: number) => {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);
            
            const currentValue = Math.floor(startValue + (end - startValue) * progress);
            setCount(currentValue);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

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
  const childrenArray = React.Children.toArray(children);
  
  return (
    <div className={className}>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * staggerDelay,
            ease: [0.4, 0.0, 0.2, 1]
          }}
          viewport={{ once: true, margin: '-50px' }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

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
    const initializeAnimation = () => {
      if (typeof window === 'undefined') return;
      
      try {
        // Simple CSS-based animation instead of GSAP
        if (ref.current) {
          ref.current.style.opacity = '0';
          ref.current.style.transform = 'scale(0.95) translateY(20px)';
          
          setTimeout(() => {
            if (ref.current) {
              ref.current.style.transition = 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';
              ref.current.style.opacity = '1';
              ref.current.style.transform = 'scale(1) translateY(0)';
            }
          }, 100);
        }
      } catch (error) {
        console.warn('GSAP not available for CinematicReveal');
      }
    };

    initializeAnimation();
  }, []);

  return (
    <div 
      ref={ref}
      className={`${className} ${filmGrain ? 'relative' : ''}`}
    >
      {children}
      {filmGrain && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-multiply"
          style={{
            backgroundImage: 'url(/images/ui/backgrounds/film-grain-texture.jpg)',
            backgroundSize: '200px 200px',
            backgroundRepeat: 'repeat'
          }}
        />
      )}
    </div>
  );
};

// Components are already exported individually above