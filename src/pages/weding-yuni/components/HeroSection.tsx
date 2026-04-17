import { motion, Variants } from "framer-motion";

// 1. Definisi Variasi Animasi dengan Type Safety
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 2.8,
      delay,
      ease: [0.215, 0.61, 0.355, 1] as const, // Fix TS Error: as const
    },
  }),
};

const zoomInScale: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut" as const, // Fix TS Error: as const
    },
  },
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden bg-cover bg-center"
    >
      {/* BACKGROUND IMAGE DENGAN ANIMASI ZOOM */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-[url('/images/gallery-3.jpg')] bg-cover bg-center"
      />

      {/* OVERLAY BIAR TEKS TERBACA */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-[1]" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col items-center px-6">
        {/* FOTO OVAL */}
        <motion.div
          className="w-44 h-56 rounded-[50%] overflow-hidden shadow-2xl mb-8 -mt-14 border-4 border-white/50"
          variants={zoomInScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/images/wedingyuni/WhatsApp Image 2026-04-16 at 09.45.52.jpeg"
            alt="Wedding Couple"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* TEKS "THE WEDDING OF" */}
        <motion.p
          className="text-xs tracking-[0.4em] uppercase mb-3 text-[#550000] font-medium"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={0.5} // Delay manual lewat custom prop
          viewport={{ once: true }}
        >
          The Wedding Of
        </motion.p>

        {/* NAMA MEMPELAI */}
        <motion.h2
          className="font-script text-6xl md:text-7xl mb-4 text-[#550000] drop-shadow-sm"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={0.8}
          viewport={{ once: true }}
        >
          cewe & cowo
        </motion.h2>

        {/* TANGGAL */}
        <motion.p
          className="text-base tracking-[0.25em] text-[#550000]/80 font-light"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={1.1}
          viewport={{ once: true }}
        >
          22 . Juni . 2026
        </motion.p>
      </div>

      {/* ORNAMEN BAWAH (FLOATING ANIMATION) */}
      <motion.div
        className="absolute bottom-16 w-full flex justify-center z-[2]"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="/images/giphy-1.gif"
          alt="ornament"
          className="w-full max-w-md object-contain opacity-70 mix-blend-multiply"
        />
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        className="absolute bottom-8 z-20 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#550000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
