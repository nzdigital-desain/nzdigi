import { motion } from "framer-motion";

const zoomIn = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay },
  }),
};

const stories = [
  {
    image: "/images/wedingyuni/WhatsApp Image 2026-04-16 at 09.54.17.jpeg",
    title: "Perkenalan",
    text: "Semua berawal dari sapaan di media sosial. Meskipun raga tak langsung berjumpa, namun dunia maya menjadi jembatan perkenalan kami. Percakapan demi percakapan mulai membangun kedekatan yang hangat di antara kami berdua.",
  },
  {
    image: "/images/wedingyuni/WhatsApp Image 2026-04-16 at 09.45.52.jpeg",
    title: "Menjalin Kedekatan",
    text: "Dua tahun lamanya kami menjalin kedekatan tanpa status yang mengikat. Jarak antara Bekasi dan Cileungsi tidak menjadi penghalang, meski saat itu kami hanya memilih untuk saling mengenal dan menguatkan satu sama lain sebagai teman dekat. Kami percaya, waktu yang tepat akan menjawab segalanya. Hingga setahun yang lalu, keyakinan itu pun hadir. Hati mulai terbuka untuk menerima kehadirannya dengan lebih serius. Tanpa melalui ikatan pacaran, kami sepakat untuk membawa hubungan ini ke arah yang lebih bermakna dan penuh komitmen.",
  },
  {
    image: "/images/wedingyuni/WhatsApp Image 2026-04-16 at 09.46.05.jpeg",
    title: "Lamaran & Tunangan",
    text: "Setelah perjalanan panjang penuh rasa sabar, tepat pada tanggal 12 April 2026, kami mengikat janji suci dalam prosesi lamaran. Di hari itu, kami meneguhkan niat untuk menjadi satu dalam ikatan keluarga yang sah.",
  },
  {
    image: "/images/wedingyuni/WhatsApp Image 2026-04-16 at 09.46.06.jpeg",
    title: "Lamaran",
    text: "Kini, kami melangkah menuju hari yang paling dinanti. Atas izin Allah SWT, pernikahan kami akan dilaksanakan pada tanggal 22 Juni 2026. Mengharap doa restu agar perjalanan baru kami ini penuh dengan keberkahan.",
  },
];

const LoveStorySection = () => {
  return (
    <section
      id="story"
      className="py-20 px-6 flex justify-center"
      style={{ backgroundColor: "#e1bcc5d2" }} // 🌿 SAGE LUAR
    >
      <div className="w-full max-w-md space-y-6">
        {stories.map((story, index) => (
          <motion.div
            key={story.title}
            className="bg-gray-100 border-2 border-white rounded-2xl p-4 shadow-lg text-center"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            custom={index * 0.2}
            viewport={{ once: true }}
          >
            {/* FOTO FULL (NO CROP) */}
            <div className="bg-white rounded-lg p-2 mb-3">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* TITLE */}
            <h4 className="text-[#FF85BB] text-sm font-semibold mb-1">
              {story.title}
            </h4>

            {/* TEXT */}
            <p className="text-[#FF85BB] text-xs leading-relaxed">
              {story.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LoveStorySection;
