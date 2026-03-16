import { useState, useEffect, useCallback } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'dds-theme'
const EXPIRY_MS = 30 * 24 * 60 * 60 * 1000 // 30 days

interface StoredTheme {
  theme: Theme
  expiry: number
}

function getStoredTheme(): Theme | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed: StoredTheme = JSON.parse(raw)
    if (Date.now() > parsed.expiry) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }
    return parsed.theme
  } catch {
    return null
  }
}

function saveTheme(theme: Theme) {
  try {
    const payload: StoredTheme = { theme, expiry: Date.now() + EXPIRY_MS }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  } catch {
    // ignore storage errors
  }
}

function getSystemPreference(): Theme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = getStoredTheme()
    const initial = stored ?? getSystemPreference()
    setThemeState(initial)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme, mounted])

  const toggleTheme = useCallback(() => {
    setThemeState(prev => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'
      saveTheme(next)
      return next
    })
  }, [])

  return { theme, toggleTheme, mounted }
}
