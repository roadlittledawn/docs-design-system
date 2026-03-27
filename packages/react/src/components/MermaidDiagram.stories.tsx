import type { Meta, StoryObj } from '@storybook/react';
import { MermaidDiagram } from './MermaidDiagram';

const meta: Meta<typeof MermaidDiagram> = {
  title: 'Components/MermaidDiagram',
  component: MermaidDiagram,
  tags: ['autodocs'],
  argTypes: {
    chart: {
      control: 'text',
      description: 'Mermaid diagram definition string.',
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
Renders Mermaid diagram syntax as an SVG. Automatically switches between light and dark Mermaid themes based on the design system's dark mode state.

## When to Use

- Flowcharts, sequence diagrams, Gantt charts, or any Mermaid-supported diagram type
- Inline diagrams in documentation pages
- Architecture or process visualizations

## When Not to Use

- For static images or screenshots (use \`<img>\` or the \`Icon\` component)
- For code snippets (use \`CodeBlock\`)
- For simple bullet-point lists or tables

## Accessibility

- Container has \`role="img"\` and \`aria-label="Mermaid diagram"\`
- Error states use \`role="alert"\` for screen reader announcement
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MermaidDiagram>;

/** Basic flowchart diagram. */
export const Flowchart: Story = {
  args: {
    chart: `graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Do something]
    B -->|No| D[Do something else]
    C --> E[End]
    D --> E`,
  },
  parameters: {
    docs: {
      source: {
        code: `<MermaidDiagram chart={\`graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Do something]
    B -->|No| D[Do something else]
    C --> E[End]
    D --> E\`} />`,
      },
    },
  },
};

/** Gantt chart diagram. */
export const Gantt: Story = {
  args: {
    chart: `gantt
    title Project Schedule
    dateFormat  YYYY-MM-DD
    section Planning
    Requirements :a1, 2024-01-01, 14d
    Design       :a2, after a1, 10d
    section Development
    Implementation :b1, after a2, 21d
    Testing        :b2, after b1, 14d`,
  },
  parameters: {
    docs: {
      source: {
        code: `<MermaidDiagram chart={\`gantt
    title Project Schedule
    dateFormat  YYYY-MM-DD
    section Planning
    Requirements :a1, 2024-01-01, 14d
    Design       :a2, after a1, 10d
    section Development
    Implementation :b1, after a2, 21d
    Testing        :b2, after b1, 14d\`} />`,
      },
    },
  },
};

/** Shows the error state when diagram syntax is invalid. */
export const InvalidSyntax: Story = {
  args: {
    chart: 'this is not valid mermaid syntax %%%',
  },
  parameters: {
    docs: {
      source: {
        code: `<MermaidDiagram chart="this is not valid mermaid syntax %%%" />`,
      },
    },
  },
};
