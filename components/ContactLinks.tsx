"use client"

import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import { useState } from "react"

const contactLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/frederiksample" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/frederiksample" },
  { name: "Discord", icon: MessageCircle, url: "https://discordapp.com/users/frederiksample" },
]

const ContactLinks = () => {
  const [copySuccess, setCopySuccess] = useState("")

  const copyEmail = async () => {
    const email = "frederik@example.com"
    try {
      await navigator.clipboard.writeText(email)
      setCopySuccess("Email copied!")
      setTimeout(() => setCopySuccess(""), 2000)
    } catch (err) {
      setCopySuccess("Failed to copy email")
    }
  }

  return (
    <section id="contact" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8 text-foreground">Contact</h2>
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
          className="text-foreground hover:text-primary transition-colors relative"
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

