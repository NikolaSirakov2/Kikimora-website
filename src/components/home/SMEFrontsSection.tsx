import {
  ExclamationTriangleIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

function SMEFrontsSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col items-center py-16 px-2">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        The Two Fronts of the European SME's Digital Battle
      </h2>
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 md:gap-12 justify-center">
        {/* Left: Cyberattacks */}
        <div className="flex-1 bg-white rounded-xl p-10 flex flex-col items-center shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md">
          <ShieldExclamationIcon
            className="w-14 h-14 text-red-500 mb-4"
            aria-hidden="true"
          />
          <h3 className="text-xl font-bold text-center mb-6 text-[#111827]">
            A Rising Tide of Cyberattacks
          </h3>
          <div className="text-[#6b7280] text-base font-montserrat mb-4">
            Cyber Threats
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="bg-[#f8fafc] rounded-lg p-6 text-center shadow border">
              <div className="text-4xl font-bold text-red-600 mb-1">43%</div>
              <div className="text-[#374151] text-base font-montserrat">
                of all cyberattacks target small and medium-sized businesses
              </div>
            </div>
            <div className="bg-[#f8fafc] rounded-lg p-6 text-center shadow border">
              <div className="text-4xl font-bold text-red-600 mb-1">
                €120,000
              </div>
              <div className="text-[#374151] text-base font-montserrat">
                The average cost of a single data breach for an SME
              </div>
            </div>
            <div className="bg-[#f8fafc] rounded-lg p-6 text-center shadow border">
              <div className="text-4xl font-bold text-red-600 mb-1">60%</div>
              <div className="text-[#374151] text-base font-montserrat">
                of attacked small businesses fail within 6 months
              </div>
            </div>
          </div>
        </div>
        {/* Right: Compliance */}
        <div className="flex-1 bg-white rounded-xl p-10 flex flex-col items-center shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md">
          <ExclamationTriangleIcon
            className="w-14 h-14 text-yellow-600 mb-4"
            aria-hidden="true"
          />
          <h3 className="text-xl font-bold text-center mb-6 text-[#111827]">
            Compliance Challenges
          </h3>
          <div className="text-[#6b7280] text-base font-montserrat mb-4">
            Regulatory Pressure
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="bg-[#f8fafc] rounded-lg p-6 text-center shadow border">
              <div className="text-4xl font-bold text-yellow-600 mb-1">80%</div>
              <div className="text-[#374151] text-base font-montserrat">
                of SMEs struggle to keep up with changing regulations
              </div>
            </div>
            <div className="bg-[#f8fafc] rounded-lg p-6 text-center shadow border">
              <div className="text-4xl font-bold text-yellow-600 mb-1">
                €50,000
              </div>
              <div className="text-[#374151] text-base font-montserrat">
                Average fine for non-compliance in the EU
              </div>
            </div>
            <div className="bg-[#f8fafc] rounded-lg p-6 text-center shadow border">
              <div className="text-4xl font-bold text-yellow-600 mb-1">65%</div>
              <div className="text-[#374151] text-base font-montserrat">
                of SMEs say compliance distracts from growth
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}

export { SMEFrontsSection };
