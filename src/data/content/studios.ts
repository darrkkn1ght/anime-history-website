// src/data/content/studios.ts
import { Studio, StudioEra } from '@/types/studio';

export const STUDIO_ERAS: Record<string, StudioEra> = {
  ORIGINS: 'origins',
  FOUNDATION: 'foundation', 
  EXPANSION: 'expansion',
  GOLDEN_AGE: 'golden-age',
  DIGITAL_AGE: 'digital-age',
  CURRENT_ERA: 'current-era'
} as const;

export const studios: Studio[] = [
  // ORIGINS ERA (1900s-1930s)
  {
    id: 'kitayama-eiga',
    name: 'Kitayama Eiga Seisakujo',
    nameJapanese: '北山映画製作所',
    founded: 1917,
    founder: 'Jun\'ichi Kitayama',
    era: STUDIO_ERAS.ORIGINS,
    location: 'Tokyo, Japan',
    status: 'defunct',
    description: 'One of the earliest animation studios in Japan, pioneering the art of Japanese animation during the silent film era.',
    keyWorks: [
      'Namakura Gatana (The Dull Sword)',
      'Urashima Tarō',
      'Momotarō'
    ],
    notableContributions: [
      'First professional animation studio in Japan',
      'Developed early cut-paper animation techniques',
      'Established foundation for Japanese animation industry'
    ],
    logo: '/images/studios/kitayama-logo.png',
    backgroundImage: '/images/studios/kitayama-bg.jpg',
    colorPalette: {
      primary: '#8B4513',
      secondary: '#F4E4BC',
      accent: '#D2B48C'
    },
    stats: {
      totalProductions: 12,
      yearsActive: 13,
      employeesAtPeak: 8,
      averageProductionBudget: 'N/A'
    }
  },

  // FOUNDATION ERA (1950s-1960s)
  {
    id: 'toei-animation',
    name: 'Toei Animation',
    nameJapanese: '東映アニメーション',
    founded: 1948,
    founder: 'Hiroshi Okawa',
    era: STUDIO_ERAS.FOUNDATION,
    location: 'Tokyo, Japan',
    status: 'active',
    description: 'The oldest major animation studio in Japan, known as the "Disney of the East" for its feature-length animated films.',
    keyWorks: [
      'Hakujaden (The Tale of the White Serpent)',
      'Dragon Ball series',
      'Saint Seiya',
      'Sailor Moon',
      'One Piece'
    ],
    notableContributions: [
      'First Japanese animated feature film in color',
      'Established the theatrical animation industry',
      'Trained generations of animators including Hayao Miyazaki',
      'Pioneer in TV animation production'
    ],
    logo: '/images/studios/toei-logo.png',
    backgroundImage: '/images/studios/toei-bg.jpg',
    colorPalette: {
      primary: '#FF6B35',
      secondary: '#004E89',
      accent: '#FFD23F'
    },
    stats: {
      totalProductions: 500,
      yearsActive: 77,
      employeesAtPeak: 1200,
      averageProductionBudget: '¥500M - ¥2B'
    }
  },

  {
    id: 'mushi-production',
    name: 'Mushi Production',
    nameJapanese: '虫プロダクション',
    founded: 1961,
    founder: 'Osamu Tezuka',
    era: STUDIO_ERAS.FOUNDATION,
    location: 'Tokyo, Japan',
    status: 'defunct',
    description: 'Revolutionary studio founded by the "God of Manga" Osamu Tezuka, pioneering TV animation in Japan.',
    keyWorks: [
      'Astro Boy (Tetsuwan Atom)',
      'Kimba the White Lion',
      'Princess Knight',
      'Phoenix (Hi no Tori)'
    ],
    notableContributions: [
      'First Japanese TV anime series',
      'Established limited animation techniques',
      'Created the TV anime production model',
      'Influenced modern anime production methods'
    ],
    logo: '/images/studios/mushi-logo.png',
    backgroundImage: '/images/studios/mushi-bg.jpg',
    colorPalette: {
      primary: '#2E86AB',
      secondary: '#A23B72',
      accent: '#F18F01'
    },
    stats: {
      totalProductions: 45,
      yearsActive: 12,
      employeesAtPeak: 300,
      averageProductionBudget: '¥50M - ¥200M'
    }
  },

  // EXPANSION ERA (1970s-1980s)
  {
    id: 'studio-ghibli',
    name: 'Studio Ghibli',
    nameJapanese: 'スタジオジブリ',
    founded: 1985,
    founder: 'Hayao Miyazaki, Isao Takahata, Toshio Suzuki',
    era: STUDIO_ERAS.EXPANSION,
    location: 'Tokyo, Japan',
    status: 'active',
    description: 'World-renowned studio famous for high-quality hand-drawn animation and environmental themes.',
    keyWorks: [
      'My Neighbor Totoro',
      'Spirited Away',
      'Princess Mononoke',
      'Castle in the Sky',
      'Howl\'s Moving Castle'
    ],
    notableContributions: [
      'Elevated anime to international art form status',
      'First anime studio to win Academy Award',
      'Preserved traditional hand-drawn animation',
      'Created timeless, universal stories'
    ],
    logo: '/images/studios/ghibli-logo.png',
    backgroundImage: '/images/studios/ghibli-bg.jpg',
    colorPalette: {
      primary: '#4A7C59',
      secondary: '#F7F3E9',
      accent: '#B85450'
    },
    stats: {
      totalProductions: 23,
      yearsActive: 40,
      employeesAtPeak: 150,
      averageProductionBudget: '¥1B - ¥5B'
    }
  },

  {
    id: 'sunrise',
    name: 'Sunrise',
    nameJapanese: 'サンライズ',
    founded: 1972,
    founder: 'Former Mushi Production staff',
    era: STUDIO_ERAS.EXPANSION,
    location: 'Tokyo, Japan',
    status: 'active',
    description: 'Legendary mecha anime studio, creator of the most influential robot anime series in history.',
    keyWorks: [
      'Mobile Suit Gundam',
      'Cowboy Bebop',
      'Code Geass',
      'City Hunter',
      'Escaflowne'
    ],
    notableContributions: [
      'Revolutionized mecha anime genre',
      'Created the Gundam franchise',
      'Advanced mechanical animation techniques',
      'Influenced global sci-fi animation'
    ],
    logo: '/images/studios/sunrise-logo.png',
    backgroundImage: '/images/studios/sunrise-bg.jpg',
    colorPalette: {
      primary: '#C41E3A',
      secondary: '#2C3E50',
      accent: '#F39C12'
    },
    stats: {
      totalProductions: 200,
      yearsActive: 53,
      employeesAtPeak: 400,
      averageProductionBudget: '¥300M - ¥1.5B'
    }
  },

  // GOLDEN AGE ERA (1990s-2000s)
  {
    id: 'gainax',
    name: 'Gainax',
    nameJapanese: 'ガイナックス',
    founded: 1984,
    founder: 'Hideaki Anno, Hiroyuki Yamaga, Takami Akai',
    era: STUDIO_ERAS.GOLDEN_AGE,
    location: 'Tokyo, Japan',
    status: 'inactive',
    description: 'Experimental studio known for groundbreaking animation techniques and psychological storytelling.',
    keyWorks: [
      'Neon Genesis Evangelion',
      'FLCL',
      'Gunbuster',
      'Nadia: The Secret of Blue Water',
      'Gurren Lagann'
    ],
    notableContributions: [
      'Pioneered digital animation techniques',
      'Created psychological depth in anime',
      'Influenced modern anime aesthetics',
      'Experimental narrative structures'
    ],
    logo: '/images/studios/gainax-logo.png',
    backgroundImage: '/images/studios/gainax-bg.jpg',
    colorPalette: {
      primary: '#8E44AD',
      secondary: '#34495E',
      accent: '#E74C3C'
    },
    stats: {
      totalProductions: 25,
      yearsActive: 35,
      employeesAtPeak: 80,
      averageProductionBudget: '¥200M - ¥800M'
    }
  },

  {
    id: 'madhouse',
    name: 'Madhouse',
    nameJapanese: 'マッドハウス',
    founded: 1972,
    founder: 'Masao Maruyama, Osamu Dezaki, Rintaro, Yoshiaki Kawajiri',
    era: STUDIO_ERAS.GOLDEN_AGE,
    location: 'Tokyo, Japan',
    status: 'active',
    description: 'Prestigious studio known for high-quality animation and diverse range of acclaimed series and films.',
    keyWorks: [
      'Perfect Blue',
      'Monster',
      'Death Note',
      'One Punch Man',
      'Hunter x Hunter'
    ],
    notableContributions: [
      'Maintained high animation quality standards',
      'Diverse genre expertise',
      'Collaboration with renowned directors',
      'International co-productions'
    ],
    logo: '/images/studios/madhouse-logo.png',
    backgroundImage: '/images/studios/madhouse-bg.jpg',
    colorPalette: {
      primary: '#2C3E50',
      secondary: '#ECF0F1',
      accent: '#E67E22'
    },
    stats: {
      totalProductions: 150,
      yearsActive: 53,
      employeesAtPeak: 200,
      averageProductionBudget: '¥400M - ¥1.2B'
    }
  },

  // DIGITAL AGE ERA (2010s)
  {
    id: 'wit-studio',
    name: 'WIT Studio',
    nameJapanese: 'ウィットスタジオ',
    founded: 2012,
    founder: 'George Wada',
    era: STUDIO_ERAS.DIGITAL_AGE,
    location: 'Tokyo, Japan',
    status: 'active',
    description: 'Modern studio combining traditional animation with cutting-edge digital techniques.',
    keyWorks: [
      'Attack on Titan (Seasons 1-3)',
      'Kabaneri of the Iron Fortress',
      'Vinland Saga',
      'Great Pretender',
      'Ranking of Kings'
    ],
    notableContributions: [
      'Hybrid traditional-digital animation',
      'Cinematic action sequences',
      'International collaboration',
      'Modern production efficiency'
    ],
    logo: '/images/studios/wit-logo.png',
    backgroundImage: '/images/studios/wit-bg.jpg',
    colorPalette: {
      primary: '#16A085',
      secondary: '#2C3E50',
      accent: '#F39C12'
    },
    stats: {
      totalProductions: 20,
      yearsActive: 13,
      employeesAtPeak: 150,
      averageProductionBudget: '¥500M - ¥2B'
    }
  },

  {
    id: 'kyoto-animation',
    name: 'Kyoto Animation',
    nameJapanese: '京都アニメーション',
    founded: 1981,
    founder: 'Hideaki Hatta, Yoko Hatta',
    era: STUDIO_ERAS.DIGITAL_AGE,
    location: 'Kyoto, Japan',
    status: 'active',
    description: 'Renowned for exceptional animation quality and employee-friendly work environment.',
    keyWorks: [
      'K-On!',
      'Violet Evergarden',
      'A Silent Voice',
      'Your Name (collaboration)',
      'Demon Slayer (collaboration)'
    ],
    notableContributions: [
      'Industry-leading animation quality',
      'Employee welfare innovation',
      'Training program excellence',
      'Consistent visual excellence'
    ],
    logo: '/images/studios/kyoani-logo.png',
    backgroundImage: '/images/studios/kyoani-bg.jpg',
    colorPalette: {
      primary: '#9B59B6',
      secondary: '#F8F9FA',
      accent: '#E91E63'
    },
    stats: {
      totalProductions: 40,
      yearsActive: 44,
      employeesAtPeak: 180,
      averageProductionBudget: '¥600M - ¥1.8B'
    }
  },

  // CURRENT ERA (2020s-2025)
  {
    id: 'mappa',
    name: 'MAPPA',
    nameJapanese: 'マッパ',
    founded: 2011,
    founder: 'Masao Maruyama',
    era: STUDIO_ERAS.CURRENT_ERA,
    location: 'Tokyo, Japan',
    status: 'active',
    description: 'Leading modern studio known for high-profile adaptations and international success.',
    keyWorks: [
      'Attack on Titan (Final Season)',
      'Jujutsu Kaisen',
      'Chainsaw Man',
      'Hell\'s Paradise',
      'Vinland Saga Season 2'
    ],
    notableContributions: [
      'Global streaming success',
      'Modern production techniques',
      'International market focus',
      'High-profile manga adaptations'
    ],
    logo: '/images/studios/mappa-logo.png',
    backgroundImage: '/images/studios/mappa-bg.jpg',
    colorPalette: {
      primary: '#E74C3C',
      secondary: '#2C3E50',
      accent: '#F1C40F'
    },
    stats: {
      totalProductions: 30,
      yearsActive: 14,
      employeesAtPeak: 300,
      averageProductionBudget: '¥800M - ¥3B'
    }
  },

  {
    id: 'studio-trigger',
    name: 'Studio Trigger',
    nameJapanese: 'スタジオトリガー',
    founded: 2011,
    founder: 'Hiroyuki Imaishi, Masahiko Ohtsuka',
    era: STUDIO_ERAS.CURRENT_ERA,
    location: 'Tokyo, Japan',
    status: 'active',
    description: 'Creative studio carrying on Gainax\'s experimental spirit with modern energy and international appeal.',
    keyWorks: [
      'Kill la Kill',
      'Little Witch Academia',
      'Promare',
      'Cyberpunk: Edgerunners',
      'Dungeon Meshi'
    ],
    notableContributions: [
      'International collaboration (Netflix)',
      'Experimental animation styles',
      'Creative freedom advocacy',
      'Genre-blending expertise'
    ],
    logo: '/images/studios/trigger-logo.png',
    backgroundImage: '/images/studios/trigger-bg.jpg',
    colorPalette: {
      primary: '#FF6B6B',
      secondary: '#4ECDC4',
      accent: '#FFE66D'
    },
    stats: {
      totalProductions: 15,
      yearsActive: 14,
      employeesAtPeak: 100,
      averageProductionBudget: '¥600M - ¥2.5B'
    }
  }
];

