import React from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4;
  children?: React.ReactNode;
  className?: string;
}

export function Heading({ level, children, className = '' }: HeadingProps) {
  const baseStyles = 'font-bold text-gray-900';
  
  const levelStyles = {
    1: 'text-4xl mb-6 mt-8',
    2: 'text-3xl mb-5 mt-7',
    3: 'text-2xl mb-4 mt-6',
    4: 'text-xl mb-3 mt-5',
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const styles = `${baseStyles} ${levelStyles[level]} ${className}`;

  return <Tag className={styles}>{children}</Tag>;
}
