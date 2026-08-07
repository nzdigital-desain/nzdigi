import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../App.css";
import { Cover } from "@/pages/pernikahanaulpika/components/invitation/Cover";
import { BottomNav, FloatingControls, MusicToggle } from "@/pages/pernikahanaulpika/components/invitation/Chrome";
import {
  Hero,
  Quote,
  BrideGroom,
  Events,
  LoveStory,
  Gallery,
  Gift,
  TurutMengundang,
  Closing,
  Footer,
  Shell,
} from "@/pages/pernikahanaulpika/components/invitation/Sections";
import { Rsvp } from "@/pages/pernikahanaulpika/components/invitation/Rsvp";

const queryClient = new QueryClient();

const Index = () => {
  const [open, setOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("to") || "Tamu Undangan";

  useEffect(() => {
    document.body.style.overflow = open ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <title>The Wedding of Pika & Aulia — Undangan Pernikahan</title>
        <meta
          name="description"
          content="Undangan pernikahan Pika & Aulia, 23 Agustus 2026. Konfirmasi kehadiran & kirim ucapan di sini."
        />
        <meta property="og:title" content="The Wedding of Pika & Aulia" />
        <meta
          property="og:description"
          content="Undangan pernikahan Pika & Aulia — 23 Agustus 2026."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://nzdigi.vercel.app/images/pernikahanaulpika/cover.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://nzdigi.vercel.app/images/pernikahanaulpika/cover.jpg"
        />
      </Helmet>

      <Shell>
        <Cover open={open} onOpen={() => setOpen(true)} guestName={guestName} />
        <main>
          <Hero />
          <Quote />
          <BrideGroom />
          <Events />
          <LoveStory />

          <Gallery />
          <Rsvp />
          <TurutMengundang />
          <Gift />
          <Closing />
        </main>
        <Footer />
        {open && (
          <>
            <BottomNav />
            <FloatingControls />
            <MusicToggle start={open} />
          </>
        )}
      </Shell>
    </QueryClientProvider>
  );
};

export default Index;
