import { PageTransition } from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
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
    excerpt: "Examining our approach to early secondary exits. How de-risking positions improve liquidity mechanics without capping upside on hyper-growth outliers.",
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

const Insights = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
        <Navbar />

        <main className="pt-32 pb-24">
          <section className="max-w-7xl mx-auto px-6 mb-20">
            <div className="flex items-center gap-4 mb-4">
              <Terminal className="w-8 h-8 text-primary" />
              <p className="font-mono-data text-primary tracking-widest uppercase text-sm">/Intelligence_Feed</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-zinc-100">
              INSIGHTS & MEMOS
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
              Intelligence from the edge of venture markets, including conviction notes, market evolution briefs, and disciplined pass memos.
            </p>
          </section>

          <section className="max-w-7xl mx-auto px-6 mb-10">
            <h2 className="text-2xl font-bold text-zinc-100 mb-8 border-b border-zinc-800 pb-4">Intelligence Feed</h2>
            <div className="grid gap-5">
              {memos.map((memo) => (
                <article
                  key={memo.id}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6 md:p-8 transition-all hover:border-primary/30 hover:bg-zinc-900/55"
                >
                  <div className="absolute top-0 right-0 h-28 w-28 bg-primary/5 blur-[48px] pointer-events-none" />

                  <div className="relative">
                    <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono-data uppercase tracking-[0.2em]">
                        <span className="text-zinc-500">{memo.id}</span>
                        <span className="text-zinc-700">/</span>
                        <span
                          className={
                            memo.type.includes("INVEST")
                              ? "text-emerald-500"
                              : memo.type.includes("MARKET")
                                ? "text-primary"
                                : "text-amber-500"
                          }
                        >
                          {memo.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-mono-data uppercase tracking-[0.2em] text-zinc-500">
                        <span>{memo.date}</span>
                        <span className="text-zinc-700">/</span>
                        <span>{memo.readTime}</span>
                      </div>
                    </div>

                    <div className="mb-4 flex items-start gap-4">
                      <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/80">
                        {memo.type.includes("INVEST") && <Activity className="h-5 w-5 text-emerald-500" />}
                        {memo.type.includes("MARKET") && <CodeSquare className="h-5 w-5 text-primary" />}
                        {memo.type.includes("PASS") && <FileText className="h-5 w-5 text-amber-500" />}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-zinc-100 transition-colors group-hover:text-primary">{memo.title}</h3>
                        <p className="mt-3 max-w-4xl text-zinc-400 leading-relaxed transition-colors group-hover:text-zinc-300">
                          {memo.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="max-w-7xl mx-auto px-6 mb-24">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
              <CodeSquare className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-xl font-bold text-zinc-100">Access the Vault</h3>
              <p className="mx-auto mb-6 max-w-md text-zinc-400">
                Accredited LPs and strategic partners can access our complete repository of raw deal memos and terminal data feeds.
              </p>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request Access
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Insights;
