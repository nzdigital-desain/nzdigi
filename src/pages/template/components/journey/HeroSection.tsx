import { useEffect, useState } from "react";
import FloatingHearts3D from "./FloatingHearts3D";

export default function HeroSection() {
  const [show, setShow] = useState(false);
  useEffect(() => { setShow(true); }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-romantic-gradient">
      <FloatingHearts3D variant="default" />

      <div className="relative z-10 text-center px-6">
        <div className={`transition-all duration-[1500ms] ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-body text-sm uppercase tracking-[0.4em] text-muted-foreground mb-6">
            Perjalanan Cinta Kami
          </p>
        </div>

        <div className={`transition-all duration-[1500ms] ease-out ${show ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`} style={{ transitionDelay: "300ms" }}>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-gradient-romantic mb-4 leading-[1.1]">
            Kisah Kita
          </h1>
        </div>

        <div className={`transition-all duration-[1500ms] ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "600ms" }}>
          <p className="font-display italic text-xl md:text-2xl text-muted-foreground mb-10">
            Dua hati, satu takdir
          </p>
        </div>

        <div className={`transition-all duration-[1500ms] ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "900ms" }}>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-primary/30" />
            <span className="text-2xl">💕</span>
            <div className="h-px w-16 bg-primary/30" />
          </div>
        </div>

        <div className={`transition-all duration-[1500ms] ease-out ${show ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "1200ms" }}>
          <button
            onClick={() => document.getElementById("chapter-1")?.scrollIntoView({ behavior: "smooth" })}
            className="font-body text-sm text-muted-foreground hover:text-primary transition-colors animate-float"
          >
            <span className="block mb-2">Mulai Perjalanan</span>
            <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
