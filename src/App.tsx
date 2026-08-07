import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WedingYuni from "@/pages/weding-yuni/pages/Index";
import SundaPage from "@/pages/template/pages/Index";
import PernikahanAulPikaPage from "@/pages/pernikahanaulpika/pages/Index";
import LandingPage from "@/LandingPage";
import KirimUndangan from "@/pages/weding-yuni/components/KirimUndangan.tsx";
import RedirectNgrok from "./cbtsmpbea";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cbtsmpbea" element={<RedirectNgrok />} />
            {/* Halaman Undangan Yuni */}
            <Route path="/wedingyunidanrefi" element={<WedingYuni />} />
            <Route path="/kirim-undangan" element={<KirimUndangan />} />

            {/* Halaman Template Sunda */}
            <Route path="/sunda" element={<SundaPage />} />

            {/* Halaman Undangan Aul & Pika */}
            <Route path="/pernikahanaulpika" element={<PernikahanAulPikaPage />} />
            <Route path="/nzdigi" element={<PernikahanAulPikaPage />} />
            <Route path="/nzdigi-main" element={<PernikahanAulPikaPage />} />

            {/* Halaman Utama (Landing Page NZDIGI) */}
            <Route
              path="/"
              element={
                <div className="flex items-center justify-center h-screen bg-slate-100">
                  <h1 className="text-2xl font-serif">
                    NZDIGI Digital Invitation
                  </h1>
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
// fix routing
