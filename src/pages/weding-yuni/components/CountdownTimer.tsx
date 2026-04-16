import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2025-10-11T10:00:00+07:00").getTime();

const zoomIn = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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
      className="py-14 px-6 relative"
      style={{
        backgroundImage: "url('/images/ornament-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#d5c9b1",
      }}
    >
      <motion.div
        className="max-w-md mx-auto"
        variants={zoomIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex justify-center gap-3">
          {units.map((unit) => (
            <div key={unit.label} className="flex flex-col items-center">
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-1"
                style={{ backgroundColor: "rgba(92,107,82,0.15)", border: "1px solid rgba(92,107,82,0.25)" }}
              >
                <span className="font-display text-2xl font-bold" style={{ color: "#3d4a35" }}>
                  {String(unit.value).padStart(2, "0")}
                </span>
              </div>
              <span className="font-body text-[10px] uppercase tracking-wider" style={{ color: "#5c6b52" }}>
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <motion.a
            href="https://www.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+of+Icha+%26+Andri&details=The+Wedding+of+Icha+%26+Andri&location=Lapang+Volly+Madrasah+Sirojul+Aulad&dates=20251011T030000Z%2F20251011T150000Z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-body text-xs"
            style={{
              backgroundColor: "rgba(92,107,82,0.7)",
              color: "#f0ebe0",
              border: "1px solid rgba(92,107,82,0.4)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Save to Calendar
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownTimer;
