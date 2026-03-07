import type { Meta, StoryObj } from '@storybook/react';
import { CollapserGroup } from './CollapserGroup';
import { Collapser } from './Collapser';

// Spoofed icons for the NumberedGroup story (replace with your Icon component when available)
const IconBolt = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const IconBook = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);
const IconStar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const IconSettings = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

/**
 * CollapserGroup manages multiple Collapser components with consistent spacing
 * and optional accordion behavior.
 */
const meta: Meta<typeof CollapserGroup> = {
  title: 'Components/CollapserGroup',
  component: CollapserGroup,
  tags: ['autodocs'],
  argTypes: {
    spacing: {
      control: 'text',
      description: 'CSS gap value between collapser items.',
      table: { defaultValue: { summary: "'0.5rem'" } },
    },
    allowMultiple: {
      control: 'boolean',
      description: 'When true, multiple collapsers can be open simultaneously. When false, opening one closes the others (accordion mode).',
      table: { defaultValue: { summary: 'true' } },
    },
    defaultOpen: {
      control: 'text',
      description: 'Index or array of indexes of collapsers that should be open by default. E.g. `0` or `[0, 2]`.',
    },
    onChange: {
      control: false,
      description: 'Callback fired when the open state changes. Receives an array of currently open indexes.',
    },
    children: {
      control: false,
      description: 'Collapser components to render inside the group.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes.',
      table: { defaultValue: { summary: '""' } },
    },
    numbered: {
      control: 'boolean',
      description: 'Automatically prefix each collapser header with a sequential step number (1, 2, 3…). Pairs well with `icon` and `align="right"` on child collapsers.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
CollapserGroup provides a container for multiple Collapser components with built-in spacing and accordion functionality.

## When to Use

- FAQ sections with multiple questions
- Accordion-style navigation or content sections
- Any grouped collapsible content that needs consistent spacing
- When you want only one section open at a time (accordion mode)

## When Not to Use

- For a single Collapser (use Collapser directly)
- When collapsers need independent styling or spacing

## Accessibility

- Maintains all Collapser accessibility features
- Keyboard navigation works within the group
- Accordion mode provides clear single-selection behavior
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CollapserGroup>;

/**
 * Basic group with default spacing, allowing multiple collapsers to be open.
 */
export const Basic: Story = {
  args: {
    spacing: '0.5rem',
    allowMultiple: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<CollapserGroup spacing="0.5rem" allowMultiple>
  <Collapser title="What is this documentation system?">
    <p>
      This is a comprehensive documentation design system that provides
      reusable components and guidelines for creating effective technical
      documentation.
    </p>
  </Collapser>
  <Collapser title="How do I get started?">
    <p>
      Start by installing the component package, then explore the components
      in Storybook to understand their usage and configuration options.
    </p>
  </Collapser>
  <Collapser title="Can I customize the components?">
    <p>
      Yes! All components accept a className prop for custom styling, and you
      can override the default styles using CSS.
    </p>
  </Collapser>
</CollapserGroup>`,
      },
    },
  },
  render: (args) => (
    <CollapserGroup {...args}>
      <Collapser title="What is this documentation system?">
        <p>
          This is a comprehensive documentation design system that provides
          reusable components and guidelines for creating effective technical
          documentation.
        </p>
      </Collapser>
      <Collapser title="How do I get started?">
        <p>
          Start by installing the component package, then explore the components
          in Storybook to understand their usage and configuration options.
        </p>
      </Collapser>
      <Collapser title="Can I customize the components?">
        <p>
          Yes! All components accept a className prop for custom styling, and you
          can override the default styles using CSS.
        </p>
      </Collapser>
    </CollapserGroup>
  ),
};

/**
 * Accordion mode - only one collapser can be open at a time.
 */
export const AccordionMode: Story = {
  args: {
    allowMultiple: false,
  },
  parameters: {
    docs: {
      source: {
        code: `<CollapserGroup allowMultiple={false}>
  <Collapser title="Installation">
    <p>Install the package using npm or yarn:</p>
    <pre>npm install @roadlittledawn/docs-design-system</pre>
  </Collapser>
  <Collapser title="Configuration">
    <p>Import the CSS and components in your application:</p>
    <pre>import '@roadlittledawn/docs-design-system/dist/styles.css';</pre>
  </Collapser>
  <Collapser title="Usage">
    <p>Use the components in your React application:</p>
    <pre>{'<Button variant="primary">Click me</Button>'}</pre>
  </Collapser>
</CollapserGroup>`,
      },
    },
  },
  render: (args) => (
    <CollapserGroup {...args}>
      <Collapser title="Installation">
        <p>Install the package using npm or yarn:</p>
        <pre>npm install @roadlittledawn/docs-design-system</pre>
      </Collapser>
      <Collapser title="Configuration">
        <p>Import the CSS and components in your application:</p>
        <pre>import '@roadlittledawn/docs-design-system/dist/styles.css';</pre>
      </Collapser>
      <Collapser title="Usage">
        <p>Use the components in your React application:</p>
        <pre>{'<Button variant="primary">Click me</Button>'}</pre>
      </Collapser>
    </CollapserGroup>
  ),
};

/**
 * Custom spacing between collapsers.
 */
export const CustomSpacing: Story = {
  args: {
    spacing: '1.5rem',
  },
  parameters: {
    docs: {
      source: {
        code: `<CollapserGroup spacing="1.5rem">
  <Collapser title="Section 1">
    <p>Content with larger spacing between sections.</p>
  </Collapser>
  <Collapser title="Section 2">
    <p>This makes the layout more breathable.</p>
  </Collapser>
  <Collapser title="Section 3">
    <p>Useful for prominent content sections.</p>
  </Collapser>
</CollapserGroup>`,
      },
    },
  },
  render: (args) => (
    <CollapserGroup {...args}>
      <Collapser title="Section 1">
        <p>Content with larger spacing between sections.</p>
      </Collapser>
      <Collapser title="Section 2">
        <p>This makes the layout more breathable.</p>
      </Collapser>
      <Collapser title="Section 3">
        <p>Useful for prominent content sections.</p>
      </Collapser>
    </CollapserGroup>
  ),
};

/**
 * One collapser open by default.
 */
export const DefaultOpen: Story = {
  args: {
    defaultOpen: 0,
  },
  parameters: {
    docs: {
      source: {
        code: `<CollapserGroup defaultOpen={0}>
  <Collapser title="Getting Started">
    <p>This section is open by default.</p>
  </Collapser>
  <Collapser title="Advanced Topics">
    <p>This section starts closed.</p>
  </Collapser>
  <Collapser title="API Reference">
    <p>This section also starts closed.</p>
  </Collapser>
</CollapserGroup>`,
      },
    },
  },
  render: (args) => (
    <CollapserGroup {...args}>
      <Collapser title="Getting Started">
        <p>This section is open by default.</p>
      </Collapser>
      <Collapser title="Advanced Topics">
        <p>This section starts closed.</p>
      </Collapser>
      <Collapser title="API Reference">
        <p>This section also starts closed.</p>
      </Collapser>
    </CollapserGroup>
  ),
};

/**
 * Multiple collapsers open by default.
 */
export const MultipleDefaultOpen: Story = {
  args: {
    defaultOpen: [0, 2],
  },
  parameters: {
    docs: {
      source: {
        code: `<CollapserGroup defaultOpen={[0, 2]}>
  <Collapser title="Introduction">
    <p>This section is open by default.</p>
  </Collapser>
  <Collapser title="Installation">
    <p>This section starts closed.</p>
  </Collapser>
  <Collapser title="Quick Start">
    <p>This section is also open by default.</p>
  </Collapser>
</CollapserGroup>`,
      },
    },
  },
  render: (args) => (
    <CollapserGroup {...args}>
      <Collapser title="Introduction">
        <p>This section is open by default.</p>
      </Collapser>
      <Collapser title="Installation">
        <p>This section starts closed.</p>
      </Collapser>
      <Collapser title="Quick Start">
        <p>This section is also open by default.</p>
      </Collapser>
    </CollapserGroup>
  ),
};

/**
 * Setting `numbered` on CollapserGroup automatically prefixes each collapser header
 * with a sequential step number (1., 2., …), closely matching the reference screenshot
 * with number + icon on the left and right-aligned title text.
 * Customise the number colour with `--dds-collapser-step-number-color`.
 */
export const NumberedGroup: Story = {
  args: {
    numbered: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<CollapserGroup numbered>
  <Collapser title="Decrease pain" align="right" icon={<IconBolt />}>
    <p>Step numbers are injected automatically — no extra props needed on each item.</p>
  </Collapser>
  <Collapser title="Align your workflow" align="right" icon={<IconBook />}>
    <p>Combine numbered with icons and right-aligned titles.</p>
  </Collapser>
  <Collapser title="Learn to move" align="right" icon={<IconStar />}>
    <p>Each entry gets a sequential step number on the far left.</p>
  </Collapser>
  <Collapser title="Build strength" align="right" icon={<IconSettings />}>
    <p>Customise the number colour with --dds-collapser-step-number-color.</p>
  </Collapser>
</CollapserGroup>`,
      },
    },
  },
  render: (args) => (
    <CollapserGroup {...args}>
      <Collapser title="Decrease pain" align="right" icon={<IconBolt />}>
        <p style={{ color: 'var(--dds-collapser-text)' }}>
          Step numbers are injected automatically — no extra props needed on each item.
        </p>
      </Collapser>
      <Collapser title="Align your workflow" align="right" icon={<IconBook />}>
        <p style={{ color: 'var(--dds-collapser-text)' }}>
          Combine <code>numbered</code> with icons and right-aligned titles for a
          clean annotated-list layout.
        </p>
      </Collapser>
      <Collapser title="Learn to move" align="right" icon={<IconStar />}>
        <p style={{ color: 'var(--dds-collapser-text)' }}>
          Each entry gets a sequential step number on the far left.
        </p>
      </Collapser>
      <Collapser title="Build strength" align="right" icon={<IconSettings />}>
        <p style={{ color: 'var(--dds-collapser-text)' }}>
          Customise the number colour with <code>--dds-collapser-step-number-color</code>.
        </p>
      </Collapser>
    </CollapserGroup>
  ),
};
