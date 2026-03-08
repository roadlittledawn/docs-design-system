import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  argTypes: {
    items: {
      description:
        "Ordered array of path segments (root first). Each item requires a `label`; `href` is optional and omitted for the current page.",
    },
    delimiter: {
      control: "text",
      description:
        "Separator between segments. Accepts a string or any ReactNode (e.g. an SVG icon). Rendered `aria-hidden`.",
      table: { defaultValue: { summary: '"/"' } },
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md"],
      description: "Font-size variant.",
      table: { defaultValue: { summary: '"md"' } },
    },
    collapseOnMobile: {
      control: "boolean",
      description:
        "Collapse middle segments behind an ellipsis on narrow viewports. Click the ellipsis to expand.",
      table: { defaultValue: { summary: "false" } },
    },
    scrollOnMobile: {
      control: "boolean",
      description:
        "Let the full breadcrumb scroll horizontally on narrow viewports instead of wrapping. Can be combined with `collapseOnMobile`.",
      table: { defaultValue: { summary: "false" } },
    },
    className: {
      control: "text",
      description: "Additional CSS classes.",
      table: { defaultValue: { summary: '""' } },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
The Breadcrumb component renders a hierarchical navigation trail for documentation pages.

## When to Use

- To show the user's current location within a multi-level documentation hierarchy
- To provide quick navigation back to parent sections
- On pages nested 2 or more levels deep

## When Not to Use

- On top-level landing pages where hierarchy is obvious
- For purely sequential step indicators (use a stepper/progress component instead)

## Accessibility

- Renders as \`<nav aria-label="Breadcrumb">\` with an \`<ol>\` list so screen readers announce it correctly
- The current (last) page item receives \`aria-current="page"\`
- Delimiter characters are marked \`aria-hidden\` and are not read aloud
- The ellipsis expand button has an accessible \`aria-label\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

const docsItems = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/docs/components" },
  { label: "Breadcrumb" },
];

/**
 * The default breadcrumb with a three-segment path and the "/" delimiter.
 */
export const Default: Story = {
  args: {
    items: docsItems,
  },
  parameters: {
    docs: {
      source: {
        code: `<Breadcrumb
  items={[
    { label: 'Docs', href: '/docs' },
    { label: 'Components', href: '/docs/components' },
    { label: 'Breadcrumb' },
  ]}
/>`,
      },
    },
  },
};

/**
 * A single-item breadcrumb — just the current page with no parent links.
 */
export const SingleItem: Story = {
  args: {
    items: [{ label: "Getting Started" }],
  },
  parameters: {
    docs: {
      source: {
        code: `<Breadcrumb items={[{ label: 'Getting Started' }]} />`,
      },
    },
  },
};

/**
 * Custom string delimiter using "›" instead of "/".
 */
export const CustomStringDelimiter: Story = {
  args: {
    items: docsItems,
    delimiter: "›",
  },
  parameters: {
    docs: {
      source: {
        code: `<Breadcrumb
  items={[
    { label: 'Docs', href: '/docs' },
    { label: 'Components', href: '/docs/components' },
    { label: 'Breadcrumb' },
  ]}
  delimiter="›"
/>`,
      },
    },
  },
};

/**
 * Custom SVG chevron as the delimiter — demonstrates ReactNode delimiter support.
 */
export const SvgChevronDelimiter: Story = {
  args: {
    items: docsItems,
    delimiter: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `const ChevronRight = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

<Breadcrumb
  items={[
    { label: 'Docs', href: '/docs' },
    { label: 'Components', href: '/docs/components' },
    { label: 'Breadcrumb' },
  ]}
  delimiter={ChevronRight}
/>`,
      },
    },
  },
};

/**
 * Small size variant — useful in compact page headers.
 */
export const SmallSize: Story = {
  args: {
    items: docsItems,
    size: "sm",
  },
  parameters: {
    docs: {
      source: {
        code: `<Breadcrumb
  size="sm"
  items={[
    { label: 'Docs', href: '/docs' },
    { label: 'Components', href: '/docs/components' },
    { label: 'Breadcrumb' },
  ]}
/>`,
      },
    },
  },
};

/**
 * `collapseOnMobile` — middle segments collapse to an ellipsis on narrow viewports.
 * Resize the browser window or use a mobile emulator to see this in action.
 * Click the "…" to expand all items.
 */
export const CollapseOnMobile: Story = {
  args: {
    collapseOnMobile: true,
    items: [
      { label: "Docs", href: "/docs" },
      { label: "Guides", href: "/docs/guides" },
      { label: "Components", href: "/docs/guides/components" },
      { label: "Navigation", href: "/docs/guides/components/navigation" },
      { label: "Breadcrumb" },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `<Breadcrumb
  collapseOnMobile
  items={[
    { label: 'Docs', href: '/docs' },
    { label: 'Guides', href: '/docs/guides' },
    { label: 'Components', href: '/docs/guides/components' },
    { label: 'Navigation', href: '/docs/guides/components/navigation' },
    { label: 'Breadcrumb' },
  ]}
/>`,
      },
    },
  },
};

/**
 * `scrollOnMobile` — the breadcrumb trail scrolls horizontally on narrow viewports
 * rather than wrapping onto multiple lines.
 */
export const ScrollOnMobile: Story = {
  args: {
    scrollOnMobile: true,
    items: [
      { label: "Docs", href: "/docs" },
      { label: "Guides", href: "/docs/guides" },
      { label: "Components", href: "/docs/guides/components" },
      { label: "Navigation", href: "/docs/guides/components/navigation" },
      { label: "Breadcrumb" },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `<Breadcrumb
  scrollOnMobile
  items={[
    { label: 'Docs', href: '/docs' },
    { label: 'Guides', href: '/docs/guides' },
    { label: 'Components', href: '/docs/guides/components' },
    { label: 'Navigation', href: '/docs/guides/components/navigation' },
    { label: 'Breadcrumb' },
  ]}
/>`,
      },
    },
  },
};

/**
 * All size and delimiter variants displayed together for visual comparison.
 */
export const AllVariants: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
  <Breadcrumb
    items={[
      { label: 'Docs', href: '/docs' },
      { label: 'Components', href: '/docs/components' },
      { label: 'Breadcrumb' },
    ]}
  />
  <Breadcrumb
    size="sm"
    items={[
      { label: 'Docs', href: '/docs' },
      { label: 'Components', href: '/docs/components' },
      { label: 'Breadcrumb' },
    ]}
  />
  <Breadcrumb
    delimiter="›"
    items={[
      { label: 'Docs', href: '/docs' },
      { label: 'Components', href: '/docs/components' },
      { label: 'Breadcrumb' },
    ]}
  />
</div>`,
      },
    },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <div>
        <p
          style={{
            color: "var(--dds-breadcrumb-current-color)",
            fontFamily: "sans-serif",
            fontSize: "0.75rem",
            marginBottom: "0.25rem",
          }}
        >
          Default (md)
        </p>
        <Breadcrumb
          items={[
            { label: "Docs", href: "/docs" },
            { label: "Components", href: "/docs/components" },
            { label: "Breadcrumb" },
          ]}
        />
      </div>
      <div>
        <p
          style={{
            color: "var(--dds-breadcrumb-current-color)",
            fontFamily: "sans-serif",
            fontSize: "0.75rem",
            marginBottom: "0.25rem",
          }}
        >
          Small (sm)
        </p>
        <Breadcrumb
          size="sm"
          items={[
            { label: "Docs", href: "/docs" },
            { label: "Components", href: "/docs/components" },
            { label: "Breadcrumb" },
          ]}
        />
      </div>
      <div>
        <p
          style={{
            color: "var(--dds-breadcrumb-current-color)",
            fontFamily: "sans-serif",
            fontSize: "0.75rem",
            marginBottom: "0.25rem",
          }}
        >
          Custom delimiter "›"
        </p>
        <Breadcrumb
          delimiter="›"
          items={[
            { label: "Docs", href: "/docs" },
            { label: "Components", href: "/docs/components" },
            { label: "Breadcrumb" },
          ]}
        />
      </div>
    </div>
  ),
};
