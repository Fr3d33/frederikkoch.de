const skills = [
  { name: "JavaScript", level: 60 },
  { name: "Python", level: 25 },
  { name: "Node.js", level: 80 },
  { name: "TypeScript", level: 20 },
  { name: "Rust", level: 8 },
  { name: "Flutter", level: 20 },
]

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8 text-foreground">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-card p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-card-foreground">{skill.name}</span>
              <span className="text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2.5">
              <div
                className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

