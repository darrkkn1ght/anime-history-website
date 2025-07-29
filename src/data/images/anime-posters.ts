/**
 * Anime Poster Image References
 * Comprehensive database of anime poster assets organized by era and significance
 * Used throughout the timeline and era components for visual storytelling
 */

export interface AnimePoster {
    id: string;
    title: string;
    year: number;
    era: 'origins' | 'foundation' | 'expansion' | 'golden-age' | 'digital-age' | 'current-era';
    path: string;
    altText: string;
    significance: 'legendary' | 'influential' | 'popular' | 'notable';
    dimensions?: {
      width: number;
      height: number;
    };
    studio?: string;
    genre?: string[];
    description?: string;
  }
  
  // Origins Era (1900s-1930s) - Silent & Early Animation
  export const originsPosters: AnimePoster[] = [
    {
      id: 'namakura-gatana',
      title: 'The Dull Sword (Namakura Gatana)',
      year: 1917,
      era: 'origins',
      path: '/images/eras/origins/namakura-gatana-poster.jpg',
      altText: 'The Dull Sword - First professional anime from 1917',
      significance: 'legendary',
      studio: 'Kobayashi Shokai',
      genre: ['comedy', 'short'],
      description: 'Jun Ichi Kōuchi\'s groundbreaking work, considered one of the first professional anime productions'
    },
    {
      id: 'momotaro-umi-no-shinpei',
      title: 'Momotarō: Umi no Shinpei',
      year: 1918,
      era: 'origins',
      path: '/images/eras/origins/momotaro-poster.jpg',
      altText: 'Momotaro Navy anime poster from 1918',
      significance: 'legendary',
      studio: 'Seitaro Kitayama',
      genre: ['adventure', 'folklore'],
      description: 'Early propaganda film featuring the beloved Momotarō character'
    },
    {
      id: 'chikara-to-onna-no-yo-no-naka',
      title: 'The Power and Women of the World',
      year: 1933,
      era: 'origins',
      path: '/images/eras/origins/chikara-poster.jpg',
      altText: 'Early 1930s anime exploring social themes',
      significance: 'influential',
      studio: 'Kenzo Masaoka',
      genre: ['drama', 'social'],
      description: 'One of the first anime to tackle complex social issues'
    }
  ];
  
  // Foundation Era (1950s-1960s) - TV Animation Birth
  export const foundationPosters: AnimePoster[] = [
    {
      id: 'astro-boy-1963',
      title: 'Astro Boy (Tetsuwan Atom)',
      year: 1963,
      era: 'foundation',
      path: '/images/eras/foundation/astro-boy-poster.jpg',
      altText: 'Astro Boy - The first TV anime series poster',
      significance: 'legendary',
      studio: 'Mushi Production',
      genre: ['sci-fi', 'adventure', 'superhero'],
      description: 'Osamu Tezuka\'s revolutionary TV anime that established the medium'
    },
    {
      id: 'gigantor',
      title: 'Gigantor (Tetsujin 28-go)',
      year: 1963,
      era: 'foundation',
      path: '/images/eras/foundation/gigantor-poster.jpg',
      altText: 'Gigantor robot anime poster from 1963',
      significance: 'influential',
      studio: 'TCJ Animation',
      genre: ['mecha', 'action'],
      description: 'Pioneer of the giant robot (mecha) genre'
    },
    {
      id: 'kimba-white-lion',
      title: 'Kimba the White Lion (Jungle Taitei)',
      year: 1965,
      era: 'foundation',
      path: '/images/eras/foundation/kimba-poster.jpg',
      altText: 'Kimba the White Lion - First color TV anime',
      significance: 'legendary',
      studio: 'Mushi Production',
      genre: ['adventure', 'family', 'nature'],
      description: 'First color TV anime series, showcasing Tezuka\'s artistic vision'
    },
    {
      id: 'speed-racer',
      title: 'Speed Racer (Mach GoGoGo)',
      year: 1967,
      era: 'foundation',
      path: '/images/eras/foundation/speed-racer-poster.jpg',
      altText: 'Speed Racer racing anime poster',
      significance: 'popular',
      studio: 'Tatsunoko Productions',
      genre: ['racing', 'action', 'adventure'],
      description: 'High-speed racing anime that gained international popularity'
    }
  ];
  
  // Expansion Era (1970s-1980s) - Genre Explosion
  export const expansionPosters: AnimePoster[] = [
    {
      id: 'mobile-suit-gundam',
      title: 'Mobile Suit Gundam',
      year: 1979,
      era: 'expansion',
      path: '/images/eras/expansion/gundam-poster.jpg',
      altText: 'Original Mobile Suit Gundam poster',
      significance: 'legendary',
      studio: 'Sunrise',
      genre: ['mecha', 'military', 'drama'],
      description: 'Revolutionary real robot anime that redefined the mecha genre'
    },
    {
      id: 'space-battleship-yamato',
      title: 'Space Battleship Yamato',
      year: 1974,
      era: 'expansion',
      path: '/images/eras/expansion/yamato-poster.jpg',
      altText: 'Space Battleship Yamato epic space opera poster',
      significance: 'legendary',
      studio: 'Academy Productions',
      genre: ['space opera', 'drama', 'war'],
      description: 'Epic space opera that established anime as serious storytelling medium'
    },
    {
      id: 'lupin-iii',
      title: 'Lupin III',
      year: 1971,
      era: 'expansion',
      path: '/images/eras/expansion/lupin-poster.jpg',
      altText: 'Lupin III gentleman thief anime poster',
      significance: 'influential',
      studio: 'Tokyo Movie Shinsha',
      genre: ['adventure', 'comedy', 'crime'],
      description: 'Stylish gentleman thief series with international appeal'
    },
    {
      id: 'galaxy-express-999',
      title: 'Galaxy Express 999',
      year: 1978,
      era: 'expansion',
      path: '/images/eras/expansion/galaxy-express-poster.jpg',
      altText: 'Galaxy Express 999 space train adventure poster',
      significance: 'influential',
      studio: 'Toei Animation',
      genre: ['sci-fi', 'adventure', 'philosophy'],
      description: 'Leiji Matsumoto\'s philosophical space journey masterpiece'
    },
    {
      id: 'akira',
      title: 'Akira',
      year: 1988,
      era: 'expansion',
      path: '/images/eras/expansion/akira-poster.jpg',
      altText: 'Akira cyberpunk anime movie poster',
      significance: 'legendary',
      studio: 'Akira Committee',
      genre: ['cyberpunk', 'thriller', 'sci-fi'],
      description: 'Groundbreaking cyberpunk film that brought anime to global mainstream'
    }
  ];
  
  // Golden Age Era (1990s-2000s) - International Breakthrough
  export const goldenAgePosters: AnimePoster[] = [
    {
      id: 'dragon-ball-z',
      title: 'Dragon Ball Z',
      year: 1989,
      era: 'golden-age',
      path: '/images/eras/golden-age/dbz-poster.jpg',
      altText: 'Dragon Ball Z Saiyan warriors poster',
      significance: 'legendary',
      studio: 'Toei Animation',
      genre: ['battle', 'adventure', 'supernatural'],
      description: 'Global phenomenon that defined battle anime for generations'
    },
    {
      id: 'sailor-moon',
      title: 'Sailor Moon',
      year: 1992,
      era: 'golden-age',
      path: '/images/eras/golden-age/sailor-moon-poster.jpg',
      altText: 'Sailor Moon magical girl anime poster',
      significance: 'legendary',
      studio: 'Toei Animation',
      genre: ['magical girl', 'romance', 'action'],
      description: 'Revolutionary magical girl series that empowered female audiences worldwide'
    },
    {
      id: 'neon-genesis-evangelion',
      title: 'Neon Genesis Evangelion',
      year: 1995,
      era: 'golden-age',
      path: '/images/eras/golden-age/evangelion-poster.jpg',
      altText: 'Neon Genesis Evangelion mecha psychological thriller poster',
      significance: 'legendary',
      studio: 'Gainax',
      genre: ['mecha', 'psychological', 'apocalyptic'],
      description: 'Psychologically complex mecha series that redefined anime storytelling'
    },
    {
      id: 'pokemon',
      title: 'Pokémon',
      year: 1997,
      era: 'golden-age',
      path: '/images/eras/golden-age/pokemon-poster.jpg',
      altText: 'Pokémon adventure anime poster with Pikachu',
      significance: 'legendary',
      studio: 'OLM',
      genre: ['adventure', 'family', 'fantasy'],
      description: 'Global multimedia phenomenon that introduced anime to children worldwide'
    },
    {
      id: 'cowboy-bebop',
      title: 'Cowboy Bebop',
      year: 1998,
      era: 'golden-age',
      path: '/images/eras/golden-age/cowboy-bebop-poster.jpg',
      altText: 'Cowboy Bebop space western noir poster',
      significance: 'legendary',
      studio: 'Sunrise',
      genre: ['space western', 'noir', 'drama'],
      description: 'Stylish space western that elevated anime to art form status'
    },
    {
      id: 'one-piece',
      title: 'One Piece',
      year: 1999,
      era: 'golden-age',
      path: '/images/eras/golden-age/one-piece-poster.jpg',
      altText: 'One Piece pirate adventure anime poster',
      significance: 'legendary',
      studio: 'Toei Animation',
      genre: ['adventure', 'comedy', 'supernatural'],
      description: 'Epic pirate adventure that became the best-selling manga series'
    }
  ];
  
  // Digital Age Era (2010s) - Streaming Revolution
  export const digitalAgePosters: AnimePoster[] = [
    {
      id: 'attack-on-titan',
      title: 'Attack on Titan (Shingeki no Kyojin)',
      year: 2013,
      era: 'digital-age',
      path: '/images/eras/digital-age/aot-poster.jpg',
      altText: 'Attack on Titan dark fantasy poster with titans',
      significance: 'legendary',
      studio: 'Mappa / WIT Studio',
      genre: ['dark fantasy', 'action', 'military'],
      description: 'Dark, intense series that redefined modern anime storytelling'
    },
    {
      id: 'demon-slayer',
      title: 'Demon Slayer (Kimetsu no Yaiba)',
      year: 2019,
      era: 'digital-age',
      path: '/images/eras/digital-age/demon-slayer-poster.jpg',
      altText: 'Demon Slayer supernatural action poster',
      significance: 'legendary',
      studio: 'Ufotable',
      genre: ['supernatural', 'action', 'historical'],
      description: 'Visually stunning series that broke box office records worldwide'
    },
    {
      id: 'your-name',
      title: 'Your Name (Kimi no Na wa)',
      year: 2016,
      era: 'digital-age',
      path: '/images/eras/digital-age/your-name-poster.jpg',
      altText: 'Your Name romantic supernatural drama poster',
      significance: 'legendary',
      studio: 'CoMix Wave Films',
      genre: ['romance', 'supernatural', 'drama'],
      description: 'Makoto Shinkai\'s masterpiece that captivated global audiences'
    },
    {
      id: 'jujutsu-kaisen',
      title: 'Jujutsu Kaisen',
      year: 2020,
      era: 'digital-age',
      path: '/images/eras/digital-age/jujutsu-kaisen-poster.jpg',
      altText: 'Jujutsu Kaisen supernatural action poster',
      significance: 'popular',
      studio: 'Mappa',
      genre: ['supernatural', 'action', 'school'],
      description: 'Modern supernatural action series with innovative animation'
    }
  ];
  
  // Current Era (2020s-2025) - Global Dominance
  export const currentEraPosters: AnimePoster[] = [
    {
      id: 'dandadan',
      title: 'Dandadan',
      year: 2024,
      era: 'current-era',
      path: '/images/eras/current-era/dandadan-poster.jpg',
      altText: 'Dandadan supernatural comedy poster',
      significance: 'popular',
      studio: 'Science Saru',
      genre: ['supernatural', 'comedy', 'action'],
      description: 'Viral sensation blending supernatural elements with comedy'
    },
    {
      id: 'chainsaw-man',
      title: 'Chainsaw Man',
      year: 2022,
      era: 'current-era',
      path: '/images/eras/current-era/chainsaw-man-poster.jpg',
      altText: 'Chainsaw Man dark action poster',
      significance: 'influential',
      studio: 'Mappa',
      genre: ['dark fantasy', 'action', 'horror'],
      description: 'Gritty, unconventional series pushing creative boundaries'
    },
    {
      id: 'spy-x-family',
      title: 'Spy x Family',
      year: 2022,
      era: 'current-era',
      path: '/images/eras/current-era/spy-family-poster.jpg',
      altText: 'Spy x Family wholesome spy comedy poster',
      significance: 'popular',
      studio: 'WIT Studio / CloverWorks',
      genre: ['comedy', 'action', 'family'],
      description: 'Heartwarming spy family comedy that became a global hit'
    },
    {
      id: 'frieren',
      title: 'Frieren: Beyond Journey\'s End',
      year: 2023,
      era: 'current-era',
      path: '/images/eras/current-era/frieren-poster.jpg',
      altText: 'Frieren fantasy adventure poster',
      significance: 'influential',
      studio: 'Madhouse',
      genre: ['fantasy', 'adventure', 'drama'],
      description: 'Contemplative fantasy series exploring themes of time and mortality'
    }
  ];
  
  // Combined database for easy access
  export const allAnimePosters: AnimePoster[] = [
    ...originsPosters,
    ...foundationPosters,
    ...expansionPosters,
    ...goldenAgePosters,
    ...digitalAgePosters,
    ...currentEraPosters
  ];
  
  // Utility functions for poster management
  export const getPostersByEra = (era: AnimePoster['era']): AnimePoster[] => {
    return allAnimePosters.filter(poster => poster.era === era);
  };
  
  export const getPostersBySignificance = (significance: AnimePoster['significance']): AnimePoster[] => {
    return allAnimePosters.filter(poster => poster.significance === significance);
  };
  
  export const getLegendaryPosters = (): AnimePoster[] => {
    return getPostersBySignificance('legendary');
  };
  
  export const getPosterById = (id: string): AnimePoster | undefined => {
    return allAnimePosters.find(poster => poster.id === id);
  };
  
  export const getRandomPostersByEra = (era: AnimePoster['era'], count: number = 3): AnimePoster[] => {
    const eraPosters = getPostersByEra(era);
    const shuffled = [...eraPosters].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };
  
  // Poster collections for special displays
  export const featuredPosters = {
    heroes: ['astro-boy-1963', 'akira', 'evangelion', 'attack-on-titan'],
    international: ['dragon-ball-z', 'pokemon', 'your-name', 'demon-slayer'],
    innovative: ['mobile-suit-gundam', 'cowboy-bebop', 'spirited-away', 'dandadan'],
    cultural: ['sailor-moon', 'one-piece', 'naruto', 'spy-x-family']
  };
  
  export default allAnimePosters;