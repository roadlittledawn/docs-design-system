import { ReactNode } from "react";
import "./TileGrid.css";

export interface TileGridProps {
  /**
   * Number of columns in the grid at full width.
   * Responsive breakpoints apply automatically.
   * @default 4
   */
  columns?: 3 | 4 | 5 | 6;

  /** Grid content (typically Tile components) */
  children: ReactNode;

  /** Additional CSS classes */
  className?: string;
}

export function TileGrid({
  columns = 4,
  children,
  className = "",
}: TileGridProps) {
  const classNames = [
    "dds-tile-grid",
    `dds-tile-grid-${columns}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classNames}>{children}</div>;
}
