// src/data/content/creators.ts
import { Creator, CreatorRole, CreatorEra, CreatorIndustryStats } from '@/types/creator';

export const CREATOR_ROLES: Record<string, CreatorRole> = {
  DIRECTOR: 'director',
  ANIMATOR: 'animator',
  PRODUCER: 'producer',
  WRITER: 'writer',
  COMPOSER: 'composer',
  CHARACTER_DESIGNER: 'character-designer',
  VOICE_ACTOR: 'voice-actor',
  STUDIO_FOUNDER: 'studio-founder'
} as const;

export const CREATOR_ERAS: Record<string, CreatorEra> = {
  ORIGINS: 'origins',
  FOUNDATION: 'foundation',
  EXPANSION: 'expansion', 
  GOLDEN_AGE: 'golden-age',
  DIGITAL_AGE: 'digital-age',
  CURRENT_ERA: 'current-era'
} as const;

export const creators: Creator[] = [
  // ORIGINS ERA (1900s-1930s)
  {
    id: 'jun-kitayama',
    name: 'Jun\'ichi Kitayama',
    nameJapanese: '北山清太郎',
    born: 1888,
    died: 1945,
    era: CREATOR_ERAS.ORIGINS,
    primaryRole: CREATOR_ROLES.DIRECTOR,
    secondaryRoles: [CREATOR_ROLES.ANIMATOR, CREATOR_ROLES.STUDIO_FOUNDER],
    nationality: 'Japanese',
    description: 'Pioneer of Japanese animation, created the first professional animation studio in Japan and established foundational techniques for the industry.',
    keyWorks: [
      'Namakura Gatana (The Dull Sword) - 1917',
      'Urashima Tarō - 1918',
      'Momotarō - 1918'
    ],
    achievements: [
      'Founded first professional animation studio in Japan',
      'Created first successful commercial animated films',
      'Established cut-paper animation techniques',
      'Trained the next generation of Japanese animators'
    ],
    influence: 'Laid the groundwork for the entire Japanese animation industry, establishing both technical and business foundations.',
    philosophy: 'Animation should tell traditional Japanese stories in a uniquely Japanese way.',
    portrait: '/images/creators/kitayama-portrait.jpg',
    signature: '/images/creators/kitayama-signature.png',
    colorPalette: {
      primary: '#8B4513',
      secondary: '#F4E4BC',
      accent: '#D2B48C'
    },
    stats: {
      totalWorks: 12,
      yearsActive: 20,
      awardsReceived: 0, // No formal award system existed
      studiosWorkedWith: 1
    }
  },

  {
    id: 'oten-shimokawa',
    name: 'Oten Shimokawa',
    nameJapanese: '下川凹天',
    born: 1892,
    died: 1973,
    era: CREATOR_ERAS.ORIGINS,
    primaryRole: CREATOR_ROLES.ANIMATOR,
    secondaryRoles: [CREATOR_ROLES.DIRECTOR],
    nationality: 'Japanese',
    description: 'One of the founding fathers of anime, known for creating "Imokawa Mukuzo Genkanban no Maki" - often considered the first anime.',
    keyWorks: [
      'Imokawa Mukuzo Genkanban no Maki - 1917',
      'Dekobō Shingachō - 1917',
      'Various educational films'
    ],
    achievements: [
      'Created first anime film',
      'Pioneered chalk animation techniques',
      'Established narrative structure for animated films',
      'Influenced early animation education'
    ],
    influence: 'His experimental approaches to animation laid groundwork for diverse animation techniques still used today.',
    philosophy: 'Animation is a medium for both entertainment and education.',
    portrait: '/images/creators/shimokawa-portrait.jpg',
    signature: '/images/creators/shimokawa-signature.png',
    colorPalette: {
      primary: '#654321',
      secondary: '#F5E6D3',
      accent: '#A0522D'
    },
    stats: {
      totalWorks: 8,
      yearsActive: 15,
      awardsReceived: 0,
      studiosWorkedWith: 2
    }
  },

  // FOUNDATION ERA (1950s-1960s)
  {
    id: 'osamu-tezuka',
    name: 'Osamu Tezuka',
    nameJapanese: '手塚治虫',
    born: 1928,
    died: 1989,
    era: CREATOR_ERAS.FOUNDATION,
    primaryRole: CREATOR_ROLES.DIRECTOR,
    secondaryRoles: [CREATOR_ROLES.ANIMATOR, CREATOR_ROLES.WRITER, CREATOR_ROLES.STUDIO_FOUNDER],
    nationality: 'Japanese',
    description: 'The "God of Manga" and father of modern anime, revolutionized both manga and animation industries with innovative storytelling and production techniques.',
    keyWorks: [
      'Astro Boy (Tetsuwan Atom) - 1963',
      'Kimba the White Lion - 1965',
      'Princess Knight - 1967',
      'Phoenix (Hi no Tori) - 1980'
    ],
    achievements: [
      'Created first TV anime series',
      'Established limited animation techniques',
      'Founded Mushi Production',
      'Revolutionized manga storytelling',
      'Influenced entire generation of creators'
    ],
    influence: 'Single-handedly established the foundation of modern anime and manga, his techniques and philosophies continue to influence creators worldwide.',
    philosophy: 'Animation should have heart and soul, not just movement. Every frame should serve the story.',
    portrait: '/images/creators/tezuka-portrait.jpg',
    signature: '/images/creators/tezuka-signature.png',
    colorPalette: {
      primary: '#2E86AB',
      secondary: '#A23B72',
      accent: '#F18F01'
    },
    stats: {
      totalWorks: 60,
      yearsActive: 40,
      awardsReceived: 15,
      studiosWorkedWith: 5
    }
  },

  {
    id: 'hiroshi-okawa',
    name: 'Hiroshi Okawa',
    nameJapanese: '大川博',
    born: 1896,
    died: 1971,
    era: CREATOR_ERAS.FOUNDATION,
    primaryRole: CREATOR_ROLES.PRODUCER,
    secondaryRoles: [CREATOR_ROLES.STUDIO_FOUNDER],
    nationality: 'Japanese',
    description: 'Visionary producer who founded Toei Animation and produced Japan\'s first color animated feature film.',
    keyWorks: [
      'Hakujaden (The Tale of the White Serpent) - 1958',
      'Shōnen Sarutobi Sasuke - 1959',
      'Saiyūki - 1960'
    ],
    achievements: [
      'Founded Toei Animation',
      'Produced first Japanese color animated feature',
      'Established theatrical animation market',
      'Created "Disney of the East" model'
    ],
    influence: 'Established the business model for feature-length animation in Japan and created the infrastructure for the modern anime industry.',
    philosophy: 'Japanese animation should rival Disney in quality and exceed it in cultural authenticity.',
    portrait: '/images/creators/okawa-portrait.jpg',
    signature: '/images/creators/okawa-signature.png',
    colorPalette: {
      primary: '#FF6B35',
      secondary: '#004E89',
      accent: '#FFD23F'
    },
    stats: {
      totalWorks: 25,
      yearsActive: 35,
      awardsReceived: 8,
      studiosWorkedWith: 1
    }
  },

  // EXPANSION ERA (1970s-1980s)
  {
    id: 'hayao-miyazaki',
    name: 'Hayao Miyazaki',
    nameJapanese: '宮崎駿',
    born: 1941,
    died: null,
    era: CREATOR_ERAS.EXPANSION,
    primaryRole: CREATOR_ROLES.DIRECTOR,
    secondaryRoles: [CREATOR_ROLES.ANIMATOR, CREATOR_ROLES.WRITER, CREATOR_ROLES.STUDIO_FOUNDER],
    nationality: 'Japanese',
    description: 'Master filmmaker and co-founder of Studio Ghibli, known for hand-drawn animation masterpieces with environmental and humanistic themes.',
    keyWorks: [
      'My Neighbor Totoro - 1988',
      'Spirited Away - 2001',
      'Princess Mononoke - 1997',
      'Castle in the Sky - 1986',
      'Howl\'s Moving Castle - 2004'
    ],
    achievements: [
      'Academy Award for Best Animated Feature (Spirited Away)',
      'Co-founded Studio Ghibli',
      'Golden Lion for Lifetime Achievement',
      'International recognition for anime as art form',
      'Preserved hand-drawn animation traditions'
    ],
    influence: 'Elevated anime to international art form status, inspiring filmmakers worldwide and proving animation can address complex themes.',
    philosophy: 'Animation is not just entertainment - it\'s a way to explore the human condition and our relationship with nature.',
    portrait: '/images/creators/miyazaki-portrait.jpg',
    signature: '/images/creators/miyazaki-signature.png',
    colorPalette: {
      primary: '#4A7C59',
      secondary: '#F7F3E9',
      accent: '#B85450'
    },
    stats: {
      totalWorks: 12,
      yearsActive: 50,
      awardsReceived: 45,
      studiosWorkedWith: 4
    }
  },

  {
    id: 'isao-takahata',
    name: 'Isao Takahata',
    nameJapanese: '高畑勲',
    born: 1935,
    died: 2018,
    era: CREATOR_ERAS.EXPANSION,
    primaryRole: CREATOR_ROLES.DIRECTOR,
    secondaryRoles: [CREATOR_ROLES.PRODUCER, CREATOR_ROLES.WRITER],
    nationality: 'Japanese',
    description: 'Innovative director and co-founder of Studio Ghibli, known for experimental techniques and deeply emotional storytelling.',
    keyWorks: [
      'Grave of the Fireflies - 1988',
      'The Tale of Princess Kaguya - 2013',
      'Only Yesterday - 1991',
      'My Neighbors the Yamadas - 1999'
    ],
    achievements: [
      'Co-founded Studio Ghibli',
      'Pioneered realistic animation techniques',
      'Created emotionally powerful narratives',
      'Influenced art animation worldwide'
    ],
    influence: 'Pushed boundaries of what animation could express emotionally and artistically, inspiring more mature and complex animated storytelling.',
    philosophy: 'Animation should capture the subtleties of human experience and emotion, not just spectacle.',
    portrait: '/images/creators/takahata-portrait.jpg',
    signature: '/images/creators/takahata-signature.png',
    colorPalette: {
      primary: '#8B4A6B',
      secondary: '#F4F1E8',
      accent: '#C2847A'
    },
    stats: {
      totalWorks: 8,
      yearsActive: 45,
      awardsReceived: 25,
      studiosWorkedWith: 3
    }
  },

  {
    id: 'yoshiyuki-tomino',
    name: 'Yoshiyuki Tomino',
    nameJapanese: '富野由悠季',
    born: 1941,
    died: null,
    era: CREATOR_ERAS.EXPANSION,
    primaryRole: CREATOR_ROLES.DIRECTOR,
    secondaryRoles: [CREATOR_ROLES.WRITER],
    nationality: 'Japanese',
    description: 'Revolutionary mecha anime director, creator of the Gundam franchise and pioneer of realistic robot anime.',
    keyWorks: [
      'Mobile Suit Gundam - 1979',
      'Zeta Gundam - 1985',
      'Turn A Gundam - 1999',
      'Space Runaway Ideon - 1980'
    ],
    achievements: [
      'Created the Gundam franchise',
      'Revolutionized mecha anime genre',
      'Established real robot subgenre',
      'Influenced modern sci-fi animation'
    ],
    influence: 'Transformed giant robot anime from simple good-vs-evil stories to complex war dramas, influencing countless mecha series.',
    philosophy: 'Robots are tools of war, and war stories should reflect the true cost of conflict.',
    portrait: '/images/creators/tomino-portrait.jpg',
    signature: '/images/creators/tomino-signature.png',
    colorPalette: {
      primary: '#C41E3A',
      secondary: '#2C3E50',
      accent: '#F39C12'
    },
    stats: {
      totalWorks: 35,
      yearsActive: 55,
      awardsReceived: 12,
      studiosWorkedWith: 8
    }
  },

  // GOLDEN AGE ERA (1990s-2000s)
  {
    id: 'hideaki-anno',
    name: 'Hideaki Anno',
    nameJapanese: '庵野秀明',
    born: 1960,
    died: null,
    era: CREATOR_ERAS.GOLDEN_AGE,
    primaryRole: CREATOR_ROLES.DIRECTOR,
    secondaryRoles: [CREATOR_ROLES.ANIMATOR, CREATOR_ROLES.WRITER, CREATOR_ROLES.STUDIO_FOUNDER],
    nationality: 'Japanese',
    description: 'Visionary director known for psychological complexity and experimental techniques, creator of Neon Genesis Evangelion.',
    keyWorks: [
      'Neon Genesis Evangelion - 1995',
      'Rebuild of Evangelion - 2007-2021',
      'Gunbuster - 1988',
      'Nadia: The Secret of Blue Water - 1990'
    ],
    achievements: [
      'Co-founded Gainax and Studio Khara',
      'Created cultural phenomenon with Evangelion',
      'Pioneered digital animation techniques',
      'Influenced psychological storytelling in anime'
    ],
    influence: 'Revolutionized anime storytelling by incorporating complex psychological themes and breaking traditional narrative structures.',
    philosophy: 'Animation should reflect the creator\'s inner struggles and connect with viewers on a psychological level.',
    portrait: '/images/creators/anno-portrait.jpg',
    signature: '/images/creators/anno-signature.png',
    colorPalette: {
      primary: '#8E44AD',
      secondary: '#34495E',
      accent: '#E74C3C'
    },
    stats: {
      totalWorks: 18,
      yearsActive: 40,
      awardsReceived: 22,
      studiosWorkedWith: 5
    }
  },

  {
    id: 'satoshi-kon',
    name: 'Satoshi Kon',
    nameJapanese: '今敏',
    born: 1963,
    died: 2010,
    era: CREATOR_ERAS.GOLDEN_AGE,
    primaryRole: CREATOR_ROLES.DIRECTOR,
    secondaryRoles: [CREATOR_ROLES.WRITER],
    nationality: 'Japanese',
    description: 'Master of psychological thrillers and reality-bending narratives, known for sophisticated editing and complex themes.',
    keyWorks: [
      'Perfect Blue - 1997',
      'Millennium Actress - 2001',
      'Tokyo Godfathers - 2003',
      'Paprika - 2006'
    ],
    achievements: [
      'Pioneered psychological anime cinema',
      'International critical acclaim',
      'Influenced filmmakers like Darren Aronofsky',
      'Advanced animation as mature art form'
    ],
    influence: 'Proved anime could handle complex psychological narratives, influencing both anime and live-action cinema worldwide.',
    philosophy: 'Animation allows us to visualize the impossible connections between reality and dreams.',
    portrait: '/images/creators/kon-portrait.jpg',
    signature: '/images/creators/kon-signature.png',
    colorPalette: {
      primary: '#2C3E50',
      secondary: '#ECF0F1',
      accent: '#E67E22'
    },
    stats: {
      totalWorks: 4,
      yearsActive: 20,
      awardsReceived: 18,
      studiosWorkedWith: 3
    }
  },

  {
    id: 'masao-maruyama',
    name: 'Masao Maruyama',
    nameJapanese: '丸山正雄',
    born: 1941,
    died: null,
    era: CREATOR_ERAS.GOLDEN_AGE,
    primaryRole: CREATOR_ROLES.PRODUCER,
    secondaryRoles: [CREATOR_ROLES.STUDIO_FOUNDER],
    nationality: 'Japanese',
    description: 'Legendary producer who founded multiple influential studios and produced countless acclaimed anime series.',
    keyWorks: [
      'Monster - 2004',
      'Death Note - 2006',
      'Perfect Blue - 1997',
      'Paranoia Agent - 2004'
    ],
    achievements: [
      'Founded Madhouse and MAPPA',
      'Produced over 100 acclaimed series',
      'Nurtured countless creative talents',
      'Maintained high production standards'
    ],
    influence: 'Shaped the modern anime industry by consistently producing high-quality content and supporting creative vision.',
    philosophy: 'Great anime comes from supporting creative vision while maintaining commercial viability.',
    portrait: '/images/creators/maruyama-portrait.jpg',
    signature: '/images/creators/maruyama-signature.png',
    colorPalette: {
      primary: '#27AE60',
      secondary: '#2C3E50',
      accent: '#F39C12'
    },
    stats: {
      totalWorks: 120,
      yearsActive: 50,
      awardsReceived: 35,
      studiosWorkedWith: 4
    }
  },

  // DIGITAL AGE ERA (2010s)
  {
    id: 'makoto-shinkai',
    name: 'Makoto Shinkai',
    nameJapanese: '新海誠',
    born: 1973,
    died: null,
    era: CREATOR_ERAS.DIGITAL_AGE,
    primaryRole: CREATOR_ROLES.DIRECTOR,
    secondaryRoles: [CREATOR_ROLES.ANIMATOR, CREATOR_ROLES.WRITER],
    nationality: 'Japanese',
    description: 'Master of photorealistic animation and romantic storytelling, known for breathtaking visuals and emotional narratives.',
    keyWorks: [
      'Your Name - 2016',
      'Weathering with You - 2019',
      '5 Centimeters per Second - 2007',
      'The Place Promised in Our Early Days - 2004'
    ],
    achievements: [
      'Highest-grossing anime film (Your Name)',
      'International box office success',
      'Advanced digital animation techniques',
      'Global mainstream anime recognition'
    ],
    influence: 'Brought anime to global mainstream audiences while pushing the boundaries of visual storytelling in animation.',
    philosophy: 'Animation should capture the beauty of everyday moments and the complexity of human relationships.',
    portrait: '/images/creators/shinkai-portrait.jpg',
    signature: '/images/creators/shinkai-signature.png',
    colorPalette: {
      primary: '#3498DB',
      secondary: '#F8F9FA',
      accent: '#E91E63'
    },
    stats: {
      totalWorks: 8,
      yearsActive: 25,
      awardsReceived: 30,
      studiosWorkedWith: 3
    }
  },

  {
    id: 'naoko-yamada',
    name: 'Naoko Yamada',
    nameJapanese: '山田尚子',
    born: 1984,
    died: null,
    era: CREATOR_ERAS.DIGITAL_AGE,
    primaryRole: CREATOR_ROLES.DIRECTOR,
    secondaryRoles: [CREATOR_ROLES.ANIMATOR],
    nationality: 'Japanese',
    description: 'Innovative director known for subtle emotional storytelling and unique visual techniques, particularly in character-driven narratives.',
    keyWorks: [
      'A Silent Voice - 2016',
      'K-On! - 2009',
      'Liz and the Blue Bird - 2018',
      'The Heike Story - 2021'
    ],
    achievements: [
      'Pioneered subtle emotional animation',
      'Advanced character-focused storytelling',
      'International critical recognition',
      'Influenced new generation of female directors'
    ],
    influence: 'Demonstrates how anime can handle delicate emotional subjects with sophistication and visual poetry.',
    philosophy: 'Animation should focus on the small gestures and moments that reveal character and emotion.',
    portrait: '/images/creators/yamada-portrait.jpg',
    signature: '/images/creators/yamada-signature.png',
    colorPalette: {
      primary: '#9B59B6',
      secondary: '#F8F9FA',
      accent: '#E91E63'
    },
    stats: {
      totalWorks: 12,
      yearsActive: 18,
      awardsReceived: 15,
      studiosWorkedWith: 2
    }
  },

  // CURRENT ERA (2020s-2025)
  {
    id: 'tatsuki-fujimoto',
    name: 'Tatsuki Fujimoto',
    nameJapanese: '藤本タツキ',
    born: 1993,
    died: null,
    era: CREATOR_ERAS.CURRENT_ERA,
    primaryRole: CREATOR_ROLES.WRITER,
    secondaryRoles: [CREATOR_ROLES.CHARACTER_DESIGNER],
    nationality: 'Japanese',
    description: 'Revolutionary manga creator whose work has redefined modern anime storytelling with unconventional narratives and dark themes.',
    keyWorks: [
      'Chainsaw Man - 2022',
      'Fire Punch - 2016',
      'Look Back - 2021'
    ],
    achievements: [
      'Created viral anime phenomenon',
      'Influenced new wave of dark fantasy anime',
      'International manga bestseller',
      'Redefined shonen genre conventions'
    ],
    influence: 'Represents the new generation of creators pushing anime into more experimental and mature territories.',
    philosophy: 'Stories should surprise and challenge audiences rather than comfort them.',
    portrait: '/images/creators/fujimoto-portrait.jpg',
    signature: '/images/creators/fujimoto-signature.png',
    colorPalette: {
      primary: '#E74C3C',
      secondary: '#2C3E50',
      accent: '#F1C40F'
    },
    stats: {
      totalWorks: 6,
      yearsActive: 10,
      awardsReceived: 8,
      studiosWorkedWith: 2
    }
  },

  {
    id: 'hiroyuki-imaishi',
    name: 'Hiroyuki Imaishi',
    nameJapanese: '今石洋之',
    born: 1971,
    died: null,
    era: CREATOR_ERAS.CURRENT_ERA,
    primaryRole: CREATOR_ROLES.DIRECTOR,
    secondaryRoles: [CREATOR_ROLES.ANIMATOR, CREATOR_ROLES.STUDIO_FOUNDER],
    nationality: 'Japanese',
    description: 'Dynamic director known for high-energy animation and experimental visual styles, co-founder of Studio Trigger.',
    keyWorks: [
      'Kill la Kill - 2013',
      'Promare - 2019',
      'Cyberpunk: Edgerunners - 2022',
      'Gurren Lagann - 2007'
    ],
    achievements: [
      'Co-founded Studio Trigger',
      'International Netflix collaboration',
      'Pioneered hyper-kinetic animation style',
      'Influenced modern action anime'
    ],
    influence: 'Carries forward the experimental spirit of anime while embracing global collaboration and new distribution methods.',
    philosophy: 'Animation should be energetic, surprising, and push the limits of what\'s possible.',
    portrait: '/images/creators/imaishi-portrait.jpg',
    signature: '/images/creators/imaishi-signature.png',
    colorPalette: {
      primary: '#FF6B6B',
      secondary: '#4ECDC4',
      accent: '#FFE66D'
    },
    stats: {
      totalWorks: 15,
      yearsActive: 25,
      awardsReceived: 18,
      studiosWorkedWith: 4
    }
  },

  {
    id: 'gege-akutami',
    name: 'Gege Akutami',
    nameJapanese: '芥見下々',
    born: 1992,
    died: null,
    era: CREATOR_ERAS.CURRENT_ERA,
    primaryRole: CREATOR_ROLES.WRITER,
    secondaryRoles: [CREATOR_ROLES.CHARACTER_DESIGNER],
    nationality: 'Japanese',
    description: 'Rising star manga creator whose work represents the evolution of shonen anime for modern global audiences.',
    keyWorks: [
      'Jujutsu Kaisen - 2020',
      'Jujutsu Kaisen 0 - 2021'
    ],
    achievements: [
      'Global streaming phenomenon',
      'Redefined modern shonen aesthetics',
      'International fanbase growth',
      'Influenced contemporary anime style'
    ],
    influence: 'Represents the new generation of creators who understand both Japanese traditions and global audience expectations.',
    philosophy: 'Modern anime should honor tradition while embracing contemporary storytelling techniques.',
    portrait: '/images/creators/akutami-portrait.jpg',
    signature: '/images/creators/akutami-signature.png',
    colorPalette: {
      primary: '#1A1A2E',
      secondary: '#16213E',
      accent: '#E94560'
    },
    stats: {
      totalWorks: 3,
      yearsActive: 8,
      awardsReceived: 5,
      studiosWorkedWith: 1
    }
  }
];

