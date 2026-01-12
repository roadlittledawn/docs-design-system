import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

/**
 * The Typography component provides consistent text styling across your documentation.
 */
const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The Typography component renders text with predefined styles for consistency.

## When to Use

- For body text and paragraphs
- For captions and small text
- When you need consistent text styling
- For headings when you don't need semantic HTML heading levels

## When Not to Use

- For semantic headings (use Heading component)
- For buttons (use Button component)
- For links (use Link component)

## Accessibility

- Uses proper HTML elements based on variant
- Maintains readable contrast ratios
- Supports custom classes for additional styling
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

/**
 * H1 heading style.
 */
export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1 Style',
  },
};

/**
 * H2 heading style.
 */
export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2 Style',
  },
};

/**
 * H3 heading style.
 */
export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3 Style',
  },
};

/**
 * H4 heading style.
 */
export const H4: Story = {
  args: {
    variant: 'h4',
    children: 'Heading 4 Style',
  },
};

/**
 * Paragraph style (default).
 */
export const Paragraph: Story = {
  args: {
    variant: 'p',
    children: 'This is a paragraph with the default typography style. It provides readable text for body content.',
  },
};

/**
 * Caption style for small text.
 */
export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'This is caption text, typically used for figure captions or footnotes.',
  },
};

/**
 * All typography variants displayed together.
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="h1">Heading 1 Style</Typography>
      <Typography variant="h2">Heading 2 Style</Typography>
      <Typography variant="h3">Heading 3 Style</Typography>
      <Typography variant="h4">Heading 4 Style</Typography>
      <Typography variant="p">
        This is paragraph text. It's the default variant and is suitable for
        body content and general text throughout your documentation.
      </Typography>
      <Typography variant="caption">
        This is caption text, used for smaller annotations or supplementary information.
      </Typography>
    </div>
  ),
};
