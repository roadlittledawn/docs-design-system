import type { MDXComponents } from 'mdx/types'
import { Heading, Card, CardGrid } from '@docs-design-system/ui'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Map markdown headings to styled Heading component
    h1: (props) => <Heading level={1} {...props} />,
    h2: (props) => <Heading level={2} {...props} />,
    h3: (props) => <Heading level={3} {...props} />,
    h4: (props) => <Heading level={4} {...props} />,
    // Style paragraphs with proper spacing
    p: ({ className, ...props }: any) => (
      <p className={`text-gray-700 leading-relaxed mb-4 ${className || ''}`} {...props} />
    ),
    // Style links
    a: ({ className, ...props }: any) => (
      <a className={`text-blue-600 hover:text-blue-800 underline ${className || ''}`} {...props} />
    ),
    // Style lists
    ul: ({ className, ...props }: any) => (
      <ul className={`list-disc list-inside mb-4 space-y-2 text-gray-700 ${className || ''}`} {...props} />
    ),
    ol: ({ className, ...props }: any) => (
      <ol className={`list-decimal list-inside mb-4 space-y-2 text-gray-700 ${className || ''}`} {...props} />
    ),
    li: ({ className, ...props }: any) => (
      <li className={`ml-4 ${className || ''}`} {...props} />
    ),
    // Style code blocks
    code: ({ className, ...props }: any) => (
      <code className={`bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800 ${className || ''}`} {...props} />
    ),
    pre: ({ className, ...props }: any) => (
      <pre className={`bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 ${className || ''}`} {...props} />
    ),
    // Make UI components globally available
    Heading,
    Card,
    CardGrid,
    ...components,
  }
}
