import { FaGlobe, FaUsers, FaChartBar } from "react-icons/fa";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function EuropeanCybersecuritySection() {
  return (
    <AnimatedBackground className="w-[99.1vw]">
      <section className=" py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why European Businesses Choose European Cybersecurity
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              We're not just located in Europe—we're built for it. Our platform
              and expertise are tailored to your specific regulatory and
              business needs.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Data Sovereignty */}
            <div className="bg-gray-800/80 backdrop-blur-md rounded-lg p-8 text-center border border-gray-700/50 shadow-2xl">
              <div className="flex justify-center mb-6">
                <FaGlobe className="text-blue-400 text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Data Sovereignty
              </h3>
              <p className="text-white/80">
                Your data never leaves Europe. We guarantee full compliance with
                GDPR and data residency laws, hosted in secure, EU-based data
                centers.
              </p>
            </div>

            {/* Card 2: Local Expertise */}
            <div className="bg-gray-800/80 backdrop-blur-md rounded-lg p-8 text-center border border-gray-700/50 shadow-2xl">
              <div className="flex justify-center mb-6">
                <FaUsers className="text-blue-400 text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Local Expertise
              </h3>
              <p className="text-white/80">
                Our analysts understand the European threat landscape and
                business environment, providing context-aware security that
                others can't.
              </p>
            </div>

            {/* Card 3: Built-in Compliance */}
            <div className="bg-gray-800/80 backdrop-blur-md rounded-lg p-8 text-center border border-gray-700/50 shadow-2xl">
              <div className="flex justify-center mb-6">
                <FaChartBar className="text-blue-400 text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Built-in Compliance
              </h3>
              <p className="text-white/80">
                Effortlessly meet NIS2, DORA, and other EU-specific regulations
                with our automated compliance reporting and management tools.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
}
