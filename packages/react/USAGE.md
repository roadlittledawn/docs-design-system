# @roadlittledawn/docs-design-system-react — Component Usage Guide

Hand-maintained reference for AI tools and human contributors. Covers when to use each component, when not to, how to choose between similar components, and full prop coverage.

```
// CLAUDE.md or equivalent:
// Component usage guide: packages/react/USAGE.md (or https://raw.githubusercontent.com/roadlittledawn/docs-design-system/main/packages/react/USAGE.md)
```

---

## Choosing Between Similar Components

Before diving into individual components, here's guidance on common decision points:

### Navigation and links

- **`Link`** — for text-based navigation within prose; auto-handles external links
- **`Button`** — for actions (submit, save, trigger); not for navigation
- **`Card` with `href`** — for clickable card-style navigation elements
- **`Breadcrumb`** — for showing location in the doc hierarchy

### Lists and steps

- **`<ol>/<ul>`** — for short, simple text-only lists
- **`List`** — for visually prominent steps or benefits lists; use when items contain rich content (code blocks, callouts) or need custom bullets
- **`CollapserGroup` with `numbered`** — for numbered steps where each step needs expand/collapse behavior

### Organizing and hiding content

- **`Tabs`** — for a small number of parallel content alternatives displayed side-by-side; user sees one at a time but knows others exist
- **`Collapser`/`CollapserGroup`** — for long vertical content, FAQs, or any content that benefits from progressive disclosure; user can see all titles at once
- **`CodeBlock` with `snippets`** — specifically for showing the same code in multiple languages; more compact than Tabs for code-only use cases

### Layout

- **`Grid`/`Column`** — for asymmetric or varied multi-column layouts (tutorial + code panel, image + annotation, side-by-side comparison)
- **`CardGrid`** — specifically for grids of uniform `Card` items; simpler API than `Grid`

### Headings and text

- **`Heading`** — for semantic HTML headings that contribute to the document outline (SEO, accessibility, screen reader navigation)
- **`Typography`** — for styled text, including headings when you still want semantic `<h1>`–`<h4>` elements; for heading-like visuals that should *not* be semantic headings, use `variant="p"` (or similar) plus styling instead of an `h1`–`h4` variant (e.g., a callout title, a sidebar widget header)

---

## Button

The Button component is used for user actions — not navigation. Use it when something happens as a result of the click (form submit, trigger an action, open a modal).

### When to Use

- Primary actions: "Submit", "Save", "Continue", "Get started"
- Secondary or cancel actions: "Cancel", "Go back", "Reset"
- Prominent calls-to-action on documentation landing pages

### When Not to Use

- **Navigation between pages** — use `Link` instead; buttons are for actions, not page navigation
- **Low-priority actions** — a plain text `Link` is less visually noisy
- **Clickable cards** — use `Card` with the `href` prop

### Variants

- `primary` — the main action on a page; use once per section/form
- `secondary` — alternative or less important actions
- `outline` — tertiary actions or when you need a subtle button

### Import

```tsx
import { Button } from "@roadlittledawn/docs-design-system-react";
```

### Props

Extends `React.ButtonHTMLAttributes<HTMLButtonElement>`.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"primary" \| "secondary" \| "outline"` | `"primary"` | Visual style variant of the button |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size of the button |
| `children` | `React.ReactNode` | — | Button content |
| `disabled` | `boolean` | `false` | Whether the button is disabled (inherited from `ButtonHTMLAttributes`) |
| `className` | `string` | `""` | Additional CSS classes |

### Examples

```tsx
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>

<Button variant="primary" size="sm">Small</Button>
<Button variant="primary" size="lg">Large</Button>
```

---

## Card

A contained, elevated box for grouping related content. Becomes a fully-clickable link element when `href` is provided.

### When to Use

- Grouping related content with a visual boundary
- Creating clickable navigation tiles (use with `href`)
- Displaying feature highlights or key information
- Organizing content in grid layouts alongside `CardGrid`

### When Not to Use

- **Plain paragraphs of text** — use standard HTML elements or `Typography`
- **Alerts, warnings, or notices** — use `Callout`
- **Very long content** — cards are best for summaries; long content belongs in page sections

### When to Use `Card` vs `Callout`

Use `Card` for content that is part of the normal page structure (navigation, feature highlights). Use `Callout` when you need to interrupt the reading flow to highlight something important, warn users, or provide tips.

### Import

```tsx
import { Card } from "@roadlittledawn/docs-design-system-react";
```

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | — | Optional title displayed at the top of the card |
| `titleColor` | `"blue" \| "green" \| "purple" \| "red" \| "yellow" \| "gray"` | `"gray"` | Color of the title text |
| `backgroundColor` | `"blue" \| "green" \| "purple" \| "red" \| "yellow" \| "gray" \| "white"` | `"white"` | Background color of the card |
| `href` | `string` | — | Optional link URL. When provided, the entire card becomes clickable |
| `icon` | `ReactNode` | — | Optional icon to display. Pass a rendered icon component. In MDX, the consuming site's component map resolves string names to rendered components before passing here. |
| `iconPlacement` | `"left" \| "top-left" \| "top-center"` | `"top-left"` | Where to place the icon: vertically centered on the left, above content flush left, or above content centered |
| `iconSize` | `string` | — | Override the icon container size (width and height). Accepts any valid CSS length (e.g. `"2rem"`, `"48px"`). Defaults to `--dds-card-icon-size` (`1.5rem`). |
| `showArrow` | `boolean` | `false` | Show an animated arrow in the lower-right corner to signal the card is navigable. Best used with `href`. |
| `children` | `ReactNode` | — | Card content |
| `className` | `string` | `""` | Additional CSS classes |

### Examples

```tsx
{/* Basic card */}
<Card title="Getting Started">
  Learn the basics of using this documentation system.
</Card>

{/* Clickable card with animated arrow */}
<Card title="Get Started" href="/docs/quickstart" showArrow>
  Follow the quickstart guide to set up in minutes.
</Card>

{/* Card with icon left (vertically centered beside content) */}
<Card title="Documentation" icon={<YourIcon />} iconPlacement="left">
  Read guides, tutorials, and API references.
