import slug, { Options as SlugOptions } from "slug";

slug.extend({
  "/": "-",
  "\\": "-",
  _: "-",
  "-": "-",
  "&": "and",
});

interface SlugifyProps {
  value: string;
  options?: SlugOptions | string;
}

export default function slugify({ value, options }: SlugifyProps): string | null {
  if (!value || value.match(/^\s+$/)) return null;

  const slugified =
    typeof options === "string" ? slug(value, options) : slug(value, options);

  // remove repetitive dashes
  const repetitiveRemoved = slugified.replace(/-{2,}/g, "-");
  // strip leading and trailing dashes
  const dashesTrimmed = repetitiveRemoved.replace(/^-+/, "").replace(/-+$/, "");
  // return null when empty
  return dashesTrimmed || null;
}
