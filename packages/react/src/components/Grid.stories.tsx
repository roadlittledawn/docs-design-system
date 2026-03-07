import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
import { Column } from './Grid';
import { CodeBlock } from './CodeBlock';

/**
 * `Grid` and `Column` provide a flexible multi-column layout for documentation pages.
 * Common patterns include side-by-side comparisons, image + annotation, and
 * tutorial-style instruction / code pairings.
 */
const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: false,
      description:
        'Number of equal columns, or a fractional-width array (e.g. `[1, 2]` for 1/3 + 2/3).',
      table: { defaultValue: { summary: '2' } },
    },
    gap: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Space between columns. Named sizes map to design tokens.',
      table: { defaultValue: { summary: "'md'" } },
    },
    stackAt: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'never'],
      description: 'Breakpoint at which columns collapse to a single vertical stack.',
      table: { defaultValue: { summary: "'md'" } },
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Vertical alignment of content within each column.',
      table: { defaultValue: { summary: "'stretch'" } },
    },
    columnDivider: {
      control: false,
      description:
        'Vertical line between columns (`{ thickness?, color? }`). Converts to a horizontal rule when stacked.',
    },
    topBorder: {
      control: false,
      description: 'Horizontal rule above the grid (`{ thickness?, color? }`).',
    },
    bottomBorder: {
      control: false,
      description: 'Horizontal rule below the grid (`{ thickness?, color? }`).',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes applied to the grid wrapper.',
      table: { defaultValue: { summary: '""' } },
    },
    children: {
      control: false,
      description: 'Grid content — typically `Column` components.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Layout primitive for multi-column documentation content.

## When to Use

- **Image + annotation** — screenshot or diagram on one side, feature callouts on the other
- **Tutorial / live demo** — prose instructions on one side, sticky code panel on the other
- **Side-by-side comparison** — before/after, two approaches, or option A vs option B
- **Feature grid** — icon + short description repeated across columns

## When Not to Use

- For card-style repeating items of the same type — use \`CardGrid\` instead
- For a single column of content — use standard block-level markup

## Accessibility

- Rendered as a semantic \`<div>\`; no implicit ARIA role (not a data table)
- Source order should match reading order; avoid visual reordering via CSS \`order\`
- Column dividers are decorative and carry no meaning for assistive technology
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

/* -------------------------------------------------------------------------- */
/* Helpers                                                                     */
/* -------------------------------------------------------------------------- */

const textColor = { color: 'var(--dds-tabs-panel-text)' };
const subtle = { color: 'var(--dds-tabs-panel-text)', fontFamily: 'sans-serif', margin: 0 };

function Placeholder({
  label,
  height = 120,
  bg = 'rgba(99,102,241,0.1)',
}: {
  label: string;
  height?: number;
  bg?: string;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height,
        background: bg,
        borderRadius: 6,
        ...textColor,
        fontFamily: 'sans-serif',
        fontWeight: 600,
        fontSize: '0.875rem',
      }}
    >
      {label}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Stories                                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Two equal columns — the default layout. Columns stack vertically at the `md`
 * breakpoint (768 px) by default.
 */
export const TwoEqualColumns: Story = {
  render: () => (
    <Grid columns={2}>
      <Column>
        <Placeholder label="Column 1" />
      </Column>
      <Column>
        <Placeholder label="Column 2" />
      </Column>
    </Grid>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Grid columns={2}>
  <Column>Column 1 content</Column>
  <Column>Column 2 content</Column>
</Grid>`,
      },
    },
  },
};

/**
 * Three equal columns, with a top and bottom border to create a contained
 * "feature grid" panel. Useful for listing icons with short descriptions.
 */
export const ThreeColumnFeatureGrid: Story = {
  render: () => (
    <Grid
      columns={3}
      gap="md"
      topBorder={{ color: 'var(--dds-grid-divider-color)' }}
      bottomBorder={{ color: 'var(--dds-grid-divider-color)' }}
    >
      <Column>
        <p style={subtle}><strong>Feature A</strong><br />Short description of the feature.</p>
      </Column>
      <Column>
        <p style={subtle}><strong>Feature B</strong><br />Short description of the feature.</p>
      </Column>
      <Column>
        <p style={subtle}><strong>Feature C</strong><br />Short description of the feature.</p>
      </Column>
    </Grid>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Grid
  columns={3}
  gap="md"
  topBorder={{ color: '#ccc' }}
  bottomBorder={{ color: '#ccc' }}
>
  <Column><strong>Feature A</strong> — Short description.</Column>
  <Column><strong>Feature B</strong> — Short description.</Column>
  <Column><strong>Feature C</strong> — Short description.</Column>
</Grid>`,
      },
    },
  },
};

/**
 * Asymmetric 1/3 + 2/3 split — pass an array of fractional weights.
 * A common pattern for a narrow label / sidebar alongside wide content.
 */
export const AsymmetricSplit: Story = {
  render: () => (
    <Grid columns={[1, 2]}>
      <Column>
        <Placeholder label="1 / 3" height={160} bg="rgba(16,185,129,0.1)" />
      </Column>
      <Column>
        <Placeholder label="2 / 3" height={160} bg="rgba(99,102,241,0.1)" />
      </Column>
    </Grid>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Grid columns={[1, 2]}>
  <Column>Narrow (1/3)</Column>
  <Column>Wide (2/3)</Column>
</Grid>`,
      },
    },
  },
};

/**
 * Image + annotation layout. `align="center"` vertically centres the shorter
 * column when image and text have different heights.
 */
