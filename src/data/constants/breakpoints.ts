/**
 * Responsive Breakpoints System
 * Mobile-first approach with consistent breakpoint values
 * Used across components, hooks, and utilities
 */

// Core breakpoint values (mobile-first)
export const BREAKPOINTS = {
    mobile: 320,
    tablet: 768,
    desktop: 1024,
    wide: 1440,
    ultrawide: 1920
  } as const;
  
  // CSS media query strings
  export const MEDIA_QUERIES = {
    mobile: `(min-width: ${BREAKPOINTS.mobile}px)`,
    tablet: `(min-width: ${BREAKPOINTS.tablet}px)`,
    desktop: `(min-width: ${BREAKPOINTS.desktop}px)`,
    wide: `(min-width: ${BREAKPOINTS.wide}px)`,
    ultrawide: `(min-width: ${BREAKPOINTS.ultrawide}px)`,
    
    // Max-width queries for specific targeting
    mobileOnly: `(max-width: ${BREAKPOINTS.tablet - 1}px)`,
    tabletOnly: `(min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop - 1}px)`,
    desktopOnly: `(min-width: ${BREAKPOINTS.desktop}px) and (max-width: ${BREAKPOINTS.wide - 1}px)`,
    
    // Orientation queries
    landscape: '(orientation: landscape)',
    portrait: '(orientation: portrait)',
    
    // High DPI displays
    retina: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
    
    // Hover capability detection
    hover: '(hover: hover)',
    noHover: '(hover: none)',
    
    // Reduced motion preference
    reducedMotion: '(prefers-reduced-motion: reduce)',
    motionOk: '(prefers-reduced-motion: no-preference)'
  } as const;
  
  // Tailwind breakpoint configuration
  export const TAILWIND_SCREENS = {
    sm: `${BREAKPOINTS.mobile}px`,
    md: `${BREAKPOINTS.tablet}px`,
    lg: `${BREAKPOINTS.desktop}px`,
    xl: `${BREAKPOINTS.wide}px`,
    '2xl': `${BREAKPOINTS.ultrawide}px`
  } as const;
  
  // Container max-widths for each breakpoint
  export const CONTAINER_SIZES = {
    mobile: '100%',
    tablet: '720px',
    desktop: '960px',
    wide: '1200px',
    ultrawide: '1400px'
  } as const;
  
  // Grid system configuration
  export const GRID_COLUMNS = {
    mobile: 4,
    tablet: 8,
    desktop: 12,
    wide: 12,
    ultrawide: 16
  } as const;
  
  // Spacing multipliers for responsive design
  export const RESPONSIVE_SPACING = {
    mobile: 1,
    tablet: 1.25,
    desktop: 1.5,
    wide: 1.75,
    ultrawide: 2
  } as const;
  
  // Typography scale adjustments per breakpoint
  export const RESPONSIVE_TYPE_SCALE = {
    mobile: 0.875,
    tablet: 1,
    desktop: 1.125,
    wide: 1.25,
    ultrawide: 1.375
  } as const;
  
  // Animation duration adjustments for different screen sizes
  export const RESPONSIVE_ANIMATION_SPEED = {
    mobile: 1.2, // Slightly slower on mobile
    tablet: 1,
    desktop: 0.9,
    wide: 0.8,
    ultrawide: 0.7
  } as const;
  
  // Z-index layers system
  export const Z_INDEX = {
    background: -1,
    content: 1,
    overlay: 10,
    dropdown: 100,
    sticky: 200,
    modal: 1000,
    toast: 2000,
    tooltip: 3000,
    loading: 9000,
    debug: 10000
  } as const;
  
  // Export type definitions
  export type BreakpointKey = keyof typeof BREAKPOINTS;
  export type MediaQueryKey = keyof typeof MEDIA_QUERIES;
  export type ContainerSizeKey = keyof typeof CONTAINER_SIZES;
  
  // Utility function to get breakpoint value
  export const getBreakpoint = (key: BreakpointKey): number => BREAKPOINTS[key];
  
  // Utility function to check if current width matches breakpoint
  export const matchesBreakpoint = (width: number, breakpoint: BreakpointKey): boolean => {
    return width >= BREAKPOINTS[breakpoint];
  };
  
  // Get the current active breakpoint based on width
  export const getCurrentBreakpoint = (width: number): BreakpointKey => {
    if (width >= BREAKPOINTS.ultrawide) return 'ultrawide';
    if (width >= BREAKPOINTS.wide) return 'wide';
    if (width >= BREAKPOINTS.desktop) return 'desktop';
    if (width >= BREAKPOINTS.tablet) return 'tablet';
    return 'mobile';
  };