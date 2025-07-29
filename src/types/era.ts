// src/types/era.ts
// Era-specific TypeScript definitions for the anime history website

export interface Era {
    id: string;
    name: string;
    subtitle?: string;
    period: string;
    startYear: number;
    endYear: number;
    duration?: number;
    theme?: any;
    description: string;
    keyCharacteristics: string[];
    culturalContext: any;
    keyMilestones: KeyMilestone[];
    notableWorks?: string[];
    pioneers?: any[];
    technicalInnovations?: string[];
    marketData?: any;
    colorPalette?: EraColorPalette;
    typography?: EraTypography;
    backgroundImage?: string;
    overlayImage?: string;
  }

export interface KeyMilestone {
    year: number;
    title: string;
    description: string;
    significance: string;
    type: string;
  }

export interface EraTimeline {
    totalYears: number;
    startYear: number;
    endYear: number;
    eras: Era[];
  }
  
  export interface EraColorPalette {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    textSecondary: string;
    border: string;
    gradient: {
      from: string;
      to: string;
    };
  }
  
  export interface EraTypography {
    headingFont: string;
    bodyFont: string;
    accentFont?: string;
    headingWeight: number;
    bodyWeight: number;
  }
  
  export interface EraTransition {
    fromEra: string;
    toEra: string;
    transitionType: 'fade' | 'slide' | 'cinematic' | 'morph';
    duration: number;
    easing: string;
    effects: TransitionEffect[];
  }
  
  export interface TransitionEffect {
    type: 'filmGrain' | 'colorShift' | 'parallax' | 'particles';
    intensity: number;
    duration: number;
    delay?: number;
  }
  
  export interface EraStatistics {
    animeProduced: number;
    majorStudios: number;
    globalRevenue?: number;
    viewershipGrowth?: number;
    technologicalMilestones: string[];
    culturalImpact: CulturalImpact;
  }
  
  export interface CulturalImpact {
    domesticReach: number; // percentage
    internationalReach: number; // percentage
    merchandiseRevenue?: number;
    crossMediaAdaptations: number;
    influenceScore: number; // 1-100 scale
  }
  
  export interface EraContent {
    era: Era;
    featuredAnime: FeaturedAnime[];
    keyEvents: HistoricalEvent[];
    technicalInnovations: TechnicalInnovation[];
    statistics: EraStatistics;
    visualAssets: EraVisualAssets;
  }
  
  export interface FeaturedAnime {
    id: string;
    title: string;
    titleJapanese?: string;
    year: number;
    studio: string;
    director: string;
    significance: string;
    description: string;
    posterImage: string;
    trailerUrl?: string;
    genres: string[];
    rating?: number;
    popularity: number; // 1-100 scale
  }
  
  export interface HistoricalEvent {
    id: string;
    date: string;
    year: number;
    title: string;
    description: string;
    significance: string;
    type: 'technological' | 'cultural' | 'economic' | 'artistic';
    relatedAnime?: string[];
    impact: number; // 1-10 scale
  }
  
  export interface TechnicalInnovation {
    id: string;
    name: string;
    year: number;
    description: string;
    inventor?: string;
    studio?: string;
    impact: string;
    adoptionRate: number; // percentage
    stillUsed: boolean;
  }
  
  export interface EraVisualAssets {
    heroImage: string;
    backgroundTexture: string;
    iconSet: string[];
    colorSwatches: string[];
    patternOverlay?: string;
    videoBackground?: string;
    particleConfig?: ParticleConfig;
  }
  
  export interface ParticleConfig {
    count: number;
    color: string;
    size: {
      min: number;
      max: number;
    };
    speed: {
      min: number;
      max: number;
    };
    opacity: {
      min: number;
      max: number;
    };
  }
  
  export interface EraNavigation {
    currentEra: string;
    previousEra?: string;
    nextEra?: string;
    allEras: Era[];
    scrollProgress: number; // 0-100
    viewportProgress: number; // 0-100
  }
  
  export interface EraInteraction {
    isActive: boolean;
    isVisible: boolean;
    scrollY: number;
    intersectionRatio: number;
    animationState: 'entering' | 'active' | 'exiting' | 'inactive';
    lastUpdated: number;
  }
  
  // Era-specific animation configurations
  export interface EraAnimationConfig {
    entrance: AnimationSequence;
    active: AnimationSequence;
    exit: AnimationSequence;
    parallax: ParallaxConfig;
  }
  
  export interface AnimationSequence {
    duration: number;
    delay: number;
    easing: string;
    properties: AnimationProperty[];
  }
  
  export interface AnimationProperty {
    property: string;
    from: string | number;
    to: string | number;
    unit?: string;
  }
  
  export interface ParallaxConfig {
    enabled: boolean;
    speed: number; // multiplier for scroll speed
    direction: 'up' | 'down' | 'left' | 'right';
    maxOffset: number;
  }
  
  // Predefined era identifiers
  export type EraId = 
    | 'origins'       // 1900s-1930s
    | 'foundation'    // 1950s-1960s  
    | 'expansion'     // 1970s-1980s
    | 'golden-age'    // 1990s-2000s
    | 'digital-age'   // 2010s
    | 'current-era';  // 2020s-2025
  
  // Era progression and relationships
  export interface EraProgression {
    chronologicalOrder: EraId[];
    eraRelationships: EraRelationship[];
    timelineMarkers: TimelineMarker[];
  }
  
  export interface EraRelationship {
    fromEra: EraId;
    toEra: EraId;
    relationshipType: 'evolution' | 'revolution' | 'continuation' | 'reaction';
    description: string;
    keyChanges: string[];
  }
  
  export interface TimelineMarker {
    year: number;
    era: EraId;
    position: number; // percentage along timeline
    label: string;
    significance: 'major' | 'moderate' | 'minor';
    icon?: string;
  }
  
  // Export utility type for era-related component props
  export interface EraComponentProps {
    era: EraContent;
    isActive: boolean;
    animationConfig: EraAnimationConfig;
    onEraChange?: (eraId: EraId) => void;
    className?: string;
  }