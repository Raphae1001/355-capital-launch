import { PageTransition } from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, Trophy, Clock, CheckCircle2 } from "lucide-react";
import GlassCard from "@/components/GlassCard";
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

export default function TrackRecord() {
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

          {/* Hero */}
          <section className="max-w-7xl mx-auto px-6 mb-24">
            <p className="font-mono-data text-primary mb-4 tracking-widest uppercase text-sm">/Track_Record_02</p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-16 text-zinc-100">
              Proven Performance
            </h1>

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

          {/* Deal Tables */}
          <section className="max-w-7xl mx-auto px-6 mb-32">
            <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-zinc-800 pb-4">01. Selected Investments</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               {/* Active Deals Table */}
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

               {/* Historical Exits Table */}
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

          {/* Case Studies */}
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

              {/* Timeline Container */}
              <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-12 pb-4">
                
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
