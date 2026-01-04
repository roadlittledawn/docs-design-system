import { ReactNode } from 'react'

interface CardGridProps {
  columns?: 2 | 3 | 4
  children: ReactNode
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
