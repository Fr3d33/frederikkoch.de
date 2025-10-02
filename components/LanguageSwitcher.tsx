"use client"

import { usePathname, useRouter } from "next/navigation"
import { useLocale } from "next-intl"

const locales = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' }
]

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const next = e.target.value
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : pathname
    if (!currentPath || typeof window === 'undefined') return
    const url = new URL(window.location.href)
    const hash = url.hash
    const parts = currentPath.split('/').filter(Boolean)
    if (['de','en','fr','es'].includes(parts[0])) {
      parts[0] = next
    } else {
      parts.unshift(next)
    }
    const nextPath = '/' + parts.join('/') + hash
    window.location.assign(nextPath)
  }

  return (
    <select
      aria-label="Select language"
      value={locale}
      onChange={onChange}
      className="bg-transparent border border-border rounded px-2 py-1 text-sm text-foreground hover:border-primary focus:outline-none"
    >
      {locales.map(l => (
        <option key={l.code} value={l.code} className="text-foreground bg-background">
          {l.label}
        </option>
      ))}
    </select>
  )
}
