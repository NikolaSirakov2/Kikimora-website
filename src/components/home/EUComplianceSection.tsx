import {
  FaShieldAlt,
  FaClipboardList,
  FaBuilding,
  FaCheck,
} from "react-icons/fa";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function EUComplianceSection() {
  return (
    <AnimatedBackground className="w-[99.1vw]">
      <section className=" py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet EU Compliance Through Proactive Vulnerability Management
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Compliance Regulations */}
            <div className="space-y-6">
              {/* GDPR Article 32 Card */}
              <div className="bg-white/90 backdrop-blur-md rounded-lg p-6 shadow-lg border border-gray-200/50">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <FaShieldAlt className="text-red-500 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      GDPR Article 32
                    </h3>
                    <p className="text-gray-600">
                      "Appropriate technical and organisational measures"
                      including regular testing and assessment
                    </p>
                  </div>
                </div>
              </div>

              {/* NIS2 Card */}
              <div className="bg-white/90 backdrop-blur-md rounded-lg p-6 shadow-lg border border-gray-200/50">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <FaClipboardList className="text-amber-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      NIS2
                    </h3>
                    <p className="text-gray-600">
                      Risk management practices and vulnerability assessments
                      for essential/important entities
                    </p>
                  </div>
                </div>
              </div>

              {/* DORA Card */}
              <div className="bg-white/90 backdrop-blur-md rounded-lg p-6 shadow-lg border border-gray-200/50">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <FaBuilding className="text-green-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      DORA
                    </h3>
                    <p className="text-gray-600">
                      ICT risk management for financial institutions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Actionable Benefits */}
            <div className="bg-white/90 backdrop-blur-md rounded-lg p-8 shadow-lg border border-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Actionable Benefits
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaCheck className="text-green-500 text-lg flex-shrink-0" />
                  <span className="text-gray-700">
                    Proactive threat mitigation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheck className="text-green-500 text-lg flex-shrink-0" />
                  <span className="text-gray-700">Reduced attack surface</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheck className="text-green-500 text-lg flex-shrink-0" />
                  <span className="text-gray-700">
                    Improved compliance posture
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheck className="text-green-500 text-lg flex-shrink-0" />
                  <span className="text-gray-700">Operational resilience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheck className="text-green-500 text-lg flex-shrink-0" />
                  <span className="text-gray-700">
                    Customer trust protection
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
