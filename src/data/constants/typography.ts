/**
 * 📝 ANIME HISTORY WEBSITE - TYPOGRAPHY SYSTEM
 * 2025 Modern Typography with Japanese-Inspired Fonts
 * Responsive scaling and cinematic hierarchy
 */

// ============================================================================
// FONT FAMILIES
// ============================================================================

export const FONT_FAMILIES = {
    // Primary fonts
    primary: {
      // Japanese-inspired font for headers and titles
      display: '"Noto Sans JP", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      // Modern sans-serif for body text
      body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      // Monospace for code and technical content
      mono: '"JetBrains Mono", "Fira Code", "Consolas", monospace',
    },
    
    // Era-specific fonts (fallback to primary if custom fonts unavailable)
    era: {
      origins: '"Times New Roman", "Noto Serif JP", serif', // Classic serif for vintage feel
      foundation: '"Helvetica", "Noto Sans JP", sans-serif', // Clean modernist
      expansion: '"Impact", "Noto Sans JP", sans-serif', // Bold and dynamic
      goldenAge: '"Arial Black", "Noto Sans JP", sans-serif', // Strong and confident
      digitalAge: '"SF Pro Display", "Inter", sans-serif', // Tech-modern
      currentEra: '"System UI", "Inter", sans-serif', // Ultra-modern system fonts
    },
    
    // Decorative fonts for special elements
    decorative: {
      cinematic: '"Bebas Neue", "Noto Sans JP", sans-serif',
      elegant: '"Playfair Display", "Noto Serif JP", serif',
      technical: '"Space Mono", "JetBrains Mono", monospace',
    }
  } as const;
  
  // ============================================================================
  // FONT WEIGHTS
  // ============================================================================
  
  export const FONT_WEIGHTS = {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  } as const;
  
  // ============================================================================
  // FONT SIZES (Mobile-First Responsive)
  // ============================================================================
  
  export const FONT_SIZES = {
    // Display sizes (for hero titles, era headers)
    display: {
      sm: {
        mobile: '2rem',      // 32px
        tablet: '2.5rem',    // 40px
        desktop: '3rem',     // 48px
        wide: '3.5rem',      // 56px
      },
      md: {
        mobile: '2.5rem',    // 40px
        tablet: '3rem',      // 48px
        desktop: '4rem',     // 64px
        wide: '4.5rem',      // 72px
      },
      lg: {
        mobile: '3rem',      // 48px
        tablet: '4rem',      // 64px
        desktop: '5rem',     // 80px
        wide: '6rem',        // 96px
      },
      xl: {
        mobile: '3.5rem',    // 56px
        tablet: '5rem',      // 80px
        desktop: '6rem',     // 96px
        wide: '7rem',        // 112px
      }
    },
    
    // Heading sizes
    heading: {
      h1: {
        mobile: '1.875rem',  // 30px
        tablet: '2.25rem',   // 36px
        desktop: '2.5rem',   // 40px
        wide: '3rem',        // 48px
      },
      h2: {
        mobile: '1.5rem',    // 24px
        tablet: '1.875rem',  // 30px
        desktop: '2.25rem',  // 36px
        wide: '2.5rem',      // 40px
      },
      h3: {
        mobile: '1.25rem',   // 20px
        tablet: '1.5rem',    // 24px
        desktop: '1.875rem', // 30px
        wide: '2rem',        // 32px
      },
      h4: {
        mobile: '1.125rem',  // 18px
        tablet: '1.25rem',   // 20px
        desktop: '1.5rem',   // 24px
        wide: '1.625rem',    // 26px
      },
      h5: {
        mobile: '1rem',      // 16px
        tablet: '1.125rem',  // 18px
        desktop: '1.25rem',  // 20px
        wide: '1.375rem',    // 22px
      },
      h6: {
        mobile: '0.875rem',  // 14px
        tablet: '1rem',      // 16px
        desktop: '1.125rem', // 18px
        wide: '1.25rem',     // 20px
      }
    },
    
    // Body text sizes
    body: {
      xl: {
        mobile: '1.125rem',  // 18px
        tablet: '1.25rem',   // 20px
        desktop: '1.375rem', // 22px
        wide: '1.5rem',      // 24px
      },
      lg: {
        mobile: '1rem',      // 16px
        tablet: '1.125rem',  // 18px
        desktop: '1.25rem',  // 20px
        wide: '1.375rem',    // 22px
      },
      md: {
        mobile: '0.875rem',  // 14px
        tablet: '1rem',      // 16px
        desktop: '1.125rem', // 18px
        wide: '1.25rem',     // 20px
      },
      sm: {
        mobile: '0.75rem',   // 12px
        tablet: '0.875rem',  // 14px
        desktop: '1rem',     // 16px
        wide: '1.125rem',    // 18px
      },
      xs: {
        mobile: '0.625rem',  // 10px
        tablet: '0.75rem',   // 12px
        desktop: '0.875rem', // 14px
        wide: '1rem',        // 16px
      }
    }
  } as const;
  
  // ============================================================================
  // LINE HEIGHTS
  // ============================================================================
  
  export const LINE_HEIGHTS = {
    none: 1,
    tight: 1.1,
    snug: 1.2,
    normal: 1.4,
    relaxed: 1.6,
    loose: 1.8,
    
    // Specific line heights for different content types
    display: 1.1,    // Tight for large display text
    heading: 1.2,    // Slightly loose for readability
    body: 1.6,       // Comfortable reading
    caption: 1.4,    // Balanced for small text
  } as const;
  
  // ============================================================================
  // LETTER SPACING
  // ============================================================================
  
  export const LETTER_SPACING = {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
    
    // Context-specific spacing
    display: '-0.025em',  // Slightly tighter for large text
    heading: '0em',       // Normal for headings
    body: '0em',          // Normal for body text
    button: '0.025em',    // Slightly wider for buttons
    caption: '0.025em',   // Wider for small text legibility
  } as const;
  
  // ============================================================================
  // TYPOGRAPHY SCALES
  // ============================================================================
  
  export const TYPOGRAPHY_SCALES = {
    // Era-specific typography styles
    origins: {
      fontFamily: FONT_FAMILIES.era.origins,
      letterSpacing: LETTER_SPACING.wide,
      fontWeight: FONT_WEIGHTS.regular,
      textTransform: 'uppercase' as const,
    },
    
    foundation: {
      fontFamily: FONT_FAMILIES.era.foundation,
      letterSpacing: LETTER_SPACING.normal,
      fontWeight: FONT_WEIGHTS.medium,
      textTransform: 'none' as const,
    },
    
    expansion: {
      fontFamily: FONT_FAMILIES.era.expansion,
      letterSpacing: LETTER_SPACING.wider,
      fontWeight: FONT_WEIGHTS.bold,
      textTransform: 'uppercase' as const,
    },
    
    goldenAge: {
      fontFamily: FONT_FAMILIES.era.goldenAge,
      letterSpacing: LETTER_SPACING.normal,
      fontWeight: FONT_WEIGHTS.extraBold,
      textTransform: 'none' as const,
    },
    
    digitalAge: {
      fontFamily: FONT_FAMILIES.era.digitalAge,
      letterSpacing: LETTER_SPACING.tight,
      fontWeight: FONT_WEIGHTS.semiBold,
      textTransform: 'none' as const,
    },
    
    currentEra: {
      fontFamily: FONT_FAMILIES.era.currentEra,
      letterSpacing: LETTER_SPACING.tighter,
      fontWeight: FONT_WEIGHTS.medium,
      textTransform: 'none' as const,
    }
  } as const;
  
  // ============================================================================
  // TEXT STYLES (COMPONENT-READY)
  // ============================================================================
  
  export const TEXT_STYLES = {
    // Hero text styles
    hero: {
      primary: {
        fontFamily: FONT_FAMILIES.primary.display,
        fontSize: FONT_SIZES.display.xl,
        fontWeight: FONT_WEIGHTS.black,
        lineHeight: LINE_HEIGHTS.display,
        letterSpacing: LETTER_SPACING.display,
      },
      secondary: {
        fontFamily: FONT_FAMILIES.primary.body,
        fontSize: FONT_SIZES.body.xl,
        fontWeight: FONT_WEIGHTS.regular,
        lineHeight: LINE_HEIGHTS.body,
        letterSpacing: LETTER_SPACING.body,
      }
    },
    
    // Section headings
    section: {
      title: {
        fontFamily: FONT_FAMILIES.primary.display,
        fontSize: FONT_SIZES.heading.h1,
        fontWeight: FONT_WEIGHTS.bold,
        lineHeight: LINE_HEIGHTS.heading,
        letterSpacing: LETTER_SPACING.heading,
      },
      subtitle: {
        fontFamily: FONT_FAMILIES.primary.body,
        fontSize: FONT_SIZES.heading.h3,
        fontWeight: FONT_WEIGHTS.medium,
        lineHeight: LINE_HEIGHTS.heading,
        letterSpacing: LETTER_SPACING.heading,
      }
    },
    
    // Era titles
    era: {
      title: {
        fontFamily: FONT_FAMILIES.decorative.cinematic,
        fontSize: FONT_SIZES.display.md,
        fontWeight: FONT_WEIGHTS.black,
        lineHeight: LINE_HEIGHTS.display,
        letterSpacing: LETTER_SPACING.widest,
        textTransform: 'uppercase' as const,
      },
      period: {
        fontFamily: FONT_FAMILIES.primary.body,
        fontSize: FONT_SIZES.body.lg,
        fontWeight: FONT_WEIGHTS.light,
        lineHeight: LINE_HEIGHTS.normal,
        letterSpacing: LETTER_SPACING.wide,
      }
    },
    
    // Content text
    content: {
      paragraph: {
        fontFamily: FONT_FAMILIES.primary.body,
        fontSize: FONT_SIZES.body.md,
        fontWeight: FONT_WEIGHTS.regular,
        lineHeight: LINE_HEIGHTS.body,
        letterSpacing: LETTER_SPACING.body,
      },
      lead: {
        fontFamily: FONT_FAMILIES.primary.body,
        fontSize: FONT_SIZES.body.lg,
        fontWeight: FONT_WEIGHTS.regular,
        lineHeight: LINE_HEIGHTS.relaxed,
        letterSpacing: LETTER_SPACING.body,
      },
      caption: {
        fontFamily: FONT_FAMILIES.primary.body,
        fontSize: FONT_SIZES.body.sm,
        fontWeight: FONT_WEIGHTS.regular,
        lineHeight: LINE_HEIGHTS.caption,
        letterSpacing: LETTER_SPACING.caption,
      }
    },
    
    // UI elements
    ui: {
      button: {
        fontFamily: FONT_FAMILIES.primary.body,
        fontSize: FONT_SIZES.body.md,
        fontWeight: FONT_WEIGHTS.semiBold,
        lineHeight: LINE_HEIGHTS.normal,
        letterSpacing: LETTER_SPACING.button,
        textTransform: 'none' as const,
      },
      link: {
        fontFamily: FONT_FAMILIES.primary.body,
        fontSize: FONT_SIZES.body.md,
        fontWeight: FONT_WEIGHTS.medium,
        lineHeight: LINE_HEIGHTS.normal,
        letterSpacing: LETTER_SPACING.normal,
        textDecoration: 'underline',
      },
      label: {
        fontFamily: FONT_FAMILIES.primary.body,
        fontSize: FONT_SIZES.body.sm,
        fontWeight: FONT_WEIGHTS.semiBold,
        lineHeight: LINE_HEIGHTS.normal,
        letterSpacing: LETTER_SPACING.wide,
        textTransform: 'uppercase' as const,
      }
    },
    
    // Navigation
    navigation: {
      primary: {
        fontFamily: FONT_FAMILIES.primary.body,
        fontSize: FONT_SIZES.body.md,
        fontWeight: FONT_WEIGHTS.medium,
        lineHeight: LINE_HEIGHTS.normal,
        letterSpacing: LETTER_SPACING.normal,
      },
      secondary: {
        fontFamily: FONT_FAMILIES.primary.body,
        fontSize: FONT_SIZES.body.sm,
        fontWeight: FONT_WEIGHTS.regular,
        lineHeight: LINE_HEIGHTS.normal,
        letterSpacing: LETTER_SPACING.wide,
      }
    }
  } as const;
  
  // ============================================================================
  // RESPONSIVE TYPOGRAPHY UTILITIES
  // ============================================================================
  
  export const RESPONSIVE_UTILS = {
    // Generate responsive font size CSS
    responsiveSize: (sizeConfig: { mobile: string; tablet: string; desktop: string; wide: string }) => ({
      fontSize: sizeConfig.mobile,
      '@media (min-width: 768px)': {
        fontSize: sizeConfig.tablet,
      },
      '@media (min-width: 1024px)': {
        fontSize: sizeConfig.desktop,
      },
      '@media (min-width: 1440px)': {
        fontSize: sizeConfig.wide,
      },
    }),
    
    // Fluid typography calculation
    fluidType: (minSize: number, maxSize: number, minVw: number = 320, maxVw: number = 1440) => {
      const slope = (maxSize - minSize) / (maxVw - minVw);
      const yIntercept = minSize - slope * minVw;
      return `clamp(${minSize}px, ${yIntercept}px + ${slope * 100}vw, ${maxSize}px)`;
    }
  } as const;
  
  // ============================================================================
  // ACCESSIBILITY FEATURES
  // ============================================================================
  
  export const ACCESSIBILITY = {
    // Minimum contrast ratios
    contrast: {
      normal: 4.5,    // AA standard
      large: 3,       // AA standard for large text
      enhanced: 7,    // AAA standard
    },
    
    // Focus styles
    focus: {
      outline: '2px solid #FFD700',
      outlineOffset: '2px',
      borderRadius: '4px',
    },
    
    // Screen reader text
    srOnly: {
      position: 'absolute' as const,
      width: '1px',
      height: '1px',
      padding: '0',
      margin: '-1px',
      overflow: 'hidden' as const,
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap' as const,
      border: '0',
    }
  } as const;
  
  // ============================================================================
  // JAPANESE TYPOGRAPHY SPECIFICS
  // ============================================================================
  
  export const JAPANESE_TYPOGRAPHY = {
    // Writing modes
    writingMode: {
      horizontal: 'horizontal-tb',
      vertical: 'vertical-rl',
    },
    
    // Text orientation
    textOrientation: {
      mixed: 'mixed',
      upright: 'upright',
      sideways: 'sideways',
    },
    
    // Font feature settings for Japanese fonts
    fontFeatures: {
      // Proportional spacing
      palt: '"palt" 1',
      // Kerning
      kern: '"kern" 1',
      // Contextual alternates
      calt: '"calt" 1',
      // Stylistic alternates
      salt: '"salt" 1',
    },
    
    // Japanese text spacing
    spacing: {
      // Character spacing for Japanese text
      normal: '0em',
      wide: '0.1em',
      wider: '0.2em',
    }
  } as const;
  
  // ============================================================================
  // ANIMATION-READY TEXT STYLES
  // ============================================================================
  
  export const ANIMATED_TEXT = {
    // Fade-in text animations
    fadeIn: {
      opacity: 0,
      transform: 'translateY(20px)',
      transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
    },
    
    // Slide-in text animations
    slideIn: {
      left: {
        opacity: 0,
        transform: 'translateX(-30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
      },
      right: {
        opacity: 0,
        transform: 'translateX(30px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
      }
    },
    
    // Typewriter effect
    typewriter: {
      overflow: 'hidden' as const,
      borderRight: '2px solid #FFD700',
      whiteSpace: 'nowrap' as const,
      animation: 'typewriter 3s steps(30, end), blink-caret 0.75s step-end infinite',
    },
    
    // Glow text effect
    glow: {
      textShadow: '0 0 10px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.3)',
      transition: 'text-shadow 0.3s ease-in-out',
    }
  } as const;
  
  // ============================================================================
  // TEXT TRUNCATION UTILITIES
  // ============================================================================
  
  export const TEXT_TRUNCATION = {
    // Single line truncation
    singleLine: {
      overflow: 'hidden' as const,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap' as const,
    },
    
    // Multi-line truncation (webkit only)
    multiLine: (lines: number) => ({
      display: '-webkit-box',
      WebkitLineClamp: lines,
      WebkitBoxOrient: 'vertical' as const,
      overflow: 'hidden' as const,
    }),
    
    // Word break utilities
    wordBreak: {
      normal: 'normal',
      breakAll: 'break-all',
      keepAll: 'keep-all',
      breakWord: 'break-word',
    }
  } as const;
  
  // ============================================================================
  // THEME VARIANTS
  // ============================================================================
  
  export const THEME_VARIANTS = {
    // Dark theme typography
    dark: {
      textColor: '#FFFFFF',
      mutedColor: '#A1A1AA',
      accentColor: '#FFD700',
      linkColor: '#00D4FF',
      selectionBg: 'rgba(255, 215, 0, 0.2)',
    },
    
    // Light theme typography
    light: {
      textColor: '#18181B',
      mutedColor: '#71717A',
      accentColor: '#DAA520',
      linkColor: '#0080FF',
      selectionBg: 'rgba(218, 165, 32, 0.2)',
    }
  } as const;
  
  // ============================================================================
  // EXPORT CONFIGURATION
  // ============================================================================
  
  // Export all typography constants as a single object
  export const TYPOGRAPHY = {
    FONT_FAMILIES,
    FONT_WEIGHTS,
    FONT_SIZES,
    LINE_HEIGHTS,
    LETTER_SPACING,
    TYPOGRAPHY_SCALES,
    TEXT_STYLES,
    RESPONSIVE_UTILS,
    ACCESSIBILITY,
    JAPANESE_TYPOGRAPHY,
    ANIMATED_TEXT,
    TEXT_TRUNCATION,
    THEME_VARIANTS,
  } as const;
  
  export default TYPOGRAPHY;