import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TrackRecord = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <div className="section-padding pt-32 max-w-4xl mx-auto">
      <p className="text-xs font-mono-data tracking-[0.3em] uppercase text-primary mb-4">Track Record</p>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
        Proven Performance
      </h1>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Detailed track record available to qualified investors upon request.
      </p>
      <Link to="/" className="inline-block mt-8 text-sm text-primary hover:underline">← Back to home</Link>
    </div>
    <Footer />
  </div>
);

export default TrackRecord;
