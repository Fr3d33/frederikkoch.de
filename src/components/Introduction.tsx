import { ArrowRight } from "lucide-react"
import ContactLinks from "@/components/ContactLinksIntroduction"
import { useTranslation } from "react-i18next"

const Introduction = () => {
  const { t } = useTranslation()
  return (
    <section id="about" className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl md:text-6xl font-bold animate-fade-in text-foreground">
          {t('Intro.title', { name: 'Frederik Koch' })}
        </h1>
        <ContactLinks />
      </div>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in animation-delay-200">
        {t('Intro.tagline')}
      </p>
      <a
        href="#projects"
        className="inline-flex items-center text-lg font-semibold text-foreground hover:text-primary transition-colors animate-fade-in animation-delay-400 magnetic"
      >
        {t('Intro.cta')}
        <ArrowRight className="ml-2" size={20} />
      </a>
    </section>
  )
}

export default Introduction

