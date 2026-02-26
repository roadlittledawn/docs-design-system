import {
  ReactNode,
  useRef,
  useId,
  useCallback,
  useEffect,
} from "react";

export interface GlossaryData {
  /** The canonical term (used for semantic markup) */
  term: string;
  /** Display title shown in the popover header */
  title: string;
  /**
   * Definition content. Accepts ReactNode so consumers can pre-render
   * markdown (e.g. via react-markdown) or pass arbitrary JSX.
   */
  definition: ReactNode;
}

export interface PreviewData {
  /** Page or article title */
  title: string;
  /** Short excerpt or summary */
  excerpt?: ReactNode;
  /** Optional featured image URL */
  imageUrl?: string;
  /** Optional URL to the full content */
  href?: string;
  /** Link text. Default: "Read more" */
  linkText?: string;
}

export type PopoverPlacement =
  | "auto"
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end";

export type PopoverSize = "sm" | "md" | "lg";

export interface PopoverProps {
  /**
   * Arbitrary React content to render inside the popover.
   * Use when built-in templates don't fit your use case.
   */
  content?: ReactNode;

  /** Render a styled glossary definition popover */
  glossary?: GlossaryData;

  /** Render a styled content preview popover (Wikipedia-style) */
  preview?: PreviewData;

  /**
   * Preferred placement relative to the trigger.
   * "auto" detects available viewport space.
   * @default "auto"
   */
  placement?: PopoverPlacement;

  /**
   * Popover width.
   * sm = 240px, md = 320px, lg = 480px
   * @default "md"
   */
  size?: PopoverSize;

  /**
   * Milliseconds to wait before showing the popover on hover.
   * @default 200
   */
  showDelay?: number;

  /**
   * Milliseconds to wait before hiding the popover on hover-out.
   * @default 150
   */
  hideDelay?: number;

  /** The trigger element — the text or content that reveals the popover on hover/tap */
  children: ReactNode;

  /** Additional CSS classes on the trigger wrapper */
  className?: string;
}

function GlossaryTemplate({ data }: { data: GlossaryData }) {
  return (
    <div className="dds-popover-glossary">
      <span className="dds-popover-eyebrow">Glossary</span>
      <p className="dds-popover-title">{data.title}</p>
      <div className="dds-popover-body">{data.definition}</div>
    </div>
  );
}

function PreviewTemplate({ data }: { data: PreviewData }) {
  return (
    <div className="dds-popover-preview">
      {data.imageUrl && (
        <div className="dds-popover-preview-image-wrap">
          <img
            className="dds-popover-preview-image"
            src={data.imageUrl}
            alt=""
            aria-hidden="true"
          />
        </div>
      )}
      <div className="dds-popover-preview-body">
        <p className="dds-popover-title">{data.title}</p>
        {data.excerpt && (
          <div className="dds-popover-body">{data.excerpt}</div>
        )}
        {data.href && (
          <a
            className="dds-popover-preview-link"
            href={data.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.linkText ?? "Read more"} →
          </a>
        )}
      </div>
    </div>
  );
}

/** Resolve the actual placement given preferred placement and available space */
function resolvePlacement(
  triggerRect: DOMRect,
  preferred: PopoverPlacement
): PopoverPlacement {
  if (preferred !== "auto") return preferred;

  const spaceAbove = triggerRect.top;
  const spaceBelow = window.innerHeight - triggerRect.bottom;

  // Prefer top if there's more space above (and at least 180px)
  if (spaceAbove > spaceBelow && spaceAbove >= 180) return "top";
  return "bottom";
}

/** Compute pixel coordinates for the popover given trigger rect and placement */
function computePosition(
  triggerRect: DOMRect,
  popoverEl: HTMLElement,
  placement: PopoverPlacement
): { top: number; left: number } {
  const popoverWidth = popoverEl.offsetWidth;
  const popoverHeight = popoverEl.offsetHeight;
  const gap = 8; // px gap between trigger and popover
  const viewportPad = 8; // min distance from viewport edges

  let top = 0;
  let left = 0;

  const triggerCenterX = triggerRect.left + triggerRect.width / 2;

  // Vertical
  const isTop = placement.startsWith("top");
  if (isTop) {
    top = triggerRect.top - popoverHeight - gap;
  } else {
    top = triggerRect.bottom + gap;
  }

  // Horizontal
  if (placement.endsWith("-start")) {
    left = triggerRect.left;
  } else if (placement.endsWith("-end")) {
    left = triggerRect.right - popoverWidth;
  } else {
    // center-aligned
    left = triggerCenterX - popoverWidth / 2;
  }

  // Clamp to viewport horizontally
  left = Math.max(
    viewportPad,
    Math.min(left, window.innerWidth - popoverWidth - viewportPad)
  );

  // Flip vertically if overflowing
  if (isTop && top < viewportPad) {
    top = triggerRect.bottom + gap;
  } else if (!isTop && top + popoverHeight > window.innerHeight - viewportPad) {
    top = triggerRect.top - popoverHeight - gap;
  }

  return { top, left };
}

