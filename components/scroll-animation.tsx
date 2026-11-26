'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ScrollAnimationProps {
  children: ReactNode
  variant?:
    | 'fadeInUp'
    | 'fadeIn'
    | 'slideInLeft'
    | 'slideInRight'
    | 'scaleIn'
  delay?: number
  className?: string
}

/* Transform-only entrances: opacity on a wrapper would turn it into a backdrop
   root, so any GlassCard inside would stop blurring the page background. */
const variants = {
  fadeInUp: {
    hidden: { y: 40 },
    visible: (custom: number) => ({
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: custom },
    }),
  },
  fadeIn: {
    hidden: { scale: 0.98 },
    visible: (custom: number) => ({
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut', delay: custom },
    }),
  },
  slideInLeft: {
    hidden: { x: -60 },
    visible: (custom: number) => ({
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: custom },
    }),
  },
  slideInRight: {
    hidden: { x: 60 },
    visible: (custom: number) => ({
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: custom },
    }),
  },
  scaleIn: {
    hidden: { scale: 0.85 },
    visible: (custom: number) => ({
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut', delay: custom },
    }),
  },
}

export function ScrollAnimation({
  children,
  variant = 'fadeInUp',
  delay = 0,
  className = '',
}: ScrollAnimationProps) {
  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={delay}
    >
      {children}
    </motion.div>
  )
}
