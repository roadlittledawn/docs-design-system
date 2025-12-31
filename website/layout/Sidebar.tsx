import Link from 'next/link'

interface SidebarProps {
  navigation?: Array<{ name: string; href: string }>
}

export function Sidebar({ navigation }: SidebarProps) {
  if (navigation) {
    return (
      <aside className="w-64 bg-gray-50 border-r border-gray-200 min-h-screen">
        <nav className="p-4 space-y-2">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="block text-gray-600 hover:text-gray-900">
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    )
  }

  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 min-h-screen">
      <nav className="p-4 space-y-2">
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Principles</h3>
          <ul className="space-y-1 ml-4">
            <li>
              <Link href="/principles" className="text-gray-600 hover:text-gray-900">
                Overview
              </Link>
            </li>
            <li>
              <Link href="/principles/personalization" className="text-gray-600 hover:text-gray-900">
                Personalization
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Style Guide</h3>
          <ul className="space-y-1 ml-4">
            <li>
              <Link href="/style-guide" className="text-gray-600 hover:text-gray-900">
                Overview
              </Link>
            </li>
            <li>
              <Link href="/style-guide/voice-tone" className="text-gray-600 hover:text-gray-900">
                Voice & Tone
              </Link>
            </li>
            <li>
              <Link href="/style-guide/titles-headings" className="text-gray-600 hover:text-gray-900">
                Titles & Headings
              </Link>
            </li>
            <li>
              <Link href="/style-guide/lists" className="text-gray-600 hover:text-gray-900">
                Lists
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}
