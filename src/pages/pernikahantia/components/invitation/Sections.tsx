import React, { useEffect, useMemo, useState, type ReactNode } from "react";
import { CalendarPlus, MapPin, Copy, Check, Globe, Phone } from "lucide-react";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import {
  photos,
  gallery,
  events,
  loveStory,
  turutMengundang,
  topStrip,
  WEDDING_DATE,
  BRIDE_FULL,
  BRIDE_SHORT,
  GROOM_FULL,
  GROOM_SHORT,
  BRIDE_FATHER,
  BRIDE_MOTHER,
  GROOM_FATHER,
  GROOM_MOTHER,
  BRIDE_IG,
  GROOM_IG,
  MAPS_LINK,
  BANK_MANDIRI_NUMBER,
  BANK_MANDIRI_NAME,
  GOPAY_NUMBER,
  GOPAY_NAME,
  GIFT_ADDRESS,
  GIFT_ADDRESS_COPY,
} from "../../lib/invitation-data";
import { THEME, DRESS_CODE_SWATCHES } from "../../theme";
import { motion } from "framer-motion";
import { Reveal, Stagger, staggerChild } from "./Reveal";
import { Lightbox } from "./Lightbox";

export function ScriptTitle({ text, className = "", style }: { text: string; className?: string; style?: React.CSSProperties }) {
  return (
    <span data-text={text} className={`script-title ${className}`} style={style}>
      {text}
    </span>
  );
}

export function CapsTitle({ text, className = "", style }: { text: string; className?: string; style?: React.CSSProperties }) {
  return (
    <span data-text={text} className={`ghost-caps font-display tracking-[0.14em] ${className}`} style={style}>
      {text}
    </span>
  );
}

function useCountdown(target: string) {
  const to = useMemo(() => new Date(target).getTime(), [target]);
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const d = now === null ? 0 : Math.max(0, to - now);
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  };
}

export function Hero() {
  return (
    <section id="home" className="overflow-hidden">
      <div className="relative">
        <motion.img
          src={photos.cover}
          alt={`${BRIDE_SHORT} dan ${GROOM_SHORT}`}
          className="h-[100svh] min-h-[520px] w-full object-cover"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-blush)" }} />
        <motion.div
          className="absolute inset-x-0 bottom-0 px-6 pb-12 text-center text-white sm:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-body text-[11px] tracking-[0.25em] sm:text-xs uppercase text-white/90 drop-shadow">THE WEDDING OF</p>
          <h2 className="mt-3 mb-1 font-script text-5xl sm:text-6xl font-normal text-white leading-relaxed drop-shadow-md">{BRIDE_SHORT} &amp; {GROOM_SHORT}</h2>
          <p className="mt-2 text-xs tracking-widest sm:text-sm font-medium text-[#FFEED6] drop-shadow">{new Date(WEDDING_DATE).toLocaleDateString("id-ID", { day: "2-digit", month: "2-digit", year: "numeric" }).split("/").join(" . ")}</p>
        </motion.div>
      </div>
    </section>
  );
}

