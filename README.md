# Documentation Design System

A comprehensive design system for creating effective, user-centered documentation that serves both technical writers and developers.

> **⚠️ Work in Progress**: This project is currently under active development. Features and APIs may change.

## What This Is

This monorepo has three primary components:

1. **Design System Website** (`website/`) - A Next.js documentation site that provides:
   - **Style Guide**: Standards and best practices for writing and content quality
   - **Design Principles**: Documentation UX / UI patterns and principles
   - **Gallery**: Showcase of exemplary documentation websites

2. **Component Package** (`packages/react/`) - An NPM package (`@roadlittledawn/docs-design-system`) that provides:
   - **Reusable Content Components**: Documentation-specific UI components for building consistent documentation interfaces
   - **Distributable Package**: Components that can be installed and used in other documentation projects
   - **React Implementation**: React-based components (with support planned for vanilla JS and Vue.js)

3. **Storybook** (`storybook/`) - Interactive component documentation that provides:
   - **Live Examples**: All UI components with interactive controls
   - **Auto-Generated API Docs**: Component props documentation from TypeScript
   - **Accessibility Testing**: Built-in a11y violation reporting
   - **Visual Documentation**: "When to Use" guidelines for each component

## To Do

### App: Style guide

### App: Design principles

### App: Gallery

### Content component library

- Add docs ticket templates and best practices (NR style guide)
- Add doc plans / content strategy templates and best practices

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/roadlittledawn/docs-design-system.git
cd docs-design-system

# Install dependencies
npm install
```

### Development

```bash
# Start all development servers (website, react package, and Storybook)
npm run dev

# Start individual servers
npm run dev --workspace=website        # Next.js site at http://localhost:3000
npm run dev --workspace=packages/react # React package build watcher
npm run storybook                      # Storybook at http://localhost:6006

# Build all packages
npm run build

# Run linting
npm run lint

# Run type checking
npm run type-check
```

**Development URLs:**

- Documentation site: `http://localhost:3000`
- Storybook: `http://localhost:6006`

**Development Workflow Notes:**

When editing CSS files in `packages/react/src/components/`:

- PostCSS automatically rebuilds `dist/styles.css` when you save changes
- **Manual page refresh required** - The website dev server doesn't auto-reload for external package changes
- This is a known limitation of consuming local packages in Next.js monorepos
- The website treats `packages/react` as a standard NPM package (consuming from `dist/`), which is the correct approach for a distributable component library

## Project Structure

```
docs-design-system/
├── website/           # Next.js documentation site (design system website)
├── storybook/         # Storybook component documentation
├── packages/
│   └── react/         # NPM package with React components (@roadlittledawn/docs-design-system)
├── shared/            # Shared utilities and design tokens
└── README.md
```

**Key distinctions:**

- `website/` - The documentation site that teaches the design system
- `packages/react/` - React components distributed via NPM for use in other projects
- `storybook/` - Interactive component documentation (not distributed)

## Built With

- **Next.js 16** - React framework with Pages Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **MDX** - Markdown for content pages
- **Storybook 8** - Component documentation and development
- **npm workspaces** - Monorepo management

## Component Documentation

All UI components are documented in Storybook with:

- Interactive examples and prop controls
- Auto-generated API documentation from TypeScript
- Usage guidelines ("When to Use" / "When Not to Use")
- Accessibility testing and best practices

**View Component Docs:**

```bash
npm run storybook
```

See `storybook/README.md` for more information on adding and documenting components.

## Contributing

This project is in early development. More contribution guidelines will be added as the project matures.

## TODO

- Add docs ticket templates and best practices (NR style guide)
- Add doc plans / content strategy templates and best practices
- [Philosophy] Add best practices for AI assisted writing. Generate agent rules from style guide
- [Philosophy] Add best practices for user feedback loops in documentation
  - how it's used as content freshness / maintenance mechanism and not indicator of quality
- [Philosophy] Add best practices for measuring documentation effectiveness (analytics, user testing, etc), esp in AI generated answers world
- [UX] Add preference to avoiding image light boxes in favor of linking to full size image
