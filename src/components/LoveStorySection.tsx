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
    image: "/images/story-1.jpeg",
    title: "Perkenalan",
    text: "Dengan penuh syukur dan cinta yang tumbuh dalam doa... Perjalanan kami bermula dari pertemuan sederhana di dunia maya.",
  },
  {
    image: "/images/story-2.jpeg",
    title: "Awal Bertemu",
    text: "Hubungan kami harus melewati jarak, lautan, dan waktu. Kami menjalin kisah cinta dalam kesabaran dan kepercayaan.",
  },
  {
    image: "/images/story-3.jpeg",
    title: "Tunangan",
    text: "Dalam diam kami berjanji, dalam jarak kami saling setia. Desember 2023 menjadi momen spesial.",
  },
  {
    image: "/images/story-4.jpeg",
    title: "Lamaran",
    text: "Langkah demi langkah, restu demi restu. November 2024 menjadi momen penuh haru.",
  },
  {
    image: "/images/story-5.jpeg",
    title: "Pernikahan",
    text: "Dan kini kami melangkah menuju hari bahagia. Insya Allah, 11 Oktober 2025 menjadi awal baru kami.",
  },
];

const LoveStorySection = () => {
  return (
    <section
      id="story"
      className="py-20 px-6 flex justify-center"
      style={{ backgroundColor: "#7a8f77" }} // 🌿 SAGE LUAR
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
            <h4 className="text-[#3d4a35] text-sm font-semibold mb-1">
              {story.title}
            </h4>

            {/* TEXT */}
            <p className="text-[#5c6b52] text-xs leading-relaxed">
              {story.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LoveStorySection;
