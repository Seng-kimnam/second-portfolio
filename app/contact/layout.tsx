import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { createPageMetadata } from '@/lib/page-metadata'

export const metadata: Metadata = createPageMetadata(
  'Contact',
  'Get in touch with me for projects, collaborations, and questions.',
)

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
