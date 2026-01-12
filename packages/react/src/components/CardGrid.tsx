import { ReactNode } from 'react'

interface CardGridProps {
  /**
   * Number of columns in the grid
   * @default 3
   */
  columns?: 2 | 3 | 4

  /** Grid content (typically Card components) */
  children: ReactNode

  /** Additional CSS classes */
  className?: string
}

export function CardGrid({ columns = 3, children, className = '' }: CardGridProps) {
  const classNames = `dds-card-grid dds-card-grid-${columns} ${className}`.trim()

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}