export function CountdownSection() {
  const c = useCountdown(WEDDING_DATE);
  return (
    <section className="bg-[#FFEED6] px-4 py-14 text-center sm:px-6">
      <Reveal>
        <ScriptTitle text="Count The Date" className="text-3xl sm:text-4xl text-[#5C3A1E]" style={{ color: "#5C3A1E" }} />
        <p className="mt-2 font-display text-[11px] uppercase tracking-[0.2em] text-[#7A522E] font-medium">
          Menuju Hari Bahagia
        </p>
      </Reveal>
      <Stagger className="mt-8 grid grid-cols-4 gap-2 sm:gap-3 max-w-[420px] mx-auto">
        {[
          [c.days, "Hari"],
          [c.hours, "Jam"],
          [c.minutes, "Menit"],
          [c.seconds, "Detik"],
        ].map(([v, l]) => (
          <motion.div
            key={l as string}
            variants={staggerChild}
            className="rounded-2xl border border-[#E5C9A6] bg-white/90 py-4 shadow-sm backdrop-blur-sm"
          >
            <p className="font-serif text-2xl leading-none text-[#5C3A1E] sm:text-3xl font-bold">
              {String(v).padStart(2, "0")}
            </p>
            <p className="mt-1.5 text-[9px] uppercase tracking-widest text-[#7A522E] font-semibold sm:text-[10px]">{l}</p>
          </motion.div>
        ))}
      </Stagger>
      <motion.a
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileTap={{ scale: 0.96 }}
        href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+${encodeURIComponent(BRIDE_SHORT)}+%26+${encodeURIComponent(GROOM_SHORT)}&dates=${WEDDING_DATE.replace(/[-:]/g, '').replace('T', 'T').slice(0,15)}00Z/${WEDDING_DATE.replace(/[-:]/g, '').replace('T', 'T').slice(0,13)}0000Z&location=${encodeURIComponent(events[0]?.place?.join(', ') ?? '')}`}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#5C3A1E] bg-[#5C3A1E] px-6 py-2.5 text-[11px] font-medium tracking-[0.16em] text-white shadow-md transition-all hover:bg-[#7A522E] active:scale-95"
      >
        <CalendarPlus className="size-4" />
        SAVE THE DATE
      </motion.a>
    </section>
  );
}

export function Quote() {
  return (
    <section className="bg-[#FFEED6]">
      <div className="relative min-h-[100svh] overflow-hidden">
        <img
          src={photos.g3}
          alt={`${BRIDE_SHORT} dan ${GROOM_SHORT}`}
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(45,25,12,0.65)" }} />
        <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 py-16 text-center text-white sm:px-9">
          <Reveal>
            <p dir="rtl" className="font-serif text-[26px] leading-[2.1] text-white drop-shadow-md sm:text-3xl font-medium">
              وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا
              اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ
              لِّقَوْمٍ يَّتَفَكَّرُوْنَ
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-8 max-w-sm text-[12px] italic leading-relaxed text-white/95 drop-shadow sm:text-[13px]">
              &quot; Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup
              dari jenismu sendiri supaya kamu dapat ketenangan hati dan dijadikannya kasih sayang
              di antara kamu. Sesungguhnya yang demikian menjadi tanda-tanda kebesaran-Nya bagi
              orang-orang yang berpikir. &quot;
            </p>
            <p className="mt-7 text-[12px] italic tracking-wide text-[#FFEED6] font-semibold drop-shadow sm:text-[13px]">
              ( Q.S. Ar-Rum: 21 )
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function BrideGroom() {
  return (
    <section id="bride-groom" className="bg-[#F8F7F7] pt-14 pb-14 text-center">
      {/* Prewedding marquee strip */}
      <div className="no-scrollbar overflow-hidden pb-10">
        <motion.div
          className="flex w-max gap-2 pl-2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 26, ease: "linear", repeat: Infinity }}
        >
          {[...topStrip, ...topStrip].map((src, i) => (
            <img
              key={`${src}-${i}`}
              src={src}
              alt={`Momen prewedding ${(i % topStrip.length) + 1}`}
              loading="lazy"
              className="h-28 w-32 shrink-0 rounded-md object-cover sm:h-32 sm:w-36 shadow-sm"
            />
          ))}
        </motion.div>
      </div>

      <Reveal>
        <ScriptTitle text="Bride & Groom" className="text-3xl sm:text-4xl text-[#5C3A1E]" style={{ color: "#5C3A1E" }} />
      </Reveal>

      <Reveal delay={0.1}>
        <p
          className="mt-8 px-6 font-serif text-xl leading-relaxed sm:text-2xl font-medium"
          style={{ color: "#5C3A1E" }}
          dir="rtl"
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْمِ
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mx-auto mt-6 max-w-xs px-4 text-[12px] leading-relaxed text-[#4A3525]">
          Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.
          <br />
          Tanpa mengurangi rasa hormat, dengan ini kami bermaksud mengundang Bapak/Ibu/Saudara/i
          untuk hadir pada acara pernikahan kami :
        </p>
      </Reveal>

      {/* Inviglory Ocean Deep Style Couple Presentation */}
      <div className="mt-10 space-y-7 px-3 sm:px-6">
        {/* THE BRIDE */}
        <Reveal>
          <div className="mx-auto flex max-w-[460px] items-stretch gap-2.5 sm:gap-3.5">
            {/* Left Badge: The Bride */}
            <div
              className="flex w-[18%] min-w-[44px] max-w-[54px] items-center justify-center rounded-bl-[45px] rounded-tr-[45px] py-6 shadow-md"
              style={{ background: "linear-gradient(180deg, #E5C9A6 0%, #C59B27 100%)" }}
            >
              <span className="select-none font-caps text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-white [writing-mode:vertical-rl] rotate-180 font-bold">
                The Bride
              </span>
            </div>

            {/* Right Card: Photo with Bottom Overlay */}
            <div className="relative min-h-[420px] flex-1 overflow-hidden rounded-br-[75px] rounded-tl-[75px] shadow-lg sm:min-h-[460px] sm:rounded-br-[90px] sm:rounded-tl-[90px] border border-[#E5C9A6]" style={{ backgroundColor: "#4A3525" }}>
              <img
                src={photos.bride}
                alt={BRIDE_FULL}
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end rounded-br-[75px] px-5 pb-6 pt-24 text-left sm:rounded-br-[90px] sm:px-6 sm:pb-7" style={{ background: "linear-gradient(to top, rgba(45,25,12,0.95) 0%, rgba(92,58,30,0.60) 50%, transparent 100%)" }}>
                <h3 className="font-serif text-2xl font-normal leading-tight tracking-wide text-white drop-shadow sm:text-[27px]">
                  {BRIDE_FULL}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#FFEED6] sm:text-[13px]">
                  Putri dari
                </p>
                <div className="mt-0.5 space-y-0.5 text-xs font-light leading-relaxed text-white/90 sm:text-[13px]">
                  <p>{BRIDE_FATHER}</p>
                  <p>&amp; {BRIDE_MOTHER}</p>
                </div>
                <div className="mt-3.5 flex items-center">
                  <a
                    href={BRIDE_IG}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/35 active:scale-95"
                    aria-label={`Instagram ${BRIDE_FULL}`}
                  >
                    <InstagramIcon size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Love Found Us Divider */}
        <Reveal delay={0.2} className="my-8 flex justify-center">
          <div className="rounded-full border px-8 py-2.5 shadow-md backdrop-blur-sm" style={{ borderColor: "#C59B27", backgroundColor: "#5C3A1E" }}>
            <span className="font-serif text-lg italic tracking-widest font-normal sm:text-xl text-[#FFEED6]">
              Love Found Us
            </span>
          </div>
        </Reveal>

        {/* THE GROOM */}
        <Reveal>
          <div className="mx-auto flex max-w-[460px] items-stretch gap-2.5 sm:gap-3.5">
            {/* Left Card: Photo with Bottom Overlay (Mirrored) */}
            <div className="relative min-h-[420px] flex-1 overflow-hidden rounded-bl-[75px] rounded-tr-[75px] shadow-lg sm:min-h-[460px] sm:rounded-bl-[90px] sm:rounded-tr-[90px] border border-[#E5C9A6]" style={{ backgroundColor: "#4A3525" }}>
              <img
                src={photos.groom}
                alt={GROOM_FULL}
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-end justify-end rounded-bl-[75px] px-5 pb-6 pt-24 text-right sm:rounded-bl-[90px] sm:px-6 sm:pb-7" style={{ background: "linear-gradient(to top, rgba(45,25,12,0.95) 0%, rgba(92,58,30,0.60) 50%, transparent 100%)" }}>
                <h3 className="font-serif text-2xl font-normal leading-tight tracking-wide text-white drop-shadow sm:text-[27px]">
                  {GROOM_FULL}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#FFEED6] sm:text-[13px]">
                  Putra dari
                </p>
                <div className="mt-0.5 space-y-0.5 text-xs font-light leading-relaxed text-white/90 sm:text-[13px]">
                  <p>{GROOM_FATHER}</p>
                  <p>&amp; {GROOM_MOTHER}</p>
                </div>
                <div className="mt-3.5 flex items-center justify-end">
                  <a
                    href={GROOM_IG}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:bg-white/35 active:scale-95"
                    aria-label={`Instagram ${GROOM_FULL}`}
                  >
                    <InstagramIcon size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Badge: The Groom */}
            <div
              className="flex w-[18%] min-w-[44px] max-w-[54px] items-center justify-center rounded-br-[45px] rounded-tl-[45px] py-6 shadow-md"
              style={{ background: "linear-gradient(180deg, #E5C9A6 0%, #C59B27 100%)" }}
            >
              <span className="select-none font-caps text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-white [writing-mode:vertical-rl] font-bold">
                The Groom
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EventCard({ e }: { e: (typeof events)[number] }) {
  return (
    <Reveal
      className="arch-top arch-bottom relative mx-4 overflow-hidden border-2 border-[#E5C9A6] shadow-xl"
      scale={0.90}
    >
      <img
        src={e.image}
        alt={e.title}
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(45,25,12,0.70)" }} />
      <div className="relative px-6 py-16 text-center text-white sm:px-8 sm:py-20">
        <CapsTitle
          text={e.title}
          className="font-serif text-3xl [font-variant:small-caps] text-white drop-shadow sm:text-4xl font-bold"
          style={{ color: "#FFFFFF" }}
        />
        <div className="mt-6 flex items-center justify-center gap-6 text-white">
          <span className="font-serif text-sm [font-variant:small-caps] sm:text-base text-white/95 font-medium">{e.day}</span>
          <span className="font-serif text-4xl leading-none text-white drop-shadow sm:text-5xl font-bold">{e.date}</span>
          <span className="font-serif text-sm [font-variant:small-caps] sm:text-base text-white/95 font-medium">
            {e.year}
          </span>
        </div>
        <p className="mt-1 font-serif text-lg [font-variant:small-caps] text-[#FFEED6] font-semibold sm:text-xl">{e.month}</p>
        <p className="mt-6 text-[13px] font-semibold tracking-wide text-white drop-shadow-sm">{e.time}</p>
        <MapPin className="mx-auto mt-7 size-5 text-[#FFEED6]" />
        <div className="mt-4 text-[13px] font-normal leading-relaxed text-white/95">
          <p className="font-semibold text-white">Bertempat di</p>
          {e.place.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <motion.a
          whileTap={{ scale: 0.96 }}
          href={MAPS_LINK}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/20 px-6 py-2.5 text-[12px] font-medium text-white backdrop-blur-sm transition-all hover:bg-white/35 active:scale-95"
        >
          <MapPin className="size-3.5" />
          Petunjuk Lokasi
        </motion.a>
      </div>
    </Reveal>
  );
}

export function Events() {
  return (
    <section id="wedding-event" className="bg-[#FFEED6] px-5 py-14 text-center sm:px-6 sm:py-16">
      <Reveal>
        <ScriptTitle text="Wedding Event" className="text-3xl sm:text-4xl text-[#5C3A1E]" style={{ color: "#5C3A1E" }} />
      </Reveal>
      <div className="mt-10 space-y-8">
        {events.map((e) => (
          <EventCard key={e.title} e={e} />
        ))}
      </div>
    </section>
  );
}

export function DressCode() {
  return (
    <section className="bg-theme-light px-5 py-14 text-center sm:px-6">
      <Reveal>
        <ScriptTitle text="Dress Code" className="text-3xl sm:text-4xl text-[#5C3A1E]" style={{ color: "#5C3A1E" }} />
        <p className="mx-auto mt-4 max-w-xs text-[12px] leading-relaxed text-[#4A3525]">
          Untuk menambah keindahan acara, mohon berkenan mengenakan busana dengan pilihan warna berikut :
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="mt-7 flex items-center justify-center gap-3.5 sm:gap-5">
          {DRESS_CODE_SWATCHES.map((c) => (
            <div key={c.hex} className="flex flex-col items-center">
              <div
                className="size-11 sm:size-12 rounded-full border-2 border-[#E5C9A6] shadow-md transition-transform hover:scale-110"
                style={{ backgroundColor: c.hex }}
              />
              <span className="mt-2 text-[10px] font-medium tracking-wide text-[#4A3525]">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function LiveStreaming() {
  return (
    <section className="bg-[#FFEED6] px-5 py-14 text-center sm:px-6">
      <Reveal>
        <ScriptTitle text="Live Streaming" className="text-3xl sm:text-4xl text-[#5C3A1E]" style={{ color: "#5C3A1E" }} />
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mx-auto mt-4 max-w-sm text-[12px] leading-relaxed text-[#4A3525]">
          Kepada Bapak/Ibu/Saudara/i yang berhalangan hadir, dapat menyaksikan acara pernikahan kami secara virtual yang akan disiarkan langsung melalui akun Instagram :
        </p>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#5C3A1E] bg-[#5C3A1E] px-6 py-2.5 text-xs font-medium tracking-wider text-white shadow-md transition-all hover:bg-[#7A522E] active:scale-95"
        >
          <InstagramIcon size={16} />
          SIARAN LANGSUNG INSTAGRAM
        </a>
      </Reveal>
    </section>
  );
}

export function LoveStory() {
  return (
    <section className="bg-[#FFEED6] px-5 py-14 text-center sm:px-6 sm:py-16">
      <Reveal>
        <ScriptTitle text="Love Story" className="text-3xl sm:text-4xl text-[#5C3A1E]" style={{ color: "#5C3A1E" }} />
      </Reveal>
      <div className="mt-10 space-y-10">
        {loveStory.map((s, i) => (
          <Reveal key={s.title} direction={i % 2 === 0 ? "right" : "left"}>
            <div className="overflow-hidden rounded-3xl border border-[#E5C9A6] bg-white/80 p-3 shadow-sm">
              <img src={s.image} alt={s.title} loading="lazy" className="w-full h-auto rounded-2xl" />
              <div className="p-3">
                <h3 className="mt-3 font-display text-sm tracking-[0.16em] text-[#5C3A1E] font-bold">
                  {s.title.toUpperCase()}
                </h3>
                <p className="mx-auto mt-2.5 max-w-sm text-[12px] leading-relaxed text-[#4A3525]">
                  {s.text}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function TurutMengundang() {
  return (
    <section className="bg-[#FFEED6] px-5 py-14 text-center sm:px-6 sm:py-16">
      <Reveal>
        <ScriptTitle text="Turut Mengundang" className="text-3xl sm:text-4xl text-[#5C3A1E]" style={{ color: "#5C3A1E" }} />
      </Reveal>
      <div className="mt-9 space-y-5">
        <GuestList title="" list={turutMengundang.wanita} />
      </div>
    </section>
  );
}

export function Gallery() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-[#FFEED6] px-5 py-14 text-center sm:px-6 sm:py-16">
      <Reveal>
        <ScriptTitle text="Our Gallery" className="text-3xl sm:text-4xl text-[#5C3A1E]" style={{ color: "#5C3A1E" }} />
      </Reveal>
      <div className="mt-9 grid grid-cols-2 gap-3">
        {gallery.map((g, i) => (
          <motion.div
            key={g}
            onClick={() => setActivePhoto(i)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="cursor-pointer overflow-hidden rounded-2xl group shadow-sm transition-shadow hover:shadow-md"
          >
            <motion.img
              src={g}
              alt={`Foto prewedding ${BRIDE_SHORT} dan ${GROOM_SHORT} ${i + 1}`}
              loading="lazy"
              className={`w-full rounded-2xl object-cover border border-[#E5C9A6]/80 transition-all duration-300 group-hover:brightness-105 ${i % 3 === 0 ? "h-58 sm:h-66" : "h-58 sm:h-66"}`}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox Preview Modal */}
      <Lightbox
        images={gallery}
        selectedIndex={activePhoto}
        onClose={() => setActivePhoto(null)}
      />
    </section>
  );
}

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard?.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }}
      className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#5C3A1E] px-5 py-2 text-[10px] tracking-[0.14em] text-white shadow-sm transition-all hover:bg-[#7A522E] active:scale-95"
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      {copied ? "TERSALIN" : label}
    </button>
  );
}

