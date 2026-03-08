import { motion } from "framer-motion";
import profileImage from "@/assets/profile.png";
import { Terminal, Download, ChevronDown, Github, Linkedin } from "lucide-react";

const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/20 hidden sm:block"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2], scale: [1, 1.3, 1] }}
    transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const HeroSection = ({ onViewModules }: { onViewModules: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden px-4 sm:px-6">
      {/* Gradient orbs - smaller on mobile */}
      <div className="orb orb-primary w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] -top-20 sm:-top-40 -left-20 sm:-left-40 float" />
      <div className="orb orb-accent w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] top-20 -right-20 sm:-right-40 float" style={{ animationDelay: '2s' }} />
      <div className="orb orb-warm w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bottom-20 left-1/4 float" style={{ animationDelay: '4s' }} />

      <div className="absolute inset-0 hero-gradient" />

      {/* Floating particles - hidden on small screens */}
      <FloatingParticle delay={0} x="15%" y="20%" size={4} />
      <FloatingParticle delay={1} x="80%" y="30%" size={3} />
      <FloatingParticle delay={2} x="60%" y="70%" size={5} />
      <FloatingParticle delay={0.5} x="25%" y="65%" size={3} />
      <FloatingParticle delay={1.5} x="70%" y="15%" size={4} />

      {/* Corner decorations - hidden on small screens */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 font-mono text-[10px] sm:text-xs text-muted-foreground/60 flex items-center gap-2">
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-primary">SYS</span><span className="hidden sm:inline"> :: PORTFOLIO_v1.0</span>
      </div>
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 font-mono text-[10px] sm:text-xs text-muted-foreground/60 flex items-center gap-2">
        <span className="hidden sm:inline"><span className="text-primary">STATUS</span> :: </span>ONLINE
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
      </div>

      {/* Corner brackets - hidden on mobile */}
      <div className="hidden md:block absolute top-16 left-6 w-12 h-12 border-l-2 border-t-2 border-primary/10 rounded-tl-lg" />
      <div className="hidden md:block absolute top-16 right-6 w-12 h-12 border-r-2 border-t-2 border-primary/10 rounded-tr-lg" />
      <div className="hidden md:block absolute bottom-16 left-6 w-12 h-12 border-l-2 border-b-2 border-primary/10 rounded-bl-lg" />
      <div className="hidden md:block absolute bottom-16 right-6 w-12 h-12 border-r-2 border-b-2 border-primary/10 rounded-br-lg" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-full profile-ring spin-slow opacity-60" />
            <div className="w-36 h-36 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-background glow-primary relative z-10">
              <img src={profileImage} alt="Sri Raksha S" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -inset-4 rounded-full border border-primary/10 pulse-ring" />
            <div className="absolute -inset-8 rounded-full border border-primary/5 pulse-ring hidden sm:block" style={{ animationDelay: '1s' }} />
            <div className="absolute -inset-12 rounded-full border border-accent/5 pulse-ring hidden md:block" style={{ animationDelay: '2s' }} />
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 z-20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-card border border-primary/30 
                font-mono text-[8px] sm:text-[10px] text-primary flex items-center gap-1 sm:gap-1.5 glow-border"
            >
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary animate-pulse" />
              ACTIVE
            </motion.div>
          </motion.div>

          {/* Text content */}
          <div className="text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-mono text-xs sm:text-sm text-primary/80 mb-3 sm:mb-4 flex items-center gap-2 justify-center lg:justify-start"
            >
              <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="truncate">~/sri-raksha-portfolio</span>
              <span className="cursor-blink text-accent">▊</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-3 sm:mb-4"
            >
              <span className="text-foreground">Sri Raksha</span>{" "}
              <span className="gradient-text">S</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start mb-4 sm:mb-6"
            >
              <div className="h-px w-4 sm:w-8 bg-gradient-to-r from-primary to-transparent" />
              <p className="font-mono text-accent text-xs sm:text-sm lg:text-base">
                Computer Science Engineering Student
              </p>
              <div className="h-px w-4 sm:w-8 bg-gradient-to-l from-primary to-transparent hidden lg:block" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-xs sm:text-sm lg:text-base max-w-lg mx-auto lg:mx-0"
            >
              A motivated Computer Science Engineering student with a strong curiosity for technology 
              and a growing interest in web development. Quick to learn, adaptable, and committed to 
              continuous improvement.
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-3 justify-center lg:justify-start mb-6 sm:mb-8"
            >
              <a href="https://github.com/Raksha-1225" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-border bg-secondary/50 flex items-center justify-center
                  hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_0_15px_hsl(var(--primary)/0.15)] transition-all duration-300">
                <Github className="w-4 h-4 text-muted-foreground" />
              </a>
              <a href="https://www.linkedin.com/in/sri-raksha-s-65956b321" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-border bg-secondary/50 flex items-center justify-center
                  hover:border-accent/40 hover:bg-accent/10 hover:shadow-[0_0_15px_hsl(var(--accent)/0.15)] transition-all duration-300">
                <Linkedin className="w-4 h-4 text-muted-foreground" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={onViewModules}
                className="group px-5 sm:px-7 py-3 sm:py-3.5 bg-primary text-primary-foreground font-mono text-xs sm:text-sm rounded-lg 
                  hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300 
                  flex items-center justify-center gap-2 relative overflow-hidden"
              >
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                View Modules
              </button>
              <a
                href="#contact"
                className="px-5 sm:px-7 py-3 sm:py-3.5 border border-border text-foreground font-mono text-xs sm:text-sm rounded-lg 
                  hover:border-primary/40 hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)] transition-all duration-300 
                  flex items-center justify-center gap-2 bg-card/30 backdrop-blur-sm"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="font-mono text-[8px] sm:text-[10px] text-muted-foreground/40">SCROLL</span>
        <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary/40" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
