import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";
import { ShieldCheck, TrendingDown, Repeat } from "lucide-react";

const strategies = [
  { icon: ShieldCheck, title: "Controlled allocation", desc: "3–7% per position, disciplined from day one." },
  { icon: TrendingDown, title: "Early partial exits", desc: "De-risk at inflection points to lock in gains." },
  { icon: Repeat, title: "Secondary-driven liquidity", desc: "Generate returns without waiting for IPO." },
];

const RiskSection = () => (
  <section className="section-padding bg-card/30">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <p className="text-xs font-mono-data tracking-[0.3em] uppercase text-primary mb-4">Risk Management</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl">
          We actively manage risk from day one
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6 mt-16">
        {strategies.map((s, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <GlassCard className="p-8 h-full">
              <s.icon className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default RiskSection;
