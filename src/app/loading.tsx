'use client';

import { useEffect, useState } from 'react';

// Loading animation variants
const loadingVariants = {
  dots: 'dots',
  filmReel: 'filmReel',
  timeline: 'timeline'
} as const;

type LoadingVariant = typeof loadingVariants[keyof typeof loadingVariants];

interface LoadingProps {
  variant?: LoadingVariant;
  message?: string;
  progress?: number;
  showProgress?: boolean;
}

// Cinematic loading messages
const loadingMessages = [
  'Loading anime history...',
  'Preparing timeline...',
  'Gathering cultural data...',
  'Initializing experience...',
  'Loading legendary moments...',
  'Connecting eras...',
  'Preparing visual journey...',
  'Loading studio archives...'
];

export default function Loading({ 
  variant = 'filmReel', 
  message,
  progress,
  showProgress = false 
}: LoadingProps = {}) {
  const [currentMessage, setCurrentMessage] = useState(message || loadingMessages[0]);
  const [dots, setDots] = useState('');

  useEffect(() => {
    // Rotate loading messages
    if (!message) {
      const messageInterval = setInterval(() => {
        setCurrentMessage(prev => {
          const currentIndex = loadingMessages.indexOf(prev);
          const nextIndex = (currentIndex + 1) % loadingMessages.length;
          return loadingMessages[nextIndex];
        });
      }, 2000);

      return () => clearInterval(messageInterval);
    }
    // Return undefined for the case when message exists
    return undefined;
  }, [message]);

  useEffect(() => {
    // Animated dots for text
    const dotsInterval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(dotsInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black animate-pulse" />
        
        {/* Film grain texture */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center space-y-8 max-w-md mx-auto px-4">
        
        {/* Loading Animation based on variant */}
        <div className="flex justify-center">
          {variant === 'dots' && <DotsLoader />}
          {variant === 'filmReel' && <FilmReelLoader />}
          {variant === 'timeline' && <TimelineLoader />}
        </div>

        {/* Loading Message */}
        <div className="space-y-2">
          <p className="text-xl font-medium text-white">
            {currentMessage}{dots}
          </p>
          <p className="text-sm text-gray-400">
            Preparing your cinematic journey through anime history
          </p>
        </div>

        {/* Progress Bar (if enabled) */}
        {showProgress && (
          <div className="w-full max-w-xs mx-auto">
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>Loading</span>
              <span>{progress || 0}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div 
                className="h-2 bg-gradient-to-r from-gold-400 to-blue-400 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress || 0}%` }}
              />
            </div>
          </div>
        )}

        {/* Subtitle */}
        <p className="text-xs text-gray-500 uppercase tracking-wider">
          125 Years of Animation Excellence
        </p>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes slide-in {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }

        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

// Dots Loader Component
function DotsLoader() {
  return (
    <div className="flex space-x-2">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-3 h-3 bg-gold-400 rounded-full animate-bounce"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );
}

// Film Reel Loader Component
function FilmReelLoader() {
  return (
    <div className="relative w-20 h-20">
      {/* Outer ring */}
      <div className="absolute inset-0 border-4 border-gold-400 rounded-full animate-spin-slow" />
      
      {/* Inner ring */}
      <div className="absolute inset-2 border-2 border-blue-400 rounded-full animate-spin-slow" 
           style={{ animationDirection: 'reverse' }} />
      
      {/* Center dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse-scale" />
      </div>
      
      {/* Film holes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gray-600 rounded-full"
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-8px)`,
          }}
        />
      ))}
    </div>
  );
}

// Timeline Loader Component
function TimelineLoader() {
  return (
    <div className="w-64 h-8 relative bg-gray-800 rounded-full overflow-hidden">
      {/* Background track */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800" />
      
      {/* Moving progress indicator */}
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gold-400 to-blue-400 rounded-full animate-pulse">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
          style={{ animation: 'slide-in 2s ease-in-out infinite' }}
        />
      </div>
      
      {/* Era markers */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-600 rounded-full"
          style={{ left: `${(i + 1) * 15}%` }}
        />
      ))}
    </div>
  );
}

// Skeleton Loading Components for different sections
export function HeroSkeleton() {
  return (
    <div className="h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
      <div className="text-center space-y-6 max-w-4xl mx-auto px-4">
        <div className="w-96 h-12 bg-gray-700 rounded animate-pulse mx-auto" />
        <div className="w-64 h-6 bg-gray-800 rounded animate-pulse mx-auto" />
        <div className="flex justify-center space-x-4 mt-8">
          <div className="w-32 h-12 bg-gold-600 rounded animate-pulse" />
          <div className="w-32 h-12 bg-gray-700 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function TimelineSkeleton() {
  return (
    <div className="min-h-screen p-8 space-y-12">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex items-center space-x-8">
          <div className="w-24 h-24 bg-gray-800 rounded-full animate-pulse flex-shrink-0" />
          <div className="flex-1 space-y-4">
            <div className="w-48 h-8 bg-gray-700 rounded animate-pulse" />
            <div className="space-y-2">
              <div className="w-full h-4 bg-gray-800 rounded animate-pulse" />
              <div className="w-3/4 h-4 bg-gray-800 rounded animate-pulse" />
              <div className="w-1/2 h-4 bg-gray-800 rounded animate-pulse" />
            </div>
          </div>
          <div className="w-64 h-40 bg-gray-800 rounded-lg animate-pulse flex-shrink-0" />
        </div>
      ))}
    </div>
  );
}

export function StatsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-gray-800 rounded-lg p-6 space-y-4">
          <div className="w-12 h-12 bg-gray-700 rounded animate-pulse" />
          <div className="w-24 h-8 bg-gold-600 rounded animate-pulse" />
          <div className="w-full h-4 bg-gray-700 rounded animate-pulse" />
          <div className="w-3/4 h-4 bg-gray-700 rounded animate-pulse" />
        </div>
      ))}
    </div>
  );
}