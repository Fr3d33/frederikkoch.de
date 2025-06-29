"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = () => {
    // Deaktiviere Übergänge temporär
    document.documentElement.classList.add('theme-transitioning')
    
    setTheme(theme === "light" ? "dark" : "light")
    
    // Reaktiviere Übergänge nach kurzer Zeit
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning')
    }, 50)
  }

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={handleThemeChange}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
      suppressHydrationWarning
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] top-2 left-2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}