/**
 * 🎬 ANIME HISTORY WEBSITE - ANIMATION SYSTEM
 * 2025 Modern Animation Constants with Cinematic Effects
 * Smooth, purposeful animations for premium user experience
 */

// ============================================================================
// TIMING FUNCTIONS (EASING)
// ============================================================================

export const EASING = {
    // Standard easing curves
    linear: 'cubic-bezier(0, 0, 1, 1)',
    ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    easeIn: 'cubic-bezier(0.42, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.58, 1)',
    easeInOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
    
    // Custom cinematic easing
    cinematic: 'cubic-bezier(0.4, 0.0, 0.2, 1)', // Material Design easing
    smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Smooth acceleration
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Gentle bounce
    sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)', // Sharp entrance/exit
    
    // Era-specific easing
    origins: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)', // Vintage mechanical
    foundation: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Early TV smooth
    expansion: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Bold 80s bounce
    goldenAge: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Dynamic 90s
    digitalAge: 'cubic-bezier(0.4, 0.0, 0.2, 1)', // Digital precision
    currentEra: 'cubic-bezier(0.25, 0.1, 0.25, 1)', // Ultra-smooth modern
  } as const;
  
  // ============================================================================
  // DURATION SCALES
  // ============================================================================
  
  export const DURATION = {
    // Micro interactions (0-300ms)
    instant: '0ms',
    fast: '150ms',
    quick: '200ms',
    snappy: '300ms',
    
    // Standard interactions (300-600ms)
    normal: '400ms',
    medium: '500ms',
    comfortable: '600ms',
    
    // Larger transitions (600ms-1s)
    slow: '700ms',
    slower: '800ms',
    leisurely: '1000ms',
    
    // Cinematic transitions (1s+)
    cinematic: '1200ms',
    dramatic: '1500ms',
    epic: '2000ms',
    
    // Era-specific durations
    origins: '800ms',      // Slower, mechanical feel
    foundation: '600ms',   // Steady TV-era timing
    expansion: '400ms',    // Quick 80s energy
    goldenAge: '500ms',    // Balanced 90s feel
    digitalAge: '300ms',   // Fast digital response
    currentEra: '200ms',   // Ultra-responsive modern
  } as const;
  
  // ============================================================================
  // DELAY PATTERNS
  // ============================================================================
  
  export const DELAY = {
    // Sequential animation delays
    none: '0ms',
    short: '100ms',
    medium: '200ms',
    long: '400ms',
    extra: '600ms',
    
    // Staggered animations
    stagger: {
      fast: '50ms',
      normal: '100ms',
      slow: '150ms',
      dramatic: '200ms',
    },
    
    // Wave effects
    wave: {
      first: '0ms',
      second: '100ms',
      third: '200ms',
      fourth: '300ms',
      fifth: '400ms',
    }
  } as const;
  
  // ============================================================================
  // TRANSFORM PRESETS
  // ============================================================================
  
  export const TRANSFORMS = {
    // Translation presets
    translate: {
      slideUp: 'translateY(-100%)',
      slideDown: 'translateY(100%)',
      slideLeft: 'translateX(-100%)',
      slideRight: 'translateX(100%)',
      
      // Subtle movements
      gentleUp: 'translateY(-20px)',
      gentleDown: 'translateY(20px)',
      gentleLeft: 'translateX(-20px)',
      gentleRight: 'translateX(20px)',
    },
    
    // Scale presets
    scale: {
      none: 'scale(1)',
      tiny: 'scale(0.8)',
      small: 'scale(0.9)',
      large: 'scale(1.1)',
      big: 'scale(1.2)',
      huge: 'scale(1.5)',
      
      // Zoom effects
      zoomIn: 'scale(0.8)',
      zoomOut: 'scale(1.2)',
    },
    
    // Rotation presets
    rotate: {
      none: 'rotate(0deg)',
      slight: 'rotate(5deg)',
      quarter: 'rotate(90deg)',
      half: 'rotate(180deg)',
      full: 'rotate(360deg)',
      
      // Tilt effects
      tiltLeft: 'rotate(-3deg)',
      tiltRight: 'rotate(3deg)',
    },
    
    // Combined transforms
    combined: {
      fadeSlideUp: 'translateY(30px) scale(0.95)',
      fadeSlideDown: 'translateY(-30px) scale(0.95)',
      zoomFade: 'scale(0.8) translateY(20px)',
      tiltZoom: 'rotate(5deg) scale(1.05)',
    }
  } as const;
  
  // ============================================================================
  // KEYFRAMES DEFINITIONS
  // ============================================================================
  
  export const KEYFRAMES = {
    // Fade animations
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 }
    },
    
    fadeInUp: {
      '0%': { opacity: 0, transform: 'translateY(30px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' }
    },
    
    fadeInDown: {
      '0%': { opacity: 0, transform: 'translateY(-30px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' }
    },
    
    fadeInLeft: {
      '0%': { opacity: 0, transform: 'translateX(-30px)' },
      '100%': { opacity: 1, transform: 'translateX(0)' }
    },
    
    fadeInRight: {
      '0%': { opacity: 0, transform: 'translateX(30px)' },
      '100%': { opacity: 1, transform: 'translateX(0)' }
    },
    
    // Scale animations
    scaleIn: {
      '0%': { opacity: 0, transform: 'scale(0.8)' },
      '100%': { opacity: 1, transform: 'scale(1)' }
    },
    
    scaleUp: {
      '0%': { transform: 'scale(1)' },
      '100%': { transform: 'scale(1.1)' }
    },
    
    // Slide animations
    slideInUp: {
      '0%': { transform: 'translateY(100%)' },
      '100%': { transform: 'translateY(0)' }
    },
    
    slideInDown: {
      '0%': { transform: 'translateY(-100%)' },
      '100%': { transform: 'translateY(0)' }
    },
    
    slideInLeft: {
      '0%': { transform: 'translateX(-100%)' },
      '100%': { transform: 'translateX(0)' }
    },
    
    slideInRight: {
      '0%': { transform: 'translateX(100%)' },
      '100%': { transform: 'translateX(0)' }
    },
    
    // Rotation animations
    spin: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' }
    },
    
    spinReverse: {
      '0%': { transform: 'rotate(360deg)' },
      '100%': { transform: 'rotate(0deg)' }
    },
    
    // Bounce animations
    bounce: {
      '0%, 20%, 53%, 80%, 100%': { 
        animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        transform: 'translate3d(0, 0, 0)' 
      },
      '40%, 43%': { 
        animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        transform: 'translate3d(0, -30px, 0)' 
      },
      '70%': { 
        animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        transform: 'translate3d(0, -15px, 0)' 
      },
      '90%': { transform: 'translate3d(0, -4px, 0)' }
    },
    
    // Pulse animations
    pulse: {
      '0%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.05)' },
      '100%': { transform: 'scale(1)' }
    },
    
    pulseGlow: {
      '0%': { 
        boxShadow: '0 0 0 0 rgba(255, 215, 0, 0.7)' 
      },
      '70%': { 
        boxShadow: '0 0 0 10px rgba(255, 215, 0, 0)' 
      },
      '100%': { 
        boxShadow: '0 0 0 0 rgba(255, 215, 0, 0)' 
      }
    },
    
    // Shake animations
    shake: {
      '0%, 100%': { transform: 'translateX(0)' },
      '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
      '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' }
    },
    
    // Wobble animations
    wobble: {
      '0%': { transform: 'translateX(0%)' },
      '15%': { transform: 'translateX(-25%) rotate(-5deg)' },
      '30%': { transform: 'translateX(20%) rotate(3deg)' },
      '45%': { transform: 'translateX(-15%) rotate(-3deg)' },
      '60%': { transform: 'translateX(10%) rotate(2deg)' },
      '75%': { transform: 'translateX(-5%) rotate(-1deg)' },
      '100%': { transform: 'translateX(0%)' }
    },
    
    // Flip animations
    flipInX: {
      '0%': {
        transform: 'perspective(400px) rotateX(90deg)',
        opacity: 0
      },
      '40%': {
        transform: 'perspective(400px) rotateX(-20deg)'
      },
      '60%': {
        transform: 'perspective(400px) rotateX(10deg)',
        opacity: 1
      },
      '80%': {
        transform: 'perspective(400px) rotateX(-5deg)'
      },
      '100%': {
        transform: 'perspective(400px) rotateX(0deg)',
        opacity: 1
      }
    },
    
    flipInY: {
      '0%': {
        transform: 'perspective(400px) rotateY(90deg)',
        opacity: 0
      },
      '40%': {
        transform: 'perspective(400px) rotateY(-20deg)'
      },
      '60%': {
        transform: 'perspective(400px) rotateY(10deg)',
        opacity: 1
      },
      '80%': {
        transform: 'perspective(400px) rotateY(-5deg)'
      },
      '100%': {
        transform: 'perspective(400px) rotateY(0deg)',
        opacity: 1
      }
    },
    
    // Typewriter effect
    typewriter: {
      '0%': { width: '0%' },
      '100%': { width: '100%' }
    },
    
    blinkCaret: {
      '0%, 50%': { borderColor: 'transparent' },
      '51%, 100%': { borderColor: '#FFD700' }
    },
    
    // Progress animations
    progressLoad: {
      '0%': { width: '0%' },
      '100%': { width: '100%' }
    },
    
    // Glow animations
    glow: {
      '0%': { textShadow: '0 0 5px rgba(255, 215, 0, 0.5)' },
      '50%': { textShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.5)' },
      '100%': { textShadow: '0 0 5px rgba(255, 215, 0, 0.5)' }
    },
    
    // Film grain effect
    filmGrain: {
      '0%': { transform: 'translateX(0) translateY(0)' },
      '10%': { transform: 'translateX(-5%) translateY(-5%)' },
      '20%': { transform: 'translateX(-10%) translateY(5%)' },
      '30%': { transform: 'translateX(5%) translateY(-10%)' },
      '40%': { transform: 'translateX(-5%) translateY(15%)' },
      '50%': { transform: 'translateX(-10%) translateY(5%)' },
      '60%': { transform: 'translateX(15%) translateY(0%)' },
      '70%': { transform: 'translateX(0%) translateY(10%)' },
      '80%': { transform: 'translateX(-15%) translateY(0%)' },
      '90%': { transform: 'translateX(10%) translateY(5%)' },
      '100%': { transform: 'translateX(5%) translateY(0%)' }
    }
  } as const;
  
  // ============================================================================
  // ANIMATION PRESETS
  // ============================================================================
  
  export const ANIMATION_PRESETS = {
    // Entrance animations
    entrance: {
      fadeIn: {
        keyframes: KEYFRAMES.fadeIn,
        duration: DURATION.normal,
        timing: EASING.cinematic,
        fillMode: 'both',
      },
      slideInUp: {
        keyframes: KEYFRAMES.slideInUp,
        duration: DURATION.medium,
        timing: EASING.smooth,
        fillMode: 'both',
      },
      scaleIn: {
        keyframes: KEYFRAMES.scaleIn,
        duration: DURATION.normal,
        timing: EASING.bounce,
        fillMode: 'both',
      },
      flipInX: {
        keyframes: KEYFRAMES.flipInX,
        duration: DURATION.cinematic,
        timing: EASING.cinematic,
        fillMode: 'both',
      }
    },
    
    // Attention seekers
    attention: {
      pulse: {
        keyframes: KEYFRAMES.pulse,
        duration: DURATION.leisurely,
        timing: EASING.easeInOut,
        iterationCount: 'infinite',
      },
      bounce: {
        keyframes: KEYFRAMES.bounce,
        duration: DURATION.leisurely,
        timing: EASING.linear,
        iterationCount: 'infinite',
      },
      shake: {
        keyframes: KEYFRAMES.shake,
        duration: DURATION.comfortable,
        timing: EASING.linear,
        iterationCount: 1,
      },
      glow: {
        keyframes: KEYFRAMES.glow,
        duration: DURATION.dramatic,
        timing: EASING.easeInOut,
        iterationCount: 'infinite',
      }
    },
    
    // Loading animations
    loading: {
      spin: {
        keyframes: KEYFRAMES.spin,
        duration: DURATION.leisurely,
        timing: EASING.linear,
        iterationCount: 'infinite',
      },
      pulseGlow: {
        keyframes: KEYFRAMES.pulseGlow,
        duration: DURATION.dramatic,
        timing: EASING.easeInOut,
        iterationCount: 'infinite',
      },
      progressLoad: {
        keyframes: KEYFRAMES.progressLoad,
        duration: DURATION.dramatic,
        timing: EASING.easeOut,
        fillMode: 'both',
      }
    },
    
    // Era-specific animations
    eraTransitions: {
      origins: {
        keyframes: KEYFRAMES.fadeInUp,
        duration: DURATION.origins,
        timing: EASING.origins,
        fillMode: 'both',
      },
      foundation: {
        keyframes: KEYFRAMES.slideInLeft,
        duration: DURATION.foundation,
        timing: EASING.foundation,
        fillMode: 'both',
      },
      expansion: {
        keyframes: KEYFRAMES.scaleIn,
        duration: DURATION.expansion,
        timing: EASING.expansion,
        fillMode: 'both',
      },
      goldenAge: {
        keyframes: KEYFRAMES.flipInY,
        duration: DURATION.goldenAge,
        timing: EASING.goldenAge,
        fillMode: 'both',
      },
      digitalAge: {
        keyframes: KEYFRAMES.fadeIn,
        duration: DURATION.digitalAge,
        timing: EASING.digitalAge,
        fillMode: 'both',
      },
      currentEra: {
        keyframes: KEYFRAMES.slideInUp,
        duration: DURATION.currentEra,
        timing: EASING.currentEra,
        fillMode: 'both',
      }
    }
  } as const;
  
  // ============================================================================
  // HOVER EFFECTS
  // ============================================================================
  
  export const HOVER_EFFECTS = {
    // Scale effects
    scale: {
      subtle: {
        transform: 'scale(1.02)',
        transition: `transform ${DURATION.fast} ${EASING.easeOut}`,
      },
      normal: {
        transform: 'scale(1.05)',
        transition: `transform ${DURATION.quick} ${EASING.easeOut}`,
      },
      dramatic: {
        transform: 'scale(1.1)',
        transition: `transform ${DURATION.normal} ${EASING.bounce}`,
      }
    },
    
    // Lift effects
    lift: {
      subtle: {
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        transition: `all ${DURATION.quick} ${EASING.easeOut}`,
      },
      normal: {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
        transition: `all ${DURATION.normal} ${EASING.easeOut}`,
      },
      dramatic: {
        transform: 'translateY(-8px)',
        boxShadow: '0 16px 48px rgba(0, 0, 0, 0.3)',
        transition: `all ${DURATION.medium} ${EASING.easeOut}`,
      }
    },
    
    // Glow effects
    glow: {
      gold: {
        boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
        transition: `box-shadow ${DURATION.normal} ${EASING.easeOut}`,
      },
      blue: {
        boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
        transition: `box-shadow ${DURATION.normal} ${EASING.easeOut}`,
      },
      white: {
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
        transition: `box-shadow ${DURATION.normal} ${EASING.easeOut}`,
      }
    },
    
    // Color transitions
    color: {
      fade: {
        opacity: 0.8,
        transition: `opacity ${DURATION.fast} ${EASING.easeOut}`,
      },
      brighten: {
        filter: 'brightness(1.1)',
        transition: `filter ${DURATION.fast} ${EASING.easeOut}`,
      },
      saturate: {
        filter: 'saturate(1.2)',
        transition: `filter ${DURATION.fast} ${EASING.easeOut}`,
      }
    }
  } as const;
  
  // ============================================================================
  // SCROLL ANIMATIONS
  // ============================================================================
  
  export const SCROLL_ANIMATIONS = {
    // Parallax speeds
    parallax: {
      slow: 0.5,
      normal: 0.7,
      fast: 0.9,
      reverse: -0.3,
    },
    
    // Intersection observer thresholds
    thresholds: {
      minimal: 0.1,
      quarter: 0.25,
      half: 0.5,
      most: 0.75,
      full: 1.0,
    },
    
    // Scroll-triggered delays
    scrollDelay: {
      immediate: '0ms',
      short: '100ms',
      medium: '200ms',
      long: '400ms',
      staggered: (index: number): string => `${index * 100}ms`,
    }
  } as const;
  
  // ============================================================================
  // RESPONSIVE ANIMATION SETTINGS
  // ============================================================================
  
  export const RESPONSIVE_ANIMATIONS = {
    // Reduce motion for accessibility
    reduceMotion: {
      duration: DURATION.fast,
      timing: EASING.linear,
      transform: 'none',
      transition: 'opacity 0.2s ease',
    },
    
    // Mobile optimizations
    mobile: {
      duration: DURATION.quick,
      timing: EASING.easeOut,
      reducedTransforms: true,
    },
    
    // Desktop enhancements
    desktop: {
      duration: DURATION.normal,
      timing: EASING.cinematic,
      fullTransforms: true,
      parallaxEnabled: true,
    }
  } as const;
  
  // ============================================================================
  // EXPORT CONFIGURATION
  // ============================================================================
  
  // Export all animation constants as a single object
  export const ANIMATIONS = {
    EASING,
    DURATION,
    DELAY,
    TRANSFORMS,
    KEYFRAMES,
    ANIMATION_PRESETS,
    HOVER_EFFECTS,
    SCROLL_ANIMATIONS,
    RESPONSIVE_ANIMATIONS,
  } as const;
  
  export default ANIMATIONS;