import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";
import { Shield, Cpu, Rocket, Zap, Crosshair, GitBranch, Repeat } from "lucide-react";

const sectors = [
  { icon: Shield, name: "Defense" },
  { icon: Crosshair, name: "Cybersecurity" },
  { icon: Cpu, name: "AI" },
  { icon: Rocket, name: "Space" },
  { icon: Zap, name: "Energy" },
];

const StrategySection = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <ScrollReveal>
            <p className="text-xs font-mono-data tracking-[0.3em] uppercase text-primary mb-4">Strategy</p>
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
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Early conviction bets with hands-on support to accelerate growth.
                </p>
              </GlassCard>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <GlassCard className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <Repeat className="w-5 h-5 text-amber-500" />
                  <h3 className="font-bold text-lg">Opportunistic Secondary</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  De-risked entry into proven winners at attractive valuations.
                </p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default StrategySection;
