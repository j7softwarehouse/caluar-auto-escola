import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  href?: string
}

export default function Card({ children, className = '', href }: CardProps) {
  const baseStyles =
    'bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300'

  const classes = `${baseStyles} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return <div className={classes}>{children}</div>
}
