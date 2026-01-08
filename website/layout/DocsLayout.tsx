import { ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { NavigationProvider, useNavigation } from "../hooks/useNavigation";
import { NavigationConfig } from "../types/navigation";

interface DocsLayoutProps {
  children: ReactNode;
  navigationConfig: NavigationConfig;
}

function DocsLayoutContent({ children }: { children: ReactNode }) {
  const { pinnedPrimaryId } = useNavigation();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className={`flex-1 p-8 ${pinnedPrimaryId ? 'ml-0' : ''}`}>
          {children}
        </main>
      </div>
    </div>
  );
}

export function DocsLayout({ children, navigationConfig }: DocsLayoutProps) {
  return (
    <NavigationProvider navigationConfig={navigationConfig}>
      <DocsLayoutContent>{children}</DocsLayoutContent>
    </NavigationProvider>
  );
}
