import { Heading } from "@docs-design-system/ui";

export default function PersonalizationPage() {
  return (
    <div className="prose prose-lg max-w-none">
        <Heading level={1} className="mb-6">
          Personalization
        </Heading>

        <p className="mb-8 text-xl text-gray-600">
          Personalization features help users navigate documentation more efficiently by surfacing relevant content based on their behavior and preferences.
        </p>

        <div className="space-y-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <Heading level={3} className="mb-4">
              Recently Viewed
            </Heading>
            <p>
              Track and display pages users have recently visited, enabling quick return to previously accessed content.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <Heading level={3} className="mb-4">
              Recently Searched For
            </Heading>
            <p>
              Show users their recent search queries, allowing them to quickly re-run searches or refine previous queries.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <Heading level={3} className="mb-4">
              Code Examples
            </Heading>
            <p>
              Personalize code examples based on user preferences such as programming language, framework, or SDK version.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <Heading level={3} className="mb-4">
              Recommended Content
            </Heading>
            <p>
              Suggest relevant documentation based on user behavior, current page context, and common navigation patterns.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <Heading level={3} className="mb-4">
              Favorite Pages
            </Heading>
            <p>
              Allow users to bookmark and quickly access frequently referenced documentation pages.
            </p>
          </div>
        </div>
      </div>
  );
}
