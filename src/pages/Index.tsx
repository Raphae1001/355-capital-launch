import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SourcingSection from "../components/SourcingSection";
import RiskSection from "../components/RiskSection";
import StrategySection from "../components/StrategySection";
import TrackRecordSection from "../components/TrackRecordSection";
import InvestorsSection from "../components/InvestorsSection";
import Footer from "../components/Footer";
import TacticalBackground from "../components/TacticalBackground";

const Index = () => (
  <div className="min-h-screen bg-gradient-to-b from-background via-background to-black text-foreground relative">
    <TacticalBackground />
    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <SourcingSection />
      <RiskSection />
      <StrategySection />
      <TrackRecordSection />
      <InvestorsSection />
      <Footer />
    </div>
  </div>
);

export default Index;
