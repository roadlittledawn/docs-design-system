import { DocsLayout } from "@/components/layout/DocsLayout";
import { Typography } from "@docs-design-system/ui";

const styleGuideNavigation = [
  {
    name: "Overview",
    href: "/style-guide",
  },
  {
    name: "Voice & Tone",
    href: "/style-guide/voice-tone",
  },
  {
    name: "Titles & Headings",
    href: "/style-guide/titles-headings",
  },
  {
    name: "Content Components",
    href: "/style-guide/content-components",
  },
  {
    name: "Images & Screenshots",
    href: "/style-guide/images-screenshots",
  },
  {
    name: "Organization",
    href: "/style-guide/organization",
  },
  {
    name: "Lists",
    href: "/style-guide/lists",
  },
];

export default function OrganizationPage() {
  return (
    <DocsLayout sidebarNavigation={styleGuideNavigation}>
      <div className="prose prose-lg max-w-none">
        <Typography variant="h1" className="mb-6">
          Organization
        </Typography>

        <Typography variant="p" className="mb-8 text-xl text-gray-600">
          Strategies for structuring and organizing documentation for optimal discoverability.
        </Typography>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <Typography variant="p" className="text-gray-600">
            Content coming soon.
          </Typography>
        </div>
      </div>
    </DocsLayout>
  );
}
