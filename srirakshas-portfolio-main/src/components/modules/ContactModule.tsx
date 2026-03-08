import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "sriraksha5555@gmail.com", href: "mailto:sriraksha5555@gmail.com" },
  { icon: Phone, label: "Phone", value: "9087327715", href: "tel:9087327715" },
  { icon: MapPin, label: "Location", value: "Thudiyalur, Coimbatore", href: null },
  { icon: Linkedin, label: "LinkedIn", value: "Sri Raksha S", href: "https://www.linkedin.com/in/sri-raksha-s-65956b321" },
  { icon: Github, label: "GitHub", value: "Raksha-1225", href: "https://github.com/Raksha-1225" },
];

const ContactModule = () => (
  <div className="space-y-3" id="contact">
    {contacts.map((c, i) => (
      <div key={i} className="exp-card flex items-center gap-3 sm:gap-4 group">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 
          border border-primary/20 flex items-center justify-center flex-shrink-0
          group-hover:shadow-[0_0_12px_hsl(var(--primary)/0.15)] transition-all duration-300">
          <c.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
        </div>
        <div className="min-w-0">
          <div className="font-mono text-[9px] sm:text-[10px] text-muted-foreground/60 tracking-wider">{c.label.toUpperCase()}</div>
          {c.href ? (
            <a href={c.href} target="_blank" rel="noopener noreferrer" 
              className="text-xs sm:text-sm text-foreground hover:text-primary transition-colors duration-300 break-all">
              {c.value}
            </a>
          ) : (
            <span className="text-xs sm:text-sm text-foreground">{c.value}</span>
          )}
        </div>
      </div>
    ))}
  </div>
);

export default ContactModule;
