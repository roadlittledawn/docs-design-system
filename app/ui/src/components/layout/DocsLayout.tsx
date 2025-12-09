import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface SidebarItem {
  name: string;
  href: string;
  children?: SidebarItem[];
}

interface DocsLayoutProps {
  children: React.ReactNode;
  sidebarNavigation?: SidebarItem[];
}

export function DocsLayout({ children, sidebarNavigation }: DocsLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex">
        {sidebarNavigation && (
          <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-gray-50">
            <Sidebar navigation={sidebarNavigation} />
          </aside>
        )}
        <main className={`flex-1 ${sidebarNavigation ? 'ml-64' : ''}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}