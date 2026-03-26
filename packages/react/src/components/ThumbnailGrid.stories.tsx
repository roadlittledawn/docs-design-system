import type { Meta, StoryObj } from '@storybook/react';
import { ThumbnailGrid } from './ThumbnailGrid';
import { Image } from './Image';

/**
 * The ThumbnailGrid component arranges Image components (or other content) in a
 * responsive CSS Grid. Clicking a thumbnail can open the full-size image when
 * each Image has an `href` prop set.
 */
const meta: Meta<typeof ThumbnailGrid> = {
  title: 'Components/ThumbnailGrid',
  component: ThumbnailGrid,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'select' },
      options: [1, 2, 3, 4],
      description: 'Number of columns at full width.',
      table: { defaultValue: { summary: '3' } },
    },
    gap: {
      control: 'text',
      description: 'Override gap between thumbnails (any CSS `gap` value).',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes.',
      table: { defaultValue: { summary: '""' } },
    },
    children: {
      control: false,
      description: 'Grid content — typically Image components.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
The ThumbnailGrid component is a responsive CSS Grid wrapper for displaying
multiple images as equally-sized thumbnails. It pairs with the \`Image\` component
to create clickable screenshot galleries in documentation pages.

## When to Use

- Step-by-step screenshot walkthroughs (e.g., "Here's how to configure X")
- Photo or diagram galleries with 2–12 images
- Any time you need a uniform grid of images that collapses gracefully on mobile

## When Not to Use

- **Single images** — use \`Image\` directly
- **Mixed-width layouts** — use \`Grid\` for asymmetric column widths
- **Non-image content** — use \`CardGrid\` for card-style items

## Responsive behavior

| columns | Mobile (< 480px) | Tablet (≥ 480px) | Desktop (≥ 768px) |
|---------|-----------------|------------------|-------------------|
| 1 | 1 col | 1 col | 1 col |
| 2 | 1 col | 2 col | 2 col |
| 3 | 1 col | 2 col | 3 col |
| 4 | 2 col | 2 col | 4 col |

## Accessibility

- Images inside the grid must each have a descriptive \`alt\` prop.
- Clickable thumbnails use \`<a target="_blank" rel="noopener noreferrer">\` (managed by the \`Image\` component).
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ThumbnailGrid>;

const makeSrc = (seed: string) => `https://picsum.photos/seed/${seed}/600/400`;

/** Helper to build a set of Image thumbnails */
function buildImages(seeds: string[], clickable = false) {
  return seeds.map((seed, i) => {
    const src = makeSrc(seed);
    return (
      <Image
        key={seed}
        src={src}
        alt={`Thumbnail ${i + 1}`}
        href={clickable ? src : undefined}
        rounded="sm"
      />
    );
  });
}

/**
 * Default 3-column grid with clickable images.
 */
export const ThreeColumns: Story = {
  parameters: {
    docs: {
      source: {
        code: `<ThumbnailGrid columns={3}>
  <Image src="/img/step-1.png" alt="Step 1" href="/img/step-1.png" rounded="sm" />
  <Image src="/img/step-2.png" alt="Step 2" href="/img/step-2.png" rounded="sm" />
  <Image src="/img/step-3.png" alt="Step 3" href="/img/step-3.png" rounded="sm" />
  <Image src="/img/step-4.png" alt="Step 4" href="/img/step-4.png" rounded="sm" />
  <Image src="/img/step-5.png" alt="Step 5" href="/img/step-5.png" rounded="sm" />
  <Image src="/img/step-6.png" alt="Step 6" href="/img/step-6.png" rounded="sm" />
</ThumbnailGrid>`,
      },
    },
  },
  render: () => (
    <ThumbnailGrid columns={3}>
      {buildImages(
        ['tg-a1', 'tg-a2', 'tg-a3', 'tg-a4', 'tg-a5', 'tg-a6'],
        true,
      )}
    </ThumbnailGrid>
  ),
};

/**
 * 2-column grid — good for before/after comparisons.
 */
export const TwoColumns: Story = {
  parameters: {
    docs: {
      source: {
        code: `<ThumbnailGrid columns={2}>
  <Image src="/img/before.png" alt="Before" href="/img/before.png" rounded="sm" caption="Before" />
  <Image src="/img/after.png" alt="After" href="/img/after.png" rounded="sm" caption="After" />
</ThumbnailGrid>`,
      },
    },
  },
  render: () => (
    <ThumbnailGrid columns={2}>
      {[
        { seed: 'tg-b1', label: 'Before' },
        { seed: 'tg-b2', label: 'After' },
      ].map(({ seed, label }) => {
        const src = makeSrc(seed);
        return (
          <Image
            key={seed}
            src={src}
            alt={label}
            href={src}
            rounded="sm"
            caption={label}
          />
        );
      })}
    </ThumbnailGrid>
  ),
};

/**
 * 4-column grid — compact gallery layout.
 */
export const FourColumns: Story = {
  parameters: {
    docs: {
      source: {
        code: `<ThumbnailGrid columns={4}>
  <Image src="/img/img-1.png" alt="Image 1" href="/img/img-1.png" rounded="sm" />
  <Image src="/img/img-2.png" alt="Image 2" href="/img/img-2.png" rounded="sm" />
  <Image src="/img/img-3.png" alt="Image 3" href="/img/img-3.png" rounded="sm" />
  <Image src="/img/img-4.png" alt="Image 4" href="/img/img-4.png" rounded="sm" />
</ThumbnailGrid>`,
      },
    },
  },
  render: () => (
    <ThumbnailGrid columns={4}>
      {buildImages(['tg-c1', 'tg-c2', 'tg-c3', 'tg-c4'], true)}
    </ThumbnailGrid>
  ),
};

/**
 * Single column — useful for mobile-first layouts or tall portrait screenshots.
 */
export const SingleColumn: Story = {
  parameters: {
    docs: {
      source: {
        code: `<ThumbnailGrid columns={1}>
  <Image src="/img/step-1.png" alt="Step 1" rounded="sm" />
  <Image src="/img/step-2.png" alt="Step 2" rounded="sm" />
</ThumbnailGrid>`,
      },
    },
  },
  render: () => (
    <ThumbnailGrid columns={1}>
      {buildImages(['tg-d1', 'tg-d2'])}
    </ThumbnailGrid>
  ),
};

/**
 * Custom gap — reduces spacing between thumbnails.
 */
export const CustomGap: Story = {
  parameters: {
    docs: {
      source: {
        code: `<ThumbnailGrid columns={3} gap="0.5rem">
  <Image src="/img/step-1.png" alt="Step 1" rounded="sm" />
  <Image src="/img/step-2.png" alt="Step 2" rounded="sm" />
  <Image src="/img/step-3.png" alt="Step 3" rounded="sm" />
</ThumbnailGrid>`,
      },
    },
  },
  render: () => (
    <ThumbnailGrid columns={3} gap="0.5rem">
      {buildImages(['tg-e1', 'tg-e2', 'tg-e3'])}
    </ThumbnailGrid>
  ),
};

/**
 * Framed thumbnails — each image has the matted border treatment.
 */
export const FramedThumbnails: Story = {
  parameters: {
    docs: {
      source: {
        code: `<ThumbnailGrid columns={3}>
  <Image src="/img/step-1.png" alt="Step 1" framed rounded="sm" />
  <Image src="/img/step-2.png" alt="Step 2" framed rounded="sm" />
  <Image src="/img/step-3.png" alt="Step 3" framed rounded="sm" />
</ThumbnailGrid>`,
      },
    },
  },
  render: () => (
    <ThumbnailGrid columns={3}>
      {['tg-f1', 'tg-f2', 'tg-f3'].map((seed, i) => {
        const src = makeSrc(seed);
        return (
          <Image
            key={seed}
            src={src}
            alt={`Step ${i + 1}`}
            framed
            rounded="sm"
          />
        );
      })}
    </ThumbnailGrid>
  ),
};
