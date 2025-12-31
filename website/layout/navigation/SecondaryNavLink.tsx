import Link from 'next/link'
import { useNavigation } from '../../hooks/useNavigation'

interface SecondaryNavLinkProps {
  href: string
  label: string
}

export function SecondaryNavLink({ href, label }: SecondaryNavLinkProps) {
  const { isPathActive } = useNavigation()
  const isActive = isPathActive(href)

  return (
    <Link
      href={href}
      className={`
        block px-4 py-2 rounded-lg transition-colors
        ${isActive
          ? 'bg-blue-100 text-blue-900 font-medium'
          : 'text-gray-700 hover:bg-gray-100'
        }
      `}
    >
      {label}
    </Link>
  )
}
