import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function SecurityEfficiency() {
  return (
    <AnimatedBackground className="py-20">
      <div className="w-full px-[5%] flex flex-col items-center">
        <div className="max-w-[1400px] w-full">
          <h2 className="text-5xl text-white   text-center mb-4">
            Maximizing security efficiency
          </h2>
          <p className="text-white/80 text-lg font-montserrat text-center mb-16">
            Through automation of vulnerability management process
          </p>

          {/* Stats cards container */}
          <div className="flex justify-center gap-5">
            {/* Improved compliance */}
            <div className="min-w-[400px] min-h-[250px] bg-gradient-to-b from-[#159ECE] via-[#00539B] to-[#159ECE] rounded-3xl p-8 flex flex-col items-center justify-center z-10">
              <span className="text-6xl text-white   mb-4">80%</span>
              <span className="text-white/80 text-lg font-montserrat text-center">
                Improved compliance
              </span>
            </div>

            {/* Faster Mean Time */}
            <div className="min-w-[400px] min-h-[250px] bg-gradient-to-b from-[#159ECE] via-[#00539B] to-[#159ECE] rounded-3xl p-8 flex flex-col items-center justify-center z-10">
              <span className="text-6xl text-white   mb-4">70%</span>
              <span className="text-white/80 text-lg font-montserrat text-center">
                Faster Mean Time to Prioritize
              </span>
            </div>

            {/* Risk score reduction */}
            <div className="min-w-[400px] min-h-[250px] bg-gradient-to-b from-[#159ECE] via-[#00539B] to-[#159ECE] rounded-3xl p-8 flex flex-col items-center justify-center z-10">
              <span className="text-6xl text-white   mb-4">30%</span>
              <span className="text-white/80 text-lg font-montserrat text-center">
                Risk score reduction
              </span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
