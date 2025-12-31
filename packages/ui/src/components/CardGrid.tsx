import { ReactNode } from 'react'

interface CardGridProps {
  columns?: 2 | 3 | 4
  children: ReactNode
  className?: string
}

export function CardGrid({ columns = 3, children, className = '' }: CardGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }

  return (
    <div className={`grid gap-6 ${gridCols[columns]} ${className}`}>
      {children}
    </div>
  )
}
