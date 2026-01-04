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
  const Component = variant === 'p' || variant === 'caption' ? 'p' : variant;
  const classNames = `dds-typography dds-typography-${variant} ${className}`.trim();
  
  return React.createElement(Component, {
    className: classNames
  }, children);
};
