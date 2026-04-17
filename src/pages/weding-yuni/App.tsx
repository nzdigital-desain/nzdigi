import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/pages/weding-yuni/components/ui/sonner.tsx";
import { Toaster } from "@/pages/weding-yuni/components/ui/toaster";
import { TooltipProvider } from "@/pages/weding-yuni/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* 1. Background pembungkus untuk layar desktop */}
      <div className="min-h-screen w-full bg-slate-100 flex justify-center items-start overflow-x-hidden">
        {/* 2. Container utama yang dikunci rasionya (Max lebar 450px - 500px) */}
        <div className="w-full max-w-[480px] min-h-screen bg-white shadow-2xl relative overflow-x-hidden">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
