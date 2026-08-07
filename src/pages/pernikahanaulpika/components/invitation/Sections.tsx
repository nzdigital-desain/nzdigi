import { useEffect, useMemo, useState, type ReactNode } from "react";
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
} from "@/pages/pernikahanaulpika/lib/invitation-data";
import { motion } from "framer-motion";
import { Reveal, Stagger, staggerChild } from "./Reveal";

export function ScriptTitle({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span data-text={text} className={`script-title ${className}`}>
      {text}
    </span>
  );
}

export function CapsTitle({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span data-text={text} className={`ghost-caps font-display tracking-[0.14em] ${className}`}>
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
  const c = useCountdown(WEDDING_DATE);
  return (
    <section id="home" className="overflow-hidden">
      <div className="relative">
        <motion.img
          src={photos.cover}
          alt="Pika dan Aul"
          className="h-[100svh] min-h-[520px] w-full object-cover"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-blush)" }} />
        <motion.div
          className="absolute inset-x-0 bottom-0 px-6 pb-10 text-center text-cream sm:px-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-body text-[11px] tracking-[0.25em] sm:text-xs uppercase">THE WEDDING OF</p>
          <h2 className="mt-3 mb-1 font-script text-5xl sm:text-6xl font-normal text-cream leading-relaxed drop-shadow-sm">Pika &amp; Aul</h2>
          <p className="mt-2 text-xs tracking-widest sm:text-sm font-medium">23 . 08 . 2026</p>
        </motion.div>
      </div>
      <div className="bg-blush px-4 pb-14 pt-10 text-center text-cream sm:px-6">
        <Reveal>
          <ScriptTitle text="Count The Date" className="text-3xl sm:text-4xl" />
        </Reveal>
        <Stagger className="mt-7 grid grid-cols-4 gap-2">
          {[
            [c.days, "Hari"],
            [c.hours, "Jam"],
            [c.minutes, "Menit"],
            [c.seconds, "Detik"],
          ].map(([v, l]) => (
            <motion.div
              key={l as string}
              variants={staggerChild}
              className="rounded-2xl border border-cream/50 py-4"
            >
              <p className="font-serif text-2xl leading-none sm:text-3xl">
                {String(v).padStart(2, "0")}
              </p>
              <p className="mt-1 text-[9px] tracking-widest sm:text-[10px]">{l}</p>
            </motion.div>
          ))}
        </Stagger>
        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileTap={{ scale: 0.96 }}
          href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Pika+%26+Aul&dates=20260823T090000Z/20260823T140000Z&location=Kp+Pasir+Awi+Kec+Kalapanunggal`}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-cream/70 px-5 py-2.5 text-[11px] tracking-[0.15em]"
        >
          <CalendarPlus className="size-4" />
          SAVE THE DATE
        </motion.a>
      </div>
    </section>
  );
}

export function Quote() {
  return (
    <section className="bg-blush">
      <div className="relative min-h-[100svh] overflow-hidden">
        <img
          src={photos.g3}
          alt="Pika dan Aul"
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-blush/45" />
        <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 py-16 text-center text-cream sm:px-9">
          <Reveal>
            <p dir="rtl" className="font-serif text-[26px] leading-[2.1] sm:text-3xl">
              وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا
              اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ
              لِّقَوْمٍ يَّتَفَكَّرُوْنَ
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-8 max-w-sm text-[12px] italic leading-relaxed sm:text-[13px]">
              &quot; Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup
              dari jenismu sendiri supaya kamu dapat ketenangan hati dan dijadikannya kasih sayang
              di antara kamu. Sesungguhnya yang demikian menjadi tanda-tanda kebesaran-Nya bagi
              orang-orang yang berpikir. &quot;
            </p>
            <p className="mt-7 text-[12px] italic tracking-wide sm:text-[13px]">
              ( Q.S. Ar-Rum: 21 )
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Person({
  image,
  name,
  parents,
  child,
}: {
  image: string;
  name: string;
  parents: string[];
  child: string;
}) {
  return (
    <div className="text-center px-2">
      <motion.div
        className="mx-auto size-44 rounded-full p-[3px] sm:size-52 shadow-md"
        style={{ background: "var(--gradient-ring)" }}
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="size-full rounded-full object-cover"
        />
      </motion.div>
      <Reveal delay={0.1}>
        <h3 className="mt-5 mb-2 font-script text-4xl sm:text-5xl text-blush-deep leading-relaxed tracking-wide px-2">
          {name}
        </h3>
        <p className="mt-3 text-[13px] font-semibold tracking-wider text-ink uppercase">{child}</p>
        <div className="mt-1.5 space-y-1">
          {parents.map((p) => (
            <p key={p} className="text-[13px] leading-relaxed text-ink/80 font-medium">
              {p}
            </p>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

export function BrideGroom() {
  return (
    <section id="bride-groom" className="bg-blush pt-14 text-center">
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
              className="h-28 w-32 shrink-0 rounded-md object-cover sm:h-32 sm:w-36"
            />
          ))}
        </motion.div>
      </div>

      <Reveal>
        <ScriptTitle text="Bride & Groom" className="text-3xl text-cream sm:text-4xl" />
      </Reveal>

      <Reveal delay={0.1}>
        <p
          className="mt-10 px-6 font-serif text-xl leading-relaxed text-cream sm:text-2xl"
          dir="rtl"
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْمِ
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mx-auto mt-7 max-w-xs px-4 text-[12px] leading-relaxed text-cream/95">
          Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.
          <br />
          Tanpa mengurangi rasa hormat, dengan ini kami bermaksud mengundang Bapak/Ibu/Saudara/i
          untuk hadir pada acara pernikahan kami :
        </p>
      </Reveal>

      <div className="arch-top arch-bottom mt-5 mx-4 bg-cream px-5 pb-10 pt-10 sm:mx-6 sm:px-5 sm:pb-20 sm:pt-20">
        <Person
          image={photos.bride}
          name="Pika Rismaya"
          child="Putri dari"
          parents={["Dedem Suharna", "& Ibu Nia Kurniasih"]}
        />
        <motion.p
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="my-8 font-script text-3xl sm:text-6xl text-blush-soft"
        >
          &amp;
        </motion.p>
        <Person
          image={photos.groom}
          name="Aulia Rahman Suganda"
          child="Putra dari"
          parents={["Bapak Adang Suganda", "& Ibu Yeti Rohaeti"]}
        />
      </div>
    </section >
  );
}

function EventCard({ e }: { e: (typeof events)[number] }) {
  return (
    <Reveal
      className="arch-top arch-bottom relative mx-4 overflow-hidden border border-cream/70 shadow-[var(--shadow-soft)]"
      scale={0.90}
    >
      <img
        src={e.image}
        alt={e.title}
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-blush/60" />
      <div className="relative px-6 py-16 text-center text-cream sm:px-8 sm:py-20">
        <CapsTitle
          text={e.title}
          className="font-serif text-3xl [font-variant:small-caps] sm:text-4xl"
        />
        <div className="mt-6 flex items-center justify-center gap-6">
          <span className="font-serif text-sm [font-variant:small-caps] sm:text-base">{e.day}</span>
          <span className="font-serif text-4xl leading-none sm:text-5xl">{e.date}</span>
          <span className="font-serif text-sm [font-variant:small-caps] sm:text-base">
            {e.year}
          </span>
        </div>
        <p className="mt-1 font-serif text-lg [font-variant:small-caps] sm:text-xl">{e.month}</p>
        <p className="mt-6 text-[13px] font-semibold tracking-wide">{e.time}</p>
        <MapPin className="mx-auto mt-7 size-5" />
        <div className="mt-4 text-[13px] font-semibold leading-relaxed">
          <p>Bertempat di</p>
          {e.place.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <motion.a
          whileTap={{ scale: 0.96 }}
          href="https://maps.app.goo.gl/LcAJQ1hruKearxwi8"
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-cream/25 px-6 py-2.5 text-[12px] font-medium backdrop-blur-sm"
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
    <section id="wedding-event" className="bg-blush px-5 py-14 text-center sm:px-6 sm:py-16">
      <Reveal>
        <ScriptTitle text="Wedding Event" className="text-3xl sm:text-4xl text-cream" />
      </Reveal>
      <div className="mt-10 space-y-8">
        {events.map((e) => (
          <EventCard key={e.title} e={e} />
        ))}
      </div>
    </section>
  );
}

export function LoveStory() {
  return (
    <section className="bg-blush px-5 py-14 text-center sm:px-6 sm:py-16">
      <Reveal>
        <ScriptTitle text="Love Story" className="text-3xl sm:text-4xl text-cream" />
      </Reveal>
      <div className="mt-10 space-y-10">
        {loveStory.map((s, i) => (
          <Reveal key={s.title} direction={i % 2 === 0 ? "right" : "left"}>
            <img src={s.image} alt={s.title} loading="lazy" className="w-full h-auto rounded-3xl" />
            <h3 className="mt-5 font-display text-sm tracking-[0.16em] text-cream">
              {s.title.toUpperCase()}
            </h3>
            <p className="mx-auto mt-3 max-w-sm text-[12px] leading-relaxed text-cream/90">
              {s.text}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="bg-blush px-5 py-14 text-center sm:px-6 sm:py-16">
      <Reveal>
        <ScriptTitle text="Our Gallery" className="text-3xl sm:text-4xl text-cream" />
      </Reveal>
      <div className="mt-9 grid grid-cols-2 gap-3">
        {gallery.map((g, i) => (
          <motion.img
            key={g}
            src={g}
            alt={`Foto prewedding Pika dan Aul ${i + 1}`}
            loading="lazy"
            className={`w-full rounded-2xl object-cover ${i % 3 === 0 ? "h-58 sm:h-66" : "h-58 sm:h-66"}`}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>
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
      className="mt-4 inline-flex items-center gap-2 rounded-full bg-blush-soft px-5 py-2 text-[10px] tracking-[0.14em] text-cream"
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      {copied ? "TERSALIN" : label}
    </button>
  );
}

export function Gift() {
  return (
    <section id="gift" className="bg-cream px-5 py-14 text-center sm:px-6 sm:py-16">
      <Reveal>
        <ScriptTitle text="Wedding Gift" className="text-3xl sm:text-4xl text-blush-deep" />
      </Reveal>
      <p className="mx-auto mt-6 max-w-xs text-[12px] leading-relaxed text-ink/80">
        Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah
        ungkapan tanda kasih, Anda dapat memberi kado secara cashless.
      </p>
      <div className="mt-9 space-y-6">
        <Reveal className="rounded-3xl border border-blush-soft/60 p-5 sm:p-6">
          <img src={photos.mandiri} alt="Bank Mandiri" className="mx-auto h-8 object-contain" />
          <p className="mt-4 font-serif text-2xl text-blush-deep">1820018220509</p>
          <p className="text-xs text-ink/70">a.n. AULIA RAHMAN SUGANDA</p>
          <CopyRow label="SALIN NOMOR REKENING" value="1820018220509" />
        </Reveal>
        <Reveal className="rounded-3xl border border-blush-soft/60 p-5 sm:p-6">
          <img src={photos.gopay} alt="GoPay" className="mx-auto h-8 object-contain" />
          <p className="mt-4 font-serif text-2xl text-blush-deep">0815 8577 3045</p>
          <p className="text-xs text-ink/70">a.n. AULIA RAHMAN SUGANDA</p>
          <CopyRow label="SALIN NOMOR GOPAY" value="081585773045" />
        </Reveal>
        <Reveal className="rounded-3xl border border-blush-soft/60 p-5 sm:p-6">
          <MapPin className="mx-auto size-6 text-blush-deep" />
          <p className="mt-3 text-xs font-medium tracking-[0.14em] text-blush-deep">KIRIM HADIAH</p>
          <p className="mt-3 text-xs leading-relaxed text-ink/80">
            Kp. Pasir Awi girang RT/RW 014/005 Desa Palasari Girang Kecamatan Kalapanunggal Kab.
            Sukabumi
          </p>
          <CopyRow
            label="SALIN ALAMAT"
            value="Kp. Pasir Awi girang RT/RW 014/005, Desa Palasari Girang, Kecamatan Kalapanunggal, Kab. Sukabumi"
          />
        </Reveal>
      </div>
    </section>
  );
}

function GuestList({ title, list }: { title: string; list: string[] }) {
  return (
    <Reveal className="rounded-3xl bg-cream/95 p-5 text-left sm:p-6">
      <p className="text-center font-display text-xs tracking-[0.16em] text-blush-deep">{title}</p>
      <ul className="mt-4 space-y-1.5 text-[12px] leading-relaxed text-ink/80">
        {list.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </Reveal>
  );
}

export function TurutMengundang() {
  return (
    <section className="bg-blush px-5 py-14 text-center sm:px-6 sm:py-16">
      <Reveal>
        <ScriptTitle text="Turut Mengundang" className="text-3xl sm:text-4xl text-cream" />
      </Reveal>
      <div className="mt-9 space-y-5">
        <GuestList title="" list={turutMengundang.wanita} />
      </div>
    </section>
  );
}

export function Closing() {
  return (
    <section className="relative">
      <img
        src={photos.g6}
        alt="Pika dan Aul"
        loading="lazy"
        className="h-[100svh] min-h-[520px] w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-blush)" }} />
      <div className="absolute inset-x-0 bottom-0 px-8 pb-12 text-center text-cream">
        <Reveal>
          <p className="text-[11px] tracking-[0.18em] sm:text-xs uppercase">Kami yang berbahagia</p>
          <h2 className="mt-3 mb-1 font-script text-5xl sm:text-6xl font-normal text-cream leading-relaxed drop-shadow-sm">Pika &amp; Aulia</h2>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-blush px-6 pb-28 pt-6 text-center">
      <p className="text-[10px] tracking-[0.2em] text-cream">MADE WITH LOVE BY</p>

      <img src={photos.logo} alt="pikaaul" className="mx-auto mt-4 h-20 object-contain" />

      <div className="mt-6 flex justify-center gap-6 text-cream">
        <a
          href="https://nzdigital.free.nf/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:opacity-80"
          aria-label="Website"
        >
          <Globe size={20} />
        </a>

        <a
          href="https://instagram.com/nrlzmn1"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:opacity-80"
          aria-label="Instagram"
        >
          <InstagramIcon size={20} />
        </a>

        <a href="wa.me/6285975213222" className="transition hover:opacity-80" aria-label="Telepon">
          <Phone size={20} />
        </a>
      </div>
    </footer>
  );
}
export function Shell({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-[500px] overflow-x-hidden bg-blush">{children}</div>;
}
