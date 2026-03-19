import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Lock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "65+", label: "Investments" },
  { value: "10", label: "Unicorns" },
  { value: "26", label: "Exits" },
];

const verticals = ["Defense", "Cybersecurity", "AI", "Space"];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    const enter = () => setIsHovering(true);
    const leave = () => setIsHovering(false);

    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseenter", enter);
    section.addEventListener("mouseleave", leave);
    return () => {
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseenter", enter);
      section.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center section-padding pt-32 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Mouse spotlight */}
      {isHovering && (
        <div
          className="absolute pointer-events-none z-[1] transition-opacity duration-300"
          style={{
            left: mousePos.x - 200,
            top: mousePos.y - 200,
            width: 400,
            height: 400,
            background: "radial-gradient(circle, hsl(160 70% 45% / 0.06) 0%, transparent 70%)",
          }}
        />
      )}

      {/* Accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] animate-pulse-glow" />

      <div className="relative max-w-7xl mx-auto w-full z-[2]">
        {/* Verticals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          {verticals.map((v, i) => (
            <span key={v} className="flex items-center gap-3 text-xs font-mono-data tracking-widest uppercase text-primary/80">
              {v}
              {i < verticals.length - 1 && <span className="w-1 h-1 rounded-full bg-primary/40" />}
            </span>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight max-w-5xl"
        >
          Access to exceptional deals.{" "}
          <span className="text-muted-foreground">Risk, actively managed.</span>{" "}
          <span className="gradient-text">Returns, consistently delivered.</span>
        </motion.h1>

        {/* Value prop */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          A venture fund combining proprietary deal flow, active risk management, and proven performance.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <Link
            to="/strategy"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:brightness-110 transition-all duration-200"
          >
            Submit a company <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-border text-foreground font-medium text-sm hover:bg-secondary transition-all duration-200"
          >
            <Lock className="w-4 h-4" /> Investor access
          </Link>
        </motion.div>

        {/* Stats — staggered */}
        <div className="grid grid-cols-3 gap-4 mt-20 max-w-xl">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 + i * 0.15, ease: "easeOut" }}
              className="glass rounded-lg p-6 text-center hover-lift"
            >
              <div className="font-mono-data text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
