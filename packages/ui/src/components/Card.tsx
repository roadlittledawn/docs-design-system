import { ReactNode } from "react";
import "./Card.css";

interface CardProps {
  title?: string;
  titleColor?: "blue" | "green" | "purple" | "red" | "yellow" | "gray";
  backgroundColor?:
    | "blue"
    | "green"
    | "purple"
    | "red"
    | "yellow"
    | "gray"
    | "white";
  href?: string;
  children: ReactNode;
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
    " "
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
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}
