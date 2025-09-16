import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScheduleDemoModal } from "@/components/ui/ScheduleDemoModal";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function HeroSection() {
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);

  return (
    <>
      <AnimatedBackground className="pt-20 w-[99.1vw] flex items-center justify-center min-h-[600px] px-8 md:px-16 lg:p-24">
        <div className="w-[1200px] flex justify-between items-center pt-48">
          <div className="flex flex-col gap-6 max-w-[600px]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img
                  src="/logos/colorAndBlack.png"
                  alt="Kikimora Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-blue-600">Managed Security Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold">
              <span className="text-white">Kikimora</span>
              <br />
              <span className="text-blue-600">Managed Security</span>
            </h1>

            <p className="text-gray-300 text-lg">
              The essential toolset to meet your security and compliance
              objectives.
            </p>

            <p className="text-gray-300 text-lg">
              Let Kikimora handle the security complexities, while you focus on
              the important business objectives!
            </p>

            <div className="flex gap-4">
              <Button
                variant="default"
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-6 text-lg rounded-xl"
                onClick={() => setIsScheduleDemoModalOpen(true)}
                aria-label="Schedule Your Demo"
              >
                Schedule a Demo
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-2 border-blue-600 hover:bg-white/10 text-blue-600 px-8 py-6 text-lg rounded-xl flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch Demo
              </Button>
            </div>

            <div className="flex gap-12 mt-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">24/7</span>
                <span className="text-gray-300">Monitoring</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">500+</span>
                <span className="text-gray-300">Clients Protected</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">99.9%</span>
                <span className="text-gray-300">Uptime</span>
              </div>
            </div>
          </div>

          <div className="w-[550px] h-[400px] bg-gray-200/50 rounded-xl relative">
            <img
              src="/logos/colorAndBlack.png"
              alt="Kikimora Logo"
              className="absolute top-[-16px] right-[-16px] w-16 h-auto"
            />
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
