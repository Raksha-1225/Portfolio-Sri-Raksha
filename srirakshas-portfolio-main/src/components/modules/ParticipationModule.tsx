import { Trophy } from "lucide-react";

const activities = [
  {
    title: "Hackathon — KPR Institute of Engineering and Technology",
    description:
      "Participated in a hackathon organized by KPR Institute of Engineering and Technology. Gained hands-on experience in teamwork, problem-solving, and analytical thinking.",
    tags: ["Teamwork", "Problem Solving", "Analysis"],
  },
  {
    title: "Paper Presentation — Kongu Engineering College",
    description:
      "Presented the concept of the Resume Analyser and Skill Gap Detector project. Demonstrated the ability to communicate technical ideas effectively and received valuable feedback.",
    tags: ["Communication", "Presentation Skills", "Technical Speaking"],
  },
];

const ParticipationModule = () => (
  <div className="space-y-4">
    {activities.map((activity, i) => (
      <div key={i} className="exp-card group">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 
            border border-primary/20 flex items-center justify-center flex-shrink-0
            group-hover:shadow-[0_0_12px_hsl(var(--primary)/0.15)] transition-all duration-300">
            <Trophy className="w-4 h-4 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-foreground">{activity.title}</h3>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              {activity.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {activity.tags.map((tag) => (
                <span key={tag} className="tech-tag text-[10px]">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ParticipationModule;
