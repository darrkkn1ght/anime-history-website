'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView, UseInViewOptions } from 'framer-motion';

interface FadeInViewProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  triggerOnce?: boolean;
  stagger?: number;
  easing?: string;
  viewport?: UseInViewOptions;
}

const FadeInView: React.FC<FadeInViewProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 50,
  triggerOnce = true,
  stagger = 0,
  easing = 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  viewport = { once: true, margin: '-100px', amount: 0.3 }
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, viewport);
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  // Direction-based initial positions
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 };
      case 'down':
        return { y: -distance, opacity: 0 };
      case 'left':
        return { x: distance, opacity: 0 };
      case 'right':
        return { x: -distance, opacity: 0 };
      case 'none':
      default:
        return { opacity: 0 };
    }
  };

  const getFinalPosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0, opacity: 1 };
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 };
      case 'none':
      default:
        return { opacity: 1 };
    }
  };

  // Animation variants
  const variants = {
    hidden: getInitialPosition(),
    visible: {
      ...getFinalPosition(),
      transition: {
        duration,
        delay: delay + stagger,
        ease: easing,
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  };

  // Stagger children if applicable
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  };

  useEffect(() => {
    if (isInView && (!triggerOnce || !hasAnimated)) {
      controls.start('visible');
      if (triggerOnce) {
        setHasAnimated(true);
      }
    } else if (!isInView && !triggerOnce) {
      controls.start('hidden');
    }
  }, [isInView, controls, triggerOnce, hasAnimated]);

  // Handle staggered children
  const renderChildren = () => {
    if (stagger > 0 && React.Children.count(children) > 1) {
      return React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={variants}
          initial="hidden"
          animate={controls}
          style={{ 
            display: 'contents',
            '--stagger-delay': `${index * stagger}s`
          } as any}
        >
          {child}
        </motion.div>
      ));
    }
    return children;
  };

  return (
    <motion.div
      ref={ref}
      className={`fade-in-view ${className}`}
      variants={stagger > 0 ? containerVariants : variants}
      initial="hidden"
      animate={controls}
      style={{
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
        perspective: 1000
      }}
    >
      {renderChildren()}
    </motion.div>
  );
};

// Preset variants for common use cases
export const FadeInUp: React.FC<Omit<FadeInViewProps, 'direction'>> = (props) => (
  <FadeInView {...props} direction="up" />
);

export const FadeInDown: React.FC<Omit<FadeInViewProps, 'direction'>> = (props) => (
  <FadeInView {...props} direction="down" />
);

export const FadeInLeft: React.FC<Omit<FadeInViewProps, 'direction'>> = (props) => (
  <FadeInView {...props} direction="left" />
);

export const FadeInRight: React.FC<Omit<FadeInViewProps, 'direction'>> = (props) => (
  <FadeInView {...props} direction="right" />
);

export const FadeIn: React.FC<Omit<FadeInViewProps, 'direction'>> = (props) => (
  <FadeInView {...props} direction="none" />
);

// Staggered list component
interface StaggeredListProps extends Omit<FadeInViewProps, 'stagger'> {
  staggerDelay?: number;
  children: React.ReactNode;
}

export const StaggeredList: React.FC<StaggeredListProps> = ({
  children,
  staggerDelay = 0.1,
  ...props
}) => (
  <FadeInView {...props} stagger={staggerDelay}>
    {children}
  </FadeInView>
);

// Hero text animation
export const HeroTextReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => (
  <FadeInView
    className={className}
    direction="up"
    duration={1.2}
    delay={0.2}
    distance={80}
    easing="cubic-bezier(0.16, 1, 0.3, 1)"
  >
    {children}
  </FadeInView>
);

// Section reveal animation
export const SectionReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = '', delay = 0 }) => (
  <FadeInView
    className={className}
    direction="up"
    duration={0.8}
    delay={delay}
    distance={60}
    viewport={{ once: true, margin: '-50px', amount: 0.2 }}
  >
    {children}
  </FadeInView>
);

export default FadeInView;