import { lazy, Suspense } from "react";
import HeroSection from "@/pages/template/components/journey/HeroSection";
import StoryScene from "@/pages/template/components/journey/StoryScene";
import TimelineConnector from "@/pages/template/components/journey/TimelineConnector";

const FloatingHearts3D = lazy(
  () => import("@/pages/template/components/journey/FloatingHearts3D"),
);
const RingScene3D = lazy(
  () => import("@/pages/template/components/journey/RingScene3D"),
);

const Fallback3D = () => <div className="absolute inset-0" />;

const scenes = [
  {
    id: "chapter-1",
    chapter: "Bab Pertama",
    title: "Pertama Bertemu",
    icon: "🌸",
    description:
      "Tak pernah terbayangkan, pertemuan sederhana itu akan mengubah segalanya. Tatapan pertama yang penuh rasa ingin tahu, senyuman yang tak bisa dilupakan, dan awal dari sesuatu yang indah.",
    variant: "default" as const,
  },
  {
    id: "chapter-2",
    chapter: "Bab Kedua",
    title: "Jatuh Cinta",
    icon: "💗",
    description:
      "Setiap hari terasa istimewa. Tawa yang membuncah, percakapan tanpa akhir, dan perasaan hangat yang tumbuh semakin dalam. Dua hati yang saling menemukan rumahnya.",
    variant: "love" as const,
  },
  {
    id: "chapter-3",
    chapter: "Bab Ketiga",
    title: "Lamaran",
    icon: "💍",
    description:
      "Satu pertanyaan yang mengubah segalanya. Dengan berlutut penuh keyakinan dan cincin yang berkilau, janji seumur hidup pun terucap. 'Maukah kau mendampingiku selamanya?'",
    variant: "proposal" as const,
  },
  {
    id: "chapter-4",
    chapter: "Bab Keempat",
    title: "Menuju Pernikahan",
    icon: "👰",
    description:
      "Langkah terakhir menuju hari yang paling membahagiakan. Dua keluarga bersatu, dua jiwa menjadi satu. Inilah awal dari babak kehidupan yang baru, penuh cinta dan kebahagiaan.",
    variant: "wedding" as const,
  },
];

const Index = () => {
  return (
    <div className="bg-scene-gradient">
      <HeroSection />

      {scenes.map((scene, index) => (
        <div key={scene.id} id={scene.id}>
          <TimelineConnector />
          <StoryScene
            chapter={scene.chapter}
            title={scene.title}
            description={scene.description}
            icon={scene.icon}
            index={index}
          >
            <Suspense fallback={<Fallback3D />}>
              {scene.variant === "proposal" ? (
                <RingScene3D />
              ) : (
                <FloatingHearts3D variant={scene.variant} />
              )}
            </Suspense>
          </StoryScene>
        </div>
      ))}

      {/* Footer */}
      <footer className="py-20 text-center">
        <div className="max-w-md mx-auto px-6">
          <p className="font-display text-3xl md:text-4xl text-gradient-romantic mb-4">
            Sampai Selamanya
          </p>
          <p className="font-display italic text-muted-foreground">∞</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
