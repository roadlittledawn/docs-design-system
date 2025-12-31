import { ReactNode } from 'react'

interface CardProps {
  title?: string
  titleColor?: 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'gray'
  backgroundColor?: 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'gray' | 'white'
  href?: string
  children: ReactNode
  className?: string
}

const colorVariants = {
  title: {
    blue: 'text-blue-900',
    green: 'text-green-900',
    purple: 'text-purple-900',
    red: 'text-red-900',
    yellow: 'text-yellow-900',
    gray: 'text-gray-900'
  },
  background: {
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    purple: 'bg-purple-50',
    red: 'text-red-50',
    yellow: 'bg-yellow-50',
    gray: 'bg-gray-50',
    white: 'bg-white border border-gray-200'
  }
}

export function Card({ 
  title, 
  titleColor = 'gray', 
  backgroundColor = 'white', 
  href, 
  children, 
  className = '' 
}: CardProps) {
  const content = (
    <div className={`p-6 rounded-lg ${colorVariants.background[backgroundColor]} ${href ? 'hover:shadow-md transition-shadow cursor-pointer' : ''} ${className}`}>
      {title && (
        <h3 className={`mb-4 text-lg font-semibold ${colorVariants.title[titleColor]}`}>
          {title}
        </h3>
      )}
      <div className={backgroundColor !== 'white' ? `text-${backgroundColor}-800` : 'text-gray-700'}>
        {children}
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    )
  }

  return content
}
