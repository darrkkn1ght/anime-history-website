import { Anime } from '../../types/anime';

// Comprehensive anime database organized by era
export const ANIME_DATABASE: Anime[] = [
  // ORIGINS ERA (1900s-1930s)
  {
    id: 'imokawa-mukuzo',

    titles: {
      default: 'Imokawa Mukuzo Genkanban no Maki',
      english: 'The Story of the Concierge Mukuzo Imokawa'
    },
    synopsis: 'A short comedy about a concierge who uses chalk drawings on a blackboard.',
    type: 'Movie',
    source: 'Original',
    status: 'Finished Airing',
    era: 'origins',
    year: 1907,
    duration: 5,
    genres: ['Comedy', 'Historical'],
    rating: 'G',
    imageUrl: '/images/eras/origins/imokawa-mukuzo.jpg',
    studios: [{
      id: 'independent',
      name: 'Independent',
      type: 'independent',
      activeEras: ['origins']
    }],
    staff: [{
      id: 'oten-shimokawa',
      name: 'Ōten Shimokawa',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Birth of Japanese animation industry',
    technicalInnovations: ['Chalk and blackboard animation technique'],
    landmark: true,
    tags: ['first-anime', 'silent-era']
  },
  {
    id: 'namakura-gatana',

    titles: {
      default: 'Namakura Gatana',
      english: 'The Dull Sword'
    },
    synopsis: 'A samurai purchases a dull sword and faces comedic consequences.',
    type: 'Movie',
    source: 'Original',
    status: 'Finished Airing',
    era: 'origins',
    year: 1917,
    duration: 4,
    genres: ['Comedy', 'Action'],
    rating: 'G',
    imageUrl: '/images/eras/origins/namakura-gatana.jpg',
    studios: [{
      id: 'kobayashi-shokai',
      name: 'Kobayashi Shokai',
      type: 'independent',
      activeEras: ['origins']
    }],
    staff: [{
      id: 'junichi-kouchi',
      name: 'Jun\'ichi Kōuchi',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Established storytelling in anime',
    technicalInnovations: ['Cut-out paper animation'],
    landmark: true,
    tags: ['narrative', 'early-animation']
  },

  // FOUNDATION ERA (1950s-1960s)
  {
    id: 'hakujaden',

    titles: {
      default: 'Hakujaden',
      english: 'The Tale of the White Serpent'
    },
    synopsis: 'A love story between a young man and a snake spirit who becomes human.',
    type: 'Movie',
    source: 'Original',
    status: 'Finished Airing',
    era: 'foundation',
    year: 1958,
    duration: 78,
    genres: ['Fantasy', 'Romance', 'Adventure'],
    rating: 'G',
    imageUrl: '/images/eras/foundation/hakujaden.jpg',
    studios: [{
      id: 'toei-animation',
      name: 'Toei Animation',
      type: 'major',
      activeEras: ['foundation', 'expansion', 'golden-age', 'digital-age', 'current-era']
    }],
    staff: [{
      id: 'taiji-yabushita',
      name: 'Taiji Yabushita',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Established anime as cinematic art form',
    technicalInnovations: ['Hand-painted cel animation in full color'],
    landmark: true,
    tags: ['first-color', 'feature-film']
  },
  {
    id: 'astro-boy-1963',

    titles: {
      default: 'Tetsuwan Atom',
      english: 'Astro Boy'
    },
    synopsis: 'A robot boy with human emotions fights crime in the future.',
    type: 'TV',
    source: 'Manga',
    status: 'Finished Airing',
    era: 'foundation',
    year: 1963,
    episodes: 193,
    duration: 25,
    genres: ['Sci-Fi', 'Action', 'Kids'],
    rating: 'G',
    imageUrl: '/images/eras/foundation/astro-boy.jpg',
    studios: [{
      id: 'mushi-production',
      name: 'Mushi Production',
      type: 'major',
      activeEras: ['foundation']
    }],
    staff: [{
      id: 'osamu-tezuka',
      name: 'Osamu Tezuka',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Created the TV anime format',
    technicalInnovations: ['Limited animation techniques for TV'],
    landmark: true,
    tags: ['first-tv-series', 'tezuka']
  },
  {
    id: 'jungle-emperor',

    titles: {
      default: 'Jungle Taitei',
      english: 'Kimba the White Lion'
    },
    synopsis: 'A young white lion becomes king of the jungle and protects animals.',
    type: 'TV',
    source: 'Manga',
    status: 'Finished Airing',
    era: 'foundation',
    year: 1965,
    episodes: 52,
    duration: 25,
    genres: ['Adventure', 'Kids', 'Drama'],
    rating: 'G',
    imageUrl: '/images/eras/foundation/jungle-emperor.jpg',
    studios: [{
      id: 'mushi-production',
      name: 'Mushi Production',
      type: 'major',
      activeEras: ['foundation']
    }],
    staff: [{
      id: 'eiichi-yamamoto',
      name: 'Eiichi Yamamoto',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Advanced animation quality standards',
    technicalInnovations: ['Full color TV animation'],
    landmark: true,
    tags: ['first-color-tv', 'tezuka']
  },
  {
    id: 'speed-racer',

    titles: {
      default: 'Mach GoGoGo',
      english: 'Speed Racer'
    },
    synopsis: 'A young race car driver competes in dangerous races with his advanced car.',
    type: 'TV',
    source: 'Manga',
    status: 'Finished Airing',
    era: 'foundation',
    year: 1967,
    episodes: 52,
    duration: 25,
    genres: ['Action', 'Sports', 'Adventure'],
    rating: 'G',
    imageUrl: '/images/eras/foundation/speed-racer.jpg',
    studios: [{
      id: 'tatsunoko-production',
      name: 'Tatsunoko Production',
      type: 'major',
      activeEras: ['foundation', 'expansion', 'golden-age', 'digital-age', 'current-era']
    }],
    staff: [{
      id: 'hiroshi-sasagawa',
      name: 'Hiroshi Sasagawa',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'First major anime success in Western markets',
    technicalInnovations: ['Dynamic action sequences and car animation'],
    landmark: true,
    tags: ['international-success', 'action']
  },

  // EXPANSION ERA (1970s-1980s)
  {
    id: 'mazinger-z',

    titles: {
      default: 'Mazinger Z',
      english: 'Mazinger Z'
    },
    synopsis: 'A teenager pilots a giant robot to fight mechanical monsters.',
    type: 'TV',
    source: 'Manga',
    status: 'Finished Airing',
    era: 'expansion',
    year: 1972,
    episodes: 92,
    duration: 25,
    genres: ['Mecha', 'Action', 'Sci-Fi'],
    rating: 'PG',
    imageUrl: '/images/eras/expansion/mazinger-z.jpg',
    studios: [{
      id: 'toei-animation',
      name: 'Toei Animation',
      type: 'major',
      activeEras: ['foundation', 'expansion', 'golden-age', 'digital-age', 'current-era']
    }],
    staff: [{
      id: 'yugo-serikawa',
      name: 'Yugo Serikawa',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Created giant robot anime template',
    technicalInnovations: ['Detailed mechanical animation'],
    landmark: true,
    tags: ['mecha', 'super-robot']
  },
  {
    id: 'space-battleship-yamato',

    titles: {
      default: 'Uchuu Senkan Yamato',
      english: 'Space Battleship Yamato'
    },
    synopsis: 'Earth\'s last battleship travels to a distant planet to save humanity.',
    type: 'TV',
    source: 'Original',
    status: 'Finished Airing',
    era: 'expansion',
    year: 1974,
    episodes: 26,
    duration: 25,
    genres: ['Sci-Fi', 'Drama', 'Military'],
    rating: 'PG-13',
    imageUrl: '/images/eras/expansion/yamato.jpg',
    studios: [{
      id: 'office-academy',
      name: 'Office Academy',
      type: 'independent',
      activeEras: ['expansion']
    }],
    staff: [{
      id: 'noboru-ishiguro',
      name: 'Noboru Ishiguro',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Proved anime could target mature viewers',
    technicalInnovations: ['Cinematic space battle sequences'],
    landmark: true,
    tags: ['mature-audience', 'space-opera']
  },
  {
    id: 'mobile-suit-gundam',

    titles: {
      default: 'Kidou Senshi Gundam',
      english: 'Mobile Suit Gundam'
    },
    synopsis: 'A space war depicted through realistic military and political drama.',
    type: 'TV',
    source: 'Original',
    status: 'Finished Airing',
    era: 'expansion',
    year: 1979,
    episodes: 43,
    duration: 25,
    genres: ['Mecha', 'Military', 'Drama'],
    rating: 'PG-13',
    imageUrl: '/images/eras/expansion/gundam.jpg',
    studios: [{
      id: 'sunrise',
      name: 'Sunrise',
      type: 'major',
      activeEras: ['expansion', 'golden-age', 'digital-age', 'current-era']
    }],
    staff: [{
      id: 'yoshiyuki-tomino',
      name: 'Yoshiyuki Tomino',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Created the real robot genre',
    technicalInnovations: ['Realistic mechanical design and physics'],
    landmark: true,
    tags: ['real-robot', 'military-drama']
  },
  {
    id: 'nausicaa',

    titles: {
      default: 'Kaze no Tani no Nausicaä',
      english: 'Nausicaä of the Valley of the Wind'
    },
    synopsis: 'A princess tries to prevent a war in a post-apocalyptic world.',
    type: 'Movie',
    source: 'Manga',
    status: 'Finished Airing',
    era: 'expansion',
    year: 1984,
    duration: 117,
    genres: ['Adventure', 'Sci-Fi', 'Fantasy'],
    rating: 'PG',
    imageUrl: '/images/eras/expansion/nausicaa.jpg',
    studios: [{
      id: 'topcraft',
      name: 'Topcraft',
      type: 'independent',
      activeEras: ['expansion']
    }],
    staff: [{
      id: 'hayao-miyazaki',
      name: 'Hayao Miyazaki',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Launched Studio Ghibli legacy',
    technicalInnovations: ['Detailed hand-drawn animation and world-building'],
    landmark: true,
    tags: ['miyazaki', 'environmental', 'ghibli']
  },
  {
    id: 'akira',

    titles: {
      default: 'Akira',
      english: 'Akira'
    },
    synopsis: 'Psychic powers unleash destruction in cyberpunk Neo-Tokyo.',
    type: 'Movie',
    source: 'Manga',
    status: 'Finished Airing',
    era: 'expansion',
    year: 1988,
    duration: 124,
    genres: ['Sci-Fi', 'Action', 'Thriller'],
    rating: 'R',
    imageUrl: '/images/eras/expansion/akira.jpg',
    studios: [{
      id: 'akira-committee',
      name: 'Akira Committee',
      type: 'independent',
      activeEras: ['expansion']
    }],
    staff: [{
      id: 'katsuhiro-otomo',
      name: 'Katsuhiro Otomo',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Global anime breakthrough film',
    technicalInnovations: ['Revolutionary animation techniques and detail'],
    landmark: true,
    tags: ['cyberpunk', 'international-breakthrough']
  },

  // GOLDEN AGE ERA (1990s-2000s)
  {
    id: 'sailor-moon',

    titles: {
      default: 'Bishoujo Senshi Sailor Moon',
      english: 'Sailor Moon'
    },
    synopsis: 'Teenage girls transform into magical warriors to fight evil.',
    type: 'TV',
    source: 'Manga',
    status: 'Finished Airing',
    era: 'golden-age',
    year: 1992,
    episodes: 200,
    duration: 25,
    genres: ['Magical Girl', 'Romance', 'Action'],
    rating: 'PG',
    imageUrl: '/images/eras/golden-age/sailor-moon.jpg',
    studios: [{
      id: 'toei-animation',
      name: 'Toei Animation',
      type: 'major',
      activeEras: ['foundation', 'expansion', 'golden-age', 'digital-age', 'current-era']
    }],
    staff: [{
      id: 'junichi-sato',
      name: 'Junichi Sato',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Global female empowerment icon',
    technicalInnovations: ['Transformation sequences and magical effects'],
    landmark: true,
    tags: ['magical-girl', 'female-empowerment']
  },
  {
    id: 'neon-genesis-evangelion',

    titles: {
      default: 'Shin Seiki Evangelion',
      english: 'Neon Genesis Evangelion'
    },
    synopsis: 'Teenagers pilot giant robots while dealing with psychological trauma.',
    type: 'TV',
    source: 'Original',
    status: 'Finished Airing',
    era: 'golden-age',
    year: 1995,
    episodes: 26,
    duration: 25,
    genres: ['Mecha', 'Psychological', 'Drama'],
    rating: 'PG-13',
    imageUrl: '/images/eras/golden-age/evangelion.jpg',
    studios: [{
      id: 'gainax',
      name: 'Gainax',
      type: 'major',
      activeEras: ['golden-age', 'digital-age']
    }],
    staff: [{
      id: 'hideaki-anno',
      name: 'Hideaki Anno',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Redefined anime as serious art form',
    technicalInnovations: ['Innovative visual symbolism and psychological storytelling'],
    landmark: true,
    tags: ['psychological', 'art-house', 'mecha']
  },
  {
    id: 'princess-mononoke',

    titles: {
      default: 'Mononoke-hime',
      english: 'Princess Mononoke'
    },
    synopsis: 'A young man becomes involved in a struggle between forest spirits and humans.',
    type: 'Movie',
    source: 'Original',
    status: 'Finished Airing',
    era: 'golden-age',
    year: 1997,
    duration: 134,
    genres: ['Adventure', 'Drama', 'Fantasy'],
    rating: 'PG-13',
    imageUrl: '/images/eras/golden-age/mononoke.jpg',
    studios: [{
      id: 'studio-ghibli',
      name: 'Studio Ghibli',
      type: 'major',
      activeEras: ['expansion', 'golden-age', 'digital-age', 'current-era']
    }],
    staff: [{
      id: 'hayao-miyazaki',
      name: 'Hayao Miyazaki',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Environmental awareness in mainstream entertainment',
    technicalInnovations: ['Blend of traditional and computer animation'],
    landmark: true,
    tags: ['miyazaki', 'environmental', 'ghibli']
  },
  {
    id: 'cowboy-bebop',

    titles: {
      default: 'Cowboy Bebop',
      english: 'Cowboy Bebop'
    },
    synopsis: 'Bounty hunters travel through space in episodic adventures.',
    type: 'TV',
    source: 'Original',
    status: 'Finished Airing',
    era: 'golden-age',
    year: 1998,
    episodes: 26,
    duration: 25,
    genres: ['Sci-Fi', 'Drama', 'Action'],
    rating: 'PG-13',
    imageUrl: '/images/eras/golden-age/cowboy-bebop.jpg',
    studios: [{
      id: 'sunrise',
      name: 'Sunrise',
      type: 'major',
      activeEras: ['expansion', 'golden-age', 'digital-age', 'current-era']
    }],
    staff: [{
      id: 'shinichiro-watanabe',
      name: 'Shinichiro Watanabe',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Critical acclaim and cultural sophistication',
    technicalInnovations: ['Cinematic direction and jazz soundtrack'],
    landmark: true,
    tags: ['space-western', 'jazz', 'cinematic']
  },
  {
    id: 'spirited-away',

    titles: {
      default: 'Sen to Chihiro no Kamikakushi',
      english: 'Spirited Away'
    },
    synopsis: 'A girl must work in a spirit world to save her parents.',
    type: 'Movie',
    source: 'Original',
    status: 'Finished Airing',
    era: 'golden-age',
    year: 2001,
    duration: 125,
    genres: ['Adventure', 'Fantasy', 'Drama'],
    rating: 'PG',
    imageUrl: '/images/eras/golden-age/spirited-away.jpg',
    studios: [{
      id: 'studio-ghibli',
      name: 'Studio Ghibli',
      type: 'major',
      activeEras: ['expansion', 'golden-age', 'digital-age', 'current-era']
    }],
    staff: [{
      id: 'hayao-miyazaki',
      name: 'Hayao Miyazaki',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Academy Award winner, global cultural phenomenon',
    technicalInnovations: ['Masterful hand-drawn animation and imaginative design'],
    landmark: true,
    tags: ['academy-award', 'miyazaki', 'ghibli']
  },
  {
    id: 'naruto',

    titles: {
      default: 'Naruto',
      english: 'Naruto'
    },
    synopsis: 'A young ninja pursues his dream to become village leader.',
    type: 'TV',
    source: 'Manga',
    status: 'Finished Airing',
    era: 'golden-age',
    year: 2002,
    episodes: 720,
    duration: 25,
    genres: ['Shounen', 'Action', 'Adventure'],
    rating: 'PG-13',
    imageUrl: '/images/eras/golden-age/naruto.jpg',
    studios: [{
      id: 'pierrot',
      name: 'Studio Pierrot',
      type: 'major',
      activeEras: ['golden-age', 'digital-age', 'current-era']
    }],
    staff: [{
      id: 'hayato-date',
      name: 'Hayato Date',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Global youth cultural phenomenon',
    technicalInnovations: ['Long-form storytelling and character development'],
    landmark: true,
    tags: ['shounen', 'ninja', 'long-running']
  },

  // DIGITAL AGE ERA (2010s)
  {
    id: 'madoka-magica',

    titles: {
      default: 'Mahou Shoujo Madoka★Magica',
      english: 'Puella Magi Madoka Magica'
    },
    synopsis: 'Dark subversion of magical girl tropes with psychological horror.',
    type: 'TV',
    source: 'Original',
    status: 'Finished Airing',
    era: 'digital-age',
    year: 2011,
    episodes: 12,
    duration: 25,
    genres: ['Magical Girl', 'Psychological', 'Drama'],
    rating: 'PG-13',
    imageUrl: '/images/eras/digital-age/madoka.jpg',
    studios: [{
      id: 'shaft',
      name: 'Shaft',
      type: 'major',
      activeEras: ['digital-age', 'current-era']
    }],
    staff: [{
      id: 'akiyuki-shinbo',
      name: 'Akiyuki Shinbo',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Showed mature themes in cute aesthetics',
    technicalInnovations: ['Surreal visual design and animation techniques'],
    landmark: true,
    tags: ['deconstruction', 'psychological', 'magical-girl']
  },
  {
    id: 'attack-on-titan',

    titles: {
      default: 'Shingeki no Kyojin',
      english: 'Attack on Titan'
    },
    synopsis: 'Humanity fights for survival against giant humanoid creatures.',
    type: 'TV',
    source: 'Manga',
    status: 'Finished Airing',
    era: 'digital-age',
    year: 2013,
    episodes: 87,
    duration: 25,
    genres: ['Action', 'Drama', 'Horror'],
    rating: 'R',
    imageUrl: '/images/eras/digital-age/attack-on-titan.jpg',
    studios: [{
      id: 'wit-studio',
      name: 'Wit Studio',
      type: 'major',
      activeEras: ['digital-age', 'current-era']
    }, {
      id: 'mappa',
      name: 'MAPPA',
      type: 'major',
      activeEras: ['digital-age', 'current-era']
    }],
    staff: [{
      id: 'tetsuro-araki',
      name: 'Tetsuro Araki',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Global mainstream phenomenon',
    technicalInnovations: ['High-intensity action and 3D maneuver gear animation'],
    landmark: true,
    tags: ['post-apocalyptic', 'action', 'horror']
  },
  {
    id: 'your-name',

    titles: {
      default: 'Kimi no Na wa',
      english: 'Your Name'
    },
    synopsis: 'Two teenagers mysteriously swap bodies across time and space.',
    type: 'Movie',
    source: 'Original',
    status: 'Finished Airing',
    era: 'digital-age',
    year: 2016,
    duration: 106,
    genres: ['Romance', 'Drama', 'Supernatural'],
    rating: 'PG',
    imageUrl: '/images/eras/digital-age/your-name.jpg',
    studios: [{
      id: 'comix-wave-films',
      name: 'CoMix Wave Films',
      type: 'major',
      activeEras: ['digital-age', 'current-era']
    }],
    staff: [{
      id: 'makoto-shinkai',
      name: 'Makoto Shinkai',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Global box office success and cultural impact',
    technicalInnovations: ['Photorealistic backgrounds and digital effects'],
    landmark: true,
    tags: ['romance', 'body-swap', 'shinkai']
  },
  {
    id: 'demon-slayer',

    titles: {
      default: 'Kimetsu no Yaiba',
      english: 'Demon Slayer'
    },
    synopsis: 'A boy becomes a demon slayer to save his sister and avenge his family.',
    type: 'TV',
    source: 'Manga',
    status: 'Finished Airing',
    era: 'digital-age',
    year: 2019,
    episodes: 44,
    duration: 25,
    genres: ['Shounen', 'Action', 'Historical'],
    rating: 'R',
    imageUrl: '/images/eras/digital-age/demon-slayer.jpg',
    studios: [{
      id: 'ufotable',
      name: 'Ufotable',
      type: 'major',
      activeEras: ['digital-age', 'current-era']
    }],
    staff: [{
      id: 'haruo-sotozaki',
      name: 'Haruo Sotozaki',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Record-breaking popularity and merchandise sales',
    technicalInnovations: ['Blend of 2D and 3D animation techniques'],
    landmark: true,
    tags: ['demon-hunting', 'historical', 'action']
  },

  // CURRENT ERA (2020s-2025)
  {
    id: 'jujutsu-kaisen',

    titles: {
      default: 'Jujutsu Kaisen',
      english: 'Jujutsu Kaisen'
    },
    synopsis: 'Students fight cursed spirits in modern-day Japan.',
    type: 'TV',
    source: 'Manga',
    status: 'Currently Airing',
    era: 'current-era',
    year: 2020,
    episodes: 48,
    duration: 25,
    genres: ['Shounen', 'Action', 'Supernatural'],
    rating: 'R',
    imageUrl: '/images/eras/current-era/jujutsu-kaisen.jpg',
    studios: [{
      id: 'mappa',
      name: 'MAPPA',
      type: 'major',
      activeEras: ['digital-age', 'current-era']
    }],
    staff: [{
      id: 'sunghoo-park',
      name: 'Sunghoo Park',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Global streaming phenomenon',
    technicalInnovations: ['High-quality animation and fight choreography'],
    landmark: true,
    tags: ['cursed-spirits', 'modern-supernatural', 'action']
  },
  {
    id: 'chainsaw-man',

    titles: {
      default: 'Chainsaw Man',
      english: 'Chainsaw Man'
    },
    synopsis: 'A young man with chainsaw powers fights devils for money.',
    type: 'TV',
    source: 'Manga',
    status: 'Currently Airing',
    era: 'current-era',
    year: 2022,
    episodes: 12,
    duration: 25,
    genres: ['Action', 'Horror', 'Supernatural'],
    rating: 'R',
    imageUrl: '/images/eras/current-era/chainsaw-man.jpg',
    studios: [{
      id: 'mappa',
      name: 'MAPPA',
      type: 'major',
      activeEras: ['digital-age', 'current-era']
    }],
    staff: [{
      id: 'ryu-nakayama',
      name: 'Ryu Nakayama',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Viral social media phenomenon',
    technicalInnovations: ['Cinematic direction and realistic character animation'],
    landmark: true,
    tags: ['devils', 'chainsaw', 'horror-action']
  },
  {
    id: 'frieren',

    titles: {
      default: 'Sousou no Frieren',
      english: 'Frieren: Beyond Journey\'s End'
    },
    synopsis: 'An immortal elf reflects on mortality and friendship after her hero companions age.',
    type: 'TV',
    source: 'Manga',
    status: 'Currently Airing',
    era: 'current-era',
    year: 2023,
    episodes: 28,
    duration: 25,
    genres: ['Fantasy', 'Drama', 'Adventure'],
    rating: 'PG-13',
    imageUrl: '/images/eras/current-era/frieren.jpg',
    studios: [{
      id: 'madhouse',
      name: 'Madhouse',
      type: 'major',
      activeEras: ['golden-age', 'digital-age', 'current-era']
    }],
    staff: [{
      id: 'keiichiro-saito',
      name: 'Keiichiro Saito',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Critical acclaim for mature storytelling',
    technicalInnovations: ['Subtle character animation and atmospheric storytelling'],
    landmark: true,
    tags: ['fantasy', 'mortality', 'post-adventure']
  },
  {
    id: 'dandadan',

    titles: {
      default: 'Dandadan',
      english: 'DandaDan'
    },
    synopsis: 'Teenagers encounter aliens and ghosts in bizarre adventures.',
    type: 'TV',
    source: 'Manga',
    status: 'Currently Airing',
    era: 'current-era',
    year: 2024,
    episodes: 12,
    duration: 25,
    genres: ['Comedy', 'Supernatural', 'Action'],
    rating: 'PG-13',
    imageUrl: '/images/eras/current-era/dandadan.jpg',
    studios: [{
      id: 'science-saru',
      name: 'Science SARU',
      type: 'major',
      activeEras: ['digital-age', 'current-era']
    }],
    staff: [{
      id: 'fuga-yamashiro',
      name: 'Fuga Yamashiro',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Social media viral phenomenon',
    technicalInnovations: ['Dynamic animation and unique visual style'],
    landmark: true,
    tags: ['aliens', 'ghosts', 'comedy-action']
  },
  {
    id: 'solo-leveling',

    titles: {
      default: 'Ore dake Level Up na Ken',
      english: 'Solo Leveling'
    },
    synopsis: 'A weak hunter becomes the strongest through a mysterious leveling system.',
    type: 'TV',
    source: 'Web Manga',
    status: 'Currently Airing',
    era: 'current-era',
    year: 2024,
    episodes: 12,
    duration: 25,
    genres: ['Action', 'Fantasy', 'Adventure'],
    rating: 'PG-13',
    imageUrl: '/images/eras/current-era/solo-leveling.jpg',
    studios: [{
      id: 'a1-pictures',
      name: 'A-1 Pictures',
      type: 'major',
      activeEras: ['digital-age', 'current-era']
    }],
    staff: [{
      id: 'shunsuke-nakashige',
      name: 'Shunsuke Nakashige',
      role: 'Director',
      department: 'director'
    }],
    culturalImpact: 'Global webtoon culture crossover',
    technicalInnovations: ['High-quality action animation and effects'],
    landmark: true,
    tags: ['leveling', 'hunter', 'webtoon-adaptation']
  }
];

// Category definitions for filtering and organization
export interface AnimeCategory {
  id: string;
  name: string;
  description: string;
  characteristics: string[];
}

export const ANIME_CATEGORIES: AnimeCategory[] = [
  {
    id: 'shounen',
    name: 'Shounen',
    description: 'Action-packed series targeting young male audiences',
    characteristics: ['High-energy action', 'Male protagonists', 'Power progression', 'Friendship themes']
  },
  {
    id: 'shoujo',
    name: 'Shoujo',
    description: 'Romance and relationship-focused series for young female audiences',
    characteristics: ['Romance plots', 'Emotional depth', 'Female protagonists', 'Character relationships']
  },
  {
    id: 'seinen',
    name: 'Seinen',
    description: 'Mature content targeting adult male audiences',
    characteristics: ['Complex themes', 'Realistic violence', 'Psychological depth', 'Adult protagonists']
  },
  {
    id: 'josei',
    name: 'Josei',
    description: 'Realistic romance and drama for adult female audiences',
    characteristics: ['Mature relationships', 'Workplace settings', 'Realistic scenarios', 'Adult female protagonists']
  },
  {
    id: 'mecha',
    name: 'Mecha',
    description: 'Giant robots and mechanical warfare',
    characteristics: ['Giant robots', 'Military themes', 'Technical complexity', 'Pilot-machine relationships']
  },
  {
    id: 'magical-girl',
    name: 'Magical Girl',
    description: 'Girls with magical powers fighting evil',
    characteristics: ['Transformation sequences', 'Team dynamics', 'Good vs evil', 'Empowerment themes']
  },
  {
    id: 'isekai',
    name: 'Isekai',
    description: 'Characters transported to other worlds',
    characteristics: ['World transportation', 'Fantasy settings', 'Power progression', 'Adventure themes']
  }
];

// Studio and Creator databases removed - use separate files for these complex types

// Utility functions for data access
export const getAnimeByEra = (era: string): Anime[] => {
  return ANIME_DATABASE.filter(anime => anime.era === era);
};

export const getAnimeByGenre = (genre: string): Anime[] => {
  return ANIME_DATABASE.filter(anime => anime.genres.includes(genre as any));
};

export const getAnimeByStudio = (studioId: string): Anime[] => {
  return ANIME_DATABASE.filter(anime => 
    anime.studios.some(studio => studio.id === studioId)
  );
};

export const getAnimeByYear = (year: number): Anime[] => {
  return ANIME_DATABASE.filter(anime => anime.year === year);
};

export const getAnimeByDecade = (decade: number): Anime[] => {
  const startYear = decade;
  const endYear = decade + 9;
  return ANIME_DATABASE.filter(anime => 
    anime.year >= startYear && anime.year <= endYear
  );
};

export const getTopRatedAnime = (limit: number = 10): Anime[] => {
  return ANIME_DATABASE
    .filter(anime => anime.statistics?.score)
    .sort((a, b) => (b.statistics?.score || 0) - (a.statistics?.score || 0))
    .slice(0, limit);
};

export const searchAnime = (query: string): Anime[] => {
  const lowercaseQuery = query.toLowerCase();
  return ANIME_DATABASE.filter(anime => 
    anime.titles.default.toLowerCase().includes(lowercaseQuery) ||
    anime.titles.english?.toLowerCase().includes(lowercaseQuery) ||
    anime.synopsis?.toLowerCase().includes(lowercaseQuery) ||
    anime.genres.some(g => g.toLowerCase().includes(lowercaseQuery))
  );
};
                
// Statistics and metadata
export const ANIME_STATISTICS = {
  totalAnime: ANIME_DATABASE.length,
  totalStudios: 0, // Removed STUDIO_DATABASE
  totalCreators: 0, // Removed CREATOR_DATABASE
  eraCounts: {
    origins: getAnimeByEra('origins').length,
    foundation: getAnimeByEra('foundation').length,
    expansion: getAnimeByEra('expansion').length,
    'golden-age': getAnimeByEra('golden-age').length,
    'digital-age': getAnimeByEra('digital-age').length,
    'current-era': getAnimeByEra('current-era').length
  },
  averageRating: ANIME_DATABASE
    .filter(anime => anime.statistics?.score)
    .reduce((sum, anime) => sum + (anime.statistics?.score || 0), 0) / 
    ANIME_DATABASE.filter(anime => anime.statistics?.score).length,
  genreDistribution: ANIME_DATABASE.reduce((acc, anime) => {
    anime.genres.forEach(genre => {
      acc[genre] = (acc[genre] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>)
};

export default ANIME_DATABASE;
