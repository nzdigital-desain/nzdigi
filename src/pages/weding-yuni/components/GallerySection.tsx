import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🔥 container: ngatur urutan muncul
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18, // ⬅️ lebih gede biar keliatan satu-satu
      delayChildren: 0.2, // ⬅️ nunggu dikit sebelum mulai
    },
  },
};

// 🔥 item: animasi tiap gambar
const item = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const images = [
  "/images/wedingyuni/WhatsApp Image 2026-04-16 at 09.45.55.jpeg",
  "/images/wedingyuni/WhatsApp Image 2026-04-16 at 09.45.52.jpeg",
  "/images/wedingyuni/WhatsApp Image 2026-04-16 at 09.45.57.jpeg",
  "/images/wedingyuni/WhatsApp Image 2026-04-16 at 09.46.06.jpeg",
  "/images/wedingyuni/WhatsApp Image 2026-04-16 at 09.54.17.jpeg",
  "/images/wedingyuni/WhatsApp Image 2026-04-16 at 09.46.07.jpeg",
  "/images/wedingyuni/WhatsApp Image 2026-04-16 at 09.54.16.jpeg",
  "/images/wedingyuni/WhatsApp Image 2026-04-16 at 09.54.08.jpeg",
  "/images/wedingyuni/WhatsApp Image 2026-04-16 at 09.46.04.jpeg",
  "/images/wedingyuni/WhatsApp Image 2026-04-16 at 09.45.51.jpeg",
  "/images/wedingyuni/WhatsApp Image 2026-04-17 at 07.19.17 (1).jpeg",
  "/images/wedingyuni/WhatsApp Image 2026-04-17 at 07.19.17 (2).jpeg",
  "/images/wedingyuni/WhatsApp Image 2026-04-16 at 09.46.41.jpeg",
  "/images/wedingyuni/WhatsApp Image 2026-04-17 at 07.19.18 (2).jpeg",
  "/images/wedingyuni/WhatsApp Image 2026-04-16 at 09.46.01.jpeg",
  "/images/wedingyuni/WhatsApp Image 2026-04-17 at 07.19.17.jpeg",
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="py-20 px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/gallery-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <motion.div
        className="relative z-10 max-w-md mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* TITLE */}
        <motion.h3
          variants={item}
          className="text-white text-xl text-center mb-8"
        >
          Gallery
        </motion.h3>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-3">
          {images.map((src, index) => (
            <motion.div
              key={src}
              variants={item}
              className="rounded-2xl overflow-hidden cursor-pointer shadow-lg overflow-hidden cursor-pointer shadow-lg flex items-center justify-center bg-black/10"
              whileHover={{ scale: 2.06 }}
              whileTap={{ scale: 100 }}
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="preview"
              className="max-w-full max-h-[90vh] object-contain rounded-xl"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1] as const,
                },
              }}
              exit={{ opacity: 0, scale: 0.9 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
