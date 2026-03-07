import type { Meta, StoryObj } from '@storybook/react';
import { Collapser } from './Collapser';
import { CollapserGroup } from './CollapserGroup';

// Spoofed icon components for demonstration purposes
// (replace with your own Icon component when available)
const IconBook = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const IconBolt = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
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
 * The Collapser component creates expandable/collapsible content sections with smooth animations.
 */
const meta: Meta<typeof Collapser> = {
  title: 'Components/Collapser',
  component: Collapser,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title text displayed in the collapsible header.',
    },
    id: {
      control: 'text',
      description: 'Optional ID for the title element, useful for anchor links.',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Whether the collapser should be open by default (uncontrolled mode).',
      table: { defaultValue: { summary: 'false' } },
    },
    align: {
      control: 'radio',
      options: ['left', 'right'],
      description: "Alignment of the title within the header. Use 'right' for right-aligned titles, typically paired with an icon on the left.",
      table: { defaultValue: { summary: 'left' } },
    },
    icon: {
      control: false,
      description: 'Optional icon or React element rendered on the left side of the header, before the title text.',
    },
    stepNumber: {
      control: 'number',
      description: 'Numeric step label shown on the far left. Auto-injected by `CollapserGroup` when `numbered` is true. Colour controlled via `--dds-collapser-step-number-color`.',
    },
    children: {
      control: false,
      description: 'Content to show/hide when toggling.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes.',
      table: { defaultValue: { summary: '""' } },
    },
  },
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
- Icons passed via the \`icon\` prop should be wrapped in a container with \`aria-hidden="true"\` since the title provides the accessible label

## Keyboard Shortcuts

- **s** or **f**: Show/expand the content
- **h**: Hide/collapse the content
- **Enter** or **Space**: Toggle expand/collapse

## Customising Step Numbers

Override the CSS custom property to change the step number colour:

\`\`\`css
.my-steps {
  --dds-collapser-step-number-color: #7c3aed;
}
\`\`\`
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
  parameters: {
    docs: {
      source: {
        code: `<Collapser title="Click to expand">
  <p>
    This content is hidden by default and can be revealed by clicking the title.
    It includes smooth height animations for a better user experience.
  </p>
</Collapser>`,
      },
    },
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
  parameters: {
    docs: {
      source: {
        code: `<Collapser title="This section starts open" defaultOpen>
  <p>This collapser is open by default. Users can still click to collapse it.</p>
</Collapser>`,
      },
    },
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
  parameters: {
    docs: {
      source: {
        code: `<Collapser title="Section with ID" id="faq-question-1">
  <p>
    This collapser has an ID on its title, which is useful for anchor links
    and accessibility purposes.
  </p>
</Collapser>`,
      },
    },
  },
};

/**
 * Collapser with an icon rendered on the left side of the header.
 * The icon prop accepts any React element — use your own icon component or SVG.
 */
export const WithIcon: Story = {
  args: {
    title: 'Documentation guides',
    icon: <IconBook />,
    children: (
      <p style={{ color: 'var(--dds-collapser-text)' }}>
        Icons help users quickly identify sections at a glance. Pass any React
        element to the <code>icon</code> prop to display it on the left side of
        the header.
      </p>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `<Collapser title="Documentation guides" icon={<IconBook />}>
  <p>
    Icons help users quickly identify sections at a glance. Pass any React
    element to the icon prop to display it on the left side of the header.
  </p>
</Collapser>`,
      },
    },
  },
};

/**
 * Collapser with the title right-aligned within the header.
 * Use this for design layouts where the title should appear on the right
 * and content (such as a step number or icon) anchors the left.
 */
export const RightAligned: Story = {
  args: {
    title: 'Right-aligned title',
    align: 'right',
    children: (
      <p style={{ color: 'var(--dds-collapser-text)' }}>
        The title is right-aligned in the header, with the chevron remaining on
        the far right. Long titles will wrap to a new line on small screens
        rather than colliding with other elements.
      </p>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `<Collapser title="Right-aligned title" align="right">
  <p>
    The title is right-aligned in the header, with the chevron remaining on
    the far right.
  </p>
