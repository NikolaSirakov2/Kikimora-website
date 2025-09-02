import { useState } from "react";
import { ScheduleDemoModal } from "@/components/ui/ScheduleDemoModal";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function MSSPHero() {
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);

  return (
    <>
      <AnimatedBackground className="min-h-[50vh] w-[99.1vw] flex items-center justify-center py-16">
        <div className="max-w-[1300px] mx-auto w-full pt-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center ml-20">
              {/* Left Column - Text Content */}
              <div className="space-y-6">
                <h1 className="text-3xl lg:text-4xl leading-tight">
                  <span className="text-white">Your go-to solution for </span>
                  <span className="text-teal-400">
                    managed security services!
                  </span>
                </h1>

                <div className="space-y-4 text-white text-md">
                  <p>
                    <span className="text-teal-400">Kikimora</span> manages
                    vulnerabilities and provides a consolidated overview of
                    security testing.
                  </p>
                  <p>
                    <span className="text-teal-400">Kikimora</span> is a
                    versatile platform that adapts to your security needs.
                  </p>

                  <ul className="space-y-2 mt-6">
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      Consolidated vulnerability data across multiple clients
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      Enhanced reporting and compliance capabilities
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      Gain access to numerous scanning and intel providers
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-2">•</span>
                      Flexible pricing bundles for optimized budgeting
                    </li>
                  </ul>

                  <p className="text-lg font-medium">
                    Starting with Kikimora is easy and convenient!
                  </p>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="flex flex-col gap-4 my-20 max-w-[500px]">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white font-montserrat placeholder:text-white/40 focus:outline-none focus:border-[#00E5BE]"
                />
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white font-montserrat placeholder:text-white/40 focus:outline-none focus:border-[#00E5BE]"
                />
                <input
                  type="text"
                  placeholder="Enter your company name"
                  className="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white font-montserrat placeholder:text-white/40 focus:outline-none focus:border-[#00E5BE]"
                />
                <input
                  type="text"
                  placeholder="Company size (optional)"
                  className="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white font-montserrat placeholder:text-white/40 focus:outline-none focus:border-[#00E5BE]"
                />
                <input
                  type="text"
                  placeholder="Number of assets (optional)"
                  className="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white font-montserrat placeholder:text-white/40 focus:outline-none focus:border-[#00E5BE]"
                />
                <button 
                  className="font-montserrat font-semibold text-black bg-white rounded-xl w-fit shadow-lg hover:shadow-xl transition-all duration-300 hover:transparant"
                  onClick={() => setIsScheduleDemoModalOpen(true)}
                >
                  Book Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedBackground>

      {/* Schedule Demo Modal */}
      <ScheduleDemoModal
        isOpen={isScheduleDemoModalOpen}
        onClose={() => setIsScheduleDemoModalOpen(false)}
      />
    </>
  );
}
