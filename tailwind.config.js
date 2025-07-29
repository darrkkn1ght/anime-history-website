/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
      extend: {
        // Custom color palette for anime history theme
        colors: {
          // Primary brand colors
          primary: {
            50: '#fefce8',
            100: '#fef9c3',
            200: '#fef08a',
            300: '#fde047',
            400: '#facc15',
            500: '#eab308', // Main gold
            600: '#ca8a04',
            700: '#a16207',
            800: '#854d0e',
            900: '#713f12',
            950: '#422006',
          },
          
          // Electric blue accent
          electric: {
            50: '#f0fdff',
            100: '#ccfbff',
            200: '#99f6ff',
            300: '#4ae8ff',
            400: '#00d4ff', // Main electric blue
            500: '#00b8e6',
            600: '#0080b8',
            700: '#005c8a',
            800: '#003d5c',
            900: '#001f2e',
            950: '#000f17',
          },
          
          // Deep blacks and grays
          dark: {
            50: '#f8f9fa',
            100: '#e9ecef',
            200: '#dee2e6',
            300: '#ced4da',
            400: '#adb5bd',
            500: '#6c757d',
            600: '#495057',
            700: '#343a40',
            800: '#212529',
            900: '#0f1419', // Main dark
            950: '#0a0a0a', // Deepest black
          },
          
          // Era-specific colors
          origins: {
            sepia: '#8B4513',
            cream: '#F4E4BC',
            brown: '#654321',
            vintage: '#D2B48C',
          },
          
          foundation: {
            blue: '#4169E1',
            silver: '#C0C0C0',
            classic: '#2F4F4F',
          },
          
          expansion: {
            neon: '#FF6B6B',
            cyan: '#4ECDC4',
            purple: '#9B59B6',
          },
          
          golden: {
            yellow: '#FFD700',
            orange: '#FF8C00',
            red: '#DC143C',
          },
          
          digital: {
            blue: '#00D4FF',
            green: '#00FF88',
            purple: '#8A2BE2',
          },
          
          current: {
            gradient1: '#FF6B6B',
            gradient2: '#4ECDC4',
            gradient3: '#45B7D1',
            gradient4: '#96CEB4',
          },
          
          // Glassmorphism colors
          glass: {
            light: 'rgba(255, 255, 255, 0.1)',
            medium: 'rgba(255, 255, 255, 0.2)',
            heavy: 'rgba(255, 255, 255, 0.3)',
            dark: 'rgba(0, 0, 0, 0.1)',
          },
        },
        
        // Typography system
        fontFamily: {
          'noto-jp': ['Noto Sans JP', 'sans-serif'],
          'inter': ['Inter', 'sans-serif'],
          'mono': ['JetBrains Mono', 'monospace'],
        },
        
        // Spacing system (4px base)
        spacing: {
          '18': '4.5rem',
          '88': '22rem',
          '128': '32rem',
          '144': '36rem',
        },
        
        // Custom animations
        animation: {
          'fade-in': 'fadeIn 0.6s ease-out',
          'fade-in-up': 'fadeInUp 0.8s ease-out',
          'slide-in-left': 'slideInLeft 0.7s ease-out',
          'slide-in-right': 'slideInRight 0.7s ease-out',
          'scale-in': 'scaleIn 0.5s ease-out',
          'float': 'float 3s ease-in-out infinite',
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'shimmer': 'shimmer 2s linear infinite',
          'glow': 'glow 2s ease-in-out infinite alternate',
          'spin-slow': 'spin 3s linear infinite',
          'bounce-slow': 'bounce 2s infinite',
          'wiggle': 'wiggle 1s ease-in-out infinite',
        },
        
        // Keyframes for custom animations
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          slideInLeft: {
            '0%': { opacity: '0', transform: 'translateX(-100px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          slideInRight: {
            '0%': { opacity: '0', transform: 'translateX(100px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          scaleIn: {
            '0%': { opacity: '0', transform: 'scale(0.9)' },
            '100%': { opacity: '1', transform: 'scale(1)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          shimmer: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(100%)' },
          },
          glow: {
            '0%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' },
            '100%': { boxShadow: '0 0 30px rgba(255, 215, 0, 0.8)' },
          },
          wiggle: {
            '0%, 100%': { transform: 'rotate(-3deg)' },
            '50%': { transform: 'rotate(3deg)' },
          },
        },
        
        // Custom backdrop blur
        backdropBlur: {
          'xs': '2px',
          '4xl': '72px',
        },
        
        // Custom box shadows
        boxShadow: {
          'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          'glow-gold': '0 0 20px rgba(255, 215, 0, 0.5)',
          'glow-blue': '0 0 20px rgba(0, 212, 255, 0.5)',
          'cinema': '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
          'era': '0 10px 40px rgba(0, 0, 0, 0.3)',
        },
        
        // Custom gradients
        backgroundImage: {
          'gradient-gold': 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
          'gradient-electric': 'linear-gradient(135deg, #00D4FF 0%, #0080FF 100%)',
          'gradient-era-origins': 'linear-gradient(135deg, #8B4513 0%, #F4E4BC 100%)',
          'gradient-era-foundation': 'linear-gradient(135deg, #4169E1 0%, #C0C0C0 100%)',
          'gradient-era-expansion': 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
          'gradient-era-golden': 'linear-gradient(135deg, #FFD700 0%, #DC143C 100%)',
          'gradient-era-digital': 'linear-gradient(135deg, #00D4FF 0%, #8A2BE2 100%)',
          'gradient-era-current': 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #45B7D1 100%)',
          'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
          'film-grain': 'url("/images/ui/backgrounds/film-grain-texture.jpg")',
        },
        
        // Custom border radius
        borderRadius: {
          '4xl': '2rem',
          '5xl': '2.5rem',
        },
        
        // Custom z-index
        zIndex: {
          '60': '60',
          '70': '70',
          '80': '80',
          '90': '90',
          '100': '100',
        },
        
        // Custom aspect ratios
        aspectRatio: {
          'cinema': '21 / 9',
          'poster': '2 / 3',
          'card': '4 / 3',
        },
        
        // Screen sizes
        screens: {
          'xs': '320px',
          '3xl': '1600px',
          '4xl': '1920px',
        },
        
        // Custom transitions
        transitionTimingFunction: {
          'cinema': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
          'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          'ease-in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
          'ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        },
        
        // Custom durations
        transitionDuration: {
          '400': '400ms',
          '600': '600ms',
          '800': '800ms',
          '1200': '1200ms',
          '2000': '2000ms',
        },
      },
    },
    plugins: [
      // Add Tailwind plugins for additional functionality
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      
      // Custom plugin for glassmorphism utilities
      function({ addUtilities }) {
        const newUtilities = {
          '.glass': {
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          },
          '.glass-dark': {
            background: 'rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
          '.text-glow': {
            textShadow: '0 0 10px currentColor',
          },
          '.cinema-shadow': {
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
          },
        };
  
        addUtilities(newUtilities);
      },
      
      // Custom plugin for scrollbar styling
      function({ addBase }) {
        addBase({
          '::-webkit-scrollbar': {
            width: '8px',
          },
          '::-webkit-scrollbar-track': {
            background: '#0a0a0a',
          },
          '::-webkit-scrollbar-thumb': {
            background: '#ffd700',
            borderRadius: '4px',
          },
          '::-webkit-scrollbar-thumb:hover': {
            background: '#ffed4e',
          },
        });
      },
    ],
  };