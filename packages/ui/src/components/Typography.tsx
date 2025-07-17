import React from 'react';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'caption';
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({ 
  variant = 'p', 
  children, 
  className = '' 
}) => {
  const baseClasses = 'text-gray-900';
  
  const variantClasses = {
    h1: 'text-4xl font-bold leading-tight',
    h2: 'text-3xl font-semibold leading-tight',
    h3: 'text-2xl font-medium leading-tight',
    h4: 'text-xl font-medium leading-tight',
    p: 'text-base leading-relaxed',
    caption: 'text-sm text-gray-600'
  };
  
  const Component = variant === 'p' || variant === 'caption' ? 'p' : variant;
  
  return React.createElement(Component, {
    className: `${baseClasses} ${variantClasses[variant]} ${className}`
  }, children);
};