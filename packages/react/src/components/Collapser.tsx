'use client';

import { ReactNode, useState } from "react";
import { useKeyPress } from "../hooks/useKeyPress";

export interface CollapserProps {
  /** Title text or element displayed in the collapsible header */
  title: string | ReactNode;

  /** Optional ID for the title element */
  id?: string;

  /**
   * Whether the collapser should be open by default (uncontrolled)
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * Controlled open state (used by CollapserGroup)
   */
  open?: boolean;

  /**
   * Callback when toggle is clicked (used by CollapserGroup)
   */
  onToggle?: () => void;

  /** Content to show/hide when toggling */
  children: ReactNode;

  /** Additional CSS classes */
  className?: string;

  /**
   * Alignment of the title within the header.
   * Use 'right' for right-aligned titles, typically paired with an icon on the left.
   * @default 'left'
   */
  align?: 'left' | 'right';

  /**
   * Optional icon or React element rendered on the left side of the header,
   * before the title text. Useful for visual identification of each section.
   */
  icon?: ReactNode;

  /**
   * Numeric step label shown on the far left of the header.
   * Automatically injected by `CollapserGroup` when `numbered` is true;
   * can also be set manually on individual collapsers.
   * Use `--dds-collapser-step-number-color` to customise its colour.
   */
  stepNumber?: number;
}

export function Collapser({
  title,
  id,
  defaultOpen = false,
  open: controlledOpen,
  onToggle,
  children,
  className = "",
  align = 'left',
  icon,
  stepNumber,
}: CollapserProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

  // Keyboard shortcuts: 's' or 'f' to show, 'h' to hide
  useKeyPress(['s', 'f', 'h'], (e) => {
    if (!isControlled) {
      setUncontrolledOpen(e.key !== 'h');
    }
  });

  const toggleOpen = () => {
    if (onToggle) {
      onToggle();
    } else {
      setUncontrolledOpen(!uncontrolledOpen);
    }
  };

  const collapserClasses = [
    "dds-collapser",
    align === 'right' ? "dds-collapser--align-right" : "",
    className,
  ]
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
        {stepNumber !== undefined && (
          <span className="dds-collapser-step-number">{stepNumber}.</span>
        )}
        {icon && (
          <span className="dds-collapser-header-icon" aria-hidden="true">
            {icon}
          </span>
        )}
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
        className={`dds-collapser-content-wrapper${isOpen ? " dds-collapser-content-wrapper--open" : ""}`}
      >
        <div className="dds-collapser-content">
          {children}
        </div>
      </div>
    </div>
  );
}

Collapser.displayName = 'Collapser';
