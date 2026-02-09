import type { Meta, StoryObj } from '@storybook/react';
import { Collapser } from './Collapser';

/**
 * The Collapser component creates expandable/collapsible content sections with smooth animations.
 */
const meta: Meta<typeof Collapser> = {
  title: 'Components/Collapser',
  component: Collapser,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The Collapser component allows users to show and hide content sections to reduce visual clutter.

## When to Use

- For FAQ sections where answers can be toggled
- To hide advanced options or detailed information
- For progressive disclosure of content
- When you have lengthy content that doesn't need to be visible all the time

## When Not to Use

- For primary navigation (use proper navigation components)
- For critical information that should always be visible
- When most users will need to expand all sections (just show the content)

## Accessibility

- Uses proper ARIA attributes (aria-expanded)
- Keyboard accessible with Enter and Space keys
- Supports additional keyboard shortcuts: 's' or 'f' to show, 'h' to hide
- Screen reader friendly

## Keyboard Shortcuts

- **s** or **f**: Show/expand the content
- **h**: Hide/collapse the content
- **Enter** or **Space**: Toggle expand/collapse
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Collapser>;

/**
 * Basic collapser that starts collapsed.
 */
export const Basic: Story = {
  args: {
    title: 'Click to expand',
    children: (
      <p>
        This content is hidden by default and can be revealed by clicking the title.
        It includes smooth height animations for a better user experience.
      </p>
    ),
  },
};

/**
 * Collapser that starts in the open state.
 */
export const DefaultOpen: Story = {
  args: {
    title: 'This section starts open',
    defaultOpen: true,
    children: (
      <p>
        This collapser is open by default. Users can still click to collapse it.
      </p>
    ),
  },
};

/**
 * Collapser with an ID for the title.
 */
export const WithID: Story = {
  args: {
    title: 'Section with ID',
    id: 'faq-question-1',
    children: (
      <p>
        This collapser has an ID on its title, which is useful for anchor links
        and accessibility purposes.
      </p>
    ),
  },
};

/**
 * Collapser containing complex content.
 */
export const ComplexContent: Story = {
  args: {
    title: 'How do I install the components?',
    children: (
      <div>
        <p>You can install the components using npm:</p>
        <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
          npm install @docs-design-system/ui
        </pre>
        <p>Then import them in your React application:</p>
        <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
          {`import { Button, Card } from '@docs-design-system/ui';`}
        </pre>
      </div>
    ),
  },
};

/**
 * Multiple collapsers in a FAQ-style layout.
 */
export const FAQExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
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
      <Collapser title="Is this accessible?">
        <p>
          Accessibility is a core principle. All components follow WAI-ARIA best
          practices and are keyboard navigable.
        </p>
      </Collapser>
    </div>
  ),
};
