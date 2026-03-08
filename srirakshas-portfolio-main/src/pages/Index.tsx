import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import AboutModule from "@/components/modules/AboutModule";
import EducationModule from "@/components/modules/EducationModule";
import SkillsModule from "@/components/modules/SkillsModule";
import InternshipModule from "@/components/modules/InternshipModule";
import ProjectsModule from "@/components/modules/ProjectsModule";
import CertificationsModule from "@/components/modules/CertificationsModule";
import ParticipationModule from "@/components/modules/ParticipationModule";
import InterestsModule from "@/components/modules/InterestsModule";
import LanguagesModule from "@/components/modules/LanguagesModule";
import ContactModule from "@/components/modules/ContactModule";
import {
  User, GraduationCap, Code2, Briefcase, FolderGit2,
  Award, Trophy, Cpu, Globe, Mail
} from "lucide-react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

const modules: { title: string; icon: LucideIcon; content: ReactNode }[] = [
  { title: "About Me", icon: User, content: <AboutModule /> },
  { title: "Education", icon: GraduationCap, content: <EducationModule /> },
  { title: "Skills", icon: Code2, content: <SkillsModule /> },
  { title: "Internship", icon: Briefcase, content: <InternshipModule /> },
  { title: "Projects", icon: FolderGit2, content: <ProjectsModule /> },
  { title: "Certifications", icon: Award, content: <CertificationsModule /> },
  { title: "Participation", icon: Trophy, content: <ParticipationModule /> },
  { title: "Areas of Interest", icon: Cpu, content: <InterestsModule /> },
  { title: "Languages Known", icon: Globe, content: <LanguagesModule /> },
  { title: "Contact", icon: Mail, content: <ContactModule /> },
];

const Index = () => {
  const modulesRef = useRef<HTMLDivElement>(null);

  const scrollToModules = () => {
    modulesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onViewModules={scrollToModules} />

      <div ref={modulesRef} className="grid-bg relative overflow-hidden">
        {/* Decorative orbs */}
        <div className="orb orb-primary w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] top-[20%] -right-24 sm:-right-48 opacity-50" />
        <div className="orb orb-accent w-[180px] h-[180px] sm:w-[350px] sm:h-[350px] top-[50%] -left-24 sm:-left-48 opacity-50" />
        <div className="orb orb-warm w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] top-[80%] right-1/4 opacity-30" />

        {/* Section header */}
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 pt-16 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="font-mono text-[10px] sm:text-xs text-primary/50 mb-2 sm:mb-3 tracking-widest">
              ── SYSTEM :: SRI_RAKSHA_PORTFOLIO ──
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 sm:mb-3">
              System <span className="gradient-text">Modules</span>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
              Explore each module to learn about my skills, experience, and journey in technology.
            </p>
            <div className="mt-4 sm:mt-6 flex justify-center">
              <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Module list */}
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 pb-16 sm:pb-20 relative">
          {/* Vertical connecting line - hidden on mobile */}
          <div className="absolute left-[calc(1rem+19px)] sm:left-[calc(1.5rem+19px)] top-0 bottom-20 w-px bg-gradient-to-b from-primary/20 via-border to-transparent hidden lg:block" />

          <div className="space-y-8 sm:space-y-12">
            {modules.map((mod, i) => {
              const Icon = mod.icon;
              const moduleNum = String(i + 1).padStart(2, "0");
              return (
                <motion.section
                  key={i}
                  initial={{ opacity: 0, y: 50, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="module-section relative"
                >
                  {/* Module header */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 
                        border border-primary/20 flex items-center justify-center flex-shrink-0 
                        relative z-10 backdrop-blur-sm"
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="font-mono text-[9px] sm:text-[10px] text-primary/40 tracking-wider">
                        MODULE {moduleNum} <span className="hidden sm:inline">─────</span>
                      </div>
                      <h2 className="text-base sm:text-lg font-bold text-foreground truncate">{mod.title}</h2>
                    </div>
                  </motion.div>

                  {/* Module content card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="sm:ml-14"
                  >
                    <div className="module-content">
                      {mod.content}
                    </div>
                  </motion.div>
                </motion.section>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 sm:py-10 px-4 sm:px-6 border-t border-border">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="font-mono text-[9px] sm:text-xs text-muted-foreground/40">
            ── END OF SYSTEM MODULES ──
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
