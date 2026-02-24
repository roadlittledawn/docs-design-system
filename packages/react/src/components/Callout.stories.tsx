import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './Callout';

/**
 * The Callout component highlights important information, warnings, tips, and course-specific content.
 */
const meta: Meta<typeof Callout> = {
  title: 'Components/Callout',
  component: Callout,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The Callout component draws attention to important information within documentation pages.

## When to Use

- **Caution**: For warnings about potential issues or things to avoid
- **Important**: For critical information users must know
- **Tip**: For helpful suggestions and best practices
- **Course**: For course-specific or learning-oriented content

## When Not to Use

- For general content (use regular paragraphs)
- For code examples (use code blocks)
- For navigation (use Link or Button components)

## Accessibility

- Uses semantic heading tags for titles
- Color alone is not used to convey meaning (icons and labels provide context)
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Callout>;

/**
 * Caution callout for warnings and things to avoid.
 */
export const Caution: Story = {
  args: {
    variant: 'caution',
    children: 'This operation cannot be undone. Make sure you have a backup before proceeding.',
  },
  parameters: {
    docs: {
      source: {
        code: `<Callout variant="caution">
  This operation cannot be undone. Make sure you have a backup before proceeding.
</Callout>`,
      },
    },
  },
};

/**
 * Important callout for critical information.
 */
export const Important: Story = {
  args: {
    variant: 'important',
    children: 'All users must update their passwords by the end of the month to comply with the new security policy.',
  },
  parameters: {
    docs: {
      source: {
        code: `<Callout variant="important">
  All users must update their passwords by the end of the month to comply with the new security policy.
</Callout>`,
      },
    },
  },
};

/**
 * Tip callout for helpful suggestions.
 */
export const Tip: Story = {
  args: {
    variant: 'tip',
    children: 'You can use keyboard shortcuts (Cmd+K or Ctrl+K) to quickly search the documentation.',
  },
  parameters: {
    docs: {
      source: {
        code: `<Callout variant="tip">
  You can use keyboard shortcuts (Cmd+K or Ctrl+K) to quickly search the documentation.
</Callout>`,
      },
    },
  },
};

/**
 * Course callout for learning-oriented content.
 */
export const Course: Story = {
  args: {
    variant: 'course',
    children: 'In this section, you will learn how to configure your development environment and install the necessary dependencies.',
  },
  parameters: {
    docs: {
      source: {
        code: `<Callout variant="course">
  In this section, you will learn how to configure your development environment and install the necessary dependencies.
</Callout>`,
      },
    },
  },
};

/**
 * Callout with a custom title.
 */
export const CustomTitle: Story = {
  args: {
    variant: 'important',
    title: 'Security Notice',
    children: 'Two-factor authentication is now required for all administrator accounts.',
  },
  parameters: {
    docs: {
      source: {
        code: `<Callout variant="important" title="Security Notice">
  Two-factor authentication is now required for all administrator accounts.
</Callout>`,
      },
    },
  },
};

/**
 * Callout without a title.
 */
export const NoTitle: Story = {
  args: {
    variant: 'tip',
    title: null,
    children: 'This callout has no title and displays only the content.',
  },
  parameters: {
    docs: {
      source: {
        code: `<Callout variant="tip" title={null}>
  This callout has no title and displays only the content.
</Callout>`,
      },
    },
  },
};

/**
 * All callout variants displayed together for comparison.
 */
export const AllVariants: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
  <Callout variant="caution">
    Caution: Be careful when modifying system files.
  </Callout>
  <Callout variant="important">
    Important: This feature requires administrator privileges.
  </Callout>
  <Callout variant="tip">
    Tip: Use the search function to find topics quickly.
  </Callout>
  <Callout variant="course">
    Course: This module covers the basics of component design.
  </Callout>
</div>`,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Callout variant="caution">
        Caution: Be careful when modifying system files.
      </Callout>
      <Callout variant="important">
        Important: This feature requires administrator privileges.
      </Callout>
      <Callout variant="tip">
        Tip: Use the search function to find topics quickly.
      </Callout>
      <Callout variant="course">
        Course: This module covers the basics of component design.
      </Callout>
    </div>
  ),
};
