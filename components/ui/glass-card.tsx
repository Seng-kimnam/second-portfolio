import type { HTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'strong'
  interactive?: boolean
}

export function GlassCard({
  className,
  variant = 'default',
  interactive = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass',
        variant === 'strong' && 'glass-strong',
        interactive && 'glass-interactive',
        className,
      )}
      {...props}
    />
  )
}
