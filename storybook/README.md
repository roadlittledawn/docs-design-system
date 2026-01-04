# Storybook - Component Documentation

This directory contains the Storybook setup for documenting all UI components from `@docs-design-system/ui`.

## What is Storybook?

Storybook provides interactive documentation for all components with:
- Live component examples
- Interactive prop controls
- Auto-generated API documentation from TypeScript
- Accessibility testing
- Visual regression testing capabilities

## Running Storybook Locally

### Quick Start

From the project root:

```bash
npm run storybook
```

This will:
1. Build the UI components (`packages/ui/`)
2. Start Storybook dev server at http://localhost:6006

### Alternative Commands

Run only Storybook (without rebuilding UI):
```bash
npm run storybook --workspace=storybook
```

Run from this directory:
```bash
cd storybook
npm run storybook
```

## Building Storybook

To build a static version for deployment:

```bash
# From project root
npm run build-storybook

# Output will be in storybook/dist/
```

Preview the built version:
```bash
cd storybook
npm run preview
```

## Adding New Stories

Stories are located alongside components in `packages/ui/src/components/`.

### 1. Create a Story File

Create a file named `ComponentName.stories.tsx` next to your component:

```typescript
// packages/ui/src/components/NewComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { NewComponent } from './NewComponent';

const meta: Meta<typeof NewComponent> = {
  title: 'Components/NewComponent',
  component: NewComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Component description here.

## When to Use
- Use case 1
- Use case 2

## When Not to Use
- Anti-pattern 1
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof NewComponent>;

export const Default: Story = {
  args: {
    // Component props here
  },
};
```

### 2. Add JSDoc Comments to Component Props

Ensure your component interface has JSDoc comments for auto-generated documentation:

```typescript
interface NewComponentProps {
  /**
   * Description of the prop
   * @default 'defaultValue'
   */
  propName?: string;
}
```

### 3. Restart Storybook

Storybook should automatically detect new story files. If not, restart the dev server.

## Story File Structure

Each story file should include:

1. **Meta Configuration**: Component metadata, title, tags
2. **Component Description**: "When to Use" and "When Not to Use" guidelines
3. **Default Story**: Basic usage example
4. **Variant Stories**: One story per variant/configuration
5. **Comparison Stories**: Stories showing multiple variants together

## Documentation Best Practices

### Component Descriptions

Include these sections in your component description:

- **Overview**: What the component is and its purpose
- **When to Use**: Appropriate use cases
- **When Not to Use**: Anti-patterns to avoid
- **Accessibility**: ARIA attributes, keyboard support, screen reader notes

### Story Naming

- Use descriptive names: `Primary`, `Secondary`, `WithCustomTitle`
- Group related stories: `AllVariants`, `AllSizes`
- Avoid generic names: `Story1`, `Test`

### Props Documentation

- Document all public props with JSDoc comments
- Include `@default` tags for optional props
- Describe what the prop does, not just its type

## Storybook Configuration

### Main Configuration

Located at `.storybook/main.ts`:
- Story file locations
- Addons configuration
- TypeScript docgen settings

### Preview Configuration

Located at `.storybook/preview.ts`:
- Global parameters
- CSS imports
- Decorator configuration

## Available Addons

- **Essentials**: Docs, controls, actions, viewport, backgrounds
- **A11y**: Accessibility testing and violations reporting
- **Interactions**: User interaction testing

## Deployment

Storybook can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

The built output in `dist/` is a self-contained static site.

### Example Deployment Commands

**Netlify:**
```bash
npm run build-storybook
# Deploy storybook/dist/
```

**GitHub Pages:**
```bash
npm run build-storybook
# Push storybook/dist/ to gh-pages branch
```

## Troubleshooting

### Stories Not Showing

1. Check that story files match the glob pattern: `*.stories.tsx`
2. Verify the component is properly exported
3. Restart Storybook dev server
4. Check for TypeScript errors in story files

### CSS Not Loading

1. Ensure UI package is built: `npm run build --workspace=packages/ui`
2. Check that `dist/styles.css` exists
3. Verify preview.ts imports the CSS

### TypeScript Errors

1. Run type check: `npm run type-check`
2. Ensure all story file imports are correct
3. Check that component interfaces are exported

## Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [Component Story Format (CSF)](https://storybook.js.org/docs/api/csf)
- [TypeScript Docgen](https://github.com/storybookjs/storybook/tree/next/code/renderers/react#typescript-docgen)
