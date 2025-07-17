# Claude Context

This file contains important context and instructions for Claude Code when working on this project.

## Project Overview

This is a documentation design system monorepo that provides:
- A comprehensive design system for creating effective documentation
- Reusable UI components that can be packaged for NPM
- Guidelines and principles for technical writers and developers

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
- `apps/docs/` - Next.js documentation site
- `packages/ui/` - Reusable UI components (future NPM package)
- `shared/` - Shared utilities and design tokens

### Component Development
- UI components are in `packages/ui/src/components/`
- Import components in docs app using `@docs-design-system/ui`
- TypeScript path alias is configured in `apps/docs/tsconfig.json`

### Testing
- Always run `npm run build` and `npm run type-check` before committing
- Test the development server with `npm run dev`
- Ensure all pages load correctly and components render properly

## Architecture Decisions

### Monorepo Structure
Using npm workspaces for simple monorepo management without additional tooling complexity.

### UI Package
Components are built with:
- React + TypeScript
- Tailwind CSS for styling
- Designed to be easily extractable to NPM package later

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