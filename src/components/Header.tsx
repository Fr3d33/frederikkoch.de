import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { useLocation, useNavigate } from "react-router-dom"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()

  const goToSection = (sectionId: string) => {
    const onHome = location.pathname === '/'
    if (onHome) {
      const section = document.getElementById(sectionId)
      if (section) section.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${sectionId}`)
      setTimeout(() => {
        const section = document.getElementById(sectionId)
        if (section) section.scrollIntoView({ behavior: 'smooth' })
      }, 100)
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
          <NavLink onClick={() => goToSection("about")}>{t('Header.about')}</NavLink>
          <NavLink onClick={() => goToSection("projects")}>{t('Header.projects')}</NavLink>
          <NavLink onClick={() => goToSection("skills")}>{t('Header.skills')}</NavLink>
          <NavLink onClick={() => goToSection("contact")}>{t('Header.contact')}</NavLink>
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
            <NavLink onClick={() => goToSection("about")}>{t('Header.about')}</NavLink>
            <NavLink onClick={() => goToSection("projects")}>{t('Header.projects')}</NavLink>
            <NavLink onClick={() => goToSection("skills")}>{t('Header.skills')}</NavLink>
            <NavLink onClick={() => goToSection("contact")}>{t('Header.contact')}</NavLink>
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