// Creator statistics and industry data
export const creatorStats: CreatorIndustryStats = {
  totalCreators: creators.length,
  livingCreators: creators.filter(c => c.died === null).length,
  deceasedCreators: creators.filter(c => c.died !== null).length,
  
  byRole: {
    [CREATOR_ROLES.DIRECTOR]: creators.filter(c => c.primaryRole === CREATOR_ROLES.DIRECTOR).length,
    [CREATOR_ROLES.ANIMATOR]: creators.filter(c => c.primaryRole === CREATOR_ROLES.ANIMATOR).length,
    [CREATOR_ROLES.PRODUCER]: creators.filter(c => c.primaryRole === CREATOR_ROLES.PRODUCER).length,
    [CREATOR_ROLES.WRITER]: creators.filter(c => c.primaryRole === CREATOR_ROLES.WRITER).length,
    [CREATOR_ROLES.COMPOSER]: creators.filter(c => c.primaryRole === CREATOR_ROLES.COMPOSER).length,
    [CREATOR_ROLES.CHARACTER_DESIGNER]: creators.filter(c => c.primaryRole === CREATOR_ROLES.CHARACTER_DESIGNER).length,
    [CREATOR_ROLES.VOICE_ACTOR]: creators.filter(c => c.primaryRole === CREATOR_ROLES.VOICE_ACTOR).length,
    [CREATOR_ROLES.STUDIO_FOUNDER]: creators.filter(c => c.primaryRole === CREATOR_ROLES.STUDIO_FOUNDER).length
  },

  byEra: {
    [CREATOR_ERAS.ORIGINS]: creators.filter(c => c.era === CREATOR_ERAS.ORIGINS).length,
    [CREATOR_ERAS.FOUNDATION]: creators.filter(c => c.era === CREATOR_ERAS.FOUNDATION).length,
    [CREATOR_ERAS.EXPANSION]: creators.filter(c => c.era === CREATOR_ERAS.EXPANSION).length,
    [CREATOR_ERAS.GOLDEN_AGE]: creators.filter(c => c.era === CREATOR_ERAS.GOLDEN_AGE).length,
    [CREATOR_ERAS.DIGITAL_AGE]: creators.filter(c => c.era === CREATOR_ERAS.DIGITAL_AGE).length,
    [CREATOR_ERAS.CURRENT_ERA]: creators.filter(c => c.era === CREATOR_ERAS.CURRENT_ERA).length
  },

  industryDiversity: {
    genderBalance: {
      male: creators.filter(c => c.name.includes('Naoko') || c.name.includes('female')).length < creators.length * 0.9 ? 'improving' : 'male-dominated',
      femaleDirectors: creators.filter(c => c.primaryRole === CREATOR_ROLES.DIRECTOR && c.name.includes('Naoko')).length,
      internationalCreators: creators.filter(c => c.nationality !== 'Japanese').length
    },
    
    generationalShift: {
      veterans: creators.filter(c => c.born && c.born < 1950).length,
      midGeneration: creators.filter(c => c.born && c.born >= 1950 && c.born < 1980).length,
      newGeneration: creators.filter(c => c.born && c.born >= 1980).length
    }
  },

  influenceMetrics: {
    totalWorks: creators.reduce((sum, creator) => sum + creator.stats.totalWorks, 0),
    totalAwards: creators.reduce((sum, creator) => sum + creator.stats.awardsReceived, 0),
    averageCareerLength: creators.reduce((sum, creator) => sum + creator.stats.yearsActive, 0) / creators.length,
    studioFounders: creators.filter(c => c.secondaryRoles?.includes(CREATOR_ROLES.STUDIO_FOUNDER) || c.primaryRole === CREATOR_ROLES.STUDIO_FOUNDER).length
  }
};

