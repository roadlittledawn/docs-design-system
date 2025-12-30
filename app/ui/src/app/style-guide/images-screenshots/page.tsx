import { Heading } from "@docs-design-system/ui";
export default function ImagesScreenshotsPage() {
  return (
      <div className="prose prose-lg max-w-none">
        <Heading level={1} className="mb-6">
          Images & Screenshots
        </Heading>
        <p className="mb-8 text-xl text-gray-600">
          Standards for creating, formatting, and using visual content effectively.
        </p>
        <Heading level={2} className="mb-4">
          Text in Images
        </Heading>
        <p className="mb-4">
          Avoid placing critical information in images. Text embedded in images is not searchable, indexable, or accessible to screen readers. Users cannot copy, translate, or search for this content.
        </p>
        <Heading level={2} className="mb-4">
          Alternatives to Images
        </Heading>
        <Heading level={3} className="mb-3">
          Mermaid.js
        </Heading>
        <p className="mb-4">
          <a href="https://mermaid.js.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Mermaid.js</a> is a JavaScript-based diagramming tool that renders text-based definitions into diagrams. Popular for its simplicity and version control compatibility, it supports flowcharts, sequence diagrams, Gantt charts, and more.
        </p>
        <p className="mb-4">
          <strong>Common patterns:</strong>
        </p>
        <ul className="mb-8 space-y-2">
          <li>Flowcharts and decision trees</li>
          <li>Sequence diagrams</li>
          <li>Architecture diagrams</li>
          <li>State diagrams</li>
          <li>Entity relationship diagrams</li>
        </ul>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <p className="text-gray-600">
            Additional content coming soon.
          </p>
        </div>
      </div>
  );
}
