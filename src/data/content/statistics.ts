// src/data/content/statistics.ts
// Comprehensive market data for anime industry visualization

export interface MarketStatistic {
    year: number;
    revenueJapan: number; // in billions USD
    revenueGlobal: number; // in billions USD
    tvSeries: number;
    movies: number;
    ovas: number;
    streamingTitles?: number;
  }
  
  export interface StudioMetrics {
    name: string;
    founded: number;
    notable_works: number;
    peak_revenue_year: number;
    market_share?: number; // percentage
    era: string;
  }
  
  export interface GlobalReachData {
    year: number;
    countries_reached: number;
    streaming_platforms: number;
    international_revenue_percentage: number;
    major_markets: string[];
  }
  
  export interface GenrePopularity {
    genre: string;
    peak_decade: string;
    relative_popularity: number; // 1-100 scale
    notable_titles: string[];
  }
  
  // Historical market data (1960-2025)
  export const marketHistory: MarketStatistic[] = [
    // Foundation Era
    { year: 1963, revenueJapan: 0.05, revenueGlobal: 0.05, tvSeries: 3, movies: 5, ovas: 0 },
    { year: 1965, revenueJapan: 0.08, revenueGlobal: 0.08, tvSeries: 8, movies: 12, ovas: 0 },
    { year: 1970, revenueJapan: 0.15, revenueGlobal: 0.18, tvSeries: 25, movies: 20, ovas: 0 },
    
    // Expansion Era
    { year: 1975, revenueJapan: 0.35, revenueGlobal: 0.45, tvSeries: 45, movies: 35, ovas: 2 },
    { year: 1980, revenueJapan: 0.65, revenueGlobal: 0.95, tvSeries: 65, movies: 50, ovas: 8 },
    { year: 1985, revenueJapan: 1.2, revenueGlobal: 1.8, tvSeries: 85, movies: 75, ovas: 15 },
    
    // Golden Age Era
    { year: 1990, revenueJapan: 2.1, revenueGlobal: 3.2, tvSeries: 110, movies: 95, ovas: 35 },
    { year: 1995, revenueJapan: 3.8, revenueGlobal: 6.5, tvSeries: 145, movies: 120, ovas: 65 },
    { year: 2000, revenueJapan: 4.2, revenueGlobal: 8.9, tvSeries: 180, movies: 150, ovas: 85 },
    { year: 2005, revenueJapan: 4.8, revenueGlobal: 12.3, tvSeries: 220, movies: 185, ovas: 120 },
    
    // Digital Age Era
    { year: 2010, revenueJapan: 5.5, revenueGlobal: 18.7, tvSeries: 280, movies: 220, ovas: 150, streamingTitles: 450 },
    { year: 2015, revenueJapan: 7.2, revenueGlobal: 24.8, tvSeries: 350, movies: 280, ovas: 180, streamingTitles: 1200 },
    
    // Current Era
    { year: 2020, revenueJapan: 12.1, revenueGlobal: 43.6, tvSeries: 420, movies: 350, ovas: 220, streamingTitles: 2800 },
    { year: 2023, revenueJapan: 15.8, revenueGlobal: 56.3, tvSeries: 480, movies: 420, ovas: 280, streamingTitles: 4200 },
    { year: 2024, revenueJapan: 17.2, revenueGlobal: 62.1, tvSeries: 520, movies: 450, ovas: 300, streamingTitles: 4800 },
    { year: 2025, revenueJapan: 18.5, revenueGlobal: 68.9, tvSeries: 580, movies: 480, ovas: 320, streamingTitles: 5400 },
  ];
  
  // Major studio performance metrics
  export const studioMetrics: StudioMetrics[] = [
    {
      name: "Mushi Production",
      founded: 1961,
      notable_works: 45,
      peak_revenue_year: 1970,
      market_share: 25,
      era: "foundation"
    },
    {
      name: "Toei Animation",
      founded: 1948,
      notable_works: 320,
      peak_revenue_year: 1995,
      market_share: 18,
      era: "golden-age"
    },
    {
      name: "Studio Ghibli",
      founded: 1985,
      notable_works: 23,
      peak_revenue_year: 2001,
      market_share: 12,
      era: "golden-age"
    },
    {
      name: "Madhouse",
      founded: 1972,
      notable_works: 180,
      peak_revenue_year: 2010,
      market_share: 8,
      era: "digital-age"
    },
    {
      name: "Pierrot",
      founded: 1979,
      notable_works: 95,
      peak_revenue_year: 2005,
      market_share: 7,
      era: "golden-age"
    },
    {
      name: "Bones",
      founded: 1998,
      notable_works: 65,
      peak_revenue_year: 2018,
      market_share: 6,
      era: "digital-age"
    },
    {
      name: "MAPPA",
      founded: 2011,
      notable_works: 35,
      peak_revenue_year: 2024,
      market_share: 9,
      era: "current"
    },
    {
      name: "Wit Studio",
      founded: 2012,
      notable_works: 28,
      peak_revenue_year: 2023,
      market_share: 5,
      era: "current"
    }
  ];
  
  // Global expansion data
  export const globalReachData: GlobalReachData[] = [
    {
      year: 1980,
      countries_reached: 12,
      streaming_platforms: 0,
      international_revenue_percentage: 15,
      major_markets: ["USA", "France", "Italy"]
    },
    {
      year: 1990,
      countries_reached: 35,
      streaming_platforms: 0,
      international_revenue_percentage: 28,
      major_markets: ["USA", "France", "Germany", "Brazil", "Mexico"]
    },
    {
      year: 2000,
      countries_reached: 65,
      streaming_platforms: 2,
      international_revenue_percentage: 45,
      major_markets: ["USA", "France", "Germany", "Brazil", "Mexico", "South Korea", "Taiwan"]
    },
    {
      year: 2010,
      countries_reached: 120,
      streaming_platforms: 8,
      international_revenue_percentage: 62,
      major_markets: ["USA", "China", "France", "Germany", "Brazil", "Mexico", "South Korea", "Taiwan", "Thailand", "UK"]
    },
    {
      year: 2020,
      countries_reached: 195,
      streaming_platforms: 25,
      international_revenue_percentage: 78,
      major_markets: ["USA", "China", "France", "Germany", "Brazil", "Mexico", "South Korea", "Taiwan", "Thailand", "UK", "India", "Indonesia"]
    },
    {
      year: 2025,
      countries_reached: 200,
      streaming_platforms: 45,
      international_revenue_percentage: 82,
      major_markets: ["USA", "China", "France", "Germany", "Brazil", "Mexico", "South Korea", "Taiwan", "Thailand", "UK", "India", "Indonesia", "Nigeria", "Egypt"]
    }
  ];
  
  // Genre popularity evolution
  export const genrePopularity: GenrePopularity[] = [
    {
      genre: "Mecha",
      peak_decade: "1980s",
      relative_popularity: 85,
      notable_titles: ["Mobile Suit Gundam", "Macross", "Evangelion"]
    },
    {
      genre: "Shounen",
      peak_decade: "1990s-2000s",
      relative_popularity: 95,
      notable_titles: ["Dragon Ball Z", "Naruto", "One Piece", "Bleach"]
    },
    {
      genre: "Magical Girl",
      peak_decade: "1990s",
      relative_popularity: 75,
      notable_titles: ["Sailor Moon", "Cardcaptor Sakura", "Puella Magi Madoka Magica"]
    },
    {
      genre: "Slice of Life",
      peak_decade: "2000s-2010s",
      relative_popularity: 70,
      notable_titles: ["Azumanga Daioh", "K-On!", "Nichijou"]
    },
    {
      genre: "Isekai",
      peak_decade: "2010s-2020s",
      relative_popularity: 88,
      notable_titles: ["Sword Art Online", "Re:Zero", "That Time I Got Reincarnated as a Slime"]
    },
    {
      genre: "Dark Fantasy",
      peak_decade: "2010s-2020s",
      relative_popularity: 82,
      notable_titles: ["Attack on Titan", "Demon Slayer", "Jujutsu Kaisen"]
    }
  ];
  
  // Streaming platform impact data
  export const streamingImpact = {
    preStreaming: {
      years: "1960-2005",
      primary_distribution: "TV Broadcast, VHS/DVD",
      international_delay: "2-5 years",
      piracy_rate: "65%",
      accessibility_score: 25
    },
    earlyStreaming: {
      years: "2006-2015",
      primary_distribution: "TV Broadcast, DVD, Early Streaming",
      international_delay: "6 months - 2 years",
      piracy_rate: "45%",
      accessibility_score: 55
    },
    streamingDominance: {
      years: "2016-2025",
      primary_distribution: "Simultaneous Global Streaming",
      international_delay: "Same day - 1 week",
      piracy_rate: "20%",
      accessibility_score: 90
    }
  };
  
  // Economic impact milestones
  export const economicMilestones = [
    {
      year: 1963,
      milestone: "Astro Boy launches, creating TV anime industry",
      economic_impact: "Foundation of $50M industry"
    },
    {
      year: 1979,
      milestone: "Mobile Suit Gundam creates merchandise model",
      economic_impact: "Toy sales exceed $1B annually"
    },
    {
      year: 1988,
      milestone: "Akira breaks international box office records",
      economic_impact: "First $100M+ international anime film"
    },
    {
      year: 1997,
      milestone: "Pokemon launches globally",
      economic_impact: "Creates $100B+ multimedia franchise"
    },
    {
      year: 2001,
      milestone: "Spirited Away wins Academy Award",
      economic_impact: "Legitimizes anime in Western markets"
    },
    {
      year: 2013,
      milestone: "Attack on Titan streaming breakthrough",
      economic_impact: "Proves streaming viability for anime"
    },
    {
      year: 2020,
      milestone: "Demon Slayer movie breaks records",
      economic_impact: "First anime film to gross $500M+ globally"
    },
    {
      year: 2025,
      milestone: "AI-assisted animation mainstream adoption",
      economic_impact: "Production costs reduced by 30%, output increased 40%"
    }
  ];
  
  // Export all data for easy importing
  export const animeStatistics = {
    marketHistory,
    studioMetrics,
    globalReachData,
    genrePopularity,
    streamingImpact,
    economicMilestones
  };