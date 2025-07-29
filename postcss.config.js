module.exports = {
    plugins: {
      // Tailwind CSS - Main utility framework
      tailwindcss: {},
      
      // Autoprefixer - Automatically add vendor prefixes
      autoprefixer: {
        // Browser support configuration
        overrideBrowserslist: [
          '> 1%',
          'last 2 versions',
          'Firefox ESR',
          'not dead',
          'not IE 11',
        ],
        // Grid support for older browsers
        grid: 'autoplace',
        // Flexbox support configuration
        flexbox: 'no-2009',
        // Remove outdated prefixes
        remove: true,
      },
      
      // PostCSS Import - Handle @import statements
      'postcss-import': {},
      
      // PostCSS Nested - Enable nested CSS rules (Sass-like)
      'postcss-nested': {},
      
      // PostCSS Custom Properties - CSS custom properties (variables) with fallbacks
      'postcss-custom-properties': {
        preserve: true, // Keep custom properties in output
        importFrom: [
          // Import custom properties from these sources
          {
            customProperties: {
              '--color-primary': '#eab308',
              '--color-electric': '#00d4ff',
              '--color-dark': '#0a0a0a',
              '--font-family-primary': 'Inter, sans-serif',
              '--font-family-japanese': 'Noto Sans JP, sans-serif',
              '--border-radius-base': '12px',
              '--shadow-glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              '--backdrop-blur-base': 'blur(10px)',
              '--transition-base': 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
            },
          },
        ],
      },
      
      // PostCSS Custom Media - Custom media queries
      'postcss-custom-media': {
        importFrom: [
          {
            customMedia: {
              '--mobile': '(max-width: 768px)',
              '--tablet': '(min-width: 769px) and (max-width: 1023px)',
              '--desktop': '(min-width: 1024px)',
              '--wide': '(min-width: 1440px)',
              '--ultra-wide': '(min-width: 1920px)',
              '--motion-reduce': '(prefers-reduced-motion: reduce)',
              '--dark-mode': '(prefers-color-scheme: dark)',
              '--light-mode': '(prefers-color-scheme: light)',
              '--high-contrast': '(prefers-contrast: high)',
            },
          },
        ],
      },
      
      // PostCSS Mixins - Reusable style patterns
      'postcss-mixins': {
        mixins: {
          // Glassmorphism effect mixin
          glass: {
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)', // Safari support
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: 'var(--border-radius-base)',
          },
          
          // Dark glassmorphism effect
          'glass-dark': {
            background: 'rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--border-radius-base)',
          },
          
          // Cinema-style shadow
          'cinema-shadow': {
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
          },
          
          // Smooth transitions
          transition: {
            transition: 'var(--transition-base)',
          },
          
          // Text glow effect
          'text-glow': {
            textShadow: '0 0 10px currentColor',
          },
          
          // Responsive container
          container: {
            maxWidth: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            '@media (min-width: 640px)': {
              paddingLeft: '2rem',
              paddingRight: '2rem',
            },
            '@media (min-width: 1024px)': {
              paddingLeft: '4rem',
              paddingRight: '4rem',
            },
            '@media (min-width: 1280px)': {
              maxWidth: '1280px',
            },
          },
          
          // Flex center
          'flex-center': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          
          // Absolute center
          'absolute-center': {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
          
          // Gradient text
          'gradient-text': {
            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
          },
          
          // Hide scrollbar but keep functionality
          'hide-scrollbar': {
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE/Edge
            '&::-webkit-scrollbar': {
              display: 'none', // Chrome/Safari
            },
          },
        },
      },
      
      // PostCSS Functions - Custom CSS functions
      'postcss-functions': {
        functions: {
          // Convert px to rem
          rem: (value) => {
            const num = parseFloat(value);
            return `${num / 16}rem`;
          },
          
          // Convert px to em
          em: (value, context = 16) => {
            const num = parseFloat(value);
            const ctx = parseFloat(context);
            return `${num / ctx}em`;
          },
          
          // Calculate fluid typography
          fluid: (minSize, maxSize, minWidth = 320, maxWidth = 1200) => {
            const minSizeNum = parseFloat(minSize);
            const maxSizeNum = parseFloat(maxSize);
            const minWidthNum = parseFloat(minWidth);
            const maxWidthNum = parseFloat(maxWidth);
            
            const slope = (maxSizeNum - minSizeNum) / (maxWidthNum - minWidthNum);
            const yAxisIntersection = -minWidthNum * slope + minSizeNum;
            
            return `clamp(${minSizeNum}px, ${yAxisIntersection}px + ${slope * 100}vw, ${maxSizeNum}px)`;
          },
        },
      },
      
      // Production optimizations
      ...(process.env.NODE_ENV === 'production'
        ? {
            // CSS Nano - Minify CSS for production
            cssnano: {
              preset: [
                'default',
                {
                  // Preserve important comments
                  discardComments: {
                    removeAll: false,
                  },
                  // Normalize whitespace
                  normalizeWhitespace: true,
                  // Merge rules
                  mergeRules: true,
                  // Minify selectors
                  minifySelectors: true,
                  // Minify font values
                  minifyFontValues: true,
                  // Convert colors
                  colormin: true,
                  // Optimize calc() expressions
                  calc: true,
                  // Remove unused at-rules
                  discardUnused: false,
                  // Reduce transform functions
                  reduceTransforms: true,
                  // Merge media queries
                  mergeMediaQueries: true,
                  // Z-index optimization
                  zindex: false, // Disabled to prevent breaking z-index stacking
                },
              ],
            },
            
            // PurgeCSS - Remove unused CSS (handled by Tailwind)
            '@fullhuman/postcss-purgecss': {
              content: [
                './src/**/*.{js,jsx,ts,tsx}',
                './src/**/*.html',
              ],
              defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
              safelist: [
                // Always keep these classes
                'html',
                'body',
                /^(motion-|animate-|transition-)/,
                /^(hover:|focus:|active:|disabled:)/,
                /^(sm:|md:|lg:|xl:|2xl:)/,
                /^(dark:)/,
              ],
            },
          }
        : {}),
    },
  };