import type { Meta, StoryObj } from '@storybook/react';
import { TileGrid } from './TileGrid';
import { Tile } from './Tile';

/**
 * TileGrid lays out Tile components in a responsive CSS grid.
 * It supports 3–6 columns and automatically adjusts to fewer columns on smaller screens.
 */
const meta: Meta<typeof TileGrid> = {
  title: 'Components/TileGrid',
  component: TileGrid,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'select' },
      options: [3, 4, 5, 6],
      description: 'Number of columns at full width.',
      table: { defaultValue: { summary: '4' } },
    },
    children: {
      control: false,
      description: 'Grid content (typically Tile components).',
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
TileGrid is a responsive CSS grid container designed specifically for Tile components.

## Responsive behavior

| columns | Mobile (< 640px) | Tablet (≥ 640px) | Desktop (≥ 1024px) |
|---------|-----------------|-----------------|-------------------|
| 3       | 1 col           | 2 col           | 3 col             |
| 4       | 2 col           | 2 col           | 4 col             |
| 5       | 2 col           | 3 col           | 5 col             |
| 6       | 2 col           | 3 col           | 6 col             |

## Usage

\`\`\`tsx
<TileGrid columns={4}>
  <Tile title="React" icon={<ReactIcon />} href="/integrations/react" />
  <Tile title="Vue" icon={<VueIcon />} href="/integrations/vue" />
  {/* …more tiles */}
</TileGrid>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TileGrid>;

const DemoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
  </svg>
);

const names8 = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt', 'Astro', 'Remix'];
const names12 = [...names8, 'Node.js', 'Deno', 'Bun', 'Express'];

export const ThreeColumns: Story = {
  render: () => (
    <TileGrid columns={3}>
      {names8.map((name) => (
        <Tile key={name} title={name} icon={<DemoIcon />} href={`/integrations/${name.toLowerCase()}`} />
      ))}
    </TileGrid>
  ),
  parameters: {
    docs: {
      source: {
        code: `<TileGrid columns={3}>
  {integrations.map((name) => (
    <Tile key={name} title={name} icon={<Icon />} href={\`/integrations/\${name}\`} />
  ))}
</TileGrid>`,
      },
    },
  },
};

export const FourColumns: Story = {
  render: () => (
    <TileGrid columns={4}>
      {names12.map((name) => (
        <Tile key={name} title={name} icon={<DemoIcon />} href={`/integrations/${name.toLowerCase()}`} />
      ))}
    </TileGrid>
  ),
  parameters: {
    docs: {
      source: {
        code: `<TileGrid columns={4}>
  {integrations.map((name) => (
    <Tile key={name} title={name} icon={<Icon />} href={\`/integrations/\${name}\`} />
  ))}
</TileGrid>`,
      },
    },
  },
};

export const SixColumns: Story = {
  render: () => (
    <TileGrid columns={6}>
      {[...names12, 'Postgres', 'MySQL', 'Redis', 'MongoDB', 'Kafka', 'RabbitMQ'].map((name) => (
        <Tile key={name} title={name} icon={<DemoIcon />} href={`/integrations/${name.toLowerCase()}`} />
      ))}
    </TileGrid>
  ),
  parameters: {
    docs: {
      source: {
        code: `<TileGrid columns={6}>
  {integrations.map((name) => (
    <Tile key={name} title={name} icon={<Icon />} href={\`/integrations/\${name}\`} />
  ))}
</TileGrid>`,
      },
    },
  },
};

export const WithDescriptions: Story = {
  render: () => {
    const skills = [
      { name: 'TypeScript', desc: 'Typed JavaScript' },
      { name: 'GraphQL', desc: 'Query language for APIs' },
      { name: 'Docker', desc: 'Container platform' },
      { name: 'Kubernetes', desc: 'Orchestration' },
      { name: 'Terraform', desc: 'Infrastructure as code' },
      { name: 'Postgres', desc: 'Relational database' },
      { name: 'Redis', desc: 'In-memory data store' },
      { name: 'Kafka', desc: 'Event streaming' },
    ];
    return (
      <TileGrid columns={4}>
        {skills.map(({ name, desc }) => (
          <Tile
            key={name}
            title={name}
            icon={<DemoIcon />}
            description={desc}
            href={`/skills/${name.toLowerCase()}`}
          />
        ))}
      </TileGrid>
    );
  },
};
