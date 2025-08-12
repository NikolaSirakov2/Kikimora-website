import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pricing } from "./Pricing";
import { ScheduleDemoModal } from "@/components/ui/ScheduleDemoModal";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function PricingComponent() {
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);

  return (
    <>
      <AnimatedBackground>
        {/* Full-width section with gradient background */}
        <div className="w-screen relative -ml-[50vw] left-1/2">
          <div className="bg-gradient-to-r from-[#2A1D4C] via-[#1B4E5F] to-[#003D37] py-20">
            <div className="pl-[5%] pr-[2%] mx-auto max-w-[1600px] flex items-center">
              {/* Left side - Content */}
              <div className="max-w-[500px]">
                <div className="flex flex-col mb-8 leading-none">
                  <span className="text-3xl text-white  ">
                    Secure your code now,
                  </span>
                  <span className="text-3xl text-white   mt-2">
                    request a free demo
                  </span>
                </div>
                <Button
                  className="rounded-lg px-8 py-6 font-montserrat"
                  onClick={() => setIsScheduleDemoModalOpen(true)}
                >
                  Book Demo
                </Button>
              </div>

              {/* Right side - Illustration */}
              <div className="max-w-[800px] ml-auto">
                <Pricing />
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
