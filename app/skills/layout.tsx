import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { createPageMetadata } from '@/lib/page-metadata'

export const metadata: Metadata = createPageMetadata(
  'Skills & Expertise',
  'My technical skills, tools, certifications, and areas of expertise.',
)

export default function SkillsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
