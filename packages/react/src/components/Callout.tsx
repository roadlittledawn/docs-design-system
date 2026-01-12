import { ReactNode } from "react";

export type CalloutVariant = "caution" | "important" | "tip" | "course";

interface CalloutProps {
  /** Visual style variant of the callout (caution, important, tip, or course) */
  variant: CalloutVariant;

  /**
   * Optional title for the callout. Pass null to hide the title completely
   * @default Default title based on variant ("Caution", "Important", "Tip", or "Course")
   */
  title?: string | null;

  /** Callout content */
  children: ReactNode;

  /** Additional CSS classes */
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
