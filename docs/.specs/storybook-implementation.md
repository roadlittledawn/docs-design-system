# Implementation Plan: Storybook Component Documentation

## Overview
Add Storybook 8.x as a separate documentation site for the 8 UI components in `@docs-design-system/ui`, with auto-generated TypeScript API docs and static code examples.

## Approach
- **Storybook Location**: New workspace at `/storybook/` (alongside `website/` and `packages/`)
- **Framework**: `@storybook/react-vite` (faster than Next.js adapter, components are framework-agnostic)
- **API Docs**: Auto-generated from TypeScript using `react-docgen-typescript`
- **Examples**: Static code snippets + rendered output (via `@storybook/addon-docs`)
- **Story Files**: Colocated with components in `/packages/ui/src/components/*.stories.tsx`
- **Integration**: Link from main docs site at `/website/pages/components` to Storybook

**Note**: Storybook is placed at root level (not in `packages/`) because it's documentation infrastructure, not a distributable NPM package.

## Components to Document
1. Button
2. Callout
3. Card
4. CardGrid
5. Collapser
6. Typography
7. Heading
8. Link

---

## Implementation Steps

### Phase 1: Storybook Workspace Setup

#### 1. Create Storybook workspace
**New directory**: `/storybook/`

**Files to create**:
- `/storybook/package.json`
  - Add dependencies: `@storybook/react-vite`, `@storybook/addon-essentials`, `@storybook/addon-a11y`, `storybook@^8.4.7`
  - Add dependency: `@docs-design-system/ui: "workspace:*"`
  - Scripts: `storybook`, `build`, `prestorybook`
  - Set `"private": true`

- `/storybook/.storybook/main.ts`
  - Configure stories glob: `../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)`
  - Set framework: `@storybook/react-vite`
  - Add addons: essentials, a11y, interactions
  - Configure TypeScript: `react-docgen-typescript` with prop filtering

- `/storybook/.storybook/preview.ts`
  - Import CSS: `@docs-design-system/ui/dist/styles.css`
  - Configure docs parameters (source code display, controls)
  - Set backgrounds (light/dark)

#### 2. Update root package.json
**File**: `/package.json`

Update workspaces array to include storybook:
```json
"workspaces": [
  "website",
  "packages/*",
  "storybook"
]
```

Add scripts:
```json
"storybook": "npm run storybook --workspace=storybook",
"build-storybook": "npm run build --workspace=storybook",
"dev": "npm run dev --workspace=packages/ui & npm run dev --workspace=website & npm run storybook"
```

#### 3. Install dependencies
```bash
npm install
```

### Phase 2: Component Enhancement

#### 4. Add JSDoc comments to all component interfaces
**Files to modify** (8 total):
- `/packages/ui/src/components/Button.tsx`
- `/packages/ui/src/components/Callout.tsx`
- `/packages/ui/src/components/Card.tsx`
- `/packages/ui/src/components/CardGrid.tsx`
- `/packages/ui/src/components/Collapser.tsx`
- `/packages/ui/src/components/Typography.tsx`
- `/packages/ui/src/components/Heading.tsx`
- `/packages/ui/src/components/Link.tsx`

Add JSDoc comments to prop interfaces:
```typescript
interface ButtonProps {
  /**
   * Visual style variant of the button
   * @default 'primary'
   */
  variant?: "primary" | "secondary" | "outline";

  /**
   * Size of the button
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";

  /** Button content */
  children: React.ReactNode;
}
```

### Phase 3: Story Creation

#### 5. Create story files for each component
**Files to create** (8 total):
- `/packages/ui/src/components/Button.stories.tsx`
- `/packages/ui/src/components/Callout.stories.tsx`
- `/packages/ui/src/components/Card.stories.tsx`
- `/packages/ui/src/components/CardGrid.stories.tsx`
- `/packages/ui/src/components/Collapser.stories.tsx`
- `/packages/ui/src/components/Typography.stories.tsx`
- `/packages/ui/src/components/Heading.stories.tsx`
- `/packages/ui/src/components/Link.stories.tsx`

**Story file structure** (CSF 3 format):
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Button component for user actions and navigation.

## When to Use
- Primary actions (e.g., "Submit", "Save")
- Secondary actions (e.g., "Cancel", "Back")
- Important calls-to-action

## When Not to Use
- For navigation (use Link component)
- For less important actions (consider text links)
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

// Additional stories for variants...
```

**Each story file should include**:
- Component description and "When to Use" guidelines in meta
- Stories for all variants/configurations
- At least one comprehensive example showing multiple variants

### Phase 4: Website Integration

#### 6. Update components index page
**File**: `/website/pages/components/index.tsx`

Replace "Coming Soon" section with:
- Link to Storybook (localhost:6006 for dev)
- List of all 8 components with direct links to their Storybook docs pages
- Brief description of what Storybook provides

Add environment variable for production Storybook URL:
```typescript
const STORYBOOK_URL = process.env.NEXT_PUBLIC_STORYBOOK_URL || 'http://localhost:6006';
```

### Phase 5: Testing & Documentation

#### 7. Test local setup
```bash
# Build UI package CSS first
npm run build --workspace=packages/ui

