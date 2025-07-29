import { Era, EraTimeline } from '../../types/era';

// Color themes for each era
export const ERA_THEMES = {
  origins: {
    primary: '#8B4513',
    secondary: '#F4E4BC',
    accent: '#D2691E',
    background: 'linear-gradient(135deg, #2C1810 0%, #4A2C1A 100%)'
  },
  foundation: {
    primary: '#4169E1',
    secondary: '#E6E6FA',
    accent: '#6495ED',
    background: 'linear-gradient(135deg, #1E1E3F 0%, #2A2A5A 100%)'
  },
  expansion: {
    primary: '#FF6347',
    secondary: '#FFE4E1',
    accent: '#FF4500',
    background: 'linear-gradient(135deg, #2D1B1B 0%, #4A2828 100%)'
  },
  goldenAge: {
    primary: '#FFD700',
    secondary: '#FFFACD',
    accent: '#FFA500',
    background: 'linear-gradient(135deg, #3D3520 0%, #5A4F2A 100%)'
  },
  digitalAge: {
    primary: '#00D4FF',
    secondary: '#E0F7FF',
    accent: '#0080FF',
    background: 'linear-gradient(135deg, #0A1A2A 0%, #1A2A3A 100%)'
  },
  currentEra: {
    primary: '#FF6B6B',
    secondary: '#FFE8E8',
    accent: '#4ECDC4',
    background: 'linear-gradient(135deg, #2A1A2A 0%, #3A2A3A 100%)'
  }
};

