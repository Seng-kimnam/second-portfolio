'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

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

const variants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: custom },
    }),
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut', delay: custom },
    }),
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: custom },
    }),
  },
  slideInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: custom },
    }),
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: (custom: number) => ({
      opacity: 1,
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
