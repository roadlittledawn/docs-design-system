import { Heading } from "@docs-design-system/ui";
export default function ContentComponentsPage() {
  return (
      <div className="prose prose-lg max-w-none">
        <Heading level={1} className="mb-6">
          Content Components
        </Heading>
        <p className="mb-8 text-xl text-gray-600">
          Formatting guidelines for callouts, collapsers, tabs, tables, and other content elements.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <p className="text-gray-600">
            Content coming soon.
          </p>
        </div>
      </div>
  );
}
