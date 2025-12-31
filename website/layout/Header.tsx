import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useNavigation } from '../hooks/useNavigation'

export function Header() {
  const { mobileMenuOpen, toggleMobileMenu } = useNavigation()

  return (
    <header>
      <div className="items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            {/* Mobile hamburger menu */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
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
      </div>
    </header>
  )
}
