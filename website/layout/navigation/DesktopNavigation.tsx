import { useNavigation } from '../../hooks/useNavigation'
import { PrimaryNav } from './PrimaryNav'
import { SecondaryNav } from './SecondaryNav'

export function DesktopNavigation() {
  const { navigationConfig, activePrimaryId } = useNavigation()

  // Find the active primary item
  const activePrimaryItem = activePrimaryId
    ? navigationConfig.primary.find(item => item.id === activePrimaryId) || null
    : null

  return (
    <div className="hidden md:block relative">
      <PrimaryNav />

      {/* Secondary nav as overlay/flyover */}
      {activePrimaryItem && (
        <div className="fixed left-[88px] top-0 z-40">
          <SecondaryNav activePrimaryItem={activePrimaryItem} />
        </div>
      )}
    </div>
  )
}
