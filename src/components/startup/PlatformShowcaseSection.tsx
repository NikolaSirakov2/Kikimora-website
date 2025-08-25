import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

function PlatformShowcaseSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col items-center py-20 px-2">
      <h2 className="text-4xl md:text-5xl text-center mb-2 text-white">
        The Kikimora Platform
      </h2>
      <p className="text-lg md:text-xl text-center text-white/90 mb-8 font-montserrat">
        Your In-House Security Command Center
      </p>
      <p className="text-base md:text-lg text-center text-white/80 mb-12 max-w-2xl mx-auto font-montserrat">
        The unified platform to discover, manage, and remediate vulnerabilities
        with ease.
      </p>
      <div className="w-full max-w-6xl flex flex-col gap-12">
        {/* Row 1: Text left, Card right */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-20">
          <div className="flex-1 min-w-0 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 font-montserrat text-white">
              Unified Dashboard
            </h3>
            <p className="text-white/80 mb-4 font-montserrat">
              See your entire security posture in one place. Consolidate data
              from all your tools for a single source of truth.
            </p>
          </div>
          <div className="flex-1 min-w-0 flex justify-center items-center">
            <div className="rounded-xl shadow-lg bg-[#bfdbfe] w-full h-40 flex items-center justify-center text-lg font-semibold text-[#222]">
              Dashboard Preview
            </div>
          </div>
        </div>
        {/* Row 2: Card left, Text right */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-20">
          <div className="flex-1 min-w-0 flex justify-center items-center order-1 md:order-none">
            <div className="rounded-xl shadow-lg bg-[#d1fae5] w-full h-40 flex items-center justify-center text-lg font-semibold text-[#222]">
              Integration Hub
            </div>
          </div>
          <div className="flex-1 min-w-0 flex flex-col justify-center items-center md:items-start text-center md:text-left order-2 md:order-none">
            <h3 className="text-2xl font-bold mb-2 font-montserrat text-white">
              Integrate Everything
            </h3>
            <p className="text-white/80 mb-4 font-montserrat">
              Connect the tools you already love. Pull in vulnerability data
              from Nessus, Qualys, and Burp Suite, and push remediation tasks
              directly to Jira.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
        <Button className="px-6 py-3 font-montserrat rounded-lg">
          Learn More
        </Button>
        <Button
          variant="outline"
          className="px-6 py-3 font-montserrat rounded-lg border border-[#31c9b7] text-[#31c9b7] hover:bg-[#31c9b7]/10"
        >
          Explore Platform Features
        </Button>
      </div>
    </AnimatedBackground>
  );
}

export { PlatformShowcaseSection };
