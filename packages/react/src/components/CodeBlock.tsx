import React, { useState, useEffect, useMemo } from "react";
// @ts-ignore - prismjs doesn't have perfect TypeScript support
import Prism from "prismjs";

// Import common languages
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-yaml";

export interface CodeSnippet {
  /** The code content */
  code: string;
  /** Language for syntax highlighting */
  language?: string;
  /** Optional filename to display */
  filename?: string;
  /** Optional tab title (defaults to filename if not provided) */
  tabTitle?: string;
  /** Optional line numbers to highlight (1-indexed) */
  highlightLines?: number[];
}

interface CodeBlockProps {
  /** Single code snippet (for simple usage) */
  code?: string;
  /** Language for syntax highlighting */
  language?: string;
  /** Optional filename to display */
  filename?: string;
  /** Optional line numbers to highlight (1-indexed) */
  highlightLines?: number[];
  /** Multiple code snippets (for tabs) */
  snippets?: CodeSnippet[];
  /** Path to markdown file containing snippets */
  path?: string;
  /** Additional CSS classes */
  className?: string;
}

interface ParsedSnippet {
  code: string;
  language?: string;
  filename?: string;
  tabTitle?: string;
  highlightLines?: number[];
}

/**
 * Parses a markdown file content to extract code snippets
 */
function parseMarkdownSnippets(content: string): ParsedSnippet[] {
  const snippets: ParsedSnippet[] = [];
  const codeBlockRegex = /```(\w+)?\s*([^\n]*)\n([\s\S]*?)```/g;

  let match;
  while ((match = codeBlockRegex.exec(content)) !== null) {
    const language = match[1] || undefined;
    const attributes = match[2].trim();
    const code = match[3].trim();

    // Parse attributes (filename="...", language="...", tabTitle="...", highlightLines="1,2,3")
    const attrs: Record<string, string> = {};
    const attrRegex = /(\w+)="([^"]+)"/g;
    let attrMatch;
    while ((attrMatch = attrRegex.exec(attributes)) !== null) {
      attrs[attrMatch[1]] = attrMatch[2];
    }

    // Parse highlightLines if present
    let highlightLines: number[] | undefined;
    if (attrs.highlightLines) {
      highlightLines = attrs.highlightLines
        .split(",")
        .map((s) => parseInt(s.trim(), 10))
        .filter((n) => !isNaN(n));
    }

    snippets.push({
      code,
      language: attrs.language || language,
      filename: attrs.filename,
      tabTitle: attrs.tabTitle || attrs.filename,
      highlightLines,
    });
  }

  return snippets;
}

/**
 * Groups snippets by language for language dropdown
 */
function groupSnippetsByLanguage(
  snippets: ParsedSnippet[]
): Map<string, ParsedSnippet[]> {
  const grouped = new Map<string, ParsedSnippet[]>();

  for (const snippet of snippets) {
    const lang = snippet.language || "text";
    if (!grouped.has(lang)) {
      grouped.set(lang, []);
    }
    grouped.get(lang)!.push(snippet);
  }

  return grouped;
}

