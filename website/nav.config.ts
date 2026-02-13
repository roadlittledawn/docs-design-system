import { NavigationConfig } from "./types/navigation";

export const navigationConfig: NavigationConfig = {
  primary: [
    {
      id: "home",
      label: "Home",
      icon: "house",
      href: "/",
    },
    {
      id: "principles",
      label: "Principles",
      icon: "lightbulb",
      secondary: [
        {
          type: "link",
          label: "Overview",
          href: "/principles",
        },
        {
          type: "link",
          label: "AI + Docs",
          href: "/principles/integrating-ai-docs",
        },
        {
          type: "link",
          label: "Personalization",
          href: "/principles/personalization",
        },
        {
          type: "link",
          label: "Quality Metrics",
          href: "/principles/quality-metrics",
        },
      ],
    },
    {
      id: "style-guide",
      label: "Style Guide",
      icon: "book-open",
      secondary: [
        {
          type: "link",
          label: "Overview",
          href: "/style-guide",
        },
        {
          type: "group",
          label: "Writing",
          items: [
            {
              label: "Voice & Tone",
              href: "/style-guide/voice-tone",
            },
            {
              label: "Titles & Headings",
              href: "/style-guide/titles-headings",
            },
          ],
        },
        {
          type: "group",
          label: "Content Types",
          items: [
            {
              label: "Lists",
              href: "/style-guide/lists",
            },
            {
              label: "Content Components",
              href: "/style-guide/content-components",
            },
            {
              label: "Code Blocks",
              href: "/style-guide/code-blocks",
            },
            {
              label: "Images & Screenshots",
              href: "/style-guide/images-screenshots",
            },
          ],
        },
        {
          type: "link",
          label: "Organization",
          href: "/style-guide/organization",
        },
      ],
    },
    {
      id: "components",
      label: "Components",
      icon: "layout-grid",
      href: "/components",
    },
    {
      id: "gallery",
      label: "Gallery",
      icon: "image",
      href: "/gallery",
    },
  ],
};
