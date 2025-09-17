import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function SMEAttackStatsSection() {
  return (
    <AnimatedBackground className="w-[99.1vw]">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why European SMEs Are Under Attack
            </h2>
          </div>

          {/* Statistics Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Attack Rate */}
            <div className="bg-transparent backdrop-blur-md rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2 ml-2">
                73%
              </div>
              <div className="text-xl font-bold text-white mb-2">Attacked</div>
              <p className="text-white">German SMEs in 2023</p>
            </div>

            {/* Card 2: Average Cost */}
            <div className="bg-transparent backdrop-blur-md rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-blue-500 mb-2 ml-2">
                €120K
              </div>
              <div className="text-xl font-bold text-white mb-2">
                Average cost
              </div>
              <p className="text-white">SME data breach cost</p>
            </div>

            {/* Card 3: Closure Time */}
            <div className="bg-transparent backdrop-blur-md rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">
                6 Months
              </div>
              <div className="text-xl font-bold text-white mb-2">
                Closure time
              </div>
              <p className="text-white">
                60% of attacked SMEs close within this timeframe
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
}
