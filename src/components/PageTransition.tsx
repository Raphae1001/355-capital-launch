import { motion } from "framer-motion";
import { ReactNode } from "react";

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

const pageTransition = {
  type: "tween" as const,
  ease: "anticipate" as const,
  duration: 0.4
};

export const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen w-full relative bg-background"
    >
      {children}
    </motion.div>
  );
};
