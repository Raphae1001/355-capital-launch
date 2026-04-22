import { PageTransition } from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Building2, TrendingUp, Users } from "lucide-react";

export default function People() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
        <Navbar />
        
        <main className="pt-32 pb-24">
          <section className="max-w-7xl mx-auto px-6 mb-24">
            <p className="font-mono-data text-primary mb-4 tracking-widest uppercase text-sm">/People</p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-zinc-100">
              People
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
              The partners behind 355 Capital, with decades of combined experience across early-stage venture capital and global institutional finance.
            </p>
          </section>

          <section className="max-w-7xl mx-auto px-6 space-y-24 mb-24">
            
            {/* Florian Seroussi */}
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="w-full lg:w-1/3 shrink-0">
                <div className="aspect-[4/5] rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                  <img 
                    src="/florian.jpg" 
                    alt="Florian Seroussi" 
                    className="w-full h-full object-cover object-[center_18%] grayscale-0 lg:grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 p-4 rounded-xl">
                    <h2 className="text-2xl font-bold text-zinc-100">Florian Seroussi</h2>
                    <p className="text-primary text-sm font-mono-data uppercase mt-1">Managing General Partner</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/3 space-y-8 lg:pt-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-8 border-b border-zinc-800">
                  <div>
                     <p className="text-3xl font-bold text-zinc-100 font-mono-data">15+</p>
                     <p className="text-sm text-zinc-500 uppercase font-mono-data mt-1">Years Exp</p>
                  </div>
                  <div>
                     <p className="text-3xl font-bold text-zinc-100 font-mono-data">65+</p>
                     <p className="text-sm text-zinc-500 uppercase font-mono-data mt-1">Investments</p>
                  </div>
                  <div>
                     <p className="text-3xl font-bold text-primary font-mono-data">10</p>
                     <p className="text-sm text-zinc-500 uppercase font-mono-data mt-1">Core Themes</p>
                  </div>
                  <div>
                     <p className="text-3xl font-bold text-zinc-100 font-mono-data">26</p>
                     <p className="text-sm text-zinc-500 uppercase font-mono-data mt-1">Portfolio Milestones</p>
                  </div>
                </div>
                
                <div className="prose prose-invert prose-zinc max-w-none text-zinc-300">
                  <p>
                    Florian Seroussi is a Managing General Partner and Co-Founder at 355 Capital with a global investing and advisory track record. Known for writing the <strong className="text-primary font-medium">"First Check"</strong>, he has uniquely identified 10 unicorns at pre-seed and seed stages.
                  </p>
                  <p>
                    He has invested in over 65 tech startups, including Producteev (sold to Jive), Weebly (sold to Square), Yubo, Sandbox (sold to Animoca), Gorgias, AfterSchool, Open Garden, and Shade.io. Prior to joining 355 Capital, Florian co-founded One More Company Group, Evercontact, and Global Roaming (IPO'd in 2006).
                  </p>
                  <p>
                    Florian is an active voice in the ecosystem, contributing frequently to BFM TV, NYT, Forbes, Cheddar TV, and VentureBeat. He guides 355's strategy with a deep understanding of market dynamics across the internet and a personal passion to solve information overload.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span>MIAGE (Univ Paris XII), BA Econ (BU), MBA (Ben-Gurion)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">
                    <Users className="w-4 h-4 text-primary" />
                    <span>Serial Entrepreneur</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bernard Kalfon */}
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
              <div className="w-full lg:w-1/3 shrink-0">
                <div className="aspect-[4/5] rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                  <img 
                    src="/bernard.png" 
                    alt="Bernard Kalfon" 
                    className="w-full h-full object-contain object-center bg-zinc-950 grayscale-0 lg:grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 p-4 rounded-xl">
                    <h2 className="text-2xl font-bold text-zinc-100">Bernard Kalfon</h2>
                    <p className="text-primary text-sm font-mono-data uppercase mt-1">Managing General Partner</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/3 space-y-8 lg:pt-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-8 border-b border-zinc-800">
                  <div>
                     <p className="text-3xl font-bold text-zinc-100 font-mono-data">30</p>
                     <p className="text-sm text-zinc-500 uppercase font-mono-data mt-1">Years Exp</p>
                  </div>
                  <div>
                     <p className="text-3xl font-bold text-zinc-100 font-mono-data">$10B+</p>
                     <p className="text-sm text-zinc-500 uppercase font-mono-data mt-1">AUM Managed</p>
                  </div>
                  <div>
                     <p className="text-3xl font-bold text-primary font-mono-data">3</p>
                     <p className="text-sm text-zinc-500 uppercase font-mono-data mt-1">Top Banks</p>
                  </div>
                </div>
                
                <div className="prose prose-invert prose-zinc max-w-none text-zinc-300">
                  <p>
                    Bernard Kalfon is a Managing General Partner and Co-Founder at 355 Capital with a global investing track record spanning three decades. He began his career in 1995 in London, working for top investment banks including Salomon Brothers and Citibank as a Proprietary Trader.
                  </p>
                  <p>
                    In 2000, Bernard joined Société Générale Asset Management to help launch their hedge fund activities, reaching $10 Billion AUM by 2009. Following this success, he co-founded Nexar Capital Group, an alternative asset management company that was successfully acquired by Union Bancaire Privée in 2012 (at $3 Billion AUM).
                  </p>
                  <p>
                    Beyond institutional finance, Bernard is a recognized financial advisor and active investor across various sectors, including Med-Tech, Finance, Insurance, Real Estate, and Renewable Energies.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span>Salomon Brothers, Citibank, SocGen</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span>Alternative Asset Management</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span>Math & Econ, La Sorbonne</span>
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
