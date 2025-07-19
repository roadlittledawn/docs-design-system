import { DocsLayout } from '@/components/layout/DocsLayout';
import { Typography } from '@docs-design-system/ui';

const principlesNavigation = [
  {
    name: 'Overview',
    href: '/principles',
  },
  {
    name: 'Documentation Framework',
    href: '/principles/framework',
    children: [
      { name: 'Diataxis', href: '/principles/framework/diataxis' },
      { name: 'Content Types', href: '/principles/framework/content-types' },
    ],
  },
  {
    name: 'Writing Guidelines',
    href: '/principles/writing',
    children: [
      { name: 'Voice & Tone', href: '/principles/writing/voice-tone' },
      { name: 'Style Guide', href: '/principles/writing/style' },
    ],
  },
  {
    name: 'Structure & Organization',
    href: '/principles/structure',
    children: [
      { name: 'Information Architecture', href: '/principles/structure/architecture' },
      { name: 'Navigation Patterns', href: '/principles/structure/navigation' },
    ],
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
          Foundational guidelines for creating effective, user-centered documentation that serves both technical writers and developers.
        </Typography>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg">
            <Typography variant="h3" className="mb-4 text-blue-900">
              User-Centered
            </Typography>
            <Typography variant="p" className="text-blue-800">
              Documentation should prioritize the user&apos;s goals, context, and mental model over the system&apos;s internal structure.
            </Typography>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <Typography variant="h3" className="mb-4 text-green-900">
              Scannable
            </Typography>
            <Typography variant="p" className="text-green-800">
              Use clear headings, bullet points, and visual hierarchy to help users quickly find what they need.
            </Typography>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <Typography variant="h3" className="mb-4 text-purple-900">
              Actionable
            </Typography>
            <Typography variant="p" className="text-purple-800">
              Every piece of documentation should enable users to accomplish a specific task or understand a concept.
            </Typography>
          </div>
        </div>

        <Typography variant="h2" className="mb-4">
          Documentation Framework
        </Typography>
        
        <Typography variant="p" className="mb-6">
          We follow the <a href="https://diataxis.fr" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">Diátaxis framework</a> for organizing documentation into four distinct types:
        </Typography>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <Typography variant="h4" className="mb-3 text-orange-600">
              Tutorials
            </Typography>
            <Typography variant="p" className="mb-3">
              Learning-oriented lessons that take users through a series of steps to complete a project.
            </Typography>
            <Typography variant="caption" className="text-gray-500">
              Example: &quot;Build your first component&quot;
            </Typography>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <Typography variant="h4" className="mb-3 text-blue-600">
              How-to Guides
            </Typography>
            <Typography variant="p" className="mb-3">
              Problem-oriented directions that guide users through solving specific issues.
            </Typography>
            <Typography variant="caption" className="text-gray-500">
              Example: &quot;How to customize button variants&quot;
            </Typography>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <Typography variant="h4" className="mb-3 text-green-600">
              Reference
            </Typography>
            <Typography variant="p" className="mb-3">
              Information-oriented technical descriptions of the system and its components.
            </Typography>
            <Typography variant="caption" className="text-gray-500">
              Example: &quot;Button API reference&quot;
            </Typography>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <Typography variant="h4" className="mb-3 text-purple-600">
              Explanation
            </Typography>
            <Typography variant="p" className="mb-3">
              Understanding-oriented discussions that clarify and illuminate topics.
            </Typography>
            <Typography variant="caption" className="text-gray-500">
              Example: &quot;Design system philosophy&quot;
            </Typography>
          </div>
        </div>

        <Typography variant="h2" className="mb-4">
          Content Quality Standards
        </Typography>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <Typography variant="p">
              <strong>Clear and concise:</strong> Use plain language and avoid jargon when possible
            </Typography>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <Typography variant="p">
              <strong>Consistent terminology:</strong> Use the same terms throughout all documentation
            </Typography>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <Typography variant="p">
              <strong>Code examples:</strong> Include working code snippets that users can copy and paste
            </Typography>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <Typography variant="p">
              <strong>Visual aids:</strong> Use screenshots, diagrams, and examples to support text
            </Typography>
          </li>
        </ul>
      </div>
    </DocsLayout>
  );
}