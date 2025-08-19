import { FaBullseye, FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";
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
            <div className="bg-white/90 backdrop-blur-md rounded-lg p-8 text-center shadow-2xl border border-gray-200/50">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <FaBullseye className="text-red-500 text-4xl" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full"></div>
                </div>
              </div>
              <div className="text-5xl font-bold text-blue-600 mb-2">73%</div>
              <div className="text-xl font-bold text-gray-900 mb-2">
                Attacked
              </div>
              <p className="text-gray-600">German SMEs in 2023</p>
            </div>

            {/* Card 2: Average Cost */}
            <div className="bg-white/90 backdrop-blur-md rounded-lg p-8 text-center shadow-2xl border border-gray-200/50">
              <div className="flex justify-center mb-6">
                <FaMoneyBillWave className="text-yellow-500 text-4xl" />
              </div>
              <div className="text-5xl font-bold text-blue-600 mb-2">€120K</div>
              <div className="text-xl font-bold text-gray-900 mb-2">
                Average cost
              </div>
              <p className="text-gray-600">SME data breach cost</p>
            </div>

            {/* Card 3: Closure Time */}
            <div className="bg-white/90 backdrop-blur-md rounded-lg p-8 text-center shadow-2xl border border-gray-200/50">
              <div className="flex justify-center mb-6">
                <FaCalendarAlt className="text-red-500 text-4xl" />
              </div>
              <div className="text-5xl font-bold text-blue-600 mb-2">
                6 Months
              </div>
              <div className="text-xl font-bold text-gray-900 mb-2">
                Closure time
              </div>
              <p className="text-gray-600">
                60% of attacked SMEs close within this timeframe
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
}
