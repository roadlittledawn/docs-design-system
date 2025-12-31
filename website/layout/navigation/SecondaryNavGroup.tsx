import { ChevronRight } from 'lucide-react'
import { useNavigation } from '../../hooks/useNavigation'
import { NavGroup } from '../../types/navigation'
import { SecondaryNavLink } from './SecondaryNavLink'

interface SecondaryNavGroupProps {
  group: NavGroup
}

export function SecondaryNavGroup({ group }: SecondaryNavGroupProps) {
  const { expandedGroups, toggleGroup } = useNavigation()
  const isExpanded = expandedGroups.has(group.label)

  return (
    <div>
      <button
        onClick={() => toggleGroup(group.label)}
        className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        aria-expanded={isExpanded}
      >
        <span className="font-medium">{group.label}</span>
        <ChevronRight
          className={`w-4 h-4 transition-transform duration-200 ${
            isExpanded ? 'rotate-90' : ''
          }`}
        />
      </button>

      <div
        className={`
          overflow-hidden transition-all duration-300
          ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="ml-4 mt-1 space-y-1">
          {group.items.map(item => (
            <SecondaryNavLink
              key={item.href}
              href={item.href}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
