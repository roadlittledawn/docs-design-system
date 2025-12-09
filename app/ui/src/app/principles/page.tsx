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

export default function PrinciplesPage() {
  return (
    <DocsLayout sidebarNavigation={principlesNavigation}>
      <div className="prose prose-lg max-w-none">
        <Typography variant="h1" className="mb-6">
          Documentation Design Principles
        </Typography>

        <Typography variant="p" className="mb-8 text-xl text-gray-600">
          Foundational guidelines for creating effective, user-centered
          documentation that serves both technical writers and developers.
        </Typography>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg">
            <Typography variant="h3" className="mb-4 text-blue-900">
              User-Centered
            </Typography>
            <Typography variant="p" className="text-blue-800">
              Documentation should prioritize the user&apos;s goals, context,
              and mental model over the system&apos;s internal structure.
            </Typography>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <Typography variant="h3" className="mb-4 text-green-900">
              Scannable
            </Typography>
            <Typography variant="p" className="text-green-800">
              Use clear headings, bullet points, and visual hierarchy to help
              users quickly find what they need.
            </Typography>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <Typography variant="h3" className="mb-4 text-purple-900">
              Actionable
            </Typography>
            <Typography variant="p" className="text-purple-800">
              Every piece of documentation should enable users to accomplish a
              specific task or understand a concept.
            </Typography>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
