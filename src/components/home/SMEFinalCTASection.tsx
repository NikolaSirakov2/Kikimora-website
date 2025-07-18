import { useState } from "react";
import { Button } from "../ui/button";
import { ScheduleDemoModal } from "@/components/ui/ScheduleDemoModal";

function SMEFinalCTASection() {
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);

  return (
    <>
      <section
        className="w-full flex flex-col items-center py-20 px-4 bg-gradient-to-b from-[#31c9b7] to-[#2bb3a3]"
        aria-label="Ready to Secure Your Business CTA"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6   text-white">
          Ready to Secure Your Business and Your Future?
        </h2>
        <p className="max-w-2xl text-center text-white/90 text-lg font-montserrat mb-8">
          Don't wait for a data breach or a failed compliance audit. Take
          control of your cybersecurity and compliance today. Get started for
          free with our Community Edition or schedule a personalized demo with
          an SME security expert.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-md">
          <Button
            variant="outline"
            className="border-white text-[#31c9b7] hover:bg-white/10 hover:text-white font-bold px-8 py-4 text-lg w-full md:w-auto"
            onClick={() =>
              window.open("https://app.kikimora.io/register", "_blank")
            }
            aria-label="Start for Free"
          >
            Start for Free
          </Button>
          <Button
            variant="outline"
            className="border-white text-[#31c9b7] hover:bg-white/10 hover:text-white font-bold px-8 py-4 text-lg w-full md:w-auto"
            onClick={() => setIsScheduleDemoModalOpen(true)}
            aria-label="Book Demo"
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

export { SMEFinalCTASection };
