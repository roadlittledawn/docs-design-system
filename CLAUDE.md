# Claude Context

This file contains important context and instructions for Claude Code when working on this project.

## Project Overview

This is a documentation design system monorepo with two primary purposes:

1. **Design System Website** (`website/`) - A Next.js site that documents best practices, principles, and guidelines for creating effective documentation
2. **Component Package** (`packages/ui/`) - An NPM package (`@docs-design-system/ui`) containing reusable content components that can be distributed and used in other documentation projects

The monorepo provides:
- Guidelines and principles for technical writers and developers
- A gallery of exemplary documentation websites
- Reusable UI components specifically designed for documentation use cases

## Development Commands

### Getting Started
```bash
npm install          # Install all dependencies
npm run dev          # Start development server
npm run build        # Build all packages
npm run lint         # Run linting
npm run type-check   # Run TypeScript checking
```

### Package Structure
- `website/` - Next.js documentation site (the design system website itself)
- `packages/ui/` - NPM package with reusable content components for distribution
- `shared/` - Shared utilities and design tokens

### Component Development
- UI components are in `packages/ui/src/components/`
- Import components in the website using `@docs-design-system/ui`
- TypeScript path alias is configured in `website/tsconfig.json`
- Components in `packages/ui/` are built for NPM distribution to be used in other projects

### Testing
- Always run `npm run build` and `npm run type-check` before committing
- Test the development server with `npm run dev`
- Ensure all pages load correctly and components render properly

## Architecture Decisions

### Monorepo Structure
Using npm workspaces for simple monorepo management without additional tooling complexity.

### UI Package (`packages/ui/`)
This package is designed for NPM distribution. Components are built with:
- React + TypeScript
- Tailwind CSS for styling
- Focus on documentation-specific content components (not general UI components)
- Intended to be installed and used by other documentation projects

### Documentation Framework
Following the Diátaxis framework for organizing documentation into four types:
- Tutorials (learning-oriented)
- How-to guides (problem-oriented)
- Reference (information-oriented)
- Explanation (understanding-oriented)

## Important Notes

- Always use the TypeScript path alias `@docs-design-system/ui` for importing components
- Keep components simple and focused on documentation use cases
- Follow existing code style and patterns
- Test both development and build processes before creating PRs

## Resources
- [Diátaxis Framework](https://diataxis.fr/)
- [New Relic Docs style guide](https://docs.newrelic.com/docs/style-guide/writing-strategies/introduction-style-guide/)
- [Gallery of great docs UX](https://docs.google.com/document/d/100MglgKev4o_hIkmI-327EKb_rek5Opc2er7nx34vuE/edit?tab=t.0#heading=h.dsiuaplpe35q)
- [Dave Shevitz's doc on measuring content quality](https://docs.google.com/document/d/1dfb8MLT4y6GRaIxEe7WQyFmJS_P9etIDLObpWxaTAgU/edit?tab=t.0#heading=h.hof7sc4v06ii)
