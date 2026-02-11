import slug from "slug";

slug.extend({
  "/": "-",
  "\\": "-",
  _: "-",
  "-": "-",
  "&": "and",
});

interface SlugifyProps {
  value: string;
  options?: object | string;
}

export default function slugify({ value, options }: SlugifyProps) {
  if (Number.isNaN(value)) return null;
  if (value === null || value === undefined) return null;
  if (typeof value === "string" && value.match(/^\s+$/)) return null;

  let v = value;
  if (typeof v === "number") v = `${v}`;

  const slugified =
    typeof options === "string" ? slug(v, options) : slug(v, options as any);

  // remove repetitive dashes
  const repetitiveRemoved = slugified.replace(/-{2,}/g, "-");
  // strip leading and trailing dashes
  const dashesTrimmed = repetitiveRemoved.replace(/^-+/, "").replace(/-+$/, "");
  // return null when empty
  return dashesTrimmed || null;
}
