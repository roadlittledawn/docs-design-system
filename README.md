# Documentation Design System

A comprehensive design system for creating effective, user-centered documentation that serves both technical writers and developers.

> **⚠️ Work in Progress**: This project is currently under active development. Features and APIs may change.

## What This Is

This monorepo has two primary components:

1. **Design System Website** (`website/`) - A Next.js documentation site that provides:
   - **Style Guide**: Standards and best practices for writing and content quality
   - **Design Principles**: Documentation UX / UI patterns and principles
   - **Gallery**: Showcase of exemplary documentation websites

2. **Component Package** (`packages/ui/`) - An NPM package (`@docs-design-system/ui`) that provides:
   - **Reusable Content Components**: Documentation-specific UI components for building consistent documentation interfaces
   - **Distributable Package**: Components that can be installed and used in other documentation projects

## To Do

### App: Style guide

### App: Design principles

- AI: Discovery, Writing, Reviewing
  - Discovery
    - AI chat bot to answer questions,
    - copy content in markdown, upload content to S3 for indexing in RAG / AI backends
    - Success metrics: defect ratio when using docs (instead of helpfulness/CSAT)
- Content quality measures & success metrics
  - CSAT / helpfulness as content freshness mechanism, not success metric
    - low sample size, biases toward bad, not always about the content itself
  - AI: defect ratios in gen AI apps using docs to answer questions
  - in AI completeness takes on new significance (e.g., documenting the obvious important for AI knowledge)
  - AI needs meta data and more signals for freshness / engagement / sentiment and multiple content/corpous sources
    - e.g., KT applying simple filters on 15M wiki pages and increasing helpfulness, biasing toward more authoritative sources first
    - starts to resemble page ranking search algorithms

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
├── website/           # Next.js documentation site (design system website)
├── packages/
│   └── ui/            # NPM package with reusable content components
├── shared/            # Shared utilities and design tokens
└── README.md
```

**Key distinction:**
- `website/` is the documentation site that teaches the design system
- `packages/ui/` contains components that will be distributed via NPM for use in other projects

## Built With

- **Next.js 16** - React framework with Pages Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **MDX** - Markdown for content pages
- **npm workspaces** - Monorepo management

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
