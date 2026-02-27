import type { Meta, StoryObj } from "@storybook/react";
import { List } from "./List";
import { CodeBlock } from "./CodeBlock";
import { Callout } from "./Callout";

const meta = {
  title: "Components/List",
  component: List,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `A visually enhanced ordered list with numbered badges and connector lines, designed for complex, multi-step content that deserves more visual prominence.

## When to Use
- Tutorial or getting started guides with substantial steps
- Multi-step workflows where each step contains rich content (paragraphs, code blocks, callouts)
- Marketing or landing pages that need more visual polish
- Complex instructions where each step is its own section of content
- When you want to nest other components (CodeBlock, Callout, etc.) within list items

## When Not to Use
- Simple, short lists with brief text items (use standard \`<ol>\` or \`<ul>\` instead)
- Unordered information (use a standard bullet list)
- Very long lists with many items (consider breaking into sections with Tabs or Collapsers)
- When visual simplicity is preferred over aesthetic enhancement

## Accessibility
- Uses semantic \`<ol>\` element for proper screen reader support
- CSS counters provide visual numbering without affecting content
- Maintains proper reading order and list semantics
        `,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default list with multi-line content and code examples */
export const Default: Story = {
  args: {
    children: null,
  },
  render: () => (
    <List>
      <List.Item>
        Run the following command in your terminal to start the install wizard:
        <code style={{ display: "block", marginTop: "0.5rem" }}>
          npm create astro@latest
        </code>
      </List.Item>
      <List.Item>
        Now that your project has been created, you can <code>cd</code> into
        your new project directory to begin using Astro.
      </List.Item>
      <List.Item>
        If you skipped the "Install dependencies?" step during the CLI wizard,
        then be sure to install your dependencies before continuing.
      </List.Item>
      <List.Item>
        You can now start the Astro dev server and see a live preview of your
        project while you build!
      </List.Item>
    </List>
  ),
  parameters: {
    docs: {
      source: {
        code: `<List>
  <List.Item>
    Run the following command in your terminal to start the install wizard:
    <code style={{ display: "block", marginTop: "0.5rem" }}>
      npm create astro@latest
    </code>
  </List.Item>
  <List.Item>
    Now that your project has been created, you can <code>cd</code> into
    your new project directory to begin using Astro.
  </List.Item>
  <List.Item>
    If you skipped the "Install dependencies?" step during the CLI wizard,
    then be sure to install your dependencies before continuing.
  </List.Item>
  <List.Item>
    You can now start the Astro dev server and see a live preview of your
    project while you build!
  </List.Item>
</List>`,
      },
    },
  },
};

/** List with nested components like CodeBlock and Callout */
export const WithNestedContent: Story = {
  args: {
    children: null,
  },
  render: () => (
    <List>
      <List.Item>
        <p>
          <b>Install dependencies</b>
        </p>
        <p style={{ color: "var(--dds-list-text)" }}>
          Run the following command to install all required packages:
        </p>
        <CodeBlock language="bash" code="npm install" />
      </List.Item>
      <List.Item>
        <strong>Configure your project</strong>
        <Callout variant="tip" title="Pro Tip">
          Make sure to review the configuration file before proceeding.
        </Callout>
      </List.Item>
      <List.Item>
        <p>
          <b>Start development</b>
        </p>
        <p style={{ color: "var(--dds-list-text)" }}>
          Launch the dev server and begin building:
        </p>
        <CodeBlock language="bash" code="npm run dev" />
      </List.Item>
    </List>
  ),
  parameters: {
    docs: {
      source: {
        code: `<List>
  <List.Item>
    <strong>Install dependencies</strong>
    <p>Run the following command to install all required packages:</p>
    <CodeBlock language="bash" code="npm install" />
  </List.Item>
  <List.Item>
    <strong>Configure your project</strong>
    <Callout variant="tip" title="Pro Tip">
      Make sure to review the configuration file before proceeding.
    </Callout>
  </List.Item>
  <List.Item>
    <strong>Start development</strong>
    <p>Launch the dev server and begin building:</p>
    <CodeBlock language="bash" code="npm run dev" />
  </List.Item>
</List>`,
      },
    },
  },
};
