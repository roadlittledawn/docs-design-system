import { Heading } from "@docs-design-system/ui";

export default function PrinciplesPage() {
  return (
    <div className="prose prose-lg max-w-none">
        <Heading level={1} className="mb-6">
          Documentation Design Principles
        </Heading>

        <p className="mb-8 text-xl text-gray-600">
          Foundational guidelines for creating effective, user-centered
          documentation that serves both technical writers and developers.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg">
            <Heading level={3} className="mb-4 text-blue-900">
              User-Centered
            </Heading>
            <p className="text-blue-800">
              Documentation should prioritize the user&apos;s goals, context,
              and mental model over the system&apos;s internal structure.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <Heading level={3} className="mb-4 text-green-900">
              Scannable
            </Heading>
            <p className="text-green-800">
              Use clear headings, bullet points, and visual hierarchy to help
              users quickly find what they need.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <Heading level={3} className="mb-4 text-purple-900">
              Actionable
            </Heading>
            <p className="text-purple-800">
              Every piece of documentation should enable users to accomplish a
              specific task or understand a concept.
            </p>
          </div>
        </div>
      </div>
  );
}
