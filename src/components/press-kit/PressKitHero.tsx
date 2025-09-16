import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function PressKitHero() {
  return (
    <AnimatedBackground className="w-[99.12vw] min-h-[300px] flex flex-col items-center justify-center text-center px-4 py-20 pt-48">
      <h1
        className="text-5xl md:text-6xl font-bold text-white mb-6 mt-20"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Press Kit
      </h1>
      <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto">
        Media resources, company information, and press materials for
        journalists and media professionals.
      </p>
    </AnimatedBackground>
  );
}
