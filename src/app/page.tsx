import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

// Dynamic imports for performance optimization
const HeroSection = dynamic(() => import('@/components/sections/HeroSection'), {
  loading: () => <div className="h-screen bg-gradient-to-b from-black to-gray-900 animate-pulse" />
});

const TimelineSection = dynamic(() => import('@/components/sections/TimelineSection'), {
  loading: () => <div className="h-96 bg-gray-900 animate-pulse rounded-lg mx-4" />
});

const StatisticsSection = dynamic(() => import('@/components/sections/StatisticsSection'), {
  loading: () => <div className="h-80 bg-gray-800 animate-pulse rounded-lg mx-4" />
});

const ConclusionSection = dynamic(() => import('@/components/sections/ConclusionSection'), {
  loading: () => <div className="h-64 bg-gray-900 animate-pulse rounded-lg mx-4" />
});

// SEO Metadata
export const metadata: Metadata = {
  title: 'Anime History Timeline | From Silent Films to Global Phenomenon (1900-2025)',
  description: 'Explore the complete evolution of anime from its origins in 1900s Japanese cinema to today\'s global entertainment powerhouse. Interactive timeline, key milestones, and cultural impact.',
  keywords: [
    'anime history',
    'Japanese animation',
    'anime timeline',
    'manga culture',
    'Studio Ghibli',
    'Osamu Tezuka',
    'anime evolution',
    'Japanese cinema',
    'animation industry',
    'otaku culture'
  ],
  authors: [{ name: 'Anime History Archive' }],
  creator: 'Anime History Archive',
  publisher: 'Anime History Archive',
  openGraph: {
    title: 'Anime History Timeline | 125 Years of Japanese Animation',
    description: 'Journey through the complete evolution of anime from 1900 to 2025. Discover key milestones, influential creators, and cultural impact.',
    url: 'https://anime-history.com',
    siteName: 'Anime History Timeline',
    images: [
      {
        url: '/images/og/anime-history-social.jpg',
        width: 1200,
        height: 630,
        alt: 'Anime History Timeline - 125 Years of Evolution'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anime History Timeline | 125 Years of Japanese Animation',
    description: 'Explore the complete evolution of anime from 1900 to 2025. Interactive timeline and cultural impact.',
    images: ['/images/og/anime-history-twitter.jpg'],
    creator: '@AnimeHistoryArchive'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code'
  }
};

// Structured Data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Anime History Timeline',
  description: 'Complete timeline of anime evolution from 1900 to 2025',
  url: 'https://anime-history.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://anime-history.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  },
  mainEntity: {
    '@type': 'Article',
    headline: 'The Complete History of Anime: 1900-2025',
    description: 'Comprehensive timeline covering 125 years of Japanese animation evolution',
    author: {
      '@type': 'Organization',
      name: 'Anime History Archive'
    },
    datePublished: '2025-01-01',
    dateModified: '2025-07-29'
  }
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      {/* Main Content */}
      <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
        {/* Background Elements */}
        <div className="fixed inset-0 z-0">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          
          {/* Film Grain Texture */}
          <div 
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }}
          />
          
          {/* Animated Particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-gold-400 rounded-full opacity-30 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section id="hero" className="relative">
            <Suspense fallback={
              <div className="h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-64 h-8 bg-gray-700 rounded animate-pulse mx-auto" />
                  <div className="w-96 h-4 bg-gray-800 rounded animate-pulse mx-auto" />
                  <div className="w-32 h-12 bg-gold-600 rounded animate-pulse mx-auto" />
                </div>
              </div>
            }>
              <HeroSection />
            </Suspense>
          </section>

          {/* Timeline Navigation */}
          <section id="timeline-nav" className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex justify-center space-x-8 text-sm">
                {[
                  { id: 'origins', label: 'Origins', period: '1900s-1930s' },
                  { id: 'foundation', label: 'Foundation', period: '1950s-1960s' },
                  { id: 'expansion', label: 'Expansion', period: '1970s-1980s' },
                  { id: 'golden-age', label: 'Golden Age', period: '1990s-2000s' },
                  { id: 'digital-age', label: 'Digital Age', period: '2010s' },
                  { id: 'current', label: 'Current Era', period: '2020s-2025' }
                ].map((era) => (
                  <a
                    key={era.id}
                    href={`#${era.id}`}
                    className="group flex flex-col items-center space-y-1 transition-all duration-300 hover:text-gold-400"
                  >
                    <span className="font-medium">{era.label}</span>
                    <span className="text-xs text-gray-400 group-hover:text-gold-300">
                      {era.period}
                    </span>
                    <div className="w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </nav>
            </div>
          </section>

          {/* Main Timeline Content */}
          <section id="timeline" className="relative">
            <Suspense fallback={
              <div className="min-h-screen p-8 space-y-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-96 bg-gray-900 rounded-lg animate-pulse" />
                ))}
              </div>
            }>
              <TimelineSection />
            </Suspense>
          </section>

          {/* Statistics & Impact Section */}
          <section id="statistics" className="relative py-24 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-blue-400 bg-clip-text text-transparent">
                  Global Impact & Statistics
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  From a niche Japanese art form to a global entertainment powerhouse worth billions
                </p>
              </div>
              
              <Suspense fallback={
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-64 bg-gray-800 rounded-lg animate-pulse" />
                  ))}
                </div>
              }>
                <StatisticsSection />
              </Suspense>
            </div>
          </section>

          {/* Conclusion Section */}
          <section id="conclusion" className="relative py-24">
            <Suspense fallback={
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                  <div className="w-64 h-8 bg-gray-700 rounded animate-pulse mx-auto" />
                  <div className="space-y-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="w-full h-4 bg-gray-800 rounded animate-pulse" />
                    ))}
                  </div>
                </div>
              </div>
            }>
              <ConclusionSection />
            </Suspense>
          </section>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <div className="h-1 bg-gradient-to-r from-gold-400 via-blue-400 to-purple-400 transform origin-left scale-x-0 transition-transform duration-150 ease-out" 
               id="scroll-progress" />
        </div>

        {/* Back to Top Button */}
        <button
          id="back-to-top"
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gold-600 hover:bg-gold-500 text-black rounded-full shadow-2xl transform translate-y-16 opacity-0 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gold-400/50"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
          </svg>
        </button>
      </main>

      {/* Performance and Analytics Scripts */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Scroll Progress Indicator
            window.addEventListener('scroll', () => {
              const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
              document.getElementById('scroll-progress').style.transform = \`scaleX(\${scrolled / 100})\`;
            });

            // Back to Top Button
            window.addEventListener('scroll', () => {
              const backToTop = document.getElementById('back-to-top');
              if (window.scrollY > 300) {
                backToTop.style.transform = 'translateY(0)';
                backToTop.style.opacity = '1';
              } else {
                backToTop.style.transform = 'translateY(4rem)';
                backToTop.style.opacity = '0';
              }
            });

            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                  target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              });
            });
          `
        }}
      />
    </>
  );
}