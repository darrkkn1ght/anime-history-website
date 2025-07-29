import { useEffect, useRef, useState, RefObject } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
  enabled?: boolean;
}

interface IntersectionResult {
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | null;
  hasIntersected: boolean;
}

/**
 * Advanced intersection observer hook for scroll-triggered animations
 * Optimized for cinematic anime website transitions
 */
export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [RefObject<Element>, IntersectionResult] {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    triggerOnce = false,
    enabled = true
  } = options;

  const elementRef = useRef<Element>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    
    if (!element || !enabled || !window.IntersectionObserver) {
      return;
    }

    // Skip if triggerOnce is true and already intersected
    if (triggerOnce && hasIntersected) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [observerEntry] = entries;
        
        setEntry(observerEntry);
        setIsIntersecting(observerEntry.isIntersecting);
        
        if (observerEntry.isIntersecting) {
          setHasIntersected(true);
          
          // Disconnect if triggerOnce is enabled
          if (triggerOnce) {
            observer.disconnect();
          }
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, triggerOnce, enabled, hasIntersected]);

  return [
    elementRef as RefObject<Element>,
    {
      isIntersecting,
      entry,
      hasIntersected,
    },
  ];
}

/**
 * Multiple elements intersection observer for timeline sections
 */
export function useMultipleIntersectionObserver(
  elementsCount: number,
  options: UseIntersectionObserverOptions = {}
) {
  const {
    threshold = 0.3,
    root = null,
    rootMargin = '0px',
    enabled = true
  } = options;

  const [intersectionStates, setIntersectionStates] = useState<boolean[]>(
    new Array(elementsCount).fill(false)
  );
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementsRef = useRef<(Element | null)[]>(new Array(elementsCount).fill(null));

  const setElementRef = (index: number) => (element: Element | null) => {
    elementsRef.current[index] = element;
  };

  useEffect(() => {
    if (!enabled || !window.IntersectionObserver) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;
          const index = elementsRef.current.indexOf(element);
          
          if (index !== -1) {
            setIntersectionStates(prev => {
              const newStates = [...prev];
              newStates[index] = entry.isIntersecting;
              return newStates;
            });

            // Update active index for timeline navigation
            if (entry.isIntersecting && entry.intersectionRatio >= (Array.isArray(threshold) ? threshold[0] : threshold)) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observerRef.current = observer;

    // Observe all existing elements
    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, enabled, elementsCount]);

  // Re-observe when elements change
  useEffect(() => {
    const observer = observerRef.current;
    if (!observer) return;

    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });
  }, [elementsRef.current]);
  
  return undefined;

  return {
    setElementRef,
    intersectionStates,
    activeIndex,
  };
}

/**
 * Stagger intersection observer for cascading animations
 */
export function useStaggeredIntersection(
  delay: number = 100,
  options: UseIntersectionObserverOptions = {}
) {
  const [elementRef, intersection] = useIntersectionObserver(options);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (intersection.isIntersecting && !shouldAnimate) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [intersection.isIntersecting, delay, shouldAnimate]);

  return {
    elementRef,
    shouldAnimate,
    isIntersecting: intersection.isIntersecting,
    hasIntersected: intersection.hasIntersected,
  };
}

/**
 * Era transition detector for cinematic effects
 */
export function useEraTransition(_eraIndex: number) {
  const [elementRef, intersection] = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: '-10% 0px -10% 0px'
  });

  const [isActiveEra, setIsActiveEra] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<'entering' | 'leaving' | null>(null);

  useEffect(() => {
    if (intersection.entry) {
      const { isIntersecting, boundingClientRect } = intersection.entry;
      const { top } = boundingClientRect;
      
      setIsActiveEra(isIntersecting);
      
      if (isIntersecting) {
        setTransitionDirection('entering');
      } else if (intersection.hasIntersected) {
        setTransitionDirection(top < 0 ? 'leaving' : 'entering');
      }
    }
  }, [intersection]);

  return {
    elementRef,
    isActiveEra,
    transitionDirection,
    intersectionRatio: intersection.entry?.intersectionRatio || 0,
  };
}