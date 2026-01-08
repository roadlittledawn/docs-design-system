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
  href?: string // Optional: if provided, this is a direct link without secondary nav
  secondary?: SecondaryNavItem[] // Optional: if provided, has secondary navigation
}

export interface NavigationConfig {
  primary: PrimaryNavItem[]
}
