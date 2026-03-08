import { Globe } from "lucide-react";

const languages = ["Tamil", "English", "Kannada"];

const LanguagesModule = () => (
  <div className="flex flex-wrap gap-4">
    {languages.map((lang) => (
      <div key={lang} className="exp-card flex items-center gap-3 px-6 group">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent/15 to-primary/10 
          border border-accent/20 flex items-center justify-center flex-shrink-0">
          <Globe className="w-4 h-4 text-accent" />
        </div>
        <span className="text-sm font-medium text-foreground">{lang}</span>
      </div>
    ))}
  </div>
);

export default LanguagesModule;
