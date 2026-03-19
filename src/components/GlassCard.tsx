import { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  breathe?: boolean;
}

const GlassCard = ({ children, className, breathe = false }: GlassCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative rounded-xl overflow-hidden",
        "bg-card/60 backdrop-blur-xl",
        "border border-white/[0.08]",
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5",
        breathe && "animate-breathe-border",
        className
      )}
    >
      {/* Scan beam on hover */}
      {hovered && (
        <motion.div
          initial={{ top: "-4px" }}
          animate={{ top: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute left-0 right-0 h-[1px] z-10 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(160 70% 45% / 0.4), transparent)",
            boxShadow: "0 0 12px 2px hsl(160 70% 45% / 0.15)",
          }}
        />
      )}
      {children}
    </motion.div>
  );
};

export default GlassCard;
