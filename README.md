# Documentation Design System

A comprehensive design system for creating effective, user-centered documentation that serves both technical writers and developers.

> **⚠️ Work in Progress**: This project is currently under active development. Features and APIs may change.

## What This Will Be

This documentation design system will provide:

- **Style Guide**: Standards and best practices for writing and content quality
- **Design Principles**: Documentation UX / UI patterns and principles
- **Component Library**: Reusable UI elements for building consistent documentation interfaces
- **NPM Package**: Exportable components for easy integration into other projects

## To Do

### App: Style guide

### App: Design principles

- AI: Discovery, Writing, Reviewing
  - Discovery: AI chat bot to answer questions, copy content in markdown, upload content to S3 for indexing in RAG / AI backends

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
# Start the development server
npm run dev

# Build all packages
npm run build

# Run linting
npm run lint

# Run type checking
npm run type-check
```

The documentation site will be available at `http://localhost:3000`.

## Project Structure

```
docs-design-system/
├── apps/
│   └── docs/          # Next.js documentation site
├── packages/
│   └── ui/            # Reusable UI components (future NPM package)
├── shared/            # Shared utilities and design tokens
└── README.md
```

## Built With

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **npm workspaces** - Monorepo management

## Contributing

This project is in early development. More contribution guidelines will be added as the project matures.

## License

TBD
