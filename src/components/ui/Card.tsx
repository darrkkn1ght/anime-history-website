import React from 'react';
import { clsx } from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'era' | 'featured';
  hover?: boolean;
  interactive?: boolean;
  era?: 'origins' | 'foundation' | 'expansion' | 'golden' | 'digital' | 'current';
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  variant = 'default',
  hover = true,
  interactive = false,
  era,
  className,
  children,
  onClick,
  ...props
}) => {
  const baseClasses = [
    'relative',
    'overflow-hidden',
    'transition-all',
    'duration-500',
    'ease-out',
    'group'
  ];

  const variantClasses = {
    default: [
      'bg-gray-900/80',
      'backdrop-blur-sm',
      'border',
      'border-gray-800/50',
      'rounded-xl',
      'shadow-lg',
      'shadow-gray-900/25'
    ],
    glass: [
      'bg-gray-800/20',
      'backdrop-blur-lg',
      'border',
      'border-gray-700/30',
      'rounded-2xl',
      'shadow-2xl',
      'shadow-gray-900/40'
    ],
    era: [
      'bg-gradient-to-br',
      'from-gray-900/90',
      'to-gray-800/90',
      'backdrop-blur-md',
      'border',
      'border-gray-700/40',
      'rounded-3xl',
      'shadow-2xl',
      'shadow-gray-900/50'
    ],
    featured: [
      'bg-gradient-to-br',
      'from-gray-900',
      'to-gray-800',
      'border-2',
      'border-yellow-500/30',
      'rounded-2xl',
      'shadow-2xl',
      'shadow-yellow-500/10'
    ]
  };

  const hoverClasses = hover ? [
    'hover:scale-[1.02]',
    'hover:shadow-2xl',
    'hover:shadow-gray-900/40',
    'hover:-translate-y-1'
  ] : [];

  const interactiveClasses = interactive || onClick ? [
    'cursor-pointer',
    'active:scale-[0.98]',
    'active:translate-y-0'
  ] : [];

  // Era-specific accent colors and effects
  const eraAccents = {
    origins: {
      border: 'hover:border-amber-700/50',
      shadow: 'hover:shadow-amber-900/20',
      accent: 'bg-gradient-to-t from-amber-900/20 to-transparent'
    },
    foundation: {
      border: 'hover:border-blue-600/50',
      shadow: 'hover:shadow-blue-900/20',
      accent: 'bg-gradient-to-t from-blue-900/20 to-transparent'
    },
    expansion: {
      border: 'hover:border-purple-600/50',
      shadow: 'hover:shadow-purple-900/20',
      accent: 'bg-gradient-to-t from-purple-900/20 to-transparent'
    },
    golden: {
      border: 'hover:border-yellow-500/50',
      shadow: 'hover:shadow-yellow-900/20',
      accent: 'bg-gradient-to-t from-yellow-900/20 to-transparent'
    },
    digital: {
      border: 'hover:border-cyan-500/50',
      shadow: 'hover:shadow-cyan-900/20',
      accent: 'bg-gradient-to-t from-cyan-900/20 to-transparent'
    },
    current: {
      border: 'hover:border-emerald-500/50',
      shadow: 'hover:shadow-emerald-900/20',
      accent: 'bg-gradient-to-t from-emerald-900/20 to-transparent'
    }
  };

  const eraAccent = era ? eraAccents[era] : null;

  const combinedClasses = clsx(
    baseClasses,
    variantClasses[variant],
    hoverClasses,
    interactiveClasses,
    eraAccent?.border,
    eraAccent?.shadow,
    className
  );

  return (
    <div
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {/* Era accent overlay */}
      {era && eraAccent && (
        <div className={clsx(
          'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500',
          eraAccent.accent
        )} />
      )}
      
      {/* Glass reflection effect */}
      {(variant === 'glass' || variant === 'era') && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-60" />
      )}
      
      {/* Shimmer effect for featured cards */}
      {variant === 'featured' && (
        <div className="absolute inset-0 -inset-10 opacity-0 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1500 ease-out" />
        </div>
      )}
      
      {/* Content container */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Bottom glow effect */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-gray-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Interactive ripple effect */}
      {(interactive || onClick) && (
        <div className="absolute inset-0 overflow-hidden rounded-inherit">
          <div className="absolute inset-0 scale-0 bg-white/5 rounded-full group-active:scale-150 transition-transform duration-300 ease-out origin-center" />
        </div>
      )}
    </div>
  );
};

// Card sub-components for common layouts
export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  className, 
  children, 
  ...props 
}) => (
  <div className={clsx('mb-4', className)} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ 
  className, 
  children, 
  ...props 
}) => (
  <h3 className={clsx(
    'text-xl font-bold text-gray-100 mb-2 group-hover:text-white transition-colors duration-300',
    className
  )} {...props}>
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ 
  className, 
  children, 
  ...props 
}) => (
  <p className={clsx(
    'text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300',
    className
  )} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  className, 
  children, 
  ...props 
}) => (
  <div className={clsx('mb-4', className)} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  className, 
  children, 
  ...props 
}) => (
  <div className={clsx('mt-auto pt-4 border-t border-gray-700/50', className)} {...props}>
    {children}
  </div>
);

export default Card;