import { motion } from "framer-motion";
import { Mail } from "lucide-react";

interface CoverSectionProps {
  onOpen: () => void;
  guestName?: string;
}

const CoverSection = ({
  onOpen,
  guestName = "Nama Tamu",
}: CoverSectionProps) => {
  const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  };
  return (
    <motion.section className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[url('/images/ornament-bg.png')] bg-cover bg-center">
      {/* texture overlay biar lebih soft */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />

      {/* ornament bawah */}
      <div className="absolute bottom-0 w-full">
        <img
          src="/images/gallery-2.jpg"
          alt="ornament"
          className="w-full object-cover"
        />
      </div>

      {/* MAIN CARD */}
      <div className="relative z-10 w-[90%] max-w-sm px-6 py-10 text-center">
        {" "}
        {/* FOTO OVAL */}
        <motion.div
          className="w-40 h-30 mx-auto rounded-[50%] overflow-hidden border-4 border-white/40 shadow-xl mb-5"
          initial={{ scale: 0, opacity: 0, y: 0 }}
          animate={{ scale: 1, opacity: 1, y: -120 }} // -50 ini akan menaikkan foto 50px ke atas
          transition={{ duration: 2.8, type: "spring" }}
        >
          <img
            src="/images/wedingyuni/WhatsApp Image 2026-04-16 at 09.45.52.jpeg"
            alt="cewe & cowo"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* TEXT */}
        <motion.p
          className="text-xs tracking-[0.3em] uppercase mb-1 text-[#550000]/80"
          initial={{ opacity: 0 }}
          animate={{ scale: 1, opacity: 1, y: -100 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Wedding Invitation
        </motion.p>
        <motion.h1
          className="font-script text-5xl md:text-5xl mb-4 text-[#550000]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ scale: 1, opacity: 1, y: -95 }}
          transition={{ duration: 3.8, type: "spring" }}
        >
          Yuni & Refi
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ scale: 1, opacity: 1, y: -90 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
        >
          <p className="text-xs text-[#550000]/80 mb-1">
            Kepada Bapak/Ibu/Saudara/i :
          </p>
          <p className="text-xl font-semibold text-[#550000] mb-6">
            {guestName}
          </p>
        </motion.div>
        {/* BUTTON */}
        <motion.button
          onClick={onOpen}
          className="flex items-center justify-center gap-2 mx-auto px-6 py-3 rounded-full text-xs tracking-wider uppercase bg-white/20 text-[#550000] border border-white/30 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: -30 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail size={17} />
          Buka Undangan
        </motion.button>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center">
        <img
          src="/images/giphy-1.gif"
          alt="ornament"
          className="w-full max-w-md object-contain"
        />
      </div>
    </motion.section>
  );
};

export default CoverSection;
