import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

/**
 * The Card component displays content in a contained, elevated box with optional title and background color.
 */
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The Card component provides a flexible container for displaying content with visual hierarchy.

## When to Use

- To group related content together
- To create clickable navigation elements
- To display feature highlights or key information
- To organize content in grid layouts

## When Not to Use

- For plain text content (use typography components)
- For alerts or notifications (use Callout)
- For extensive content (consider using sections or pages)

## Accessibility

- Clickable cards use proper link semantics
- Color is not the only means of conveying information
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

/**
 * Basic card with title and content.
 */
export const Basic: Story = {
  args: {
    title: 'Getting Started',
    children: 'Learn the basics of using this documentation system.',
  },
  parameters: {
    docs: {
      source: {
        code: `<Card title="Getting Started">
  Learn the basics of using this documentation system.
</Card>`,
      },
    },
  },
};

/**
 * Clickable card that links to another page.
 */
export const Clickable: Story = {
  args: {
    title: 'API Reference',
    href: '/docs/api',
    children: 'Complete reference for all available components and utilities.',
  },
  parameters: {
    docs: {
      source: {
        code: `<Card title="API Reference" href="/docs/api">
  Complete reference for all available components and utilities.
</Card>`,
      },
    },
  },
};

/**
 * Card with colored background.
 */
export const ColoredBackground: Story = {
  args: {
    title: 'New Feature',
    titleColor: 'blue',
    backgroundColor: 'blue',
    children: 'Check out our latest component additions.',
  },
  parameters: {
    docs: {
      source: {
        code: `<Card title="New Feature" titleColor="blue" backgroundColor="blue">
  Check out our latest component additions.
</Card>`,
      },
    },
  },
};

/**
 * Card without a title.
 */
export const NoTitle: Story = {
  args: {
    children: 'This card displays content without a title.',
  },
  parameters: {
    docs: {
      source: {
        code: `<Card>This card displays content without a title.</Card>`,
      },
    },
  },
};

/**
 * All title color variants.
 */
export const TitleColors: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
  <Card title="Blue Title" titleColor="blue">Content with blue title</Card>
  <Card title="Green Title" titleColor="green">Content with green title</Card>
  <Card title="Purple Title" titleColor="purple">Content with purple title</Card>
  <Card title="Red Title" titleColor="red">Content with red title</Card>
  <Card title="Yellow Title" titleColor="yellow">Content with yellow title</Card>
  <Card title="Gray Title" titleColor="gray">Content with gray title</Card>
</div>`,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Card title="Blue Title" titleColor="blue">Content with blue title</Card>
      <Card title="Green Title" titleColor="green">Content with green title</Card>
      <Card title="Purple Title" titleColor="purple">Content with purple title</Card>
      <Card title="Red Title" titleColor="red">Content with red title</Card>
      <Card title="Yellow Title" titleColor="yellow">Content with yellow title</Card>
      <Card title="Gray Title" titleColor="gray">Content with gray title</Card>
    </div>
  ),
};

/**
 * All background color variants.
 */
export const BackgroundColors: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
  <Card title="Blue" backgroundColor="blue">Card with blue background</Card>
  <Card title="Green" backgroundColor="green">Card with green background</Card>
  <Card title="Purple" backgroundColor="purple">Card with purple background</Card>
  <Card title="Red" backgroundColor="red">Card with red background</Card>
  <Card title="Yellow" backgroundColor="yellow">Card with yellow background</Card>
  <Card title="Gray" backgroundColor="gray">Card with gray background</Card>
  <Card title="White" backgroundColor="white">Card with white background</Card>
</div>`,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Card title="Blue" backgroundColor="blue">Card with blue background</Card>
      <Card title="Green" backgroundColor="green">Card with green background</Card>
      <Card title="Purple" backgroundColor="purple">Card with purple background</Card>
      <Card title="Red" backgroundColor="red">Card with red background</Card>
      <Card title="Yellow" backgroundColor="yellow">Card with yellow background</Card>
      <Card title="Gray" backgroundColor="gray">Card with gray background</Card>
      <Card title="White" backgroundColor="white">Card with white background</Card>
    </div>
  ),
};
