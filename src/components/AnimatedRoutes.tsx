import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "@/pages/Index.tsx";
import Login from "@/pages/Login.tsx";
import InvestmentProcess from "@/pages/InvestmentProcess.tsx";
import TrackRecord from "@/pages/TrackRecord.tsx";
import People from "@/pages/People.tsx";
import Insights from "@/pages/Insights.tsx";
import RiskManagement from "@/pages/RiskManagement.tsx";
import NotFound from "@/pages/NotFound.tsx";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/investment-process" element={<InvestmentProcess />} />
        <Route path="/strategy" element={<Navigate to="/investment-process" replace />} />
        <Route path="/risk-management" element={<RiskManagement />} />
        <Route path="/track-record" element={<TrackRecord />} />
        <Route path="/people" element={<People />} />
        <Route path="/team" element={<Navigate to="/people" replace />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
