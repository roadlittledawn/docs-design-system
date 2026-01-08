import { useNavigation } from '../../hooks/useNavigation'
import { PrimaryNav } from './PrimaryNav'
import { SecondaryNav } from './SecondaryNav'

export function DesktopNavigation() {
  const { navigationConfig, activePrimaryId, pinnedPrimaryId } = useNavigation()

  // Find the pinned primary item (for current page's section)
  const pinnedPrimaryItem = pinnedPrimaryId
    ? navigationConfig.primary.find(item => item.id === pinnedPrimaryId) || null
    : null

  // Find the active (hover) primary item - only show if different from pinned
  const activePrimaryItem = activePrimaryId && activePrimaryId !== pinnedPrimaryId
    ? navigationConfig.primary.find(item => item.id === activePrimaryId) || null
    : null

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
        <div className={`fixed top-0 z-40 ${pinnedPrimaryItem ? 'left-[352px]' : 'left-[88px]'}`}>
          <SecondaryNav activePrimaryItem={activePrimaryItem} isPinned={false} />
        </div>
      )}
    </div>
  )
}
