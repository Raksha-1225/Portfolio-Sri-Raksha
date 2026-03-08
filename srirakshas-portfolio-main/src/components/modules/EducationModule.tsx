const educationData = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "Dr. N.G.P. Institute Of Technology",
    score: "CGPA: 8.6 (Upto 5th Sem)",
    period: "2023 — 2027",
    active: true,
  },
  {
    degree: "Higher Secondary Education",
    institution: "Amrita Vidyalayam",
    score: "86.8%",
    period: "Completed",
    active: false,
  },
  {
    degree: "Secondary School Education",
    institution: "Amrita Vidyalayam",
    score: "93.8%",
    period: "Completed",
    active: false,
  },
];

const EducationModule = () => (
  <div className="space-y-1">
    {educationData.map((edu, i) => (
      <div key={i} className="relative pl-8 pb-8 last:pb-0 group">
        {/* Timeline line */}
        {i < educationData.length - 1 && (
          <div className="absolute left-[7px] top-3 bottom-0 w-px bg-gradient-to-b from-primary/30 to-border" />
        )}
        {/* Timeline dot */}
        <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300
          ${edu.active 
            ? 'border-primary bg-primary/20 shadow-[0_0_10px_hsl(var(--primary)/0.4)]' 
            : 'border-border bg-card group-hover:border-primary/40'
          }`} 
        />
        
        <div className="exp-card">
          <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
            <h3 className="font-semibold text-sm text-foreground">{edu.degree}</h3>
            <span className={`font-mono text-[10px] px-2 py-0.5 rounded-md 
              ${edu.active 
                ? 'bg-primary/10 text-primary border border-primary/20' 
                : 'bg-secondary text-muted-foreground'
              }`}>
              {edu.period}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-2">{edu.institution}</p>
          <span className="inline-block px-3 py-1 rounded-lg text-xs font-mono bg-accent/10 text-accent border border-accent/20">
            {edu.score}
          </span>
        </div>
      </div>
    ))}
  </div>
);

export default EducationModule;
