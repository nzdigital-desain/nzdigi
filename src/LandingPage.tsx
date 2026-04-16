import { motion } from "framer-motion";
import { Globe, Heart, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-indigo-50 text-slate-900 font-sans">
      {/* --- NAVBAR --- */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          {/* LOGO */}
          <img
            src="public\images\nz logo.png"
            alt="NZDIGI Logo"
            className="h-10 w-auto object-contain"
          />

          {/* Nama brand (hapus kalau logo sudah ada tulisan) */}
          <span className="font-bold text-lg tracking-wide">NZDIGITAL</span>
        </div>

        <a
          href="https://wa.me/6285975213222"
          className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Kontak
        </a>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <span className="px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
            Undangan Digital & Website Profesional
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">
            Abadikan Momen Spesial dengan{" "}
            <span className="text-indigo-600">Sentuhan Digital</span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Jasa pembuatan undangan digital & website modern yang elegan,
            interaktif, dan meningkatkan citra profesional Anda.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/6285975213222"
              className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              Konsultasi Gratis
            </a>
          </div>
        </motion.div>
      </header>

      {/* --- SERVICES --- */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Layanan Kami</h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart className="w-8 h-8 text-pink-500" />,
              title: "Undangan Pernikahan",
              desc: "Desain eksklusif dengan musik, galeri, RSVP & countdown.",
            },
            {
              icon: <Smartphone className="w-8 h-8 text-indigo-500" />,
              title: "Mobile Friendly",
              desc: "Tampilan optimal di semua device, cepat & responsif.",
            },
            {
              icon: <Globe className="w-8 h-8 text-emerald-500" />,
              title: "Website Bisnis",
              desc: "Landing page profesional untuk meningkatkan trust.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition"
            >
              {item.icon}
              <h3 className="mt-6 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-slate-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 px-6 text-center bg-indigo-600 text-white">
        <h2 className="text-3xl font-bold">Siap Mulai Project?</h2>
        <p className="mt-4 text-indigo-100">
          Konsultasi gratis dan wujudkan ide digital Anda sekarang.
        </p>

        <a
          href="https://wa.me/6285975213222"
          className="inline-block mt-8 px-8 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-slate-100 transition"
        >
          Hubungi Sekarang
        </a>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-white py-10 px-6 text-center">
        <p className="text-slate-400">© 2026 NZDIGI Digital Studio</p>
      </footer>
    </div>
  );
};

export default LandingPage;
