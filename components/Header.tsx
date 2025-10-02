"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { useTranslations } from "next-intl"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useTranslations('Header')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const goToSection = (sectionId: string) => {
    const onHome = pathname === `/${locale}` || pathname === `/${locale}/` || pathname === '/'
    if (onHome) {
      const section = document.getElementById(sectionId)
      if (section) section.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push(`/${locale}#${sectionId}`)
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-background border-b border-border sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button
          onClick={() => goToSection("about")}
          className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
        >
          Frederik K.
        </button>
        <nav className="hidden md:flex space-x-6 items-center">
          <NavLink onClick={() => goToSection("about")}>{t('about')}</NavLink>
          <NavLink onClick={() => goToSection("projects")}>{t('projects')}</NavLink>
          <NavLink onClick={() => goToSection("skills")}>{t('skills')}</NavLink>
          <NavLink onClick={() => goToSection("contact")}>{t('contact')}</NavLink>
          <LanguageSwitcher />
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button className="ml-4 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-background py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <NavLink onClick={() => goToSection("about")}>{t('about')}</NavLink>
            <NavLink onClick={() => goToSection("projects")}>{t('projects')}</NavLink>
            <NavLink onClick={() => goToSection("skills")}>{t('skills')}</NavLink>
            <NavLink onClick={() => goToSection("contact")}>{t('contact')}</NavLink>
            <div><LanguageSwitcher /></div>
          </div>
        </nav>
      )}
    </header>
  )
}

import { ReactNode, MouseEventHandler } from "react"

interface NavLinkProps {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

const NavLink = ({ children, onClick }: NavLinkProps) => (
  <button onClick={onClick} className="text-muted-foreground hover:text-foreground transition-colors">
    {children}
  </button>
)

export default Header