export const ImageAndText: Story = {
  render: () => (
    <Grid columns={[1, 2]} align="center" columnDivider={{ color: 'var(--dds-grid-divider-color)' }}>
      <Column>
        <Placeholder label="Diagram / Screenshot" height={200} bg="rgba(234,179,8,0.1)" />
      </Column>
      <Column>
        <p style={{ ...subtle, marginBottom: '0.5rem' }}><strong>What you're looking at</strong></p>
        <p style={subtle}>
          This panel describes the key elements of the diagram on the left.
          Use <code>align="center"</code> so short text stays vertically centred
          next to a taller image.
        </p>
      </Column>
    </Grid>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Grid columns={[1, 2]} align="center" columnDivider={{ color: '#ddd' }}>
  <Column>
    <img src="/diagram.png" alt="Architecture diagram" />
  </Column>
  <Column>
    <h3>What you're looking at</h3>
    <p>Description of the diagram elements...</p>
  </Column>
</Grid>`,
      },
    },
  },
};

/**
 * Tutorial layout — prose instructions on the left, sticky code panel on the
 * right. The code panel stays in view while the user scrolls through the steps.
 * The `sticky` prop is automatically disabled when the layout stacks on mobile.
 */
export const TutorialWithStickyCode: Story = {
  render: () => (
    <Grid
      columns={2}
      stackAt="lg"
      gap="lg"
      columnDivider={{ thickness: 2, color: 'var(--dds-grid-divider-color)' }}
    >
      <Column>
        <p style={{ ...subtle, marginBottom: '1rem' }}>
          <strong>Step 1 — Install dependencies</strong>
        </p>
        <p style={{ ...subtle, marginBottom: '1rem' }}>
          Run the installer and follow the prompts. This sets up the project
          scaffold and pulls in all required packages.
        </p>
        <p style={{ ...subtle, marginBottom: '1rem' }}>
          <strong>Step 2 — Configure your project</strong>
        </p>
        <p style={{ ...subtle, marginBottom: '1rem' }}>
          Open <code>config.ts</code> and update the values for your environment.
          Refer to the code panel on the right for a complete example.
        </p>
        <p style={{ ...subtle, marginBottom: '1rem' }}>
          <strong>Step 3 — Start the dev server</strong>
        </p>
        <p style={subtle}>
          Run the dev command. The server watches for file changes and
          hot-reloads automatically.
        </p>
      </Column>
      <Column sticky>
        <CodeBlock
          language="bash"
          code={`npm install\n\nnpm run dev`}
        />
      </Column>
    </Grid>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Grid columns={2} stackAt="lg" gap="lg" columnDivider={{ thickness: 2 }}>
  <Column>
    {/* Step-by-step instructions */}
    <p><strong>Step 1 — Install dependencies</strong></p>
    <p>Run the installer and follow the prompts.</p>
    {/* … more steps … */}
  </Column>
  <Column sticky>
    <CodeBlock language="bash" code="npm install\\n\\nnpm run dev" />
  </Column>
</Grid>`,
      },
    },
  },
};

/**
 * Column dividers — a vertical line between columns that converts to a
 * horizontal rule at the stacking breakpoint.
 */
export const WithColumnDivider: Story = {
  render: () => (
    <Grid
      columns={3}
      columnDivider={{ thickness: 1, color: 'var(--dds-grid-divider-color)' }}
    >
      <Column>
        <p style={subtle}><strong>Option A</strong></p>
        <p style={subtle}>Description of the first approach.</p>
      </Column>
      <Column>
        <p style={subtle}><strong>Option B</strong></p>
        <p style={subtle}>Description of the second approach.</p>
      </Column>
      <Column>
        <p style={subtle}><strong>Option C</strong></p>
        <p style={subtle}>Description of the third approach.</p>
      </Column>
    </Grid>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Grid columns={3} columnDivider={{ thickness: 1, color: '#e0e0e0' }}>
  <Column>
    <strong>Option A</strong>
    <p>Description of the first approach.</p>
  </Column>
  <Column>
    <strong>Option B</strong>
    <p>Description of the second approach.</p>
  </Column>
  <Column>
    <strong>Option C</strong>
    <p>Description of the third approach.</p>
  </Column>
</Grid>`,
      },
    },
  },
};

/**
 * Large gap between columns — useful when columns contain rich content
 * that needs extra breathing room.
 */
export const LargeGap: Story = {
  render: () => (
    <Grid columns={2} gap="lg">
      <Column>
        <Placeholder label="Column 1" height={140} />
      </Column>
      <Column>
        <Placeholder label="Column 2" height={140} />
      </Column>
    </Grid>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Grid columns={2} gap="lg">
  <Column>Column 1 content</Column>
  <Column>Column 2 content</Column>
</Grid>`,
      },
    },
  },
};

/**
 * Span — a column set to `span={2}` occupies two grid tracks.
 * Useful for full-width content (e.g. a summary row) inside an otherwise
 * multi-column grid.
 */
export const ColumnSpan: Story = {
  render: () => (
    <Grid columns={3} gap="md">
      <Column>
        <Placeholder label="Col 1" />
      </Column>
      <Column>
        <Placeholder label="Col 2" />
      </Column>
      <Column>
        <Placeholder label="Col 3" />
      </Column>
      <Column span={3}>
        <Placeholder label="Spans all 3 columns" height={60} bg="rgba(239,68,68,0.1)" />
      </Column>
    </Grid>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Grid columns={3} gap="md">
  <Column>Col 1</Column>
  <Column>Col 2</Column>
  <Column>Col 3</Column>
  <Column span={3}>Spans all 3 columns</Column>
</Grid>`,
      },
    },
  },
};
