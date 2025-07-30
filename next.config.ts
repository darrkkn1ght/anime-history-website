/** @type {import('next').NextConfig} */
const nextConfig = {
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

  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },

  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['src'],
  },

  // Webpack configuration to handle case sensitivity issues
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    // Handle case sensitivity issues on Windows
    config.resolve.symlinks = false;
    
    // Ensure consistent module resolution
    config.resolve.modules = [
      'node_modules',
      ...config.resolve.modules || []
    ];

    // Add fallbacks for better compatibility
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };

    return config;
  },
};

export default nextConfig;