export function Popover({
  content,
  glossary,
  preview,
  placement = "auto",
  size = "md",
  showDelay = 200,
  hideDelay = 150,
  children,
  className = "",
}: PopoverProps) {
  const id = useId();
  const popoverId = `dds-popover-${id.replace(/:/g, "")}`;

  const triggerRef = useRef<HTMLSpanElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const showTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (showTimerRef.current) clearTimeout(showTimerRef.current);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
  }, []);

  const positionPopover = useCallback(() => {
    const trigger = triggerRef.current;
    const popover = popoverRef.current;
    if (!trigger || !popover) return;

    // The Popover API renders in the top layer, outside the normal DOM tree,
    // so it doesn't inherit class-based dark mode from ancestor elements.
    // Mirror the theme onto the popover element itself.
    const isDark =
      document.documentElement.classList.contains("dds-dark") ||
      document.documentElement.dataset.ddsTheme === "dark" ||
      document.body.classList.contains("dds-dark") ||
      document.body.dataset.ddsTheme === "dark" ||
      !!trigger.closest(".dds-dark, [data-dds-theme='dark']");
    if (isDark) {
      popover.setAttribute("data-dds-theme", "dark");
    } else {
      popover.removeAttribute("data-dds-theme");
    }

    const triggerRect = trigger.getBoundingClientRect();
    const resolved = resolvePlacement(triggerRect, placement);
    const { top, left } = computePosition(triggerRect, popover, resolved);

    popover.style.top = `${top}px`;
    popover.style.left = `${left}px`;

    // Set placement data attribute for CSS arrow/animation direction
    const baseDir = resolved.startsWith("top") ? "top" : "bottom";
    popover.setAttribute("data-placement", baseDir);
  }, [placement]);

  const showPopover = useCallback(() => {
    clearTimers();
    showTimerRef.current = setTimeout(() => {
      const popover = popoverRef.current;
      if (!popover) return;
      // Position before showing so it doesn't flash in the wrong spot
      popover.style.visibility = "hidden";
      try {
        popover.showPopover();
      } catch {
        // Popover API not supported — fall back to display toggle
        popover.style.display = "block";
      }
      positionPopover();
      popover.style.visibility = "";
    }, showDelay);
  }, [clearTimers, showDelay, positionPopover]);

  const hidePopover = useCallback(() => {
    clearTimers();
    hideTimerRef.current = setTimeout(() => {
      const popover = popoverRef.current;
      if (!popover) return;
      try {
        popover.hidePopover();
      } catch {
        popover.style.display = "none";
      }
    }, hideDelay);
  }, [clearTimers, hideDelay]);

  // Reposition on scroll/resize while open
  useEffect(() => {
    const handleReposition = () => {
      const popover = popoverRef.current;
      if (!popover) return;
      // Only reposition if visible
      if (popover.matches(":popover-open")) positionPopover();
    };
    window.addEventListener("scroll", handleReposition, { passive: true });
    window.addEventListener("resize", handleReposition, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleReposition);
      window.removeEventListener("resize", handleReposition);
    };
  }, [positionPopover]);

  // Cleanup timers on unmount
  useEffect(() => () => clearTimers(), [clearTimers]);

  const triggerClasses = ["dds-popover-trigger", className]
    .filter(Boolean)
    .join(" ");

  const popoverClasses = [
    "dds-popover",
    `dds-popover-${size}`,
  ]
    .filter(Boolean)
    .join(" ");

  // Resolve which content to render
  const popoverContent = content ?? (glossary ? (
    <GlossaryTemplate data={glossary} />
  ) : preview ? (
    <PreviewTemplate data={preview} />
  ) : null);

  if (!popoverContent) return <>{children}</>;

  return (
    <>
      <span
        ref={triggerRef}
        className={triggerClasses}
        onMouseEnter={showPopover}
        onMouseLeave={hidePopover}
        onFocus={showPopover}
        onBlur={hidePopover}
        // Touch: toggle on tap
        onClick={() => {
          const popover = popoverRef.current;
          if (!popover) return;
          try {
            popover.togglePopover();
            if (popover.matches(":popover-open")) positionPopover();
          } catch {
            const isVisible = popover.style.display === "block";
            popover.style.display = isVisible ? "none" : "block";
            if (!isVisible) positionPopover();
          }
        }}
        aria-describedby={popoverId}
        tabIndex={0}
      >
        {children}
      </span>

      <div
        ref={popoverRef}
        id={popoverId}
        {...({ popover: "auto" } as object)}
        className={popoverClasses}
        onMouseEnter={clearTimers}
        onMouseLeave={hidePopover}
        role="tooltip"
      >
        {popoverContent}
      </div>
    </>
  );
}
