import { Heading } from "@docs-design-system/ui";

export default function StyleGuidePage() {
  return (
    <div className="prose prose-lg max-w-none">
        <Heading level={1} className="mb-6">
          Style Guide
        </Heading>

        <p className="mb-8 text-xl text-gray-600">
          Guidelines for creating consistent, clear, and effective documentation
          content.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <Heading level={3} className="mb-3">
              Voice & Tone
            </Heading>
            <p>
              Guidelines for maintaining a consistent voice and adapting tone
              for different contexts.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <Heading level={3} className="mb-3">
              Titles & Headings
            </Heading>
            <p>
              Best practices for writing clear, scannable titles and heading
              structures.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <Heading level={3} className="mb-3">
              Content Components
            </Heading>
            <p>
              Formatting guidelines for callouts, collapsers, tabs, tables, and
              other content elements.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <Heading level={3} className="mb-3">
              Images & Screenshots
            </Heading>
            <p>
              Standards for creating, formatting, and using visual content
              effectively.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <Heading level={3} className="mb-3">
              Organization
            </Heading>
            <p>
              Strategies for structuring and organizing documentation for
              optimal discoverability.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <Heading level={3} className="mb-3">
              Lists
            </Heading>
            <p>
              Guidelines for when and how to use different list types
              effectively.
            </p>
          </div>
        </div>
        <Heading level={2} className="mb-4">
          Content Quality Attributes
        </Heading>

        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <p>
              <strong>Accurate</strong> Information is factually correct,
              up-to-date, and technically precise. Code examples work as
              written, and statements can be verified.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <p>
              <strong>Relevant</strong> Content directly addresses user needs
              and goals. Information is appropriate for the audience and
              context, without tangential details.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <p>
              <strong>Clear:</strong> Content is easy to understand with
              straightforward language, logical structure, and well-explained
              concepts. Readers grasp the meaning without confusion.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <p>
              <strong>Concise:</strong> Information is expressed efficiently
              without unnecessary words or redundancy. Every sentence serves a
              purpose and respects the reader&apos;s time.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <p>
              <strong>Consistent:</strong>Terminology, formatting, tone, and
              style remain uniform throughout. Patterns are predictable, making
              content easier to navigate and understand.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <p>
              <strong>Discoverable:</strong> Content is easy to find through
              search, navigation, clear titles, and proper organization. Users
              can locate what they need quickly.
            </p>
          </li>
        </ul>
      </div>
  );
}
