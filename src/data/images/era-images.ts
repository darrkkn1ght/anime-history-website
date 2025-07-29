// src/data/images/era-images.ts
// Comprehensive image reference system for cinematic anime history website

export interface EraImage {
    id: string;
    src: string;
    alt: string;
    caption?: string;
    year?: number;
    category: 'hero' | 'showcase' | 'background' | 'gallery' | 'thumbnail';
    aspect_ratio: 'square' | 'landscape' | 'portrait' | 'cinema';
    quality: 'placeholder' | 'optimized' | 'high_res';
  }
  
  export interface EraImageCollection {
    era_id: string;
    era_name: string;
    color_theme: {
      primary: string;
      secondary: string;
      accent: string;
    };
    hero_image: EraImage;
    background_images: EraImage[];
    showcase_images: EraImage[];
    gallery_images: EraImage[];
    thumbnail_images: EraImage[];
  }
  
  // Origins Era (1900s-1930s) - Sepia and vintage tones
  export const originsEraImages: EraImageCollection = {
    era_id: "origins",
    era_name: "Origins Era (1900s-1930s)",
    color_theme: {
      primary: "#8B4513",
      secondary: "#F4E4BC", 
      accent: "#D2691E"
    },
    hero_image: {
      id: "origins_hero",
      src: "/images/eras/origins/namakura-gatana-still.jpg",
      alt: "The Dull Sword (Namakura Gatana) 1917 - First Japanese animated film",
      caption: "The birth of anime: Jun'ichi Kōuchi's pioneering work",
      year: 1917,
      category: "hero",
      aspect_ratio: "cinema",
      quality: "high_res"
    },
    background_images: [
      {
        id: "origins_bg_1",
        src: "/images/eras/origins/magic-lantern.jpg",
        alt: "Magic lantern projection equipment from early 1900s",
        category: "background",
        aspect_ratio: "landscape",
        quality: "optimized"
      },
      {
        id: "origins_bg_2", 
        src: "/images/eras/origins/silent-era-texture.jpg",
        alt: "Film grain texture reminiscent of silent era",
        category: "background",
        aspect_ratio: "landscape",
        quality: "optimized"
      }
    ],
    showcase_images: [
      {
        id: "origins_showcase_1",
        src: "/images/eras/origins/early-animation-cel.jpg",
        alt: "Hand-drawn animation cel from 1920s Japan",
        caption: "Painstaking frame-by-frame artistry",
        year: 1925,
        category: "showcase",
        aspect_ratio: "landscape",
        quality: "high_res"
      },
      {
        id: "origins_showcase_2",
        src: "/images/eras/origins/kouchi-studio.jpg", 
        alt: "Jun'ichi Kōuchi's animation studio",
        caption: "Where Japanese animation began",
        year: 1918,
        category: "showcase",
        aspect_ratio: "square",
        quality: "optimized"
      }
    ],
    gallery_images: [
      {
        id: "origins_gallery_1",
        src: "/images/eras/origins/momotaro-frame.jpg",
        alt: "Frame from Momotaro's Divine Sea Warriors (1945)",
        year: 1945,
        category: "gallery",
        aspect_ratio: "landscape",
        quality: "optimized"
      },
      {
        id: "origins_gallery_2",
        src: "/images/eras/origins/propaganda-poster.jpg",
        alt: "WWII era animation propaganda poster",
        year: 1943,
        category: "gallery", 
        aspect_ratio: "portrait",
        quality: "optimized"
      }
    ],
    thumbnail_images: [
      {
        id: "origins_thumb_1",
        src: "/images/eras/origins/thumb_namakura.jpg",
        alt: "Namakura Gatana thumbnail",
        category: "thumbnail",
        aspect_ratio: "square",
        quality: "placeholder"
      }
    ]
  };
  
  // Foundation Era (1950s-1960s) - Black & white to early color
  export const foundationEraImages: EraImageCollection = {
    era_id: "foundation",
    era_name: "Foundation Era (1950s-1960s)",
    color_theme: {
      primary: "#2C3E50",
      secondary: "#ECF0F1",
      accent: "#3498DB"
    },
    hero_image: {
      id: "foundation_hero",
      src: "/images/eras/foundation/astro-boy-character.jpg",
      alt: "Astro Boy (Tetsuwan Atom) - The first anime TV series",
      caption: "Osamu Tezuka revolutionizes animation for television",
      year: 1963,
      category: "hero",
      aspect_ratio: "cinema",
      quality: "high_res"
    },
    background_images: [
      {
        id: "foundation_bg_1",
        src: "/images/eras/foundation/tezuka-production.jpg",
        alt: "Mushi Production studio in the 1960s",
        category: "background",
        aspect_ratio: "landscape", 
        quality: "optimized"
      },
      {
        id: "foundation_bg_2",
        src: "/images/eras/foundation/early-tv-anime.jpg",
        alt: "Black and white TV broadcasting early anime",
        category: "background",
        aspect_ratio: "landscape",
        quality: "optimized"
      }
    ],
    showcase_images: [
      {
        id: "foundation_showcase_1",
        src: "/images/eras/foundation/tezuka-portrait.jpg",
        alt: "Osamu Tezuka working on animation",
        caption: "The God of Manga creates anime's foundation",
        year: 1961,
        category: "showcase",
        aspect_ratio: "portrait",
        quality: "high_res"
      },
      {
        id: "foundation_showcase_2",
        src: "/images/eras/foundation/kimba-cel.jpg",
        alt: "Original animation cel from Kimba the White Lion",
        caption: "Pioneering color animation techniques",
        year: 1965,
        category: "showcase",
        aspect_ratio: "landscape",
        quality: "optimized"
      }
    ],
    gallery_images: [
      {
        id: "foundation_gallery_1",
        src: "/images/eras/foundation/sally-witch.jpg",
        alt: "Sally the Witch - First magical girl anime",
        year: 1966,
        category: "gallery",
        aspect_ratio: "square",
        quality: "optimized"
      },
      {
        id: "foundation_gallery_2",
        src: "/images/eras/foundation/speed-racer.jpg",
        alt: "Speed Racer racing scene",
        year: 1967,
        category: "gallery",
        aspect_ratio: "landscape",
        quality: "optimized"
      }
    ],
    thumbnail_images: [
      {
        id: "foundation_thumb_1",
        src: "/images/eras/foundation/thumb_astroboy.jpg",
        alt: "Astro Boy thumbnail",
        category: "thumbnail",
        aspect_ratio: "square",
        quality: "placeholder"
      }
    ]
  };
  
  // Expansion Era (1970s-1980s) - Bold colors and dramatic scenes
  export const expansionEraImages: EraImageCollection = {
    era_id: "expansion",
    era_name: "Expansion Era (1970s-1980s)",
    color_theme: {
      primary: "#E74C3C",
      secondary: "#F39C12",
      accent: "#9B59B6"
    },
    hero_image: {
      id: "expansion_hero",
      src: "/images/eras/expansion/akira-neo-tokyo.jpg",
      alt: "Neo-Tokyo from Akira (1988) - Cyberpunk masterpiece",
      caption: "Akira redefines animation's cinematic potential",
      year: 1988,
      category: "hero",
      aspect_ratio: "cinema",
      quality: "high_res"
    },
    background_images: [
      {
        id: "expansion_bg_1",
        src: "/images/eras/expansion/mecha-evolution.jpg",
        alt: "Evolution of mecha design through the 80s",
        category: "background",
        aspect_ratio: "landscape",
        quality: "optimized"
      },
      {
        id: "expansion_bg_2",
        src: "/images/eras/expansion/studio-ghibli-early.jpg",
        alt: "Early Studio Ghibli production stills",
        category: "background",
        aspect_ratio: "landscape",
        quality: "optimized"
      }
    ],
    showcase_images: [
      {
        id: "expansion_showcase_1",
        src: "/images/eras/expansion/gundam-rx78.jpg",
        alt: "RX-78-2 Gundam from Mobile Suit Gundam",
        caption: "Real Robot revolution begins",
        year: 1979,
        category: "showcase",
        aspect_ratio: "portrait",
        quality: "high_res"
      },
      {
        id: "expansion_showcase_2",
        src: "/images/eras/expansion/nausicaa-glider.jpg",
        alt: "Nausicaä on her glider from Nausicaä of the Valley of the Wind",
        caption: "Miyazaki's environmental storytelling",
        year: 1984,
        category: "showcase",
        aspect_ratio: "landscape",
        quality: "high_res"
      }
    ],
    gallery_images: [
      {
        id: "expansion_gallery_1",
        src: "/images/eras/expansion/macross-valkyrie.jpg",
        alt: "VF-1 Valkyrie transformation from Macross",
        year: 1982,
        category: "gallery",
        aspect_ratio: "landscape",
        quality: "optimized"
      },
      {
        id: "expansion_gallery_2",
        src: "/images/eras/expansion/castle-cagliostro.jpg",
        alt: "Lupin III in The Castle of Cagliostro",
        year: 1979,
        category: "gallery",
        aspect_ratio: "cinema",
        quality: "optimized"
      }
    ],
    thumbnail_images: [
      {
        id: "expansion_thumb_1",
        src: "/images/eras/expansion/thumb_akira.jpg",
        alt: "Akira motorcycle thumbnail",
        category: "thumbnail",
        aspect_ratio: "square",
        quality: "placeholder"
      }
    ]
  };
  
  // Golden Age Era (1990s-2000s) - Vibrant and iconic
  export const goldenAgeEraImages: EraImageCollection = {
    era_id: "golden-age",
    era_name: "Golden Age Era (1990s-2000s)",
    color_theme: {
      primary: "#FFD700",
      secondary: "#FF6B6B",
      accent: "#4ECDC4"
    },
    hero_image: {
      id: "golden_hero",
      src: "/images/eras/golden-age/evangelion.jpg",
      alt: "Evangelion Unit-01 from Neon Genesis Evangelion",
      caption: "Evangelion deconstructs and redefines anime",
      year: 1995,
      category: "hero",
      aspect_ratio: "cinema",
      quality: "high_res"
    },
    background_images: [
      {
        id: "golden_bg_1",
        src: "/images/eras/golden-age/sailor-moon.jpg",
        alt: "Sailor Moon and the Sailor Guardians",
        category: "background",
        aspect_ratio: "landscape",
        quality: "optimized"
      },
      {
        id: "golden_bg_2",
        src: "/images/eras/golden-age/dragon-ball-z.jpg",
        alt: "Goku powering up in Dragon Ball Z",
        category: "background",
        aspect_ratio: "landscape",
        quality: "optimized"
      }
    ],
    showcase_images: [
      {
        id: "golden_showcase_1",
        src: "/images/eras/golden-age/spirited-away-chihiro.jpg",
        alt: "Chihiro in the spirit world from Spirited Away",
        caption: "Miyazaki's masterpiece wins Academy Award",
        year: 2001,
        category: "showcase",
        aspect_ratio: "landscape",
        quality: "high_res"
      },
      {
        id: "golden_showcase_2",
        src: "/images/eras/golden-age/cowboy-bebop-spike.jpg",
        alt: "Spike Spiegel from Cowboy Bebop",
        caption: "Space westerns meet jazz sophistication",
        year: 1998,
        category: "showcase",
        aspect_ratio: "portrait",
        quality: "high_res"
      }
    ],
    gallery_images: [
      {
        id: "golden_gallery_1",
        src: "/images/eras/golden-age/pokemon-ash-pikachu.jpg",
        alt: "Ash and Pikachu from Pokemon",
        year: 1997,
        category: "gallery",
        aspect_ratio: "square",
        quality: "optimized"
      },
      {
        id: "golden_gallery_2",
        src: "/images/eras/golden-age/one-piece-crew.jpg",
        alt: "Straw Hat Pirates from One Piece",
        year: 1999,
        category: "gallery",
        aspect_ratio: "landscape",
        quality: "optimized"
      }
    ],
    thumbnail_images: [
      {
        id: "golden_thumb_1",
        src: "/images/eras/golden-age/thumb_evangelion.jpg",
        alt: "Eva Unit-01 thumbnail",
        category: "thumbnail",
        aspect_ratio: "square",
        quality: "placeholder"
      }
    ]
  };
  
  // Digital Age Era (2010s) - HD clarity with digital effects
  export const digitalAgeEraImages: EraImageCollection = {
    era_id: "digital-age",
    era_name: "Digital Age Era (2010s)",
    color_theme: {
      primary: "#00D4FF",
      secondary: "#0080FF",
      accent: "#FF4081"
    },
    hero_image: {
      id: "digital_hero",
      src: "/images/eras/digital-age/attack-on-titan.jpg",
      alt: "Eren facing the Colossal Titan from Attack on Titan",
      caption: "Attack on Titan revolutionizes storytelling",
      year: 2013,
      category: "hero",
      aspect_ratio: "cinema",
      quality: "high_res"
    },
    background_images: [
      {
        id: "digital_bg_1",
        src: "/images/eras/digital-age/streaming-platforms.jpg",
        alt: "Multiple streaming platform interfaces",
        category: "background",
        aspect_ratio: "landscape",
        quality: "optimized"
      },
      {
        id: "digital_bg_2",
        src: "/images/eras/digital-age/modern-animation.jpg",
        alt: "Digital animation production workflow",
        category: "background",
        aspect_ratio: "landscape",
        quality: "optimized"
      }
    ],
    showcase_images: [
      {
        id: "digital_showcase_1",
        src: "/images/eras/digital-age/your-name-comet.jpg",
        alt: "Comet scene from Your Name",
        caption: "Makoto Shinkai's photorealistic beauty",
        year: 2016,
        category: "showcase",
        aspect_ratio: "cinema",
        quality: "high_res"
      },
      {
        id: "digital_showcase_2",
        src: "/images/eras/digital-age/demon-slayer-tanjiro.jpg",
        alt: "Tanjiro's Water Breathing technique",
        caption: "CGI enhances traditional animation",
        year: 2019,
        category: "showcase",
        aspect_ratio: "landscape",
        quality: "high_res"
      }
    ],
    gallery_images: [
      {
        id: "digital_gallery_1",
        src: "/images/eras/digital-age/my-hero-academia.jpg",
        alt: "Deku using One For All",
        year: 2016,
        category: "gallery",
        aspect_ratio: "portrait",
        quality: "optimized"
      },
      {
        id: "digital_gallery_2",
        src: "/images/eras/digital-age/jujutsu-kaisen.jpg",
        alt: "Yuji Itadori from Jujutsu Kaisen",
        year: 2020,
        category: "gallery",
        aspect_ratio: "square",
        quality: "optimized"
      }
    ],
    thumbnail_images: [
      {
        id: "digital_thumb_1",
        src: "/images/eras/digital-age/thumb_aot.jpg",
        alt: "Attack on Titan thumbnail",
        category: "thumbnail",
        aspect_ratio: "square",
        quality: "placeholder"
      }
    ]
  };
  
  // Current Era (2020s-2025) - Ultra HD with AI enhancement
  export const currentEraImages: EraImageCollection = {
    era_id: "current",
    era_name: "Current Era (2020s-2025)",
    color_theme: {
      primary: "#FF6B6B",
      secondary: "#4ECDC4", 
      accent: "#45B7D1"
    },
    hero_image: {
      id: "current_hero",
      src: "/images/eras/current-era/dandadan.jpg",
      alt: "Momo and Okarun from DanDaDan (2024)",
      caption: "AI-enhanced animation reaches new heights",
      year: 2024,
      category: "hero",
      aspect_ratio: "cinema",
      quality: "high_res"
    },
    background_images: [
      {
        id: "current_bg_1",
        src: "/images/eras/current-era/market-growth.jpg",
        alt: "Global anime market expansion visualization",
        category: "background",
        aspect_ratio: "landscape",
        quality: "optimized"
      },
      {
        id: "current_bg_2",
        src: "/images/eras/current-era/global-reach.jpg",
        alt: "Worldwide anime streaming statistics",
        category: "background", 
        aspect_ratio: "landscape",
        quality: "optimized"
      }
    ],
    showcase_images: [
      {
        id: "current_showcase_1",
        src: "/images/eras/current-era/chainsaw-man-denji.jpg",
        alt: "Denji from Chainsaw Man",
        caption: "MAPPA's cinematic storytelling evolution",
        year: 2022,
        category: "showcase",
        aspect_ratio: "portrait",
        quality: "high_res"
      },
      {
        id: "current_showcase_2",
        src: "/images/eras/current-era/spy-family.jpg",
        alt: "The Forger family from Spy x Family",
        caption: "Global simultaneous releases become standard",
        year: 2022,
        category: "showcase",
        aspect_ratio: "landscape",
        quality: "high_res"
      }
    ],
    gallery_images: [
      {
        id: "current_gallery_1",
        src: "/images/eras/current-era/frieren-journey.jpg",
        alt: "Frieren: Beyond Journey's End landscape",
        year: 2023,
        category: "gallery",
        aspect_ratio: "cinema",
        quality: "optimized"
      },
      {
        id: "current_gallery_2",
        src: "/images/eras/current-era/blue-lock.jpg",
        alt: "Isagi from Blue Lock",
        year: 2022,
        category: "gallery",
        aspect_ratio: "square",
        quality: "optimized"
      }
    ],
    thumbnail_images: [
      {
        id: "current_thumb_1",
        src: "/images/eras/current-era/thumb_dandadan.jpg",
        alt: "DanDaDan thumbnail",
        category: "thumbnail", 
        aspect_ratio: "square",
        quality: "placeholder"
      }
    ]
  };
  
  // Background textures and UI assets
  export const backgroundAssets = {
    film_grain: {
      id: "film_grain_texture",
      src: "/images/ui/backgrounds/film-grain-texture.jpg",
      alt: "Film grain overlay texture",
      category: "background" as const,
      aspect_ratio: "landscape" as const,
      quality: "optimized" as const
    },
    gradient_overlay: {
      id: "gradient_overlay",
      src: "/images/ui/backgrounds/gradient-overlay.jpg", 
      alt: "Cinematic gradient overlay",
      category: "background" as const,
      aspect_ratio: "landscape" as const,
      quality: "optimized" as const
    },
    particles_bg: {
      id: "particles_background",
      src: "/images/ui/backgrounds/particles-bg.jpg",
      alt: "Floating particles background",
      category: "background" as const,
      aspect_ratio: "landscape" as const,
      quality: "optimized" as const
    }
  };
  
  // Timeline visual assets
  export const timelineAssets = {
    timeline_bg: {
      id: "timeline_background",
      src: "/images/timeline/timeline-bg.svg",
      alt: "Timeline background graphic",
      category: "background" as const,
      aspect_ratio: "landscape" as const,
      quality: "optimized" as const
    },
    era_markers: {
      id: "era_marker_icons",
      src: "/images/timeline/era-markers.svg",
      alt: "Era transition markers",
      category: "background" as const,
      aspect_ratio: "square" as const,
      quality: "optimized" as const
    },
    progress_bar: {
      id: "timeline_progress",
      src: "/images/timeline/progress-bar.svg",
      alt: "Timeline progress indicator",
      category: "background" as const,
      aspect_ratio: "landscape" as const,
      quality: "optimized" as const
    }
  };
  
  // Studio logo assets
  export const studioLogos = {
    toei: {
      id: "toei_animation_logo",
      src: "/images/ui/logos/studios/toei.png",
      alt: "Toei Animation logo",
      category: "thumbnail" as const,
      aspect_ratio: "square" as const,
      quality: "optimized" as const
    },
    mushi: {
      id: "mushi_production_logo", 
      src: "/images/ui/logos/studios/mushi.png",
      alt: "Mushi Production logo",
      category: "thumbnail" as const,
      aspect_ratio: "square" as const,
      quality: "optimized" as const
    },
    ghibli: {
      id: "studio_ghibli_logo",
      src: "/images/ui/logos/studios/ghibli.png",
      alt: "Studio Ghibli logo",
      category: "thumbnail" as const,
      aspect_ratio: "square" as const,
      quality: "optimized" as const
    },
    madhouse: {
      id: "madhouse_logo",
      src: "/images/ui/logos/studios/madhouse.png", 
      alt: "Madhouse logo",
      category: "thumbnail" as const,
      aspect_ratio: "square" as const,
      quality: "optimized" as const
    },
    mappa: {
      id: "mappa_logo",
      src: "/images/ui/logos/studios/mappa.png",
      alt: "MAPPA logo", 
      category: "thumbnail" as const,
      aspect_ratio: "square" as const,
      quality: "optimized" as const
    },
    bones: {
      id: "bones_logo",
      src: "/images/ui/logos/studios/bones.png",
      alt: "Bones logo",
      category: "thumbnail" as const,
      aspect_ratio: "square" as const,
      quality: "optimized" as const
    }
  };
  
  // All era collections combined
  export const allEraImages: EraImageCollection[] = [
    originsEraImages,
    foundationEraImages, 
    expansionEraImages,
    goldenAgeEraImages,
    digitalAgeEraImages,
    currentEraImages
  ];
  
  // Helper functions for image management
  export const getEraImages = (eraId: string): EraImageCollection | undefined => {
    return allEraImages.find(era => era.era_id === eraId);
  };
  
  export const getHeroImageByEra = (eraId: string): EraImage | undefined => {
    const era = getEraImages(eraId);
    return era?.hero_image;
  };
  
  export const getImagesByCategory = (eraId: string, category: EraImage['category']): EraImage[] => {
    const era = getEraImages(eraId);
    if (!era) return [];
    
    switch (category) {
      case 'hero':
        return [era.hero_image];
      case 'background':
        return era.background_images;
      case 'showcase':
        return era.showcase_images;
      case 'gallery':
        return era.gallery_images;
      case 'thumbnail':
        return era.thumbnail_images;
      default:
        return [];
    }
  };
  
  // Image optimization settings for Next.js
  export const imageConfig = {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
    sizes: {
      thumbnail: '150px',
      small: '300px', 
      medium: '600px',
      large: '1200px',
      hero: '1920px'
    },
    quality: {
      placeholder: 20,
      optimized: 75,
      high_res: 90
    }
  };
  
  // Export complete image system
  export const eraImageSystem = {
    allEraImages,
    backgroundAssets,
    timelineAssets,
    studioLogos,
    getEraImages,
    getHeroImageByEra,
    getImagesByCategory,
    imageConfig
  };