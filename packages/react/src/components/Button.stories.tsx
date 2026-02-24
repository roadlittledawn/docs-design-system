import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

/**
 * The Button component is used for user actions and navigation.
 * It supports multiple variants and sizes to accommodate different use cases.
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The Button component provides a consistent way to trigger actions across your documentation.

## When to Use

- Primary actions like "Submit", "Save", or "Continue"
- Secondary actions like "Cancel" or "Go Back"
- Important calls-to-action within documentation pages

## When Not to Use

- For navigation between pages (use the Link component instead)
- For less important actions (consider using a text link)
- When you need a clickable card (use Card with href prop)

## Accessibility

- All buttons include proper HTML button semantics
- Buttons are keyboard accessible
- Use descriptive button text for screen readers
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * The primary button style is used for the main action on a page.
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="primary">Primary Button</Button>`,
      },
    },
  },
};

/**
 * The secondary button style is used for alternative or less important actions.
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="secondary">Secondary Button</Button>`,
      },
    },
  },
};

/**
 * The outline button style is used for tertiary actions or when you need a more subtle button.
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="outline">Outline Button</Button>`,
      },
    },
  },
};

/**
 * Small button size for compact interfaces or less prominent actions.
 */
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small Button',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="primary" size="sm">Small Button</Button>`,
      },
    },
  },
};

/**
 * Medium is the default button size, suitable for most use cases.
 */
export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Medium Button',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="primary" size="md">Medium Button</Button>`,
      },
    },
  },
};

/**
 * Large button size for prominent calls-to-action.
 */
export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large Button',
  },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="primary" size="lg">Large Button</Button>`,
      },
    },
  },
};

/**
 * Disabled state for buttons that are temporarily unavailable.
 */
export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<Button variant="primary" disabled>Disabled Button</Button>`,
      },
    },
  },
};

/**
 * Example showing all button variants side by side for comparison.
 */
export const AllVariants: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
</div>`,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
};

/**
 * Example showing all button sizes side by side for comparison.
 */
export const AllSizes: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
</div>`,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
