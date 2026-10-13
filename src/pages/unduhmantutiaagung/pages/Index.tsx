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
  TurutMengundang,
  Closing,
  Footer,
  Shell,
} from "../components/invitation/Sections";

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
        <title>Tasyakuran Ngunduh Mantu Mas Agung &amp; Teteh Tia</title>
        <meta
          name="description"
          content={`Tasyakuran Ngunduh Mantu Mas Agung & Teteh Tia — Sabtu Kliwon, 14 November 2026.`}
        />
        <meta property="og:title" content="Tasyakuran Ngunduh Mantu Mas Agung &amp; Teteh Tia" />
        <meta
          property="og:description"
          content="Tasyakuran Ngunduh Mantu Mas Agung & Teteh Tia — Sabtu Kliwon, 14 November 2026."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://nzdigi.vercel.app/images/unduhmantutiaagung/cover.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://nzdigi.vercel.app/images/unduhmantutiaagung/cover.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="1200" />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:image"
          content="https://nzdigi.vercel.app/images/unduhmantutiaagung/cover.jpg"
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
