import { DocsLayout } from "@/components/layout/DocsLayout";
import { Typography } from "@docs-design-system/ui";

const principlesNavigation = [
  {
    name: "Overview",
    href: "/principles",
  },
  {
    name: "Personalization",
    href: "/principles/personalization",
  },
];

export default function PersonalizationPage() {
  return (
    <DocsLayout sidebarNavigation={principlesNavigation}>
      <div className="prose prose-lg max-w-none">
        <Typography variant="h1" className="mb-6">
          Personalization
        </Typography>

        <Typography variant="p" className="mb-8 text-xl text-gray-600">
          Personalization features help users navigate documentation more efficiently by surfacing relevant content based on their behavior and preferences.
        </Typography>

        <div className="space-y-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <Typography variant="h3" className="mb-4">
              Recently Viewed
            </Typography>
            <Typography variant="p">
              Track and display pages users have recently visited, enabling quick return to previously accessed content.
            </Typography>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <Typography variant="h3" className="mb-4">
              Recently Searched For
            </Typography>
            <Typography variant="p">
              Show users their recent search queries, allowing them to quickly re-run searches or refine previous queries.
            </Typography>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <Typography variant="h3" className="mb-4">
              Code Examples
            </Typography>
            <Typography variant="p">
              Personalize code examples based on user preferences such as programming language, framework, or SDK version.
            </Typography>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <Typography variant="h3" className="mb-4">
              Recommended Content
            </Typography>
            <Typography variant="p">
              Suggest relevant documentation based on user behavior, current page context, and common navigation patterns.
            </Typography>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <Typography variant="h3" className="mb-4">
              Favorite Pages
            </Typography>
            <Typography variant="p">
              Allow users to bookmark and quickly access frequently referenced documentation pages.
            </Typography>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
