import ScrollReveal from "./ScrollReveal";

const metrics = [
  { value: "58+", label: "Investments", note: "" },
  { value: "36 months", label: "Time to Liquidity (TTL)", note: "" },
  { value: "26+", label: "Partial / Total Exits", note: "" },
  { value: "12+", label: "Secondary deals", note: "" },
];

const TrackRecordSection = () => (
  <section className="section-padding bg-card/30">
    <div className="max-w-7xl mx-auto text-center">
      <ScrollReveal>
        <p className="text-xs font-mono-data tracking-[0.3em] uppercase text-primary mb-4">Track Record</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Portfolio Overview
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {metrics.map((m, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="glass rounded-xl p-8 hover-lift">
              <div className="font-mono-data text-4xl md:text-5xl font-bold text-primary">
                {m.value}
              </div>
              <div className="text-sm text-muted-foreground mt-3 uppercase tracking-widest">
                {m.label}
              </div>
              {m.note ? (
                <div className="text-[11px] text-muted-foreground mt-1 font-mono-data">{m.note}</div>
              ) : null}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TrackRecordSection;
