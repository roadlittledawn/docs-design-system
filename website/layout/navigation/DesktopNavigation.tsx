import { useNavigation } from '../../hooks/useNavigation'
import { PrimaryNav } from './PrimaryNav'
import { SecondaryNav } from './SecondaryNav'

export function DesktopNavigation() {
  const { navigationConfig, activePrimaryId, pinnedPrimaryId } = useNavigation()

  // Find the pinned primary item (for current page's section) - shown on large screens alongside content
  const pinnedPrimaryItem = pinnedPrimaryId
    ? navigationConfig.primary.find(item => item.id === pinnedPrimaryId) || null
    : null

  // Find the hover primary item - shown as overlay on hover
  const hoverPrimaryItem = activePrimaryId
    ? navigationConfig.primary.find(item => item.id === activePrimaryId) || null
    : null

  // Only show hover overlay if it's different from pinned (to avoid showing same nav twice)
  const showHoverOverlay = hoverPrimaryItem && hoverPrimaryItem.id !== pinnedPrimaryId

  return (
    <div className="hidden md:flex relative">
      <PrimaryNav />

      {/* Pinned secondary nav - shown alongside content on large screens only */}
      {pinnedPrimaryItem && pinnedPrimaryItem.secondary && pinnedPrimaryItem.secondary.length > 0 && (
        <div className="hidden lg:block w-64 border-r border-gray-200 dark:border-gray-800">
          <SecondaryNav activePrimaryItem={pinnedPrimaryItem} isPinned={true} />
        </div>
      )}

      {/* Hover secondary nav - shown as overlay with slide-out animation */}
      {showHoverOverlay && hoverPrimaryItem.secondary && hoverPrimaryItem.secondary.length > 0 && (
        <div className="fixed left-[88px] top-0 z-40">
          <SecondaryNav activePrimaryItem={hoverPrimaryItem} isPinned={false} />
        </div>
      )}
    </div>
  )
}
