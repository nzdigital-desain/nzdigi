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

        {/* === BRI === */}
        <div className="mb-10">
          <img src="/images/BANK.png" alt="BRI" className="w-24 mx-auto mb-4" />

          <p className="text-sm text-[#021A54]">
            No. Rekening : 1111111111111111
          </p>
          <p className="text-sm mb-4 text-[#021A54]">An. catin</p>

          <button
            onClick={() => copyText("1111111111111111")}
            className="px-5 py-2 rounded-full bg-[#021A54] text-white text-sm"
          >
            Salin No. Rekening
          </button>
        </div>

        {/* === BCA === */}
        <div className="mb-10">
          <img
            src="/images/BCA-1-1.png"
            alt="BCA"
            className="w-24 mx-auto mb-4"
          />

          <p className="text-sm text-[#021A54]">
            No. Rekening : 00000000000000001
          </p>
          <p className="text-sm mb-4 text-[#021A54]">An. catin</p>

          <button
            onClick={() => copyText("00000000001")}
            className="px-5 py-2 rounded-full bg-[#021A54] text-white text-sm"
          >
            Salin No. Rekening
          </button>
        </div>

        {/* === ALAMAT === */}
        <div>
          <h3 className="text-sm font-semibold mb-4 tracking-wide text-[#021A54]">
            ALAMAT PENGIRIMAN HADIAH
          </h3>

          <p className="text-sm leading-relaxed mb-4 text-[#021A54]">
            Yuni Ramdani 0857-9499-8719
            <br />
            Kp. Pasir Awi RT 11/03 Desa Palasari Girang,
            <br />
            Kecamatan Kalapanunggal,
            <br />
            Kabupaten Sukabumi
          </p>

          <button
            onClick={() =>
              copyText(
                "Yuni Ramdani 0857-9499-8719 Kp. Pasir Awi RT 11/03 Desa Palasari Girang, Kecamatan Kalapanunggal, Kabupaten Sukabumi",
              )
            }
            className="px-5 py-2 rounded-full bg-[#021A54] text-white text-sm"
          >
            Salin Alamat
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default WeddingGiftSection;
