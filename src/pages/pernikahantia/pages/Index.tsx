import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../App.css";
import { BRIDE_SHORT, GROOM_SHORT, WEDDING_DATE } from "../lib/invitation-data";
import { Cover } from "../components/invitation/Cover";
import { BottomNav, FloatingControls, MusicToggle } from "../components/invitation/Chrome";
import {
  Hero,
  CountdownSection,
  BrideGroom,
  Quote,
  Events,
  LoveStory,
  Gallery,
  Gift,
  TurutMengundang,
  Closing,
  Footer,
  Shell,
} from "../components/invitation/Sections";
import { Rsvp } from "../components/invitation/Rsvp";

import { ThemeStyles } from "../theme";

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
      <ThemeStyles />
      <Helmet>
        <title>{`The Wedding of ${BRIDE_SHORT} & ${GROOM_SHORT} — Undangan Pernikahan`}</title>
        <meta
          name="description"
          content={`Undangan pernikahan ${BRIDE_SHORT} & ${GROOM_SHORT}, ${new Date(WEDDING_DATE).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}. Konfirmasi kehadiran & kirim ucapan di sini.`}
        />
        <meta property="og:title" content={`The Wedding of ${BRIDE_SHORT} & ${GROOM_SHORT}`} />
        <meta
          property="og:description"
          content={`Undangan pernikahan ${BRIDE_SHORT} & ${GROOM_SHORT} — ${new Date(WEDDING_DATE).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}.`}
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
      </Helmet>

      <Shell>
        <Cover open={open} onOpen={() => setOpen(true)} guestName={guestName} />
        <main>
          <Hero />
          <BrideGroom />
          <Quote />
          <CountdownSection />
          <Events />
          <LoveStory />
          <Gallery />
          <Rsvp />
          <Gift />
          <TurutMengundang />
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
