import { useEffect, useRef, useState, RefObject, useCallback } from 'react';
import { useScrollProgress } from './useScrollProgress';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
  disabled?: boolean;
  easing?: 'linear' | 'easeInOut' | 'easeIn' | 'easeOut';
  bounds?: {
    start?: number;
    end?: number;
  };
}

interface ParallaxTransform {
  y: number;
  scale?: number;
  opacity?: number;
  rotateX?: number;
  rotateY?: number;
}

/**
 * Advanced parallax scroll hook for cinematic anime website
 * Provides smooth parallax effects with performance optimizations
 */
export function useParallax(options: ParallaxOptions = {}): [RefObject<HTMLElement | null>, ParallaxTransform] {
  const {
    speed = 0.5,
    direction = 'up',
    disabled = false,
    easing = 'linear',
    bounds
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState<ParallaxTransform>({ y: 0 });
  const rafRef = useRef<number | undefined>(undefined);

  // Easing functions
  const easingFunctions = {
    linear: (t: number) => t,
    easeInOut: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeIn: (t: number) => t * t,
    easeOut: (t: number) => t * (2 - t),
  };

  useEffect(() => {
    if (disabled || !elementRef.current) return;

    const element = elementRef.current;
    let ticking = false;

    const updateParallax = () => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress relative to element
      const elementCenter = elementTop + elementHeight / 2;
      const screenCenter = windowHeight / 2;
      const scrollProgress = (screenCenter - elementCenter) / (windowHeight + elementHeight);
      
      // Apply bounds if specified
      let boundedProgress = scrollProgress;
      if (bounds) {
        const start = bounds.start ?? -1;
        const end = bounds.end ?? 1;
        boundedProgress = Math.max(start, Math.min(end, scrollProgress));
      }

      // Apply easing
      const easedProgress = easingFunctions[easing](Math.abs(boundedProgress)) * Math.sign(boundedProgress);
      
      // Calculate transform values
      const baseTransform = easedProgress * speed * 100;
      const yTransform = direction === 'up' ? -baseTransform : baseTransform;

      setTransform({
        y: yTransform,
        scale: 1 + Math.abs(easedProgress) * 0.1,
        opacity: Math.max(0.3, 1 - Math.abs(easedProgress) * 0.5),
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    // Initial calculation
    updateParallax();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateParallax, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateParallax);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [speed, direction, disabled, easing, bounds]);

  return [elementRef, transform];
}

/**
 * Mouse parallax effect for interactive elements
 */
export function useMouseParallax(intensity: number = 0.1): [RefObject<HTMLElement | null>, { x: number; y: number }] {
  const elementRef = useRef<HTMLElement>(null);
  const [_mousePosition, _setMousePosition] = useState({ x: 0, y: 0 });
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * intensity;
      const deltaY = (e.clientY - centerY) * intensity;
      
      setTransform({ x: deltaX, y: deltaY });
    };

    const handleMouseLeave = () => {
      setTransform({ x: 0, y: 0 });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [intensity]);

  return [elementRef, transform];
}

/**
 * Era-specific parallax with timeline integration
 */
export function useEraParallax(eraIndex: number, totalEras: number) {
  const scrollProgress = useScrollProgress();
  const [elementRef, _setElementRef] = useState<RefObject<HTMLElement | null>>(useRef(null));
  const [eraTransform, setEraTransform] = useState<ParallaxTransform>({ y: 0 });

  useEffect(() => {
    // Calculate era-specific scroll progress
    const eraProgress = (scrollProgress.progress * totalEras) - eraIndex;
    const clampedProgress = Math.max(-1, Math.min(1, eraProgress));
    
    // Different parallax effects for different eras
    const eraEffects = {
      0: { // Origins Era - Slow, sepia-toned
        y: -clampedProgress * 30,
        scale: 1 - Math.abs(clampedProgress) * 0.05,
        opacity: 1 - Math.abs(clampedProgress) * 0.2,
      },
      1: { // Foundation Era - Building momentum
        y: -clampedProgress * 50,
        scale: 1 + Math.abs(clampedProgress) * 0.1,
        rotateX: clampedProgress * 2,
      },
      2: { // Expansion Era - Dynamic movement
        y: -clampedProgress * 70,
        scale: 1 + Math.abs(clampedProgress) * 0.15,
        rotateY: clampedProgress * 3,
      },
      3: { // Golden Age - Explosive growth
        y: -clampedProgress * 90,
        scale: 1 + Math.abs(clampedProgress) * 0.2,
        opacity: 1 + Math.abs(clampedProgress) * 0.1,
      },
      4: { // Digital Age - Fluid, tech-like
        y: -clampedProgress * 60,
        scale: 1 + Math.sin(clampedProgress * Math.PI) * 0.1,
        rotateX: Math.sin(clampedProgress * Math.PI * 2) * 1,
      },
      5: { // Current Era - Futuristic
        y: -clampedProgress * 80,
        scale: 1 + Math.abs(clampedProgress) * 0.25,
        opacity: 1 + Math.abs(clampedProgress) * 0.15,
        rotateY: clampedProgress * 5,
      },
    };

    const effects = eraEffects[eraIndex as keyof typeof eraEffects] || { y: 0 };
    setEraTransform(effects);
  }, [scrollProgress.progress, eraIndex, totalEras]);

  return { elementRef, transform: eraTransform, scrollProgress: scrollProgress.progress };
}

/**
 * Background parallax for cinematic depth
 */
export function useBackgroundParallax(layers: number = 3) {
  const scrollProgress = useScrollProgress();
  const [layerTransforms, setLayerTransforms] = useState<ParallaxTransform[]>([]);

  useEffect(() => {
    const transforms = Array.from({ length: layers }, (_, index) => {
      const depth = (index + 1) / layers;
      const speed = depth * 0.5;
      const yOffset = -scrollProgress.scrollY * speed;
      
      return {
        y: yOffset,
        scale: 1 - depth * 0.1,
        opacity: 1 - depth * 0.2,
      };
    });

    setLayerTransforms(transforms);
  }, [scrollProgress.scrollY, layers]);

  return layerTransforms;
}

/**
 * Text parallax for cinematic typography effects
 */
export function useTextParallax(staggerDelay: number = 50) {
  const [elementRef] = useParallax({ speed: 0.3, easing: 'easeOut' });
  const [charRefs, setCharRefs] = useState<RefObject<HTMLSpanElement | null>[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const initializeChars = useCallback((text: string) => {
    const refs = text.split('').map(() => useRef<HTMLSpanElement>(null));
    setCharRefs(refs);
    return refs;
  }, []);

  useEffect(() => {
    if (!isVisible || charRefs.length === 0) return;

    charRefs.forEach((ref, index) => {
      if (ref.current) {
        const delay = index * staggerDelay;
        ref.current.style.transition = `transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1) ${delay}ms`;
        ref.current.style.transform = 'translateY(0) rotateX(0)';
      }
    });
  }, [isVisible, charRefs, staggerDelay]);

  return {
    elementRef,
    charRefs,
    initializeChars,
    setIsVisible,
  };
}