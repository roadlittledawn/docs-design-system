import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ href, children, className = '' }: LinkProps) {
  const isExternal = href.startsWith('http://') || href.startsWith('https://');
  const baseStyles = 'text-blue-600 hover:text-blue-800 underline decoration-blue-300 hover:decoration-blue-500 transition-colors';
  const styles = `${baseStyles} ${className}`;

  if (isExternal) {
    return (
      <a 
        href={href} 
        className={styles}
        target="_blank" 
        rel="noopener noreferrer"
      >
        {children}
        <svg 
          className="inline-block w-4 h-4 ml-1 mb-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
          />
        </svg>
      </a>
    );
  }

  return <a href={href} className={styles}>{children}</a>;
}
