import React from "react";
import slugify from "../utils/slugify";

interface HeadingProps {
  /** Optionally override auto-generation of `id` attribute */
  id?: string;

  /** Heading level (h1, h2, h3, or h4) */
  level: 1 | 2 | 3 | 4;

  /** Heading content */
  children?: React.ReactNode;

  /** Additional CSS classes */
  className?: string;
}

export function Heading({ level, children, id, className = "" }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const classNames = `dds-heading dds-heading-${level} ${className}`.trim();
  const generatedId = typeof children === "string" ? slugify({ value: children }) ?? undefined : undefined;
  const idAttr = id ?? generatedId;

  return (
    <Tag
      id={idAttr}
      className={classNames}
    >
      {children}
    </Tag>
  );
}
