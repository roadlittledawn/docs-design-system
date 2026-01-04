import React from "react";

interface HeadingProps {
  /** Heading level (h1, h2, h3, or h4) */
  level: 1 | 2 | 3 | 4;

  /** Heading content */
  children?: React.ReactNode;

  /** Additional CSS classes */
  className?: string;
}

export function Heading({ level, children, className = "" }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const classNames = `dds-heading dds-heading-${level} ${className}`.trim();

  return <Tag className={classNames}>{children}</Tag>;
}
