import { useEffect, useRef, useState } from "react";
import { Home, Heart, CalendarDays, Image as ImageIcon, Gift, ArrowDown, ArrowUp, Music, Pause } from "lucide-react";
import { photos } from "@/pages/pernikahanaulpika/lib/invitation-data";
import { motion } from "framer-motion";

const navItems = [
  { icon: Home, target: "home" },
  { icon: Heart, target: "bride-groom" },
  { icon: CalendarDays, target: "wedding-event" },
  { icon: ImageIcon, target: "gallery" },
  { icon: Gift, target: "gift" },
];

export function BottomNav() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-0 z-40 mx-auto flex max-w-[500px] items-center justify-around border-t border-blush-soft/60 bg-cream/95 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur"
    >
      {navItems.map(({ icon: Icon, target }) => (
        <motion.button
          key={target}
          onClick={() => go(target)}
          aria-label={target}
          whileTap={{ scale: 0.85 }}
          className="p-1.5 text-blush-deep"
        >
          <Icon className="size-5" strokeWidth={2} />
        </motion.button>
      ))}
    </motion.nav>
  );
}

export function FloatingControls() {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setAtBottom(window.scrollY + window.innerHeight > document.body.scrollHeight - 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-[calc(6rem+env(safe-area-inset-bottom))] right-4 z-40 flex flex-col items-center gap-3">
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Kembali ke atas"
        className="grid size-8 place-items-center rounded-full bg-cream/90 text-blush-deep shadow-[var(--shadow-soft)]"
      >
        <ArrowUp className="size-4" />
      </motion.button>
      <motion.button
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() =>
          window.scrollTo({
            top: atBottom ? 0 : window.scrollY + window.innerHeight * 0.9,
            behavior: "smooth",
          })
        }
        aria-label="Gulir ke bawah"
        className="grid size-12 place-items-center rounded-full border border-blush-soft bg-cream/70 text-blush-deep shadow-[var(--shadow-soft)]"
      >
        <ArrowDown className="size-5" />
      </motion.button>
    </div>
  );
}

export function MusicToggle({ start }: { start: boolean }) {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!start || !ref.current) return;
    ref.current.volume = 0.6;
    ref.current
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, [start]);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      el.play().then(() => setPlaying(true)).catch(() => undefined);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  if (!start) return null;

  return (
    <>
      <audio ref={ref} src={photos.music} loop preload="auto" />
      <motion.button
        onClick={toggle}
        aria-label="Putar musik"
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed bottom-[calc(6rem+env(safe-area-inset-bottom))] left-4 z-40 grid size-11 place-items-center rounded-full bg-cream/80 text-blush-deep shadow-[var(--shadow-soft)]"
      >
        <motion.span animate={playing ? { rotate: 360 } : { rotate: 0 }} transition={playing ? { duration: 6, repeat: Infinity, ease: "linear" } : { duration: 0.3 }}>
          {playing ? <Pause className="size-4" /> : <Music className="size-4" />}
        </motion.span>
      </motion.button>
    </>
  );
}
