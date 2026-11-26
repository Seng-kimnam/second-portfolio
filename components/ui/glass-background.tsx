import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

type GlassBackgroundProps = HTMLAttributes<HTMLDivElement>

export function GlassBackground({
  children,
  className,
  ...props
}: GlassBackgroundProps) {
  return (
    <div className={cn('glass-background', className)} {...props}>
      {children}
    </div>
  )
}
