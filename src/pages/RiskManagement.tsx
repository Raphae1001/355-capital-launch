import { PageTransition } from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Activity,
  DoorOpen,
  Droplets,
  Gauge,
  Handshake,
  Landmark,
  Network,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

const riskPillars = [
  {
    id: "01",
    title: "Due Diligence",
    icon: ShieldCheck,
    description:
      "Institutional underwriting across team, product, legal structure, market timing, and downside scenarios before every investment decision.",
  },
  {
    id: "02",
    title: "Portfolio Diversification",
    icon: Network,
    description:
      "Exposure is intentionally balanced across sectors, stages, vintages, and geographies to reduce concentration risk.",
  },
  {
    id: "03",
    title: "Investment Parameters",
    icon: SlidersHorizontal,
    description:
      "Clear sizing, ownership, valuation, and reserve rules enforce discipline before initial entries and follow-on decisions.",
  },
  {
    id: "04",
    title: "Active Monitoring",
    icon: Activity,
    description:
      "Portfolio oversight combines KPI tracking, financing signals, and regular governance touchpoints to identify variance early.",
  },
  {
    id: "05",
    title: "Exit Strategy",
    icon: DoorOpen,
    description:
      "Liquidity planning begins at entry, with defined paths for partial exits, secondaries, and disciplined capital recycling.",
  },
  {
    id: "06",
    title: "Stress Testing",
    icon: Gauge,
    description:
      "Every core assumption is pressure-tested against slower growth, tighter capital markets, and adverse macro environments.",
  },
  {
    id: "07",
    title: "Regulatory Compliance",
    icon: Landmark,
    description:
      "Cross-border compliance, fund governance, and documentation standards are maintained to protect execution integrity.",
  },
  {
    id: "08",
    title: "Counterparty Risk",
    icon: Handshake,
    description:
      "Banks, intermediaries, co-investors, and other counterparties are screened carefully before capital is committed.",
  },
  {
    id: "09",
    title: "Liquidity Management",
    icon: Droplets,
    description:
      "Cash reserves, follow-on pacing, and distribution timing are managed to preserve flexibility across the life of the fund.",
  },
] as const;

export default function RiskManagement() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
        <Navbar />

        <main className="pt-32 pb-24">
          <section className="max-w-7xl mx-auto px-6 mb-24">
            <p className="font-mono-data text-primary mb-4 tracking-widest uppercase text-sm">/Risk_Management_02</p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-zinc-100">
              RISK MANAGEMENT FRAMEWORK
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
              A disciplined framework built to underwrite downside, preserve optionality, and maintain control from underwriting through liquidity.
            </p>
          </section>

          <section className="max-w-7xl mx-auto px-6 mb-24">
            <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-zinc-800 pb-4">01. Framework Pillars</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {riskPillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="group relative overflow-hidden rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-8 hover:border-primary/30 hover:bg-zinc-900/60 transition-colors"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-primary/5 blur-[50px] pointer-events-none" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4 mb-8">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                        <pillar.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="font-mono-data text-xs text-zinc-600">{pillar.id}</span>
                    </div>

                    <h3 className="text-xl font-bold text-zinc-100 mb-4">{pillar.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{pillar.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}
