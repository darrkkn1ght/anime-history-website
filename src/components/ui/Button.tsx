import React from 'react';
import { clsx } from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className,
  children,
  disabled,
  ...props
}) => {
  const baseClasses = [
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'transition-all',
    'duration-300',
    'ease-out',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-offset-gray-900',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:transform-none',
    'group',
    'overflow-hidden'
  ];

  const variantClasses = {
    primary: [
      'bg-gradient-to-r',
      'from-yellow-400',
      'via-yellow-500',
      'to-amber-500', // Gold gradient
      'text-gray-900',
      'font-bold',
      'shadow-lg',
      'shadow-yellow-500/25',
      'hover:shadow-xl',
      'hover:shadow-yellow-500/40',
      'hover:scale-105',
      'active:scale-95',
      'focus:ring-yellow-400',
      'border-0'
    ],
    secondary: [
      'bg-gray-800/40',
      'backdrop-blur-lg',
      'border',
      'border-gray-700/50',
      'text-gray-100',
      'shadow-lg',
      'shadow-gray-900/25',
      'hover:bg-gray-700/60',
      'hover:border-gray-600/70',
      'hover:shadow-xl',
      'hover:shadow-gray-900/40',
      'hover:scale-105',
      'active:scale-95',
      'focus:ring-gray-400'
    ],
    ghost: [
      'bg-transparent',
      'text-gray-300',
      'border-0',
      'hover:bg-gray-800/30',
      'hover:text-white',
      'hover:scale-105',
      'active:scale-95',
      'focus:ring-gray-400'
    ]
  };

  const sizeClasses = {
    sm: ['px-4', 'py-2', 'text-sm', 'rounded-lg', 'min-h-[36px]'],
    md: ['px-6', 'py-3', 'text-base', 'rounded-xl', 'min-h-[44px]'],
    lg: ['px-8', 'py-4', 'text-lg', 'rounded-2xl', 'min-h-[52px]']
  };

  const combinedClasses = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  return (
    <button
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Shine effect overlay for primary variant */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
      )}
      
      {/* Glass reflection for secondary variant */}
      {variant === 'secondary' && (
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      
      {/* Loading spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* Button content */}
      <span className={clsx(
        'relative z-10 flex items-center gap-2',
        isLoading && 'opacity-0'
      )}>
        {children}
      </span>
      
      {/* Ripple effect container */}
      <div className="absolute inset-0 overflow-hidden rounded-inherit">
        <div className="absolute inset-0 scale-0 bg-white/20 rounded-full group-active:scale-100 transition-transform duration-200 ease-out origin-center" />
      </div>
    </button>
  );
};

export default Button;