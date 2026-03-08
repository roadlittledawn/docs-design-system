# @roadlittledawn/docs-design-system-react

[![npm version](https://img.shields.io/npm/v/@roadlittledawn/docs-design-system-react.svg)](https://www.npmjs.com/package/@roadlittledawn/docs-design-system-react) [![GitHub](https://img.shields.io/badge/github-repo-blue.svg)](https://github.com/roadlittledawn/docs-design-system)

React components for documentation content and MDX-driven sites.

## Installation

```bash
npm install @roadlittledawn/docs-design-system-react
```

## Usage

```tsx
import {
  Callout,
  CodeBlock,
  Card,
} from "@roadlittledawn/docs-design-system-react";
```

### Importing Styles

Import the component styles in your app:

```tsx
import "@roadlittledawn/docs-design-system-react/styles.css";
```

## Components

Full component documentation with live examples, usage guidelines, and API documentation is available in Storybook:

**[View Component Documentation →](https://docs-design-system-storybook.netlify.app/?path=/docs/components-button--docs)**

## Next.js / React Server Components

Interactive components (e.g., `Collapser`, `CollapserGroup`, `CodeBlock`, `Tabs`, `Popover`, etc) are pre-marked with `'use client'`, so they work in Next.js App Router without any extra setup. Stateless components (e.g., `Button`, `Callout`, `Card`, `CardGrid`, `Heading`, `Link`, `List`, etc) have no directive and are fully usable as Server Components.

## Dark Mode

The package includes built-in dark mode support. All components use transparent backgrounds (unless background color specified via props) in dark mode so they don't clash with your site's own dark theme.

### Auto (zero-config)

Dark mode follows OS preference automatically when you import `styles.css` — no extra setup needed.

```tsx
import "@roadlittledawn/docs-design-system-react/styles.css";
// Components automatically adapt to OS dark/light preference
```

### Explicit toggle

Add `class="dds-dark"` or `data-dds-theme="dark"` to any ancestor element:

```html
<html class="dds-dark">
  <!-- all components render in dark mode -->
</html>
```

```html
<html data-dds-theme="dark">
  <!-- same effect -->
</html>
```

### Force light mode

Override OS dark preference by adding `class="dds-light"` or `data-dds-theme="light"`:

```html
<html class="dds-light">
  <!-- components stay light even if OS prefers dark -->
</html>
```

### Component-level dark islands

Apply dark mode to a specific section:

```html
<div class="dds-dark">
  <!-- only components inside this div use dark mode -->
</div>
```

## Hooks

### useKeyPress

Listen for keyboard events.

```tsx
const isPressed = useKeyPress("Escape");
```

Full hook documentation is available in [Storybook](https://docs-design-system-storybook.netlify.app).

## AI / LLM Integration

This package ships with AI-friendly docs so coding assistants can understand the component API without browser access.

### `USAGE.md` (included in npm package)

A complete component reference with props tables and usage examples. Point your AI tool at it with one line:

```
# CLAUDE.md or equivalent
Component API docs: node_modules/@roadlittledawn/docs-design-system-react/USAGE.md
```

Or reference the raw file on GitHub in any AI context file.

### `/llms.txt` (website)

The design system website serves a machine-readable component reference at `/llms.txt` per the [llmstxt.org](https://llmstxt.org/) convention. Agents can fetch the full API reference from a single URL.

### TypeScript types with JSDoc

All prop interfaces are exported and annotated with JSDoc so AI tools reading `.d.ts` files from `node_modules` get full prop descriptions and types.

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Watch mode for development
npm run dev
```
