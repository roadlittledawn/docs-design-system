import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

/**
 * The Link component creates styled hyperlinks with automatic external link handling.
 */
const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The Link component provides consistent link styling and automatically handles external links.

## When to Use

- For navigation between pages
- For links to external resources
- For anchor links within a page
- When you need a text link instead of a button

## When Not to Use

- For primary actions (use Button component)
- For navigation that looks like a button (use Button)
- For clickable cards (use Card with href prop)

## Accessibility

- Uses proper HTML anchor elements
- External links automatically open in new tabs with proper security attributes
- External links include a visual indicator icon
- Screen readers announce the link purpose

## External Link Behavior

Links starting with \`http://\` or \`https://\` are automatically treated as external:
- Open in a new tab (target="_blank")
- Include security attributes (rel="noopener noreferrer")
- Display an external link icon
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

/**
 * Internal link (relative URL).
 */
export const Internal: Story = {
  args: {
    href: '/docs/components',
    children: 'View Components Documentation',
  },
};

/**
 * External link (absolute URL) - opens in new tab with icon.
 */
export const External: Story = {
  args: {
    href: 'https://github.com/your-repo/docs-design-system',
    children: 'View on GitHub',
  },
};

/**
 * Anchor link to a section on the same page.
 */
export const AnchorLink: Story = {
  args: {
    href: '#installation',
    children: 'Jump to Installation',
  },
};

/**
 * Link within body text.
 */
export const InlineLink: Story = {
  render: () => (
    <p>
      For more information, check out the{' '}
      <Link href="/docs/getting-started">Getting Started guide</Link>
      {' '}or visit our{' '}
      <Link href="https://github.com">GitHub repository</Link>.
    </p>
  ),
};

/**
 * Multiple links in a list.
 */
export const LinkList: Story = {
  render: () => (
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <li>
        <Link href="/docs/introduction">Introduction</Link>
      </li>
      <li>
        <Link href="/docs/components">Components</Link>
      </li>
      <li>
        <Link href="/docs/best-practices">Best Practices</Link>
      </li>
      <li>
        <Link href="https://github.com">GitHub</Link>
      </li>
      <li>
        <Link href="https://npmjs.com">NPM</Link>
      </li>
    </ul>
  ),
};

/**
 * Comparison of internal and external links.
 */
export const InternalVsExternal: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <strong>Internal Link:</strong>
        <br />
        <Link href="/docs/components">Components (internal)</Link>
        <p style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.5rem' }}>
          Opens in the same tab, no icon
        </p>
      </div>
      <div>
        <strong>External Link:</strong>
        <br />
        <Link href="https://example.com">Example.com (external)</Link>
        <p style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.5rem' }}>
          Opens in new tab, includes external link icon
        </p>
      </div>
    </div>
  ),
};
