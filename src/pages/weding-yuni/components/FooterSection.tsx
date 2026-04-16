import { motion } from "framer-motion";

const zoomIn = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const FooterSection = () => {
  return (
    <section
      className="py-14 px-6"
      style={{
        backgroundColor: "#F9D0CD", // 🌿 sage solid (sesuai gambar)
      }}
    >
      <motion.div
        className="max-w-md mx-auto text-center"
        variants={zoomIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* TEXT */}
        <p className="text-sm text-[#021A54]/90 mb-6 tracking-wide">
          Made With Love By
        </p>

        {/* LOGO */}
        <div className="mb-6 flex justify-center">
          <img
            src="/images/nz logo.png" // 🔥 ganti sesuai logo kamu
            alt="inviglory"
            className="w-28 object-contain"
          />
        </div>

        {/* ICONS */}
        <div className="flex justify-center gap-4">
          {/* LINK */}
          <a
            href="https://www.instagram.com/nrlzmn1/"
            className="w-11 h-11 rounded-full bg-white/80 flex items-center justify-center shadow-md"
          >
            🔗
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/nrlzmn1/"
            className="w-11 h-11 rounded-full bg-white/80 flex items-center justify-center shadow-md"
          >
            📷
          </a>

          {/* SHOP */}
          <a
            href="https://api.whatsapp.com/send/?phone=6285975213222"
            className="w-11 h-11 rounded-full bg-white/80 flex items-center justify-center shadow-md"
          >
            🛒
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default FooterSection;
