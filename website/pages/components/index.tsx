import { Heading } from "@docs-design-system/ui";

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

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <Heading level={4} className="mb-3 text-blue-900">
            Coming Soon
          </Heading>
          <p className="text-blue-800">
            Component documentation will be added as components are developed and published to NPM.
          </p>
        </div>
      </div>
  );
}
