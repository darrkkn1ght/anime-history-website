/**
 * UI Assets Reference System
 * Complete database of all UI-related visual assets for the anime history website
 * Organized by category for easy maintenance and consistent usage
 */

export interface UIAsset {
    id: string;
    name: string;
    path: string;
    altText: string;
    category: 'background' | 'icon' | 'logo' | 'decoration' | 'timeline' | 'texture' | 'pattern';
    format: 'svg' | 'png' | 'jpg' | 'webp' | 'mp4';
    usage: string[];
    dimensions?: {
      width: number;
      height: number;
    };
    variants?: string[];
    description?: string;
  }
  
  // Background Assets
  export const backgroundAssets: UIAsset[] = [
    {
      id: 'film-grain-texture',
      name: 'Film Grain Texture',
      path: '/images/ui/backgrounds/film-grain-texture.jpg',
      altText: 'Vintage film grain texture overlay',
      category: 'background',
      format: 'jpg',
      usage: ['hero-section', 'era-transitions', 'cinematic-overlays'],
      dimensions: { width: 1920, height: 1080 },
      description: 'Connecting lines that flow between timeline eras'
    }
  ];
  
  // Decorative Assets
  export const decorativeAssets: UIAsset[] = [
    {
      id: 'film-strip-border',
      name: 'Film Strip Border',
      path: '/images/ui/decorations/film-strip-border.svg',
      altText: 'Vintage film strip border decoration',
      category: 'decoration',
      format: 'svg',
      usage: ['section-dividers', 'image-frames', 'cinematic-borders'],
      variants: ['horizontal', 'vertical', 'corner'],
      description: 'Classic film strip decoration for cinematic theming'
    },
    {
      id: 'japanese-pattern',
      name: 'Subtle Japanese Pattern',
      path: '/images/ui/decorations/japanese-pattern.svg',
      altText: 'Traditional Japanese geometric pattern',
      category: 'pattern',
      format: 'svg',
      usage: ['background-patterns', 'cultural-context', 'section-accents'],
      variants: ['seigaiha', 'asanoha', 'shippo'],
      description: 'Respectful Japanese patterns for cultural authenticity'
    },
    {
      id: 'star-burst',
      name: 'Anime Star Burst',
      path: '/images/ui/decorations/star-burst.svg',
      altText: 'Anime-style star burst effect',
      category: 'decoration',
      format: 'svg',
      usage: ['emphasis-effects', 'highlight-decorations', 'impact-moments'],
      variants: ['small', 'medium', 'large', 'animated'],
      description: 'Classic anime-style star burst for dramatic emphasis'
    },
    {
      id: 'speed-lines',
      name: 'Manga Speed Lines',
      path: '/images/ui/decorations/speed-lines.svg',
      altText: 'Manga-style motion speed lines',
      category: 'decoration',
      format: 'svg',
      usage: ['action-sequences', 'transition-effects', 'dynamic-backgrounds'],
      variants: ['radial', 'parallel', 'curved'],
      description: 'Dynamic speed lines for action and movement effects'
    },
    {
      id: 'cherry-blossom',
      name: 'Cherry Blossom Petals',
      path: '/images/ui/decorations/cherry-blossom.svg',
      altText: 'Falling cherry blossom petals',
      category: 'decoration',
      format: 'svg',
      usage: ['seasonal-effects', 'cultural-atmosphere', 'gentle-animations'],
      variants: ['falling', 'floating', 'scattered'],
      description: 'Elegant cherry blossom petals for cultural atmosphere'
    },
    {
      id: 'tech-circuit',
      name: 'Tech Circuit Pattern',
      path: '/images/ui/decorations/tech-circuit.svg',
      altText: 'Futuristic circuit board pattern',
      category: 'pattern',
      format: 'svg',
      usage: ['digital-age-sections', 'tech-themed-areas', 'modern-accents'],
      variants: ['simple', 'complex', 'animated'],
      description: 'Modern circuit patterns for digital age theming'
    }
  ];
  
  // Texture Assets
  export const textureAssets: UIAsset[] = [
    {
      id: 'paper-texture',
      name: 'Vintage Paper Texture',
      path: '/images/ui/textures/paper-texture.jpg',
      altText: 'Aged paper texture background',
      category: 'texture',
      format: 'jpg',
      usage: ['historical-sections', 'document-backgrounds', 'vintage-effects'],
      variants: ['light', 'medium', 'dark', 'stained'],
      description: 'Authentic aged paper texture for historical authenticity'
    },
    {
      id: 'metal-texture',
      name: 'Brushed Metal Texture',
      path: '/images/ui/textures/metal-texture.jpg',
      altText: 'Brushed metal surface texture',
      category: 'texture',
      format: 'jpg',
      usage: ['mecha-sections', 'futuristic-elements', 'tech-backgrounds'],
      variants: ['steel', 'aluminum', 'chrome', 'oxidized'],
      description: 'Industrial metal textures for mecha and tech themes'
    },
    {
      id: 'fabric-texture',
      name: 'Traditional Fabric Texture',
      path: '/images/ui/textures/fabric-texture.jpg',
      altText: 'Traditional Japanese fabric texture',
      category: 'texture',
      format: 'jpg',
      usage: ['cultural-sections', 'traditional-backgrounds', 'textile-effects'],
      variants: ['silk', 'cotton', 'hemp', 'brocade'],
      description: 'Authentic fabric textures for cultural context'
    },
    {
      id: 'digital-noise',
      name: 'Digital Noise Texture',
      path: '/images/ui/textures/digital-noise.png',
      altText: 'Digital noise texture overlay',
      category: 'texture',
      format: 'png',
      usage: ['glitch-effects', 'digital-overlays', 'tech-atmospheres'],
      variants: ['fine', 'coarse', 'animated', 'colored'],
      description: 'Digital noise textures for modern glitch aesthetics'
    }
  ];
  
  // Video Assets (for backgrounds and transitions)
  export const videoAssets: UIAsset[] = [
    {
      id: 'hero-animation',
      name: 'Hero Section Background Animation',
      path: '/videos/hero-animation.mp4',
      altText: 'Animated background for hero section',
      category: 'background',
      format: 'mp4',
      usage: ['hero-section', 'main-background'],
      description: 'Subtle animated background for the main hero section'
    },
    {
      id: 'film-reel-loop',
      name: 'Film Reel Transition Loop',
      path: '/videos/transition-loops/film-reel.mp4',
      altText: 'Looping film reel animation',
      category: 'decoration',
      format: 'mp4',
      usage: ['era-transitions', 'cinematic-effects'],
      description: 'Seamless film reel animation for era transitions'
    },
    {
      id: 'particle-flow',
      name: 'Particle Flow Animation',
      path: '/videos/transition-loops/particle-flow.mp4',
      altText: 'Flowing particle animation',
      category: 'background',
      format: 'mp4',
      usage: ['loading-screens', 'transition-effects', 'ambient-backgrounds'],
      description: 'Elegant particle flow for modern sections'
    }
  ];
  


  // Icon Assets
  export const iconAssets: UIAsset[] = [
    {
      id: 'play-icon',
      name: 'Play Button Icon',
      path: '/images/ui/icons/play-icon.svg',
      altText: 'Video play button icon',
      category: 'icon',
      format: 'svg',
      usage: ['video-controls', 'animation-triggers', 'interactive-elements'],
      variants: ['outlined', 'filled', 'cinematic'],
      description: 'Scalable play icon for video and animation controls'
    },
    {
      id: 'pause-icon',
      name: 'Pause Button Icon',
      path: '/images/ui/icons/pause-icon.svg',
      altText: 'Video pause button icon',
      category: 'icon',
      format: 'svg',
      usage: ['video-controls', 'animation-controls'],
      variants: ['outlined', 'filled', 'cinematic'],
      description: 'Scalable pause icon for media controls'
    },
    {
      id: 'scroll-indicator',
      name: 'Scroll Down Indicator',
      path: '/images/ui/icons/scroll-indicator.svg',
      altText: 'Scroll down arrow indicator',
      category: 'icon',
      format: 'svg',
      usage: ['hero-section', 'call-to-action', 'navigation-hints'],
      variants: ['animated', 'static', 'pulsing'],
      description: 'Elegant scroll indicator for user guidance'
    },
    {
      id: 'menu-hamburger',
      name: 'Hamburger Menu Icon',
      path: '/images/ui/icons/menu-hamburger.svg',
      altText: 'Mobile hamburger menu icon',
      category: 'icon',
      format: 'svg',
      usage: ['mobile-navigation', 'responsive-menus'],
      variants: ['lines', 'dots', 'animated'],
      description: 'Mobile-friendly hamburger menu icon'
    },
    {
      id: 'close-x',
      name: 'Close X Icon',
      path: '/images/ui/icons/close-x.svg',
      altText: 'Close dialog X button icon',
      category: 'icon',
      format: 'svg',
      usage: ['modal-close', 'dialog-close', 'notification-dismiss'],
      variants: ['thin', 'bold', 'rounded'],
      description: 'Clean close button icon for dialogs and modals'
    },
    {
      id: 'arrow-left',
      name: 'Left Arrow Icon',
      path: '/images/ui/icons/arrow-left.svg',
      altText: 'Left navigation arrow',
      category: 'icon',
      format: 'svg',
      usage: ['carousel-navigation', 'timeline-navigation', 'back-buttons'],
      variants: ['thin', 'bold', 'curved'],
      description: 'Navigation arrow for left/previous actions'
    },
    {
      id: 'arrow-right',
      name: 'Right Arrow Icon',
      path: '/images/ui/icons/arrow-right.svg',
      altText: 'Right navigation arrow',
      category: 'icon',
      format: 'svg',
      usage: ['carousel-navigation', 'timeline-navigation', 'next-buttons'],
      variants: ['thin', 'bold', 'curved'],
      description: 'Navigation arrow for right/next actions'
    },
    {
      id: 'external-link',
      name: 'External Link Icon',
      path: '/images/ui/icons/external-link.svg',
      altText: 'External link indicator icon',
      category: 'icon',
      format: 'svg',
      usage: ['external-links', 'reference-links', 'citations'],
      description: 'Indicator for links that open in new windows'
    },
    {
      id: 'share',
      name: 'Share Icon',
      path: '/images/ui/icons/share.svg',
      altText: 'Social share icon',
      category: 'icon',
      format: 'svg',
      usage: ['social-sharing', 'content-sharing'],
      variants: ['simple', 'detailed', 'animated'],
      description: 'Social sharing icon for content distribution'
    },
    {
      id: 'search',
      name: 'Search Icon',
      path: '/images/ui/icons/search.svg',
      altText: 'Search magnifying glass icon',
      category: 'icon',
      format: 'svg',
      usage: ['search-boxes', 'filter-controls', 'discovery-features'],
      variants: ['outlined', 'filled', 'minimal'],
      description: 'Classic magnifying glass search icon'
    }
  ];
  
  // Logo Assets
  export const logoAssets: UIAsset[] = [
    {
      id: 'site-logo',
      name: 'Anime History Website Logo',
      path: '/images/ui/logos/site-logo.svg',
      altText: 'Anime History Website main logo',
      category: 'logo',
      format: 'svg',
      usage: ['header', 'footer', 'branding'],
      variants: ['full', 'mark', 'wordmark', 'white', 'dark'],
      dimensions: { width: 240, height: 60 },
      description: 'Main website logo with cinematic anime-inspired design'
    },
    {
      id: 'logo-mark',
      name: 'Site Logo Mark',
      path: '/images/ui/logos/logo-mark.svg',
      altText: 'Anime History Website logo mark',
      category: 'logo',
      format: 'svg',
      usage: ['favicon', 'mobile-header', 'social-icons'],
      dimensions: { width: 48, height: 48 },
      description: 'Compact logo mark for small-space applications'
    }
  ];
  
  // Studio Logos (for historical context)
  export const studioLogos: UIAsset[] = [
    {
      id: 'toei-logo',
      name: 'Toei Animation Logo',
      path: '/images/ui/logos/studios/toei.png',
      altText: 'Toei Animation studio logo',
      category: 'logo',
      format: 'png',
      usage: ['studio-credits', 'historical-context'],
      description: 'Historical Toei Animation logo for context'
    },
    {
      id: 'mushi-logo',
      name: 'Mushi Production Logo',
      path: '/images/ui/logos/studios/mushi.png',
      altText: 'Mushi Production studio logo',
      category: 'logo',
      format: 'png',
      usage: ['studio-credits', 'historical-context'],
      description: 'Tezuka\'s Mushi Production logo for historical accuracy'
    },
    {
      id: 'ghibli-logo',
      name: 'Studio Ghibli Logo',
      path: '/images/ui/logos/studios/ghibli.png',
      altText: 'Studio Ghibli logo',
      category: 'logo',
      format: 'png',
      usage: ['studio-credits', 'historical-context'],
      description: 'Iconic Studio Ghibli logo for reference'
    },
    {
      id: 'sunrise-logo',
      name: 'Sunrise Studio Logo',
      path: '/images/ui/logos/studios/sunrise.png',
      altText: 'Sunrise studio logo',
      category: 'logo',
      format: 'png',
      usage: ['studio-credits', 'historical-context'],
      description: 'Sunrise studio logo, creators of Gundam series'
    },
    {
      id: 'mappa-logo',
      name: 'MAPPA Studio Logo',
      path: '/images/ui/logos/studios/mappa.png',
      altText: 'MAPPA studio logo',
      category: 'logo',
      format: 'png',
      usage: ['studio-credits', 'modern-context'],
      description: 'Modern MAPPA studio logo for current era content'
    }
  ];
  
  // Timeline Assets
  export const timelineAssets: UIAsset[] = [
    {
      id: 'timeline-bg',
      name: 'Timeline Background',
      path: '/images/timeline/timeline-bg.svg',
      altText: 'Timeline background pattern',
      category: 'timeline',
      format: 'svg',
      usage: ['timeline-section', 'progress-indicators'],
      description: 'Elegant timeline background with era markers'
    },
    {
      id: 'era-markers',
      name: 'Era Marker Points',
      path: '/images/timeline/era-markers.svg',
      altText: 'Timeline era marker points',
      category: 'timeline',
      format: 'svg',
      usage: ['timeline-navigation', 'era-indicators'],
      variants: ['active', 'inactive', 'completed'],
      description: 'Interactive markers for timeline navigation'
    },
    {
      id: 'progress-bar',
      name: 'Timeline Progress Bar',
      path: '/images/timeline/progress-bar.svg',
      altText: 'Timeline progress indicator',
      category: 'timeline',
      format: 'svg',
      usage: ['scroll-progress', 'reading-progress'],
      variants: ['horizontal', 'vertical', 'circular'],
      description: 'Dynamic progress bar for timeline advancement'
    },
    {
      id: 'timeline-connector',
      name: 'Timeline Connector Line',
      path: '/images/timeline/timeline-connector.svg',
      altText: 'Timeline connecting line element',
      category: 'timeline',
      format: 'svg',
      usage: ['era-connections', 'timeline-flow'],
      variants: ['solid', 'dashed', 'animated'],
      description: 'Connecting lines that flow between timeline eras'
    }
  ];

  // Combined asset collections
  export const allUIAssets: UIAsset[] = [
    ...backgroundAssets,
    ...iconAssets,
    ...logoAssets,
    ...studioLogos,
    ...timelineAssets,
    ...decorativeAssets,
    ...textureAssets,
    ...videoAssets
  ];

  // Utility functions for asset management
  export const getAssetsByCategory = (category: UIAsset['category']): UIAsset[] => {
    return allUIAssets.filter(asset => asset.category === category);
  };

  export const getAssetsByFormat = (format: UIAsset['format']): UIAsset[] => {
    return allUIAssets.filter(asset => asset.format === format);
  };

  export const getAssetById = (id: string): UIAsset | undefined => {
    return allUIAssets.find(asset => asset.id === id);
  };

  export const getAssetsByUsage = (usage: string): UIAsset[] => {
    return allUIAssets.filter(asset => asset.usage.includes(usage));
  };

  // Predefined asset collections for common use cases
  export const assetCollections = {
    // Icons for navigation and controls
    navigationIcons: [
      'menu-hamburger',
      'close-x',
      'arrow-left',
      'arrow-right',
      'scroll-indicator'
    ],
    
    // Media control icons
    mediaIcons: [
      'play-icon',
      'pause-icon',
      'external-link',
      'share',
      'search'
    ],
    
    // Background textures by era
    eraTextures: {
      origins: ['paper-texture', 'film-grain-texture'],
      foundation: ['fabric-texture', 'noise-texture'],
      expansion: ['metal-texture', 'gradient-overlay-dark'],
      goldenAge: ['particles-bg', 'star-burst'],
      digitalAge: ['digital-noise', 'tech-circuit'],
      currentEra: ['particle-flow', 'modern-gradients']
    },
    
    // Timeline-specific assets
    timelineElements: [
      'timeline-bg',
      'era-markers',
      'progress-bar',
      'timeline-connector'
    ],
    
    // Decorative elements for theming
    culturalDecorations: [
      'japanese-pattern',
      'cherry-blossom',
      'film-strip-border',
      'star-burst'
    ],
    
    // Modern tech elements
    digitalElements: [
      'tech-circuit',
      'digital-noise',
      'particle-flow',
      'speed-lines'
    ]
  };

  // Asset loading priorities for performance optimization
  export const assetPriorities = {
    critical: [
      'site-logo',
      'menu-hamburger',
      'scroll-indicator',
      'timeline-bg'
    ],
    important: [
      'play-icon',
      'pause-icon',
      'arrow-left',
      'arrow-right',
      'era-markers'
    ],
    normal: [
      'film-grain-texture',
      'gradient-overlay-dark',
      'noise-texture',
      'progress-bar'
    ],
    lazy: [
      'cherry-blossom',
      'speed-lines',
      'tech-circuit',
      'particle-flow'
    ]
  };

  // Responsive variants for different screen sizes
  export const responsiveAssets = {
    mobile: {
      logoVariant: 'logo-mark',
      backgroundSimplified: true,
      decorationsReduced: true
    },
    tablet: {
      logoVariant: 'site-logo',
      backgroundSimplified: false,
      decorationsReduced: false
    },
    desktop: {
      logoVariant: 'site-logo',
      backgroundSimplified: false,
      decorationsReduced: false,
      enhancedEffects: true
    }
  };

  // Asset preloading configuration
  export const preloadAssets = {
    immediate: assetPriorities.critical,
    onLoad: assetPriorities.important,
    onInteraction: assetPriorities.normal,
    lazy: assetPriorities.lazy
  };

  export default allUIAssets;