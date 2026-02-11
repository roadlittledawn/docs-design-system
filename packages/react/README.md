# @roadlittledawn/docs-design-system-react

React components for building documentation interfaces.

See [package on NPM](https://www.npmjs.com/package/@roadlittledawn/docs-design-system-react).

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

### Callout

Highlight important information, warnings, tips, or notes.

```tsx
<Callout variant="tip">This is a helpful tip!</Callout>
```

### CodeBlock

Syntax-highlighted code with copy functionality.

```tsx
<CodeBlock language="javascript">
  {`const greeting = "Hello, world!";`}
</CodeBlock>
```

### Collapser

Expandable/collapsible sections for optional or detailed content.

```tsx
<Collapser title="More details">Hidden content revealed on expand.</Collapser>
```

### Card

Clickable card for navigation or content grouping.

```tsx
<Card title="Getting Started" href="/docs/intro">
  Learn the basics.
</Card>
```

### CardGrid

Grid layout for organizing multiple cards.

```tsx
<CardGrid columns={3}>
  <Card title="Guide 1" href="/guide-1">
    Description
  </Card>
  <Card title="Guide 2" href="/guide-2">
    Description
  </Card>
</CardGrid>
```

### Typography

Text component with semantic variants.

```tsx
<Typography variant="body">Paragraph text</Typography>
```

### Heading

Semantic heading levels.

```tsx
<Heading level={2}>Section Title</Heading>
```

### Link

Styled anchor with external link detection.

```tsx
<Link href="/docs">Internal link</Link>
<Link href="https://example.com">External link</Link>
```

### Button

Action button with variants.

```tsx
<Button variant="primary" onClick={handleClick}>
  Click me
</Button>
```

## Dark Mode

The package includes built-in dark mode support. All components use transparent backgrounds in dark mode so they don't clash with your site's own dark theme.

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

## Documentation

Full component documentation with live examples is available in our Storybook.

**Storybook URL:** _Coming soon_

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Watch mode for development
npm run dev
```
