import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1 and its key features.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/frederiksample/project1",
  },
  {
    title: "Project 2",
    description: "An overview of Project 2 and what makes it unique.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/frederiksample/project2",
  },
  {
    title: "Project 3",
    description: "Highlighting the main aspects and achievements of Project 3.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Angular", "Django", "MySQL"],
    githubUrl: "https://github.com/frederiksample/project3",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8 text-foreground">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Link
            href={project.githubUrl}
            key={index}
            className="group bg-card rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
          >
            <div className="relative">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">View on GitHub</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Projects

