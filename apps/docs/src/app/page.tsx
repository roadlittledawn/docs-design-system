import Link from 'next/link';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { Typography, Button, Card, CardContent } from '@docs-design-system/ui';

export default function Home() {
  return (
    <DocsLayout>
      <div className="text-center mb-16">
        <Typography variant="h1" className="mb-6">
          Documentation Design System
        </Typography>
        <Typography variant="p" className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          A comprehensive design system for creating effective, user-centered documentation 
          that serves both technical writers and developers.
        </Typography>
        <div className="flex gap-4 justify-center">
          <Link href="/principles">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </Link>
          <Link href="/components">
            <Button variant="outline" size="lg">
              View Components
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
        <Link href="/style-guide" className="group">
          <Card className="h-full transition-shadow group-hover:shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <Typography variant="h4" className="mb-2">Style Guide</Typography>
              <Typography variant="p" className="text-gray-600">
                Visual language including colors, typography, spacing, and iconography.
              </Typography>
            </CardContent>
          </Card>
        </Link>

        <Link href="/principles" className="group">
          <Card className="h-full transition-shadow group-hover:shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <Typography variant="h4" className="mb-2">Principles</Typography>
              <Typography variant="p" className="text-gray-600">
                Documentation framework and guidelines for effective content creation.
              </Typography>
            </CardContent>
          </Card>
        </Link>

        <Link href="/components" className="group">
          <Card className="h-full transition-shadow group-hover:shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <Typography variant="h4" className="mb-2">Components</Typography>
              <Typography variant="p" className="text-gray-600">
                Reusable UI elements for building consistent documentation interfaces.
              </Typography>
            </CardContent>
          </Card>
        </Link>

        <Card className="h-full">
          <CardContent className="p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <Typography variant="h4" className="mb-2">NPM Package</Typography>
            <Typography variant="p" className="text-gray-600">
              Export components as an NPM package for easy integration into projects.
            </Typography>
            <Typography variant="caption" className="text-orange-600 mt-2 block">
              Coming Soon
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Typography variant="h2" className="mb-6">
          Built for Technical Writers & Developers
        </Typography>
        <Typography variant="p" className="text-gray-600 max-w-2xl mx-auto">
          This design system bridges the gap between design and development, providing tools and guidelines 
          that make documentation creation efficient and consistent.
        </Typography>
      </div>
    </DocsLayout>
  );
}
