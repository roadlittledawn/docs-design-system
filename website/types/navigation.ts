export interface NavLink {
  type: 'link'
  label: string
  href: string
}

export interface NavGroupItem {
  label: string
  href: string
}

export interface NavGroup {
  type: 'group'
  label: string
  items: NavGroupItem[]
}

export type SecondaryNavItem = NavLink | NavGroup

export interface PrimaryNavItem {
  id: string
  label: string
  icon: string
  secondary: SecondaryNavItem[]
}

export interface NavigationConfig {
  primary: PrimaryNavItem[]
}
