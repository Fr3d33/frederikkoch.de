import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

export const metadata: Metadata = {
  title: "Impressum | Frederik Koch",
  description: "Impressum von Frederik Koch.",
}

export default async function ImpressumPage() {
  const t = await getTranslations('Impressum')
  return (
    <section className="container mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold text-foreground">{t('title')}</h1>

      <div className="space-y-2 text-muted-foreground">
        <p>Frederik Koch</p>
        <p>Maikottenweg 170A</p>
        <p>48155 Münster</p>
      </div>

      <div className="space-y-1 text-muted-foreground">
  <h2 className="text-xl font-semibold text-foreground">{t('contact')}</h2>
        <p>
          Telefon: {" "}
          <a
            className="underline underline-offset-4 hover:text-foreground"
            href="tel:+491709687325"
          >
            01709687325
          </a>
        </p>
        <p>
          E-Mail: {" "}
          <a
            className="underline underline-offset-4 hover:text-foreground"
            href="mailto:frederikkoch@proton.me"
          >
            frederikkoch@proton.me
          </a>
        </p>
      </div>

      <p className="text-sm text-muted-foreground">
        {t('source')}: {" "}
        <a
          className="underline underline-offset-4 hover:text-foreground"
          href="https://www.e-recht24.de/impressum-generator.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.e-recht24.de/impressum-generator.html
        </a>
      </p>
    </section>
  )
}
