import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva('glass-button', {
  variants: {
    variant: {
      default: 'glass-button--primary',
      secondary: 'glass-button--secondary',
      outline: 'glass-button--secondary',
      ghost: 'glass-button--ghost',
      destructive: 'glass-button--destructive',
      link: 'glass-button--link',
    },
    size: {
      default: '',
      xs: 'glass-button--sm',
      sm: 'glass-button--sm',
      lg: 'glass-button--lg',
      icon: 'glass-button--icon',
      'icon-xs': 'glass-button--icon-sm',
      'icon-sm': 'glass-button--icon-sm',
      'icon-lg': 'glass-button--icon-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

function Button({
  className,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
