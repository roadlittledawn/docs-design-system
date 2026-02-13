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
        block px-4 py-2 rounded-lg transition-all duration-200
        ${isActive
          ? 'bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100 font-medium shadow-sm'
          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
        }
      `}
    >
      {label}
    </Link>
  )
}
