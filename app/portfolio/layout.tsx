import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { createPageMetadata } from '@/lib/page-metadata'

export const metadata: Metadata = createPageMetadata(
  'Portfolio',
  'Selected projects showcasing my full-stack development and design work.',
)

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
