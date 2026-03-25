import { Moon, Sun } from 'react-feather'
import { useThemeContext } from '../context/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useThemeContext()

  // Render a placeholder with the same dimensions while mounting to avoid layout shift
  if (!mounted) {
    return (
      <button
        className="relative p-2 rounded-lg w-9 h-9"
        aria-label="Toggle theme"
        disabled
      />
    )
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="relative block w-5 h-5">
        {/* Sun icon — visible in dark mode */}
        <Sun
          className={[
            'absolute inset-0 w-5 h-5 transition-all duration-300',
            isDark
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-75',
          ].join(' ')}
          strokeWidth={2}
        />
        {/* Moon icon — visible in light mode */}
        <Moon
          className={[
            'absolute inset-0 w-5 h-5 transition-all duration-300',
            isDark
              ? 'opacity-0 rotate-90 scale-75'
              : 'opacity-100 rotate-0 scale-100',
          ].join(' ')}
          strokeWidth={2}
        />
      </span>
    </button>
  )
}
