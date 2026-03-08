import { Award } from "lucide-react";
import { useState } from "react";
import certCloud from "@/assets/cert-cloud.png";
import certJavaFundamentals from "@/assets/cert-java-fundamentals.png";
import certJavaOops from "@/assets/cert-java-oops.png";

const certifications = [
  { title: "Java Fundamentals", org: "Uniq Technologies", date: "June 2025", image: certJavaFundamentals },
  { title: "Java OOPS", org: "Uniq Technologies", date: "August 2025", image: certJavaOops },
  { title: "Cloud Computing", org: "NPTEL (Elite Certificate — 73%)", date: "Jul–Oct 2025", image: certCloud },
];

const CertificationsModule = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {certifications.map((cert, i) => (
        <div key={i}>
          <button
            onClick={() => setExpanded(expanded === i ? null : i)}
            className="exp-card flex items-start gap-3 sm:gap-4 group w-full text-left cursor-pointer"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 
              border border-primary/20 flex items-center justify-center flex-shrink-0
              group-hover:shadow-[0_0_12px_hsl(var(--primary)/0.15)] transition-all duration-300">
              <Award className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <h3 className="text-sm font-semibold text-foreground">{cert.title}</h3>
                <span className="font-mono text-[10px] text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/15">
                  {cert.date}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{cert.org}</p>
              <span className="text-[10px] font-mono text-primary/50 mt-1 inline-block">
                {expanded === i ? "▾ Hide certificate" : "▸ View certificate"}
              </span>
            </div>
          </button>
          {expanded === i && (
            <div className="mt-2 rounded-xl border border-border overflow-hidden bg-card">
              <img src={cert.image} alt={`${cert.title} certificate`} className="w-full h-auto" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CertificationsModule;
