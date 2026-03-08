const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Java", "Python", "C (Basics)", "SQL"],
    color: "primary",
  },
  {
    category: "Web Technologies",
    skills: ["HTML5", "CSS3", "JavaScript"],
    color: "accent",
  },
  {
    category: "Development Tools",
    skills: ["VS Code", "Sublime Text", "Google Colab"],
    color: "primary",
  },
  {
    category: "Design & Version Control",
    skills: ["Canva", "Git", "GitHub"],
    color: "accent",
  },
];

const SkillsModule = () => (
  <div className="space-y-7">
    {skillCategories.map((cat, i) => (
      <div key={i}>
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-1.5 h-1.5 rounded-full ${
            cat.color === 'accent' ? 'bg-accent' : 'bg-primary'
          }`} />
          <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
            {cat.category}
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="flex flex-wrap gap-2.5">
          {cat.skills.map((skill) => (
            <span key={skill} className="tech-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default SkillsModule;
