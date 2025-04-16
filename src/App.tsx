
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import LearnPage from "./pages/LearnPage";
import RemediesPage from "./pages/RemediesPage";
import ConsultPage from "./pages/ConsultPage";
import StorePage from "./pages/StorePage";
import CommunityPage from "./pages/CommunityPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import HistoryPage from "./pages/HistoryPage";
import AcidityRemedyPage from "./pages/remedies/AcidityRemedyPage";
import DetoxRemedyPage from "./pages/remedies/DetoxRemedyPage";
import PulseDiagnosisPage from "./pages/remedies/PulseDiagnosisPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/remedies" element={<RemediesPage />} />
          <Route path="/consult" element={<ConsultPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/remedies/acidity" element={<AcidityRemedyPage />} />
          <Route path="/remedies/detox" element={<DetoxRemedyPage />} />
          <Route path="/remedies/pulse-diagnosis" element={<PulseDiagnosisPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
