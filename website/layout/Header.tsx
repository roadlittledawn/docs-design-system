import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useNavigation } from '../hooks/useNavigation'
import { ThemeToggle } from '../components/ThemeToggle'

export function Header() {
  const { mobileMenuOpen, toggleMobileMenu } = useNavigation()

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
        <div className="flex items-center gap-4">
          {/* Mobile hamburger menu */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Right side header actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