# Start Storybook
npm run storybook
```

Verify:
- All 8 components render at http://localhost:6006
- Prop tables auto-generate correctly
- "Show code" displays source
- Accessibility addon works

#### 8. Test build
```bash
npm run build-storybook
```

Verify static output in `/storybook/dist/`

#### 9. Add documentation
Create `/storybook/README.md` documenting:
- How to run Storybook locally
- How to add new stories
- How to build for deployment

Update root `/README.md` with Storybook section

---

## Critical Files

### New Files (Required)
1. `/storybook/package.json` - Storybook workspace config
2. `/storybook/.storybook/main.ts` - Storybook framework config
3. `/storybook/.storybook/preview.ts` - Global parameters and CSS import
4. `/packages/ui/src/components/Button.stories.tsx` - Template for all stories
5. 7 additional `.stories.tsx` files for remaining components
6. `/storybook/README.md` - Storybook documentation

### Files to Modify
1. `/package.json` - Add Storybook scripts to root workspace
2. `/packages/ui/src/components/*.tsx` (8 files) - Add JSDoc comments
3. `/website/pages/components/index.tsx` - Add Storybook links
4. `/README.md` - Document Storybook setup

---

## Key Configuration Details

### Storybook Dependencies
```json
{
  "@storybook/react": "^8.4.7",
  "@storybook/react-vite": "^8.4.7",
  "@storybook/addon-essentials": "^8.4.7",
  "@storybook/addon-a11y": "^8.4.7",
  "@storybook/addon-interactions": "^8.4.7",
  "storybook": "^8.4.7",
  "vite": "^5.0.0"
}
```

### TypeScript DocGen Config (in main.ts)
```typescript
typescript: {
  reactDocgen: 'react-docgen-typescript',
  reactDocgenTypescriptOptions: {
    shouldExtractLiteralValuesFromEnum: true,
    shouldRemoveUndefinedFromOptional: true,
    propFilter: (prop) => {
      // Filter out inherited HTML props from node_modules
      if (prop.parent) {
        return !prop.parent.fileName.includes('node_modules');
      }
      return true;
    },
  },
}
```

### CSS Import Strategy
Import compiled CSS in preview.ts:
```typescript
import '@docs-design-system/ui/dist/styles.css';
```

This ensures all component styles (including tokens.css) are available.

---

## Development Workflow

### Running locally
```bash
# Option 1: Run all services
npm run dev

# Option 2: Run individually
npm run dev --workspace=packages/ui        # Watch CSS changes
npm run dev --workspace=website            # Next.js site
npm run storybook                          # Storybook
```

**URLs**:
- Main site: http://localhost:3000
- Storybook: http://localhost:6006

### Making changes
1. Component changes: Edit files in `/packages/ui/src/components/`
2. Story changes: Edit corresponding `.stories.tsx` file
3. CSS changes: Rebuild with `npm run build --workspace=packages/ui` or run dev mode

---

## Deployment Strategy

### Build process
```bash
npm run build --workspace=packages/ui    # Build components
npm run build --workspace=storybook      # Build Storybook
```

Output: `/storybook/dist/` (static site)

### Recommended deployment
- **Separate subdomain**: Deploy to `storybook.yourdomain.com`
- Update `NEXT_PUBLIC_STORYBOOK_URL` environment variable in main site
- Deploy using Netlify, Vercel, or GitHub Pages

---

## Important Notes

### CSS Build Timing
- Always build UI package before starting Storybook initially
- The `prestorybook` script handles this automatically
- For development, run `npm run dev` from root to watch all changes

### Prop Table Filtering
- The prop filter excludes inherited HTML props from React types
- Only component-specific props appear in documentation
- This keeps prop tables clean and relevant

### Story Imports
- Stories import directly from component files: `import { Button } from './Button'`
- Not from barrel export to avoid circular dependencies
- Storybook then imports from `@docs-design-system/ui` workspace

### Auto-Documentation
- The `tags: ['autodocs']` in story meta auto-generates a docs page
- Prop tables are generated automatically from TypeScript
- JSDoc comments enhance prop descriptions

---

## Success Criteria

After implementation:
- [ ] Storybook runs at http://localhost:6006 with all 8 components
- [ ] Auto-generated prop tables show TypeScript interfaces
- [ ] "Show code" snippets are available for all stories
- [ ] "When to Use" documentation exists for each component
- [ ] Main docs site links to Storybook
- [ ] Accessibility addon tests all components
- [ ] Static build succeeds and outputs to dist/
- [ ] All components render correctly with proper styling
