import { motion } from "framer-motion";

const zoomIn = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay, ease: [0, 0, 0.58, 1] as const },
  }),
};

const TurutMengundang = () => {
  return (
    <section
      className="py-14 px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/ornament-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ✅ overlay SAGE (bukan putih lagi) */}
      <div className="absolute inset-0 bg-[#F9D0CD]/50 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-md mx-auto text-center">
        <motion.p
          className="font-body text-xs leading-relaxed mb-6 text-[#021A54]"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga
          apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu
          kepada kedua mempelai. Atas kehadiran serta doa restunya, kami ucapkan
          terima kasih.
        </motion.p>

        <motion.h4
          className="font-display text-base mb-4 uppercase tracking-wider text-[#021A54]"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          viewport={{ once: true }}
        >
          Turut Mengundang
        </motion.h4>

        <motion.div
          className="text-left font-body text-[11px] leading-relaxed mb-8 text-[#021A54]"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          custom={0.3}
          viewport={{ once: true }}
        >
          <p className="mb-3 font-semibold">
            Turut mengundang pihak perempuan:
          </p>
          <ol className="list-decimal list-inside space-y-0.5 mb-4">
            <li>1</li>
            <li>2</li>
          </ol>

          <p className="mb-3 font-semibold">Turut mengundang pihak pria:</p>
          <ol className="list-decimal list-inside space-y-0.5">
            <li>1</li>
            <li>2</li>
          </ol>
        </motion.div>

        <motion.h2
          className="font-script text-4xl text-[#021A54]"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          custom={0.4}
          viewport={{ once: true }}
        >
          Yuni & Refi
        </motion.h2>
      </div>
    </section>
  );
};

export default TurutMengundang;
