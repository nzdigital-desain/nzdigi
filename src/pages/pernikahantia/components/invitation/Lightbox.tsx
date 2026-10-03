import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize, Minimize, ZoomIn, ZoomOut, Share2 } from "lucide-react";

interface LightboxProps {
  images: string[];
  selectedIndex: number | null;
  onClose: () => void;
  onIndexChange?: (index: number) => void;
  title?: string;
}

export function Lightbox({ images, selectedIndex, onClose, onIndexChange }: LightboxProps) {
  const [index, setIndex] = useState<number>(selectedIndex ?? 0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedIndex !== null) {
      setIndex(selectedIndex);
      setIsZoomed(false);
    }
  }, [selectedIndex]);

  // Lock body scroll saat lightbox aktif
  useEffect(() => {
    if (selectedIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    setIsZoomed(false);
    setIndex((prev) => {
      const nextIndex = prev > 0 ? prev - 1 : images.length - 1;
      onIndexChange?.(nextIndex);
      return nextIndex;
    });
  }, [images.length, onIndexChange]);

  const handleNext = useCallback(() => {
    setIsZoomed(false);
    setIndex((prev) => {
      const nextIndex = prev < images.length - 1 ? prev + 1 : 0;
      onIndexChange?.(nextIndex);
      return nextIndex;
    });
  }, [images.length, onIndexChange]);

  // Navigasi keyboard (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, onClose, handlePrev, handleNext]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Foto Galeri Pernikahan Tia & Agung",
          url: window.location.href,
        });
      } catch {
        // User cancelled share
      }
    } else {
      navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (selectedIndex === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-md select-none touch-none"
      >
        {/* TOP BAR (Header persis seperti di gambar referensi) */}
        <div className="relative z-20 flex h-14 w-full items-center justify-between px-4 text-white sm:px-6">
          {/* Counter index: e.g. "1 / 10" */}
          <div className="flex items-center gap-3">
            <span className="font-serif text-sm font-medium tracking-widest text-white/90 sm:text-base">
              {index + 1} / {images.length}
            </span>
            {copied && (
              <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] text-emerald-400">
                Link tersalin!
              </span>
            )}
          </div>

          {/* Action icons di kanan atas: Fullscreen, Zoom, Share, Close */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={toggleFullscreen}
              aria-label="Fullscreen"
              className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
            >
              {isFullscreen ? <Minimize className="size-4 sm:size-5" /> : <Maximize className="size-4 sm:size-5" />}
            </button>

            <button
              onClick={() => setIsZoomed((prev) => !prev)}
              aria-label="Zoom"
              className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
            >
              {isZoomed ? <ZoomOut className="size-4 sm:size-5" /> : <ZoomIn className="size-4 sm:size-5" />}
            </button>

            <button
              onClick={handleShare}
              aria-label="Bagikan"
              className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
            >
              <Share2 className="size-4 sm:size-5" />
            </button>

            <button
              onClick={onClose}
              aria-label="Tutup"
              className="rounded-full p-2 text-white/90 transition-colors hover:bg-white/20 hover:text-white active:scale-95"
            >
              <X className="size-5 sm:size-6" />
            </button>
          </div>
        </div>

        {/* IMAGE DISPLAY AREA */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden px-2 sm:px-12">
          {/* Tombol Panah Kiri (Prev) */}
          <button
            onClick={handlePrev}
            aria-label="Foto Sebelumnya"
            className="absolute left-2 sm:left-4 z-30 flex size-10 items-center justify-center rounded-full bg-white/10 text-white/90 backdrop-blur-sm transition-all hover:bg-white/25 hover:scale-105 active:scale-90"
          >
            <ChevronLeft className="size-6" />
          </button>

          {/* Foto Utama Aktif */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: isZoomed ? 1.4 : 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x > 60) handlePrev();
                else if (info.offset.x < -60) handleNext();
              }}
              onDoubleClick={() => setIsZoomed((prev) => !prev)}
              className="flex max-h-[82vh] max-w-full items-center justify-center cursor-grab active:cursor-grabbing"
            >
              <img
                src={images[index]}
                alt={`Galeri foto ${index + 1}`}
                className="max-h-[80vh] w-auto max-w-[94vw] rounded-xl object-contain shadow-2xl transition-transform duration-300"
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>

          {/* Tombol Panah Kanan (Next) */}
          <button
            onClick={handleNext}
            aria-label="Foto Selanjutnya"
            className="absolute right-2 sm:right-4 z-30 flex size-10 items-center justify-center rounded-full bg-white/10 text-white/90 backdrop-blur-sm transition-all hover:bg-white/25 hover:scale-105 active:scale-90"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>

        {/* BOTTOM THUMBNAIL STRIP */}
        <div className="z-20 flex h-20 w-full items-center justify-center overflow-x-auto px-4 py-2 gap-2 no-scrollbar bg-black/40">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => {
                setIsZoomed(false);
                setIndex(i);
                onIndexChange?.(i);
              }}
              className={`relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg transition-all ${
                i === index
                  ? "border-2 border-white scale-105 shadow-md opacity-100"
                  : "opacity-40 hover:opacity-80"
              }`}
            >
              <img src={img} alt={`Thumbnail ${i + 1}`} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
