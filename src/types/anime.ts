// Anime-Related Type Definitions for Anime History Website
// Comprehensive type system for anime content, metadata, and industry data

import { 
    ID, 
    DateString, 
    URL, 
    HexColor, 
    ImageSource, 
    ChartDataPoint 
  } from './global';
  
  // ===== CORE ANIME TYPES =====
  
  export type AnimeType = 
    | 'TV'
    | 'Movie' 
    | 'OVA' 
    | 'ONA'
    | 'Special'
    | 'Music'
    | 'CM'
    | 'PV';
  
  export type AnimeStatus = 
    | 'Finished Airing'
    | 'Currently Airing' 
    | 'Not Yet Aired'
    | 'Cancelled'
    | 'Unknown';
  
  export type AnimeGenre = 
    | 'Action'
    | 'Adventure'
    | 'Comedy'
    | 'Drama'
    | 'Fantasy'
    | 'Horror'
    | 'Mystery'
    | 'Romance'
    | 'Sci-Fi'
    | 'Slice of Life'
    | 'Sports'
    | 'Supernatural'
    | 'Thriller'
    | 'Mecha'
    | 'Historical'
    | 'Military'
    | 'Music'
    | 'Psychological'
    | 'School'
    | 'Shounen'
    | 'Shoujo'
    | 'Seinen'
    | 'Josei'
    | 'Kids'
    | 'Ecchi'
    | 'Harem'
    | 'Yaoi'
    | 'Yuri'
    | 'Isekai'
    | 'Magical Girl';
  
  export type AgeRating = 
    | 'G'      // General Audiences
    | 'PG'     // Parental Guidance
    | 'PG-13'  // Parents Strongly Cautioned
    | 'R'      // Restricted
    | 'R+'     // Mild Nudity
    | 'Rx'     // Hentai
    | 'Unknown';
  
  export type AnimeSource = 
    | 'Original'
    | 'Manga'
    | 'Light Novel'
    | 'Visual Novel'
    | 'Video Game'
    | 'Novel'
    | 'Web Manga'
    | 'Book'
    | 'Card Game'
    | 'Radio'
    | 'Music'
    | 'Other'
    | 'Unknown';
  
  // ===== HISTORICAL ERAS =====
  
  export type AnimeEra = 
    | 'origins'        // 1900s-1930s: Early Animation & Silent Era
    | 'foundation'     // 1940s-1960s: Tezuka Era & TV Anime Birth
    | 'expansion'      // 1970s-1980s: Mecha Boom & International Growth
    | 'golden-age'     // 1990s-2000s: Golden Age of Anime
    | 'digital-age'    // 2010s: Digital Revolution & Streaming
    | 'current-era';   // 2020s-2025: Global Mainstream & AI Integration
  
  export interface EraCharacteristics {
    era: AnimeEra;
    name: string;
    period: string;
    description: string;
    keyTechnologies: string[];
    dominantGenres: AnimeGenre[];
    culturalImpact: string;
    colorPalette: {
      primary: HexColor;
      secondary: HexColor;
      accent: HexColor;
    };
    typography: {
      fontFamily: string;
      style: 'traditional' | 'modern' | 'futuristic';
    };
  }
  
  // ===== ANIME ENTRY TYPES =====
  
  export interface AnimeTitle {
    default: string;
    english?: string;
    japanese?: string;
    romaji?: string;
    synonyms?: string[];
  }
  
  export interface AnimeStaff {
    id: ID;
    name: string;
    role: string;
    department: 'director' | 'writer' | 'producer' | 'composer' | 'character_design' | 'art_director' | 'other';
    imageUrl?: URL;
    bio?: string;
  }
  
  export interface AnimeCharacter {
    id: ID;
    name: string;
    role: 'main' | 'supporting' | 'background';
    description?: string;
    imageUrl?: URL;
    voiceActors?: {
      id: ID;
      name: string;
      language: string;
      imageUrl?: URL;
    }[];
  }
  
  export interface AnimeEpisode {
    id: ID;
    number: number;
    title?: string;
    airDate?: DateString;
    duration?: number; // in minutes
    description?: string;
    imageUrl?: URL;
    rating?: number;
  }
  
  export interface AnimeStatistics {
    score: number;
    scoredBy: number;
    rank?: number;
    popularity?: number;
    members: number;
    favorites: number;
    watching?: number;
    completed?: number;
    onHold?: number;
    dropped?: number;
    planToWatch?: number;
  }
  
  export interface AnimeTrailer {
    id: ID;
    title: string;
    url: URL;
    embedId?: string;
    imageUrl?: URL;
  }
  
  export interface AnimeRelation {
    id: ID;
    type: 'sequel' | 'prequel' | 'side_story' | 'parent_story' | 'summary' | 'full_story' | 'spin_off' | 'adaptation' | 'character' | 'other';
    title: string;
    url?: URL;
  }
  
  // ===== MAIN ANIME INTERFACE =====
  
  export interface Anime {
    // Basic Information
    id: ID;
    malId?: number; // MyAnimeList ID
    titles: AnimeTitle;
    synopsis?: string;
    type: AnimeType;
    source: AnimeSource;
    status: AnimeStatus;
    
    // Temporal Information
    era: AnimeEra;
    startDate?: DateString;
    endDate?: DateString;
    season?: 'winter' | 'spring' | 'summer' | 'fall';
    year: number;
    
    // Content Information
    episodes?: number;
    duration?: number; // minutes per episode
    genres: AnimeGenre[];
    themes?: string[];
    demographics?: string[];
    rating: AgeRating;
    
    // Visual Assets
    imageUrl?: URL;
    bannerUrl?: URL;
    trailers?: AnimeTrailer[];
    screenshots?: ImageSource[];
    
    // People & Production
    studios: AnimeStudio[];
    staff: AnimeStaff[];
    characters?: AnimeCharacter[];
    
    // Metadata
    statistics?: AnimeStatistics;
    relations?: AnimeRelation[];
    externalLinks?: {
      name: string;
      url: URL;
    }[];
    
    // Historical Context
    culturalImpact?: string;
    technicalInnovations?: string[];
    awards?: AnimeAward[];
    
    // Display & Classification
    featured?: boolean;
    landmark?: boolean; // Historically significant
    color?: HexColor; // Brand color for theming
    tags?: string[];
    
    // Timestamps
    createdAt?: DateString;
    updatedAt?: DateString;
  }
  
  // ===== STUDIO TYPES =====
  
  export interface AnimeStudio {
    id: ID;
    name: string;
    established?: DateString;
    founder?: string;
    headquarters?: string;
    website?: URL;
    logoUrl?: URL;
    description?: string;
    
    // Notable Works
    notableWorks?: Anime[];
    totalProductions?: number;
    
    // Era Information
    activeEras: AnimeEra[];
    peakEra?: AnimeEra;
    
    // Company Information
    type: 'major' | 'independent' | 'subsidiary' | 'defunct';
    parentCompany?: string;
    subsidiaries?: string[];
    
    // Innovation & Impact
    innovations?: string[];
    signature?: string; // What they're known for
    awards?: AnimeAward[];
    
    // Visual Identity
    color?: HexColor;
    
    // Metadata
    createdAt?: DateString;
    updatedAt?: DateString;
  }
  
  // ===== CREATOR/PERSON TYPES =====
  
  export interface AnimePerson {
    id: ID;
    name: string;
    nameKanji?: string;
    birthDate?: DateString;
    deathDate?: DateString;
    nationality?: string;
    imageUrl?: URL;
    
    // Professional Information
    roles: string[]; // Director, Writer, Character Designer, etc.
    activeYears?: {
      start: number;
      end?: number;
    };
    
    // Career Information
    notableWorks?: {
      animeId: ID;
      title: string;
      role: string;
      year: number;
    }[];
    awards?: AnimeAward[];
    influences?: string[];
    signature?: string; // Signature style or contribution
    
    // Biography
    biography?: string;
    personalQuotes?: string[];
    
    // Metadata
    createdAt?: DateString;
    updatedAt?: DateString;
  }
  
  // ===== AWARD TYPES =====
  
  export interface AnimeAward {
    id: ID;
    name: string;
    category?: string;
    year: number;
    organization: string;
    description?: string;
    imageUrl?: URL;
    
    // Recipients
    recipient: {
      type: 'anime' | 'person' | 'studio';
      id: ID;
      name: string;
    };
    
    // Award Metadata
    prestige: 'low' | 'medium' | 'high' | 'legendary';
    international?: boolean;
  }
  
  // ===== INDUSTRY DATA TYPES =====
  
  export interface MarketData {
    year: number;
    era: AnimeEra;
    
    // Financial Metrics
    totalRevenue?: number; // in USD
    domesticRevenue?: number;
    internationalRevenue?: number;
    merchandiseRevenue?: number;
    streamingRevenue?: number;
    
    // Production Metrics
    totalProductions: number;
    tvSeries: number;
    movies: number;
    ovas: number;
    
    // Viewership Data
    totalViewers?: number;
    internationalViewers?: number;
    demographicBreakdown?: {
      ageGroup: string;
      percentage: number;
    }[];
    
    // Geographic Data
    topMarkets?: {
      country: string;
      revenue: number;
      viewerCount?: number;
    }[];
    
    // Technology Adoption
    digitalPercentage?: number;
    streamingPercentage?: number;
    cgiUsage?: number;
  }
  
  export interface TrendData extends ChartDataPoint {
    era: AnimeEra;
    metric: string;
    value: number;
    category?: string;
    metadata?: {
      description?: string;
      source?: string;
      confidence?: number;
    };
  }
  
  // ===== SEARCH & FILTERING TYPES =====
  
  export interface AnimeSearchFilters {
    // Basic Filters
    query?: string;
    type?: AnimeType[];
    status?: AnimeStatus[];
    genres?: AnimeGenre[];
    
    // Era & Time Filters
    era?: AnimeEra[];
    yearRange?: {
      start: number;
      end: number;
    };
    season?: ('winter' | 'spring' | 'summer' | 'fall')[];
    
    // Rating & Quality Filters
    rating?: AgeRating[];
    minScore?: number;
    minEpisodes?: number;
    maxEpisodes?: number;
    
    // Production Filters
    studios?: ID[];
    source?: AnimeSource[];
    
    // Special Filters
    featured?: boolean;
    landmark?: boolean;
    hasTrailer?: boolean;
    
    // Sort Options
    sortBy?: 'title' | 'year' | 'score' | 'popularity' | 'episodes' | 'startDate';
    sortOrder?: 'asc' | 'desc';
  }
  
  export interface AnimeSearchResult {
    anime: Anime[];
    totalResults: number;
    appliedFilters: AnimeSearchFilters;
    suggestions?: string[];
    relatedSearches?: string[];
  }
  
  // ===== COLLECTION & PLAYLIST TYPES =====
  
  export interface AnimeCollection {
    id: ID;
    name: string;
    description?: string;
    imageUrl?: URL;
    
    // Collection Content
    animes: ID[];
    totalCount: number;
    
    // Collection Metadata
    category: 'era' | 'genre' | 'studio' | 'creator' | 'theme' | 'custom';
    tags?: string[];
    
    // Curation Information
    curator?: {
      name: string;
      type: 'system' | 'expert' | 'community';
    };
    
    // Display Options
    featured?: boolean;
    color?: HexColor;
    
    // Timestamps
    createdAt?: DateString;
    updatedAt?: DateString;
  }
  
  // ===== RECOMMENDATION TYPES =====
  
  export interface AnimeRecommendation {
    id: ID;
    animeId: ID;
    recommendedAnimes: {
      animeId: ID;
      score: number; // 0-1 similarity score
      reasons: string[];
    }[];
    
    // Recommendation Metadata
    algorithm: string;
    confidence: number;
    generatedAt: DateString;
    
    // Context
    basedOn?: {
      type: 'similar_anime' | 'same_era' | 'same_genre' | 'same_studio' | 'user_history';
      criteria: string[];
    };
  }
  
  // ===== ANALYTICS TYPES =====
  
  export interface AnimeAnalytics {
    animeId: ID;
    
    // Engagement Metrics
    views: number;
    uniqueViews: number;
    averageViewDuration: number;
    
    // User Interaction
    likes: number;
    shares: number;
    bookmarks: number;
    
    // Performance Metrics
    popularityRank?: number;
    trendingScore?: number;
    
    // Time-based Data
    viewsByPeriod: {
      period: string;
      views: number;
    }[];
    
    // Geographic Data
    viewsByCountry?: {
      country: string;
      views: number;
    }[];
    
    // Demographic Data
    viewsByAge?: {
      ageGroup: string;
      percentage: number;
    }[];
    
    // Timestamps
    lastUpdated: DateString;
  }
  
  // ===== EXPORT HELPER TYPES =====
  
  export type AnimeListItem = Pick<
    Anime, 
    'id' | 'titles' | 'imageUrl' | 'year' | 'type' | 'genres' | 'era' | 'episodes'
  >;
  
  export type AnimeCardData = Pick<
    Anime,
    'id' | 'titles' | 'synopsis' | 'imageUrl' | 'year' | 'type' | 'genres' | 'era' | 'statistics'
  >;
  
  export type AnimeTimelineEntry = Pick<
    Anime,
    'id' | 'titles' | 'year' | 'era' | 'imageUrl' | 'culturalImpact' | 'landmark'
  > & {
    position: number; // Timeline position percentage
  };
  
  // ===== VALIDATION SCHEMAS =====
  
  export interface AnimeValidationRules {
    required: (keyof Anime)[];
    optional: (keyof Anime)[];
    formats: {
      [K in keyof Anime]?: RegExp | ((value: Anime[K]) => boolean);
    };
  }
  
  // ===== UTILITY TYPES =====
  
  export type AnimeWithStudio = Anime & {
    primaryStudio: AnimeStudio;
  };
  
  export type AnimeWithAnalytics = Anime & {
    analytics: AnimeAnalytics;
  };
  
  export type EraAnimeCollection = {
    era: AnimeEra;
    characteristics: EraCharacteristics;
    animes: Anime[];
    marketData?: MarketData;
    keyInnovations: string[];
    culturalHighlights: string[];
  };