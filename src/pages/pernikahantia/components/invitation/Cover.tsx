import { MailOpen } from "lucide-react";
import { motion } from "framer-motion";
import { photos, BRIDE_SHORT, GROOM_SHORT } from "../../lib/invitation-data";

export function Cover({ open, onOpen, guestName = "Tamu Undangan" }: { open: boolean; onOpen: () => void; guestName?: string }) {
  return (
    <motion.div
      aria-hidden={open}
      initial={false}
      animate={{ y: open ? "-100%" : "0%" }}
      transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
      style={{ pointerEvents: open ? "none" : "auto" }}
      className="tia-theme fixed inset-0 z-50 mx-auto max-w-[500px] overflow-hidden bg-[#1F395C]"
    >
      <motion.img
        src={photos.cover}
        alt={`${BRIDE_SHORT} & ${GROOM_SHORT}`}
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
      <div className="absolute inset-0" style={{ background: "var(--gradient-blush)" }} />
      <div className="relative flex h-full flex-col items-center justify-end px-6 pb-[calc(6rem+env(safe-area-inset-bottom))] text-center text-cream sm:px-8 sm:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-xs tracking-[0.2em] opacity-90 sm:text-sm uppercase text-white"
        >
          The Wedding Of
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 mb-1 font-script text-5xl sm:text-6xl font-normal text-white leading-relaxed drop-shadow-sm px-2"
        >
          {BRIDE_SHORT} &amp; {GROOM_SHORT}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <p className="mt-6 text-[11px] tracking-wide opacity-90 sm:text-xs text-white/90">
            Kepada Bapak/Ibu/Saudara/i :
          </p>
          <p className="mt-1 font-display text-base tracking-wide sm:text-lg text-white font-medium">{guestName}</p>
        </motion.div>
        <motion.button
          onClick={onOpen}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          whileTap={{ scale: 0.94 }}
          style={{ background: "var(--gradient-ocean-deep)" }}
          className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-white px-7 py-3 text-xs font-medium tracking-[0.16em] text-white shadow-lg transition-all hover:brightness-110 active:scale-95"
        >
          <MailOpen className="size-4" />
          BUKA UNDANGAN
        </motion.button>
      </div>
    </motion.div>
  );
}
