export const locales = ['de', 'en', 'fr', 'es'] as const;

export function isLocale(segment: string): boolean {
  return (locales as readonly string[]).includes(segment)
}

export function withLocale(pathname: string, nextLocale: string): string {
  const parts = pathname.split('/').filter(Boolean)
  if (isLocale(parts[0])) {
    parts[0] = nextLocale
  } else {
    parts.unshift(nextLocale)
  }
  return '/' + parts.join('/')
}
