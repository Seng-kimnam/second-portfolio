import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface PageHeroProps {
  title: ReactNode
  description?: ReactNode
  eyebrow?: ReactNode
  className?: string
  children?: ReactNode
}

export function PageHero({
  title,
  description,
  eyebrow,
  className,
  children,
}: PageHeroProps) {
  return (
    <section className={cn('page-hero', className)}>
      <div className="page-container page-hero__inner">
        {eyebrow ? <p className="page-eyebrow">{eyebrow}</p> : null}
        <h1 className="page-title">{title}</h1>
        {description ? <p className="page-subtitle">{description}</p> : null}
        {children}
      </div>
    </section>
  )
}
