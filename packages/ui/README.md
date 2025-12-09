# @docs-design-system/ui

Reusable UI components for building documentation interfaces.

## Overview

This package contains the core component library that will be published to NPM for use in documentation sites.

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
```

## Usage

```tsx
import { Typography, Button } from '@docs-design-system/ui';

export default function MyComponent() {
  return (
    <div>
      <Typography variant="h1">Hello World</Typography>
      <Button>Click me</Button>
    </div>
  );
}
```
