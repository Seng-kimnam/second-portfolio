'use client'

import { useTheme } from 'next-themes'
import { useSyncExternalStore } from 'react'
import { Moon, Sun } from 'lucide-react'

import { GlassButton } from '@/components/ui/glass-button'

function subscribe() {
  return () => {}
}

function getSnapshot() {
  return true
}

function getServerSnapshot() {
  return false
}

export function ThemeToggle() {
  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  )
  const { theme, setTheme } = useTheme()

  if (!mounted) return null

  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <GlassButton
      variant="secondary"
      size="icon"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={theme === 'dark'}
    >
      {theme === 'dark' ? (
        <Sun aria-hidden="true" className="h-5 w-5 text-accent" />
      ) : (
        <Moon aria-hidden="true" className="h-5 w-5 text-accent" />
      )}
    </GlassButton>
  )
}
