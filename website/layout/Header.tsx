import Link from 'next/link'

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Docs Design System
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/principles" className="text-gray-600 hover:text-gray-900">
              Principles
            </Link>
            <Link href="/style-guide" className="text-gray-600 hover:text-gray-900">
              Style Guide
            </Link>
            <Link href="/components" className="text-gray-600 hover:text-gray-900">
              Components
            </Link>
            <Link href="/gallery" className="text-gray-600 hover:text-gray-900">
              Gallery
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
