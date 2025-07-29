/**
 * Custom Hook for Scroll Progress Tracking
 * Provides comprehensive scroll position tracking and progress calculation
 * for the anime history website timeline experience
 */

'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

export interface ScrollProgress {
  /** Current scroll position in pixels */
  scrollY: number;
  /** Previous scroll position for direction detection */
  previousScrollY: number;
  /** Scroll progress as percentage (0-1) */
  progress: number;
  /** Whether user is scrolling down */
  isScrollingDown: boolean;
  /** Whether user is scrolling up */
  isScrollingUp: boolean;
  /** Whether user is currently scrolling */
  isScrolling: boolean;
  /** Whether user is at the top of the page */
  isAtTop: boolean;
  /** Whether user is at the bottom of the page */
  isAtBottom: boolean;
  /** Current scroll velocity in pixels per frame */
  velocity: number;
  /** Document height for calculations */
  documentHeight: number;
  /** Viewport height */
  viewportHeight: number;
}

export interface UseScrollProgressOptions {
  /** Throttle scroll events (in milliseconds) */
  throttle?: number;
  /** Element to track (defaults to window) */
  element?: HTMLElement | null;
  /** Offset from top before considering "scrolled" */
  topOffset?: number;
  /** Offset from bottom before considering "at bottom" */
  bottomOffset?: number;
  /** Enable velocity calculation */
  trackVelocity?: boolean;
  /** Callback when scroll direction changes */
  onDirectionChange?: (direction: 'up' | 'down') => void;
  /** Callback when reaching specific progress milestones */
  onProgressMilestone?: (progress: number, milestone: number) => void;
  /** Progress milestones to track (0-1) */
  progressMilestones?: number[];
}

/**
 * Hook for tracking scroll progress and position
 */
export const useScrollProgress = (options: UseScrollProgressOptions = {}): ScrollProgress => {
  const {
    throttle = 16, // ~60fps
    element = null,
    topOffset = 10,
    bottomOffset = 10,
    trackVelocity = true,
    onDirectionChange,
    onProgressMilestone,
    progressMilestones = [0.25, 0.5, 0.75, 1.0]
  } = options;

  const [scrollState, setScrollState] = useState<ScrollProgress>({
    scrollY: 0,
    previousScrollY: 0,
    progress: 0,
    isScrollingDown: false,
    isScrollingUp: false,
    isScrolling: false,
    isAtTop: true,
    isAtBottom: false,
    velocity: 0,
    documentHeight: 0,
    viewportHeight: 0,
  });

  const throttleRef = useRef<NodeJS.Timeout | null>(null);
  const velocityRef = useRef<{ lastScrollY: number; lastTime: number }>({
    lastScrollY: 0,
    lastTime: Date.now(),
  });
  const isScrollingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const milestonesReachedRef = useRef<Set<number>>(new Set());

  const updateScrollState = useCallback(() => {
    const targetElement = element || window;
    const isWindow = targetElement === window;
    
    const scrollY = isWindow 
      ? window.pageYOffset || document.documentElement.scrollTop
      : (targetElement as HTMLElement).scrollTop;
    
    const documentHeight = isWindow
      ? Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        )
      : (targetElement as HTMLElement).scrollHeight;
    
    const viewportHeight = isWindow
      ? window.innerHeight
      : (targetElement as HTMLElement).clientHeight;

    const scrollableHeight = documentHeight - viewportHeight;
    const progress = scrollableHeight > 0 ? Math.min(scrollY / scrollableHeight, 1) : 0;

    // Calculate velocity if enabled
    let velocity = 0;
    if (trackVelocity) {
      const currentTime = Date.now();
      const timeDiff = currentTime - velocityRef.current.lastTime;
      const scrollDiff = scrollY - velocityRef.current.lastScrollY;
      
      if (timeDiff > 0) {
        velocity = scrollDiff / timeDiff; // pixels per millisecond
        velocityRef.current = { lastScrollY: scrollY, lastTime: currentTime };
      }
    }

    setScrollState(prevState => {
      const isScrollingDown = scrollY > prevState.scrollY;
      const isScrollingUp = scrollY < prevState.scrollY;
      const isAtTop = scrollY <= topOffset;
      const isAtBottom = scrollY >= (scrollableHeight - bottomOffset);

      // Direction change callback
      if (onDirectionChange && (
        (isScrollingDown && !prevState.isScrollingDown) ||
        (isScrollingUp && !prevState.isScrollingUp)
      )) {
        onDirectionChange(isScrollingDown ? 'down' : 'up');
      }

      // Progress milestone callback
      if (onProgressMilestone && progressMilestones.length > 0) {
        progressMilestones.forEach(milestone => {
          if (progress >= milestone && !milestonesReachedRef.current.has(milestone)) {
            milestonesReachedRef.current.add(milestone);
            onProgressMilestone(progress, milestone);
          }
        });
        
        // Reset milestones if scrolling back up
        if (isScrollingUp) {
          progressMilestones.forEach(milestone => {
            if (progress < milestone - 0.01) { // Small buffer to prevent flicker
              milestonesReachedRef.current.delete(milestone);
            }
          });
        }
      }

      return {
        scrollY,
        previousScrollY: prevState.scrollY,
        progress,
        isScrollingDown,
        isScrollingUp,
        isScrolling: true,
        isAtTop,
        isAtBottom,
        velocity,
        documentHeight,
        viewportHeight,
      };
    });

    // Reset scrolling state after a delay
    if (isScrollingTimeoutRef.current) {
      clearTimeout(isScrollingTimeoutRef.current);
    }
    
    isScrollingTimeoutRef.current = setTimeout(() => {
      setScrollState(prev => ({ ...prev, isScrolling: false }));
    }, 150);

  }, [
    element,
    topOffset,
    bottomOffset,
    trackVelocity,
    onDirectionChange,
    onProgressMilestone,
    progressMilestones
  ]);

  const throttledUpdateScrollState = useCallback(() => {
    if (throttleRef.current) {
      clearTimeout(throttleRef.current);
    }
    
    throttleRef.current = setTimeout(updateScrollState, throttle);
  }, [updateScrollState, throttle]);

  useEffect(() => {
    const targetElement = element || window;
    
    // Initial calculation
    updateScrollState();
    
    // Add scroll event listener
    const handleScroll = throttle > 0 ? throttledUpdateScrollState : updateScrollState;
    targetElement.addEventListener('scroll', handleScroll, { passive: true });
    
    // Handle window resize for recalculation
    const handleResize = () => {
      setTimeout(updateScrollState, 100); // Delay to ensure DOM updates
    };
    
    if (!element) {
      window.addEventListener('resize', handleResize, { passive: true });
    }

    return () => {
      targetElement.removeEventListener('scroll', handleScroll);
      if (!element) {
        window.removeEventListener('resize', handleResize);
      }
      
      if (throttleRef.current) {
        clearTimeout(throttleRef.current);
      }
      
      if (isScrollingTimeoutRef.current) {
        clearTimeout(isScrollingTimeoutRef.current);
      }
    };
  }, [element, throttledUpdateScrollState, updateScrollState, throttle]);

  return scrollState;
};

