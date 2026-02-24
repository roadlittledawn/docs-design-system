import type { Meta, StoryObj } from '@storybook/react';
import { CollapserGroup } from './CollapserGroup';
import { Collapser } from './Collapser';

/**
 * CollapserGroup manages multiple Collapser components with consistent spacing
 * and optional accordion behavior.
 */
const meta: Meta<typeof CollapserGroup> = {
  title: 'Components/CollapserGroup',
  component: CollapserGroup,
  tags: ['autodocs'],
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
