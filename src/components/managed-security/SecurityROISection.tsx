import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function SecurityROISection() {
  return (
    <AnimatedBackground className="py-16 w-[99.1vw] flex flex-col items-center">
      <div className="bg-[#31c9b7]/10 rounded-lg p-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Recent Security Statistics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Stat */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-red-600 mb-3 text-center">
              82%
            </h3>
            <p className="text-gray-800 text-center">
              of data breaches were linked to human-related security weaknesses
            </p>
          </div>

          {/* Second Stat */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-red-600 mb-3 text-center">
              $4.88M
            </h3>
            <p className="text-gray-800 text-center">
              The average cost of a data breach reached an all-time high in 2024
            </p>
          </div>

          {/* Third Stat */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-red-600 mb-3 text-center">
              22%
            </h3>
            <p className="text-gray-800 text-center">
              Human error contributed to approximately 22% of data breaches
            </p>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
