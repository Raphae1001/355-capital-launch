import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "@/pages/Index.tsx";
import Login from "@/pages/Login.tsx";
import Strategy from "@/pages/Strategy.tsx";
import TrackRecord from "@/pages/TrackRecord.tsx";
import Team from "@/pages/Team.tsx";
import Insights from "@/pages/Insights.tsx";
import NotFound from "@/pages/NotFound.tsx";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/track-record" element={<TrackRecord />} />
        <Route path="/team" element={<Team />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
