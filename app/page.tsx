import Introduction from "@/components/Introduction"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import ContactLinks from "@/components/ContactLinks"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Introduction />
      <Projects />
      <Skills />
      <ContactLinks />
    </div>
  )
}

