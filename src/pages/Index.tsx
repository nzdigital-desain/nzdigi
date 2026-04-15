import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CoverSection from "@/components/CoverSection";
import HeroSection from "@/components/HeroSection";
import QuranVerse from "@/components/QuranVerse";
import CoupleSection from "@/components/CoupleSection";
import EventSection from "@/components/EventSection";
import LiveStreamSection from "@/components/LiveStreamSection";
import LoveStorySection from "@/components/LoveStorySection";
import GallerySection from "@/components/GallerySection";
import WishesSection from "@/components/WishesSection";
import TurutMengundang from "@/components/TurutMengundang";
import Hadiah from "@/components/WeddingGift";
import FooterSection from "@/components/FooterSection";
import BottomNav from "@/components/BottomNav";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleOpen = () => {
    setIsOpen(true);
    setIsMusicPlaying(true);
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
    <div className="relative">
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            key="cover"
            exit={{ opacity: 0, y: "-50%" }}
            transition={{ duration: 1 }}
          >
            <CoverSection onOpen={handleOpen} />
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pb-14"
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
          <BottomNav activeSection={activeSection} />
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
