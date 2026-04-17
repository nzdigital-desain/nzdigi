import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import WedingYuni from "@/pages/weding-yuni/pages/Index";
import SundaPage from "@/pages/template/pages/Index";
import LandingPage from "@/LandingPage";
const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Halaman Undangan Yuni */}
          <Route path="/wedingyunidanrefi" element={<WedingYuni />} />

          {/* Halaman Template Sunda */}
          <Route path="/sunda" element={<SundaPage />} />

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
  );
};

export default App;
// fix routing