/**
 * Hook for tracking scroll progress within specific sections/elements
 */
export const useSectionScrollProgress = (
  sectionRef: React.RefObject<HTMLElement>,
  options: Omit<UseScrollProgressOptions, 'element'> = {}
) => {
  const [sectionProgress, setSectionProgress] = useState({
    isInView: false,
    progress: 0,
    isFullyVisible: false,
    distanceFromTop: 0,
    distanceFromBottom: 0,
  });

  const globalScroll = useScrollProgress(options);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const rect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    const sectionTop = rect.top + globalScroll.scrollY;
    const sectionBottom = sectionTop + rect.height;
    const currentScrollY = globalScroll.scrollY;
    const viewportBottom = currentScrollY + viewportHeight;

    // Check if section is in viewport
    const isInView = currentScrollY < sectionBottom && viewportBottom > sectionTop;
    
    // Calculate progress through section
    let progress = 0;
    if (isInView) {
      const visibleTop = Math.max(currentScrollY, sectionTop);
      const visibleBottom = Math.min(viewportBottom, sectionBottom);
      const visibleHeight = visibleBottom - visibleTop;
      progress = visibleHeight / Math.min(rect.height, viewportHeight);
    }

    // Check if fully visible
    const isFullyVisible = rect.top >= 0 && rect.bottom <= viewportHeight;

    // Calculate distances
    const distanceFromTop = rect.top;
    const distanceFromBottom = viewportHeight - rect.bottom;

    setSectionProgress({
      isInView,
      progress: Math.min(Math.max(progress, 0), 1),
      isFullyVisible,
      distanceFromTop,
      distanceFromBottom,
    });

  }, [globalScroll.scrollY, globalScroll.viewportHeight, sectionRef]);

  return {
    ...globalScroll,
    section: sectionProgress,
  };
};

/**
 * Hook for smooth scrolling to elements or positions
 */
export const useScrollTo = () => {
  const scrollToElement = useCallback((
    element: HTMLElement | string,
    options: ScrollIntoViewOptions & { offset?: number } = {}
  ) => {
    const { offset = 0, ...scrollOptions } = options;
    let targetElement: HTMLElement | null = null;

    if (typeof element === 'string') {
      targetElement = document.querySelector(element);
    } else {
      targetElement = element;
    }

    if (!targetElement) return;

    const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementTop - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
      ...scrollOptions,
    });
  }, []);

  const scrollToTop = useCallback((behavior: ScrollBehavior = 'smooth') => {
    window.scrollTo({ top: 0, behavior });
  }, []);

  const scrollToBottom = useCallback((behavior: ScrollBehavior = 'smooth') => {
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior 
    });
  }, []);

  const scrollToProgress = useCallback((
    progress: number, 
    behavior: ScrollBehavior = 'smooth'
  ) => {
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
    const viewportHeight = window.innerHeight;
    const scrollableHeight = documentHeight - viewportHeight;
    const targetScroll = scrollableHeight * Math.min(Math.max(progress, 0), 1);

    window.scrollTo({ top: targetScroll, behavior });
  }, []);

  return {
    scrollToElement,
    scrollToTop,
    scrollToBottom,
    scrollToProgress,
  };
};