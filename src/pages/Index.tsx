import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SourcingSection from "../components/SourcingSection";
import RiskSection from "../components/RiskSection";
import StrategySection from "../components/StrategySection";
import TrackRecordSection from "../components/TrackRecordSection";
import InvestorsSection from "../components/InvestorsSection";
import Footer from "../components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <SourcingSection />
    <RiskSection />
    <StrategySection />
    <TrackRecordSection />
    <InvestorsSection />
    <Footer />
  </div>
);

export default Index;
