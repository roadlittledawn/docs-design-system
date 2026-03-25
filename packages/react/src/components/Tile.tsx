import { ReactNode } from "react";
import "./Tile.css";

export interface TileProps {
  /** Tile heading text (required) */
  title: string;

  /**
   * Optional icon to display on the left side.
   * Pass a rendered icon component (e.g. `<YourIcon />`).
   */
  icon?: ReactNode;

  /** Optional short description displayed below the title */
  description?: string;

  /** Optional link URL. When provided, the entire tile becomes clickable. */
  href?: string;

  /**
   * Show an animated arrow in the lower-right corner to signal the tile is navigable.
   * Best used together with `href`.
   * @default false
   */
  showArrow?: boolean;

  /** Additional CSS classes */
  className?: string;
}

export function Tile({
  title,
  icon,
  description,
  href,
  showArrow = false,
  className = "",
}: TileProps) {
  const tileClasses = [
    "dds-tile",
    href ? "dds-tile-clickable" : "",
    showArrow ? "dds-tile-has-arrow" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const arrowEl = showArrow ? (
    <span className="dds-tile-arrow" aria-hidden="true">
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 8H14M10 4L14 8L10 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  ) : null;

  const content = (
    <div className={tileClasses}>
      <div className="dds-tile-body">
        {icon && (
          <span className="dds-tile-icon" aria-hidden="true">
            {icon}
          </span>
        )}
        <div className="dds-tile-text">
          <span className="dds-tile-title">{title}</span>
          {description && (
            <span className="dds-tile-desc">{description}</span>
          )}
        </div>
      </div>
      {arrowEl}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="dds-tile-link">
        {content}
      </a>
    );
  }

  return content;
}
