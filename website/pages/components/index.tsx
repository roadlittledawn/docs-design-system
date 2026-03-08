import {
  Heading,
  Button,
  Card,
  Link as DocsLink,
} from "@roadlittledawn/docs-design-system/react";
import Link from "next/link";

const STORYBOOK_URL = "https://docs-design-system-storybook.netlify.app";
const LLMS_TXT_URL = `${STORYBOOK_URL}/llms.txt`;
const USAGE_MD_URL =
  "https://raw.githubusercontent.com/roadlittledawn/docs-design-system/main/packages/react/USAGE.md";

export default function ComponentsPage() {
  return (
    <div className="prose prose-lg max-w-none">
      <Heading level={1} className="mb-4">
        Components
      </Heading>
      <p>
        Components I built for my own docs projects, open sourced for anyone to
        use.
      </p>

      <p>
        This isn&apos;t <em>the</em> way to present docs content. It&apos;s a
        distillation of patterns drawn from years of writing and supporting
        writing teams as an engineer. Take what&apos;s useful, skip what
        isn&apos;t. Think something&apos;s missing? PRs welcome.
      </p>

      <p>
        React only, for now. It&apos;s still{" "}
        <DocsLink href="https://2024.stateofjs.com/en-US/libraries/">
          one of the most-used and most-loved front-end libraries
        </DocsLink>
        , most modern docs frameworks build on it, and MDX is increasingly
        popular in that ecosystem, which is my go-to for content driven sites.
      </p>

      <Heading level={2} className="mb-3">
        React
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
          href="https://github.com/roadlittledawn/docs-design-system/tree/develop/packages/react"
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
        Use in any React / <DocsLink href="https://mdxjs.com">MDX</DocsLink>-based
        site. Compatible with Next.js App Router — interactive components are
        pre-marked as Client Components so no extra setup is needed.
      </p>

      <Card backgroundColor="blue" className="mb-4">
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

      <Card backgroundColor="gray" className="mb-8">
        <Heading level={3} className="mb-3">
          Using with AI Coding Tools
        </Heading>
        <p className="mb-3">
          The component API is available in machine-readable formats so AI
          assistants (Claude, Copilot, Cursor, etc.) can understand and generate
          correct component usage without browsing Storybook.
        </p>
        <ul className="mb-0 space-y-1 text-sm">
          <li>
            <DocsLink href={LLMS_TXT_URL}>
              /llms.txt
            </DocsLink>
            {" "}— full component reference served from the Storybook site,
            per the{" "}
            <DocsLink href="https://llmstxt.org">llmstxt.org</DocsLink>{" "}
            convention. Fetch it by URL in any AI context file.
          </li>
          <li>
            <DocsLink href={USAGE_MD_URL}>
              USAGE.md
            </DocsLink>
            {" "}— same reference packaged inside the npm bundle. Point your
            AI tool at{" "}
            <code>node_modules/@roadlittledawn/docs-design-system-react/USAGE.md</code>.
          </li>
        </ul>
      </Card>
    </div>
  );
}
