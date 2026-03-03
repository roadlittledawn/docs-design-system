import {
  Heading,
  Button,
  Card,
  Callout,
  Link as DocsLink,
} from "@roadlittledawn/docs-design-system/react";
import Link from "next/link";

const STORYBOOK_URL = "https://docs-design-system-storybook.netlify.app";

export default function ComponentsPage() {
  return (
    <div className="prose prose-lg max-w-none">
      <Heading level={1} className="mb-4">
        Components
      </Heading>
      <p className="mb-8 text-xl">
        Content component libraries I built for docs sites. Only React supported
        currently.
      </p>
      <Heading level={2} className="mb-3">
        React components
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
      <p>
        Use in your React / <DocsLink href="https://mdxjs.com">MDX</DocsLink>{" "}
        based docs site.
      </p>
      <Callout variant="important">
        If using Next.js, may need to create client wrapper for some components
        that require React hooks.
      </Callout>

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
