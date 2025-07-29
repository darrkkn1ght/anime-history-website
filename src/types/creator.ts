// src/types/creator.ts
// Creator and studio-related TypeScript definitions for the anime history website

export type CreatorRole = 
  | 'director'
  | 'animator'
  | 'producer'
  | 'writer'
  | 'composer'
  | 'character-designer'
  | 'voice-actor'
  | 'studio-founder';

export type CreatorEra = 
  | 'origins'
  | 'foundation'
  | 'expansion'
  | 'golden-age'
  | 'digital-age'
  | 'current-era';

export interface CreatorStats {
  totalWorks: number;
  yearsActive: number;
  awardsReceived: number;
  studiosWorkedWith: number;
}

export interface CreatorIndustryStats {
  totalCreators: number;
  livingCreators: number;
  deceasedCreators: number;
  byRole: { [key: string]: number };
  byEra: { [key: string]: number };
  industryDiversity: {
    genderBalance: {
      male: string;
      femaleDirectors: number;
      internationalCreators: number;
    };
    generationalShift: {
      veterans: number;
      midGeneration: number;
      newGeneration: number;
    };
  };
  influenceMetrics: {
    totalWorks: number;
    totalAwards: number;
    averageCareerLength: number;
    studioFounders: number;
  };
}

export interface Creator {
  id: string;
  name: string;
  nameJapanese?: string;
  born: number;
  died: number | null;
  era: CreatorEra;
  primaryRole: CreatorRole;
  secondaryRoles?: CreatorRole[];
  nationality: string;
  description: string;
  keyWorks: string[];
  achievements: string[];
  influence: string;
  philosophy: string;
  portrait: string;
  signature: string;
  colorPalette: {
    primary: string;
    secondary: string;
    accent: string;
  };
  stats: CreatorStats;
}
  
  export interface CreatorRoleDetail {
    role: CreatorRoleType;
    description: string;
    yearsActive: {
      start: number;
      end?: number;
    };
    notableProjects: string[];
  }
  
  export type CreatorRoleType = 
    | 'director'
    | 'animator'
    | 'character-designer'
    | 'screenwriter'
    | 'producer'
    | 'voice-actor'
    | 'composer'
    | 'manga-artist'
    | 'studio-founder'
    | 'art-director'
    | 'mechanical-designer'
    | 'storyboard-artist'
    | 'editor'
    | 'sound-director';
  
  export interface Award {
    id: string;
    name: string;
    year: number;
    category: string;
    workRewarded: string;
    organization: string;
    significance: 'international' | 'national' | 'industry' | 'regional';
    description?: string;
  }
  
  export interface NotableWork {
    id: string;
    title: string;
    titleJapanese?: string;
    year: number;
    type: 'anime' | 'manga' | 'film' | 'ova' | 'special';
    role: CreatorRoleType;
    studio?: string;
    significance: string;
    description: string;
    image?: string;
    culturalImpact: number; // 1-100 scale
  }
  
  export interface Collaboration {
    id: string;
    collaboratorId: string;
    collaboratorName: string;
    projectTitle: string;
    year: number;
    type: 'creative' | 'business' | 'mentorship' | 'technical';
    description: string;
    outcome: string;
  }
  
  export interface Studio {
    id: string;
    name: string;
    nameJapanese?: string;
    foundedYear: number;
    dissolvedYear?: number;
    status: StudioStatus;
    founders: string[];
    headquarters: Location;
    description: string;
    history: StudioHistory;
    specialties: StudioSpecialty[];
    notableWorks: StudioWork[];
    subsidiaries?: Studio[];
    parentCompany?: string;
    logo: string;
    website?: string;
    socialMedia?: SocialMediaLinks;
    statistics: StudioStatistics;
  }
  
  export type StudioStatus = 
    | 'active'
    | 'inactive'
    | 'dissolved'
    | 'merged'
    | 'acquired'
    | 'restructured';
  
  export interface Location {
    city: string;
    prefecture: string;
    country: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  }
  
  export interface StudioHistory {
    founding: FoundingStory;
    majorMilestones: Milestone[];
    significantPeriods: SignificantPeriod[];
    challenges: Challenge[];
    innovations: Innovation[];
  }
  
  export interface FoundingStory {
    year: number;
    circumstances: string;
    initialGoals: string[];
    foundingMembers: FoundingMember[];
    firstProject?: string;
    initialFunding?: string;
  }
  
  export interface FoundingMember {
    name: string;
    role: string;
    background: string;
    contribution: string;
  }
  
  export interface Milestone {
    id: string;
    date: string;
    year: number;
    title: string;
    description: string;
    significance: string;
    type: 'business' | 'creative' | 'technological' | 'cultural';
    relatedWorks?: string[];
    impact: number; // 1-10 scale
  }
  
  export interface SignificantPeriod {
    id: string;
    name: string;
    startYear: number;
    endYear?: number;
    description: string;
    keyCharacteristics: string[];
    majorWorks: string[];
    leadership: string[];
    culturalContext: string;
  }
  
  export interface Challenge {
    id: string;
    year: number;
    type: 'financial' | 'creative' | 'market' | 'technological' | 'legal';
    description: string;
    impact: string;
    resolution?: string;
    outcome: 'overcome' | 'ongoing' | 'unresolved' | 'led-to-closure';
  }
  
  export interface Innovation {
    id: string;
    name: string;
    year: number;
    type: 'technical' | 'artistic' | 'business' | 'cultural';
    description: string;
    impact: string;
    adoptionByIndustry: boolean;
    relatedProjects: string[];
  }
  
  export interface StudioSpecialty {
    category: StudioSpecialtyType;
    description: string;
    notableExamples: string[];
    expertiseLevel: number; // 1-10 scale
    yearsOfExperience: number;
  }
  
  export type StudioSpecialtyType = 
    | 'action-animation'
    | 'character-animation'
    | 'mecha-design'
    | 'background-art'
    | 'visual-effects'
    | 'traditional-animation'
    | 'digital-animation'
    | 'stop-motion'
    | 'rotoscoping'
    | 'cel-animation'
    | 'cgi-integration'
    | 'motion-capture'
    | 'experimental-techniques';
  
  export interface StudioWork {
    id: string;
    title: string;
    titleJapanese?: string;
    year: number;
    type: 'tv-series' | 'movie' | 'ova' | 'web-series' | 'short' | 'commercial';
    role: StudioRole;
    budget?: number;
    boxOffice?: number;
    episodes?: number;
    runtime?: number;
    director: string;
    keyStaff: StaffMember[];
    reception: Reception;
    awards?: Award[];
    significance: string;
    posterImage: string;
    additionalImages?: string[];
  }
  
  export type StudioRole = 
    | 'main-production'
    | 'co-production'
    | 'animation-assistance'
    | 'outsourcing'
    | 'supervision'
    | 'distribution';
  
  export interface StaffMember {
    name: string;
    role: string;
    contribution: string;
    isKey: boolean;
  }
  
  export interface Reception {
    criticalRating?: number; // 1-100 scale
    audienceRating?: number; // 1-100 scale
    commercialSuccess: 'high' | 'moderate' | 'low' | 'failure';
    culturalImpact: number; // 1-100 scale
    awards?: string[];
    controversies?: string[];
    legacy: string;
  }
  
  export interface SocialMediaLinks {
    twitter?: string;
    instagram?: string;
    facebook?: string;
    youtube?: string;
    official?: string;
  }
  
  export interface StudioStatistics {
    totalProductions: number;
    yearsActive: number;
    employeeCount?: {
      current?: number;
      peak?: number;
    };
    annualRevenue?: number;
    marketShare?: number; // percentage
    globalReach: GlobalReach;
    productionStats: ProductionStatistics;
  }
  
  export interface GlobalReach {
    domesticMarket: number; // percentage
    internationalMarket: number; // percentage
    keyMarkets: string[];
    distributionPartners: string[];
    streamingPlatforms: string[];
  }
  
  export interface ProductionStatistics {
    averageProductionsPerYear: number;
    totalEpisodes: number;
    totalRuntime: number; // in minutes
    genreDistribution: GenreDistribution[];
    budgetRange: {
      low: number;
      high: number;
      average: number;
    };
  }
  
  export interface GenreDistribution {
    genre: string;
    count: number;
    percentage: number;
  }
  
  // Relationship types between creators and studios
  export interface CreatorStudioRelationship {
    creatorId: string;
    studioId: string;
    relationshipType: RelationshipType;
    startYear: number;
    endYear?: number;
    projects: string[];
    description: string;
    significance: string;
  }
  
  export type RelationshipType = 
    | 'founder'
    | 'employee'
    | 'freelancer'
    | 'consultant'
    | 'director'
    | 'exclusive-contract'
    | 'project-based'
    | 'mentor'
    | 'protege';
  
  // Industry connections and influence networks
  export interface IndustryNetwork {
    id: string;
    name: string;
    type: 'formal' | 'informal' | 'business' | 'creative';
    members: NetworkMember[];
    description: string;
    influence: number; // 1-100 scale
    activeYears: {
      start: number;
      end?: number;
    };
  }
  
  export interface NetworkMember {
    id: string;
    type: 'creator' | 'studio' | 'executive' | 'distributor';
    role: string;
    influence: number; // within the network
    joinYear: number;
    leaveYear?: number;
  }
  
  // Export utility types for component props
  export interface CreatorComponentProps {
    creator: Creator;
    showFullBio?: boolean;
    highlightRole?: CreatorRoleType;
    className?: string;
    onCreatorSelect?: (creatorId: string) => void;
  }
  
  export interface StudioComponentProps {
    studio: Studio;
    showStatistics?: boolean;
    highlightPeriod?: string;
    className?: string;
    onStudioSelect?: (studioId: string) => void;
  }
  
  // Search and filtering types
  export interface CreatorFilter {
    roles?: CreatorRoleType[];
    eras?: string[];
    nationality?: string[];
    activeYears?: {
      start?: number;
      end?: number;
    };
    hasAwards?: boolean;
    minInfluence?: number;
  }
  
  export interface StudioFilter {
    status?: StudioStatus[];
    specialties?: StudioSpecialtyType[];
    foundedYears?: {
      start?: number;
      end?: number;
    };
    location?: string[];
    minProductions?: number;
    hasSubsidiaries?: boolean;
  }