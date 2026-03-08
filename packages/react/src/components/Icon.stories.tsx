import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

// ─── Sample SVG components used in stories ────────────────────────────────────

// Note: these sample SVG components intentionally omit accessibility attributes
// (aria-hidden, role, aria-label). The Icon component applies them based on
// whether an aria-label prop is provided.

const StarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ChevronIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// Raw SVG string example
const closeIconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    svg: {
      description:
        'SVG to render — accepts a React SVG component or a raw SVG string.',
      control: false,
    },
    size: {
      control: { type: 'number', min: 8, max: 64, step: 2 },
      description: 'Width and height in pixels.',
      table: { defaultValue: { summary: '16' } },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names.',
      table: { defaultValue: { summary: '""' } },
    },
    'aria-label': {
      control: 'text',
      description:
        'Accessible label. When provided the icon is announced by screen readers. When omitted the icon is treated as decorative and hidden from assistive technology.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
The \`Icon\` component renders an SVG icon without bundling any specific icon library.
You bring your own SVGs — as a React component or a raw SVG string — so you are never
forced to adopt a particular icon set.

## When to Use

- Rendering icons imported with SVGR (e.g. \`import { ReactComponent as Star } from './star.svg'\`)
- Rendering inline SVG components defined directly in your code
- Rendering a trusted raw SVG string from your project's assets

## When Not to Use

- Do not pass untrusted or user-supplied SVG strings; the raw string path uses
  \`dangerouslySetInnerHTML\` without sanitization.
- When you only need a decorative shape that can be achieved with CSS alone.

## Accessibility

- Decorative icons (no \`aria-label\`) automatically receive \`aria-hidden="true"\` so
  they are ignored by screen readers.
- Meaningful icons (e.g. a standalone icon button) should receive a descriptive
  \`aria-label\` so they are announced correctly.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

// ─── Stories ──────────────────────────────────────────────────────────────────

/**
 * Pass any React SVG component to the `svg` prop. The component is rendered
 * directly with the provided `size` applied as `width` and `height`.
 */
export const WithReactComponent: Story = {
  args: {
    svg: StarIcon,
    size: 24,
  },
  parameters: {
    docs: {
      source: {
        code: `const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

<Icon svg={StarIcon} size={24} />`,
      },
    },
  },
};

/**
 * Pass a raw SVG string to the `svg` prop. The string is injected using
 * `dangerouslySetInnerHTML` — ensure the content is from a trusted source.
 */
export const WithSvgString: Story = {
  args: {
    svg: closeIconSvg,
    size: 24,
  },
  parameters: {
    docs: {
      source: {
        code: `const closeIconSvg = \`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>\`;

<Icon svg={closeIconSvg} size={24} />`,
      },
    },
  },
};

/**
 * When an `aria-label` is provided the icon receives `role="img"` and is
 * announced by screen readers with the given label. Use this when the icon
 * conveys meaning without surrounding text.
 */
export const WithAriaLabel: Story = {
  args: {
    svg: ExternalLinkIcon,
    size: 20,
    'aria-label': 'Opens in a new tab',
  },
  parameters: {
    docs: {
      source: {
        code: `<Icon svg={ExternalLinkIcon} size={20} aria-label="Opens in a new tab" />`,
      },
    },
  },
};

/**
 * Sizes from small (12 px) to large (48 px). The `size` prop sets both
 * `width` and `height` so the icon is always square.
 */
export const Sizes: Story = {
  parameters: {
    docs: {
      source: {
        code: `<Icon svg={ChevronIcon} size={12} />
<Icon svg={ChevronIcon} size={16} />
<Icon svg={ChevronIcon} size={20} />
<Icon svg={ChevronIcon} size={24} />
<Icon svg={ChevronIcon} size={32} />
<Icon svg={ChevronIcon} size={48} />`,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      {[12, 16, 20, 24, 32, 48].map((size) => (
        <Icon key={size} svg={ChevronIcon} size={size} />
      ))}
    </div>
  ),
};

/**
 * Icons inherit `currentColor` for their stroke/fill, so they automatically
 * adapt to the surrounding text color.
 */
export const InheritedColor: Story = {
  parameters: {
    docs: {
      source: {
        code: `<p style={{ color: '#3b82f6' }}>
  <Icon svg={StarIcon} size={16} /> Blue text with a blue icon
</p>
<p style={{ color: '#ef4444' }}>
  <Icon svg={StarIcon} size={16} /> Red text with a red icon
</p>`,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <p style={{ color: '#3b82f6', margin: 0, display: 'flex', alignItems: 'center', gap: '0.375rem', fontFamily: 'sans-serif' }}>
        <Icon svg={StarIcon} size={16} /> Blue text with a blue icon
      </p>
      <p style={{ color: '#ef4444', margin: 0, display: 'flex', alignItems: 'center', gap: '0.375rem', fontFamily: 'sans-serif' }}>
        <Icon svg={StarIcon} size={16} /> Red text with a red icon
      </p>
    </div>
  ),
};
