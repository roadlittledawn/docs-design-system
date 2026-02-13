import {
  Heading,
  CardGrid,
  Button,
  Card,
} from "@roadlittledawn/docs-design-system/react";
import Link from "next/link";

const STORYBOOK_URL = "https://docs-design-system-storybook.netlify.app";

export default function ComponentsPage() {
  return (
    <div className="prose prose-lg max-w-none">
      <Heading level={1} className="mb-6">
        Components
      </Heading>

      <p className="mb-8 text-xl">
        A library of reusable UI components for building documentation
        interfaces. Each component will be published to NPM for easy
        integration.
      </p>

      <Heading level={2} className="mb-4">
        Component Documentation Structure
      </Heading>

      <p className="mb-6">Each component page includes:</p>

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
            <strong>Usage Examples:</strong> Code snippets and implementation
            patterns
          </p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p>
            <strong>Live Examples:</strong> Interactive demonstrations of the
            component
          </p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p>
            <strong>API Reference:</strong> Props, variants, and configuration
            options
          </p>
        </li>
      </ul>

      <Card backgroundColor="blue" className="mb-8">
        <Heading level={3} className="mb-3">
          Interactive Documentation in Storybook
        </Heading>
        <p className="mb-4">
          Explore complete component documentation with live examples,
          interactive controls, auto-generated API references, and accessibility
          testing in Storybook.
        </p>
        <Link href={STORYBOOK_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="primary">
            Open Storybook
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Button>
        </Link>
      </Card>

      <Heading level={2} className="mb-6">
        Available Components
      </Heading>

      <CardGrid columns={2}>
        <Card href={`${STORYBOOK_URL}/?path=/docs/components-button--docs`}>
          <Heading level={4} className="mb-2 text-blue-600">
            Button
          </Heading>
          <p>
            Interactive buttons for user actions and navigation with multiple
            variants and sizes.
          </p>
        </Card>

        <Card href={`${STORYBOOK_URL}/?path=/docs/components-callout--docs`}>
          <Heading level={4} className="mb-2 text-blue-600">
            Callout
          </Heading>
          <p>
            Highlight important information, warnings, tips, and course-specific
            content.
          </p>
        </Card>

        <Card href={`${STORYBOOK_URL}/?path=/docs/components-card--docs`}>
          <Heading level={4} className="mb-2 text-blue-600">
            Card
          </Heading>
          <p>
            Flexible container for displaying content with optional title and
            background colors.
          </p>
        </Card>

        <Card href={`${STORYBOOK_URL}/?path=/docs/components-cardgrid--docs`}>
          <Heading level={4} className="mb-2 text-blue-600">
            CardGrid
          </Heading>
          <p>
            Responsive grid layout for organizing multiple cards in 2, 3, or 4
            columns.
          </p>
        </Card>

        <Card href={`${STORYBOOK_URL}/?path=/docs/components-collapser--docs`}>
          <Heading level={4} className="mb-2 text-blue-600">
            Collapser
          </Heading>
          <p>
            Expandable/collapsible content sections with smooth animations and
            keyboard shortcuts.
          </p>
        </Card>

        <Card href={`${STORYBOOK_URL}/?path=/docs/components-heading--docs`}>
          <Heading level={4} className="mb-2 text-blue-600">
            Heading
          </Heading>
          <p>
            Semantic HTML headings (h1-h4) with consistent styling for proper
            document structure.
          </p>
        </Card>

        <Card href={`${STORYBOOK_URL}/?path=/docs/components-link--docs`}>
          <Heading level={4} className="mb-2 text-blue-600">
            Link
          </Heading>
          <p>
            Styled hyperlinks with automatic external link handling and visual
            indicators.
          </p>
        </Card>

        <Card href={`${STORYBOOK_URL}/?path=/docs/components-typography--docs`}>
          <Heading level={4} className="mb-2 text-blue-600">
            Typography
          </Heading>
          <p>
            Consistent text styling for headings, paragraphs, and captions.
          </p>
        </Card>
      </CardGrid>
    </div>
  );
}
