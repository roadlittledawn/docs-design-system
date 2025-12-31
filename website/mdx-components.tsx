import type { MDXComponents } from 'mdx/types'
import { Heading, Card, CardGrid } from '@docs-design-system/ui'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Make UI components globally available
    Heading,
    Card,
    CardGrid,
    ...components,
  }
}
