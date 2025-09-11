import { FaCheck } from "react-icons/fa";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function CybersecurityShortageSection() {
  return (
    <AnimatedBackground className="w-[99.1vw]">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Top Statistics Block */}
          <div className="bg-red-100/90 max-w-5xl mx-auto backdrop-blur-md rounded-lg p-8 mb-8 shadow-lg border border-red-200/50">
            <div className="grid md:grid-cols-2 gap-8 text-center">
              {/* Left Section */}
              <div>
                <div className="text-5xl font-bold text-red-600 mb-2">
                  347,000+
                </div>
                <div className="text-gray-900">
                  Cybersecurity professionals shortage
                </div>
              </div>

              {/* Right Section */}
              <div>
                <div className="text-5xl font-bold text-red-600 mb-2">76%</div>
                <div className="text-gray-900">
                  Staff lack formal qualifications
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Two Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Card - Managed Security Services */}
            <div className="bg-white/90 backdrop-blur-md rounded-lg p-8 shadow-2xl border border-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Managed Security Services
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaCheck className="text-blue-500 text-lg flex-shrink-0" />
                  <span className="text-gray-700">
                    24/7 monitoring & detection
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheck className="text-blue-500 text-lg flex-shrink-0" />
                  <span className="text-gray-700">
                    Certified security analysts
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheck className="text-blue-500 text-lg flex-shrink-0" />
                  <span className="text-gray-700">
                    Advanced threat intelligence
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheck className="text-blue-500 text-lg flex-shrink-0" />
                  <span className="text-gray-700">Rapid incident response</span>
                </div>
              </div>
            </div>

            {/* Right Card - Cost Comparison */}
            <div className="bg-white/90 backdrop-blur-md rounded-lg p-8 shadow-2xl border border-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Cost Comparison
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">In-house Team:</span>
                  <span className="text-red-600 font-semibold">
                    €475K - €1.3M/year
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Our MSS:</span>
                  <span className="text-blue-600 font-semibold">
                    Fraction of the cost
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
}
