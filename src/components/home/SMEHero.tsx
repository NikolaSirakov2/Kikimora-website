import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScheduleDemoModal } from "@/components/ui/ScheduleDemoModal";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

function SMEHero() {
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);

  return (
    <>
      <AnimatedBackground className="w-[99.1vw] flex flex-col items-center py-24 pt-48 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Stop Juggling Threats and
          <br />
          Regulations.
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mt-2 mb-4">
          Start Growing Your Business.
        </h2>
        <p className="max-w-2xl text-lg text-white/80 mb-8 font-montserrat">
          Kikimora is the all-in-one cybersecurity and compliance platform built
          for European SMEs. We protect your business so you can build it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="px-8 py-4 rounded-lg font-montserrat text-lg font-semibold"
            aria-label="View Features"
          >
            View Features
          </Button>
          <Button
            className="px-8 py-4 rounded-lg font-montserrat text-lg font-semibold"
            aria-label="Book Demo"
            onClick={() => setIsScheduleDemoModalOpen(true)}
          >
            Book Demo
          </Button>
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

export default SMEHero;
