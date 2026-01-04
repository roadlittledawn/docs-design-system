import React from "react";
import "./Heading.css";

interface HeadingProps {
  level: 1 | 2 | 3 | 4;
  children?: React.ReactNode;
  className?: string;
}

export function Heading({ level, children, className = "" }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const classNames = `dds-heading dds-heading-${level} ${className}`.trim();

  return <Tag className={classNames}>{children}</Tag>;
}
