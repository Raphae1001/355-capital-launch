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
        "metallic-border",
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
          className="absolute left-0 right-0 h-[2px] z-10 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, #0284C7, #38BDF8, #0284C7, transparent)",
            boxShadow: "0 0 30px 6px rgba(2, 132, 199, 0.9)",
          }}
        />
      )}
      {children}
    </motion.div>
  );
};

export default GlassCard;
