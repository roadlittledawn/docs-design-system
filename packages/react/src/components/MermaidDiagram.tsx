'use client';

import { useEffect, useId, useRef, useState, useCallback } from "react";
import mermaid from "mermaid";

export interface MermaidDiagramProps {
  /** Mermaid diagram definition string */
  chart: string;
  /** Additional CSS classes */
  className?: string;
}

function isDarkMode(el?: Element | null): boolean {
  const doc = document.documentElement;
  const body = document.body;

  // Explicit light-mode opt-out takes priority over everything, including OS preference
  if (
    doc.classList.contains("dds-light") ||
    doc.dataset.ddsTheme === "light" ||
    body.classList.contains("dds-light") ||
    body.dataset.ddsTheme === "light" ||
    !!(el && el.closest(".dds-light, [data-dds-theme='light']"))
  ) {
    return false;
  }

  return (
    doc.classList.contains("dds-dark") ||
    doc.dataset.ddsTheme === "dark" ||
    body.classList.contains("dds-dark") ||
    body.dataset.ddsTheme === "dark" ||
    !!(el && el.closest(".dds-dark, [data-dds-theme='dark']")) ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export function MermaidDiagram({ chart, className = "" }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Stable unique prefix per instance — prevents duplicate IDs across multiple MermaidDiagram components
  const instanceId = useId();
  // Monotonically-increasing generation counter — stale async resolutions are discarded
  const renderGen = useRef(0);
  // Last known dark-mode state — prevents re-renders when attributes change but theme didn't flip
  const lastDark = useRef<boolean | null>(null);

  const renderDiagram = useCallback(async () => {
    const dark = isDarkMode(containerRef.current);
    lastDark.current = dark;

    const generation = ++renderGen.current;

    mermaid.initialize({
      startOnLoad: false,
      theme: dark ? "dark" : "default",
      securityLevel: "strict",
    });

    // Sanitize useId output (e.g. ":r0:") into a valid DOM ID segment
    const safePrefix = instanceId.replace(/[^a-zA-Z0-9]/g, "");
    const id = `dds-mermaid-${safePrefix}-${generation}`;

    try {
      const result = await mermaid.render(id, chart);
      // Discard result if a newer render has since been requested
      if (generation !== renderGen.current) return;
      setSvg(result.svg);
      setError(null);
    } catch (err: unknown) {
      if (generation !== renderGen.current) return;
      setError(err instanceof Error ? err.message : "Failed to render diagram");
    } finally {
      document.getElementById(id)?.remove();
    }
  }, [chart, instanceId]);

  useEffect(() => {
    renderDiagram();
  }, [renderDiagram]);

  useEffect(() => {
    // Only re-render when the effective dark/light state actually flips
    const reRenderIfThemeChanged = () => {
      const dark = isDarkMode(containerRef.current);
      if (dark === lastDark.current) return;
      renderDiagram();
    };

    const observer = new MutationObserver(reRenderIfThemeChanged);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-dds-theme"],
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class", "data-dds-theme"],
    });

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", reRenderIfThemeChanged);

    return () => {
      observer.disconnect();
      mq.removeEventListener("change", reRenderIfThemeChanged);
    };
  }, [renderDiagram]);

  const classes = ["dds-mermaid", className].filter(Boolean).join(" ");

  if (error) {
    return (
      <div className={`${classes} dds-mermaid-error`} role="alert">
        <p className="dds-mermaid-error-text">Diagram error: {error}</p>
      </div>
    );
  }

  return (
    <div
      className={classes}
      ref={containerRef}
      role="img"
      aria-label="Mermaid diagram"
      dangerouslySetInnerHTML={svg ? { __html: svg } : undefined}
    />
  );
}
