import { PageTransition } from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Cpu, Battery, Rocket, ArrowRightLeft, Users, Target, Globe, Award, CheckCircle2 } from "lucide-react";
import GlassCard from "@/components/GlassCard";

const fundStrengths = [
  { icon: Award, title: "Experience", desc: "The 2 founders experienced 3 economic cycles (2001, 2008, 2022)." },
  { icon: Shield, title: "Independence", desc: "Allows greater flexibility in decision making. We stick to our beliefs and focus on long term growth." },
  { icon: Users, title: "Network", desc: "Extensive and diversified network allows us to have a unique and curated deal flow." },
  { icon: Target, title: "Open Communication", desc: "A new investment framework through deal flow transparency & regular meetups with CEO's." },
  { icon: CheckCircle2, title: "De-risking Strategy", desc: "Our unique method to mitigate the risk of early-stage investment." },
  { icon: Globe, title: "Ecosystems", desc: "Profound knowledge of USA, Israel, and European ecosystems." },
];

const focusAreas = [
  { icon: Shield, title: "Defense", desc: "Sovereign technologies and dual-use innovations." },
  { icon: Lock, title: "Cyber security", desc: "Zero-trust architecture and advanced threat detection." },
  { icon: Cpu, title: "AI & Robotics", desc: "Machine intelligence and autonomous systems engineering." },
  { icon: Battery, title: "Energy", desc: "Next-gen storage and grid resilience." },
  { icon: Rocket, title: "Aerospace", desc: "Orbital infrastructure and advanced propulsion." },
  { icon: ArrowRightLeft, title: "Secondary Market", desc: "Opportunistic liquidity in proven winners." },
];

export default function InvestmentProcess() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
        <Navbar />
        
        <main className="pt-32 pb-24">
          {/* Back button */}
          <div className="max-w-7xl mx-auto px-6 mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Command Center
            </Link>
          </div>

          {/* Hero */}
          <section className="max-w-7xl mx-auto px-6 mb-24">
            <p className="font-mono-data text-primary mb-4 tracking-widest uppercase text-sm">/Investment_Process_01</p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-zinc-100">
              Investment Process
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
              A differentiated hybrid thesis combining <span className="text-zinc-100 font-semibold">primary conviction</span> and <span className="text-zinc-100 font-semibold">secondary liquidity</span>.
            </p>
          </section>

          {/* Focus Areas */}
          <section className="max-w-7xl mx-auto px-6 mb-32">
            <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-zinc-800 pb-4">01. Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {focusAreas.map((area, idx) => (
                <GlassCard key={idx} className="p-8 group hover:border-primary/50 transition-colors">
                  <area.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-zinc-100 mb-3">{area.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{area.desc}</p>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* The Hybrid Model */}
          <section className="max-w-7xl mx-auto px-6 mb-32">
            <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-zinc-800 pb-4">02. The Hybrid Model</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900/40 border border-zinc-800 p-10 rounded-xl relative overflow-hidden focus-ring">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] pointer-events-none" />
                <h3 className="text-2xl font-bold text-zinc-100 mb-4 flex flex-col items-start gap-2">
                  Primary 
                  <span className="text-primary font-mono-data text-xs px-3 py-1 bg-primary/10 rounded-full">PRE-SEED TO SERIES A</span>
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Focus on being the <strong className="text-primary">"First Check"</strong>. We take high-conviction bets targeting visionary founders obsessed with solving hard problems at scale.
                </p>
                <ul className="space-y-3 text-sm text-zinc-300">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary" /> Unanimous voting of the investment committee</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary" /> Potential: $1B+ valuation</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary" /> Strong founders & execution teams</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary" /> Co-invest alongside top-tier venture capital firms</li>
                </ul>
              </div>
              
              <div className="bg-zinc-900/40 border border-zinc-800 p-10 rounded-xl relative overflow-hidden focus-ring">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[50px] pointer-events-none" />
                <h3 className="text-2xl font-bold text-zinc-100 mb-4 flex flex-col items-start gap-2">
                  Secondary
                  <span className="text-amber-500 font-mono-data text-xs px-3 py-1 bg-amber-500/10 rounded-full">OPPORTUNISTIC</span>
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Selective entry into proven winners at attractive valuations. Our <strong className="text-amber-500">Capital Recycling</strong> approach de-risks our exposure and secures early liquidity for optimal IRR.
                </p>
                <ul className="space-y-3 text-sm text-zinc-300">
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-amber-500" /> Active risk management</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-amber-500" /> Partial exits starting at Series A / B</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-amber-500" /> Greater portfolio liquidity</li>
                  <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-amber-500" /> Enhanced long-term performance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Fund Strengths */}
          <section className="max-w-7xl mx-auto px-6 mb-32">
            <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-zinc-800 pb-4">03. Fund's Strengths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fundStrengths.map((str, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-zinc-900/40 border border-zinc-800/60 rounded-xl hover:border-primary/30 transition-colors">
                   <div className="shrink-0">
                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                       <str.icon className="w-6 h-6 text-primary" />
                     </div>
                   </div>
                   <div>
                     <h3 className="text-lg font-bold text-zinc-100 mb-2">{str.title}</h3>
                     <p className="text-sm text-zinc-400 leading-relaxed">{str.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </section>

          {/* The Fund Parameters */}
          <section className="max-w-7xl mx-auto px-6 mb-24">
            <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-zinc-800 pb-4">04. The Fund Parameters</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
              {[
                { label: "TYPE", value: "Early-Stage VC Fund" },
                { label: "TARGET SIZE", value: "US$ 50M", sub: "Soft Cap: US$ 30M" },
                { label: "TARGET INVESTMENTS", value: "50-80", sub: "Portfolio Companies" },
                { label: "TERM", value: "5 Years", sub: "+ 2 one-year extensions" },
                { label: "TICKET SIZE", value: "$250k - $1M*" },
                { label: "SET-UP FEE", value: "0%" },
                { label: "MANAGEMENT FEES", value: "2%" },
                { label: "CARRIED INTEREST", value: "20%" },
                { label: "INVESTOR CASH BACK", value: "100%" },
                { label: "GP COMMITMENT", value: "5%" },
                { label: "INSTRUMENT & TERMS", value: "SAFE or Equity", sub: "No loans or standard convertible notes" },
              ].map((item, idx) => (
                <div key={idx} className="border border-zinc-800 p-6 rounded-xl bg-zinc-950/80 hover:bg-zinc-900/50 transition-colors">
                  <p className="font-mono-data text-primary text-xs mb-2">{item.label}</p>
                  <p className="text-xl md:text-2xl font-bold text-zinc-100">{item.value}</p>
                  {item.sub && <p className="text-sm text-zinc-500 mt-1">{item.sub}</p>}
                </div>
              ))}
            </div>
            
            <div className="p-8 border border-primary/20 bg-primary/5 rounded-xl flex flex-col md:flex-row gap-6 items-center">
               <div className="shrink-0">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                     <Users className="w-8 h-8 text-primary" />
                  </div>
               </div>
               <div>
                 <h3 className="text-xl font-bold text-zinc-100 mb-2">Innovative Referral Program</h3>
                 <p className="text-zinc-400">
                   1% of carry deducted for each new investor successfully onboarded (min $100k). 
                   Up to 10 referrals per LP.
                 </p>
               </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
