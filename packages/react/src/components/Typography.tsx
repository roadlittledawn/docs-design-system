import React from 'react';

interface TypographyProps {
  /**
   * Typography style variant
   * @default 'p'
   */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'caption';

  /** Text content */
  children: React.ReactNode;

  /** Additional CSS classes */
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
