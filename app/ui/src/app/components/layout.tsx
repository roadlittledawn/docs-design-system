import { DocsLayout } from "@/components/layout/DocsLayout";

const componentsNavigation = [
  { name: "Overview", href: "/components" },
];

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return <DocsLayout sidebarNavigation={componentsNavigation}>{children}</DocsLayout>;
}
