import { DocsLayout } from "@/components/layout/DocsLayout";

const principlesNavigation = [
  { name: "Overview", href: "/principles" },
  { name: "Personalization", href: "/principles/personalization" },
];

export default function PrinciplesLayout({ children }: { children: React.ReactNode }) {
  return <DocsLayout sidebarNavigation={principlesNavigation}>{children}</DocsLayout>;
}
