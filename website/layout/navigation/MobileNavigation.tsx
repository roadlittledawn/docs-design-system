import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/router'
import { useNavigation } from '../../hooks/useNavigation'
import { PrimaryNav } from './PrimaryNav'
import { SecondaryNav } from './SecondaryNav'
import { PrimaryNavItem } from '../../types/navigation'

export function MobileNavigation() {
  const router = useRouter()
  const {
    mobileMenuOpen,
    mobileView,
    mobileActivePrimaryId,
    navigationConfig,
    toggleMobileMenu,
    navigateToSecondary,
    navigateBackToPrimary
  } = useNavigation()

  if (!mobileMenuOpen) {
    return null
  }

  const handlePrimaryItemClick = (item: PrimaryNavItem) => {
    // If the item has a direct href and no secondary nav, navigate to it
    if (item.href && !item.secondary) {
      router.push(item.href)
      toggleMobileMenu() // Close the mobile menu
    } else {
      // Otherwise, show the secondary nav
      navigateToSecondary(item.id)
    }
  }

  const activePrimaryItem = mobileActivePrimaryId
    ? navigationConfig.primary.find(item => item.id === mobileActivePrimaryId) || null
    : null

  return (
    <div className="md:hidden fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity duration-200"
        onClick={toggleMobileMenu}
        aria-hidden="true"
      />

      {/* Navigation container */}
      <div className="relative h-full overflow-hidden">
        {/* Primary navigation */}
        <div
          className={`
            absolute top-0 left-0 h-full w-full bg-white dark:bg-gray-900
            transition-transform duration-300 ease-in-out
            ${mobileView === 'secondary' ? '-translate-x-full' : 'translate-x-0'}
          `}
        >
          <PrimaryNav isMobile onItemClick={handlePrimaryItemClick} />
        </div>

        {/* Secondary navigation */}
        <div
          className={`
            absolute top-0 left-0 h-full w-full bg-white dark:bg-gray-900
            transition-transform duration-300 ease-in-out
            ${mobileView === 'secondary' ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          {/* Back to main menu button */}
          <div className="border-b border-gray-200 dark:border-gray-800 p-4">
            <button
              onClick={navigateBackToPrimary}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Main menu</span>
            </button>
          </div>

          {/* Secondary nav content */}
          {activePrimaryItem && (
            <SecondaryNav
              activePrimaryItem={activePrimaryItem}
              isMobile
              onClose={navigateBackToPrimary}
            />
          )}
        </div>
      </div>
    </div>
  )
}
