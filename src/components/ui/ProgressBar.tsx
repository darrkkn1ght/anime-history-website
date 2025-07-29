'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface ProgressBarProps {
  /** Progress value from 0 to 100 */
  progress: number;
  /** Visual variant of the progress bar */
  variant?: 'primary' | 'secondary' | 'era' | 'timeline';
  /** Size of the progress bar */
  size?: 'sm' | 'md' | 'lg';
  /** Show percentage text */
  showPercentage?: boolean;
  /** Custom label text */
  label?: string;
  /** Animated or static */
  animated?: boolean;
  /** Custom className */
  className?: string;
  /** Era-specific color (for era variant) */
  eraColor?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  variant = 'primary',
  size = 'md',
  showPercentage = false,
  label,
  animated = true,
  className,
  eraColor
}) => {
  // Clamp progress between 0 and 100
  const clampedProgress = Math.max(0, Math.min(100, progress));

  // Size variants
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };

  // Background variants
  const backgroundClasses = {
    primary: 'bg-gray-800/30 backdrop-blur-sm',
    secondary: 'bg-white/10 backdrop-blur-sm',
    era: 'bg-black/20 backdrop-blur-sm',
    timeline: 'bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-md'
  };

  // Progress fill variants
  const fillClasses = {
    primary: 'bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600',
    secondary: 'bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600',
    era: eraColor ? `bg-gradient-to-r from-${eraColor}-400 to-${eraColor}-600` : 'bg-gradient-to-r from-purple-400 to-purple-600',
    timeline: 'bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600'
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  const fillVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${clampedProgress}%`,
      transition: {
        duration: animated ? 1.2 : 0,
        ease: [0.4, 0.0, 0.2, 1],
        delay: 0.2
      }
    }
  };

  return (
    <div className={clsx('w-full', className)}>
      {/* Label and Percentage */}
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span className="text-sm font-medium text-gray-300">
              {label}
            </span>
          )}
          {showPercentage && (
            <motion.span
              className="text-sm font-mono text-amber-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {Math.round(clampedProgress)}%
            </motion.span>
          )}
        </div>
      )}

      {/* Progress Bar Container */}
      <motion.div
        className={clsx(
          'relative overflow-hidden rounded-full',
          sizeClasses[size],
          backgroundClasses[variant]
        )}
        variants={containerVariants}
        initial={animated ? 'hidden' : 'visible'}
        animate="visible"
      >
        {/* Progress Fill */}
        <motion.div
          className={clsx(
            'h-full rounded-full relative overflow-hidden',
            fillClasses[variant]
          )}
          variants={fillVariants}
          initial={animated ? 'hidden' : 'visible'}
          animate="visible"
          style={
            variant === 'era' && eraColor
              ? { background: `linear-gradient(to right, ${eraColor}40, ${eraColor})` }
              : {}
          }
        >
          {/* Animated shine effect */}
          {animated && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'linear'
              }}
            />
          )}
        </motion.div>

        {/* Glow effect for timeline variant */}
        {variant === 'timeline' && (
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-yellow-500/20 to-amber-600/20 blur-sm" />
        )}
      </motion.div>

      {/* Era milestone markers (for timeline variant) */}
      {variant === 'timeline' && (
        <div className="relative mt-1">
          {[0, 20, 40, 60, 80, 100].map((position, index) => (
            <motion.div
              key={position}
              className="absolute w-0.5 h-2 bg-gray-500"
              style={{ left: `${position}%` }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProgressBar;