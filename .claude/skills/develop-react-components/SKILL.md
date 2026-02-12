---
name: develop-react-components
description: Guide for adding or modifying components in packages/react. Use when creating new components, updating existing ones, adding styles/tokens, or writing Storybook stories for the react component library.
---

# Developing packages/react components

## File structure

Every component needs up to 3 files in `packages/react/src/components/`:

| File | Purpose |
|---|---|
| `ComponentName.tsx` | React component with TypeScript types and JSDoc props |
| `ComponentName.css` | Styles using CSS custom properties (design tokens) |
| `ComponentName.stories.tsx` | Storybook stories for documentation and visual testing |

## Step-by-step checklist

### 1. Create or modify the component (`ComponentName.tsx`)

- Use TypeScript with explicit prop interfaces
- Export the component as a named export (not default)
- Use JSDoc comments on props for Storybook autodocs
- CSS classes follow the `dds-` prefix convention (e.g. `dds-callout`, `dds-callout-title`)
- Accept a `className` prop for consumer extensibility
- Keep components focused on documentation use cases

### 2. Create or modify component styles (`ComponentName.css`)

- Use CSS custom properties from `tokens.css` for all themeable values (colors, spacing, radii, etc.)
- Class names use the `dds-` prefix: `dds-componentname`, `dds-componentname-variant`
- Do not use Tailwind in component CSS -- plain CSS with design tokens only

### 3. Add design tokens (`src/styles/tokens.css`)

Add tokens in **three places** within `tokens.css`:

1. **`:root`** -- Light mode (default) values
2. **`.dds-dark, [data-dds-theme="dark"]`** -- Explicit dark mode
3. **`@media (prefers-color-scheme: dark)`** -- Auto dark mode (OS preference)

The explicit dark mode block and the `@media` block must have identical values.

#### Dark mode token guidelines

This library is consumed by apps with various dark backgrounds. Dark mode tokens must work well on a range of dark surfaces, not just one specific shade.

- **No pure black or pure white.** Use grays with some contrast (e.g. `#e5e7eb` for text, `#4b5563` for borders) rather than `#000000` or `#ffffff`.
- **Default to `transparent` backgrounds** unless the component explicitly supports a background color prop.
- **For colored backgrounds**, use subtle coloring with opacity (e.g. `rgba(59, 130, 246, 0.08)`) so the component remains visible on various dark surfaces.
- **For text/titles on dark**, use lighter shades (300-level palette colors like `#93c5fd`) instead of the full-saturation colors used in light mode.

#### Token naming convention

Follow the existing pattern: `--dds-{component}-{property}` or `--dds-{component}-{variant}-{property}`.

Examples:
```
--dds-callout-padding: 1.25rem;
--dds-callout-caution-border: #dc2626;
--dds-callout-caution-bg: #fef2f2;
```

### 4. Register the component CSS (`src/styles/components.css`)

Add an `@import` for the new component CSS file:

```css
@import "../components/ComponentName.css";
```

This file is the entry point for PostCSS, which bundles all component styles into `dist/styles.css`.

### 5. Export the component (`src/index.ts`)

Add a named export:

```ts
export * from './components/ComponentName';
```

This allows consumers to import directly: `import { ComponentName } from '@roadlittledawn/docs-design-system-react'`.

### 6. Write Storybook stories (`ComponentName.stories.tsx`)

- Import from `@storybook/react` (`Meta`, `StoryObj`)
- Add `tags: ['autodocs']` for automatic documentation generation
- Use the `parameters.docs.description.component` field for component-level docs including "When to Use", "When Not to Use", and "Accessibility" sections
- Write stories that cover: each variant, edge cases (e.g. no title, custom content), and a composite "AllVariants" story for visual comparison
- Use JSDoc comments above each story export to describe it

Example structure:
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Description here.

## When to Use
- ...

## When Not to Use
- ...

## Accessibility
- ...
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ComponentName>;

export const Default: Story = {
  args: { /* ... */ },
};
```

### 7. Build and verify

Run from the repo root:

```bash
# Build the react package (compiles TS + bundles CSS)
npm run build --workspace=packages/react

# Type-check
npm run type-check --workspace=packages/react

# Visually verify in Storybook
npm run storybook
```

The Storybook workspace has a `prestorybook` hook that builds the react package automatically, but it's good practice to build explicitly first to catch errors early.

Storybook auto-discovers stories from `packages/react/src/**/*.stories.tsx` -- no configuration needed.

## Key files reference

| File | Role |
|---|---|
| `packages/react/src/components/` | Component source files |
| `packages/react/src/styles/tokens.css` | Design tokens (light + dark mode) |
| `packages/react/src/styles/components.css` | CSS entry point (imports all component CSS) |
| `packages/react/src/index.ts` | Package exports barrel file |
| `packages/react/package.json` | Package config, build scripts, dependencies |
| `packages/react/tsconfig.json` | TypeScript config (outputs to `dist/`) |
| `packages/react/postcss.config.js` | PostCSS config (uses `postcss-import`) |
| `storybook/.storybook/main.ts` | Storybook config (story discovery, aliases) |
| `storybook/.storybook/preview.ts` | Storybook preview (imports `dist/styles.css`) |

## Common pitfalls

- **Forgetting to register CSS in `components.css`** -- the component will render but have no styles in the bundled output.
- **Forgetting to export from `index.ts`** -- consumers won't be able to import the component.
- **Using hardcoded colors instead of tokens** -- breaks dark mode and theme consistency.
- **Forgetting the auto dark mode `@media` block** -- users who rely on OS-level dark mode won't get dark styles.
- **Using pure black/white in dark mode** -- creates harsh contrast that looks bad on various dark backgrounds.
- **Not adding new dependency to `package.json`** -- if the component uses a new npm dependency, add it to `packages/react/package.json` (runtime deps in `dependencies`, types in `devDependencies`).
