import { FolderGit2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Resume Analyser & Skill Gap Detector",
    description:
      "A web application that analyzes user-uploaded resumes and compares them with desired job descriptions, identifies skill gaps, and recommends suggestions.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "Django", "NLP"],
    features: [
      "Resume parsing and analysis",
      "Job description comparison",
      "Skill gap identification",
      "Personalized recommendations",
    ],
  },
];

const ProjectsModule = () => (
  <div className="space-y-5">
    {projects.map((project, i) => (
      <div key={i} className="exp-card group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-accent/[0.02] 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
        
        <div className="relative z-10">
          <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 
              border border-primary/20 flex items-center justify-center flex-shrink-0
              group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.15)] transition-all duration-300">
              <FolderGit2 className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm text-foreground flex items-center gap-2 flex-wrap">
                <span className="break-words">{project.title}</span>
                <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </h3>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground leading-relaxed mb-4 sm:mb-5 ml-0 sm:ml-14">{project.description}</p>
          
          <div className="mb-4 ml-0 sm:ml-14">
            <div className="font-mono text-[10px] text-primary/50 mb-2 sm:mb-3 tracking-wider">KEY_FEATURES</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((f, j) => (
                <div key={j} className="flex items-center gap-2 sm:gap-2.5 text-xs text-muted-foreground 
                  p-2 rounded-lg bg-secondary/40 border border-border/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-primary flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 ml-0 sm:ml-14">
            {project.tech.map((t) => (
              <span key={t} className="tech-tag text-[10px]">{t}</span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ProjectsModule;
