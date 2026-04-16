import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import CoverSection from "@/pages/weding-yuni/components/CoverSection";
import HeroSection from "@/pages/weding-yuni/components/HeroSection";
import QuranVerse from "@/pages/weding-yuni/components/QuranVerse";
import CoupleSection from "@/pages/weding-yuni/components/CoupleSection";
import EventSection from "@/pages/weding-yuni/components/EventSection";
import LoveStorySection from "@/pages/weding-yuni/components/LoveStorySection";
import GallerySection from "@/pages/weding-yuni/components/GallerySection";
import WishesSection from "@/pages/weding-yuni/components/WishesSection";
import TurutMengundang from "@/pages/weding-yuni/components/TurutMengundang";
import Hadiah from "@/pages/weding-yuni/components/WeddingGift";
import FooterSection from "@/pages/weding-yuni/components/FooterSection";
import MusicPlayer from "@/pages/weding-yuni/components/MusicPlayer";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("to") || "Tamu Undangan";

  const handleOpen = () => {
    setIsOpen(true);
    setIsMusicPlaying(true);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (!isOpen) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, [isOpen]);

  return (
    <>
      {/* 1. PINDAHAN DARI INDEX.HTML LAMA DI SINI */}
      <Helmet>
        <title>The Wedding of Yuni Ramdhani & .....</title>
        <meta name="description" content="Senin 22 juni 2026" />
        <meta name="author" content="nzdigital" />
        <meta
          property="og:title"
          content="The Wedding of Yuni Ramdhani & ....."
        />
        <meta property="og:description" content="Senin 22 juni 2026" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://nzdigital45.vercel.app/images/WhatsApp%20Image%202026-04-16%20at%2009.45.52.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://nzdigital45.vercel.app/images/WhatsApp%20Image%202026-04-16%20at%2009.45.52.jpeg"
        />
      </Helmet>

      <div className="relative w-full overflow-x-hidden">
        {/* COVER SECTION */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              key="cover"
              initial={{ opacity: 1 }}
              exit={{ opacity: 1, y: "-100%" }}
              transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
              className="fixed inset-0 z-[9999] w-full h-screen"
            >
              <CoverSection onOpen={handleOpen} guestName={guestName} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* MAIN CONTENT */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-10 w-full"
          >
            <HeroSection />
            <QuranVerse />
            <CoupleSection />
            <EventSection />
            <LoveStorySection />
            <GallerySection />
            <WishesSection />
            <Hadiah />
            <TurutMengundang />
            <FooterSection />

            <MusicPlayer
              isPlaying={isMusicPlaying}
              onToggle={() => setIsMusicPlaying(!isMusicPlaying)}
            />
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Index;
