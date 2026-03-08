import { Briefcase } from "lucide-react";
import { useState } from "react";
import internCodsoft from "@/assets/intern-codsoft.png";
import internMist from "@/assets/intern-mist.jpeg";

const internships = [
  {
    role: "Java Programming Intern",
    org: "CodSoft",
    type: "Virtual Internship",
    duration: "1 Month",
    details: [
      "Focused on core Java programming concepts",
      "Built mini projects and practiced problem-solving using Java",
    ],
    tech: ["Java", "OOP"],
    image: internCodsoft,
  },
  {
    role: "Web Development Intern",
    org: "Mist Software Solutions Pvt. Ltd.",
    type: "Onsite Internship",
    duration: "1 Month",
    details: [
      "Gained practical experience in frontend and backend development",
      "Worked with HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL",
    ],
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    image: internMist,
  },
];

const InternshipModule = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="space-y-4 sm:space-y-5">
      {internships.map((intern, i) => (
        <div key={i}>
          <button
            onClick={() => setExpanded(expanded === i ? null : i)}
            className="exp-card group w-full text-left cursor-pointer"
          >
            <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 
                border border-primary/20 flex items-center justify-center flex-shrink-0
                group-hover:from-primary/25 group-hover:to-accent/15 transition-all duration-300">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm text-foreground">{intern.role}</h3>
                <p className="text-xs text-muted-foreground mt-0.5 break-words">{intern.org} — {intern.type}</p>
                <span className="inline-block mt-1 font-mono text-[10px] text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/15">
                  {intern.duration}
                </span>
              </div>
            </div>
            <ul className="space-y-2 mb-4 ml-0 sm:ml-14">
              {intern.details.map((d, j) => (
                <li key={j} className="text-xs text-muted-foreground flex items-start gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 ml-0 sm:ml-14 mb-2">
              {intern.tech.map((t) => (
                <span key={t} className="tech-tag text-[10px]">{t}</span>
              ))}
            </div>
            <span className="text-[10px] font-mono text-primary/50 ml-0 sm:ml-14">
              {expanded === i ? "▾ Hide certificate" : "▸ View certificate"}
            </span>
          </button>
          {expanded === i && (
            <div className="mt-2 rounded-xl border border-border overflow-hidden bg-card">
              <img src={intern.image} alt={`${intern.role} certificate`} className="w-full h-auto" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InternshipModule;
