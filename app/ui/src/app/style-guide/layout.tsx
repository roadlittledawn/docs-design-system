import { DocsLayout } from "@/components/layout/DocsLayout";
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const navYaml = fs.readFileSync(path.join(process.cwd(), 'src/app/style-guide/nav.yaml'), 'utf8');
const styleGuideNavigation = yaml.load(navYaml) as Array<{ name: string; href: string }>;

export default function StyleGuideLayout({ children }: { children: React.ReactNode }) {
  return <DocsLayout sidebarNavigation={styleGuideNavigation}>{children}</DocsLayout>;
}
