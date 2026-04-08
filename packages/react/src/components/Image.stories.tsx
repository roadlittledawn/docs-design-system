import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';
import { ThumbnailGrid } from './ThumbnailGrid';

const SAMPLE_SRC = 'https://picsum.photos/seed/dds1/800/450';
const SAMPLE_SRC_TALL = 'https://picsum.photos/seed/dds2/600/800';
const SAMPLE_SRC_SMALL = 'https://picsum.photos/seed/dds3/400/225';

/**
 * The Image component wraps a native `<img>` in semantic `<figure>` /
 * `<figcaption>` markup and adds documentation-friendly features:
 * rounded corners, a matted frame, dark-mode dimming, a clickable lightbox
 * link, a loading skeleton, and a caption.
 */
const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image URL.',
    },
    alt: {
      control: 'text',
      description: 'Alt text for accessibility (required).',
    },
    caption: {
      control: 'text',
      description: 'Caption rendered below the image in a `<figcaption>`.',
    },
    href: {
      control: 'text',
      description:
        'When set, wraps the image in an `<a>` that opens the full-size image in a new tab.',
    },
    linkTarget: {
      control: 'text',
      description:
        'Override the link destination. Useful for linking to a related page instead of the raw image.',
    },
    rounded: {
      control: { type: 'select' },
      options: [false, true, 'sm', 'md', 'lg'],
      description: 'Apply rounded corners. `true` or `"md"` for medium, `"sm"` for small, `"lg"` for large.',
      table: { defaultValue: { summary: 'false' } },
    },
    framed: {
      control: 'boolean',
      description: 'Add a border and padding around the image ("matted" appearance).',
      table: { defaultValue: { summary: 'false' } },
    },
    dimInDarkMode: {
      control: 'boolean',
      description: 'Reduce image opacity in dark mode.',
      table: { defaultValue: { summary: 'false' } },
    },
    maxWidth: {
      control: 'text',
      description:
        'Constrain the image to a maximum width. Accepts any CSS `max-width` value or a number (pixels).',
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
The Image component provides documentation-friendly features on top of a native \`<img>\`:
semantic \`<figure>\` markup, loading skeleton with shimmer, rounded corners,
a matted frame, dark-mode dimming, a clickable link / lightbox, and a caption.

## When to Use

- Embedding screenshots, diagrams, or illustrations in documentation pages
- Displaying images that benefit from a visual frame to separate them from surrounding text
- Showing a grid of step-by-step screenshots using \`ThumbnailGrid\`
- Any image that should open full-size when clicked

## When Not to Use

- **Hero or decorative images** — use a standard \`<img>\` or a CSS background
- **Avatar / user profile images** — use a dedicated avatar component
- **Icons or inline SVG** — use the \`Icon\` component

## Accessibility

- The \`alt\` prop is required. Pass an empty string only for purely decorative images.
- When \`href\` is provided, the link opens in a new tab (\`target="_blank" rel="noopener noreferrer"\`).
- The \`<figure>\` / \`<figcaption>\` semantic structure is used automatically when a caption is provided.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

/**
 * Basic image with required props only.
 */
export const Default: Story = {
  args: {
    src: SAMPLE_SRC,
    alt: 'Sample landscape photograph',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image src="/screenshots/dashboard.png" alt="Dashboard overview" />`,
      },
    },
  },
};

/**
 * Image with a text caption rendered in a `<figcaption>`.
 */
export const WithCaption: Story = {
  args: {
    src: SAMPLE_SRC,
    alt: 'Sample landscape photograph',
    caption: 'Figure 1: Latency overview in the New Relic platform',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  src="/screenshots/dashboard.png"
  alt="Dashboard overview"
  caption="Figure 1: Latency overview in the New Relic platform"
/>`,
      },
    },
  },
};

/**
 * Rounded corners — choose `sm`, `md` (same as `true`), or `lg`.
 */
export const Rounded: Story = {
  args: {
    src: SAMPLE_SRC,
    alt: 'Sample landscape photograph',
    rounded: 'md',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image src="/screenshots/dashboard.png" alt="Dashboard overview" rounded="md" />`,
      },
    },
  },
};

/**
 * Framed / matted style — adds a border and background padding around the image.
 * Ideal for screenshots that need visual separation from surrounding text.
 */
