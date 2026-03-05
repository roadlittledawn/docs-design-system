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
          label: "Quality",
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
          type: "link",
          label: "Images & Screenshots",
          href: "/style-guide/images-screenshots",
        },
        {
          type: "link",
          label: "Links",
          href: "/style-guide/links",
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
