# Contributing to Documentation Design System

Thank you for your interest in contributing to the Documentation Design System!

## Table of Contents

- [Adding a New Distribution (Distro)](#adding-a-new-distribution-distro)
- [Development Workflow](#development-workflow)
- [Component Development](#component-development)
- [Testing](#testing)

## Adding a New Distribution (Distro)

The Documentation Design System is designed to support multiple framework distributions. Currently, we have a React distribution, with plans to support vanilla JavaScript and Vue.js in the future.

### Architecture Overview

The package is structured to support multiple distros under a single NPM package: `@roadlittledawn/docs-design-system`

- **Package Name**: `@roadlittledawn/docs-design-system` (stays consistent across all distros)
- **Distro Subpath**: Each distro is accessed via a subpath export (e.g., `/react`, `/vanilla`, `/vue`)
- **Package Location**: Each distro lives in `packages/<distro-name>/`

### Current Structure

```
packages/
└── react/                        # React distro
    ├── src/
    │   ├── components/          # React components
    │   ├── hooks/              # React hooks
    │   └── index.ts            # Main entry point
    ├── package.json            # Package configuration
    └── tsconfig.json           # TypeScript config
```

### Expected Import Syntax

Once published to NPM, the components can be imported as follows:

```tsx
// React distro
import { Button, Callout } from '@roadlittledawn/docs-design-system/react';
import '@roadlittledawn/docs-design-system/react/styles.css';

// Vanilla JS distro (future)
import { Button, Callout } from '@roadlittledawn/docs-design-system/vanilla';
import '@roadlittledawn/docs-design-system/vanilla/styles.css';

// Vue.js distro (future)
import { Button, Callout } from '@roadlittledawn/docs-design-system/vue';
import '@roadlittledawn/docs-design-system/vue/styles.css';
```

### Steps to Add a New Distro

#### 1. Create the Package Directory

Create a new directory under `packages/` for your distro:

```bash
mkdir packages/vanilla  # or packages/vue
```

#### 2. Create package.json

Create a `package.json` file with the following structure:

```json
{
  "name": "@roadlittledawn/docs-design-system",
  "version": "0.1.0",
  "description": "Vanilla JS components for documentation design system",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "scripts": {
    "build": "tsc && npm run build:css",
    "build:css": "postcss src/styles/components.css -o dist/styles.css",
    "dev": "npm run dev:ts & npm run dev:css",
    "dev:ts": "tsc --watch",
    "dev:css": "postcss src/styles/components.css -o dist/styles.css --watch",
    "lint": "eslint src/**/*.{ts,js}",
    "type-check": "tsc --noEmit"
  },
  "devDependencies": {
    "postcss": "^8.4.0",
    "postcss-cli": "^11.0.0",
    "postcss-import": "^16.0.0",
    "typescript": "^5.0.0"
  },
  "exports": {
    "./vanilla": {
      "import": "./dist/index.js",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./vanilla/styles.css": "./dist/styles.css"
  }
}
```

**Key Points:**
- The `name` field should be `@roadlittledawn/docs-design-system` (same for all distros)
- Update the `description` to reflect the distro
- The `exports` field should define the subpath for this distro (e.g., `./vanilla`, `./vue`)
- Include both the main entry point and a styles.css export

#### 3. Create Source Directory Structure

Set up the source directory with the appropriate structure for your framework:

```
packages/vanilla/
├── src/
│   ├── components/
│   │   ├── Button.ts
│   │   ├── Callout.ts
│   │   └── ...
│   ├── styles/
│   │   ├── components.css
│   │   └── tokens.css
│   └── index.ts
├── package.json
└── tsconfig.json
```

#### 4. Implement Components

Implement the components according to your framework's patterns:

- **Vanilla JS**: Use Web Components or plain JavaScript classes
- **Vue.js**: Use Vue 3 composition API or options API
- **Other frameworks**: Follow framework-specific best practices

**Important**: Maintain feature parity with the React distro. Each distro should provide the same set of components with consistent APIs and behavior.

#### 5. Update Root Configuration

Update the root `package.json` to include build scripts for the new distro:

```json
{
  "scripts": {
    "dev": "npm run dev --workspace=packages/react & npm run dev --workspace=packages/vanilla & npm run dev --workspace=website & npm run storybook",
    "build": "npm run build --workspace=packages/react && npm run build --workspace=packages/vanilla && npm run build --workspace=website && npm run build-storybook"
  }
}
```

#### 6. Update Documentation

- Update `README.md` to mention the new distro
- Add examples to this `CONTRIBUTING.md` file
- Create a README in the distro's package directory with usage examples

#### 7. Configure Storybook (Optional)

If you want to showcase the new distro in Storybook:

1. Update `storybook/.storybook/main.ts` to include stories from the new distro
2. Create `*.stories.ts` files in your distro's component directory
3. Follow Storybook's framework-specific setup guide

### Design Principles for New Distros

When creating a new distro, follow these principles:

1. **Framework-Native Patterns**: Use idiomatic patterns for the target framework
   - React: Hooks and functional components
   - Vue: Composition API or options API
   - Vanilla: Web Components or ES6 classes

2. **Consistent API**: Maintain consistent prop/option names across distros
   - A `variant` prop in React should be a `variant` option in vanilla JS
   - Component names should be identical across distros

3. **Shared Styling**: Reuse the same CSS/styling approach when possible
   - Use the same design tokens
   - Share CSS files or compile from shared source

4. **Accessibility**: All distros must meet WCAG 2.1 AA standards
   - Proper ARIA attributes
   - Keyboard navigation support
   - Screen reader compatibility

5. **TypeScript Support**: Provide TypeScript definitions for all distros
   - Even vanilla JS should have `.d.ts` files
   - Export proper types for all components

6. **Documentation Parity**: Each component should have equivalent documentation
   - When to use / when not to use
   - Accessibility considerations
   - Code examples

### Testing New Distros

Before submitting a new distro:

1. **Build Test**: Ensure the package builds successfully
   ```bash
   npm run build --workspace=packages/<distro-name>
   ```

2. **Type Check**: Verify TypeScript compilation
   ```bash
   npm run type-check --workspace=packages/<distro-name>
   ```

3. **Integration Test**: Test importing the package in a sample project
   ```bash
   # In a test project
   npm install file:../docs-design-system/packages/<distro-name>
   ```

4. **Accessibility Test**: Run automated accessibility tests
   - Use tools like axe-core or Lighthouse
   - Manually test with screen readers

5. **Cross-Browser Testing**: Verify components work across modern browsers
   - Chrome, Firefox, Safari, Edge
   - Test on both desktop and mobile viewports

## Development Workflow

### Getting Started

```bash
# Clone the repository
git clone https://github.com/roadlittledawn/docs-design-system.git
cd docs-design-system

# Install dependencies
npm install

# Start development servers
npm run dev
```

### Making Changes

1. Create a new branch for your feature/fix
2. Make your changes in the appropriate distro directory
3. Test your changes locally
4. Run linting and type checking
5. Commit your changes with a clear message
6. Open a pull request

### Code Style

- Follow the existing code style in each distro
- Use TypeScript for type safety
- Write clear, descriptive variable and function names
- Add comments for complex logic

## Component Development

### Creating a New Component

1. **Create Component File**: Add the component in `packages/<distro>/src/components/`
2. **Export Component**: Add export to `packages/<distro>/src/index.ts`
3. **Add Styles**: Create CSS file in the component directory
4. **Create Stories**: Add Storybook stories for documentation
5. **Update README**: Document the component in the package README

### Component Guidelines

- Keep components focused and single-purpose
- Make components customizable via props/options
- Provide sensible defaults
- Include proper TypeScript types
- Follow accessibility best practices

## Testing

### Running Tests

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build all packages
npm run build
```

### Adding Tests

(To be expanded when test infrastructure is added)

---

## Questions?

If you have questions about contributing, please:
- Open an issue on GitHub
- Check existing documentation
- Ask in pull request discussions

We appreciate your contributions to making documentation better for everyone!
