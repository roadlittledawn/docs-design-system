# Styling System Migration Plan

## Problem
The `@docs-design-system/ui` package currently uses inline Tailwind CSS classes but has no Tailwind dependency. This only works for consumers with Tailwind configured (like the website). NPM consumers without Tailwind will see unstyled components.

## Solution: CSS Variables + Minimal CSS
Lightweight, framework-agnostic styling using CSS variables for design tokens and vanilla CSS for component styles. This provides:
- Default styles that work out of the box (~3-4KB CSS overhead)
- Easy customization via CSS variables, className, or style props
- Zero runtime overhead, no build tool requirements
- Universal compatibility

## Implementation Steps

### 1. Setup Build Infrastructure
**Create new files:**
- `packages/ui/src/styles/tokens.css` - CSS variables for all design tokens
- `packages/ui/src/styles/components.css` - Import file for all component CSS

**Update package.json:**
- Add build script to bundle CSS files to `dist/styles.css`
- Add `dist/styles.css` to the `files` array for NPM distribution
- Consider adding `copyfiles` package or using a simple concatenation script

### 2. Create Design Tokens
**In `src/styles/tokens.css`, define CSS variables for:**
- Colors: heading, button, card variants (blue, gray, green, purple, red, yellow)
- Typography: font sizes, line heights, font weights for h1-h4, body, small
- Spacing: margins, paddings for different component sizes
- Border radius: buttons, cards
- Shadows: card hover states
- Transitions: button hovers, card interactions

**Naming convention:** `--dds-{component}-{property}-{variant}`
- Example: `--dds-heading-1-size`, `--dds-button-primary-bg`, `--dds-card-padding`

### 3. Migrate Components (in order)

#### a. Heading Component
**File:** `/Users/clinton/Projects/docs-design-system/packages/ui/src/components/Heading.tsx`

**Create:** `src/components/Heading.css`
- Define `.dds-heading` base class
- Define `.dds-heading-1` through `.dds-heading-4` for level-specific styles
- Use CSS variables from tokens.css

**Update Heading.tsx:**
- Remove Tailwind class strings (lines 10, 13-16)
- Import Heading.css
- Apply class names: `dds-heading dds-heading-{level}`
- Keep className prop for custom overrides

#### b. Button Component
**File:** `/Users/clinton/Projects/docs-design-system/packages/ui/src/components/Button.tsx`

**Create:** `src/components/Button.css`
- Define `.dds-button` base class (replaces baseClasses on line 16)
- Define variant classes: `.dds-button-primary`, `.dds-button-secondary`, `.dds-button-outline`
- Define size classes: `.dds-button-sm`, `.dds-button-md`, `.dds-button-lg`

**Update Button.tsx:**
- Remove Tailwind class objects (lines 16-28)
- Import Button.css
- Apply classes: `dds-button dds-button-{variant} dds-button-{size}`
- Keep className prop and spread props

#### c. Card Component
**File:** `/Users/clinton/Projects/docs-design-system/packages/ui/src/components/Card.tsx`

**Create:** `src/components/Card.css`
- Define `.dds-card` base class
- Define background variants: `.dds-card-bg-{color}`
- Define title color variants: `.dds-card-title-{color}`
- Handle hover states for clickable cards

**Update Card.tsx:**
- Remove colorVariants object (lines 12-30)
- Import Card.css
- Apply classes using CSS class names instead of Tailwind utilities
- Fix line 47 dynamic class construction (potential Tailwind purge issue)

#### d. Remaining Components
Apply same pattern to:
- `CardGrid.tsx` - Grid layout with responsive columns
- `Typography.tsx` - Text variants
- `Link.tsx` - Link styling with external link indicator

### 4. Update Main Export
**File:** `/Users/clinton/Projects/docs-design-system/packages/ui/src/index.ts`

Add CSS import at the top:
```typescript
import './styles/components.css';
```

Or document that consumers should import the CSS file themselves (cleaner for tree-shaking).

### 5. Update Website Integration
**File:** `/Users/clinton/Projects/docs-design-system/website/pages/_app.tsx` (or layout file)

Add CSS import:
```typescript
import '@docs-design-system/ui/dist/styles.css';
```

Test all pages to ensure components still render correctly.

### 6. Documentation Updates
**Create:** `packages/ui/README.md`
- Installation instructions
- CSS import requirement
- Customization guide (CSS variables, className, style props)
- Example of overriding h3 font size
- Migration guide from 0.x to 1.0

**Update:** Root `README.md`
- Note about CSS import requirement for NPM package

### 7. Version & Publish
- Bump version to 1.0.0 (breaking change)
- Update CHANGELOG.md
- Test build process: `npm run build`
- Test in website: `npm run dev`
- Commit and create PR

## Critical Files to Modify

**New Files:**
- `packages/ui/src/styles/tokens.css`
- `packages/ui/src/styles/components.css`
- `packages/ui/src/components/Heading.css`
- `packages/ui/src/components/Button.css`
- `packages/ui/src/components/Card.css`
- `packages/ui/src/components/CardGrid.css`
- `packages/ui/src/components/Typography.css`
- `packages/ui/src/components/Link.css`
- `packages/ui/README.md`

**Modified Files:**
- `packages/ui/package.json` - Build scripts, files array
- `packages/ui/src/components/Heading.tsx`
- `packages/ui/src/components/Button.tsx`
- `packages/ui/src/components/Card.tsx`
- `packages/ui/src/components/CardGrid.tsx`
- `packages/ui/src/components/Typography.tsx`
- `packages/ui/src/components/Link.tsx`
- `packages/ui/src/index.ts` - Optional CSS import
- `website/pages/_app.tsx` - Import packaged CSS
- `README.md` - Document CSS import requirement

## Migration Considerations

**Breaking Changes:**
- Consumers must import CSS file: `import '@docs-design-system/ui/dist/styles.css'`
- Class names change from Tailwind utilities to semantic classes
- This is a major version bump (0.x → 1.0.0)

**Benefits:**
- Works for all NPM consumers (no Tailwind requirement)
- Smaller bundle size for consumers without Tailwind
- Easy customization via CSS variables
- Better semantic HTML with meaningful class names

**Testing:**
- Test all components in website after migration
- Verify build process produces dist/styles.css
- Test in a separate project without Tailwind to confirm it works standalone