// Main timeline data structure
export const ANIME_TIMELINE: EraTimeline = {
  totalYears: 125,
  startYear: 1900,
  endYear: 2025,
  eras: [
    {
      id: 'origins',
      name: 'Origins Era',
      subtitle: 'The Birth of Japanese Animation',
      period: '1900s - 1930s',
      startYear: 1900,
      endYear: 1939,
      duration: 39,
      theme: ERA_THEMES.origins,
      description: 'The pioneering days of Japanese animation, from magic lantern shows to the first animated films.',
      keyCharacteristics: [
        'Experimental techniques and early animation methods',
        'Influence from Western animation pioneers',
        'Silent films with live musical accompaniment',
        'Hand-drawn cel animation development',
        'Limited commercial distribution'
      ],
      culturalContext: {
        historicalEvents: [
          'Meiji Restoration aftermath',
          'Industrial modernization of Japan',
          'Western cultural influence',
          'Rise of cinema as entertainment'
        ],
        socialFactors: [
          'Urban population growth',
          'Emergence of middle class',
          'Educational reform movements',
          'Traditional art meeting modern technology'
        ]
      },
      keyMilestones: [
        {
          year: 1907,
          title: 'First Japanese Animated Film',
          description: 'Ōten Shimokawa creates "Imokawa Mukuzo Genkanban no Maki"',
          significance: 'Marks the birth of anime as a medium',
          type: 'creation'
        },
        {
          year: 1917,
          title: 'The Dull Sword (Namakura Gatana)',
          description: 'Jun\'ichi Kōuchi\'s 4-minute short film',
          significance: 'First anime with a narrative structure',
          type: 'milestone'
        },
        {
          year: 1923,
          title: 'Great Kantō Earthquake Impact',
          description: 'Destroyed many early animation works and studios',
          significance: 'Led to loss of early anime history',
          type: 'setback'
        },
        {
          year: 1932,
          title: 'First Anime with Sound',
          description: 'Introduction of synchronized sound in Japanese animation',
          significance: 'Technical breakthrough enabling new storytelling',
          type: 'innovation'
        }
      ],
      notableWorks: [
        'Imokawa Mukuzo Genkanban no Maki (1907)',
        'The Dull Sword (1917)',
        'Urashima Tarō (1918)',
        'The Monkey and the Crab (1927)',
        'Kobutori (1929)'
      ],
      pioneers: [
        {
          name: 'Ōten Shimokawa',
          role: 'Animation Pioneer',
          contribution: 'Created first Japanese animated film',
          years: '1892-1973'
        },
        {
          name: 'Jun\'ichi Kōuchi',
          role: 'Animation Director',
          contribution: 'Developed narrative animation techniques',
          years: '1886-1970'
        },
        {
          name: 'Seitaro Kitayama',
          role: 'Studio Founder',
          contribution: 'Established first animation studio',
          years: '1888-1945'
        }
      ],
      technicalInnovations: [
        'Cut-out animation techniques',
        'Chalk and blackboard animation',
        'Early cel animation experiments',
        'Camera multiplane techniques',
        'Sound synchronization methods'
      ],
      marketData: {
        estimatedProductions: 50,
        averageBudget: 'Unknown',
        distributionReach: 'Limited to major cities',
        audienceSize: 'Thousands'
      }
    },
    {
      id: 'foundation',
      name: 'Foundation Era',
      subtitle: 'The Television Revolution',
      period: '1950s - 1960s',
      startYear: 1950,
      endYear: 1969,
      duration: 19,
      theme: ERA_THEMES.foundation,
      description: 'Post-war reconstruction brings television and the birth of modern anime industry.',
      keyCharacteristics: [
        'Television as primary medium',
        'Series format development',
        'Character merchandising begins',
        'Studio system establishment',
        'International co-productions'
      ],
      culturalContext: {
        historicalEvents: [
          'Post-WWII reconstruction',
          'Economic miracle period',
          'Tokyo Olympics 1964',
          'Television broadcasting expansion'
        ],
        socialFactors: [
          'Nuclear family household growth',
          'Consumer culture emergence',
          'Children as distinct market',
          'Technology optimism'
        ]
      },
      keyMilestones: [
        {
          year: 1952,
          title: 'Toei Animation Founded',
          description: 'Establishment of major animation studio',
          significance: 'Created industrial animation production',
          type: 'foundation'
        },
        {
          year: 1958,
          title: 'Hakujaden (White Snake)',
          description: 'First color anime feature film',
          significance: 'Established anime as cinematic art form',
          type: 'milestone'
        },
        {
          year: 1961,
          title: 'Mushi Production Founded',
          description: 'Osamu Tezuka establishes studio',
          significance: 'Revolutionized TV animation production',
          type: 'foundation'
        },
        {
          year: 1963,
          title: 'Astro Boy TV Series',
          description: 'First weekly TV anime series',
          significance: 'Created the TV anime format',
          type: 'breakthrough'
        },
        {
          year: 1965,
          title: 'Jungle Emperor Leo',
          description: 'First color TV anime series',
          significance: 'Advanced animation quality standards',
          type: 'innovation'
        }
      ],
      notableWorks: [
        'Hakujaden (1958)',
        'Astro Boy (1963-1966)',
        'Jungle Emperor Leo (1965-1967)',
        'Sally the Witch (1966-1968)',
        'Speed Racer (1967-1968)'
      ],
      pioneers: [
        {
          name: 'Osamu Tezuka',
          role: 'God of Manga/Anime',
          contribution: 'Created TV anime format and industry standards',
          years: '1928-1989'
        },
        {
          name: 'Taiji Yabushita',
          role: 'Film Director',
          contribution: 'Directed first color anime feature',
          years: '1903-1992'
        },
        {
          name: 'Hiroshi Sasagawa',
          role: 'Director/Producer',
          contribution: 'Developed action anime series format',
          years: '1936-2018'
        }
      ],
      technicalInnovations: [
        'Limited animation techniques',
        'Television broadcast standards',
        'Color animation processes',
        'Series production pipelines',
        'Character design systematization'
      ],
      marketData: {
        estimatedProductions: 200,
        averageBudget: '$50,000 per episode',
        distributionReach: 'National television',
        audienceSize: 'Millions'
      }
    },
    {
      id: 'expansion',
      name: 'Expansion Era',
      subtitle: 'Genres Diversify and Global Reach',
      period: '1970s - 1980s',
      startYear: 1970,
      endYear: 1989,
      duration: 19,
      theme: ERA_THEMES.expansion,
      description: 'Anime expands into multiple genres and begins international distribution.',
      keyCharacteristics: [
        'Genre diversification (mecha, shoujo, seinen)',
        'International co-productions',
        'Home video market emergence',
        'Adult-oriented content',
        'Theatrical releases increase'
      ],
      culturalContext: {
        historicalEvents: [
          'Economic bubble formation',
          'Technology boom',
          'International trade expansion',
          'Pop culture globalization'
        ],
        socialFactors: [
          'Youth counterculture',
          'Women\'s liberation movement',
          'Consumer electronics adoption',
          'Otaku culture emergence'
        ]
      },
      keyMilestones: [
        {
          year: 1972,
          title: 'Mazinger Z Debuts',
          description: 'Establishes mecha anime genre',
          significance: 'Created giant robot anime template',
          type: 'breakthrough'
        },
        {
          year: 1974,
          title: 'Space Battleship Yamato',
          description: 'First anime for adult audiences',
          significance: 'Proved anime could target mature viewers',
          type: 'milestone'
        },
        {
          year: 1979,
          title: 'Mobile Suit Gundam',
          description: 'Realistic mecha series debuts',
          significance: 'Revolutionized mecha storytelling',
          type: 'innovation'
        },
        {
          year: 1984,
          title: 'Nausicaä of the Valley of the Wind',
          description: 'Hayao Miyazaki\'s breakout film',
          significance: 'Established environmental themes in anime',
          type: 'milestone'
        },
        {
          year: 1988,
          title: 'Akira International Release',
          description: 'Landmark anime film goes global',
          significance: 'Introduced Western audiences to anime',
          type: 'breakthrough'
        }
      ],
      notableWorks: [
        'Mazinger Z (1972-1974)',
        'Space Battleship Yamato (1974-1975)',
        'Galaxy Express 999 (1978-1981)',
        'Mobile Suit Gundam (1979-1980)',
        'Nausicaä of the Valley of the Wind (1984)',
        'Dragon Ball (1986-1989)',
        'Akira (1988)'
      ],
      pioneers: [
        {
          name: 'Go Nagai',
          role: 'Manga Creator',
          contribution: 'Created mecha and ecchi genres',
          years: '1945-present'
        },
        {
          name: 'Leiji Matsumoto',
          role: 'Creator/Director',
          contribution: 'Space opera anime pioneer',
          years: '1938-2023'
        },
        {
          name: 'Hayao Miyazaki',
          role: 'Director/Animator',
          contribution: 'Environmental and humanistic storytelling',
          years: '1941-present'
        },
        {
          name: 'Katsuhiro Otomo',
          role: 'Director/Manga Artist',
          contribution: 'Cyberpunk anime pioneer',
          years: '1954-present'
        }
      ],
      technicalInnovations: [
        'Detailed mechanical animation',
        'Cinematic camera movements',
        'Complex lighting effects',
        'Video distribution formats',
        'International dubbing standards'
      ],
      marketData: {
        estimatedProductions: 800,
        averageBudget: '$200,000 per episode',
        distributionReach: 'International markets',
        audienceSize: 'Tens of millions'
      }
    },
    {
      id: 'goldenAge',
      name: 'Golden Age',
      subtitle: 'Mainstream Success and Cultural Impact',
      period: '1990s - 2000s',
      startYear: 1990,
      endYear: 2009,
      duration: 19,
      theme: ERA_THEMES.goldenAge,
      description: 'Anime achieves mainstream success and becomes a global cultural phenomenon.',
      keyCharacteristics: [
        'Mainstream television success',
        'Global merchandising boom',
        'DVD market explosion',
        'Internet fansubbing communities',
        'Anime conventions worldwide'
      ],
      culturalContext: {
        historicalEvents: [
          'Internet widespread adoption',
          'Globalization acceleration',
          'Asian economic crisis',
          'Digital technology revolution'
        ],
        socialFactors: [
          'Otaku culture mainstreaming',
          'International pop culture exchange',
          'Youth demographic targeting',
          'Female viewership growth'
        ]
      },
      keyMilestones: [
        {
          year: 1992,
          title: 'Sailor Moon Debut',
          description: 'Magical girl series becomes global phenomenon',
          significance: 'Expanded female anime audience worldwide',
          type: 'breakthrough'
        },
        {
          year: 1995,
          title: 'Neon Genesis Evangelion',
          description: 'Psychological mecha series redefines anime',
          significance: 'Brought artistic credibility to anime',
          type: 'milestone'
        },
        {
          year: 1997,
          title: 'Princess Mononoke',
          description: 'Miyazaki film breaks box office records',
          significance: 'Proved anime\'s commercial viability',
          type: 'achievement'
        },
        {
          year: 1998,
          title: 'Cowboy Bebop Premieres',
          description: 'Space western series gains critical acclaim',
          significance: 'Elevated anime to art form status',
          type: 'milestone'
        },
        {
          year: 2001,
          title: 'Spirited Away Success',
          description: 'Wins Academy Award for Best Animated Feature',
          significance: 'International recognition of anime quality',
          type: 'achievement'
        },
        {
          year: 2002,
          title: 'Naruto Begins',
          description: 'Long-running shonen series starts',
          significance: 'Defined new generation of anime fans',
          type: 'breakthrough'
        }
      ],
      notableWorks: [
        'Dragon Ball Z (1989-1996)',
        'Sailor Moon (1992-1997)',
        'Neon Genesis Evangelion (1995-1996)',
        'Princess Mononoke (1997)',
        'Cowboy Bebop (1998)',
        'One Piece (1999-present)',
        'Spirited Away (2001)',
        'Naruto (2002-2017)',
        'Fullmetal Alchemist (2003-2004)',
        'Death Note (2006-2007)'
      ],
      pioneers: [
        {
          name: 'Naoko Takeuchi',
          role: 'Manga Creator',
          contribution: 'Revolutionized magical girl genre',
          years: '1967-present'
        },
        {
          name: 'Hideaki Anno',
          role: 'Director',
          contribution: 'Psychological depth in mecha anime',
          years: '1960-present'
        },
        {
          name: 'Shinichiro Watanabe',
          role: 'Director',
          contribution: 'Cinematic storytelling in anime',
          years: '1965-present'
        },
        {
          name: 'Eiichiro Oda',
          role: 'Manga Creator',
          contribution: 'Long-form adventure storytelling',
          years: '1975-present'
        }
      ],
      technicalInnovations: [
        'Digital ink and paint',
        'CGI integration',
        'Surround sound mixing',
        'HD video production',
        'Online distribution experiments'
      ],
      marketData: {
        estimatedProductions: 2500,
        averageBudget: '$500,000 per episode',
        distributionReach: 'Global mainstream',
        audienceSize: 'Hundreds of millions'
      }
    },
    {
      id: 'digitalAge',
      name: 'Digital Age',
      subtitle: 'Streaming Revolution and Production Boom',
      period: '2010s',
      startYear: 2010,
      endYear: 2019,
      duration: 9,
      theme: ERA_THEMES.digitalAge,
      description: 'Digital distribution transforms anime consumption and production scales dramatically.',
      keyCharacteristics: [
        'Streaming platform dominance',
        'Seasonal anime production increase',
        'International co-productions',
        'Light novel adaptations boom',
        'Mobile game tie-ins'
      ],
      culturalContext: {
        historicalEvents: [
          'Smartphone revolution',
          'Social media explosion',
          'Global financial recovery',
          'Streaming wars begin'
        ],
        socialFactors: [
          'Binge-watching culture',
          'International fan communities',
          'Influencer marketing',
          'Diverse content demand'
        ]
      },
      keyMilestones: [
        {
          year: 2011,
          title: 'Madoka Magica Revolution',
          description: 'Deconstructs magical girl genre',
          significance: 'Showed mature themes in cute aesthetics',
          type: 'innovation'
        },
        {
          year: 2013,
          title: 'Attack on Titan Global Hit',
          description: 'Dark fantasy series becomes worldwide phenomenon',
          significance: 'Proved anime\'s continued global appeal',
          type: 'breakthrough'
        },
        {
          year: 2016,
          title: 'Your Name Box Office Success',
          description: 'Makoto Shinkai film breaks records',
          significance: 'Revitalized original anime films',
          type: 'achievement'
        },
        {
          year: 2017,
          title: 'Netflix Anime Investment',
          description: 'Major streaming platform commits to anime',
          significance: 'Brought institutional investment to anime',
          type: 'milestone'
        },
        {
          year: 2019,
          title: 'Demon Slayer Phenomenon',
          description: 'Traditional shonen breaks modern records',
          significance: 'Proved traditional storytelling still works',
          type: 'breakthrough'
        }
      ],
      notableWorks: [
        'Puella Magi Madoka Magica (2011)',
        'Attack on Titan (2013-2023)',
        'One Punch Man (2015-2019)',
        'Your Name (2016)',
        'My Hero Academia (2016-present)',
        'Demon Slayer (2019-present)',
        'Jujutsu Kaisen (2020-present)'
      ],
      pioneers: [
        {
          name: 'Gen Urobuchi',
          role: 'Screenwriter',
          contribution: 'Dark deconstructions of popular genres',
          years: '1972-present'
        },
        {
          name: 'Makoto Shinkai',
          role: 'Director/Writer',
          contribution: 'Photorealistic backgrounds and romantic narratives',
          years: '1973-present'
        },
        {
          name: 'Tetsuo Araki',
          role: 'Director',
          contribution: 'High-tension action direction',
          years: '1976-present'
        }
      ],
      technicalInnovations: [
        'Full CGI animation',
        '4K production standards',
        'Real-time rendering',
        'Motion capture integration',
        'Global simultaneous releases'
      ],
      marketData: {
        estimatedProductions: 3200,
        averageBudget: '$1.2 million per episode',
        distributionReach: 'Global streaming',
        audienceSize: 'Over 1 billion'
      }
    },
    {
      id: 'currentEra',
      name: 'Current Era',
      subtitle: 'Global Domination and Infinite Possibilities',
      period: '2020s - 2025',
      startYear: 2020,
      endYear: 2025,
      duration: 5,
      theme: ERA_THEMES.currentEra,
      description: 'Anime becomes the dominant global entertainment medium with unprecedented production and reach.',
      keyCharacteristics: [
        'Global streaming supremacy',
        'AI-assisted production',
        'Virtual reality experiences',
        'Real-time fan interaction',
        'Cross-media transmedia storytelling'
      ],
      culturalContext: {
        historicalEvents: [
          'COVID-19 pandemic impact',
          'Remote work normalization',
          'AI technology breakthrough',
          'Metaverse development'
        ],
        socialFactors: [
          'Home entertainment boom',
          'Global culture homogenization',
          'Creator economy explosion',
          'Nostalgia and remake culture'
        ]
      },
      keyMilestones: [
        {
          year: 2020,
          title: 'Pandemic Anime Boom',
          description: 'Global lockdowns drive anime consumption surge',
          significance: 'Anime becomes mainstream comfort entertainment',
          type: 'milestone'
        },
        {
          year: 2021,
          title: 'Demon Slayer Film Record',
          description: 'Mugen Train becomes highest-grossing anime film',
          significance: 'Proved anime\'s theatrical dominance',
          type: 'achievement'
        },
        {
          year: 2022,
          title: 'Crunchyroll 5 Million Subscribers',
          description: 'Anime streaming reaches new heights',
          significance: 'Validated anime as sustainable business',
          type: 'milestone'
        },
        {
          year: 2024,
          title: 'DandaDan Viral Success',
          description: 'New series breaks social media records',
          significance: 'Shows anime\'s continued evolution',
          type: 'breakthrough'
        },
        {
          year: 2025,
          title: 'AI Animation Tools',
          description: 'AI assists in anime production pipeline',
          significance: 'Transforms industry production methods',
          type: 'innovation'
        }
      ],
      notableWorks: [
        'Jujutsu Kaisen (2020-present)',
        'Demon Slayer: Mugen Train (2020)',
        'Chainsaw Man (2022)',
        'Cyberpunk: Edgerunners (2022)',
        'The Boy and the Heron (2023)',
        'Frieren: Beyond Journey\'s End (2023)',
        'DandaDan (2024)',
        'Solo Leveling (2024)'
      ],
      pioneers: [
        {
          name: 'Hiroyuki Imaishi',
          role: 'Director',
          contribution: 'High-energy visual storytelling',
          years: '1971-present'
        },
        {
          name: 'Mappa Studio Team',
          role: 'Production Studio',
          contribution: 'High-quality seasonal anime production',
          years: '2011-present'
        },
        {
          name: 'Global Streaming Executives',
          role: 'Industry Leaders',
          contribution: 'International anime investment',
          years: '2020s-present'
        }
      ],
      technicalInnovations: [
        'AI-assisted animation',
        'Virtual production techniques',
        'Real-time fan engagement',
        'Blockchain-based distribution',
        'Immersive VR experiences'
      ],
      marketData: {
        estimatedProductions: 4500,
        averageBudget: '$2.5 million per episode',
        distributionReach: 'Omnipresent global',
        audienceSize: 'Over 2 billion'
      }
    }
  ]
};

// Quick access era data
export const ERA_SUMMARY = {
  totalEras: 6,
  totalYears: 125,
  totalProductions: 11250,
  globalAudience: '2+ billion',
  economicImpact: '$30+ billion annually'
};

// Navigation helpers
export const getEraById = (id: string): Era | undefined => {
  return ANIME_TIMELINE.eras.find((era: Era) => era.id === id);
};

export const getEraByYear = (year: number): Era | undefined => {
  return ANIME_TIMELINE.eras.find((era: Era) => 
    year >= era.startYear && year <= era.endYear
  );
};

export const getNextEra = (currentId: string): Era | undefined => {
  const currentIndex = ANIME_TIMELINE.eras.findIndex((era: Era) => era.id === currentId);
  return currentIndex < ANIME_TIMELINE.eras.length - 1 
    ? ANIME_TIMELINE.eras[currentIndex + 1] 
    : undefined;
};

export const getPreviousEra = (currentId: string): Era | undefined => {
  const currentIndex = ANIME_TIMELINE.eras.findIndex((era: Era) => era.id === currentId);
  return currentIndex > 0 
    ? ANIME_TIMELINE.eras[currentIndex - 1] 
    : undefined;
};

export default ANIME_TIMELINE;