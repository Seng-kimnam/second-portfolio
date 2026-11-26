import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { createPageMetadata } from '@/lib/page-metadata'

export const metadata: Metadata = createPageMetadata(
  'Education & Certifications',
  'My education history, institutions, and professional certifications.',
)

export default function EducationLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
