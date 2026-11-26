import type { Metadata } from 'next'

const siteName = 'Seng Kimnam'

/** Shared page metadata so every route gets its own browser/tab title. */
export function createPageMetadata(
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      type: 'website',
    },
  }
}
