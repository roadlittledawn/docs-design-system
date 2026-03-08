import { ReactNode } from 'react'

export interface CardGridProps {
  /**
   * Number of columns in the grid
   * @default 3
   */
  columns?: 2 | 3 | 4

  /**
   * When true, all cards in each row expand to the height of the tallest card.
   * Useful when cards have varying content lengths.
   * @default true
   */
  equalHeight?: boolean

  /** Grid content (typically Card components) */
  children: ReactNode

  /** Additional CSS classes */
  className?: string
}

export function CardGrid({ columns = 3, equalHeight = true, children, className = '' }: CardGridProps) {
  const classNames = [
    'dds-card-grid',
    `dds-card-grid-${columns}`,
    equalHeight ? 'dds-card-grid-equal-height' : '',
    className,
  ].filter(Boolean).join(' ')

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}
