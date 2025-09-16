import { useState } from "react";
import { ScheduleDemoModal } from "@/components/ui/ScheduleDemoModal";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function MSSPHero() {
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);

  return (
    <>
      <AnimatedBackground className="min-h-[50vh] w-[99.1vw] flex items-center justify-center py-16">
        <div className="max-w-[1300px] mx-auto w-full pt-48">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center ml-20">
              {/* Left Column - Text Content */}
              <div className="space-y-6">
                <h1 className="text-3xl lg:text-4xl leading-tight">
                  <span className="text-white">Your go-to solution for </span>
                  <span className="text-blue-600">
                    managed security services!
                  </span>
                </h1>

                <div className="space-y-4 text-white text-md">
                  <p>
                    <span className="text-blue-600">Kikimora</span> manages
                    vulnerabilities and provides a consolidated overview of
                    security testing.
                  </p>
                  <p>
                    <span className="text-blue-600">Kikimora</span> is a
                    versatile platform that adapts to your security needs.
                  </p>

                  <ul className="space-y-2 mt-6">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Consolidated vulnerability data across multiple clients
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Enhanced reporting and compliance capabilities
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Gain access to numerous scanning and intel providers
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      Flexible pricing bundles for optimized budgeting
                    </li>
                  </ul>

                  <p className="text-lg font-medium">
                    Starting with Kikimora is easy and convenient!
                  </p>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="bg-gray-100/20 backdrop-blur-sm p-4 rounded-lg flex justify-center items-center">
                <div className="flex flex-col gap-4 my-8 w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent border border-white/60 rounded-lg px-4 py-3 text-white font-montserrat placeholder:text-white/80 focus:outline-none hover:border-white/80 transition-colors duration-200"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border border-white/60 rounded-lg px-4 py-3 text-white font-montserrat placeholder:text-white/80 focus:outline-none hover:border-white/80 transition-colors duration-200"
                />
                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full bg-transparent border border-white/60 rounded-lg px-4 py-3 text-white font-montserrat placeholder:text-white/80 focus:outline-none hover:border-white/80 transition-colors duration-200"
                />
                <select
                  className="w-full bg-transparent border border-white/60 rounded-lg px-4 py-3 text-white font-montserrat focus:outline-none hover:border-white/80 transition-colors duration-200 appearance-none cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-500 bg-gray-800">
                    Company size (optional)
                  </option>
                  <option value="1-10" className="text-gray-900 bg-white">
                    1-10
                  </option>
                  <option value="10-50" className="text-gray-900 bg-white">
                    10-50
                  </option>
                  <option value="50-200" className="text-gray-900 bg-white">
                    50-200
                  </option>
                </select>
                <input
                  type="text"
                  placeholder="Number of assets (optional)"
                  className="w-full bg-transparent border border-white/60 rounded-lg px-4 py-3 text-white font-montserrat placeholder:text-white/80 focus:outline-none hover:border-white/80 transition-colors duration-200"
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
