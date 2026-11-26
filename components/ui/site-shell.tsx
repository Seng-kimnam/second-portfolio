import type { ReactNode } from 'react'

import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'
import { cn } from '@/lib/utils'

interface SiteShellProps {
  children: ReactNode
  mainClassName?: string
}

export function SiteShell({ children, mainClassName }: SiteShellProps) {
  return (
    <div className="site-shell">
      <Navigation />
      <main className={cn('site-main', mainClassName)}>{children}</main>
      <Footer />
    </div>
  )
}