</Card>

{/* Card with icon top-center */}
<Card title="Documentation" icon={<YourIcon />} iconPlacement="top-center">
  Read guides, tutorials, and API references.
</Card>

{/* Card with custom icon size (48px container) */}
<Card title="Documentation" icon={<YourIcon />} iconPlacement="top-left" iconSize="3rem">
  Icon container overridden to 48px × 48px.
</Card>

{/* Colored background */}
<Card title="New Feature" titleColor="blue" backgroundColor="blue">
  Check out our latest component additions.
</Card>
```

### Icon usage in MDX

In MDX files the `icon` prop is typically a string name (`icon="book"`). The consuming site's MDX component map is responsible for resolving strings to rendered icon components:

```tsx
// In your MDX components config:
import { YourBookIcon, YourRocketIcon } from 'your-icon-library';

const iconMap: Record<string, React.ComponentType> = {
  book: YourBookIcon,
  rocket: YourRocketIcon,
};

// Wrap Card in your MDX components map:
Card: ({ icon, ...props }) => {
  const IconComp = typeof icon === 'string' ? iconMap[icon] : null;
  return <DdsCard icon={IconComp ? <IconComp /> : icon} {...props} />;
}
```

---

## CardGrid

A responsive grid layout specifically for displaying multiple `Card` components. Use this whenever you have 2 or more cards to display together.

### When to Use

- Displaying multiple related cards in an organized layout
- Feature grids and product/section showcases
- Navigation option grids
- Any time you have 2+ `Card` components to show side by side

### When Not to Use

- **Single cards** — just use `Card` directly
- **Non-card content** — use `Grid`/`Column` for arbitrary multi-column layouts
- **Asymmetric layouts** — use `Grid` when columns have different widths or content types

### `CardGrid` vs `Grid`

Use `CardGrid` when all items are uniform `Card` components — it has simpler semantics and handles equal-height automatically. Use `Grid` when columns have different widths (e.g. 1/3 + 2/3 split), different content types, or you need layout features like sticky columns.

### Import

```tsx
import { CardGrid } from "@roadlittledawn/docs-design-system-react";
```

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `columns` | `2 \| 3 \| 4` | `3` | Number of columns in the grid |
| `equalHeight` | `boolean` | `true` | When true, all cards in each row expand to the height of the tallest card. Set to `false` if cards should shrink-wrap their content |
| `children` | `ReactNode` | — | Grid content (typically Card components) |
| `className` | `string` | `""` | Additional CSS classes |

### Examples

```tsx
<CardGrid columns={3}>
  <Card title="Tutorials">Step-by-step learning guides.</Card>
  <Card title="How-To Guides">Task-oriented instructions.</Card>
  <Card title="Reference">Technical reference documentation.</Card>
</CardGrid>;

{
  /* Clickable cards */
}
<CardGrid columns={3}>
  <Card title="Documentation" href="/docs">
    Complete documentation guide
  </Card>
  <Card title="API Reference" href="/api">
    Detailed API reference
  </Card>
  <Card title="Examples" href="/examples">
    Code examples and patterns
  </Card>
</CardGrid>;
```

---

## Callout

Interrupts reading flow to highlight important information. Each variant has a specific semantic meaning — choose the right one.

### When to Use

- **`caution`** — warnings about potential issues, destructive operations, or things to avoid (yellow/orange color)
- **`important`** — critical information users must know before proceeding (red/pink color)
- **`tip`** — helpful suggestions, best practices, shortcuts (green color)
- **`course`** — learning-oriented content in tutorial or educational contexts (blue color)

### When Not to Use

- **General content** — if it doesn't need emphasis, use regular paragraphs
- **Code examples** — use `CodeBlock`
- **Navigation or actions** — use `Link` or `Button`
- **Grouping related content** — use `Card` or `Grid`

### `Callout` vs `Card`

`Callout` is for interrupting reading flow with critical contextual information. `Card` is for organizing and presenting content. If you're thinking "users need to stop and read this", it's a `Callout`. If you're organizing content into sections, it's a `Card`.

### Title behavior

- By default the title is the capitalized variant name: `"Caution"`, `"Important"`, `"Tip"`, `"Course"`
- Pass a custom string to override: `title="Security Notice"`
- Pass `title={null}` to hide the title entirely

### Import

```tsx
import { Callout } from "@roadlittledawn/docs-design-system-react";
```

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"caution" \| "important" \| "tip" \| "course"` | — | Visual style variant that sets the color and icon |
| `title` | `string \| null` | Variant name | Optional title. Pass `null` to hide entirely |
| `children` | `ReactNode` | — | Callout content |
| `className` | `string` | `""` | Additional CSS classes |

### Examples

```tsx
<Callout variant="caution">
  This operation cannot be undone. Make sure you have a backup before proceeding.
</Callout>

<Callout variant="important">
  All users must update their passwords by the end of the month.
</Callout>

<Callout variant="tip">
  You can use keyboard shortcuts (Cmd+K or Ctrl+K) to quickly search the documentation.
</Callout>

<Callout variant="important" title="Security Notice">
  Two-factor authentication is now required for all administrator accounts.
</Callout>

<Callout variant="tip" title={null}>
  This callout has no title and displays only the content.
</Callout>
```

---

## Heading

Semantic HTML headings (h1–h4) with consistent styling and auto-generated anchor IDs. Use this for actual document structure.

### When to Use

- Page and section titles that should appear in the document outline
- Creating proper heading hierarchy for SEO and accessibility
- When headings need auto-generated anchor IDs for deep-linking

### When Not to Use