export function Gift() {
  return (
    <section id="gift" className="bg-theme-light px-5 py-14 text-center sm:px-6 sm:py-16">
      <Reveal>
        <ScriptTitle text="Wedding Gift" className="text-3xl sm:text-4xl text-[#5C3A1E]" style={{ color: "#5C3A1E" }} />
      </Reveal>
      <p className="mx-auto mt-6 max-w-xs text-[12px] leading-relaxed text-[#4A3525]">
        Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah
        ungkapan tanda kasih, Anda dapat memberi kado secara cashless.
      </p>
      <div className="mt-9 space-y-6">
        <Reveal className="rounded-3xl border border-[#E5C9A6] bg-white p-5 shadow-sm sm:p-6">
          <img src={photos.mandiri} alt="Bank Mandiri" className="mx-auto h-8 object-contain" />
          <p className="mt-4 font-serif text-2xl font-bold" style={{ color: "#5C3A1E" }}>{BANK_MANDIRI_NUMBER}</p>
          <p className="text-xs text-[#4A3525]/80">a.n. {BANK_MANDIRI_NAME}</p>
          <CopyRow label="SALIN NOMOR REKENING" value={BANK_MANDIRI_NUMBER} />
        </Reveal>
        <Reveal className="rounded-3xl border border-[#E5C9A6] bg-white p-5 shadow-sm sm:p-6">
          <img src={photos.gopay} alt="GoPay" className="mx-auto h-8 object-contain" />
          <p className="mt-4 font-serif text-2xl font-bold" style={{ color: "#5C3A1E" }}>{GOPAY_NUMBER}</p>
          <p className="text-xs text-[#4A3525]/80">a.n. {GOPAY_NAME}</p>
          <CopyRow label="SALIN NOMOR GOPAY" value={GOPAY_NUMBER} />
        </Reveal>
        <Reveal className="rounded-3xl border border-[#E5C9A6] bg-white p-5 shadow-sm sm:p-6">
          <MapPin className="mx-auto size-6" style={{ color: "#5C3A1E" }} />
          <p className="mt-3 text-xs font-semibold tracking-[0.14em]" style={{ color: "#5C3A1E" }}>KIRIM HADIAH</p>
          <p className="mt-3 text-xs leading-relaxed text-[#4A3525]">{GIFT_ADDRESS}</p>
          <CopyRow label="SALIN ALAMAT" value={GIFT_ADDRESS_COPY} />
        </Reveal>
      </div>
    </section>
  );
}

