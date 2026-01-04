import { ReactNode, useState, useRef, useEffect } from "react";

interface CollapserProps {
  title: string | ReactNode;
  id?: string;
  defaultOpen?: boolean;
  children: ReactNode;
  className?: string;
}

export function Collapser({
  title,
  id,
  defaultOpen = false,
  children,
  className = "",
}: CollapserProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const collapserClasses = ["dds-collapser", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={collapserClasses}>
      <button
        onClick={toggleOpen}
        type="button"
        className="dds-collapser-button"
        aria-expanded={isOpen}
      >
        <h5 id={id} className="dds-collapser-title">
          {title}
        </h5>
        <svg
          className={`dds-collapser-icon ${isOpen ? "dds-collapser-icon-open" : ""}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      <div
        className="dds-collapser-content-wrapper"
        style={{
          height: isOpen ? height : 0,
        }}
      >
        <div ref={contentRef} className="dds-collapser-content">
          {children}
        </div>
      </div>
    </div>
  );
}
