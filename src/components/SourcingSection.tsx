import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";
import { Radar, Users, Globe } from "lucide-react";

const items = [
  { icon: Radar, text: "15+ deals reviewed per week" },
  { icon: Users, text: "Strong co-investor network" },
  { icon: Globe, text: "US / Israel / R.O.W. ecosystems" },
];

const SourcingSection = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <p className="text-xs font-mono-data tracking-[0.3em] uppercase text-primary mb-4">Sourcing</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-xl">
          Access drives performance
        </h2>
        <p className="text-lg text-muted-foreground mt-6 max-w-lg">
          We see what others don't. Our unique sourcing engine surfaces exceptional opportunities before the market.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {items.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <GlassCard className="p-8 group">
              <item.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <p className="text-foreground font-medium text-lg">{item.text}</p>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default SourcingSection;
