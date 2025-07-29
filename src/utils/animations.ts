import { Variants } from 'framer-motion';

// Standard easing curves for consistent animations
export const EASING = {
  easeOut: [0.0, 0.0, 0.2, 1],
  easeIn: [0.4, 0.0, 1, 1],
  easeInOut: [0.4, 0.0, 0.2, 1],
  spring: { type: 'spring', stiffness: 100, damping: 15 },
  springSnappy: { type: 'spring', stiffness: 400, damping: 40 },
  bouncy: { type: 'spring', stiffness: 300, damping: 10 }
} as const;

// Standard animation durations
export const DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
  cinematic: 1.2
} as const;

// Stagger configuration for sequential animations
export const STAGGER = {
  quick: 0.05,
  normal: 0.1,
  slow: 0.15,
  dramatic: 0.3
} as const;

/**
 * Fade animations - entrance and exit effects
 */
export const fadeVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASING.easeOut
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: DURATION.fast,
      ease: EASING.easeIn
    }
  }
};

/**
 * Slide animations - directional entrance effects
 */
export const slideVariants = {
  up: {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: DURATION.normal,
        ease: EASING.easeOut
      }
    }
  },
  down: {
    hidden: { y: -60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: DURATION.normal,
        ease: EASING.easeOut
      }
    }
  },
  left: {
    hidden: { x: 60, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: DURATION.normal,
        ease: EASING.easeOut
      }
    }
  },
  right: {
    hidden: { x: -60, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: DURATION.normal,
        ease: EASING.easeOut
      }
    }
  }
} as const;

/**
 * Scale animations - zoom effects
 */
export const scaleVariants: Variants = {
  hidden: { 
    scale: 0.8, 
    opacity: 0 
  },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASING.springSnappy
    }
  },
  hover: { 
    scale: 1.05,
    transition: {
      duration: DURATION.fast,
      ease: EASING.easeOut
    }
  },
  tap: { 
    scale: 0.95,
    transition: {
      duration: DURATION.fast,
      ease: EASING.easeOut
    }
  }
};

/**
 * Stagger container - for animating multiple children
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.normal,
      delayChildren: 0.1
    }
  }
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.slow,
      delayChildren: 0.2
    }
  }
};

/**
 * Cinematic entrance - for hero sections and major content
 */
export const cinematicVariants: Variants = {
  hidden: { 
    y: 100, 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: DURATION.cinematic,
      ease: EASING.easeOut,
      staggerChildren: STAGGER.dramatic,
      delayChildren: 0.3
    }
  }
};

/**
 * Card flip animation
 */
export const flipVariants: Variants = {
  hidden: { 
    rotateY: -90, 
    opacity: 0 
  },
  visible: { 
    rotateY: 0, 
    opacity: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASING.spring
    }
  }
};

/**
 * Modal animations
 */
export const modalVariants = {
  backdrop: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: DURATION.fast
      }
    }
  },
  modal: {
    hidden: { 
      scale: 0.8, 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: {
        duration: DURATION.normal,
        ease: EASING.springSnappy
      }
    }
  }
} as const;

/**
 * Timeline progress animation
 */
export const timelineVariants: Variants = {
  hidden: { 
    scaleX: 0, 
    originX: 0 
  },
  visible: { 
    scaleX: 1,
    transition: {
      duration: DURATION.cinematic,
      ease: EASING.easeOut
    }
  }
};

/**
 * Era transition effects
 */
export const eraTransitionVariants = {
  enter: {
    hidden: { 
      x: '100%', 
      opacity: 0 
    },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: DURATION.slower,
        ease: EASING.easeOut
      }
    }
  },
  exit: {
    visible: { 
      x: 0, 
      opacity: 1 
    },
    hidden: { 
      x: '-100%', 
      opacity: 0,
      transition: {
        duration: DURATION.slower,
        ease: EASING.easeIn
      }
    }
  }
} as const;

/**
 * Utility function to create custom slide variants
 * @param distance - Distance to slide (px)
 * @param direction - Direction to slide from
 * @param duration - Animation duration
 */
export const createSlideVariant = (
  distance: number = 60, 
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  duration: number = DURATION.normal
): Variants => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: distance };
      case 'down': return { y: -distance };
      case 'left': return { x: distance };
      case 'right': return { x: -distance };
    }
  };

  const getFinalPosition = () => {
    switch (direction) {
      case 'up':
      case 'down': return { y: 0 };
      case 'left':
      case 'right': return { x: 0 };
    }
  };

  return {
    hidden: { 
      ...getInitialPosition(), 
      opacity: 0 
    },
    visible: { 
      ...getFinalPosition(), 
      opacity: 1,
      transition: {
        duration,
        ease: EASING.easeOut
      }
    }
  };
};

/**
 * Utility function to create custom stagger container
 * @param staggerDelay - Delay between children
 * @param initialDelay - Initial delay before first child
 */
export const createStaggerContainer = (
  staggerDelay: number = STAGGER.normal,
  initialDelay: number = 0
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: initialDelay
    }
  }
});

/**
 * Parallax animation values for scroll-based effects
 */
export const createParallaxVariant = (speed: number = 0.5) => ({
  y: `${speed * 100}%`
});

/**
 * Typewriter animation for text reveal
 */
export const typewriterVariants: Variants = {
  hidden: { 
    width: 0 
  },
  visible: { 
    width: 'auto',
    transition: {
      duration: DURATION.cinematic,
      ease: EASING.easeOut
    }
  }
};

/**
 * Loading spinner variants
 */
export const spinnerVariants: Variants = {
  spin: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear'
    }
  }
};

/**
 * Button press animation
 */
export const buttonVariants: Variants = {
  idle: { 
    scale: 1 
  },
  hover: { 
    scale: 1.02,
    transition: {
      duration: DURATION.fast,
      ease: EASING.easeOut
    }
  },
  tap: { 
    scale: 0.98,
    transition: {
      duration: DURATION.fast,
      ease: EASING.easeOut
    }
  }
};

/**
 * Image reveal animation (for lazy loading)
 */
export const imageRevealVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 1.1 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASING.easeOut
    }
  }
};

/**
 * Navigation menu animations
 */
export const menuVariants = {
  closed: {
    opacity: 0,
    x: '-100%',
    transition: {
      duration: DURATION.normal,
      ease: EASING.easeIn
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASING.easeOut,
      staggerChildren: STAGGER.quick,
      delayChildren: 0.1
    }
  }
} as const;

export const menuItemVariants: Variants = {
  closed: { 
    x: -20, 
    opacity: 0 
  },
  open: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: DURATION.fast,
      ease: EASING.easeOut
    }
  }
};