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
        component: `A visually enhanced list component with numbered badges (ordered) or custom bullets (unordered) and connector lines, designed for complex content that deserves more visual prominence.

## When to Use
- Tutorial or getting started guides with substantial steps
- Multi-step workflows where each step contains rich content (paragraphs, code blocks, callouts)
- Marketing or landing pages that need more visual polish
- Complex instructions where each step is its own section of content
- Feature lists or benefits that need custom emoji/icon bullets
- When you want to nest other components (CodeBlock, Callout, etc.) within list items

## When Not to Use
- Simple, short lists with brief text items (use standard \`<ol>\` or \`<ul>\` instead)
- Very long lists with many items (consider breaking into sections with Tabs or Collapsers)
- When visual simplicity is preferred over aesthetic enhancement

## Accessibility
- Uses semantic \`<ol>\` or \`<ul>\` elements for proper screen reader support
- CSS counters and custom bullets provide visual styling without affecting content
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
export const OrderedList: Story = {
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
export const OrderedListWithNestedComponents: Story = {
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

/** Unordered list with default bullet */
export const Unordered: Story = {
  args: {
    children: null,
  },
  render: () => (
    <List ordered={false}>
      <List.Item>Key feature of the product</List.Item>
      <List.Item>Another important capability</List.Item>
      <List.Item>Additional benefit to highlight</List.Item>
    </List>
  ),
  parameters: {
    docs: {
      source: {
        code: `<List ordered={false}>
  <List.Item>Key feature of the product</List.Item>
  <List.Item>Another important capability</List.Item>
  <List.Item>Additional benefit to highlight</List.Item>
</List>`,
      },
    },
  },
};

/** Unordered list with custom emoji bullet */
export const UnorderedWithEmoji: Story = {
  args: {
    children: null,
  },
  render: () => (
    <List ordered={false} bullet="✅">
      <List.Item>Beautifully designed components</List.Item>
      <List.Item>Accessible by default</List.Item>
      <List.Item>Fully customizable styling</List.Item>
    </List>
  ),
  parameters: {
    docs: {
      source: {
        code: `<List ordered={false} bullet="✨">
  <List.Item>Beautifully designed components</List.Item>
  <List.Item>Accessible by default</List.Item>
  <List.Item>Fully customizable styling</List.Item>
</List>`,
      },
    },
  },
};

/** Unordered list with custom icon bullet */
export const UnorderedWithIcon: Story = {
  args: {
    children: null,
  },
  render: () => (
    <List
      ordered={false}
      bulletIcon={
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      }
    >
      <List.Item>Navigate to the settings page</List.Item>
      <List.Item>Select your preferences</List.Item>
      <List.Item>Save your changes</List.Item>
    </List>
  ),
  parameters: {
    docs: {
      source: {
        code: `<List
  ordered={false}
  bulletIcon={
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  }
>
  <List.Item>Navigate to the settings page</List.Item>
  <List.Item>Select your preferences</List.Item>
  <List.Item>Save your changes</List.Item>
</List>`,
      },
    },
  },
};
