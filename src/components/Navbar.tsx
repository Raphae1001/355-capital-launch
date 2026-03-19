import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Strategy", href: "/strategy" },
  { label: "Track Record", href: "/track-record" },
  { label: "Insights", href: "/insights" },
  { label: "Team", href: "/team" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? "glass shadow-lg shadow-background/50" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-12 h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 relative z-[101]">
          <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground whitespace-nowrap">
            355<span className="text-primary">.</span>
          </span>
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground whitespace-nowrap mt-1">
            Capital
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 min-h-[44px] flex items-center"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/login"
          className="hidden lg:flex text-sm font-medium px-5 h-11 items-center justify-center rounded-md bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-200"
        >
          Investor Login
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-[101] text-foreground p-2 -mr-2 flex items-center justify-center min-h-[44px] min-w-[44px]"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-zinc-950 lg:hidden flex flex-col pt-24 px-6 pb-6"
          >
            <div className="flex flex-col gap-6 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-2xl font-bold text-foreground hover:text-primary transition-colors duration-200 py-2 border-b border-border/50"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-auto">
              <Link
                to="/login"
                className="flex items-center justify-center w-full text-base font-medium min-h-[56px] rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
              >
                Investor Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
