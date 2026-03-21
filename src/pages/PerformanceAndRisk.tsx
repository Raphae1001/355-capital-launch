import { PageTransition } from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowLeft,
  CheckCircle2,
  Clock,
  DoorOpen,
  Droplets,
  Gauge,
  Handshake,
  Landmark,
  Network,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  Trophy,
} from "lucide-react";
import { CountUpNumber } from "@/components/CountUpNumber";

const activeDeals = [
  { name: "[Undisclosed AI Infra]", status: "Not yet", irr: "x4.2", type: "Primary" },
  { name: "Medadom", status: "Not yet", irr: "x11", type: "Primary" },
  { name: "Mega-biopharma", status: "Not yet", irr: "x7", type: "Primary" },
  { name: "[Defense Systems Alpha]", status: "Not yet", irr: "TBD", type: "Primary" },
  { name: "[SpaceTech Orbital]", status: "Not yet", irr: "x15", type: "Primary" },
  { name: "[CyberSec Secondary]", status: "Not yet", irr: "TBD", type: "Secondary" },
  { name: "Yubo", status: "Not yet", irr: "x34", type: "Primary" },
  { name: "Gorgias", status: "Not yet", irr: "x42", type: "Primary" },
  { name: "Shade", status: "Not yet", irr: "x5", type: "Primary" },
  { name: "Helios", status: "Not yet", irr: "TBD", type: "Primary" },
];

const historicalExits = [
  { name: "Global Roaming", status: "IPO - 2007", irr: "x20", type: "Primary" },
  { name: "Weebly", status: "2018", irr: "x25", type: "Primary" },
  { name: "Pixowl", status: "2018", irr: "x12", type: "Primary" },
  { name: "Open Garden", status: "2016", irr: "x31", type: "Primary" },
  { name: "[SaaS Enterprise]", status: "Secondary Exit", irr: "x3.5", type: "Secondary" },
  { name: "[Energy Grid Beta]", status: "Acquired", irr: "x2.1", type: "Primary" },
];

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

