import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

function HeroCaseStudy() {
  return (
    <AnimatedBackground className="w-[99.1vw] min-h-[70vh] flex items-center justify-center overflow-hidden px-4 py-12">
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto text-center">
        <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-5xl leading-tight mb-4">
          From Regulatory Complexity to
          <br />
          <span className="text-[#31c9b7] text-4xl md:text-6xl lg:text-6xl block mt-2">
            Cyber Resilience
          </span>
        </h1>
        <p className="text-[#B0C4D9] text-lg md:text-2xl mb-4 font-medium">
          The Unified Security Platform for the Financial Sector.
        </p>
        <p className="text-[#B0C4D9] text-base md:text-lg mb-8 max-w-3xl mx-auto">
          Navigate DORA, NIS2, and PCI DSS, secure critical APIs, and manage
          vulnerabilities with a single platform and an expert team that grows
          with your business.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full">
          <Button
            className="px-8 py-3 text-lg font-bold shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#31c9b7] focus:ring-offset-2"
            type="button"
          >
            Request a Consultation
          </Button>
          <Button
            variant="outline"
            className="font-semibold py-3 px-8 rounded-lg shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#31c9b7] focus:ring-offset-2"
            type="button"
          >
            View Platform Capabilities
          </Button>
        </div>
      </div>
    </AnimatedBackground>
  );
}

export { HeroCaseStudy };
