import * as LucideIcons from 'lucide-react'
import { useRouter } from 'next/router'
import { useNavigation } from '../../hooks/useNavigation'
import { PrimaryNavItem } from '../../types/navigation'

interface PrimaryNavProps {
  isMobile?: boolean
  onItemClick?: (item: PrimaryNavItem) => void
}

export function PrimaryNav({ isMobile = false, onItemClick }: PrimaryNavProps) {
  const router = useRouter()
  const { navigationConfig, activePrimaryId, setActivePrimary, toggleMobileMenu } = useNavigation()

  const handleItemClick = (item: PrimaryNavItem) => {
    if (isMobile && onItemClick) {
      onItemClick(item)
    } else {
      // Desktop: navigate to the first child (Overview page)
      const firstChild = item.secondary[0]
      if (firstChild && firstChild.type === 'link') {
        router.push(firstChild.href)
      }
    }
  }

  const handleItemHover = (item: PrimaryNavItem) => {
    if (!isMobile && item.secondary.length > 0) {
      setActivePrimary(item.id)
    }
  }

  const getIcon = (iconName: string) => {
    // Convert kebab-case to PascalCase (e.g., "book-open" -> "BookOpen")
    const pascalCase = iconName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')

    const IconComponent = (LucideIcons as any)[pascalCase]
    return IconComponent || LucideIcons.HelpCircle
  }

  if (isMobile) {
    // Mobile: horizontal layout with arrow
    return (
      <nav className="bg-white h-full" aria-label="Primary navigation">
        {/* Close button */}
        <div className="border-b border-gray-200 p-4">
          <button
            onClick={toggleMobileMenu}
            className="p-1 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            aria-label="Close navigation"
          >
            <LucideIcons.X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-2">
          {navigationConfig.primary.map(item => {
            const Icon = getIcon(item.icon)
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors min-h-[56px]"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6" />
                  <span className="font-medium">{item.label}</span>
                </div>
                <LucideIcons.ChevronRight className="w-5 h-5" />
              </button>
            )
          })}
        </div>
      </nav>
    )
  }

  // Desktop: vertical layout with icon on top
  return (
    <nav
      className="w-[88px] bg-gray-50 border-r border-gray-200 min-h-screen"
      aria-label="Primary navigation"
    >
      <div className="py-4 space-y-2">
        {navigationConfig.primary.map(item => {
          const Icon = getIcon(item.icon)
          const isActive = activePrimaryId === item.id

          return (
            <button
              key={item.id}
              onMouseEnter={() => handleItemHover(item)}
              onClick={() => handleItemClick(item)}
              className={`
                w-full h-[72px] flex flex-col items-center justify-center gap-1
                transition-colors
                ${isActive
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-700 hover:bg-gray-100'
                }
              `}
              aria-pressed={isActive}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs text-center px-1">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