function GuestList({ title, list }: { title: string; list: string[] }) {
  return (
    <Reveal className="rounded-3xl bg-white p-5 text-left sm:p-6 shadow-sm border border-[#E5C9A6]">
      {title && <p className="text-center font-display text-xs tracking-[0.16em] text-[#5C3A1E] font-bold">{title}</p>}
      <ul className="mt-4 space-y-2 text-[12px] leading-relaxed text-[#4A3525]">
        {list.map((n) => (
          <li key={n} className="border-b border-[#E5C9A6]/30 pb-1.5 last:border-b-0">{n}</li>
        ))}
      </ul>
    </Reveal>
  );
}

export function Closing() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden flex flex-col justify-end">
      <img
        src={photos.g6}
        alt={`${BRIDE_SHORT} dan ${GROOM_SHORT}`}
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      {/* Gradient overlay agar foto menyatu anggun dan teks/logo terbaca sangat jelas */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(20,12,6,0.30) 35%, rgba(20,12,6,0.80) 70%, rgba(12,6,2,0.96) 100%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center px-6 pb-28 pt-28 text-center text-white sm:px-8">
        <Reveal>
          <p className="text-[11px] tracking-[0.18em] sm:text-xs uppercase text-white/90 drop-shadow">
            Kami yang berbahagia
          </p>
          <h2 className="mt-3 mb-2 font-script text-5xl sm:text-6xl font-normal text-white leading-relaxed drop-shadow-md">
            {BRIDE_SHORT} &amp; {GROOM_SHORT}
          </h2>
        </Reveal>

        {/* Divider halus di atas foto */}
        <div className="mx-auto my-6 h-px w-28 bg-white/25" />

        {/* Footer langsung berada di atas foto */}
        <div className="text-center">
          <p className="text-[10px] tracking-[0.2em] text-white/80 font-medium drop-shadow">
            MADE WITH LOVE BY
          </p>

          <img
            src={photos.logo}
            alt="NZDIGI"
            className="mx-auto mt-4 h-16 sm:h-20 object-contain drop-shadow-lg"
          />

          <div className="mt-5 flex justify-center gap-6 text-white/90">
            <a
              href="https://nzdigital.free.nf/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white hover:scale-110 active:scale-95 drop-shadow"
              aria-label="Website"
            >
              <Globe size={20} />
            </a>

            <a
              href="https://instagram.com/nrlzmn1"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white hover:scale-110 active:scale-95 drop-shadow"
              aria-label="Instagram"
            >
              <InstagramIcon size={20} />
            </a>

            <a
              href="wa.me/6285975213222"
              className="transition hover:text-white hover:scale-110 active:scale-95 drop-shadow"
              aria-label="Telepon"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return null;
}
export function Shell({ children }: { children: ReactNode }) {
  return <div className="tia-theme mx-auto w-full max-w-[500px] overflow-x-hidden bg-theme-light">{children}</div>;
}
