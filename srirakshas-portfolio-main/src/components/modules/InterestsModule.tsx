import { Cpu, ArrowRight } from "lucide-react";

const interests = ["Frontend Development", "Full Stack Development", "Java Development"];

const InterestsModule = () => (
  <div className="space-y-3">
    {interests.map((interest, i) => (
      <div key={i} className="exp-card flex items-center gap-4 group">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/15 to-accent/10 
          border border-primary/20 flex items-center justify-center flex-shrink-0">
          <Cpu className="w-4 h-4 text-primary" />
        </div>
        <span className="text-sm text-foreground flex-1">{interest}</span>
        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
      </div>
    ))}
  </div>
);

export default InterestsModule;
