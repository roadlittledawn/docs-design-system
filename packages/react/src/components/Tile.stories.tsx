import type { Meta, StoryObj } from '@storybook/react';
import { Tile } from './Tile';
import { TileGrid } from './TileGrid';

/**
 * The Tile component is a compact, clickable card designed for dense lists of items
 * such as integrations, frameworks, plugins, or skills.
 *
 * Unlike Card, Tile has a fixed layout (icon left, title right) and a simpler API
 * focused on the list-item use case.
 */
const meta: Meta<typeof Tile> = {
  title: 'Components/Tile',
  component: Tile,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Tile heading text (required).',
    },
    icon: {
      control: false,
      description: 'Optional icon to display on the left. Pass a rendered icon component.',
    },
    description: {
      control: 'text',
      description: 'Optional short description displayed below the title.',
    },
    href: {
      control: 'text',
      description: 'Optional link URL. Makes the entire tile clickable.',
    },
    showArrow: {
      control: 'boolean',
      description: 'Show an animated arrow in the lower-right corner.',
      table: { defaultValue: { summary: 'false' } },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
The Tile component is a compact, clickable item designed for dense listing patterns.

## When to Use

- Long lists of integrations, frameworks, plugins, or skills
- Navigation to many similar destinations (e.g., 20+ items)
- When Card would feel too spacious for the number of items

## When Not to Use

- For fewer than ~6 items with significant content — use Card instead
- When items need rich content (paragraphs, code, images) — use Card
- For feature highlights — use Card with colored backgrounds

## Vs. Card

| | Tile | Card |
|---|---|---|
| Layout | Fixed (icon-left) | Flexible (icon top/left/center) |
| Title | Required | Optional |
| Description | String prop | children (ReactNode) |
| Use case | Dense lists (10–100+ items) | Content groups (2–12 items) |
| Padding | Compact (0.875rem) | Spacious (1.5rem) |

## Accessibility

- Clickable tiles use proper link semantics (\`<a>\`)
- Icon is decorative (\`aria-hidden\`) and does not affect screen reader output
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tile>;

const DemoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
  </svg>
);

/**
 * Basic tile with title only.
 */
export const Basic: Story = {
  args: {
    title: 'React',
  },
  parameters: {
    docs: {
      source: { code: `<Tile title="React" />` },
    },
  },
};

/**
 * Tile with an icon on the left.
 */
export const WithIcon: Story = {
  args: {
    title: 'React',
    icon: <DemoIcon />,
  },
  parameters: {
    docs: {
      source: {
        code: `<Tile title="React" icon={<ReactIcon />} />`,
      },
    },
  },
};

/**
 * Tile with icon and a short description below the title.
 */
export const WithDescription: Story = {
  args: {
    title: 'React',
    icon: <DemoIcon />,
    description: 'Build UIs with components',
  },
  parameters: {
    docs: {
      source: {
        code: `<Tile title="React" icon={<ReactIcon />} description="Build UIs with components" />`,
      },
    },
  },
};

/**
 * Clickable tile with a link. Hover to see the border and shadow change.
 */
export const Clickable: Story = {
  args: {
    title: 'React',
    icon: <DemoIcon />,
    description: 'Build UIs with components',
    href: '/integrations/react',
  },
  parameters: {
    docs: {
      source: {
        code: `<Tile title="React" icon={<ReactIcon />} description="Build UIs with components" href="/integrations/react" />`,
      },
    },
  },
};

/**
 * Clickable tile with the animated arrow indicator. Hover to see it animate.
 */
export const WithArrow: Story = {
  args: {
    title: 'React',
    icon: <DemoIcon />,
    description: 'Build UIs with components',
    href: '/integrations/react',
    showArrow: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<Tile title="React" icon={<ReactIcon />} description="Build UIs with components" href="/integrations/react" showArrow />`,
      },
    },
  },
};

/**
 * A realistic grid of integration tiles. Use TileGrid to lay out multiple Tiles.
 */
export const IntegrationGrid: Story = {
  parameters: {
    docs: {
      source: {
        code: `<TileGrid columns={4}>
  <Tile title="React" icon={<ReactIcon />} description="UI components" href="/integrations/react" />
  <Tile title="Vue" icon={<VueIcon />} description="Progressive framework" href="/integrations/vue" />
  {/* …more tiles */}
</TileGrid>`,
      },
    },
  },
  render: () => {
    const integrations = [
      'React', 'Vue', 'Angular', 'Svelte',
      'Next.js', 'Nuxt', 'Astro', 'Remix',
      'Node.js', 'Deno', 'Bun', 'Express',
    ];
    return (
      <TileGrid columns={4}>
        {integrations.map((name) => (
          <Tile
            key={name}
            title={name}
            icon={<DemoIcon />}
            href={`/integrations/${name.toLowerCase()}`}
          />
        ))}
      </TileGrid>
    );
  },
};

/**
 * A larger grid with descriptions and arrows, using 3 columns.
 */
export const SkillsGrid: Story = {
  parameters: {
    docs: {
      source: {
        code: `<TileGrid columns={3}>
  <Tile title="TypeScript" icon={<TsIcon />} description="Typed JavaScript" href="/skills/typescript" showArrow />
  {/* …more tiles */}
</TileGrid>`,
      },
    },
  },
  render: () => {
    const skills = [
      { name: 'TypeScript', desc: 'Typed JavaScript at scale' },
      { name: 'GraphQL', desc: 'Query language for APIs' },
      { name: 'Docker', desc: 'Container platform' },
      { name: 'Kubernetes', desc: 'Container orchestration' },
      { name: 'Terraform', desc: 'Infrastructure as code' },
      { name: 'Postgres', desc: 'Relational database' },
    ];
    return (
      <TileGrid columns={3}>
        {skills.map(({ name, desc }) => (
          <Tile
            key={name}
            title={name}
            icon={<DemoIcon />}
            description={desc}
            href={`/skills/${name.toLowerCase()}`}
            showArrow
          />
        ))}
      </TileGrid>
    );
  },
};
