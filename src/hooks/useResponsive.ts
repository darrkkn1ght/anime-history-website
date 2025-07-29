import { useState, useEffect } from 'react';

// Breakpoint definitions matching the design system
const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export interface ResponsiveState {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isWide: boolean;
  breakpoint: Breakpoint;
  orientation: 'portrait' | 'landscape';
  isTouch: boolean;
}

/**
 * Custom hook for responsive design utilities
 * Provides screen size information, breakpoint detection, and device capabilities
 */
export const useResponsive = (): ResponsiveState => {
  const [state, setState] = useState<ResponsiveState>({
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isWide: false,
    breakpoint: 'mobile',
    orientation: 'portrait',
    isTouch: false,
  });

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') return;

    const updateResponsiveState = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Determine current breakpoint
      let breakpoint: Breakpoint = 'mobile';
      if (width >= breakpoints.wide) {
        breakpoint = 'wide';
      } else if (width >= breakpoints.desktop) {
        breakpoint = 'desktop';
      } else if (width >= breakpoints.tablet) {
        breakpoint = 'tablet';
      }

      // Calculate device states
      const isMobile = width < breakpoints.tablet;
      const isTablet = width >= breakpoints.tablet && width < breakpoints.desktop;
      const isDesktop = width >= breakpoints.desktop && width < breakpoints.wide;
      const isWide = width >= breakpoints.wide;
      
      // Determine orientation
      const orientation = width > height ? 'landscape' : 'portrait';
      
      // Detect touch capability
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      setState({
        width,
        height,
        isMobile,
        isTablet,
        isDesktop,
        isWide,
        breakpoint,
        orientation,
        isTouch,
      });
    };

    // Initial call
    updateResponsiveState();

    // Set up event listeners
    const handleResize = () => {
      // Debounce resize events for performance
      updateResponsiveState();
    };

    const handleOrientationChange = () => {
      // Small delay to ensure dimensions are updated after orientation change
      setTimeout(updateResponsiveState, 100);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return state;
};

/**
 * Hook for getting media query matches
 * @param query - CSS media query string
 * @returns boolean indicating if the query matches
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handler);
      return () => mediaQuery.removeListener(handler);
    }
  }, [query]);

  return matches;
};

/**
 * Hook for getting breakpoint-specific values
 * @param values - Object with breakpoint keys and corresponding values
 * @returns The value for the current breakpoint
 */
export const useBreakpointValue = <T>(values: {
  mobile?: T;
  tablet?: T;
  desktop?: T;
  wide?: T;
}): T | undefined => {
  const { breakpoint } = useResponsive();
  
  // Return the value for the current breakpoint, falling back to smaller breakpoints
  if (breakpoint === 'wide' && values.wide !== undefined) {
    return values.wide;
  }
  if (breakpoint === 'desktop' && values.desktop !== undefined) {
    return values.desktop;
  }
  if (breakpoint === 'tablet' && values.tablet !== undefined) {
    return values.tablet;
  }
  if (values.mobile !== undefined) {
    return values.mobile;
  }
  
  return undefined;
};

/**
 * Hook for conditional rendering based on breakpoints
 * @param breakpoint - Target breakpoint
 * @param condition - 'up' (at or above) or 'down' (at or below) or 'only' (exact match)
 * @returns boolean indicating if condition is met
 */
export const useBreakpoint = (
  targetBreakpoint: Breakpoint,
  condition: 'up' | 'down' | 'only' = 'up'
): boolean => {
  const { width } = useResponsive();
  const targetWidth = breakpoints[targetBreakpoint];

  switch (condition) {
    case 'up':
      return width >= targetWidth;
    case 'down':
      return width < targetWidth;
    case 'only':
      const nextBreakpoint = getNextBreakpoint(targetBreakpoint);
      return width >= targetWidth && (nextBreakpoint ? width < breakpoints[nextBreakpoint] : true);
    default:
      return false;
  }
};

/**
 * Utility function to get the next breakpoint in the sequence
 */
const getNextBreakpoint = (current: Breakpoint): Breakpoint | null => {
  const breakpointOrder: Breakpoint[] = ['mobile', 'tablet', 'desktop', 'wide'];
  const currentIndex = breakpointOrder.indexOf(current);
  return currentIndex < breakpointOrder.length - 1 ? breakpointOrder[currentIndex + 1] : null;
};

/**
 * Hook for getting responsive grid columns
 * @param columns - Number of columns for each breakpoint
 * @returns Current number of columns
 */
export const useResponsiveColumns = (columns: {
  mobile?: number;
  tablet?: number;
  desktop?: number;
  wide?: number;
}): number => {
  const { breakpoint } = useResponsive();
  
  // Default fallback values
  const defaults = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
    wide: 4,
    ...columns,
  };
  
  return defaults[breakpoint];
};

/**
 * Hook for responsive font sizes
 * @param sizes - Font sizes for each breakpoint (in rem or px)
 * @returns Current font size
 */
export const useResponsiveFontSize = (sizes: {
  mobile?: string;
  tablet?: string;
  desktop?: string;
  wide?: string;
}): string => {
  const currentSize = useBreakpointValue(sizes);
  return currentSize || sizes.mobile || '1rem';
};

export default useResponsive;