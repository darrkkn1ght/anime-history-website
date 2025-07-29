import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
})

export const metadata: Metadata = {
  title: {
    default: 'Anime History: From Origins to Modern Era | 1900s-2025',
    template: '%s | Anime History'
  },
  description: 'Explore the complete evolution of anime from its earliest origins in the 1900s to the modern digital age of 2025. A cinematic journey through Japanese animation history.',
  keywords: [
    'anime history',
    'Japanese animation',
    'anime timeline',
    'manga history',
    'Studio Ghibli',
    'Toei Animation',
    'anime evolution',
    'animation industry',
    'otaku culture',
    'anime statistics'
  ],
  authors: [{ name: 'Anime History Project' }],
  creator: 'Anime History Website',
  publisher: 'Anime History Project',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anime-history.com',
    siteName: 'Anime History',
    title: 'Anime History: Complete Timeline 1900s-2025',
    description: 'Discover the fascinating evolution of Japanese animation through an immersive, cinematic web experience.',
    images: [
      {
        url: '/images/og/anime-history-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Anime History Timeline - From Origins to Modern Era',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anime History: Complete Timeline 1900s-2025',
    description: 'Explore the evolution of Japanese animation through an immersive web experience.',
    images: ['/images/og/anime-history-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icons/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icons/safari-pinned-tab.svg',
        color: '#ffd700',
      },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffd700' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${notoSansJP.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/Inter-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/NotoSansJP-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/NotoSansJP-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Anime History",
              "description": "Complete timeline and history of Japanese animation from 1900s to 2025",
              "url": "https://anime-history.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://anime-history.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "author": {
                "@type": "Organization",
                "name": "Anime History Project"
              },
              "datePublished": "2025-01-01",
              "dateModified": new Date().toISOString(),
              "inLanguage": "en-US"
            })
          }}
        />
      </head>
      <body 
        className={`
          min-h-screen 
          bg-gradient-to-br from-black via-gray-900 to-black
          text-white 
          font-sans 
          antialiased
          overflow-x-hidden
          selection:bg-gold/20 
          selection:text-gold
        `}
      >
        {/* Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Film grain texture overlay */}
          <div 
            className="absolute inset-0 opacity-[0.02] mix-blend-multiply"
            style={{
              backgroundImage: 'url(/images/ui/backgrounds/film-grain-texture.jpg)',
              backgroundSize: '200px 200px',
              backgroundRepeat: 'repeat'
            }}
          />
          
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
          
          {/* Animated particles background */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: `
                radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(255, 107, 107, 0.05) 0%, transparent 50%)
              `
            }}
          />
        </div>

        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-gold text-black px-4 py-2 rounded-md font-medium transition-all duration-200"
        >
          Skip to main content
        </a>

        {/* Main content wrapper */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Global loading indicator */}
        <div 
          id="global-loading"
          className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-gold via-electric-blue to-gold transform scale-x-0 origin-left transition-transform duration-300 z-[100]"
          style={{ display: 'none' }}
        />

        {/* Development mode indicator */}
        {process.env.NODE_ENV === 'development' && (
          <div className="fixed bottom-4 right-4 bg-red-500/80 text-white px-3 py-1 rounded-full text-xs font-medium z-[100] backdrop-blur-sm">
            DEV
          </div>
        )}

        {/* No-script fallback */}
        <noscript>
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[200]">
            <div className="text-center max-w-md mx-auto p-8">
              <h1 className="text-2xl font-bold text-gold mb-4">JavaScript Required</h1>
              <p className="text-gray-300 mb-4">
                This interactive anime history experience requires JavaScript to function properly.
              </p>
              <p className="text-sm text-gray-400">
                Please enable JavaScript in your browser settings and refresh the page.
              </p>
            </div>
          </div>
        </noscript>
      </body>
    </html>
  )
}