// Studio statistics and industry data
export const studioStats = {
  totalStudios: studios.length,
  activeStudios: studios.filter(s => s.status === 'active').length,
  defunctStudios: studios.filter(s => s.status === 'defunct').length,
  
  byEra: {
    [STUDIO_ERAS.ORIGINS]: studios.filter(s => s.era === STUDIO_ERAS.ORIGINS).length,
    [STUDIO_ERAS.FOUNDATION]: studios.filter(s => s.era === STUDIO_ERAS.FOUNDATION).length,
    [STUDIO_ERAS.EXPANSION]: studios.filter(s => s.era === STUDIO_ERAS.EXPANSION).length,
    [STUDIO_ERAS.GOLDEN_AGE]: studios.filter(s => s.era === STUDIO_ERAS.GOLDEN_AGE).length,
    [STUDIO_ERAS.DIGITAL_AGE]: studios.filter(s => s.era === STUDIO_ERAS.DIGITAL_AGE).length,
    [STUDIO_ERAS.CURRENT_ERA]: studios.filter(s => s.era === STUDIO_ERAS.CURRENT_ERA).length
  },

  industryGrowth: {
    1960: { studiosCount: 5, totalEmployees: 500 },
    1970: { studiosCount: 15, totalEmployees: 1200 },
    1980: { studiosCount: 35, totalEmployees: 3500 },
    1990: { studiosCount: 80, totalEmployees: 8000 },
    2000: { studiosCount: 150, totalEmployees: 15000 },
    2010: { studiosCount: 300, totalEmployees: 25000 },
    2020: { studiosCount: 500, totalEmployees: 35000 },
    2025: { studiosCount: 650, totalEmployees: 42000 }
  }
};

// Helper functions for filtering and searching studios
export function getStudiosByEra(era: StudioEra): Studio[] {
  return studios.filter(studio => studio.era === era);
}

export function getActiveStudios(): Studio[] {
  return studios.filter(studio => studio.status === 'active');
}

export function getStudioById(id: string): Studio | undefined {
  return studios.find(studio => studio.id === id);
}

export function searchStudios(query: string): Studio[] {
  const lowercaseQuery = query.toLowerCase();
  return studios.filter(studio => 
    studio.name.toLowerCase().includes(lowercaseQuery) ||
    studio.nameJapanese?.toLowerCase().includes(lowercaseQuery) ||
    studio.founder?.toLowerCase().includes(lowercaseQuery) ||
    studio.description?.toLowerCase().includes(lowercaseQuery) ||
    studio.keyWorks?.some(work => work.toLowerCase().includes(lowercaseQuery))
  );
}

export default studios;