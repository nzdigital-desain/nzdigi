import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ANIMASI MASUK SAAT SCROLL */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.92,
    rotate: 1.5,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const titleAnim = {
  hidden: {
    opacity: 0,
    y: 30,
    letterSpacing: "0.4em",
  },
  visible: {
    opacity: 1,
    y: 0,
    letterSpacing: "0.25em",
    transition: {
      duration: 1,
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
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px]" />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 max-w-md mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
      >
        {/* TITLE */}
        <motion.h3
          variants={titleAnim}
          className="text-white text-2xl text-center mb-10 font-light tracking-[0.25em]"
        >
          GALLERY
        </motion.h3>

        {/* GRID */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, index) => (
            <motion.button
              key={src}
              variants={item}
              onClick={() => setSelectedImage(src)}
              className="group relative rounded-2xl overflow-hidden shadow-xl bg-white/10"
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500" />
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.88)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="preview"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 15,
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
