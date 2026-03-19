import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Strategy", href: "/strategy" },
  { label: "Track Record", href: "/track-record" },
  { label: "Insights", href: "#insights" },
  { label: "Team", href: "#team" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg shadow-background/50" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
            355<span className="text-primary">.</span>
          </span>
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground hidden sm:inline">
            Capital
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/login"
          className="text-sm font-medium px-5 py-2.5 rounded-md bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-200"
        >
          Investor Login
        </Link>
      </nav>
    </motion.header>
  );
};

export default Navbar;
