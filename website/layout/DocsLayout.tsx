import { ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { NavigationProvider } from "../hooks/useNavigation";
import { NavigationConfig } from "../types/navigation";

interface DocsLayoutProps {
  children: ReactNode;
  navigationConfig: NavigationConfig;
}

export function DocsLayout({ children, navigationConfig }: DocsLayoutProps) {
  return (
    <NavigationProvider navigationConfig={navigationConfig}>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-200">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-8 mx-auto max-w-7xl w-full">{children}</main>
        </div>
      </div>
    </NavigationProvider>
  );
}
