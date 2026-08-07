import { MailOpen } from "lucide-react";
import { motion } from "framer-motion";
import { photos } from "@/pages/pernikahanaulpika/lib/invitation-data";

export function Cover({ open, onOpen, guestName = "Tamu Undangan" }: { open: boolean; onOpen: () => void; guestName?: string }) {
  return (
    <motion.div
      aria-hidden={open}
      initial={false}
      animate={{ y: open ? "-100%" : "0%" }}
      transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
      style={{ pointerEvents: open ? "none" : "auto" }}
      className="fixed inset-0 z-50 mx-auto max-w-[500px] overflow-hidden bg-blush"
    >
      <motion.img
        src={photos.cover}
        alt="Pika & Aul"
        fetchpriority="high"
        decoding="async"
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          scale: { duration: 2.4, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 0.5 },
        }}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/50" />
      <div className="relative flex h-full flex-col items-center justify-end px-6 pb-[calc(6rem+env(safe-area-inset-bottom))] text-center text-cream sm:px-8 sm:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-xs tracking-[0.2em] opacity-90 sm:text-sm"
        >
          The Wedding Of
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 mb-1 font-script text-5xl sm:text-6xl font-normal text-cream leading-relaxed drop-shadow-sm px-2"
        >
          Pika &amp; Aul
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <p className="mt-6 text-[11px] tracking-wide opacity-90 sm:text-xs">
            Kepada Bapak/Ibu/Saudara/i :
          </p>
          <p className="mt-1 font-display text-base tracking-wide sm:text-lg">{guestName}</p>
        </motion.div>
        <motion.button
          onClick={onOpen}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          whileTap={{ scale: 0.94 }}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/25 px-6 py-3 text-xs font-medium tracking-[0.15em] backdrop-blur transition-colors hover:bg-white/35"
        >
          <MailOpen className="size-4" />
          BUKA UNDANGAN
        </motion.button>
      </div>
    </motion.div>
  );
}
