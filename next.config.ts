/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  // Image optimization configuration
  images: {
    // Enable modern image formats
    formats: ['image/webp', 'image/avif'],
    
    // Image domains (add your CDN/external image domains here)
    domains: [
      'images.unsplash.com',
      'cdn.myanimelist.net',
      'imgur.com',
      'i.imgur.com',
    ],
    
    // Device sizes for responsive images
    deviceSizes: [320, 420, 768, 1024, 1200, 1920],
    
    // Image sizes for different breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Custom loader for optimized images
    loader: 'default',
    
    // Disable static imports if using dynamic images
    disableStaticImages: false,
    
    // Enable dangerous use of SVG
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Webpack configuration for custom optimizations
  webpack: (config: any) => {
    // Optimize bundle splitting
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -10,
          chunks: 'all',
        },
        animations: {
          test: /[\\/]node_modules[\\/](framer-motion|gsap|lenis)[\\/]/,
          name: 'animations',
          priority: 0,
          chunks: 'all',
        },
      },
    };

    // Add support for importing videos
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[hash].[ext]',
        },
      },
    });

    // Optimize SVG imports
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  // Performance and caching headers
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/videos/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  redirects: async () => {
    return [
      {
        source: '/timeline',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // Rewrites for cleaner URLs
  rewrites: async () => {
    return [
      {
        source: '/era/:era',
        destination: '/#:era',
      },
    ];
  },

  // Environment configuration
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Enable SWC minification for better performance (deprecated, enabled by default)

  // Enable React strict mode
  reactStrictMode: true,

  // Powered by header
  poweredByHeader: false,

  // Gzip compression
  compress: true,

  // Generate ETags for pages
  generateEtags: true,

  // Trailing slash behavior
  trailingSlash: false,

  // Build output
  output: 'standalone',

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['src'],
  },

  // Asset prefix for CDN
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://cdn.example.com' : '',

  // Base path for deployment
  // basePath: '/anime-history',
};

module.exports = nextConfig;