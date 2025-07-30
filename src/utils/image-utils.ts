/**
 * Image Utilities for Anime History Website
 * Handles image optimization, loading, and responsive sizing
 */

import { StaticImageData } from 'next/image';

export interface ImageDimensions {
  width: number;
  height: number;
}

export interface ResponsiveImageSizes {
  mobile: string;
  tablet: string;
  desktop: string;
  wide: string;
}

export interface OptimizedImageConfig {
  src: string | StaticImageData;
  alt: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  fill?: boolean;
  className?: string;
}

/**
 * Generate responsive image sizes string for Next.js Image component
 */
export const generateImageSizes = (config?: Partial<ResponsiveImageSizes>): string => {
  const defaultSizes: ResponsiveImageSizes = {
    mobile: '100vw',
    tablet: '50vw',
    desktop: '33vw',
    wide: '25vw'
  };

  const sizes = { ...defaultSizes, ...config };

  return `(max-width: 320px) ${sizes.mobile}, (max-width: 768px) ${sizes.tablet}, (max-width: 1024px) ${sizes.desktop}, ${sizes.wide}`;
};

/**
 * Create blur placeholder data URL for smooth image loading
 */
export const createBlurDataURL = (width: number = 10, height: number = 10): string => {
  const canvas = typeof window !== 'undefined' ? document.createElement('canvas') : null;
  
  if (!canvas) {
    // Fallback for SSR - simple base64 encoded 1x1 transparent pixel
    return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  }

  canvas.width = width;
  canvas.height = height;
  
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';
  
  // Create gradient blur effect
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, 'rgba(10, 10, 10, 0.8)');
  gradient.addColorStop(0.5, 'rgba(255, 215, 0, 0.1)');
  gradient.addColorStop(1, 'rgba(0, 212, 255, 0.1)');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL('image/jpeg', 0.1);
};

/**
 * Optimize image configuration based on content type and usage
 */
export const optimizeImageConfig = (
  src: string | StaticImageData,
  alt: string,
  type: 'hero' | 'era' | 'anime-poster' | 'thumbnail' | 'background' | 'icon',
  priority: boolean = false
): OptimizedImageConfig => {
  const baseConfig: OptimizedImageConfig = {
    src,
    alt,
    priority,
    placeholder: 'blur',
    quality: 85
  };

  switch (type) {
    case 'hero':
      return {
        ...baseConfig,
        quality: 95,
        priority: true,
        sizes: generateImageSizes({
          mobile: '100vw',
          tablet: '100vw',
          desktop: '100vw',
          wide: '100vw'
        }),
        blurDataURL: createBlurDataURL(20, 12)
      };

    case 'era':
      return {
        ...baseConfig,
        quality: 90,
        sizes: generateImageSizes({
          mobile: '100vw',
          tablet: '80vw',
          desktop: '60vw',
          wide: '50vw'
        }),
        blurDataURL: createBlurDataURL(16, 10)
      };

    case 'anime-poster':
      return {
        ...baseConfig,
        quality: 85,
        sizes: generateImageSizes({
          mobile: '50vw',
          tablet: '33vw',
          desktop: '25vw',
          wide: '20vw'
        }),
        blurDataURL: createBlurDataURL(12, 16)
      };

    case 'thumbnail':
      return {
        ...baseConfig,
        quality: 75,
        sizes: generateImageSizes({
          mobile: '25vw',
          tablet: '20vw',
          desktop: '15vw',
          wide: '12vw'
        }),
        blurDataURL: createBlurDataURL(8, 8)
      };

    case 'background':
      return {
        ...baseConfig,
        quality: 80,
        fill: true,
        sizes: '100vw',
        blurDataURL: createBlurDataURL(20, 12),
        className: 'object-cover object-center'
      };

    case 'icon':
      return {
        ...baseConfig,
        quality: 90,
        placeholder: 'empty',
        sizes: generateImageSizes({
          mobile: '24px',
          tablet: '32px',
          desktop: '40px',
          wide: '48px'
        })
      };

    default:
      return baseConfig;
  }
};

