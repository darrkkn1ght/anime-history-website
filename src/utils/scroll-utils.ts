/**
 * Scroll utilities for anime history website
 * Provides smooth scrolling, progress tracking, and scroll-based animations
 */

// Types for scroll-related functions
export interface ScrollToOptions {
    top?: number;
    left?: number;
    behavior?: 'auto' | 'smooth';
  }
  
  export interface ScrollProgress {
    progress: number; // 0-1
    direction: 'up' | 'down';
    velocity: number;
  }
  
  export interface ElementBounds {
    top: number;
    bottom: number;
    left: number;
    right: number;
    width: number;
    height: number;
    centerY: number;
    centerX: number;
  }
  
  export interface ViewportBounds {
    width: number;
    height: number;
    scrollTop: number;
    scrollLeft: number;
  }
  
  /**
   * Get current scroll position and viewport info
   */
  export const getScrollInfo = (): ViewportBounds => {
    if (typeof window === 'undefined') {
      return { width: 0, height: 0, scrollTop: 0, scrollLeft: 0 };
    }
  
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      scrollTop: window.pageYOffset || document.documentElement.scrollTop,
      scrollLeft: window.pageXOffset || document.documentElement.scrollLeft
    };
  };
  
  /**
   * Get total document height for progress calculations
   */
  export const getDocumentHeight = (): number => {
    if (typeof window === 'undefined') return 0;
    
    return Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
  };
  
  /**
   * Calculate scroll progress (0-1) based on current position
   */
  export const getScrollProgress = (): number => {
    if (typeof window === 'undefined') return 0;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = getDocumentHeight();
    const windowHeight = window.innerHeight;
    const maxScroll = documentHeight - windowHeight;
    
    return maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;
  };
  
  /**
   * Get element bounds relative to viewport
   */
  export const getElementBounds = (element: HTMLElement): ElementBounds => {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    return {
      top: rect.top + scrollTop,
      bottom: rect.bottom + scrollTop,
      left: rect.left + scrollLeft,
      right: rect.right + scrollLeft,
      width: rect.width,
      height: rect.height,
      centerY: rect.top + scrollTop + rect.height / 2,
      centerX: rect.left + scrollLeft + rect.width / 2
    };
  };
  
  /**
   * Check if element is in viewport
   */
  export const isElementInViewport = (
    element: HTMLElement, 
    threshold: number = 0
  ): boolean => {
    if (typeof window === 'undefined') return false;
    
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    
    return (
      rect.top < windowHeight - threshold &&
      rect.bottom > threshold &&
      rect.left < windowWidth - threshold &&
      rect.right > threshold
    );
  };
  
  /**
   * Get element visibility percentage (0-1)
   */
  export const getElementVisibility = (element: HTMLElement): number => {
    if (typeof window === 'undefined') return 0;
    
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (rect.bottom < 0 || rect.top > windowHeight) return 0;
    
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    return Math.max(0, Math.min(1, visibleHeight / rect.height));
  };
  
  /**
   * Smooth scroll to target element or position
   */
  export const scrollToElement = (
    target: HTMLElement | string | number,
    _options: ScrollToOptions = {}
  ): Promise<void> => {
    return new Promise((resolve) => {
      if (typeof window === 'undefined') {
        resolve();
        return;
      }
  
      let targetY: number;
      
      if (typeof target === 'number') {
        targetY = target;
      } else if (typeof target === 'string') {
        const element = document.querySelector(target) as HTMLElement;
        if (!element) {
          resolve();
          return;
        }
        const bounds = getElementBounds(element);
        targetY = bounds.top;
      } else {
        const bounds = getElementBounds(target);
        targetY = bounds.top;
      }
  
      // Add offset for fixed headers if needed
      const headerOffset = 80; // Adjust based on your header height
      targetY = Math.max(0, targetY - headerOffset);
  
      const startY = window.pageYOffset;
      const distance = targetY - startY;
      const duration = Math.min(Math.abs(distance) / 2, 1000); // Max 1 second
      const startTime = performance.now();
  
      const easeOutCubic = (t: number): number => {
        return 1 - Math.pow(1 - t, 3);
      };
  
      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutCubic(progress);
        
        const currentY = startY + distance * easedProgress;
        window.scrollTo(0, currentY);
  
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          resolve();
        }
      };
  
      requestAnimationFrame(animateScroll);
    });
  };
  
  /**
   * Scroll to timeline era section
   */
  export const scrollToEra = (eraId: string): Promise<void> => {
    return scrollToElement(`#era-${eraId}`);
  };
  
  /**
   * Calculate parallax offset based on scroll position
   */
  export const getParallaxOffset = (
    element: HTMLElement,
    speed: number = 0.5
  ): number => {
    if (typeof window === 'undefined') return 0;
    
    const bounds = getElementBounds(element);
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // Calculate how much the element has moved past the viewport
    const elementCenter = bounds.centerY;
    const viewportCenter = scrollTop + windowHeight / 2;
    const distance = elementCenter - viewportCenter;
    
    return distance * speed;
  };
  
  /**
   * Create scroll-based animation value (0-1)
   * useful for CSS custom properties or Framer Motion
   */
  export const getScrollBasedValue = (
    element: HTMLElement,
    startOffset: number = 0,
    endOffset: number = 1
  ): number => {
    const visibility = getElementVisibility(element);
    return startOffset + visibility * (endOffset - startOffset);
  };
  
  /**
   * Throttle scroll events for performance
   */
  export const throttleScroll = <T extends (...args: any[]) => void>(
    func: T,
    delay: number = 16
  ): ((...args: Parameters<T>) => void) => {
    let timeoutId: number | null = null;
    let lastExecTime = 0;
    
    return (...args: Parameters<T>) => {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        func(...args);
        lastExecTime = currentTime;
      } else {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        
        timeoutId = window.setTimeout(() => {
          func(...args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  };
  
  /**
   * Debounce scroll events
   */
  export const debounceScroll = <T extends (...args: any[]) => void>(
    func: T,
    delay: number = 100
  ): ((...args: Parameters<T>) => void) => {
    let timeoutId: number | null = null;
    
    return (...args: Parameters<T>) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = window.setTimeout(() => func(...args), delay);
    };
  };
  
  /**
   * Get scroll direction and velocity
   */
  export const createScrollTracker = () => {
    let lastScrollTop = 0;
    let lastTimestamp = 0;
    
    return (): ScrollProgress => {
      if (typeof window === 'undefined') {
        return { progress: 0, direction: 'down', velocity: 0 };
      }
      
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const currentTimestamp = performance.now();
      
      const progress = getScrollProgress();
      const direction = currentScrollTop > lastScrollTop ? 'down' : 'up';
      const timeDelta = currentTimestamp - lastTimestamp;
      const scrollDelta = Math.abs(currentScrollTop - lastScrollTop);
      const velocity = timeDelta > 0 ? scrollDelta / timeDelta : 0;
      
      lastScrollTop = currentScrollTop;
      lastTimestamp = currentTimestamp;
      
      return { progress, direction, velocity };
    };
  };
  
  /**
   * Lock/unlock scroll (useful for modals)
   */
  export const scrollLock = {
    lock: (): void => {
      if (typeof window === 'undefined') return;
      
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollTop}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    },
    
    unlock: (): void => {
      if (typeof window === 'undefined') return;
      
      const scrollTop = Math.abs(parseInt(document.body.style.top || '0', 10));
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollTop);
    }
  };
  
  /**
   * Get nearest era based on scroll position
   */
  export const getNearestEra = (eraIds: string[]): string | null => {
    if (typeof window === 'undefined' || eraIds.length === 0) return null;
    
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const viewportCenter = scrollTop + windowHeight / 2;
    
    let nearestEra = eraIds[0];
    let minDistance = Infinity;
    
    eraIds.forEach(eraId => {
      const element = document.getElementById(`era-${eraId}`);
      if (element) {
        const bounds = getElementBounds(element);
        const distance = Math.abs(bounds.centerY - viewportCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          nearestEra = eraId;
        }
      }
    });
    
    return nearestEra;
  };
  
  /**
   * Create intersection observer for scroll animations
   */
  export const createScrollObserver = (
    callback: (entries: IntersectionObserverEntry[]) => void,
    options: IntersectionObserverInit = {}
  ): IntersectionObserver | null => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      return null;
    }
    
    const defaultOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-10% 0px -10% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
      ...options
    };
    
    return new IntersectionObserver(callback, defaultOptions);
  };
  
  /**
   * Smooth scroll polyfill for older browsers
   */
  export const initSmoothScrollPolyfill = (): void => {
    if (typeof window === 'undefined') return;
    
    // Check if smooth scrolling is supported
    if ('scrollBehavior' in document.documentElement.style) {
      return;
    }
    
    // Polyfill for smooth scrolling
    const smoothScrollTo = (element: Element, to: number, duration: number) => {
      const start = element.scrollTop;
      const change = to - start;
      const startTime = performance.now();
      
      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeInOutCubic = (t: number) => 
          t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        
        element.scrollTop = start + change * easeInOutCubic(progress);
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
      
      requestAnimationFrame(animateScroll);
    };
    
    // Override native scrollTo
    const originalScrollTo = window.scrollTo;
    window.scrollTo = function(this: Window, x: number | ScrollToOptions, y?: number) {
      if (typeof x === 'object' && x.behavior === 'smooth') {
        smoothScrollTo(document.documentElement, x.top || 0, 500);
      } else {
        originalScrollTo.call(this, x as number, y as number);
      }
    } as typeof window.scrollTo;
  };
  
  /**
   * Calculate era progress based on scroll position
   */
  export const getEraProgress = (eraId: string): number => {
    if (typeof window === 'undefined') return 0;
    
    const element = document.getElementById(`era-${eraId}`);
    if (!element) return 0;
    
    const bounds = getElementBounds(element);
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // Calculate progress through the era section
    const eraStart = bounds.top - windowHeight;
    const eraEnd = bounds.bottom;
    const eraHeight = eraEnd - eraStart;
    
    if (scrollTop < eraStart) return 0;
    if (scrollTop > eraEnd) return 1;
    
    return Math.min(1, Math.max(0, (scrollTop - eraStart) / eraHeight));
  };