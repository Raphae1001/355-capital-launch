import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";
import { Eye, BarChart3, Handshake } from "lucide-react";

const benefits = [
  { icon: Eye, title: "Portfolio visibility", desc: "Access to portfolio metrics and company updates." },
  { icon: BarChart3, title: "Performance reporting", desc: "Institutional-grade quarterly reports with full transparency." },
  { icon: Handshake, title: "Co-investment opportunities", desc: "Direct access to follow-on rounds in our highest-conviction positions." },
];

const InvestorsSection = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <p className="text-xs font-mono-data tracking-[0.3em] uppercase text-primary mb-4">For Investors</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Built for investors</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6 mt-16">
        {benefits.map((b, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <GlassCard className="p-8 h-full">
              <b.icon className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default InvestorsSection;
