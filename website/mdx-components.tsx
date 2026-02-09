import type { MDXComponents } from "mdx/types";
import React from "react";
import {
  Heading,
  Card,
  CardGrid,
  Link,
  Collapser,
  Callout,
  CodeBlock,
} from "@roadlittledawn/docs-design-system/react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Map markdown headings to styled Heading component
    h1: (props) => <Heading level={1} {...props} />,
    h2: (props) => <Heading level={2} {...props} />,
    h3: (props) => <Heading level={3} {...props} />,
    h4: (props) => <Heading level={4} {...props} />,
    // Style paragraphs with proper spacing
    p: ({ className, ...props }: any) => (
      <p
        className={`text-gray-700 leading-relaxed mb-4 ${className || ""}`}
        {...props}
      />
    ),
    // Style inline code (fenced blocks are handled in pre)
    code: ({ className, children, ...props }: any) => {
      // If it has a language class, it's likely part of a fenced block (handled by pre)
      if (className?.includes("language-")) {
        return (
          <code className={className} {...props}>
            {children}
          </code>
        );
      }
      // Otherwise, it's inline code
      return (
        <code
          className={`bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800 ${className || ""}`}
          {...props}
        >
          {children}
        </code>
      );
    },
    // Convert fenced code blocks to CodeBlock component
    pre: ({ className, children, ...props }: any) => {
      // Check if this is a fenced code block (has a code child with language class)
      const codeChild = React.Children.toArray(children).find(
        (child: any) =>
          child?.type === "code" ||
          child?.props?.className?.includes("language-")
      ) as any;

      if (codeChild) {
        const codeProps = codeChild.props || {};
        const codeClassName = codeProps.className || "";
        const languageMatch = codeClassName.match(/language-(\w+)/);
        const language = languageMatch ? languageMatch[1] : undefined;

        // Extract code text from children
        let code = "";
        if (typeof codeProps.children === "string") {
          code = codeProps.children;
        } else if (Array.isArray(codeProps.children)) {
          code = codeProps.children
            .map((c: any) =>
              typeof c === "string" ? c : c?.props?.children || ""
            )
            .join("");
        } else if (codeProps.children) {
          code = String(codeProps.children);
        }

        if (code) {
          return (
            <CodeBlock code={code} language={language} className={className} />
          );
        }
      }

      // Fallback for other pre elements
      return (
        <pre
          className={`bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 ${className || ""}`}
          {...props}
        >
          {children}
        </pre>
      );
    },
    a: ({ href = "#", ...props }) => <Link href={href} {...props} />,
    // Make UI components globally available
    Heading,
    Card,
    CardGrid,
    Collapser,
    Callout,
    CodeBlock,
    ...components,
  };
}
