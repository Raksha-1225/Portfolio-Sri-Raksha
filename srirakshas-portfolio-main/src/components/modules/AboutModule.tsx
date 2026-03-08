const AboutModule = () => (
  <div className="space-y-5">
    <p className="text-muted-foreground leading-relaxed text-sm">
      A motivated Computer Science Engineering student with a strong curiosity for technology and a 
      growing interest in web development. Possessing hands-on experience through academic projects 
      and internships, with a clear understanding of how theoretical concepts translate into practical applications.
    </p>
    <p className="text-muted-foreground leading-relaxed text-sm">
      Quick to learn, adaptable, and committed to continuous improvement. Seeking an opportunity to 
      contribute effectively within a dynamic team environment, gain exposure to real-world challenges, 
      and develop professionally while building a successful career in the technology domain.
    </p>
    <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-secondary/80 to-secondary/40 border border-border backdrop-blur-sm">
      <div className="font-mono text-[10px] text-primary/60 mb-3 tracking-wider">// QUICK_FACTS</div>
      <ul className="space-y-3 text-sm text-muted-foreground">
        {[
          "Based in Thudiyalur, Coimbatore",
          "B.E. Computer Science & Engineering — CGPA: 8.6",
          "Passionate about Frontend & Full Stack Development",
        ].map((fact, i) => (
          <li key={i} className="flex items-center gap-3 group">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent 
              group-hover:shadow-[0_0_8px_hsl(var(--primary)/0.5)] transition-shadow" />
            {fact}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default AboutModule;
