import { useNavigation } from '../../hooks/useNavigation'
import { PrimaryNav } from './PrimaryNav'
import { SecondaryNav } from './SecondaryNav'

export function DesktopNavigation() {
  const { navigationConfig, activePrimaryId, pinnedPrimaryId } = useNavigation()

  // Navigation width constants
  const PRIMARY_NAV_WIDTH = 88 // px
  const SECONDARY_NAV_WIDTH = 256 // px (w-64 = 16rem = 256px)

  // Find the pinned primary item (for current page's section)
  const pinnedPrimaryItem = pinnedPrimaryId
    ? navigationConfig.primary.find(item => item.id === pinnedPrimaryId) || null
    : null

  // Find the active (hover) primary item - only show if different from pinned
  const activePrimaryItem = activePrimaryId && activePrimaryId !== pinnedPrimaryId
    ? navigationConfig.primary.find(item => item.id === activePrimaryId) || null
    : null

  // Calculate left position for hover overlay based on whether pinned nav is present
  const hoverOverlayLeft = pinnedPrimaryItem 
    ? PRIMARY_NAV_WIDTH + SECONDARY_NAV_WIDTH 
    : PRIMARY_NAV_WIDTH

  return (
    <div className="hidden md:flex relative">
      <PrimaryNav />

      {/* Pinned secondary nav - shown alongside content */}
      {pinnedPrimaryItem && (
        <div className="w-64 border-r border-gray-200">
          <SecondaryNav activePrimaryItem={pinnedPrimaryItem} isPinned={true} />
        </div>
      )}

      {/* Hover secondary nav - shown as overlay */}
      {activePrimaryItem && (
        <div className="fixed top-0 z-40" style={{ left: `${hoverOverlayLeft}px` }}>
          <SecondaryNav activePrimaryItem={activePrimaryItem} isPinned={false} />
        </div>
      )}
    </div>
  )
}