export default function PerformanceAndRisk() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
        <Navbar />

        <main className="pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Command Center
            </Link>
          </div>

          <section className="max-w-7xl mx-auto px-6 mb-24">
            <p className="font-mono-data text-primary mb-4 tracking-widest uppercase text-sm">/Performance_And_Risk_02</p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-zinc-100">
              TRACK RECORD
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed mb-16">
              Proven performance and disciplined downside management presented in a single institutional view.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              <div className="border border-zinc-800/60 bg-zinc-900/30 p-6 rounded-xl">
                <Target className="w-6 h-6 text-primary mb-4" />
                <CountUpNumber end={65} suffix="+" duration={2.5} className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2" />
                <p className="text-zinc-500 text-sm font-mono-data uppercase">Investments</p>
              </div>
              <div className="border border-zinc-800/60 bg-zinc-900/30 p-6 rounded-xl">
                <Trophy className="w-6 h-6 text-primary mb-4" />
                <CountUpNumber end={10} duration={2.5} className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2" />
                <p className="text-zinc-500 text-sm font-mono-data uppercase">Unicorns</p>
              </div>
              <div className="border border-zinc-800/60 bg-zinc-900/30 p-6 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-primary mb-4" />
                <CountUpNumber end={26} duration={2.5} className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2" />
                <p className="text-zinc-500 text-sm font-mono-data uppercase">Total Exits</p>
              </div>
              <div className="border border-zinc-800/60 bg-zinc-900/30 p-6 rounded-xl">
                <Clock className="w-6 h-6 text-primary mb-4" />
                <CountUpNumber end={18} duration={2.5} className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2" />
                <p className="text-zinc-500 text-sm font-mono-data uppercase">Secondary Exits</p>
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-6 mb-32">
            <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-zinc-800 pb-4">01. Selected Investments</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="w-full overflow-x-auto pb-4">
                <div className="min-w-[500px]">
                  <div className="bg-primary/20 border-b-2 border-primary py-3 px-4 mb-2 flex justify-between uppercase font-mono-data text-sm text-zinc-100">
                    <div className="w-1/2">Investment</div>
                    <div className="w-1/4 text-center">Exit</div>
                    <div className="w-1/4 text-right">IRR</div>
                  </div>
                  <div className="space-y-1">
                    {activeDeals.map((deal, i) => (
                      <div key={i} className="flex justify-between items-center py-3 px-4 bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-800/50 transition-colors rounded-sm">
                        <div className="w-1/2 font-medium text-zinc-100 flex flex-col gap-1">
                          {deal.name}
                          {deal.type === "Secondary" && <span className="text-[10px] font-mono-data text-amber-500 bg-amber-500/10 px-1.5 py-0.5 w-fit rounded">SECONDARY ENTRY</span>}
                        </div>
                        <div className="w-1/4 text-center text-zinc-400 text-sm">{deal.status}</div>
                        <div className="w-1/4 text-right font-mono-data font-bold text-primary">{deal.irr}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full overflow-x-auto pb-4">
                <div className="min-w-[500px]">
                  <div className="bg-primary/20 border-b-2 border-primary py-3 px-4 mb-2 flex justify-between uppercase font-mono-data text-sm text-zinc-100">
                    <div className="w-1/2">Historical Exits</div>
                    <div className="w-1/4 text-center">Exit</div>
                    <div className="w-1/4 text-right">IRR</div>
                  </div>
                  <div className="space-y-1">
                    {historicalExits.map((deal, i) => (
                      <div key={i} className="flex justify-between items-center py-3 px-4 bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-800/50 transition-colors rounded-sm">
                        <div className="w-1/2 font-medium text-zinc-100 flex flex-col gap-1">
                          {deal.name}
                          {deal.type === "Secondary" && <span className="text-[10px] font-mono-data text-amber-500 bg-amber-500/10 px-1.5 py-0.5 w-fit rounded">SECONDARY EXIT</span>}
                        </div>
                        <div className="w-1/4 text-center text-zinc-400 text-sm">{deal.status}</div>
                        <div className="w-1/4 text-right font-mono-data font-bold text-primary">{deal.irr}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-6 mb-24">
            <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-zinc-800 pb-4">02. Methodology of Derisking</h2>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.05),transparent_50%)] pointer-events-none" />

              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-zinc-800/80 rounded-xl flex items-center justify-center border border-zinc-700">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-zinc-100">Gorgias</h3>
                  <p className="text-zinc-500 font-mono-data text-sm">CASE STUDY</p>
                </div>
              </div>

              <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-12 pb-4">
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute w-3 h-3 bg-zinc-950 border-2 border-zinc-500 rounded-full -left-[6.5px] top-1.5" />
                  <p className="font-mono-data text-zinc-500 text-sm mb-2">May 2017</p>
                  <p className="text-lg text-zinc-300 mb-2">Initial Investment:</p>
                  <div className="flex items-baseline gap-4">
                    <p className="text-3xl font-bold text-primary font-mono-data">$100K</p>
                    <p className="text-zinc-500">at $3M Val</p>
                  </div>
                </div>

                <div className="relative pl-8 md:pl-12">
                  <div className="absolute w-3 h-3 bg-zinc-950 border-2 border-primary rounded-full -left-[6.5px] top-1.5" />
                  <p className="font-mono-data text-zinc-500 text-sm mb-2">May 2019</p>
                  <p className="text-lg text-zinc-300 mb-2">Series A ($25M raised at $100M Val):</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded text-primary font-mono-data">
                    Partial Exit: $350K (x3.5)
                  </div>
                </div>

                <div className="relative pl-8 md:pl-12">
                  <div className="absolute w-3 h-3 bg-zinc-950 border-2 border-primary rounded-full -left-[6.5px] top-1.5" />
                  <p className="font-mono-data text-zinc-500 text-sm mb-2">May 2021</p>
                  <p className="text-lg text-zinc-300 mb-2">Series B ($70M raised at $250M Val):</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded text-primary font-mono-data">
                    Partial Exit: $650K (x5)
                  </div>
                </div>

                <div className="relative pl-8 md:pl-12 pt-6">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[8.5px] top-7 shadow-[0_0_15px_rgba(14,165,233,0.6)]" />
                  <div className="bg-zinc-950 border border-primary/30 p-6 rounded-xl">
                    <p className="text-zinc-300 mb-2">Remains <span className="font-bold text-zinc-100">50%</span> of initial investment valued at:</p>
                    <p className="text-4xl font-bold text-primary font-mono-data">$1.8M</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-6 mb-16">
            <p className="font-mono-data text-primary mb-4 tracking-widest uppercase text-sm">/Risk_Management_03</p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-zinc-100">
              RISK MANAGEMENT
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
              A disciplined framework built to underwrite downside, preserve optionality, and maintain control from underwriting through liquidity.
            </p>
          </section>

          <section className="max-w-7xl mx-auto px-6 mb-24">
            <h3 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-zinc-800 pb-4">03. Framework Pillars</h3>

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

                    <h4 className="text-xl font-bold text-zinc-100 mb-4">{pillar.title}</h4>
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
