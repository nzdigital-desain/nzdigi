import { useEffect, useRef, useState } from "react";

export default function TimelineConnector() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex justify-center py-8">
      <div
        className={`w-px bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 transition-all duration-[1500ms] ease-out ${
          visible ? "h-24 opacity-100" : "h-0 opacity-0"
        }`}
      />
    </div>
  );
}