</Collapser>`,
      },
    },
  },
};

/**
 * Collapser with both an icon and right-aligned title — matching the
 * reference screenshot layout where an icon anchors the left and the
 * title text flows to the right before the chevron.
 */
export const WithIconRightAligned: Story = {
  args: {
    title: 'Quick start guide',
    align: 'right',
    icon: <IconBolt />,
    children: (
      <p style={{ color: 'var(--dds-collapser-text)' }}>
        Combining <code>icon</code> and <code>align="right"</code> produces a
        layout where the icon anchors the left edge, the title flows to the
        right, and the chevron stays at the far right.
      </p>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `<Collapser title="Quick start guide" align="right" icon={<IconBolt />}>
  <p>
    Combining icon and align="right" produces a layout where the icon anchors
    the left edge, the title flows to the right, and the chevron stays at the far right.
  </p>
</Collapser>`,
      },
    },
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
  parameters: {
    docs: {
      source: {
        code: `<Collapser title="How do I install the components?">
  <div>
    <p>You can install the components using npm:</p>
    <pre>npm install @docs-design-system/ui</pre>
    <p>Then import them in your React application:</p>
    <pre>import {'{ Button, Card }'} from '@docs-design-system/ui';</pre>
  </div>
</Collapser>`,
      },
    },
  },
};

/**
 * Shows all four header layout variants side-by-side for visual comparison:
 * default left-aligned, left-aligned with icon, right-aligned, and right-aligned with icon.
 */
export const AllVariants: Story = {
  parameters: {
    docs: {
      source: {
        code: `{/* Left-aligned (default) */}
<Collapser title="Left-aligned (default)">
  <p>The standard layout — title on the left, chevron on the right.</p>
</Collapser>

{/* Left-aligned with icon */}
<Collapser title="Left-aligned with icon" icon={<IconBook />}>
  <p>An icon appears to the left of the title.</p>
</Collapser>

{/* Right-aligned */}
<Collapser title="Right-aligned title" align="right">
  <p>Title text flows to the right. Chevron stays at the far right.</p>
</Collapser>

{/* Right-aligned with icon */}
<Collapser title="Right-aligned with icon" align="right" icon={<IconBolt />}>
  <p>Icon anchors the left, title flows right, chevron at the far right.</p>
</Collapser>`,
      },
    },
  },
  render: () => (
    <div>
      <Collapser title="Left-aligned (default)">
        <p style={{ color: 'var(--dds-collapser-text)' }}>
          The standard layout — title on the left, chevron on the right.
        </p>
      </Collapser>
      <Collapser title="Left-aligned with icon" icon={<IconBook />}>
        <p style={{ color: 'var(--dds-collapser-text)' }}>
          An icon appears to the left of the title.
        </p>
      </Collapser>
      <Collapser title="Right-aligned title" align="right">
        <p style={{ color: 'var(--dds-collapser-text)' }}>
          Title text flows to the right. Chevron stays at the far right.
        </p>
      </Collapser>
      <Collapser title="Right-aligned with icon" align="right" icon={<IconBolt />}>
        <p style={{ color: 'var(--dds-collapser-text)' }}>
          Icon anchors the left, title flows right, chevron at the far right.
        </p>
      </Collapser>
    </div>
  ),
};

/**
 * Multiple collapsers in a FAQ-style layout using CollapserGroup.
 */
export const FAQExample: Story = {
  parameters: {
    docs: {
      source: {
        code: `<CollapserGroup>
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
</CollapserGroup>`,
      },
    },
  },
  render: () => (
    <CollapserGroup>
      <Collapser title="What is this documentation system?">
        <p style={{ color: 'var(--dds-collapser-text)' }}>
          This is a comprehensive documentation design system that provides
          reusable components and guidelines for creating effective technical
          documentation.
        </p>
      </Collapser>
      <Collapser title="How do I get started?">
        <p style={{ color: 'var(--dds-collapser-text)' }}>
          Start by installing the component package, then explore the components
          in Storybook to understand their usage and configuration options.
        </p>
      </Collapser>
      <Collapser title="Can I customize the components?">
        <p style={{ color: 'var(--dds-collapser-text)' }}>
          Yes! All components accept a className prop for custom styling, and you
          can override the default styles using CSS.
        </p>
      </Collapser>
      <Collapser title="Is this accessible?">
        <p style={{ color: 'var(--dds-collapser-text)' }}>
          Accessibility is a core principle. All components follow WAI-ARIA best
          practices and are keyboard navigable.
        </p>
      </Collapser>
    </CollapserGroup>
  ),
};

/**
 * Example matching the reference screenshot: collapsers in a group where each
 * has a distinct icon on the left and right-aligned title text.
 */
export const IconGroupExample: Story = {
  parameters: {
    docs: {
      source: {
        code: `<CollapserGroup>
  <Collapser title="Getting started" align="right" icon={<IconBook />}>
    <p>Learn the basics and set up your environment.</p>
  </Collapser>
  <Collapser title="Quick actions" align="right" icon={<IconBolt />}>
    <p>Discover shortcuts and power-user features.</p>
  </Collapser>
  <Collapser title="Highlights" align="right" icon={<IconStar />}>
    <p>See what makes this system stand out.</p>
  </Collapser>
  <Collapser title="Configuration" align="right" icon={<IconSettings />}>
    <p>Customise the system to fit your workflow.</p>
  </Collapser>
