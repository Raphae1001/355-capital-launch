import { PageTransition } from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Clock, CheckCircle2, DoorOpen, Lock } from "lucide-react";
import { CountUpNumber } from "@/components/CountUpNumber";

const activeDeals = [
  { name: "Yubo", status: "Not yet", type: "Primary" },
  { name: "Gorgias", status: "Not yet", type: "Primary" },
  { name: "Stripe", status: "Not yet", type: "Primary" },
  { name: "SpaceX", status: "Not yet", type: "Primary" },
  { name: "Databricks", status: "Not yet", type: "Primary" },
  { name: "Neuralink", status: "Not yet", type: "Primary" },
  { name: "Xtend", status: "Not yet", type: "Primary" },
  { name: "SENAI", status: "Not yet", type: "Primary" },
  { name: "Medadom", status: "Not yet", type: "Primary" },
  { name: "Mega-biopharma", status: "Not yet", type: "Primary" },
];

export default function TrackRecord() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
        <Navbar />
        
        <main className="pt-32 pb-24">
          {/* Hero */}
          <section className="max-w-7xl mx-auto px-6 mb-24">
            <p className="font-mono-data text-primary mb-4 tracking-widest uppercase text-sm">/Track_Record_02</p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-16 text-zinc-100">
              Track Record
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              <div className="border border-zinc-800/60 bg-zinc-900/30 p-6 rounded-xl">
                <Target className="w-6 h-6 text-primary mb-4" />
                <CountUpNumber end={65} suffix="+" duration={2.5} className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2" />
                <p className="text-zinc-500 text-sm font-mono-data uppercase">Investments</p>
              </div>
              <div className="border border-zinc-800/60 bg-zinc-900/30 p-6 rounded-xl">
                <Clock className="w-6 h-6 text-primary mb-4" />
                <p className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2 font-mono-data">36 months</p>
                <p className="text-zinc-500 text-sm font-mono-data uppercase">Time to Liquidity (TTL)</p>
              </div>
              <div className="border border-zinc-800/60 bg-zinc-900/30 p-6 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-primary mb-4" />
                <p className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2 font-mono-data">17*</p>
                <p className="text-zinc-500 text-sm font-mono-data uppercase">Total Exits</p>
                <p className="text-zinc-500 text-[11px] font-mono-data mt-1">*see TTL</p>
              </div>
              <div className="border border-zinc-800/60 bg-zinc-900/30 p-6 rounded-xl">
                <DoorOpen className="w-6 h-6 text-primary mb-4" />
                <CountUpNumber end={18} duration={2.5} className="text-4xl md:text-5xl font-bold text-zinc-100 mb-2" />
                <p className="text-zinc-500 text-sm font-mono-data uppercase">Secondary deals</p>
              </div>
            </div>
          </section>

          {/* Deal Tables */}
          <section className="max-w-7xl mx-auto px-6 mb-32">
            <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-zinc-800 pb-4">01. Selected Investments</h2>
            
            <div className="w-full overflow-hidden pb-2">
               <div className="w-full">
                   <div className="bg-primary/20 border-b-2 border-primary py-3 px-4 mb-2 flex justify-between uppercase font-mono-data text-sm text-zinc-100">
                      <div className="w-2/3">Investment</div>
                      <div className="w-1/3 text-right">Exit / Status</div>
                   </div>
                   <div className="space-y-1">
                      {activeDeals.map((deal, i) => (
                        <div key={i} className="flex justify-between items-start sm:items-center py-3 px-4 bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-800/50 transition-colors rounded-sm gap-3">
                           <div className="w-2/3 font-medium text-zinc-100 flex flex-col gap-1">
                              {deal.name}
                              {deal.type === "Secondary" && <span className="text-[10px] font-mono-data text-zinc-200 bg-zinc-100/10 border border-zinc-200/15 px-1.5 py-0.5 w-fit rounded">SECONDARY ENTRY</span>}
                           </div>
                           <div
                              className={`w-1/3 text-right text-zinc-400 text-sm ${
                                deal.status === "Not yet" ? "blur-[5px] select-none" : ""
                              }`}
                           >
                              {deal.status}
                           </div>
                        </div>
                      ))}
                   </div>
                 </div>
               </div>
          </section>

          {/* Case Studies */}
          <section className="max-w-7xl mx-auto px-6 mb-24">
            <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-zinc-800 pb-4">02. Methodology of Derisking</h2>
            
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.05),transparent_50%)] pointer-events-none" />
              <div className="relative z-10 inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-zinc-700/80 bg-zinc-900/80 text-zinc-300 text-xs font-mono-data tracking-wide">
                <Lock className="w-3.5 h-3.5 text-primary" />
                <span>Available on request</span>
              </div>
              
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-zinc-800/80 rounded-xl flex items-center justify-center border border-zinc-700">
                   <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-zinc-100">Gorgias</h3>
                  <p className="text-zinc-500 font-mono-data text-sm">CASE STUDY</p>
                </div>
              </div>

              {/* Timeline Container */}
              <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-12 pb-4 blur-[6px] md:blur-[8px] select-none pointer-events-none">
                
                {/* 2017 */}
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute w-3 h-3 bg-zinc-950 border-2 border-zinc-500 rounded-full -left-[6.5px] top-1.5" />
                  <p className="font-mono-data text-zinc-500 text-sm mb-2">May 2017</p>
                  <p className="text-lg text-zinc-300 mb-2">Initial Investment:</p>
                  <div className="flex items-baseline gap-4">
                    <p className="text-3xl font-bold text-primary font-mono-data">$100K</p>
                    <p className="text-zinc-500">at $3M Val</p>
                  </div>
                </div>

                {/* 2019 */}
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute w-3 h-3 bg-zinc-950 border-2 border-primary rounded-full -left-[6.5px] top-1.5" />
                  <p className="font-mono-data text-zinc-500 text-sm mb-2">May 2019</p>
                  <p className="text-lg text-zinc-300 mb-2">Series A ($25M raised at $100M Val):</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded text-primary font-mono-data">
                    Partial Exit: $350K (x3.5)
                  </div>
                </div>

                {/* 2021 */}
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute w-3 h-3 bg-zinc-950 border-2 border-primary rounded-full -left-[6.5px] top-1.5" />
                  <p className="font-mono-data text-zinc-500 text-sm mb-2">May 2021</p>
                  <p className="text-lg text-zinc-300 mb-2">Series B ($70M raised at $250M Val):</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded text-primary font-mono-data">
                    Partial Exit: $650K (x5)
                  </div>
                </div>

                {/* Final Status */}
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

        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
