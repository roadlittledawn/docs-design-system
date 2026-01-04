import { ReactNode } from "react";

export type CalloutVariant = "caution" | "important" | "tip" | "course";

interface CalloutProps {
  variant: CalloutVariant;
  title?: string | null;
  children: ReactNode;
  className?: string;
}

const defaultTitles: Record<CalloutVariant, string> = {
  caution: "Caution",
  important: "Important",
  tip: "Tip",
  course: "Course",
};

export function Callout({
  variant,
  title,
  children,
  className = "",
}: CalloutProps) {
  const calloutClasses = [
    "dds-callout",
    `dds-callout-${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const titleClasses = ["dds-callout-title", `dds-callout-title-${variant}`].join(
    " "
  );

  return (
    <div className={calloutClasses}>
      {title !== null && (
        <h4 className={titleClasses}>
          {title || defaultTitles[variant]}
        </h4>
      )}
      {children}
    </div>
  );
}