</CollapserGroup>`,
      },
    },
  },
  render: () => (
    <CollapserGroup>
      <Collapser title="Getting started" align="right" icon={<IconBook />}>
        <p style={{ color: 'var(--dds-collapser-text)' }}>
          Learn the basics and set up your environment.
        </p>
      </Collapser>
      <Collapser title="Quick actions" align="right" icon={<IconBolt />}>
        <p style={{ color: 'var(--dds-collapser-text)' }}>
          Discover shortcuts and power-user features.
        </p>
      </Collapser>
      <Collapser title="Highlights" align="right" icon={<IconStar />}>
        <p style={{ color: 'var(--dds-collapser-text)' }}>
          See what makes this system stand out.
        </p>
      </Collapser>
      <Collapser title="Configuration" align="right" icon={<IconSettings />}>
        <p style={{ color: 'var(--dds-collapser-text)' }}>
          Customise the system to fit your workflow.
        </p>
      </Collapser>
    </CollapserGroup>
  ),
};

/**
 * CollapserGroup with `numbered` auto-numbers each entry.
 * Matches the reference screenshot pattern: step number + icon on the left,
 * title right-aligned, chevron on the far right.
 */
export const NumberedGroup: Story = {
  parameters: {
    docs: {
      source: {
        code: `{/* numbered=true on CollapserGroup auto-injects stepNumber into each child */}
<CollapserGroup numbered>
  <Collapser title="Decrease pain" align="right" icon={<IconBolt />}>
    <p>Step numbers are injected automatically by CollapserGroup.</p>
  </Collapser>
  <Collapser title="Align your workflow" align="right" icon={<IconBook />}>
    <p>Combine numbered with icons and right-aligned titles.</p>
  </Collapser>
  <Collapser title="Learn to move" align="right" icon={<IconStar />}>
    <p>Each entry gets a sequential step number on the far left.</p>
  </Collapser>
  <Collapser title="Configuration" align="right" icon={<IconSettings />}>
    <p>Customise the system to fit your workflow.</p>
  </Collapser>
</CollapserGroup>`,
      },
    },
  },
  render: () => (
    <CollapserGroup numbered>
      <Collapser title="Decrease pain" align="right" icon={<IconBolt />}>
        <p style={{ color: 'var(--dds-collapser-text)' }}>
          Step numbers are injected automatically by CollapserGroup when{' '}
          <code>numbered</code> is true.
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
      <Collapser title="Configuration" align="right" icon={<IconSettings />}>
        <p style={{ color: 'var(--dds-collapser-text)' }}>
          Customise the system to fit your workflow.
        </p>
      </Collapser>
    </CollapserGroup>
  ),
};
