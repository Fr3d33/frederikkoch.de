import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">Copyright 2025 - Frederik Koch</p>
        <p className="text-muted-foreground/60">{t('Footer.powered')}</p>
        <div className="mt-3">
          <Link
            to="/impressum"
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            {t('Footer.impressum')}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer


