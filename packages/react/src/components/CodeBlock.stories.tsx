import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from './CodeBlock';

/**
 * The CodeBlock component displays code snippets with syntax highlighting, copy functionality, and support for multiple tabs and languages.
 */
const meta: Meta<typeof CodeBlock> = {
  title: 'Components/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The CodeBlock component provides a comprehensive solution for displaying code snippets in documentation.

## Features

- **Syntax Highlighting**: Uses PrismJS for syntax highlighting across many languages
- **Copy to Clipboard**: One-click copy button for easy code sharing
- **Line Highlighting**: Highlight specific lines to draw attention
- **Tabs**: Display multiple code snippets in tabs (typically for different files)
- **Language Switching**: Dropdown to switch between different language versions
- **Filename Labels**: Single-file snippets display a flat filename label in the header
- **External Snippets**: Load code snippets from markdown files via path prop

## Supported Languages

The following languages are bundled by default: JavaScript, TypeScript, JSX, TSX, CSS, Markdown, JSON, Bash, Ruby, Python, Java, SQL, YAML, and PHP.

To add additional languages, use the \`registerLanguages\` utility before rendering:

\`\`\`ts
import { registerLanguages, CodeBlock } from '@roadlittledawn/docs-design-system-react';

// Call once at app startup or before rendering CodeBlock with new languages.
// Prism is already loaded by the package — dynamic language imports
// register themselves against it automatically.
await registerLanguages(async () => {
  await import('prismjs/components/prism-go');
  await import('prismjs/components/prism-rust');
});
\`\`\`

## When to Use

- For code examples in documentation
- When displaying multiple related code snippets
- For showing code in different languages (TypeScript, JavaScript, etc.)
- When you need users to easily copy code

## When Not to Use

- For inline code (use \`<code>\` tags)
- For code that doesn't need syntax highlighting
- For executable code editors (use a code editor component)

## Accessibility

- Copy button includes proper ARIA labels
- Keyboard navigation for tabs and dropdowns
- High contrast syntax highlighting colors
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

/**
 * Basic code block with a simple code snippet.
 */
export const Basic: Story = {
  args: {
    code: `function greet(name: string) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));`,
    language: 'typescript',
  },
};

/**
 * Code block with a filename displayed.
 */
export const WithFilename: Story = {
  args: {
    code: `export const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};`,
    language: 'jsx',
    filename: 'Button.jsx',
  },
};

/**
 * Code block with highlighted lines.
 */
export const WithHighlightedLines: Story = {
  args: {
    code: `function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}`,
    language: 'javascript',
    highlightLines: [2, 3, 4],
  },
};

/**
 * Multiple code snippets displayed in tabs.
 */
export const WithTabs: Story = {
  args: {
    snippets: [
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
  background-color: blue;
  color: white;
}`,
        language: 'css',
        filename: 'Button.css',
        tabTitle: 'Button.css',
      },
      {
        code: `import { Button } from './Button';

export default {
  component: Button,
};`,
        language: 'typescript',
        filename: 'Button.stories.ts',
        tabTitle: 'Button.stories.ts',
      },
    ],
  },
};

/**
 * Multiple language versions with language dropdown.
 */
export const WithLanguageDropdown: Story = {
  args: {
    snippets: [
      {
        code: `function greet(name: string): string {
  return \`Hello, \${name}!\`;
}`,
        language: 'typescript',
        filename: 'greet.ts',
      },
      {
        code: `function greet(name) {
  return \`Hello, \${name}!\`;
}`,
        language: 'javascript',
        filename: 'greet.js',
      },
      {
        code: `def greet(name):
    return f"Hello, {name}!"`,
        language: 'python',
        filename: 'greet.py',
      },
      {
        code: `def greet(name)
  "Hello, #{name}!"
end`,
        language: 'ruby',
        filename: 'greet.rb',
      },
    ],
  },
};

/**
 * Complex example with tabs and highlighted lines.
 */
