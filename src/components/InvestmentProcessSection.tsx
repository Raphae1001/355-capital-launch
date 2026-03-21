import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";
import { Shield, Lock, Cpu, Battery, Rocket, ArrowRightLeft, GitBranch, Repeat } from "lucide-react";

const sectors = [
  { icon: Shield, name: "Defense" },
  { icon: Lock, name: "Cyber security" },
  { icon: Cpu, name: "AI & Robotics" },
  { icon: Battery, name: "Energy" },
  { icon: Rocket, name: "Aerospace" },
  { icon: ArrowRightLeft, name: "Secondary Market" },
];

const InvestmentProcessSection = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <ScrollReveal>
            <p className="text-xs font-mono-data tracking-[0.3em] uppercase text-primary mb-4">Investment Process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">What we invest in</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Deep-tech sectors where domain expertise creates asymmetric returns.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {sectors.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <GlassCard breathe className="p-5 flex flex-col items-center gap-3">
                  <s.icon className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium">{s.name}</span>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div>
          <ScrollReveal delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-8 lg:mt-0">How we invest</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              A hybrid model blending primary and secondary positions for optimal risk-adjusted returns.
            </p>
          </ScrollReveal>
          <div className="mt-10 space-y-4">
            <ScrollReveal delay={0.3}>
              <GlassCard className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <GitBranch className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-lg">Primary: Pre-seed & Series A</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-3"><span className="mt-1.5 w-2 h-2 rounded-full bg-primary" /> Unanimous voting of the investment committee</li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 w-2 h-2 rounded-full bg-primary" /> Potential: $1B+ valuation</li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 w-2 h-2 rounded-full bg-primary" /> Strong founders & execution teams</li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 w-2 h-2 rounded-full bg-primary" /> Co-invest alongside top-tier venture capital firms</li>
                </ul>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <GlassCard className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <Repeat className="w-5 h-5 text-zinc-300" />
                  <h3 className="font-bold text-lg">Opportunistic Secondary</h3>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-3"><span className="mt-1.5 w-2 h-2 rounded-full bg-zinc-300" /> Active risk management</li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 w-2 h-2 rounded-full bg-zinc-300" /> Partial exits starting at Series A / B</li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 w-2 h-2 rounded-full bg-zinc-300" /> Greater portfolio liquidity</li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 w-2 h-2 rounded-full bg-zinc-300" /> Enhanced long-term performance</li>
                </ul>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InvestmentProcessSection;
