import { ReactNode } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

interface DocsLayoutProps {
  children: ReactNode
  sidebarNavigation?: Array<{ name: string; href: string }>
}

export function DocsLayout({ children, sidebarNavigation }: DocsLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex">
        <Sidebar navigation={sidebarNavigation} />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
