import { useTranslation } from "react-i18next"

const locales = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' }
]

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value
    i18n.changeLanguage(newLang)
  }

  return (
    <select
      aria-label="Select language"
      value={i18n.language}
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
