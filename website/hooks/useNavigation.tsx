import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { NavigationConfig, PrimaryNavItem } from '../types/navigation'

interface NavigationContextType {
  navigationConfig: NavigationConfig

  // Desktop state
  activePrimaryId: string | null
  setActivePrimary: (id: string | null) => void

  // Mobile state
  mobileMenuOpen: boolean
  mobileView: 'primary' | 'secondary'
  mobileActivePrimaryId: string | null
  toggleMobileMenu: () => void
  navigateToSecondary: (primaryId: string) => void
  navigateBackToPrimary: () => void

  // Collapsible groups state
  expandedGroups: Set<string>
  toggleGroup: (groupLabel: string) => void

  // Helper to check if a path is active
  isPathActive: (href: string) => boolean

  // Get active primary based on current pathname
  getActivePrimaryFromPath: () => string | null
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function NavigationProvider({
  children,
  navigationConfig
}: {
  children: ReactNode
  navigationConfig: NavigationConfig
}) {
  const router = useRouter()

  // Desktop state
  const [activePrimaryId, setActivePrimaryId] = useState<string | null>(null)

  // Mobile state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileView, setMobileView] = useState<'primary' | 'secondary'>('primary')
  const [mobileActivePrimaryId, setMobileActivePrimaryId] = useState<string | null>(null)

  // Collapsible groups state
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set())

  // Helper to determine active primary based on pathname
  const getActivePrimaryFromPath = (): string | null => {
    const { pathname } = router

    for (const item of navigationConfig.primary) {
      // Check if any secondary item matches current path
      const hasActiveSecondary = item.secondary.some(sec => {
        if (sec.type === 'link') {
          return pathname === sec.href
        }
        if (sec.type === 'group') {
          return sec.items.some(child => pathname === child.href)
        }
        return false
      })

      if (hasActiveSecondary) {
        return item.id
      }
    }

    return null
  }

  // Helper to check if a specific path is active
  const isPathActive = (href: string): boolean => {
    return router.pathname === href
  }

  // Set active primary on route change
  useEffect(() => {
    const activeId = getActivePrimaryFromPath()
    if (activeId) {
      setActivePrimaryId(activeId)
    }
  }, [router.pathname])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setMobileView('primary')
  }, [router.pathname])

  const setActivePrimary = (id: string | null) => {
    setActivePrimaryId(id)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev)
    if (mobileMenuOpen) {
      // Reset to primary view when closing
      setMobileView('primary')
    }
  }

  const navigateToSecondary = (primaryId: string) => {
    setMobileActivePrimaryId(primaryId)
    setMobileView('secondary')
  }

  const navigateBackToPrimary = () => {
    setMobileView('primary')
    setMobileActivePrimaryId(null)
  }

  const toggleGroup = (groupLabel: string) => {
    setExpandedGroups(prev => {
      const newSet = new Set(prev)
      if (newSet.has(groupLabel)) {
        newSet.delete(groupLabel)
      } else {
        newSet.add(groupLabel)
      }
      return newSet
    })
  }

  const value: NavigationContextType = {
    navigationConfig,
    activePrimaryId,
    setActivePrimary,
    mobileMenuOpen,
    mobileView,
    mobileActivePrimaryId,
    toggleMobileMenu,
    navigateToSecondary,
    navigateBackToPrimary,
    expandedGroups,
    toggleGroup,
    isPathActive,
    getActivePrimaryFromPath
  }

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }
  return context
}
