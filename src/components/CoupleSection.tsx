import { motion } from "framer-motion";

const zoomIn = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay },
  }),
};

const InstagramIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" />
    <circle cx="12" cy="12" r="5" />
  </svg>
);

const CoupleSection = () => {
  return (
    <section
      id="couple"
      className="min-h-[150vh] py-24 px-6 relative flex items-center justify-center overflow-hidden bg-[url('/images/16-2-scaled-1.jpg')] bg-cover bg-center"
    >
      {/* OVERLAY SAGE TIPIS */}
      <div className="absolute inset-0 bg-[#7f8f7a]/30" />

      {/* OVAL HIJAU DALAM */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[90%] max-w-md h-[85%] bg-[#7f8f7a]/80 backdrop-blur-sm border border-white/30 shadow-2xl rounded-[999px/400px]" />
      </div>
      {/* ORNAMENT BAWAH */}
      <div className="absolute bottom-0 w-full z-0">
        <img
          src="/images/ornament-bottom.png"
          className="w-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-md mx-auto text-center px-8 py-16 text-white">
        {/* BISMILLAH */}
        <motion.p
          className="text-lg mb-4"
          dir="rtl"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          custom={0}
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْمِ
        </motion.p>

        {/* TEXT */}
        <motion.p
          className="text-sm leading-relaxed mb-10 text-white/90"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
        >
          Maha suci Allah SWT yang telah menciptakan makhluk-Nya
          berpasang-pasangan. Tanpa mengurangi rasa hormat, dengan ini kami
          bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara
          pernikahan kami :
        </motion.p>

        {/* BRIDE */}
        <motion.div
          className="mb-10"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          custom={0.3}
        >
          <div className="w-40 h-52 mx-auto rounded-[100px] overflow-hidden shadow-xl border border-white/50 mb-4">
            <img
              src="/images/bride.jpeg"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-2xl mb-2 font-serif">cewe</h3>

          <p className="text-sm mb-2 text-white/80">
            Putri Pertama dari <br />
            Bapak <br />& Ibu
          </p>

          <p className="text-xs flex items-center justify-center gap-1 text-white/70">
            <InstagramIcon size={12} /> @ig
          </p>
        </motion.div>

        {/* & */}
        <motion.p
          className="text-4xl mb-10 text-white/80"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          custom={0.4}
        >
          &
        </motion.p>

        {/* GROOM */}
        <motion.div
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          custom={0.5}
        >
          <div className="w-40 h-52 mx-auto rounded-[100px] overflow-hidden shadow-xl border border-white/50 mb-4">
            <img
              src="/images/groom.jpeg"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-2xl mb-2 font-serif">cowo</h3>

          <p className="text-sm mb-2 text-white/80">
            Putra Pertama dari <br />
            Bapak <br />& Ibu
          </p>

          <p className="text-xs flex items-center justify-center gap-1 text-white/70">
            <InstagramIcon size={12} /> @ig
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoupleSection;
