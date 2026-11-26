'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

/**
 * Fades a page-coloured overlay, not the content itself. Keeping opacity off
 * the glass surfaces preserves their backdrop-filter during route changes.
 */
export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      {children}
      <AnimatePresence initial={false}>
        <motion.div
          key={pathname}
          className="page-transition-overlay"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.25,
            ease: 'easeOut',
          }}
        />
      </AnimatePresence>
    </>
  )
}
