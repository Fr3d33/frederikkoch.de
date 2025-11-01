import { useTranslation } from "react-i18next"

const projects = [
  {
    key: "objectTracking",
    title: "Object Tracking",
    description: "Ein Python-Projekt, das mithilfe von YOLO und ByteTrack Echtzeit-Objektverfolgung implementiert und Bewegungsverläufe mit dynamischen ID-Labels visualisiert.",
    image: "/object_tracking.png?height=300&width=400",
    technologies: ["Python", "OpenCV", "YOLO", "ByteTrack"],
    githubUrl: "https://github.com/Fr3d33/object_tracking",
  },
  {
    key: "megakino",
    title: "Megakino URL Finder",
    description: "Der megakino_url_finder ist ein Tool, das automatisch die URL von Megakino-Seiten durchsucht und extrahiert, um Nutzern schnellen Zugriff auf Filme und Serien zu ermöglichen.",
    image: "/megakino.png?height=300&width=400",
    technologies: ["JavaScript", "CSS", "HTML"],
    githubUrl: "https://github.com/Fr3d33/megakino_url_finder",
  },
  {
    key: "buecherei",
    title: "Bücherei Backend",
    description: "Das buecherei_backend ist eine Backend-Lösung zur Verwaltung von Büchern, Benutzerdaten und Ausleihprozessen für eine digitale Bibliothek.",
    image: "/bücherei_backend.jpg?height=300&width=400",
    technologies: ["Node.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/Fr3d33/buecherei_backend",
  },
  // {
  //   title: "Nexara",
  //   description: "Nexara ist eine Plattform für Unternehmens- und Lifestyle-Tools, die verschiedene Funktionen integriert, um Arbeitsprozesse zu optimieren und den Wechsel zwischen Anwendungen zu erleichtern.",
  //   image: "/nexara.png?height=300&width=400",
  //   technologies: ["Node.js", "Express", "PostgreSQL", "Flutter", "Dart"],
  //   githubUrl: "https://github.com/nexara-app",
  // },
  {
    key: "fileToImage",
    title: "File to Image",
    description: "file_to_image ist ein Tool, das es ermöglicht, Dateien automatisch in Bilder umzuwandeln, um sie visuell darzustellen oder weiterzuverarbeiten.",
    image: "/file_to_image.png?height=300&width=400",
    technologies: ["Python", "Pillow"],
    githubUrl: "https://github.com/Fr3d33/file_to_image",
  },
]

const Projects = () => {
  const { t } = useTranslation()
  return (
    <section id="projects" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8 text-foreground">{t('Projects.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            href={project.githubUrl}
            key={index}
            className="group bg-card rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary will-change-transform [transform:perspective(800px)_rotateX(0deg)_rotateY(0deg)] hover:[transform:perspective(800px)_rotateX(2deg)_rotateY(-3deg)]"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
          >
            <div className="relative">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">{t('Projects.viewOnGitHub')}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                {t(`Projects.items.${project.key}.title`)}
              </h3>
              <p className="text-muted-foreground mb-4">{t(`Projects.items.${project.key}.description`)}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects

