# @roadlittledawn/docs-design-system

React components for building documentation interfaces.

## Overview

This package contains the React-based component library that can be published to NPM for use in documentation sites.

## Installation

```bash
npm install @roadlittledawn/docs-design-system
```

## Usage

```tsx
import { Typography, Button } from '@roadlittledawn/docs-design-system/react';

export default function MyComponent() {
  return (
    <div>
      <Typography variant="h1">Hello World</Typography>
      <Button>Click me</Button>
    </div>
  );
}
```

## Importing Styles

Import the component styles in your app:

```tsx
import '@roadlittledawn/docs-design-system/react/styles.css';
```

## Docs Content Component Ideas

Components specifically designed for documentation content:

- **Callout** - Highlight important information, warnings, tips, or notes
- **Collapser** - Expandable/collapsible sections for optional or detailed content
- **Tabs** - Organize related content or code examples by language/framework
- **CodeBlock** - Syntax-highlighted code with copy functionality
- **CopyAsMarkdown** - Copy content in markdown format for easy sharing

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Watch mode for development
npm run dev
```
