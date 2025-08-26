import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function RecentSecurityStatisticsSection() {
  return (
    <AnimatedBackground
      className="w-[99.1vw] flex justify-center items-center py-12"
      aria-labelledby="recent-security-stats-title"
    >
      <div className="w-full max-w-6xl flex flex-col items-center">
        <h2
          id="recent-security-stats-title"
          className="text-3xl md:text-4xl font-bold text-center text-white mb-8"
        >
          Recent Security Statistics
        </h2>
        <div className="w-[1200px] flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-10 flex flex-col items-center shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md w-full">
            <span className="text-3xl md:text-4xl font-bold text-[#e53935] mb-2">
              82%
            </span>
            <span className="text-center text-base md:text-lg text-[#0a1626] opacity-80">
              of data breaches were linked to human-related security weaknesses
            </span>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl p-10 flex flex-col items-center shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md w-full">
            <span className="text-3xl md:text-4xl font-bold text-[#e53935] mb-2">
              $4.88M
            </span>
            <span className="text-center text-base md:text-lg text-[#0a1626] opacity-80">
              The average cost of a data breach reached an all-time high in 2024
            </span>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-xl p-10 flex flex-col items-center shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md w-full">
            <span className="text-3xl md:text-4xl font-bold text-[#e53935] mb-2">
              22%
            </span>
            <span className="text-center text-base md:text-lg text-[#0a1626] opacity-80">
              Human error contributed to approximately 22% of data breaches
            </span>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
