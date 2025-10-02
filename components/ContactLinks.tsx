"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { useState } from "react"
import { useTranslations } from "next-intl"

const contactLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/Fr3d33" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/frederik-koch-a82b51316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
]

const ContactLinks = () => {
  const [copySuccess, setCopySuccess] = useState("")
  const t = useTranslations('Contact')

  const copyEmail = async () => {
    const email = "frederikkoch@proton.me"
    try {
      await navigator.clipboard.writeText(email)
  setCopySuccess(t('copied'))
      setTimeout(() => setCopySuccess(""), 2000)
    } catch (err) {
  setCopySuccess(t('copyFailed'))
    }
  }

  return (
    <section id="contact" className="scroll-mt-16">
  <h2 className="text-3xl font-bold mb-8 text-foreground">{t('title')}</h2>
      <div className="flex justify-center space-x-8">
        {contactLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
            aria-label={link.name}
          >
            <link.icon size={32} />
          </a>
        ))}
        <button
          onClick={copyEmail}
          className="text-foreground hover:text-primary transition-colors relative magnetic"
          aria-label="Copy Email"
        >
          <Mail size={32} />
          {copySuccess && (
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-sm">
              {copySuccess}
            </span>
          )}
        </button>
      </div>
    </section>
  )
}

export default ContactLinks

