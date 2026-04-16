import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import CoverSection from "@/components/CoverSection";
import HeroSection from "@/components/HeroSection";
import QuranVerse from "@/components/QuranVerse";
import CoupleSection from "@/components/CoupleSection";
import EventSection from "@/components/EventSection";
import LoveStorySection from "@/components/LoveStorySection";
import GallerySection from "@/components/GallerySection";
import WishesSection from "@/components/WishesSection";
import TurutMengundang from "@/components/TurutMengundang";
import Hadiah from "@/components/WeddingGift";
import FooterSection from "@/components/FooterSection";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // --- LOGIC AMBIL NAMA TAMU UNTUK COVER ---
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
    <div className="relative w-full overflow-x-hidden">
      {/* 1. COVER SECTION (GUEST NAME DI SINI) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key="cover"
            initial={{ opacity: 1 }}
            exit={{ opacity: 1, y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-[9999] w-full h-screen"
          >
            {/* Nama tamu dikirim hanya ke CoverSection */}
            <CoverSection onOpen={handleOpen} guestName={guestName} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN CONTENT (HERO KEMBALI NORMAL) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 w-full"
        >
          {/* HeroSection tanpa guestName sesuai permintaan */}
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
  );
};

export default Index;
