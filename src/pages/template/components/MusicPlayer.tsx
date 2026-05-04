import { useRef, useEffect } from "react";

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicPlayer = ({ isPlaying, onToggle }: MusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />
      <button
        onClick={onToggle}
        className="fixed bottom-3 left-3 z-50 w-12 h-12 rounded-full bg-wedding/80 backdrop-blur-sm flex items-center justify-center shadow-lg border border-wedding-sage-light/30"
        style={{
          animation: isPlaying ? "wdpMP3-muter 4s linear infinite" : "none",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white" // Saya ubah ke white agar lebih kontras di atas warna sage
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {isPlaying ? (
            <>
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </>
          ) : (
            <>
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </>
          )}
        </svg>
      </button>
    </>
  );
};

export default MusicPlayer;
