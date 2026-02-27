---
name: add-gallery-item
description: Guide for adding new documentation sites to the gallery. Use when adding a docs site to the gallery showcase.
---

# Adding Gallery Items

## When to use this skill

Use this skill when the user wants to add a documentation site to the gallery, typically with prompts like:
- "Let's add [site name] to the gallery"
- "Add [URL] to the docs gallery"
- "Include [site] in the gallery"

## Step-by-step process

### 1. Gather information about the site

Ask the user for brief bullet points about:
- **Why it's being included** - What makes it gallery-worthy?
- **Strengths/highlights** - What does it do well or uniquely?
- **Shortcomings** - What isn't particularly exemplary? (optional)

Keep this conversational and quick. You'll synthesize these bullets into polished content.

### 2. Get the URL(s)

If not already provided, ask for:
- Primary documentation URL (required)
- Any additional relevant URLs (API reference, tutorials, etc.)

### 3. Create the gallery item

Add a new entry to `/Users/clango/Projects/docs-design-system/website/data/gallery.json`:

```json
{
  "id": "site-slug",
  "name": "Site Name",
  "url": "https://example.com/docs",
  "description": "Synthesized description based on user's input about why it's included, strengths, and what makes it unique.",
  "category": "api-documentation|developer-tools|design-systems|open-source|saas-products|technical-writing",
  "date": "YYYY-MM-DD",
  "images": [],
  "links": [
    {
      "label": "Documentation",
      "url": "https://example.com/docs"
    }
  ],
  "highlights": [
    "Bullet point 1",
    "Bullet point 2"
  ]
}
```

**Field guidelines:**
- `id`: Lowercase slug (e.g., "stripe-docs", "next-js-docs")
- `name`: Official product/site name
- `url`: Primary documentation URL
- `description`: 2-3 sentences synthesized from user input
- `category`: Choose the most appropriate category
- `date`: Current date in ISO format (YYYY-MM-DD)
- `images`: Leave empty initially
- `links`: Include primary docs link and any additional relevant links
- `highlights`: Array of specific strengths (4-8 items typically)

### 4. Take screenshot

Run the screenshot script:

```bash
npx tsx /Users/clango/Projects/docs-design-system/website/scripts/take-gallery-screenshots.ts
```

This script will:
- Read all gallery items
- Take screenshots of any items with empty `images` arrays
- Save screenshots to `/Users/clango/Projects/docs-design-system/website/public/`
- Output the filename (e.g., `site-slug.png`)

### 5. Update gallery.json with screenshot

Update the gallery item's `images` array with the screenshot filename:

```json
"images": [
  {
    "url": "/site-slug.png",
    "caption": "Homepage screenshot"
  }
]
```

### 6. Review locally

Instruct the user to:
1. Start the website dev server: `npm run dev --workspace=website`
2. Navigate to the gallery page: `http://localhost:3000/gallery`
3. Review the new entry for accuracy and visual quality

## Key files reference

| File | Role |
|---|---|
| `website/data/gallery.json` | Gallery data source |
| `website/scripts/take-gallery-screenshots.ts` | Screenshot automation script |
| `website/public/` | Screenshot storage location |

## Common pitfalls

- **Forgetting to leave `images` array empty initially** - The screenshot script looks for empty arrays to know which sites to capture
- **Not using ISO date format** - Use YYYY-MM-DD format for the `date` field
- **Incorrect category** - Review existing entries to choose the most appropriate category
- **Missing required fields** - All fields except `images` (initially) are required
- **Invalid JSON** - Ensure proper JSON syntax with trailing commas removed from last items in arrays/objects
- **Screenshot script fails** - If the script times out or fails, the site may have slow loading or anti-bot measures; try adjusting viewport or wait times in the script
