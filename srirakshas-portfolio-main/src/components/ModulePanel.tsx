import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ReactNode } from "react";

interface ModulePanelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  moduleNum: string;
  children: ReactNode;
}

const ModulePanel = ({ isOpen, onClose, title, moduleNum, children }: ModulePanelProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-2xl bg-card border-l border-border z-50 
              overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border p-6 flex items-center justify-between z-10">
              <div>
                <div className="font-mono text-xs text-primary/60 mb-1">MODULE {moduleNum}</div>
                <h2 className="text-xl font-bold text-foreground">{title}</h2>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-md border border-border flex items-center justify-center
                  hover:border-primary/40 hover:bg-secondary transition-all duration-200"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {children}
            </div>

            {/* Top glow line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModulePanel;
