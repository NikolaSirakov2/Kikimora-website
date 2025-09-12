import { useState } from "react";
import { Button } from "../ui/button";
import { ScheduleDemoModal } from "@/components/ui/ScheduleDemoModal";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

function SMEFinalCTASection() {
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);

  return (
    <>
      <AnimatedBackground
        className="w-[99.1vw] flex flex-col items-center py-20 px-4"
        aria-label="Ready to Secure Your Business CTA"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6   text-white">
          Ready to Secure Your Business and Your Future?
        </h2>
        <p className="max-w-2xl mx-auto text-center text-white/90 text-lg font-montserrat mb-8">
          Don't wait for a data breach or a failed compliance audit. Take
          control of your cybersecurity and compliance today. Get started for
          free with our Community Edition or schedule a personalized demo with
          an SME security expert.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full max-w-lg mx-auto">
          <Button
            variant="outline"
            size="lg"
            className="border-white text-blue-600 hover:bg-white/10 hover:text-white font-bold w-full md:w-auto"
            onClick={() =>
              window.open("https://app.kikimora.io/register", "_blank")
            }
            aria-label="Start for Free"
          >
            Start for Free
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-blue-600 hover:bg-white/10 hover:text-white font-bold w-full md:w-auto"
            onClick={() => setIsScheduleDemoModalOpen(true)}
            aria-label="Book Demo"
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

export { SMEFinalCTASection };
