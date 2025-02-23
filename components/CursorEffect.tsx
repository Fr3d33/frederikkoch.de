"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import "../styles/CursorEffect.css"

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const { theme } = useTheme()

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })
      })
    }

    window.addEventListener("mousemove", updateCursorPosition)

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition)
    }
  }, [])

  if (theme !== "dark") {
    return null
  }

  return (
    <div
      className="cursor-effect"
      style={{ "--cursor-background": `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 80%)` } as React.CSSProperties}
    />
  )
}

export default CursorEffect