// Helper functions for filtering and searching creators
export function getCreatorsByEra(era: CreatorEra): Creator[] {
  return creators.filter(creator => creator.era === era);
}

export function getCreatorsByRole(role: CreatorRole): Creator[] {
  return creators.filter(creator => 
    creator.primaryRole === role || creator.secondaryRoles?.includes(role)
  );
}

export function getLivingCreators(): Creator[] {
  return creators.filter(creator => creator.died === null);
}

export function getCreatorById(id: string): Creator | undefined {
  return creators.find(creator => creator.id === id);
}

export function searchCreators(query: string): Creator[] {
  const lowercaseQuery = query.toLowerCase();
  return creators.filter(creator => 
    creator.name.toLowerCase().includes(lowercaseQuery) ||
    creator.nameJapanese?.toLowerCase().includes(lowercaseQuery) ||
    creator.description.toLowerCase().includes(lowercaseQuery) ||
    creator.keyWorks.some(work => work.toLowerCase().includes(lowercaseQuery)) ||
    creator.achievements.some(achievement => achievement.toLowerCase().includes(lowercaseQuery))
  );
}

export function getInfluentialCreators(): Creator[] {
  return creators.filter(creator => 
    creator.stats.awardsReceived > 10 || 
    creator.stats.totalWorks > 20 ||
    creator.secondaryRoles?.includes(CREATOR_ROLES.STUDIO_FOUNDER)
  ).sort((a, b) => b.stats.awardsReceived - a.stats.awardsReceived);
}

export default creators;