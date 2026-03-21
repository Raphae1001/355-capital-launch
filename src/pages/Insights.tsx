import { PageTransition } from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Terminal, CodeSquare, Activity, FileText } from "lucide-react";

const memos = [
  {
    type: "WHY WE INVEST",
    title: "Sovereign AI Infrastructure: The New Imperative",
    date: "10 MAR 2026",
    id: "MEMO_A01",
    excerpt: "Analysis on why localized AI models and autonomous data centers will dominate the defense-tech landscape in Europe within the next 36 months.",
    readTime: "4 MIN"
  },
  {
    type: "MARKET EVOLUTION",
    title: "Capital Recycling Strategies in Seed & Series A",
    date: "28 FEB 2026",
    id: "RPT_M22",
    excerpt: "Examining our approach to early secondary exits. How de-risking positions mechanically improves fund IRR without capping upside on hyper-growth outliers.",
    readTime: "7 MIN"
  },
  {
    type: "WHY WE PASS",
    title: "Overcapitalized B2B Saas Markets",
    date: "14 FEB 2026",
    id: "DEAL_X89",
    excerpt: "A breakdown of red flags in vertical SaaS. High MRR but bloated CACs and reliance on continuous cheap venture capital makes unit economics unsustainable in the new regime.",
    readTime: "3 MIN"
  },
];

export default function Insights() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
        <Navbar />
        
        <main className="pt-32 pb-24">
          <section className="max-w-7xl mx-auto px-6 mb-16">
            <div className="flex items-center gap-4 mb-4">
               <Terminal className="w-8 h-8 text-primary" />
               <p className="font-mono-data text-primary tracking-widest uppercase text-sm">/Intelligence_Feed</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-zinc-100">
              Insights & Memos
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
              Unfiltered perspectives on defense technology, asymmetric opportunities, and market structure.
            </p>
          </section>

          {/* Terminal Matrix Header */}
          <section className="max-w-7xl mx-auto px-6 mb-12 hidden md:block">
            <div className="grid grid-cols-12 gap-4 pb-4 border-b border-zinc-800 text-sm font-mono-data text-zinc-500 uppercase tracking-wider">
               <div className="col-span-1">ID</div>
               <div className="col-span-2">Classification</div>
               <div className="col-span-6">Object Title</div>
               <div className="col-span-2">Date</div>
               <div className="col-span-1 text-right">LOC</div>
            </div>
          </section>

          {/* Feed */}
          <section className="max-w-7xl mx-auto px-6 mb-24 space-y-4">
            {memos.map((memo, idx) => (
              <div 
                key={idx} 
                className="group relative bg-zinc-900/30 border border-zinc-800/60 p-6 md:p-8 rounded-xl hover:border-primary/40 hover:bg-zinc-900/60 transition-all cursor-pointer overflow-hidden"
              >
                <div className="hidden md:grid grid-cols-12 gap-4 items-center mb-4 text-sm font-mono-data text-zinc-400">
                   <div className="col-span-1 text-zinc-600">{memo.id}</div>
                   <div className="col-span-2 flex items-center gap-2">
                     {memo.type.includes("INVEST") && <Activity className="w-4 h-4 text-emerald-500" />}
                     {memo.type.includes("MARKET") && <CodeSquare className="w-4 h-4 text-primary" />}
                     {memo.type.includes("PASS") && <FileText className="w-4 h-4 text-amber-500" />}
                     <span className={
                       memo.type.includes("INVEST") ? "text-emerald-500" :
                       memo.type.includes("MARKET") ? "text-primary" : "text-amber-500"
                     }>{memo.type}</span>
                   </div>
                   <div className="col-span-6 text-zinc-100 font-sans font-bold text-xl group-hover:text-primary transition-colors">{memo.title}</div>
                   <div className="col-span-2">{memo.date}</div>
                   <div className="col-span-1 text-right">{memo.readTime}</div>
                </div>

                {/* Mobile View */}
                <div className="md:hidden flex flex-col gap-3 mb-4">
                  <div className="flex justify-between items-center font-mono-data text-xs">
                    <span className={
                       memo.type.includes("INVEST") ? "text-emerald-500" :
                       memo.type.includes("MARKET") ? "text-primary" : "text-amber-500"
                     }>{memo.type}</span>
                    <span className="text-zinc-500">{memo.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-primary transition-colors">{memo.title}</h3>
                </div>

                <div className="md:grid grid-cols-12 gap-4">
                  <div className="col-span-3 hidden md:block"></div>
                  <div className="col-span-8">
                    <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                      {memo.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Subscription or Future Callout */}
          <section className="max-w-7xl mx-auto px-6 mb-24">
             <div className="bg-primary/5 border border-primary/20 p-8 rounded-xl text-center">
                <CodeSquare className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-zinc-100 mb-2">Access the Vault</h3>
                <p className="text-zinc-400 mb-6 max-w-md mx-auto">
                  Accredited LPs and strategic partners can access our complete repository of raw deal memos and terminal data feeds.
                </p>
                <Link to="/" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-medium text-sm hover:bg-primary/90 transition-colors">
                  Request Access
                </Link>
             </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
}