export const ComplexExample: Story = {
  args: {
    snippets: [
      {
        code: `import React from 'react';

export function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="btn">
      {children}
    </button>
  );
}`,
        language: 'jsx',
        filename: 'Button.jsx',
        tabTitle: 'Button.jsx',
        highlightLines: [3, 4, 5],
      },
      {
        code: `.btn {
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border-radius: 0.375rem;
}`,
        language: 'css',
        filename: 'Button.css',
        tabTitle: 'Button.css',
        highlightLines: [2, 3],
      },
    ],
  },
};

/**
 * Example using path prop to load from external markdown file.
 * Note: This will only work if the path is accessible.
 */
export const WithPath: Story = {
  args: {
    path: 'https://raw.githubusercontent.com/storybookjs/storybook/47e331ffbaa61a476ddb873bdb12bf46a93a5131/docs/_snippets/before-each-in-meta-mock-date.md',
  },
};

/**
 * JSON code example.
 */
export const JSONExample: Story = {
  args: {
    code: `{
  "name": "docs-design-system",
  "version": "0.1.0",
  "dependencies": {
    "react": "^18.0.0"
  }
}`,
    language: 'json',
    filename: 'package.json',
  },
};

/**
 * Bash/shell script example.
 */
export const BashExample: Story = {
  args: {
    code: `#!/bin/bash

# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test`,
    language: 'bash',
    filename: 'setup.sh',
  },
};

/**
 * Multiple TSX files displayed as flat tabs with bottom-border accent.
 */
export const WithFilenameTabs: Story = {
  args: {
    snippets: [
      {
        code: `import { CodeBlock } from '@docs-design-system/ui';

export function Example() {
  return (
    <CodeBlock
      code="console.log('hello')"
      language="typescript"
    />
  );
}`,
        language: 'tsx',
        filename: 'Example.tsx',
        tabTitle: 'Example.tsx',
      },
      {
        code: `import { CodeBlock } from '@docs-design-system/ui';

export function Advanced() {
  return (
    <CodeBlock
      snippets={[
        { code: 'const a = 1;', language: 'typescript', tabTitle: 'a.ts' },
        { code: 'const b = 2;', language: 'typescript', tabTitle: 'b.ts' },
      ]}
    />
  );
}`,
        language: 'tsx',
        filename: 'Advanced.tsx',
        tabTitle: 'Advanced.tsx',
      },
    ],
  },
};

/**
 * Single snippet with a filename — displays a flat filename label in the header.
 */
export const SingleFilename: Story = {
  args: {
    code: `export default function Home() {
  return <h1>Welcome</h1>;
}`,
    language: 'tsx',
    filename: 'page.tsx',
  },
};

/**
 * PHP syntax highlighting example.
 */
export const PHPExample: Story = {
  args: {
    code: `<?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return view('users.index', compact('users'));
    }

    public function show(int $id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }
}`,
    language: 'php',
    filename: 'UserController.php',
  },
};

/**
 * Many tabs to verify horizontal scroll behavior.
 */
export const ManyTabs: Story = {
  args: {
    snippets: [
      {
        code: `export const App = () => <div>App</div>;`,
        language: 'tsx',
        tabTitle: 'App.tsx',
      },
      {
        code: `export const Header = () => <header>Header</header>;`,
        language: 'tsx',
        tabTitle: 'Header.tsx',
      },
      {
        code: `export const Footer = () => <footer>Footer</footer>;`,
        language: 'tsx',
        tabTitle: 'Footer.tsx',
      },
      {
        code: `export const Sidebar = () => <aside>Sidebar</aside>;`,
        language: 'tsx',
        tabTitle: 'Sidebar.tsx',
      },
      {
        code: `export const Nav = () => <nav>Nav</nav>;`,
        language: 'tsx',
        tabTitle: 'Navigation.tsx',
      },
      {
        code: `export const Content = () => <main>Content</main>;`,
        language: 'tsx',
        tabTitle: 'ContentArea.tsx',
      },
    ],
  },
};

