# CodeBlock Component Implementation Plan

## Overview

The CodeBlock component is a comprehensive solution for displaying code snippets in documentation with syntax highlighting, copy functionality, tabs, and language switching capabilities.

## Features Implemented

### 1. Basic Code Snippet Support
- ✅ Accepts code as a string prop
- ✅ Optional language specification for syntax highlighting
- ✅ Optional filename display
- ✅ Copy button at top right

### 2. Syntax Highlighting
- ✅ Uses PrismJS library for syntax highlighting
- ✅ Supports multiple languages: JavaScript, TypeScript, JSX, TSX, CSS, Markdown, JSON, Bash, Ruby, Python, Java, SQL, YAML, Svelte
- ✅ Dark theme optimized for code readability
- ✅ Customizable via CSS variables

### 3. Copy to Clipboard
- ✅ Copy button positioned at top right of code block
- ✅ Visual feedback ("Copied!" message) after successful copy
- ✅ Uses native Clipboard API

### 4. Line Highlighting
- ✅ Support for highlighting specific lines (1-indexed)
- ✅ Visual highlight with colored background and left border
- ✅ Configurable via `highlightLines` prop (array of line numbers)

### 5. Tabs for Multiple Code Snippets
- ✅ Display multiple code snippets in tabs
- ✅ Each tab can have a custom title (typically filename)
- ✅ Clicking a tab switches to that code snippet
- ✅ Active tab is visually indicated

### 6. Language Dropdown
- ✅ Automatically detects when multiple language versions are available
- ✅ Displays dropdown to switch between languages
- ✅ Shows language label when only one language is present
- ✅ Groups snippets by language automatically

### 7. External Markdown File Support
- ✅ Load code snippets from external markdown files via `path` prop
- ✅ Parses markdown file to extract fenced code blocks
- ✅ Supports attributes in code block metadata:
  - `filename`: Display filename
  - `tabTitle`: Custom tab title
  - `language`: Syntax highlighting language
  - `highlightLines`: Comma-separated line numbers to highlight
- ✅ Handles loading states and errors gracefully

## Component API

### Props

```typescript
interface CodeBlockProps {
  /** Single code snippet (for simple usage) */
  code?: string;
  /** Language for syntax highlighting */
  language?: string;
  /** Optional filename to display */
  filename?: string;
  /** Optional line numbers to highlight (1-indexed) */
  highlightLines?: number[];
  /** Multiple code snippets (for tabs) */
  snippets?: CodeSnippet[];
  /** Path to markdown file containing snippets */
  path?: string;
  /** Additional CSS classes */
  className?: string;
}

interface CodeSnippet {
  code: string;
  language?: string;
  filename?: string;
  tabTitle?: string;
  highlightLines?: number[];
}
```

## Usage Examples

### Basic Usage

```tsx
<CodeBlock
  code={`function greet(name) {
  return \`Hello, \${name}!\`;
}`}
  language="javascript"
/>
```

### With Filename and Highlighted Lines

```tsx
<CodeBlock
  code={`function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}`}
  language="javascript"
  filename="utils.js"
  highlightLines={[2, 3, 4]}
/>
```

### Multiple Snippets with Tabs

```tsx
<CodeBlock
  snippets={[
    {
      code: `export const Button = ({ children }) => {
  return <button>{children}</button>;
};`,
      language: 'jsx',
      filename: 'Button.jsx',
      tabTitle: 'Button.jsx',
    },
    {
      code: `.button {
  padding: 0.5rem 1rem;
}`,
      language: 'css',
      filename: 'Button.css',
      tabTitle: 'Button.css',
    },
  ]}
/>
```

### Loading from External Markdown File

```tsx
<CodeBlock path="https://raw.githubusercontent.com/storybookjs/storybook/main/docs/_snippets/example.md" />
```

The markdown file format should contain fenced code blocks with attributes:

````markdown
```ts filename="example.ts" language="typescript" tabTitle="TypeScript"
export const example = () => {
  return "Hello";
};
```

```js filename="example.js" language="javascript" tabTitle="JavaScript"
export const example = () => {
  return "Hello";
};
```
````

## File Structure

```
packages/ui/src/components/
├── CodeBlock.tsx          # Main component implementation
├── CodeBlock.css          # Component styles
└── CodeBlock.stories.tsx  # Storybook stories
```

## Dependencies

- `prismjs`: ^1.29.0 - Syntax highlighting library
- `react`: ^18.0.0 - React framework
- `react-dom`: ^18.0.0 - React DOM rendering

## Integration Steps

### 1. Install Dependencies

```bash
cd packages/ui
npm install
```

This will install `prismjs` which was added to `package.json`.

### 2. Build the Component

```bash
npm run build
```

### 3. Storybook Story File

A Storybook story file has been created at:
- `packages/ui/src/components/CodeBlock.stories.tsx`

This includes examples for:
- Basic code block
- With filename
- With highlighted lines
- Multiple tabs
- Language dropdown
- External markdown file loading
- Various language examples (JSON, Bash, etc.)

### 4. Testing in Website Project

To test the component in the website project:

1. **Import the component** in your MDX file:
   ```tsx
   import { CodeBlock } from '@docs-design-system/ui';
   ```

2. **Use it in MDX**:
   ```mdx
   <CodeBlock
     code={`console.log("Hello, World!");`}
     language="javascript"
   />
   ```

3. **Or use with path prop**:
   ```mdx
   <CodeBlock path="https://raw.githubusercontent.com/storybookjs/storybook/main/docs/_snippets/example.md" />
   ```

4. **For fenced code blocks**, you'll need to configure MDX to use the CodeBlock component. This typically involves:
   - Updating `mdx-components.tsx` to map code blocks to CodeBlock component
   - Or using MDX plugins to transform fenced code blocks

## CSS Customization

The component uses CSS variables for theming. You can customize:

- `--dds-code-block-border`: Border color
- `--dds-code-block-bg`: Background color
- `--dds-code-block-header-bg`: Header background
- `--dds-code-block-highlight-bg`: Line highlight background
- `--dds-code-block-highlight-border`: Line highlight border color
- And many more (see `CodeBlock.css` for full list)

## Next Steps

1. **Install dependencies**: Run `npm install` in `packages/ui` directory
2. **Build the component**: Run `npm run build` to compile TypeScript and CSS
3. **View in Storybook**: Run Storybook to see all the examples
4. **Test in website**: Add the component to an MDX file in the website project
5. **Configure MDX**: Set up MDX to use CodeBlock for fenced code blocks (if desired)

## Notes

- The component automatically groups snippets by language when multiple languages are detected
- Tabs are only shown when there are 2+ snippets
- Language dropdown is only shown when there are 2+ different languages
- The component handles loading and error states for external markdown files
- Line numbers are 1-indexed (first line is 1, not 0)
- The component uses PrismJS's default theme but can be customized via CSS

