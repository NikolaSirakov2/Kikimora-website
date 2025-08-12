import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScheduleDemoModal } from "@/components/ui/ScheduleDemoModal";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function PlatformSection() {
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);

  return (
    <>
      <AnimatedBackground>
        <section className="py-24 bg-[#24317f] relative z-2 w-[1200px] mx-auto rounded-lg">
          <div className="flex items-center">
            {/* Left side - Dashboard Image */}
            <div className="w-1/2 flex justify-center">
              <div className="w-[500px] h-[400px] bg-[#8C50C8] rounded-lg z-10">
                {/* Placeholder for the dashboard image */}
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex flex-col gap-6 w-1/2 pr-[5%] pl-20">
              <h2 className="text-5xl text-white   leading-tight">
                The platform for efficient teams.
              </h2>
              <p className="text-white/80 text-lg font-montserrat">
                Seamless integration in your workflow: Effortless data input,
                customized dashboards, and AI-assisted security insights at your
                fingertips.
              </p>
              <div className="flex gap-4 mt-4">
                <Button
                  className="rounded-lg px-8 py-6 font-montserrat"
                  onClick={() => setIsScheduleDemoModalOpen(true)}
                >
                  Book Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedBackground>

      {/* Schedule Demo Modal */}
      <ScheduleDemoModal
        isOpen={isScheduleDemoModalOpen}
        onClose={() => setIsScheduleDemoModalOpen(false)}
      />
    </>
  );
}
