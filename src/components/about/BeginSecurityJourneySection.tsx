import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function BeginSecurityJourneySection() {
  return (
    <AnimatedBackground className="w-[99.1vw] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Begin Your Security Journey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* For Customers Card */}
          <div className="bg-[#1B2B3A] rounded-xl p-8 flex flex-col h-full">
            <span className="text-[#7FB3FF] text-sm font-semibold uppercase tracking-wide mb-4">
              FOR CUSTOMERS
            </span>
            <h3 className="text-2xl font-bold text-white mb-6 flex-grow">
              Ready to build a more resilient business?
            </h3>
            <Button className="font-semibold py-3 px-6 rounded-lg transition-colors duration-200 w-full">
              Get Started
            </Button>
          </div>

          {/* For Partners Card */}
          <div className="bg-[#1B2B3A] rounded-xl p-8 flex flex-col h-full">
            <span className="text-[#7FB3FF] text-sm font-semibold uppercase tracking-wide mb-4">
              FOR PARTNERS
            </span>
            <h3 className="text-2xl font-bold text-white mb-6 flex-grow">
              Interested in partnering with us?
            </h3>
            <Button className="font-semibold py-3 px-6 rounded-lg transition-colors duration-200 w-full">
              Explore Partnership Programs
            </Button>
          </div>

          {/* For Careers Card */}
          <div className="bg-[#1B2B3A] rounded-xl p-8 flex flex-col h-full">
            <span className="text-[#7FB3FF] text-sm font-semibold uppercase tracking-wide mb-4">
              FOR CAREERS
            </span>
            <h3 className="text-2xl font-bold text-white mb-6 flex-grow">
              Want to join our mission?
            </h3>
            <Button className="font-semibold py-3 px-6 rounded-lg transition-colors duration-200 w-full">
              View Open Positions
            </Button>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
