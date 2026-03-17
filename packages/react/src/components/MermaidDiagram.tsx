'use client';

import { useEffect, useRef, useState, useCallback } from "react";
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
  const idCounter = useRef(0);

  const renderDiagram = useCallback(async () => {
    const dark = isDarkMode(containerRef.current);
    mermaid.initialize({
      startOnLoad: false,
      theme: dark ? "dark" : "default",
      securityLevel: "strict",
    });

    const id = `dds-mermaid-${idCounter.current++}`;
    try {
      const result = await mermaid.render(id, chart);
      setSvg(result.svg);
      setError(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to render diagram");
    } finally {
      document.getElementById(id)?.remove();
    }
  }, [chart]);

  useEffect(() => {
    renderDiagram();
  }, [renderDiagram]);

  useEffect(() => {
    const observer = new MutationObserver(() => renderDiagram());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-dds-theme"],
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class", "data-dds-theme"],
    });

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const mqHandler = () => renderDiagram();
    mq.addEventListener("change", mqHandler);

    return () => {
      observer.disconnect();
      mq.removeEventListener("change", mqHandler);
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
