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
            <li>
              Bpk.H. Ujang Ma'mun, S.Fil.I., M.H., ( kades palasari girang)
            </li>
            <li>Bpk. Pian Supriani (Ketua RT 11)</li>
            <li>Bpk. D Suhenda (Ketua RW)</li>
            <li>Bpk. KH. Harun Arasyid (tokoh agama)</li>
            <li>Bpk. Ust Jakaria (tokoh agama)</li>
            <li>Bpk. Eman Sulaiman (mamang)</li>
            <li>Bpk. Epen Supendi (uwa)</li>
            <li>Bpk. Udin Samsudin (uwa)</li>
            <li>Alm Ibu. Juhairoh (uwa)</li>
            <li>Bpk. Enur (uwa)</li>
            <li>Bpk. Enzat Supriyatna (mamang)</li>
            <li>Bpk. Yuyun (mamang)</li>
            <li>Bpk. Udi Susanto (Ketua RT 8)</li>
            <li>Kelurga besar alm.bapak sain dan alm ibu acut</li>
            <li>Keluarga besar alm. Bapak madsuki dan alm. Ibu ocih</li>
            <li>Ari Wahyudi (kakak Sepupu)</li>
            <li>Sri Rahma Wulan (kakak)</li>
            <li>Yani Karyani (kakak)</li>
            <li>Endi Mulyadi (kakak)</li>
            <li>Yanti Oktapia (kakak)</li>
            <li>Yana Mulyana (kakak)</li>
          </ol>

          <p className="mb-3 font-semibold">Turut mengundang pihak pria:</p>
          <ol className="list-decimal list-inside space-y-0.5">
            <li>Bu hj.nasih (kades mekarsari)</li>
            <li>Bapak RT Ma'mun</li>
            <li>Bapak RW Wardi</li>
            <li>Keluarga besar bapak Acang</li>
            <li>Kelurga besar bpk H.said</li>
            <li>Keluarga besar alm BPK oding</li>
            <li>Komunitas Fotograpy Jonggol (KFJ)</li>
            <li>Musketer's</li>
            <li>Pemuda kp.cipicung 14/06</li>
            <li>Boys garden</li>
            <li>Alumni SMK pijar alam 2 tahun 2016-2017</li>
            <li>Alumni SMP PGRI gandoang 01 tahun 2013/2014</li>
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
