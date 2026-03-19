import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-16 px-6 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
      <div>
        <span className="text-xl font-bold tracking-tight">
          355<span className="text-primary">.</span>{" "}
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">Capital</span>
        </span>
        <p className="text-sm text-muted-foreground mt-4 max-w-xs leading-relaxed">
          Venture capital at the intersection of defense, cybersecurity, AI, and space.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-12">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Navigation</p>
          <div className="flex flex-col gap-2">
            <Link to="/strategy" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Strategy</Link>
            <Link to="/track-record" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Track Record</Link>
            <Link to="/team" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Team</Link>
            <Link to="/insights" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Insights</Link>
            <Link to="/login" className="text-sm text-foreground/70 hover:text-foreground transition-colors mt-2">Investor Login</Link>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Contact</p>
          <div className="flex flex-col gap-2">
            <a href="mailto:fs@355cap.com" className="text-sm font-mono-data text-foreground/70 hover:text-primary transition-colors">fs@355cap.com</a>
            <a href="mailto:bk@355cap.com" className="text-sm font-mono-data text-foreground/70 hover:text-primary transition-colors">bk@355cap.com</a>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} 355 Capital. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
