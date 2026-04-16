import { motion } from "framer-motion";

const zoomIn = {
  hidden: { opacity: 0, scale: 1.8 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay },
  }),
};

const EventSection = () => {
  const events = [
    {
      title: "Akad Nikah",
      date: "Senin, 22 Juni 2026",
      time: "Pukul 10.00 WIB - Selesai",
      location:
        "Rumah Mempelai Wanita\nKp. Pasir Awi RT 11/03, Desa Palasari Girang Kec. Kalapanunggal, Kab. Sukabumi",
      mapUrl: "https://maps.app.goo.gl/QBiD9bCAMoWksqD5A",
      bg: "/images/gallery-1.jpg",
    },
    {
      title: "Resepsi",
      date: "Senin, 22 Juni 2026",
      time: "Pukul 10.00 WIB - Selesai",
      location:
        "Rumah Mempelai Wanita\nKp. Pasir Awi RT 11/03, Desa Palasari Girang Kec. Kalapanunggal, Kab. Sukabumi",
      mapUrl: "https://maps.app.goo.gl/QBiD9bCAMoWksqD5A",
      bg: "/images/gallery-1.jpg",
    },
  ];

  return (
    <section
      id="event"
      className="py-20 px-6 flex justify-center"
      style={{ backgroundColor: "#efb1c0d2" }}
    >
      <div className="w-full max-w-md space-y-6">
        {events.map((event, index) => (
          <motion.div
            key={event.title}
            className="relative rounded-[25px] overflow-hidden shadow-xl"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            custom={index * 0.2}
          >
            {/* GAMBAR FULL */}
            <img src={event.bg} className="w-full h-auto object-contain" />

            {/* OVERLAY GELAP BIAR TEKS KELIHATAN */}
            <div className="absolute inset-0 bg-black/40" />

            {/* TEXT DI ATAS GAMBAR */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h3 className="text-2xl mb-4 font-serif">{event.title}</h3>

              <p className="text-sm font-semibold mb-1">{event.date}</p>

              <p className="text-sm mb-3">{event.time}</p>

              <div className="text-lg mb-2">📍</div>

              <p className="text-sm whitespace-pre-line mb-5">
                {event.location}
              </p>

              <motion.a
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs bg-white/20 backdrop-blur-md border border-white/40"
                whileHover={{ scale: 1.05 }}
              >
                Petunjuk Lokasi
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventSection;
