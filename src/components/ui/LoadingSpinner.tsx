'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface LoadingSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'cinematic' | 'minimal' | 'dots' | 'pulse';
  color?: 'amber' | 'blue' | 'white' | 'zinc';
  message?: string;
  fullScreen?: boolean;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  color = 'amber',
  message,
  fullScreen = false,
  className
}) => {
  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    amber: 'border-amber-500',
    blue: 'border-blue-400',
    white: 'border-white',
    zinc: 'border-zinc-400'
  };

  const dotColorClasses = {
    amber: 'bg-amber-500',
    blue: 'bg-blue-400',
    white: 'bg-white',
    zinc: 'bg-zinc-400'
  };

  const messageColorClasses = {
    amber: 'text-amber-300',
    blue: 'text-blue-300',
    white: 'text-white',
    zinc: 'text-zinc-300'
  };

  // Animation variants
  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        ease: 'linear',
        repeat: Infinity
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity
      }
    }
  };

  const dotVariants = {
    animate: (i: number) => ({
      y: [0, -10, 0],
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
        repeat: Infinity,
        delay: i * 0.1
      }
    })
  };

  const cinematicVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        ease: 'linear',
        repeat: Infinity
      }
    }
  };

  const renderSpinner = () => {
    switch (variant) {
      case 'default':
        return (
          <motion.div
            className={clsx(
              'border-2 border-transparent rounded-full',
              `border-t-2 ${colorClasses[color]}`,
              sizeClasses[size]
            )}
            variants={spinnerVariants}
            animate="animate"
          />
        );

      case 'cinematic':
        return (
          <div className="relative">
            {/* Outer ring */}
            <motion.div
              className={clsx(
                'border-2 border-transparent rounded-full',
                `border-t-2 border-r-2 ${colorClasses[color]}`,
                sizeClasses[size]
              )}
              variants={cinematicVariants}
              animate="animate"
            />
            {/* Inner ring */}
            <motion.div
              className={clsx(
                'absolute inset-2 border border-transparent rounded-full',
                `border-b border-l ${colorClasses[color]}/50`
              )}
              variants={cinematicVariants}
              animate="animate"
              style={{ animationDirection: 'reverse' }}
            />
            {/* Center dot */}
            <div className={clsx(
              'absolute inset-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full',
              dotColorClasses[color]
            )} />
          </div>
        );

      case 'minimal':
        return (
          <motion.div
            className={clsx(
              'border border-transparent rounded-full',
              `border-t ${colorClasses[color]}/60`,
              sizeClasses[size]
            )}
            variants={spinnerVariants}
            animate="animate"
          />
        );

      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={clsx(
                  'w-2 h-2 rounded-full',
                  dotColorClasses[color]
                )}
                variants={dotVariants}
                animate="animate"
                custom={i}
              />
            ))}
          </div>
        );

      case 'pulse':
        return (
          <motion.div
            className={clsx(
              'rounded-full border-2',
              colorClasses[color],
              sizeClasses[size]
            )}
            variants={pulseVariants}
            animate="animate"
          />
        );

      default:
        return null;
    }
  };

  const content = (
    <div className={clsx(
      'flex flex-col items-center justify-center space-y-3',
      className
    )}>
      {renderSpinner()}
      {message && (
        <motion.p
          className={clsx(
            'text-sm font-medium',
            messageColorClasses[color]
          )}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {message}
        </motion.p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
        <div className="text-center">
          {content}
        </div>
      </div>
    );
  }

  return content;
};

// Skeleton loading component for content placeholders
export const SkeletonLoader: React.FC<{
  lines?: number;
  height?: string;
  className?: string;
}> = ({ lines = 3, height = 'h-4', className }) => {
  return (
    <div className={clsx('space-y-3', className)}>
      {Array.from({ length: lines }, (_, i) => (
        <motion.div
          key={i}
          className={clsx(
            'bg-zinc-800 rounded animate-pulse',
            height,
            i === lines - 1 ? 'w-3/4' : 'w-full'
          )}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: i * 0.1
          }}
        />
      ))}
    </div>
  );
};

// Film reel loading animation for cinematic theme
export const FilmReelLoader: React.FC<{
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ size = 'md', className }) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  return (
    <div className={clsx('relative', sizeClasses[size], className)}>
      <motion.div
        className="w-full h-full border-4 border-amber-500/30 rounded-full relative"
        animate={{ rotate: 360 }}
        transition={{
          duration: 3,
          ease: 'linear',
          repeat: Infinity
        }}
      >
        {/* Film holes */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-500/50 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 45}deg) translateY(-${size === 'sm' ? '16' : size === 'md' ? '24' : '36'}px) translateX(-50%)`,
              transformOrigin: '50% 0'
            }}
          />
        ))}
        
        {/* Center hub */}
        <div className="absolute inset-1/4 bg-amber-500/20 rounded-full border border-amber-500/40" />
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;