import {
  Heading,
  Button,
  Card,
} from "@roadlittledawn/docs-design-system/react";
import Link from "next/link";

const STORYBOOK_URL = "https://docs-design-system-storybook.netlify.app";

export default function ComponentsPage() {
  return (
    <div className="prose prose-lg max-w-none">
      <Heading level={1} className="mb-4">
        Components
      </Heading>

      <div className="flex gap-2 mb-6">
        <Link
          href="https://www.npmjs.com/package/@roadlittledawn/docs-design-system-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://img.shields.io/npm/v/@roadlittledawn/docs-design-system-react.svg"
            alt="npm version"
          />
        </Link>
        <Link
          href="https://github.com/roadlittledawn/docs-design-system"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://img.shields.io/badge/github-repo-blue.svg"
            alt="GitHub shield"
          />
        </Link>
      </div>

      <p className="mb-8 text-xl">
        A library of reusable UI components for building documentation
        interfaces. Each component will be published to NPM for easy
        integration.
      </p>

      <Heading level={2} className="mb-4">
        Component Documentation Structure
      </Heading>

      <p className="mb-6">Each component page includes:</p>

      <ul className="space-y-3 mb-8">
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p>
            <strong>Overview:</strong> What the component is and its purpose
          </p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p>
            <strong>When to Use:</strong> Appropriate use cases and scenarios
          </p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p>
            <strong>Usage Examples:</strong> Code snippets and implementation
            patterns
          </p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p>
            <strong>Live Examples:</strong> Interactive demonstrations of the
            component
          </p>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <p>
            <strong>API Reference:</strong> Props, variants, and configuration
            options
          </p>
        </li>
      </ul>

      <Card backgroundColor="blue" className="mb-8">
        <Heading level={3} className="mb-3">
          Interactive Documentation in Storybook
        </Heading>
        <p className="mb-4">
          Explore complete component documentation with live examples,
          interactive controls, auto-generated API references, and accessibility
          testing in Storybook.
        </p>
        <Link href={STORYBOOK_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="primary">
            Open Storybook
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Button>
        </Link>
      </Card>
    </div>
  );
}
