'use client'

import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

const cache = createCache({ key: 'css', prepend: true })

export default function EmotionRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  return <CacheProvider value={cache}>{children}</CacheProvider>
}