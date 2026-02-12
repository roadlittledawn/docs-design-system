import Link from "next/link";
import {
  Heading,
  Button,
  Card,
  CardGrid,
} from "@roadlittledawn/docs-design-system/react";

export default function Home() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="text-center mb-16">
        <Heading level={1} className="mb-6 bg-gradient-to-br from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
          Documentation Design System
        </Heading>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-80">
          A comprehensive design system for creating effective, user-centered
          documentation that serves both technical writers and developers.
        </p>
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

      <CardGrid columns={4} className="mb-16">
        <Card
          href="/style-guide"
          className="h-full transition-shadow hover:shadow-md"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
              />
            </svg>
          </div>
          <Heading level={4} className="mb-2">
            Style Guide
          </Heading>
          <p>
            Visual language including colors, typography, spacing, and
            iconography.
          </p>
        </Card>

        <Card
          href="/principles"
          className="h-full transition-shadow hover:shadow-md"
        >
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <Heading level={4} className="mb-2">
            Principles
          </Heading>
          <p>
            Documentation framework and guidelines for effective content
            creation.
          </p>
        </Card>

        <Card
          href="/components"
          className="h-full transition-shadow hover:shadow-md"
        >
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <Heading level={4} className="mb-2">
            Components
          </Heading>
          <p>
            Reusable UI elements for building consistent documentation
            interfaces.
          </p>
        </Card>

        <Card
          href="/gallery"
          className="h-full transition-shadow hover:shadow-md"
        >
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <Heading level={4} className="mb-2">
            Gallery
          </Heading>
          <p>
            Explore exemplary documentation sites for inspiration and best
            practices.
          </p>
        </Card>
      </CardGrid>
    </div>
  );
}
