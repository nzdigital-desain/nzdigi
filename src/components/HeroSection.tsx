import { motion } from "framer-motion";

const zoomIn = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay, ease: [0, 0, 0.58, 1] as const },
  }),
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden bg-[url('/images/gallery-3.jpg')] bg-cover bg-center"
    >
      {/* Overlay biar soft seperti desain */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center px-6">
        {/* FOTO OVAL */}
        <motion.div
          className="w-44 h-56 rounded-[50%] overflow-hidden shadow-xl mb-6 -mt-14"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
        >
          <img
            src="/images/couple-main.jpeg"
            alt="Icha & Andri"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* TEXT */}
        <motion.p
          className="text-xs tracking-[0.3em] uppercase mb-2 text-[#5c6b52]"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          custom={0.3}
          viewport={{ once: true }}
        >
          The Wedding Of
        </motion.p>

        <motion.h2
          className="font-script text-5xl md:text-6xl mb-4 text-[#3d4a35]"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          custom={0.5}
          viewport={{ once: true }}
        >
          cewe & cowo
        </motion.h2>

        <motion.p
          className="text-base tracking-[0.2em] text-[#5c6b52]"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          custom={0.7}
          viewport={{ once: true }}
        >
          tgl . bln . thn
        </motion.p>
      </div>

      {/* GIF ORNAMENT BAWAH */}
      <div className="absolute bottom-20 w-full flex justify-center z-0">
        <img
          src="/images/giphy-1.gif"
          alt="ornament"
          className="w-full max-w-md object-contain opacity-90"
        />
      </div>

      {/* SCROLL ICON */}
      <motion.div
        className="absolute bottom-6 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#5c6b52"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
