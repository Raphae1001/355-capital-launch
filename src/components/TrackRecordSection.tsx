import ScrollReveal from "./ScrollReveal";

const metrics = [
  { value: "65+", label: "Total Investments" },
  { value: "10", label: "Unicorns" },
  { value: "26", label: "Exits" },
  { value: "18", label: "Secondary Exits" },
];

const TrackRecordSection = () => (
  <section className="section-padding bg-card/30">
    <div className="max-w-7xl mx-auto text-center">
      <ScrollReveal>
        <p className="text-xs font-mono-data tracking-[0.3em] uppercase text-primary mb-4">Track Record</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Performance you can measure
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        {metrics.map((m, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="glass rounded-xl p-8 hover-lift">
              <div className="font-mono-data text-4xl md:text-5xl font-bold text-primary">
                {m.value}
              </div>
              <div className="text-sm text-muted-foreground mt-3 uppercase tracking-widest">
                {m.label}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TrackRecordSection;
