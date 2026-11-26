import Link from 'next/link'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'

import { cn } from '@/lib/utils'

type GlassButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'destructive'
  | 'link'

type GlassButtonSize =
  | 'default'
  | 'sm'
  | 'lg'
  | 'icon'
  | 'icon-sm'
  | 'icon-lg'

interface GlassButtonStyleProps {
  variant?: GlassButtonVariant
  size?: GlassButtonSize
  className?: string
}

function glassButtonClassName({
  variant = 'primary',
  size = 'default',
  className,
}: GlassButtonStyleProps) {
  return cn(
    'glass-button',
    `glass-button--${variant}`,
    size !== 'default' && `glass-button--${size}`,
    className,
  )
}

export type GlassButtonProps = ComponentPropsWithoutRef<'button'> &
  GlassButtonStyleProps

export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  function GlassButton(
    { variant, size, className, type = 'button', ...props },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={glassButtonClassName({ variant, size, className })}
        {...props}
      />
    )
  },
)

export type GlassLinkProps = ComponentPropsWithoutRef<typeof Link> &
  GlassButtonStyleProps

export const GlassLink = forwardRef<HTMLAnchorElement, GlassLinkProps>(
  function GlassLink({ variant, size, className, ...props }, ref) {
    return (
      <Link
        ref={ref}
        className={glassButtonClassName({ variant, size, className })}
        {...props}
      />
    )
  },
)

export { glassButtonClassName }
