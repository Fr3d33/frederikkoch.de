"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-background border-b border-border sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button
          onClick={() => scrollToSection("about")}
          className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
        >
          FK
        </button>
        <nav className="hidden md:flex space-x-6 items-center">
          <NavLink onClick={() => scrollToSection("about")}>About</NavLink>
          <NavLink onClick={() => scrollToSection("projects")}>Projects</NavLink>
          <NavLink onClick={() => scrollToSection("skills")}>Skills</NavLink>
          <NavLink onClick={() => scrollToSection("contact")}>Contact</NavLink>
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
            <NavLink onClick={() => scrollToSection("about")}>About</NavLink>
            <NavLink onClick={() => scrollToSection("projects")}>Projects</NavLink>
            <NavLink onClick={() => scrollToSection("skills")}>Skills</NavLink>
            <NavLink onClick={() => scrollToSection("contact")}>Contact</NavLink>
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

