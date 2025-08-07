import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScheduleDemoModal } from "@/components/ui/ScheduleDemoModal";

function SMEHero() {
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-[#f2f7ff] flex flex-col items-center py-24 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#111827] leading-tight">
          Stop Juggling Threats and
          <br />
          Regulations.
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-[#31c9b7] mt-2 mb-4">
          Start Growing Your Business.
        </h2>
        <p className="max-w-2xl text-lg text-[#374151] mb-8 font-montserrat">
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
      </section>

      {/* Schedule Demo Modal */}
      <ScheduleDemoModal
        isOpen={isScheduleDemoModalOpen}
        onClose={() => setIsScheduleDemoModalOpen(false)}
      />
    </>
  );
}

export default SMEHero;
