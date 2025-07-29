// Studio-specific TypeScript definitions for Anime History Website

export interface StudioFounder {
    name: string;
    nameJapanese?: string;
    birthYear?: number;
    deathYear?: number;
    role: 'founder' | 'co-founder' | 'president' | 'director';
    biography?: string;
    notableWorks?: string[];
  }
  
  export interface StudioLocation {
    city: string;
    prefecture: string;
    country: string;
    address?: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  }
  
  export interface StudioFinancials {
    revenue?: {
      year: number;
      amount: number;
      currency: string;
      source?: string;
    }[];
    employees?: {
      year: number;
      count: number;
      type: 'total' | 'animators' | 'directors' | 'producers';
    }[];
    marketCap?: number;
    stockSymbol?: string;
  }
  
  export interface StudioAward {
    name: string;
    year: number;
    category: string;
    work?: string; // Associated anime/film
    description?: string;
    international?: boolean;
  }
  
  export interface StudioTechnology {
    traditionalAnimation: boolean;
    digitalAnimation: boolean;
    cgiAnimation: boolean;
    motionCapture?: boolean;
    proprietaryTools?: string[];
    softwareUsed?: string[];
    innovationsIntroduced?: {
      technique: string;
      year: number;
      description: string;
      firstUsedIn?: string;
    }[];
  }
  
  export interface StudioPartnership {
    partnerName: string;
    partnerType: 'studio' | 'distributor' | 'publisher' | 'broadcaster' | 'streaming';
    relationship: 'subsidiary' | 'parent' | 'joint-venture' | 'licensing' | 'co-production';
    startDate: string;
    endDate?: string;
    notableProjects?: string[];
    description?: string;
  }
  
  export interface StudioGenreSpecialty {
    genre: 'action' | 'romance' | 'sci-fi' | 'fantasy' | 'slice-of-life' | 'sports' | 'mecha' | 'horror' | 'comedy' | 'drama' | 'historical' | 'musical';
    proficiencyLevel: 'primary' | 'secondary' | 'occasional';
    notableWorks: string[];
    innovationsInGenre?: string[];
  }
  
  export interface StudioProduction {
    title: string;
    titleJapanese?: string;
    titleEnglish?: string;
    year: number;
    type: 'tv-series' | 'movie' | 'ova' | 'ona' | 'special' | 'short';
    episodes?: number;
    runtime?: number; // in minutes
    genre: string[];
    director: string[];
    status: 'completed' | 'ongoing' | 'cancelled' | 'planned' | 'hiatus';
    role: 'main-studio' | 'co-production' | 'animation-production' | 'outsourced';
    budget?: number;
    boxOffice?: number;
    awards?: StudioAward[];
    criticalScore?: {
      source: string;
      score: number;
      maxScore: number;
    }[];
    popularityRating?: number;
    description?: string;
    posterImage?: string;
    trailerUrl?: string;
  }
  
  export interface StudioMilestone {
    year: number;
    month?: number;
    day?: number;
    title: string;
    description: string;
    category: 'founding' | 'merger' | 'acquisition' | 'breakthrough' | 'award' | 'expansion' | 'innovation' | 'bankruptcy' | 'closure' | 'restructuring';
    impact: 'industry-changing' | 'significant' | 'moderate' | 'minor';
    relatedWorks?: string[];
    images?: string[];
  }
  
  export interface StudioSocialMedia {
    platform: 'twitter' | 'instagram' | 'youtube' | 'tiktok' | 'facebook' | 'linkedin' | 'official-website';
    url: string;
    followers?: number;
    isVerified?: boolean;
    language: 'japanese' | 'english' | 'multilingual';
  }
  
  export interface Studio {
    // Basic Information
    id: string;
    name: string;
    nameJapanese?: string;
    nameEnglish?: string;
    alternativeNames?: string[];
    description?: string;
    
    // Studio Details
    founded: number | string; // Year as number or ISO date string
    founder?: string;
    founders?: StudioFounder[];
    headquarters?: StudioLocation;
    additionalLocations?: StudioLocation[];
    
    // Status and Operations
    status: 'active' | 'inactive' | 'merged' | 'acquired' | 'bankrupt' | 'restructured' | 'defunct';
    closureDate?: string; // ISO date string
    parentCompany?: string;
    subsidiaries?: string[];
    
    // Production Information
    totalProductions?: number;
    notableWorks?: StudioProduction[];
    genreSpecialties?: StudioGenreSpecialty[];
    keyWorks?: string[];
    notableContributions?: string[];
    location?: string;
    backgroundImage?: string;
    colorPalette?: {
      primary: string;
      secondary: string;
      accent: string;
    };
    stats?: StudioStats;
    productionCapacity?: {
      simultaneousProjects: number;
      annualOutput: number;
      preferredProjectLength: 'short' | 'medium' | 'long' | 'feature';
    };
    
    // Technical Capabilities
    technology?: StudioTechnology;
    animationStyle?: ('traditional' | 'digital' | 'mixed' | 'cgi' | '3d')[];
    signature?: {
      visualStyle?: string;
      narrativeStyle?: string;
      characterDesign?: string;
      backgroundArt?: string;
      colorPalette?: string[];
    };
    
    // Business Information
    financials?: StudioFinancials;
    partnerships?: StudioPartnership[];
    distributionDeals?: {
      distributor: string;
      regions: string[];
      type: 'exclusive' | 'non-exclusive';
      startDate: string;
      endDate?: string;
    }[];
    
    // Recognition and Impact
    awards?: StudioAward[];
    milestones?: StudioMilestone[];
    industryImpact?: {
      level: 'revolutionary' | 'highly-influential' | 'influential' | 'moderate' | 'niche';
      contributions: string[];
      pioneeredTechniques?: string[];
    };
    
    // Cultural Influence
    culturalSignificance?: {
      domesticPopularity: 'legendary' | 'very-high' | 'high' | 'moderate' | 'low';
      internationalRecognition: 'worldwide' | 'widespread' | 'regional' | 'limited' | 'minimal';
      fanbase: {
        size: 'massive' | 'large' | 'medium' | 'small' | 'niche';
        demographics: string[];
        loyalty: 'cult-following' | 'very-loyal' | 'loyal' | 'casual';
      };
      merchandising?: {
        revenue: number;
        categories: string[];
        popularItems: string[];
      };
    };
    
    // Historical Context
    era: 'origins' | 'foundation' | 'expansion' | 'golden-age' | 'digital-age' | 'current-era';
    historicalContext?: {
      economicConditions: string;
      technologicalLandscape: string;
      competitiveEnvironment: string;
      culturalInfluences: string[];
    };
    
    // Visual Assets
    logo?: string;
    brandColors?: string[];
    officialImages?: string[];
    productionImages?: string[];
    
    // Social and Digital Presence
    socialMedia?: StudioSocialMedia[];
    officialWebsite?: string;
    
    // Meta Information
    lastUpdated?: string; // ISO date string
    dataCompleteness?: number; // 0-100 percentage
    sources?: {
      type: 'official' | 'news' | 'interview' | 'documentary' | 'book' | 'academic';
      title: string;
      url?: string;
      date?: string;
      reliability: 'verified' | 'reliable' | 'moderate' | 'unverified';
    }[];
    
    // Analytics and Metrics
    searchPopularity?: number;
    trendingScore?: number;
    socialMentions?: number;
    wikipediaViews?: number;
    
    // Relationships
    rivalStudios?: string[];
    collaboratorStudios?: string[];
    influencedBy?: string[];
    influenced?: string[];
    
    // Future Projections
    upcomingProjects?: {
      title: string;
      estimatedRelease: string;
      type: StudioProduction['type'];
      status: 'announced' | 'in-production' | 'post-production';
    }[];
    
    // Legacy Information
    legacy?: {
      contribution: string;
      lasting_impact: string;
      historical_significance: string;
      influence_on_successors: string[];
    };
  }
  
  // Helper types for studio analytics and filtering
  export type StudioStatus = Studio['status'];
  export type StudioEra = Studio['era'];
  export type StudioImpactLevel = NonNullable<Studio['industryImpact']>['level'];
  export type StudioSize = 'major' | 'mid-tier' | 'boutique' | 'independent';
  export type StudioSpecialization = 'generalist' | 'genre-specialist' | 'technical-specialist' | 'artistic-specialist';

export interface StudioStats {
  totalProductions: number;
  yearsActive: number;
  employeesAtPeak?: number;
  averageProductionBudget?: string;
}

// Studio collection and filtering interfaces
  export interface StudioFilter {
    status?: StudioStatus[];
    era?: StudioEra[];
    founded?: {
      start: number;
      end: number;
    };
    genres?: string[];
    impactLevel?: StudioImpactLevel[];
    location?: string[];
    hasActiveProductions?: boolean;
    minProductions?: number;
    hasAwards?: boolean;
  }
  
  export interface StudioAnalytics {
    totalStudios: number;
    activeStudios: number;
    studiosByEra: Record<StudioEra, number>;
    studiosByStatus: Record<StudioStatus, number>;
    averageProductionCount: number;
    topGenres: {
      genre: string;
      studioCount: number;
    }[];
    geographicalDistribution: {
      location: string;
      count: number;
    }[];
    foundingTimeline: {
      decade: string;
      count: number;
    }[];
  }
  
  // Export default studio data structure for type safety
  export interface StudioDatabase {
    studios: Studio[];
    analytics: StudioAnalytics;
    lastUpdated: string;
    version: string;
  }