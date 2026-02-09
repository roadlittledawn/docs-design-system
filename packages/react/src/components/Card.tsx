import { ReactNode } from "react";

interface CardProps {
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
  children,
  className = "",
}: CardProps) {
  const cardClasses = [
    "dds-card",
    `dds-card-bg-${backgroundColor}`,
    href ? "dds-card-clickable" : "",
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

  const content = (
    <div className={cardClasses}>
      {title && <h3 className={titleClasses}>{title}</h3>}
      <div className={textClasses}>{children}</div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="no-text-decoration">
        {content}
      </a>
    );
  }

  return content;
}
