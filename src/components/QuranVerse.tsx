import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-10-11T10:00:00+07:00").getTime();

const zoomIn = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay },
  }),
};

const QuranVerse = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, WEDDING_DATE - now);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section
      id="jump"
      className="py-20 px-6 relative overflow-hidden bg-[url('/images/ornament-bg.png')] bg-cover bg-center"
    >
      {/* overlay hijau biar mirip desain */}
      <div className="absolute inset-0 bg-[#7f8f7a]/60" />

      {/* ornament bawah */}
      <div className="absolute bottom-0 w-full">
        <img
          src="/images/ornament-bottom.png"
          className="w-full object-cover opacity-90"
        />
      </div>

      <div className="max-w-md mx-auto text-center relative z-10">
        {/* I | A */}
        <motion.div
          className="flex items-center justify-center gap-6 mb-8"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          custom={0}
        >
          <span className="text-5xl text-white font-serif">I</span>
          <div className="w-[1px] h-12 bg-white/70"></div>
          <span className="text-5xl text-white font-serif">A</span>
        </motion.div>

        {/* AYAT */}
        <motion.p
          className="text-lg leading-loose text-white mb-6"
          dir="rtl"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
        >
          وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
          لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗ
          اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
        </motion.p>

        {/* TERJEMAH */}
        <motion.p
          className="text-sm leading-relaxed text-white/90 italic mb-6"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          custom={0.4}
        >
          " Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu
          pasangan hidup dari jenismu sendiri supaya kamu dapat ketenangan hati
          dan dijadikannya kasih sayang di antara kamu. Sesungguhnya yang
          demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang
          berpikir. "
        </motion.p>

        {/* SUMBER */}
        <motion.p
          className="text-sm text-white/80 mb-10"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          custom={0.6}
        >
          ( Q.S. Ar Rum : 21 )
        </motion.p>

        {/* COUNTDOWN */}
        <motion.div
          className="flex justify-center gap-4 mb-8"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          custom={0.8}
        >
          {units.map((unit) => (
            <div
              key={unit.label}
              className="bg-white/90 text-[#5c6b52] rounded-2xl px-4 py-3 w-[70px]"
            >
              <motion.p
                key={unit.value}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg font-semibold"
              >
                {String(unit.value).padStart(2, "0")}
              </motion.p>
              <p className="text-[10px]">{unit.label}</p>
            </div>
          ))}
        </motion.div>

        {/* BUTTON */}
        <motion.a
          href="https://www.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+of+Icha+%26+Andri&dates=20251011T030000Z%2F20251011T150000Z"
          target="_blank"
          className="inline-block bg-white text-[#5c6b52] px-6 py-3 rounded-full text-sm shadow-md"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          custom={1}
        >
          Save to Calendar
        </motion.a>
      </div>
    </section>
  );
};

export default QuranVerse;
