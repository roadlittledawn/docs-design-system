import { X } from 'lucide-react'
import { useNavigation } from '../../hooks/useNavigation'
import { PrimaryNavItem } from '../../types/navigation'
import { SecondaryNavLink } from './SecondaryNavLink'
import { SecondaryNavGroup } from './SecondaryNavGroup'

interface SecondaryNavProps {
  activePrimaryItem: PrimaryNavItem | null
  isMobile?: boolean
  onClose?: () => void
}

export function SecondaryNav({ activePrimaryItem, isMobile = false, onClose }: SecondaryNavProps) {
  const { setActivePrimary } = useNavigation()

  if (!activePrimaryItem) {
    return null
  }

  const handleClose = () => {
    if (onClose) {
      onClose()
    } else {
      setActivePrimary(null)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActivePrimary(null)
    }
  }

  return (
    <nav
      onMouseLeave={handleMouseLeave}
      className={`
        bg-white border border-gray-200 shadow-lg
        ${isMobile ? 'w-full h-full' : 'w-64 h-screen'}
        overflow-y-auto
        transition-transform duration-300 ease-in-out
      `}
      aria-label="Secondary navigation"
    >
      {/* Close button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="font-semibold text-gray-900">{activePrimaryItem.label}</h2>
        <button
          onClick={handleClose}
          className="p-1 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          aria-label="Close navigation"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 space-y-1">
        {activePrimaryItem.secondary.map((item, index) => {
          if (item.type === 'link') {
            return (
              <SecondaryNavLink
                key={item.href}
                href={item.href}
                label={item.label}
              />
            )
          } else if (item.type === 'group') {
            return (
              <SecondaryNavGroup
                key={`${item.label}-${index}`}
                group={item}
              />
            )
          }
          return null
        })}
      </div>
    </nav>
  )
}
