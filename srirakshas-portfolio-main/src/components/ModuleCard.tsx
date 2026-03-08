import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ModuleCardProps {
  index: number;
  title: string;
  icon: LucideIcon;
  description: string;
  onClick: () => void;
}

const ModuleCard = ({ index, title, icon: Icon, description, onClick }: ModuleCardProps) => {
  const moduleNum = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <button
        onClick={onClick}
        className="module-card w-full text-left p-5 group cursor-pointer"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-md bg-secondary flex items-center justify-center
            group-hover:bg-primary/10 transition-colors duration-300">
            <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-mono text-[10px] text-primary/60 mb-1">
              MODULE {moduleNum}
            </div>
            <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
              {title}
            </h3>
            <p className="text-xs text-muted-foreground line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </button>
    </motion.div>
  );
};

export default ModuleCard;