- **Visual heading style without semantic meaning** — use `Typography` instead (e.g., a styled label in a card or sidebar that isn't actually a section heading)
- **Headings deeper than h4** — if you need h5/h6, reconsider your document structure
- **Buttons or links styled as headings** — use the appropriate component

### Best Practices

- Use exactly one `h1` per page
- Never skip heading levels (don't jump from h2 to h4)
- Keep headings concise and descriptive
- `Heading` contributes to screen reader document outline; `Typography` does not

### `Heading` vs `Typography`

Both can visually render heading-sized text. Use `Heading` when the text represents an actual section of the document that should appear in the table of contents, be navigable by screen readers, and contribute to SEO. Use `Typography` when you want heading visual styles for decorative or non-structural purposes.

### Import

```tsx
import { Heading } from "@roadlittledawn/docs-design-system-react";
```

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `level` | `1 \| 2 \| 3 \| 4` | — | Heading level — renders as `<h1>` through `<h4>` |
| `id` | `string` | auto-generated from text | Override the auto-generated `id` attribute |
| `children` | `React.ReactNode` | — | Heading content |
| `className` | `string` | `""` | Additional CSS classes |

### Examples

```tsx
<Heading level={1}>Page Title</Heading>
<Heading level={2}>Section Title</Heading>
<Heading level={3}>Subsection Title</Heading>
<Heading level={4}>Sub-subsection Title</Heading>
```

---

## Typography

Applies predefined text styles for visual consistency. Can render semantic headings when using `variant="h1" | "h2" | "h3" | "h4"`, but unlike `Heading` it does not auto-generate IDs or anchor links.

### When to Use

- Body text and paragraphs
- Captions and small supplementary text
- Heading-style visuals where you don't need auto-generated IDs or in-page anchor links (e.g., labels inside cards, widget titles, decorative callout headers)

### When Not to Use

- **Section headings that need auto-generated IDs / anchor links / outline integration** — prefer `Heading` so the content appears in navigation, tables of contents, and deep links
- **Buttons** — use `Button`
- **Links** — use `Link`

### Import

```tsx
import { Typography } from "@roadlittledawn/docs-design-system-react";
```

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"h1" \| "h2" \| "h3" \| "h4" \| "p" \| "caption"` | `"p"` | Typography style variant. `h1`–`h4` render as heading elements; `p` and `caption` render as `<p>` |
| `children` | `React.ReactNode` | — | Text content |
| `className` | `string` | `""` | Additional CSS classes |

### Examples

```tsx
<Typography variant="h1">Heading 1 Style</Typography>
<Typography variant="p">
  This is a paragraph with the default typography style.
</Typography>
<Typography variant="caption">
  This is caption text, typically used for figure captions.
</Typography>
```

---

## Link

Inline text link with consistent styling. Automatically detects external URLs and adds `target="_blank"`, `rel="noopener noreferrer"`, and an external link icon.

### When to Use

- Navigation between pages within prose text
- Links to external resources
- Anchor links within a page (`href="#section-id"`)
- When you need a text link rather than a button

### When Not to Use

- **Primary actions** — use `Button` (actions change state or trigger something; links navigate)
- **Navigation styled like a button** — use `Button variant="outline"` or similar
- **Clickable cards** — use `Card` with the `href` prop

### External link behavior

URLs starting with `http://` or `https://` automatically:

- Open in a new tab (`target="_blank"`)
- Include security attributes (`rel="noopener noreferrer"`)
- Display an external link icon after the text

### Import

```tsx
import { Link } from "@roadlittledawn/docs-design-system-react";
```

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `href` | `string` | — | URL to link to. External links (starting with `http://` or `https://`) open in a new tab with an external link icon |
| `children` | `React.ReactNode` | — | Link content. Always provide meaningful, descriptive text; avoid empty links or icon-only links without an appropriate `aria-label`. |
| `className` | `string` | `""` | Additional CSS classes |

### Examples

```tsx
{
  /* Internal link */
}
<Link href="/docs/components">View Components Documentation</Link>;

{
  /* External link — opens in new tab with icon automatically */
}
<Link href="https://github.com/roadlittledawn/docs-design-system">
  View on GitHub
</Link>;

{
  /* Inline in prose */
}
<p>
  For more information, check out the{" "}
  <Link href="/docs/getting-started">Getting Started guide</Link>.
</p>;
```

---

## List

A visually enhanced list with numbered badges (ordered) or custom bullets (unordered) and connector lines between items. Designed for content that deserves more visual prominence than a plain HTML list.

### When to Use

- Tutorial or getting-started guides with substantial steps
- Multi-step workflows where each step contains rich content (paragraphs, code blocks, callouts)
- Feature lists or benefit lists that need custom emoji or icon bullets
- Marketing or landing pages where visual polish matters
- When you want to nest other components (`CodeBlock`, `Callout`, etc.) inside list items

### When Not to Use

- **Short, simple text-only lists** — use standard `<ol>` or `<ul>`; this component adds visual weight that's unnecessary for basic lists
- **Very long lists** — consider breaking into sections with `Tabs` or `CollapserGroup`
- **When visual simplicity is preferred** — plain HTML lists are perfectly appropriate and less noisy

### `List` vs `CollapserGroup` (numbered)

Use `List` when all step content should be permanently visible. Use `CollapserGroup` with `numbered={true}` when each step contains enough content that users benefit from expand/collapse behavior.

### Import

```tsx
import { List } from "@roadlittledawn/docs-design-system-react";
```

### List Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | — | `List.Item` components to render |
| `className` | `string` | `""` | Additional CSS classes |
| `ordered` | `boolean` | `true` | Whether the list is ordered (numbered) or unordered (bullets) |
| `bullet` | `string` | — | Custom bullet character for unordered lists (e.g. `"✅"`). Only applies when `ordered` is false |
| `bulletIcon` | `ReactNode` | — | Custom bullet icon (React node). Takes precedence over `bullet`. Only applies when `ordered` is false |

### List.Item Props

| Prop         | Type        | Default | Description                                                                 |
| ------------ | ----------- | ------- | --------------------------------------------------------------------------- |
| `children`   | `ReactNode` | —       | List item content                                                           |
| `className`  | `string`    | `""`    | Additional CSS classes                                                      |
| `bulletIcon` | `ReactNode` | —       | Custom bullet icon for this item. Overrides the parent `List`'s `bulletIcon` |

### Examples

```tsx
{
  /* Ordered list with rich content */
}
<List>
  <List.Item>
    Run the following command: <code>npm install</code>
  </List.Item>
  <List.Item>Configure your project settings.</List.Item>
  <List.Item>Start the development server.</List.Item>
</List>;

{
  /* Ordered list with nested CodeBlock and Callout */
}
<List>
  <List.Item>
    <strong>Install dependencies</strong>
    <CodeBlock language="bash" code="npm install" />
  </List.Item>
  <List.Item>
    <strong>Configure your project</strong>
    <Callout variant="tip">Review the config file before proceeding.</Callout>
  </List.Item>
</List>;

{
  /* Unordered with emoji bullet */
}
<List ordered={false} bullet="✅">
  <List.Item>Beautifully designed components</List.Item>
  <List.Item>Accessible by default</List.Item>
</List>;

{
  /* Unordered with custom SVG icon */
}
<List
  ordered={false}
  bulletIcon={
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  }
>
  <List.Item>Navigate to the settings page</List.Item>
  <List.Item>Save your changes</List.Item>
</List>;
```

---

## CodeBlock

Syntax-highlighted code display with copy button, line highlighting, multi-tab support, and optional remote snippet loading.

### When to Use

- Any code example in documentation
- Showing the same code in multiple languages (use `snippets` with language filenames)
- Showing multiple related files together (use `snippets` with tab titles)
- When users need a one-click copy button

### When Not to Use

- **Inline code within prose** — use an HTML `<code>` tag
- **Interactive / executable code editors** — use a dedicated code sandbox component
- **Very short snippets in plain text context** — `<code>` is lighter weight

### `CodeBlock` vs `Tabs` for multi-language examples

Use `CodeBlock` with `snippets` when all tabs contain code only and the user is choosing between language variants of the same thing. Use `Tabs` when the content within each tab is richer than just code (explanations, images, mixed content).

### Multi-snippet behavior

`CodeBlock` groups `snippets` by their `language` value. If there is more than one distinct `language` across the provided snippets, the component renders a **language dropdown** to switch between language groups. Within the active language group, if there are multiple snippets, it renders **tabs** to switch between those snippets.

### Import

```tsx
import { CodeBlock } from "@roadlittledawn/docs-design-system-react";
```

### CodeBlock Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `code` | `string` | — | Single code snippet string. Use `snippets` for multi-tab or multi-language layouts |
| `language` | `string` | — | Language for syntax highlighting (e.g. `"typescript"`, `"bash"`, `"python"`) |
| `filename` | `string` | — | Optional filename label shown in the header when there is only one snippet |
| `highlightLines` | `number[]` | — | Array of 1-indexed line numbers to highlight |
| `snippets` | `CodeSnippet[]` | — | Array of code snippets for multi-tab or multi-language display. Takes precedence over `code` |
| `path` | `string` | — | URL or path to a markdown file containing fenced code blocks to load as snippets |
| `className` | `string` | `""` | Additional CSS classes applied to the outer container |

### CodeSnippet Type

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `code` | `string` | — | The code content |
| `language` | `string` | — | Language for syntax highlighting |
| `filename` | `string` | — | Optional filename to display |
| `tabTitle` | `string` | — | Optional tab title (defaults to filename if not provided) |
| `highlightLines` | `number[]` | — | Optional line numbers to highlight (1-indexed) |

### Supported languages (bundled)

JavaScript, TypeScript, JSX, TSX, CSS, Markdown, JSON, Bash, Ruby, Python, Java, SQL, YAML, PHP.

For additional languages, use `registerLanguages`:

```ts
import { registerLanguages } from "@roadlittledawn/docs-design-system-react";

await registerLanguages(async () => {
  await import("prismjs/components/prism-go");
  await import("prismjs/components/prism-rust");
});
```

### Examples

```tsx
{
  /* Basic */
}
<CodeBlock
  language="typescript"
  code={`function greet(name: string) {
  return \`Hello, \${name}!\`;
}`}
/>;

{
  /* With filename */
}
<CodeBlock
  language="bash"
  filename="setup.sh"
  code={`npm install\nnpm run build`}
/>;

{
  /* With highlighted lines */
}
<CodeBlock
  language="javascript"
  highlightLines={[2, 3, 4]}
  code={`function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
}`}
/>;

{
  /* Multi-file tabs */
}
<CodeBlock
  snippets={[
    {
      code: `export const Button = () => <button>Click</button>;`,
      language: "jsx",
      tabTitle: "Button.jsx",
    },
    {
      code: `.button { padding: 0.5rem 1rem; }`,
      language: "css",
      tabTitle: "Button.css",
    },
  ]}
/>;

{
  /* Multi-language dropdown (driven by multiple language values; filenames only affect labels) */
}
<CodeBlock
  snippets={[
    {
      code: `function greet(name: string) { return \`Hello, \${name}!\`; }`,
      language: "typescript",
      filename: "greet.ts",
    },
    {
      code: `def greet(name):\n    return f"Hello, {name}!"`,
      language: "python",
      filename: "greet.py",
    },
  ]}
/>;
```

---

## Tabs

Organizes related but distinct content into switchable panels. Users see one panel at a time but know alternatives exist.

### When to Use

- **Segmenting related alternatives**: different solutions for the same task (code in Python vs JavaScript vs Java)
- **Managing complex/long documents**: breaking extensive documentation into smaller sections
- **Context-switching**: switching between views like "Overview", "Usage", "API Reference" on the same page
- **Organizing workflows**: separating student work from instructions, setup from troubleshooting
- **Reducing clutter**: hiding non-essential information that's less frequently needed

### When Not to Use

- **Short scrollable content** — if users can easily scroll through it all, don't tab it
- **When users need to compare all panels simultaneously** — use side-by-side `Grid` or a table instead
- **Unrelated content** — tabs should feel like variations of the same topic
- **Page navigation** — use `Link` or a sidebar nav component

### Best Practices

- Always set a logical `defaultActiveTab` (the most common language, most important section, etc.)
- Tab labels should be concise (1–3 words), descriptive, and clearly distinguish options
- Limit to 5–6 tabs; more tabs create decision fatigue
- Avoid nesting tabs inside tab panels

### `Tabs` vs `Collapser`/`CollapserGroup`

Use **Tabs** for a small number of parallel, horizontal sections where users rarely need to see all content at once. Use **Collapsers** for:

- Long vertical content with many sections
- FAQs where users scan titles to find relevant items
- Mobile-first layouts (collapsers stack naturally; tabs can crowd horizontally)
- When all section headings should be visible simultaneously

### Import

```tsx
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
} from "@roadlittledawn/docs-design-system-react";
```

### Tabs Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `defaultActiveTab` | `string` | — | ID of the tab that is active by default (uncontrolled mode) |
| `activeTab` | `string` | — | Controlled active tab ID. Use with `onTabChange` to manage state externally |
| `onTabChange` | `(id: string) => void` | — | Callback fired when the active tab changes |
| `children` | `React.ReactNode` | — | Tab content — typically `TabList` and `TabPanel` components |
| `className` | `string` | `""` | Additional CSS classes applied to the outer container |

### Tab Props

| Prop        | Type              | Default | Description                    |
| ----------- | ----------------- | ------- | ------------------------------ |
| `id`        | `string`          | —       | Unique identifier for this tab |
| `children`  | `React.ReactNode` | —       | Tab label                      |
| `className` | `string`          | `""`    | Additional CSS classes         |

### TabPanel Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | — | ID matching the corresponding Tab |
| `children` | `React.ReactNode` | — | Panel content |
| `className` | `string` | `""` | Additional CSS classes |

### Examples

```tsx
{
  /* Basic */
}
<Tabs defaultActiveTab="overview">
  <TabList>
    <Tab id="overview">Overview</Tab>
    <Tab id="usage">Usage</Tab>
    <Tab id="api">API Reference</Tab>
  </TabList>
  <TabPanel id="overview">
    <p>This is the overview section.</p>
  </TabPanel>
  <TabPanel id="usage">
    <p>This is the usage section.</p>
  </TabPanel>
  <TabPanel id="api">
    <p>This is the API reference section.</p>
  </TabPanel>
</Tabs>;

{
  /* Code examples in different languages */
}
<Tabs defaultActiveTab="javascript">
  <TabList>
    <Tab id="javascript">JavaScript</Tab>
    <Tab id="python">Python</Tab>
  </TabList>
  <TabPanel id="javascript">
    <CodeBlock
      language="javascript"
      code={`const greeting = "Hello, world!";\nconsole.log(greeting);`}
    />
  </TabPanel>
  <TabPanel id="python">
    <CodeBlock
      language="python"
      code={`greeting = "Hello, world!"\nprint(greeting)`}
    />
  </TabPanel>
</Tabs>;
```

---

## Collapser

An expandable/collapsible content section with smooth animation. Content height adjusts automatically to fit all children, including images and other media that load asynchronously. Use a single `Collapser` for standalone sections; use `CollapserGroup` when you have multiple.

### When to Use

- FAQ sections where answers can be toggled individually
- Hiding advanced options or settings that most users don't need
- Progressive disclosure — showing a summary first, details on demand
- When you have lengthy content that doesn't need to be visible at all times

### When Not to Use

- **Primary navigation** — use proper nav components
- **Critical information users must read** — always show it; don't hide it in a collapser
- **When most users will open all sections** — just show the content; the collapser adds interaction cost without benefit

### Header layout variants

Collapser supports four header layouts, controlled by `align` and `icon`:

- Default: title left, chevron right
- With `icon`: icon left, title left, chevron right
- With `align="right"`: title right, chevron right
- With `icon` + `align="right"`: icon left, title right, chevron right (used with `CollapserGroup numbered`)

### Keyboard shortcuts

- **Enter** or **Space**: toggle expand/collapse
- For **uncontrolled** `Collapser` instances (no `open` prop; not managed by `CollapserGroup`), additional shortcuts are available:
  - **s** or **f**: show/expand
  - **h**: hide/collapse

### Import

```tsx
import { Collapser } from "@roadlittledawn/docs-design-system-react";
```

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string \| ReactNode` | — | Title text or element displayed in the collapsible header |
| `id` | `string` | — | Optional ID for the title element (useful for anchor links) |
| `defaultOpen` | `boolean` | `false` | Whether the collapser should be open by default (uncontrolled) |
| `open` | `boolean` | — | Controlled open state (used by CollapserGroup) |
| `onToggle` | `() => void` | — | Callback when toggle is clicked (used by CollapserGroup) |
| `children` | `ReactNode` | — | Content to show/hide when toggling |
| `className` | `string` | `""` | Additional CSS classes |
| `align` | `"left" \| "right"` | `"left"` | Alignment of the title within the header |
| `icon` | `ReactNode` | — | Optional icon rendered on the left side of the header, before the title |
| `stepNumber` | `number` | — | Numeric step label shown on the far left. Auto-injected by `CollapserGroup` when `numbered` is true |

### Examples

```tsx
{
  /* Basic */
}
<Collapser title="Click to expand">
  <p>This content is hidden by default.</p>
</Collapser>;

{
  /* Open by default */
}
<Collapser title="This section starts open" defaultOpen>
  <p>This collapser is open by default.</p>
</Collapser>;

{
  /* With icon and right-aligned title */
}
<Collapser title="Quick start guide" align="right" icon={<YourIcon />}>
  <p>Content here.</p>
</Collapser>;
```

---

## CollapserGroup

Container for multiple `Collapser` components with consistent spacing and optional accordion behavior. Always use `CollapserGroup` when you have 2+ collapsers together.

### When to Use

- FAQ sections with multiple questions and answers
- Accordion-style navigation or categorized content sections
- Any grouped collapsible content that needs consistent spacing
- When you want only one section open at a time (accordion mode: `allowMultiple={false}`)
- Numbered step-by-step flows where each step has expand/collapse behavior (use `numbered`)

### When Not to Use

- **A single collapser** — use `Collapser` directly; `CollapserGroup` is purely for managing groups
- **When collapsers need radically different spacing or independent behavior**

### `numbered` prop

When `numbered={true}`, `CollapserGroup` automatically injects sequential step numbers into each child `Collapser`. This works in MDX and component-map contexts. Combine with `align="right"` and `icon` on each `Collapser` for a polished step-by-step layout. Override the step number color with `--dds-collapser-step-number-color`.

### Import

```tsx
import {
  CollapserGroup,
  Collapser,
} from "@roadlittledawn/docs-design-system-react";
```

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `React.ReactNode` | — | Collapser components to render inside the group |
| `spacing` | `string` | `"0.5rem"` | CSS gap value between collapser items |
| `allowMultiple` | `boolean` | `true` | Allow multiple collapsers to be open simultaneously. When false, opening one closes the others (accordion mode) |
| `defaultOpen` | `number \| number[]` | — | Index or array of indexes of collapsers that should be open by default |
| `onChange` | `(openIndexes: number[]) => void` | — | Callback fired when the open state changes |
| `className` | `string` | `""` | Additional CSS classes |
| `numbered` | `boolean` | `false` | Automatically prefix each collapser header with a sequential step number (1, 2, 3…) |

### Examples

```tsx
{
  /* FAQ (accordion mode — only one open at a time) */
}
<CollapserGroup allowMultiple={false}>
  <Collapser title="What is this documentation system?">
    <p>A comprehensive design system for documentation sites.</p>
  </Collapser>
  <Collapser title="How do I get started?">
    <p>Install the package and explore the components.</p>
  </Collapser>
</CollapserGroup>;

{
  /* Numbered steps with icons */
}
<CollapserGroup numbered>
  <Collapser title="Install dependencies" align="right" icon={<YourIcon />}>
    <p>
      Run <code>npm install</code>.
    </p>
  </Collapser>
  <Collapser title="Configure your project" align="right" icon={<YourIcon />}>
    <p>Update configuration files.</p>
  </Collapser>
</CollapserGroup>;
```

---

## Popover

A hover/tap-activated floating panel for enriching inline documentation content. Built on the native Popover API — no z-index conflicts, no overflow clipping.

### When to Use

- **Glossary terms** — inline term definitions that would interrupt reading flow if expanded in-place; wrap the term in a `Popover` with the `glossary` prop
- **Link previews** — let users get context about a page or resource without navigating away; use the `preview` prop
- **On-demand contextual information** — any content that benefits from being triggered rather than always visible

### When Not to Use

- **Critical information users must read** — use `Callout` instead; popovers are opt-in
- **Primary navigation** — use `Link` or nav components
- **Content that needs persistent visibility** — if users always need to see it, don't hide it in a popover

### Mobile behavior

On screens ≤ 640px, the popover renders as a **bottom sheet** instead of a floating panel. Hover doesn't apply on touch devices; the popover toggles on tap.

### Content modes (choose one)

1. **`content`** — arbitrary `ReactNode`; use when the built-in templates don't fit
2. **`glossary`** — structured `{ term, title, definition }` template for definitions
3. **`preview`** — structured `{ title, excerpt, imageUrl, href }` for Wikipedia-style previews

Only one mode is used at a time, checked in the order listed above.

### Import

```tsx
import { Popover } from "@roadlittledawn/docs-design-system-react";
```

### Popover Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `content` | `ReactNode` | — | Arbitrary React content inside the popover. Use when built-in templates don't fit |
| `glossary` | `GlossaryData` | — | Renders a styled glossary definition popover |
| `preview` | `PreviewData` | — | Renders a Wikipedia-style content preview |
| `placement` | `"auto" \| "top" \| "top-start" \| "top-end" \| "bottom" \| "bottom-start" \| "bottom-end"` | `"auto"` | Preferred placement relative to the trigger |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Popover width — `sm`=240px, `md`=320px, `lg`=480px |
| `showDelay` | `number` | `200` | Milliseconds to wait before showing the popover on hover |
| `hideDelay` | `number` | `150` | Milliseconds to wait before hiding the popover on hover-out |
| `children` | `ReactNode` | — | The trigger element — the text or content that reveals the popover on hover/tap |
| `className` | `string` | `""` | Additional CSS classes on the trigger wrapper |

### GlossaryData Type

| Prop | Type | Description |
| --- | --- | --- |
| `term` | `string` | The canonical term (used for semantic markup) |
| `title` | `string` | Display title shown in the popover header |
| `definition` | `ReactNode` | Definition content. Accepts ReactNode so you can pre-render markdown |

### PreviewData Type

| Prop       | Type        | Default       | Description                      |
| ---------- | ----------- | ------------- | -------------------------------- |
| `title`    | `string`    | —             | Page or article title            |
| `excerpt`  | `ReactNode` | —             | Short excerpt or summary         |
| `imageUrl` | `string`    | —             | Optional featured image URL      |
| `href`     | `string`    | —             | Optional URL to the full content |
| `linkText` | `string`    | `"Read more"` | Link text                        |

### Examples

```tsx
{
  /* Glossary definition */
}
<p>
  Modern software relies on{" "}
  <Popover
    glossary={{
      term: "observability",
      title: "Observability",
      definition:
        "The ability to understand the internal state of a system by examining its external outputs.",
    }}
  >
    observability
  </Popover>{" "}
  to diagnose issues quickly.
</p>;

{
  /* Content preview */
}
<Popover
  size="lg"
  preview={{
    title: "New Relic",
    excerpt: "New Relic is an observability platform.",
    href: "https://newrelic.com",
    linkText: "Read more",
  }}
>
  New Relic
</Popover>;

{
  /* Custom content */
}
<Popover content={<div style={{ padding: "1rem" }}>Custom content here</div>}>
  hover me
</Popover>;
```

---

## Grid and Column

Layout primitive for multi-column documentation content. Use `Grid` when content columns differ in width, type, or purpose. Use `CardGrid` for uniform card grids.

### When to Use

- **Image + annotation** — screenshot or diagram on one side, feature callouts on the other
- **Tutorial with live code** — prose instructions on the left, sticky code panel on the right
- **Side-by-side comparison** — before/after, two approaches, option A vs option B
- **Asymmetric splits** — narrow sidebar label alongside wide content
- **Feature highlight panel** — scannable feature collapsers on one side, product screenshot on the other

### When Not to Use

- **Uniform card grids** — use `CardGrid` instead; it's simpler and handles equal-height automatically
- **Single column of content** — use standard block-level markup
- **Data tables** — use `Table`

### `Grid` vs `CardGrid`

Use `Grid` when the columns have different widths, different content types, or you need layout features like sticky columns, dividers, or background colors. Use `CardGrid` when all columns contain the same type of `Card` component.

### Import

```tsx
import { Grid, Column } from "@roadlittledawn/docs-design-system-react";
```

### Grid Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `columns` | `number \| number[]` | `2` | Number of equal columns, or an array of fractional widths (e.g. `[1, 2]` for 1/3 + 2/3) |
| `gap` | `string` | `"md"` | Space between columns. Use `"sm"`, `"md"`, or `"lg"` for design tokens, or any CSS length (e.g. `"16px"`) |
| `stackAt` | `"sm" \| "md" \| "lg" \| "never"` | `"md"` | Breakpoint at which columns collapse to a single vertical stack |
| `columnDivider` | `BorderConfig` | — | Vertical dividing line between columns. Converts to a horizontal rule when stacked |
| `topBorder` | `BorderConfig` | — | Horizontal rule rendered above the grid |
| `bottomBorder` | `BorderConfig` | — | Horizontal rule rendered below the grid |
| `align` | `"start" \| "center" \| "end" \| "stretch"` | `"stretch"` | Vertical alignment of content within each column |
| `backgroundColor` | `string` | — | Background color applied to the grid container |
| `className` | `string` | `""` | Additional CSS classes |
| `children` | `ReactNode` | — | Grid content — typically `Column` components |

### Column Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `span` | `number` | `1` | How many grid columns this item should span |
| `sticky` | `boolean` | `false` | Makes the column sticky while adjacent columns scroll. Useful for tutorial-style layouts with a persistent code panel. Automatically disabled when the grid stacks |
| `backgroundColor` | `string` | — | Background color applied to the column |
| `className` | `string` | `""` | Additional CSS classes |
| `children` | `ReactNode` | — | Column content |

### BorderConfig Type

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `thickness` | `number` | `1` | Line thickness in pixels |
| `color` | `string` | — | Line color (defaults to the `--dds-grid-divider-color` token) |

### Examples

```tsx
{
  /* Two equal columns */
}
<Grid columns={2}>
  <Column>Column 1 content</Column>
  <Column>Column 2 content</Column>
</Grid>;

{
  /* Asymmetric 1/3 + 2/3 split */
}
<Grid columns={[1, 2]}>
  <Column>Narrow (1/3)</Column>
  <Column>Wide (2/3)</Column>
</Grid>;

{
  /* Tutorial with sticky code panel */
}
<Grid columns={2} stackAt="lg" gap="lg" columnDivider={{ thickness: 2 }}>
  <Column>
    <p>
      <strong>Step 1 — Install dependencies</strong>
    </p>
    <p>Run the installer and follow the prompts.</p>
  </Column>
  <Column sticky>
    <CodeBlock language="bash" code="npm install" />
  </Column>
</Grid>;

{/* Feature highlight panel — collapsers + product screenshot */}
<Grid columns={[1, 2]} gap="lg" align="start">
  <Column>
    <CollapserGroup>
      <Collapser title="Real-time alerts" align="right" icon={<YourIcon />}>
        Get notified the moment a threshold is crossed, with no polling delay.
      </Collapser>
      <Collapser title="Custom dashboards" align="right" icon={<YourIcon />}>
        Drag-and-drop widgets let you arrange metrics exactly as you need them.
      </Collapser>
      <Collapser title="Role-based access" align="right" icon={<YourIcon />}>
        Grant view-only, editor, or admin rights per team without extra tooling.
      </Collapser>
      <Collapser title="One-click integrations" align="right" icon={<YourIcon />}>
        Connect to Slack, PagerDuty, and 40+ other tools from the settings panel.
      </Collapser>
    </CollapserGroup>
  </Column>
  <Column>
    <img
      src="/images/product-screenshot.png"
      alt="Product dashboard showing real-time alert panel"
      style={{ width: "100%", borderRadius: "8px" }}
    />
  </Column>
</Grid>;

{
  /* Three columns with top/bottom borders (feature grid panel) */
}
<Grid
  columns={3}
  topBorder={{ color: "#ccc" }}
  bottomBorder={{ color: "#ccc" }}
>
  <Column>
    <strong>Feature A</strong>
    <p>Description.</p>
  </Column>
  <Column>
    <strong>Feature B</strong>
    <p>Description.</p>
  </Column>
  <Column>
    <strong>Feature C</strong>
    <p>Description.</p>
  </Column>
</Grid>;
```

---

## Table

Structured relational data in rows and columns for reference documentation.

### When to Use

- Documenting configuration options, API parameters, or CLI flags
- Comparing multiple items across the same set of attributes (e.g., pricing tiers, OS compatibility)
- Reference data that users want to scan or sort (package versions, settings)
- Prefer using `Table` component over markdown syntax in MDX files

### When Not to Use

- **Page layout** — use CSS Grid or Flexbox; `Table` is for data, not layout
- **Fewer than two meaningful columns** — use a list instead
- **Rows with very different shapes** — if rows don't share the same columns, a table isn't the right format

### Variants

- `default` — all cell and outer borders; good for dense reference tables
- `borderless` — only row dividers; cleaner look for modern documentation sites; common for prop reference tables

### Import

```tsx
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
} from "@roadlittledawn/docs-design-system-react";
```

### Table Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `React.ReactNode` | — | Typically `TableHead` and `TableBody` |
| `variant` | `"default" \| "borderless"` | `"default"` | `"default"` renders all borders; `"borderless"` shows only row top/bottom borders |
| `stickyHeader` | `boolean` | `false` | When true, the header row sticks to the top of the scroll container while scrolling. Pair with `style={{ maxHeight: '...' }}` |
| `headerBg` | `string` | — | Background color applied to the header row. Accepts any valid CSS color value |
| `onSort` | `(key: string, direction: "asc" \| "desc" \| null) => void` | — | Callback fired when a sortable column header is clicked. Useful for server-side sorting |
| `className` | `string` | `""` | Additional CSS classes |
| `style` | `React.CSSProperties` | — | Inline styles. Use `maxHeight` here with `stickyHeader` |

### TableHeaderCell Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `React.ReactNode` | — | Cell content / column label |
| `sortKey` | `string` | — | Unique key for this column. When provided the column becomes sortable |
| `align` | `"left" \| "center" \| "right"` | `"left"` | Text alignment |
| `className` | `string` | `""` | Additional CSS classes |

### TableCell Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `React.ReactNode` | — | Cell content |
| `align` | `"left" \| "center" \| "right"` | `"left"` | Text alignment |
| `className` | `string` | `""` | Additional CSS classes |

### Examples

```tsx
{
  /* Basic table */
}
<Table>
  <TableHead>
    <TableRow>
      <TableHeaderCell>Name</TableHeaderCell>
      <TableHeaderCell>Role</TableHeaderCell>
      <TableHeaderCell>Status</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Alice Johnson</TableCell>
      <TableCell>Engineer</TableCell>
      <TableCell>Active</TableCell>
    </TableRow>
  </TableBody>
</Table>;

{
  /* Borderless with sortable columns */
}
<Table
  variant="borderless"
  onSort={(key, direction) => {
    /* sort your data */
  }}
>
  <TableHead>
    <TableRow>
      <TableHeaderCell sortKey="name">Name</TableHeaderCell>
      <TableHeaderCell sortKey="role">Role</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {rows.map((row) => (
      <TableRow key={row.name}>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.role}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>;

{
  /* Sticky header for long tables */
}
<Table stickyHeader style={{ maxHeight: "300px" }}>
  <TableHead>
    <TableRow>
      <TableHeaderCell>Name</TableHeaderCell>
      <TableHeaderCell>Department</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>{/* many rows */}</TableBody>
</Table>;
```

---

## Breadcrumb

Hierarchical navigation trail showing a user's current location within the documentation structure.

### When to Use

- Showing location within a multi-level documentation hierarchy
- Providing quick navigation back to parent sections
- Pages nested 2 or more levels deep

### When Not to Use

- **Top-level landing pages** — breadcrumbs have no value when hierarchy is obvious (the user is already at the root)
- **Sequential step indicators** — use a stepper or progress component; breadcrumbs represent hierarchy, not sequence

### Mobile behavior

For long breadcrumb trails on mobile:

- `collapseOnMobile` — hides middle segments behind an ellipsis; tap to expand
- `scrollOnMobile` — allows the full trail to scroll horizontally

These can be combined: collapse first, and if expanded, scroll horizontally.

### Import

```tsx
import { Breadcrumb } from "@roadlittledawn/docs-design-system-react";
```

### Types

```ts
interface BreadcrumbItem {
  label: string; // Display text for the segment
  href?: string; // Optional URL; omit for the current (last) page
}
```

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `items` | `BreadcrumbItem[]` | — | Ordered list of path segments, root first |
| `delimiter` | `ReactNode` | `"/"` | Separator between segments. Accepts a string or any ReactNode |
| `size` | `"sm" \| "md"` | `"md"` | Size variant controlling font size |
| `collapseOnMobile` | `boolean` | `false` | Collapse middle segments behind an expandable ellipsis on narrow viewports |
| `scrollOnMobile` | `boolean` | `false` | Let the full trail scroll horizontally instead of wrapping on narrow viewports |
| `className` | `string` | `""` | Additional CSS classes |

### Examples

```tsx
{
  /* Basic */
}
<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" },
    { label: "Getting Started" },
  ]}
/>;

{
  /* Small size with custom delimiter */
}
<Breadcrumb
  size="sm"
  delimiter="›"
  items={[
    { label: "Home", href: "/" },
    { label: "Reference", href: "/reference" },
    { label: "API" },
  ]}
/>;

{
  /* Collapse middle items on mobile */
}
<Breadcrumb
  collapseOnMobile
  items={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Widgets", href: "/products/widgets" },
    { label: "Details" },
  ]}
/>;
```

---

## Icon

Renders an SVG icon without bundling any specific icon library. You bring your own SVG — either as a React component or a raw SVG string.

### When to Use

- Rendering icons imported with SVGR (`import { ReactComponent as Star } from './star.svg'`)
- Rendering inline SVG components defined in your code
- Rendering a trusted raw SVG string from your project's assets
- When you need consistent accessible handling (decorative vs meaningful icons)

### When Not to Use

- **Untrusted or user-supplied SVG strings** — the raw string path uses `dangerouslySetInnerHTML` without sanitization. Only use this with SVGs you control
- **Purely decorative shapes achievable with CSS** — no need for the component overhead

### Accessibility

The `Icon` component manages all accessibility attributes automatically:

- **Decorative icons** (no `aria-label`) — receive `aria-hidden="true"` and are ignored by screen readers
- **Meaningful icons** (with `aria-label`) — receive `role="img"` and are announced by screen readers

Do **not** include `aria-hidden`, `role`, or `aria-label` inside your SVG component itself — let `Icon` handle this.

### Import

```tsx
import { Icon } from "@roadlittledawn/docs-design-system-react";
```

### Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `svg` | `React.ComponentType<React.SVGProps<SVGSVGElement>> \| string` | — | SVG to render — accepts a React SVG component or a raw SVG string |
| `size` | `number` | `16` | Width and height in pixels |
| `className` | `string` | `""` | Additional CSS class names |
| `aria-label` | `string` | — | Accessible label. When provided the icon gets `role="img"` and is announced by screen readers. When omitted the icon is decorative (`aria-hidden="true"`) |

### Examples

```tsx
{/* React SVG component (SVGR) */}
import { ReactComponent as ChevronIcon } from './chevron.svg';

<Icon svg={ChevronIcon} size={20} aria-label="Expand" />

{/* Inline SVG function */}
const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

<Icon svg={StarIcon} size={24} />

{/* Raw SVG string (only use with trusted content) */}
const closeIconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

<Icon svg={closeIconSvg} size={24} aria-label="Close" />

{/* Decorative vs meaningful */}
<Icon svg={StarIcon} size={16} />                   {/* hidden from screen readers */}
<Icon svg={StarIcon} size={16} aria-label="Favorite" /> {/* announced as "Favorite" */}
```
