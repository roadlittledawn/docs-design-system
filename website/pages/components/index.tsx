import { Heading } from "@roadlittledawn/docs-design-system/react";

export default function ComponentsPage() {
  return (
    <div className="prose prose-lg max-w-none">
        <Heading level={1} className="mb-6">
          Components
        </Heading>

        <p className="mb-8 text-xl text-gray-600">
          A library of reusable UI components for building documentation interfaces. Each component will be published to NPM for easy integration.
        </p>

        <Heading level={2} className="mb-4">
          Component Documentation Structure
        </Heading>

        <p className="mb-6">
          Each component page includes:
        </p>

        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <p>
              <strong>Overview:</strong> What the component is and its purpose
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <p>
              <strong>When to Use:</strong> Appropriate use cases and scenarios
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <p>
              <strong>Usage Examples:</strong> Code snippets and implementation patterns
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <p>
              <strong>Live Examples:</strong> Interactive demonstrations of the component
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <p>
              <strong>API Reference:</strong> Props, variants, and configuration options
            </p>
          </li>
        </ul>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <Heading level={3} className="mb-3">
            Interactive Documentation in Storybook
          </Heading>
          <p className="mb-4">
            Explore complete component documentation with live examples, interactive controls,
            auto-generated API references, and accessibility testing in Storybook.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_STORYBOOK_URL || 'http://localhost:6006'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Open Storybook
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <Heading level={2} className="mb-6">
          Available Components
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <a
            href={(process.env.NEXT_PUBLIC_STORYBOOK_URL || 'http://localhost:6006') + '/?path=/docs/components-button--docs'}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <Heading level={4} className="mb-2 text-blue-600">Button</Heading>
            <p className="text-gray-600">Interactive buttons for user actions and navigation with multiple variants and sizes.</p>
          </a>

          <a
            href={(process.env.NEXT_PUBLIC_STORYBOOK_URL || 'http://localhost:6006') + '/?path=/docs/components-callout--docs'}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <Heading level={4} className="mb-2 text-blue-600">Callout</Heading>
            <p className="text-gray-600">Highlight important information, warnings, tips, and course-specific content.</p>
          </a>

          <a
            href={(process.env.NEXT_PUBLIC_STORYBOOK_URL || 'http://localhost:6006') + '/?path=/docs/components-card--docs'}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <Heading level={4} className="mb-2 text-blue-600">Card</Heading>
            <p className="text-gray-600">Flexible container for displaying content with optional title and background colors.</p>
          </a>

          <a
            href={(process.env.NEXT_PUBLIC_STORYBOOK_URL || 'http://localhost:6006') + '/?path=/docs/components-cardgrid--docs'}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <Heading level={4} className="mb-2 text-blue-600">CardGrid</Heading>
            <p className="text-gray-600">Responsive grid layout for organizing multiple cards in 2, 3, or 4 columns.</p>
          </a>

          <a
            href={(process.env.NEXT_PUBLIC_STORYBOOK_URL || 'http://localhost:6006') + '/?path=/docs/components-collapser--docs'}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <Heading level={4} className="mb-2 text-blue-600">Collapser</Heading>
            <p className="text-gray-600">Expandable/collapsible content sections with smooth animations and keyboard shortcuts.</p>
          </a>

          <a
            href={(process.env.NEXT_PUBLIC_STORYBOOK_URL || 'http://localhost:6006') + '/?path=/docs/components-heading--docs'}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <Heading level={4} className="mb-2 text-blue-600">Heading</Heading>
            <p className="text-gray-600">Semantic HTML headings (h1-h4) with consistent styling for proper document structure.</p>
          </a>

          <a
            href={(process.env.NEXT_PUBLIC_STORYBOOK_URL || 'http://localhost:6006') + '/?path=/docs/components-link--docs'}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <Heading level={4} className="mb-2 text-blue-600">Link</Heading>
            <p className="text-gray-600">Styled hyperlinks with automatic external link handling and visual indicators.</p>
          </a>

          <a
            href={(process.env.NEXT_PUBLIC_STORYBOOK_URL || 'http://localhost:6006') + '/?path=/docs/components-typography--docs'}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <Heading level={4} className="mb-2 text-blue-600">Typography</Heading>
            <p className="text-gray-600">Consistent text styling for headings, paragraphs, and captions.</p>
          </a>
        </div>
      </div>
  );
}
