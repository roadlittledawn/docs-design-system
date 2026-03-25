import { CSSProperties, ReactNode } from "react";

export interface CardProps {
  /** Optional title displayed at the top of the card */
  title?: string;

  /**
   * Color of the title text
   * @default 'gray'
   */
  titleColor?: "blue" | "green" | "purple" | "red" | "yellow" | "gray";

  /**
   * Background color of the card
   * @default 'white'
   */
  backgroundColor?:
    | "blue"
    | "green"
    | "purple"
    | "red"
    | "yellow"
    | "gray"
    | "white";

  /** Optional link URL. When provided, the entire card becomes clickable */
  href?: string;

  /**
   * Optional icon to display. Pass a rendered icon component (e.g. `<YourIcon />`).
   * In MDX, the consuming site's component map resolves icon name strings to rendered
   * components before passing them here.
   */
  icon?: ReactNode;

  /**
   * Placement of the icon within the card.
   * - `"left"` — icon centered vertically on the left, title + content on the right
   * - `"top-left"` — icon above title and content, flush left
   * - `"top-center"` — icon above title and content, horizontally centered
   * @default 'top-left'
   */
  iconPlacement?: "left" | "top-left" | "top-center";

  /**
   * Override the icon container size (width and height). Accepts any valid CSS length value (e.g. `"2rem"`, `"48px"`).
   * Defaults to the `--dds-card-icon-size` token (`1.5rem`).
   */
  iconSize?: string;

  /**
   * Show an animated arrow in the lower-right corner to signal the card is navigable.
   * Best used together with `href`. The arrow animates with a springy motion on hover.
   * @default false
   */
  showArrow?: boolean;

  /**
   * Constrain the card's maximum width. Accepts any valid CSS length value (e.g. `"400px"`, `"32rem"`).
   * Useful when a card fills a wide column but its content looks better at a smaller size.
   */
  maxWidth?: string;

  /**
   * When true, horizontally centers the card within its container.
   * Most useful in combination with `maxWidth`.
   * @default false
   */
  centered?: boolean;

  /** Card content */
  children: ReactNode;

  /** Additional CSS classes */
  className?: string;
}

export function Card({
  title,
  titleColor = "gray",
  backgroundColor = "white",
  href,
  icon,
  iconPlacement = "top-left",
  iconSize,
  showArrow = false,
  maxWidth,
  centered = false,
  children,
  className = "",
}: CardProps) {
  const cardClasses = [
    "dds-card",
    `dds-card-bg-${backgroundColor}`,
    href ? "dds-card-clickable" : "",
    showArrow ? "dds-card-has-arrow" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const titleClasses = ["dds-card-title", `dds-card-title-${titleColor}`].join(
    " ",
  );

  const textClasses =
    backgroundColor !== "white"
      ? `dds-card-text-${backgroundColor}`
      : "dds-card-text-gray";

  const iconEl = icon ? (
    <span
      className={[
        "dds-card-icon",
        iconPlacement === "top-center" ? "dds-card-icon-top-center" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        ...(iconSize && { width: iconSize, height: iconSize }),
      }}
      aria-hidden="true"
    >
      {icon}
    </span>
  ) : null;

  const arrowEl = showArrow ? (
    <span className="dds-card-arrow" aria-hidden="true">
      <svg
        width="16"
        height="16"
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

  const bodyContent =
    icon && iconPlacement === "left" ? (
      <div className="dds-card-icon-row">
        {iconEl}
        <div className="dds-card-icon-content">
          {title && <h3 className={titleClasses}>{title}</h3>}
          <div className={textClasses}>{children}</div>
        </div>
      </div>
    ) : (
      <>
        {iconEl}
        {title && <h3 className={titleClasses}>{title}</h3>}
        <div className={textClasses}>{children}</div>
      </>
    );

  const outerStyle: CSSProperties = {
    ...(maxWidth && { maxWidth }),
    ...(centered && { marginLeft: "auto", marginRight: "auto" }),
  };

  const content = (
    <div className={cardClasses} style={!href ? outerStyle : undefined}>
      {bodyContent}
      {arrowEl}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="no-text-decoration"
        style={Object.keys(outerStyle).length > 0 ? outerStyle : undefined}
      >
        {content}
      </a>
    );
  }

  return content;
}
