import { motion } from "framer-motion";

const zoomIn = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay, ease: [0, 0, 0.58, 1] as const },
  }),
};

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.51"/>
  </svg>
);

const LiveStreamSection = () => {
  return (
    <section
      className="py-14 px-6 relative"
      style={{
        backgroundImage: "url('/images/ornament-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#d5c9b1",
      }}
    >
      <motion.div
        className="max-w-md mx-auto text-center"
        variants={zoomIn}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ once: true }}
      >
        <h3 className="font-display text-xl mb-3" style={{ color: "#3d4a35" }}>Live Streaming</h3>
        <p className="font-body text-xs leading-relaxed mb-5" style={{ color: "#5c6b52" }}>
          Kepada Bapak/Ibu/Saudara/i yang berhalangan hadir, dapat menyaksikan acara pernikahan kami secara virtual yang akan disiarkan langsung melalui akun Instagram di bawah ini
        </p>

        <a
          href="https://instagram.com/khoerunnisa_mc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-xs"
          style={{
            backgroundColor: "rgba(92,107,82,0.7)",
            color: "#f0ebe0",
            border: "1px solid rgba(92,107,82,0.4)",
          }}
        >
          <InstagramIcon size={14} />
          khoerunnisa_mc
        </a>

        <p className="font-body text-[10px] mt-3" style={{ color: "#5c6b52" }}>
          Tanggal Live : 11 Oktober 2025<br />
          Waktu : Pukul 09.00 WIB
        </p>
      </motion.div>
    </section>
  );
};

export default LiveStreamSection;
