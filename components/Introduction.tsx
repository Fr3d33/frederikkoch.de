import { ArrowRight } from "lucide-react"

const Introduction = () => {
  return (
    <section id="about" className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-foreground">Hi, I'm Frederik Koch</h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in animation-delay-200">
        I'm a 14-year-old tech enthusiast with experience in programming, hardware tinkering, and engineering. I work on software, build electronics, and explore new technologies.
      </p>
      <a
        href="#projects"
        className="inline-flex items-center text-lg font-semibold text-foreground hover:text-primary transition-colors animate-fade-in animation-delay-400"
      >
        View my work
        <ArrowRight className="ml-2" size={20} />
      </a>
    </section>
  )
}

export default Introduction

