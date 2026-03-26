import { ReactNode, CSSProperties } from 'react';
import './ThumbnailGrid.css';

export interface ThumbnailGridProps {
  /**
   * Number of columns in the grid at full width.
   * Responsive breakpoints collapse the grid to fewer columns on small screens.
   * @default 3
   */
  columns?: 1 | 2 | 3 | 4;

  /**
   * Override the gap between thumbnails. Accepts any CSS `gap` value
   * (e.g. `'0.5rem'`, `'1rem'`). Defaults to the `--dds-thumbnail-grid-gap`
   * design token (1 rem).
   */
  gap?: string;

  /** Grid content — typically `Image` components or `<img>` elements */
  children: ReactNode;

  /** Additional CSS classes to apply to the grid container */
  className?: string;
}

export function ThumbnailGrid({
  columns = 3,
  gap,
  children,
  className = '',
}: ThumbnailGridProps) {
  const classNames = [
    'dds-thumbnail-grid',
    `dds-thumbnail-grid-${columns}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const style: CSSProperties = gap ? { gap } : {};

  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
}
