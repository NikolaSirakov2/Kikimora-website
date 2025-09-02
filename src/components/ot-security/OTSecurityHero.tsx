import { useState } from "react";
import { ScheduleDemoModal } from "@/components/ui/ScheduleDemoModal";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function OTSecurityHero() {
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);

  return (
    <>
      <AnimatedBackground className="w-[99.1vw] min-h-[480px] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full max-w-4xl px-4 py-24 pt-48 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Secure the Core of Your <br className="hidden md:block" />{" "}
            Operation.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            The unified cybersecurity platform for industrial enterprises. Gain
            complete visibility, master compliance, and ensure operational
            resilience from the factory floor to the cloud—on your terms, with
            on-premise control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-[#31c9b7] hover:bg-[#2bb3a3] text-white font-semibold px-8 py-4 rounded-lg text-base shadow transition-colors focus:outline-none focus:ring-2 focus:ring-[#31c9b7] focus:ring-offset-2"
              aria-label="Schedule Your Demo"
              type="button"
              onClick={() => setIsScheduleDemoModalOpen(true)}
            >
              Schedule Your Demo
              <span className="ml-2">→</span>
            </button>
            <button
              className="bg-white/80 text-[#31c9b7] font-semibold px-8 py-4 rounded-lg text-base shadow border border-white focus:outline-none focus:ring-2 focus:ring-[#31c9b7] focus:ring-offset-2 transition-colors"
              aria-label="Explore On-Premise Options"
              type="button"
            >
              Explore On-Premise Options
            </button>
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
