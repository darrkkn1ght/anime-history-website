/**
 * 🎨 ANIME HISTORY WEBSITE - COLOR SYSTEM
 * 2025 Modern Design System with Era-Specific Palettes
 * Dark-mode first approach with cinematic theming
 */

// ============================================================================
// CORE BRAND COLORS
// ============================================================================

export const BRAND = {
    // Primary brand colors
    primary: {
      gold: '#FFD700',
      darkGold: '#DAA520',
      lightGold: '#FFF8DC',
      mutedGold: 'rgba(255, 215, 0, 0.8)',
    },
    
    // Electric accent colors
    electric: {
      blue: '#00D4FF',
      cyan: '#00FFFF',
      neon: '#0080FF',
      glow: 'rgba(0, 212, 255, 0.3)',
    },
    
    // Supporting colors
    supporting: {
      coral: '#FF6B6B',
      mint: '#4ECDC4',
      purple: '#9B59B6',
      orange: '#FF8C42',
    }
  } as const;
  
  // ============================================================================
  // NEUTRAL PALETTE (DARK MODE FIRST)
  // ============================================================================
  
  export const NEUTRAL = {
    // Pure blacks and whites
    black: '#000000',
    white: '#FFFFFF',
    
    // Dark theme grays
    gray: {
      50: '#FAFAFA',
      100: '#F4F4F5',
      200: '#E4E4E7',
      300: '#D4D4D8',
      400: '#A1A1AA',
      500: '#71717A',
      600: '#52525B',
      700: '#3F3F46',
      800: '#27272A',
      900: '#18181B',
      950: '#09090B',
    },
    
    // Dark backgrounds
    dark: {
      primary: '#0A0A0A',
      secondary: '#141414',
      tertiary: '#1E1E1E',
      elevated: '#252525',
      surface: '#2A2A2A',
    },
    
    // Light backgrounds (for contrast)
    light: {
      primary: '#FFFFFF',
      secondary: '#F8F9FA',
      tertiary: '#F1F3F4',
      surface: '#E8EAED',
    }
  } as const;
  
  // ============================================================================
  // ERA-SPECIFIC COLOR PALETTES
  // ============================================================================
  
  export const ERA_COLORS = {
    // Origins Era (1900s-1930s) - Sepia/Vintage
    origins: {
      primary: '#8B4513', // Saddle brown
      secondary: '#F4E4BC', // Cream
      accent: '#CD853F', // Peru
      background: '#2F1B14', // Dark brown
      text: '#DEB887', // Burlywood
      overlay: 'rgba(139, 69, 19, 0.1)',
    },
    
    // Foundation Era (1950s-1960s) - Early Color TV
    foundation: {
      primary: '#4169E1', // Royal blue
      secondary: '#FFE4B5', // Moccasin
      accent: '#DC143C', // Crimson
      background: '#191970', // Midnight blue
      text: '#F0F8FF', // Alice blue
      overlay: 'rgba(65, 105, 225, 0.1)',
    },
    
    // Expansion Era (1970s-1980s) - Bold Colors
    expansion: {
      primary: '#FF4500', // Orange red
      secondary: '#FFFF00', // Yellow
      accent: '#FF1493', // Deep pink
      background: '#2E0854', // Dark purple
      text: '#FFE4E1', // Misty rose
      overlay: 'rgba(255, 69, 0, 0.1)',
    },
    
    // Golden Age (1990s-2000s) - Vibrant
    goldenAge: {
      primary: '#FF6347', // Tomato
      secondary: '#00CED1', // Dark turquoise
      accent: '#FFD700', // Gold
      background: '#000080', // Navy
      text: '#F5F5DC', // Beige
      overlay: 'rgba(255, 99, 71, 0.1)',
    },
    
    // Digital Age (2010s) - Tech Colors
    digitalAge: {
      primary: '#00D4FF', // Electric blue
      secondary: '#FF00FF', // Magenta
      accent: '#00FF00', // Lime
      background: '#0D1117', // GitHub dark
      text: '#C9D1D9', // GitHub text
      overlay: 'rgba(0, 212, 255, 0.1)',
    },
    
    // Current Era (2020s-2025) - Ultra Modern
    currentEra: {
      primary: '#FF3B30', // System red
      secondary: '#007AFF', // System blue
      accent: '#34C759', // System green
      background: '#000000', // Pure black
      text: '#FFFFFF', // Pure white
      overlay: 'rgba(255, 59, 48, 0.1)',
    }
  } as const;
  
  // ============================================================================
  // SEMANTIC COLORS
  // ============================================================================
  
  export const SEMANTIC = {
    // Status colors
    success: {
      primary: '#10B981',
      secondary: '#34D399',
      background: 'rgba(16, 185, 129, 0.1)',
      text: '#047857',
    },
    
    warning: {
      primary: '#F59E0B',
      secondary: '#FBBF24',
      background: 'rgba(245, 158, 11, 0.1)',
      text: '#92400E',
    },
    
    error: {
      primary: '#EF4444',
      secondary: '#F87171',
      background: 'rgba(239, 68, 68, 0.1)',
      text: '#B91C1C',
    },
    
    info: {
      primary: '#3B82F6',
      secondary: '#60A5FA',
      background: 'rgba(59, 130, 246, 0.1)',
      text: '#1D4ED8',
    }
  } as const;
  
  // ============================================================================
  // GLASSMORPHISM COLORS
  // ============================================================================
  
  export const GLASS = {
    // Glass backgrounds with backdrop blur
    backgrounds: {
      light: 'rgba(255, 255, 255, 0.1)',
      medium: 'rgba(255, 255, 255, 0.15)',
      heavy: 'rgba(255, 255, 255, 0.25)',
      dark: 'rgba(0, 0, 0, 0.1)',
      darkMedium: 'rgba(0, 0, 0, 0.15)',
      darkHeavy: 'rgba(0, 0, 0, 0.25)',
    },
    
    // Glass borders
    borders: {
      light: 'rgba(255, 255, 255, 0.2)',
      medium: 'rgba(255, 255, 255, 0.3)',
      dark: 'rgba(0, 0, 0, 0.2)',
      accent: 'rgba(255, 215, 0, 0.3)',
    },
    
    // Glass shadows
    shadows: {
      sm: '0 2px 8px rgba(0, 0, 0, 0.1)',
      md: '0 4px 16px rgba(0, 0, 0, 0.15)',
      lg: '0 8px 32px rgba(0, 0, 0, 0.2)',
      xl: '0 16px 64px rgba(0, 0, 0, 0.25)',
    }
  } as const;
  
  // ============================================================================
  // GRADIENT DEFINITIONS
  // ============================================================================
  
  export const GRADIENTS = {
    // Brand gradients
    brand: {
      primary: 'linear-gradient(135deg, #FFD700 0%, #DAA520 100%)',
      electric: 'linear-gradient(135deg, #00D4FF 0%, #0080FF 100%)',
      sunset: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
    },
    
    // Era gradients
    era: {
      origins: 'linear-gradient(135deg, #8B4513 0%, #CD853F 100%)',
      foundation: 'linear-gradient(135deg, #4169E1 0%, #DC143C 100%)',
      expansion: 'linear-gradient(135deg, #FF4500 0%, #FF1493 100%)',
      goldenAge: 'linear-gradient(135deg, #FF6347 0%, #00CED1 100%)',
      digitalAge: 'linear-gradient(135deg, #00D4FF 0%, #FF00FF 100%)',
      currentEra: 'linear-gradient(135deg, #FF3B30 0%, #007AFF 100%)',
    },
    
    // Background gradients
    backgrounds: {
      dark: 'linear-gradient(135deg, #0A0A0A 0%, #141414 100%)',
      cinema: 'linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #000000 100%)',
      glow: 'radial-gradient(circle at center, rgba(255, 215, 0, 0.1) 0%, transparent 70%)',
    },
    
    // Overlay gradients
    overlays: {
      fadeTop: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)',
      fadeBottom: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
      vignette: 'radial-gradient(circle, transparent 30%, rgba(0,0,0,0.5) 100%)',
    }
  } as const;
  
  // ============================================================================
  // SHADOW SYSTEM
  // ============================================================================
  
  export const SHADOWS = {
    // Elevation shadows
    elevation: {
      1: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
      2: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
      3: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
      4: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
      5: '0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)',
    },
    
    // Glow effects
    glow: {
      gold: '0 0 20px rgba(255, 215, 0, 0.5)',
      blue: '0 0 20px rgba(0, 212, 255, 0.5)',
      white: '0 0 20px rgba(255, 255, 255, 0.3)',
      soft: '0 0 40px rgba(255, 215, 0, 0.2)',
    },
    
    // Inner shadows
    inset: {
      sm: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
      md: 'inset 0 4px 8px rgba(0, 0, 0, 0.15)',
      lg: 'inset 0 8px 16px rgba(0, 0, 0, 0.2)',
    }
  } as const;
  
  // ============================================================================
  // COLOR UTILITIES
  // ============================================================================
  
  export const COLOR_UTILS = {
    // Opacity variations
    withOpacity: (color: string, opacity: number) => `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`,
    
    // RGB to HSL conversion (simplified)
    hexToRgb: (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
  } as const;
  
  // ============================================================================
  // THEME CONFIGURATION
  // ============================================================================
  
  export const THEME_CONFIG = {
    // Default theme
    default: 'dark',
    
    // Available themes
    themes: {
      dark: {
        background: NEUTRAL.dark.primary,
        surface: NEUTRAL.dark.secondary,
        text: NEUTRAL.white,
        accent: BRAND.primary.gold,
      },
      light: {
        background: NEUTRAL.light.primary,
        surface: NEUTRAL.light.secondary,
        text: NEUTRAL.black,
        accent: BRAND.primary.darkGold,
      }
    }
  } as const;
  
  // Export all color constants as a single object for easy access
  export const COLORS = {
    BRAND,
    NEUTRAL,
    ERA_COLORS,
    SEMANTIC,
    GLASS,
    GRADIENTS,
    SHADOWS,
    COLOR_UTILS,
    THEME_CONFIG,
  } as const;
  
  export default COLORS;