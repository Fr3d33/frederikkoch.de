"use client"

import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"

const Footer = () => {
  const t = useTranslations('Footer')
  const locale = useLocale()
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">Copyright 2025 - Frederik Koch</p>
        <p className="text-muted-foreground/60">{t('powered')}</p>
        <div className="mt-3">
          <Link
            href={`/${locale}/impressum`}
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            {t('impressum')}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer


