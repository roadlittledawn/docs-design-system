import type { Meta, StoryObj } from '@storybook/react';
import { CardGrid } from './CardGrid';
import { Card } from './Card';

/**
 * The CardGrid component arranges Card components in a responsive grid layout.
 */
const meta: Meta<typeof CardGrid> = {
  title: 'Components/CardGrid',
  component: CardGrid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The CardGrid component provides a responsive grid layout for displaying multiple cards.

## When to Use

- To display multiple related cards in an organized layout
- To create feature grids or product showcases
- To organize navigation options or menu items
- When you need a responsive multi-column layout

## When Not to Use

- For single cards (just use the Card component)
- For lists without card-style containers (use regular list elements)
- When you need a more complex custom layout

## Accessibility

- Uses CSS Grid for proper layout semantics
- Responsive design ensures content is accessible at all screen sizes
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardGrid>;

/**
 * Grid with 2 columns (responsive).
 */
export const TwoColumns: Story = {
  args: {
    columns: 2,
    children: (
      <>
        <Card title="Getting Started">Learn the basics of our documentation system.</Card>
        <Card title="Components">Explore all available UI components.</Card>
        <Card title="Best Practices">Follow guidelines for effective documentation.</Card>
        <Card title="Examples">See real-world usage examples.</Card>
      </>
    ),
  },
};

/**
 * Grid with 3 columns (default, responsive).
 */
export const ThreeColumns: Story = {
  args: {
    columns: 3,
    children: (
      <>
        <Card title="Tutorials">Step-by-step learning guides.</Card>
        <Card title="How-To Guides">Task-oriented instructions.</Card>
        <Card title="Reference">Technical reference documentation.</Card>
        <Card title="Explanation">Conceptual background information.</Card>
        <Card title="API">Complete API documentation.</Card>
        <Card title="FAQ">Frequently asked questions.</Card>
      </>
    ),
  },
};

/**
 * Grid with 4 columns (responsive).
 */
export const FourColumns: Story = {
  args: {
    columns: 4,
    children: (
      <>
        <Card titleColor="blue" backgroundColor="blue">Feature 1</Card>
        <Card titleColor="green" backgroundColor="green">Feature 2</Card>
        <Card titleColor="purple" backgroundColor="purple">Feature 3</Card>
        <Card titleColor="red" backgroundColor="red">Feature 4</Card>
        <Card titleColor="yellow" backgroundColor="yellow">Feature 5</Card>
        <Card titleColor="gray" backgroundColor="gray">Feature 6</Card>
        <Card titleColor="blue" backgroundColor="blue">Feature 7</Card>
        <Card titleColor="green" backgroundColor="green">Feature 8</Card>
      </>
    ),
  },
};

/**
 * Grid with clickable cards.
 */
export const ClickableCards: Story = {
  args: {
    columns: 3,
    children: (
      <>
        <Card title="Documentation" href="/docs">Complete documentation guide</Card>
        <Card title="API Reference" href="/api">Detailed API reference</Card>
        <Card title="Examples" href="/examples">Code examples and patterns</Card>
      </>
    ),
  },
};
