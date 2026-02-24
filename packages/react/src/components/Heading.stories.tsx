import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

/**
 * The Heading component renders semantic HTML headings with consistent styling.
 */
const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The Heading component provides semantic HTML headings (h1-h4) with consistent styling.

## When to Use

- For page and section titles
- To create proper document structure
- When semantic HTML heading levels are important for SEO and accessibility
- For creating a clear content hierarchy

## When Not to Use

- For text that looks like a heading but isn't structurally a heading (use Typography)
- For headings deeper than h4 (h5, h6 are not supported - reconsider your document structure)
- For buttons or links that look like headings

## Accessibility

- Uses proper semantic HTML heading elements (h1-h4)
- Creates a logical document outline for screen readers
- Helps users navigate content with assistive technology
- Important for SEO and document structure

## Best Practices

- Use only one h1 per page
- Don't skip heading levels (don't jump from h2 to h4)
- Keep headings concise and descriptive
- Use headings to create a logical document structure
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

/**
 * Level 1 heading (h1) - typically used once per page for the main title.
 */
export const Level1: Story = {
  args: {
    level: 1,
    children: 'Page Title (H1)',
  },
  parameters: {
    docs: {
      source: {
        code: `<Heading level={1}>Page Title (H1)</Heading>`,
      },
    },
  },
};

/**
 * Level 2 heading (h2) - used for major sections.
 */
export const Level2: Story = {
  args: {
    level: 2,
    children: 'Section Title (H2)',
  },
  parameters: {
    docs: {
      source: {
        code: `<Heading level={2}>Section Title (H2)</Heading>`,
      },
    },
  },
};

/**
 * Level 3 heading (h3) - used for subsections.
 */
export const Level3: Story = {
  args: {
    level: 3,
    children: 'Subsection Title (H3)',
  },
  parameters: {
    docs: {
      source: {
        code: `<Heading level={3}>Subsection Title (H3)</Heading>`,
      },
    },
  },
};

/**
 * Level 4 heading (h4) - used for sub-subsections.
 */
export const Level4: Story = {
  args: {
    level: 4,
    children: 'Sub-subsection Title (H4)',
  },
  parameters: {
    docs: {
      source: {
        code: `<Heading level={4}>Sub-subsection Title (H4)</Heading>`,
      },
    },
  },
};

/**
 * All heading levels displayed together to show the hierarchy.
 */
export const AllLevels: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div>
  <Heading level={1}>Level 1 - Main Page Title</Heading>
  <p>Use h1 for the main page title. There should only be one h1 per page.</p>

  <Heading level={2}>Level 2 - Major Section</Heading>
  <p>Use h2 for major sections of your page.</p>

  <Heading level={3}>Level 3 - Subsection</Heading>
  <p>Use h3 for subsections within major sections.</p>

  <Heading level={4}>Level 4 - Sub-subsection</Heading>
  <p>Use h4 for sub-subsections. If you need deeper levels, reconsider your document structure.</p>
</div>`,
      },
    },
  },
  render: () => (
    <div>
      <Heading level={1}>Level 1 - Main Page Title</Heading>
      <p style={{ marginBottom: '1rem', color: '#666' }}>
        Use h1 for the main page title. There should only be one h1 per page.
      </p>

      <Heading level={2}>Level 2 - Major Section</Heading>
      <p style={{ marginBottom: '1rem', color: '#666' }}>
        Use h2 for major sections of your page.
      </p>

      <Heading level={3}>Level 3 - Subsection</Heading>
      <p style={{ marginBottom: '1rem', color: '#666' }}>
        Use h3 for subsections within major sections.
      </p>

      <Heading level={4}>Level 4 - Sub-subsection</Heading>
      <p style={{ color: '#666' }}>
        Use h4 for sub-subsections. If you need deeper levels, reconsider your document structure.
      </p>
    </div>
  ),
};

/**
 * Example of a properly structured document hierarchy.
 */
export const DocumentStructure: Story = {
  parameters: {
    docs: {
      source: {
        code: `<div>
  <Heading level={1}>Getting Started Guide</Heading>
  <p>Introduction to the documentation system...</p>

  <Heading level={2}>Installation</Heading>
  <p>How to install the components...</p>

  <Heading level={3}>Prerequisites</Heading>
  <p>What you need before installing...</p>

  <Heading level={3}>Installation Steps</Heading>
  <p>Step-by-step installation instructions...</p>

  <Heading level={2}>Configuration</Heading>
  <p>How to configure the system...</p>

  <Heading level={3}>Basic Configuration</Heading>
  <p>Essential configuration options...</p>

  <Heading level={4}>Environment Variables</Heading>
  <p>Required environment variables...</p>
</div>`,
      },
    },
  },
  render: () => (
    <div>
      <Heading level={1}>Getting Started Guide</Heading>
      <p>Introduction to the documentation system...</p>

      <Heading level={2}>Installation</Heading>
      <p>How to install the components...</p>

      <Heading level={3}>Prerequisites</Heading>
      <p>What you need before installing...</p>

      <Heading level={3}>Installation Steps</Heading>
      <p>Step-by-step installation instructions...</p>

      <Heading level={2}>Configuration</Heading>
      <p>How to configure the system...</p>

      <Heading level={3}>Basic Configuration</Heading>
      <p>Essential configuration options...</p>

      <Heading level={4}>Environment Variables</Heading>
      <p>Required environment variables...</p>
    </div>
  ),
};
