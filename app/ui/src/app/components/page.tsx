import { DocsLayout } from "@/components/layout/DocsLayout";
import { Typography } from "@docs-design-system/ui";

const componentsNavigation = [
  {
    name: "Overview",
    href: "/components",
  },
];

export default function ComponentsPage() {
  return (
    <DocsLayout sidebarNavigation={componentsNavigation}>
      <div className="prose prose-lg max-w-none">
        <Typography variant="h1" className="mb-6">
          Components
        </Typography>

        <Typography variant="p" className="mb-8 text-xl text-gray-600">
          A library of reusable UI components for building documentation interfaces. Each component will be published to NPM for easy integration.
        </Typography>

        <Typography variant="h2" className="mb-4">
          Component Documentation Structure
        </Typography>

        <Typography variant="p" className="mb-6">
          Each component page includes:
        </Typography>

        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <Typography variant="p">
              <strong>Overview:</strong> What the component is and its purpose
            </Typography>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <Typography variant="p">
              <strong>When to Use:</strong> Appropriate use cases and scenarios
            </Typography>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <Typography variant="p">
              <strong>Usage Examples:</strong> Code snippets and implementation patterns
            </Typography>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <Typography variant="p">
              <strong>Live Examples:</strong> Interactive demonstrations of the component
            </Typography>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <Typography variant="p">
              <strong>API Reference:</strong> Props, variants, and configuration options
            </Typography>
          </li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <Typography variant="h4" className="mb-3 text-blue-900">
            Coming Soon
          </Typography>
          <Typography variant="p" className="text-blue-800">
            Component documentation will be added as components are developed and published to NPM.
          </Typography>
        </div>
      </div>
    </DocsLayout>
  );
}