/**
 * Get image dimensions from various sources
 */
export const getImageDimensions = async (src: string): Promise<ImageDimensions | null> => {
  if (typeof window === 'undefined') return null;

  return new Promise((resolve) => {
    const img = new Image();
    
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight
      });
    };
    
    img.onerror = () => resolve(null);
    img.src = src;
  });
};

/**
 * Calculate aspect ratio for responsive images
 */
export const calculateAspectRatio = (width: number, height: number): string => {
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const divisor = gcd(width, height);
  
  return `${width / divisor}/${height / divisor}`;
};

/**
 * Generate srcSet for responsive images
 */
export const generateSrcSet = (
  baseSrc: string,
  widths: number[] = [320, 640, 768, 1024, 1280, 1536, 1920]
): string => {
  return widths
    .map(width => {
      // Assume images are optimized and available at different sizes
      const optimizedSrc = baseSrc.replace(/\.(jpg|jpeg|png|webp)$/i, `_${width}w.$1`);
      return `${optimizedSrc} ${width}w`;
    })
    .join(', ');
};

/**
 * Preload critical images for better performance
 */
export const preloadImage = (src: string, priority: boolean = false): void => {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = priority ? 'preload' : 'prefetch';
  link.as = 'image';
  link.href = src;
  
  if (priority) {
    link.setAttribute('fetchpriority', 'high');
  }
  
  document.head.appendChild(link);
};

/**
 * Lazy load images with intersection observer
 */
export const createLazyImageObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver | null => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };

  return new IntersectionObserver((entries) => {
    entries.forEach(callback);
  }, defaultOptions);
};

/**
 * Convert image to different format (for canvas manipulation)
 */
export const convertImageFormat = (
  canvas: HTMLCanvasElement,
  format: 'image/jpeg' | 'image/png' | 'image/webp' = 'image/jpeg',
  quality: number = 0.9
): string => {
  return canvas.toDataURL(format, quality);
};

/**
 * Create progressive image loading effect
 */
export const createProgressiveImageConfig = (
  highResSrc: string,
  lowResSrc?: string
): {
  lowRes: OptimizedImageConfig;
  highRes: OptimizedImageConfig;
} => {
  const lowResConfig: OptimizedImageConfig = {
    src: lowResSrc || highResSrc.replace(/\.(jpg|jpeg|png|webp)$/i, '_blur.$1'),
    alt: '',
    quality: 20,
    placeholder: 'blur',
    blurDataURL: createBlurDataURL()
  };

  const highResConfig: OptimizedImageConfig = {
    src: highResSrc,
    alt: '',
    quality: 90,
    placeholder: 'blur',
    blurDataURL: createBlurDataURL()
  };

  return {
    lowRes: lowResConfig,
    highRes: highResConfig
  };
};

/**
 * Era-specific image styling configurations
 */
export const getEraImageConfig = (era: string): Partial<OptimizedImageConfig> => {
  const eraConfigs: Record<string, Partial<OptimizedImageConfig>> = {
    origins: {
      className: 'sepia-filter film-grain-overlay',
      quality: 70 // Lower quality for vintage feel
    },
    foundation: {
      className: 'vintage-color-grade',
      quality: 75
    },
    expansion: {
      className: 'retro-color-enhancement',
      quality: 85
    },
    golden: {
      className: 'vibrant-color-boost',
      quality: 90
    },
    digital: {
      className: 'sharp-digital-enhancement',
      quality: 95
    },
    current: {
      className: 'ultra-sharp modern-color-grade',
      quality: 95
    }
  };

  return eraConfigs[era] || {};
};

const imageUtils = {
  generateImageSizes,
  createBlurDataURL,
  optimizeImageConfig,
  getImageDimensions,
  calculateAspectRatio,
  generateSrcSet,
  preloadImage,
  createLazyImageObserver,
  convertImageFormat,
  createProgressiveImageConfig,
  getEraImageConfig
};

export default imageUtils;