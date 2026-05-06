import { motion } from "framer-motion";

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const WeddingGiftSection = () => {
  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Disalin!");
  };

  const giftData = [
    {
      bank: "BNI",
      logo: "/images/Bank_Negara_Indonesia_logo_(2004).png",
      rekening: "2013172052",
      atasNama: "yuni ramdani",
    },
    {
      bank: "BCA",
      logo: "/images/BCA-1-1.png",
      rekening: "8415932053",
      atasNama: "yuni ramdani",
    },
    {
      bank: "DANA",
      logo: "/images/Dana_logo.png",
      rekening: "085794998719",
      atasNama: "yuni ramdani",
    },
    {
      bank: "Seabank",
      logo: "/images/SeaBank.svg",
      rekening: "901421772029",
      atasNama: "REFI IRWANSYAH",
    },
    {
      bank: "DANA",
      logo: "/images/Dana_logo.png",
      rekening: "083819605963",
      atasNama: "REFI IRWANSYAH",
    },
  ];

  return (
    <section
      id="gift"
      className="py-20 px-6 relative text-center"
      style={{
        backgroundImage: "url('/images/ornament-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay sage */}
      <div className="absolute inset-0 bg-[#F9D0CD]/80" />

      <motion.div
        className="relative z-10 max-w-md mx-auto text-white"
        variants={zoomIn}
        initial="hidden"
        whileInView="visible"
      >
        {/* TITLE */}
        <h2 className="text-3xl font-serif mb-6 tracking-wide text-[#021A54]">
          Wedding Gift
        </h2>

        {/* DESC */}
        <p className="text-sm leading-relaxed mb-10 opacity-90 text-[#021A54]">
          Doa restu Anda merupakan karunia terindah bagi kami. Dan jika memberi
          adalah ungkapan tanda kasih, dengan senang hati kami menerima kado
          secara cashless
        </p>

        {/* LIST REKENING */}
        <div className="space-y-4 mb-12">
          {giftData.map((item, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-sm p-4 rounded-2xl border border-white/60 flex items-center justify-between gap-3 shadow-sm"
            >
              {/* Logo Bank */}
              <div className="w-16 flex-shrink-0">
                <img
                  src={item.logo}
                  alt={item.bank}
                  className="w-full h-8 object-contain"
                />
              </div>

              {/* Info Rekening */}
              <div className="flex-1 text-left">
                <p className="text-xs font-bold text-[#021A54] leading-none mb-1">
                  {item.rekening}
                </p>
                <p className="text-[10px] uppercase tracking-wider text-[#021A54] opacity-80">
                  An. {item.atasNama}
                </p>
              </div>

              {/* Tombol Salin */}
              <button
                onClick={() => copyText(item.rekening)}
                className="px-3 py-2 rounded-xl bg-[#021A54] text-white text-[10px] font-medium active:scale-95 transition-transform"
              >
                Salin
              </button>
            </div>
          ))}
        </div>

        {/* === ALAMAT === */}
        <div className="bg-white/20 p-6 rounded-3xl border border-white/40">
          <h3 className="text-sm font-semibold mb-4 tracking-wide text-[#021A54]">
            ALAMAT PENGIRIMAN HADIAH
          </h3>

          <p className="text-xs leading-relaxed mb-6 text-[#021A54]">
            <span className="font-bold">Yuni Ramdani (0857-9499-8719)</span>
            <br />
            Kp. Pasir Awi RT 11/03 Desa Palasari Girang,
            <br />
            Kecamatan Kalapanunggal, Kabupaten Sukabumi
          </p>

          <button
            onClick={() =>
              copyText(
                "Yuni Ramdani 0857-9499-8719 Kp. Pasir Awi RT 11/03 Desa Palasari Girang, Kecamatan Kalapanunggal, Kabupaten Sukabumi",
              )
            }
            className="px-5 py-2 rounded-full bg-[#021A54] text-white text-sm shadow-md"
          >
            Salin Alamat
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default WeddingGiftSection;