export const Framed: Story = {
  args: {
    src: SAMPLE_SRC,
    alt: 'Sample landscape photograph',
    framed: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<Image src="/screenshots/dashboard.png" alt="Dashboard overview" framed />`,
      },
    },
  },
};

/**
 * Framed + rounded combination — the outer border also receives the border-radius.
 */
export const FramedAndRounded: Story = {
  args: {
    src: SAMPLE_SRC,
    alt: 'Sample landscape photograph',
    framed: true,
    rounded: 'md',
    caption: 'A framed and rounded image with a caption.',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  src="/screenshots/dashboard.png"
  alt="Dashboard overview"
  framed
  rounded="md"
  caption="A framed and rounded image with a caption."
/>`,
      },
    },
  },
};

/**
 * Clickable image — clicking opens the full-size image in a new tab.
 * Set `href` to the same value as `src` for a lightbox-style experience.
 */
export const Clickable: Story = {
  args: {
    src: SAMPLE_SRC,
    alt: 'Sample landscape photograph — click to view full size',
    href: SAMPLE_SRC,
    caption: 'Click the image to open the full-size version.',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  src="/screenshots/dashboard.png"
  alt="Dashboard overview — click to view full size"
  href="/screenshots/dashboard.png"
  caption="Click the image to open the full-size version."
/>`,
      },
    },
  },
};

/**
 * Dark-mode dimming — the image opacity is reduced in dark mode to prevent
 * bright screenshots from blowing out the page. Switch to dark mode to see
 * the effect.
 */
export const DimInDarkMode: Story = {
  args: {
    src: SAMPLE_SRC,
    alt: 'Sample landscape photograph',
    dimInDarkMode: true,
    caption: 'This image is dimmed in dark mode.',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  src="/screenshots/dashboard.png"
  alt="Dashboard overview"
  dimInDarkMode
  caption="This image is dimmed in dark mode."
/>`,
      },
    },
  },
};

/**
 * Max width — constrains the image width when the native resolution is
 * smaller than the column. Prevents the image from stretching to fill
 * the container.
 */
export const MaxWidth: Story = {
  args: {
    src: SAMPLE_SRC_SMALL,
    alt: 'Small sample image constrained to 400 px wide',
    maxWidth: 400,
    caption: 'Constrained to 400 px — avoids stretching a small image.',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  src="/screenshots/small-icon.png"
  alt="Small icon screenshot"
  maxWidth={400}
  caption="Constrained to 400 px — avoids stretching a small image."
/>`,
      },
    },
  },
};

/**
 * All features combined: framed, rounded, clickable, dim-in-dark-mode, caption, and max width.
 */
export const AllFeatures: Story = {
  args: {
    src: SAMPLE_SRC,
    alt: 'Sample landscape photograph — click to view full size',
    href: SAMPLE_SRC,
    framed: true,
    rounded: 'md',
    dimInDarkMode: true,
    caption: 'Figure 1: Sample image with all features enabled.',
    maxWidth: '90%',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  src="/screenshots/dashboard.png"
  alt="Dashboard overview — click to view full size"
  href="/screenshots/dashboard.png"
  framed
  rounded="md"
  dimInDarkMode
  caption="Figure 1: Sample image with all features enabled."
  maxWidth="90%"
/>`,
      },
    },
  },
};

/**
 * ThumbnailGrid composite — three columns of clickable images.
 * Use `ThumbnailGrid` with `Image` children to create a responsive screenshot grid.
 */
export const ThumbnailGridComposite: Story = {
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
      {[
        { seed: 'dds-s1', label: 'Step 1' },
        { seed: 'dds-s2', label: 'Step 2' },
        { seed: 'dds-s3', label: 'Step 3' },
        { seed: 'dds-s4', label: 'Step 4' },
        { seed: 'dds-s5', label: 'Step 5' },
        { seed: 'dds-s6', label: 'Step 6' },
      ].map(({ seed, label }) => {
        const url = `https://picsum.photos/seed/${seed}/600/400`;
        return (
          <Image
            key={seed}
            src={url}
            alt={label}
            href={url}
            rounded="sm"
            caption={label}
          />
        );
      })}
    </ThumbnailGrid>
  ),
};

/**
 * Tall portrait image to verify height/aspect-ratio handling.
 */
export const PortraitImage: Story = {
  args: {
    src: SAMPLE_SRC_TALL,
    alt: 'Tall portrait sample image',
    rounded: 'md',
    maxWidth: 320,
    caption: 'Portrait-orientation image constrained to 320 px wide.',
  },
  parameters: {
    docs: {
      source: {
        code: `<Image
  src="/screenshots/portrait.png"
  alt="Portrait screenshot"
  rounded="md"
  maxWidth={320}
  caption="Portrait-orientation image constrained to 320 px wide."
/>`,
      },
    },
  },
};
