import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function Clients() {
  return (
    <AnimatedBackground>
      <div className="w-full px-[5%] py-8 flex flex-col items-center">
        <h2 className="text-5xl text-white   text-center mb-4">Clients</h2>
        <p className="text-white/80 text-lg font-montserrat text-center mb-12">
          Who are already staying ahead of threats
        </p>
      </div>

      {/* Full width gray section */}
      <div className="w-full bg-gray-500">
        <div className="w-full px-[5%] py-12">
          <div className="max-w-[1400px] mx-auto flex justify-between items-center">
            <span className="text-white font-bold text-xl">VITOSHA</span>
            <span className="text-white font-bold text-xl">IMPETUS</span>
            <span className="text-white font-bold text-xl">CYEN</span>
            <span className="text-white font-bold text-xl">SEEDBLINK</span>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