export function CodeBlock({
  code,
  language,
  filename,
  highlightLines,
  snippets,
  path,
  className = "",
}: CodeBlockProps) {
  const [loadedSnippets, setLoadedSnippets] = useState<ParsedSnippet[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeLanguage, setActiveLanguage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Load snippets from path if provided
  useEffect(() => {
    if (!path) return;

    setLoading(true);
    setError(null);

    fetch(path)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load: ${res.statusText}`);
        }
        return res.text();
      })
      .then((content) => {
        const parsed = parseMarkdownSnippets(content);
        setLoadedSnippets(parsed);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [path]);

  // Determine which snippets to use
  const finalSnippets = useMemo(() => {
    if (snippets) {
      return snippets;
    }
    if (loadedSnippets.length > 0) {
      return loadedSnippets;
    }
    if (code) {
      return [
        {
          code,
          language,
          filename,
          tabTitle: filename,
          highlightLines,
        },
      ];
    }
    return [];
  }, [snippets, loadedSnippets, code, language, filename, highlightLines]);

  // Group snippets by language if we have multiple languages
  const snippetsByLanguage = useMemo(() => {
    if (finalSnippets.length === 0) return new Map();

    // Check if we have multiple languages
    const languages = new Set(finalSnippets.map((s) => s.language || "text"));
    if (languages.size <= 1) return new Map();

    return groupSnippetsByLanguage(finalSnippets);
  }, [finalSnippets]);

  // Determine active snippets (filtered by language if language dropdown is active)
  const activeSnippets = useMemo(() => {
    if (activeLanguage && snippetsByLanguage.size > 0) {
      return snippetsByLanguage.get(activeLanguage) || [];
    }
    return finalSnippets;
  }, [finalSnippets, activeLanguage, snippetsByLanguage]);

  // Get current snippet to display
  const currentSnippet = activeSnippets[activeTabIndex] || activeSnippets[0];

  // Highlight code with Prism
  const highlightedCode = useMemo(() => {
    if (!currentSnippet) return "";

    const lang = currentSnippet.language || "text";
    try {
      return Prism.highlight(
        currentSnippet.code,
        Prism.languages[lang] || Prism.languages.text,
        lang
      );
    } catch (e) {
      return Prism.highlight(currentSnippet.code, Prism.languages.text, "text");
    }
  }, [currentSnippet]);

  // Copy to clipboard
  const handleCopy = async () => {
    if (!currentSnippet) return;

    try {
      await navigator.clipboard.writeText(currentSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Initialize active language
  useEffect(() => {
    if (snippetsByLanguage.size > 0 && !activeLanguage) {
      const firstLang = Array.from(snippetsByLanguage.keys())[0];
      setActiveLanguage(firstLang);
      setActiveTabIndex(0);
    }
  }, [snippetsByLanguage, activeLanguage]);

  if (loading) {
    return (
      <div className={`dds-code-block dds-code-block-loading ${className}`}>
        <div className="dds-code-block-loading-text">
          Loading code snippets...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`dds-code-block dds-code-block-error ${className}`}>
        <div className="dds-code-block-error-text">Error: {error}</div>
      </div>
    );
  }

  if (!currentSnippet) {
    return null;
  }

  const hasTabs = activeSnippets.length > 1;
  const hasLanguageDropdown = snippetsByLanguage.size > 1;
  const displayLanguage = currentSnippet.language || "text";

  return (
    <div className={`dds-code-block ${className}`}>
      {/* Header with tabs, language dropdown, and copy button */}
      <div className="dds-code-block-header">
        <div className="dds-code-block-header-left">
          {/* Tabs */}
          {hasTabs && (
            <div className="dds-code-block-tabs">
              {activeSnippets.map((snippet: ParsedSnippet, index: number) => (
                <button
                  key={index}
                  className={`dds-code-block-tab ${
                    index === activeTabIndex ? "dds-code-block-tab-active" : ""
                  }`}
                  onClick={() => setActiveTabIndex(index)}
                  type="button"
                >
                  {snippet.tabTitle || snippet.filename || `Tab ${index + 1}`}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="dds-code-block-header-right">
          {/* Language dropdown */}
          {hasLanguageDropdown && (
            <select
              className="dds-code-block-language-select"
              value={activeLanguage || ""}
              onChange={(e) => {
                setActiveLanguage(e.target.value);
                setActiveTabIndex(0);
              }}
            >
              {Array.from(snippetsByLanguage.keys()).map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
          )}

          {/* Language display (when no dropdown) */}
          {!hasLanguageDropdown && displayLanguage !== "text" && (
            <span className="dds-code-block-language-label">
              {displayLanguage}
            </span>
          )}

          {/* Copy button */}
          <button
            className="dds-code-block-copy-button"
            onClick={handleCopy}
            type="button"
            aria-label="Copy code"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>

      {/* Code content */}
      <div className="dds-code-block-content">
        <pre className={`language-${displayLanguage}`}>
          <code
            className={`language-${displayLanguage}`}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>

        {/* Line highlighting overlay */}
        {currentSnippet.highlightLines &&
          currentSnippet.highlightLines.length > 0 && (
            <div className="dds-code-block-line-highlights">
              {currentSnippet.highlightLines.map((lineNum: number) => (
                <div
                  key={lineNum}
                  className="dds-code-block-line-highlight"
                  style={{ top: `${(lineNum - 1) * 1.5}em` }}
                />
              ))}
            </div>
          )}
      </div>
    </div>
  );
}
