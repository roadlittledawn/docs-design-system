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

export default function StyleGuidePage() {
  return (
    <DocsLayout sidebarNavigation={styleGuideNavigation}>
      <div className="prose prose-lg max-w-none">
        <Typography variant="h1" className="mb-6">
          Style Guide
        </Typography>

        <Typography variant="p" className="mb-8 text-xl text-gray-600">
          Guidelines for creating consistent, clear, and effective documentation
          content.
        </Typography>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <Typography variant="h3" className="mb-3">
              Voice & Tone
            </Typography>
            <Typography variant="p">
              Guidelines for maintaining a consistent voice and adapting tone
              for different contexts.
            </Typography>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <Typography variant="h3" className="mb-3">
              Titles & Headings
            </Typography>
            <Typography variant="p">
              Best practices for writing clear, scannable titles and heading
              structures.
            </Typography>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <Typography variant="h3" className="mb-3">
              Content Components
            </Typography>
            <Typography variant="p">
              Formatting guidelines for callouts, collapsers, tabs, tables, and
              other content elements.
            </Typography>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <Typography variant="h3" className="mb-3">
              Images & Screenshots
            </Typography>
            <Typography variant="p">
              Standards for creating, formatting, and using visual content
              effectively.
            </Typography>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <Typography variant="h3" className="mb-3">
              Organization
            </Typography>
            <Typography variant="p">
              Strategies for structuring and organizing documentation for
              optimal discoverability.
            </Typography>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <Typography variant="h3" className="mb-3">
              Lists
            </Typography>
            <Typography variant="p">
              Guidelines for when and how to use different list types
              effectively.
            </Typography>
          </div>
        </div>
        <Typography variant="h2" className="mb-4">
          Content Quality Attributes
        </Typography>

        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <Typography variant="p">
              <strong>Accurate</strong> Information is factually correct,
              up-to-date, and technically precise. Code examples work as
              written, and statements can be verified.
            </Typography>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <Typography variant="p">
              <strong>Relevant</strong> Content directly addresses user needs
              and goals. Information is appropriate for the audience and
              context, without tangential details.
            </Typography>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <Typography variant="p">
              <strong>Clear:</strong> Content is easy to understand with
              straightforward language, logical structure, and well-explained
              concepts. Readers grasp the meaning without confusion.
            </Typography>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <Typography variant="p">
              <strong>Concise:</strong> Information is expressed efficiently
              without unnecessary words or redundancy. Every sentence serves a
              purpose and respects the reader&apos;s time.
            </Typography>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <Typography variant="p">
              <strong>Consistent:</strong>Terminology, formatting, tone, and
              style remain uniform throughout. Patterns are predictable, making
              content easier to navigate and understand.
            </Typography>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <Typography variant="p">
              <strong>Discoverable:</strong> Content is easy to find through
              search, navigation, clear titles, and proper organization. Users
              can locate what they need quickly.
            </Typography>
          </li>
        </ul>
      </div>
    </DocsLayout>
  );
}
