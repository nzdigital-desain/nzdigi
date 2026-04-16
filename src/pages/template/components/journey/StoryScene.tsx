import { useEffect, useRef, useState } from "react";

interface StorySceneProps {
  chapter: string;
  title: string;
  description: string;
  icon: string;
  children?: React.ReactNode;
  index: number;
}

export default function StoryScene({ chapter, title, description, icon, children, index }: StorySceneProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      {children}

      {/* Content overlay */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="inline-block text-5xl mb-4">{icon}</span>
        </div>

        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
            {chapter}
          </p>
        </div>

        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-romantic mb-6 leading-tight">
            {title}
          </h2>
        </div>

        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
            {description}
          </p>
        </div>

        {/* Timeline dot */}
        <div
          className={`mt-10 flex justify-center transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
}
