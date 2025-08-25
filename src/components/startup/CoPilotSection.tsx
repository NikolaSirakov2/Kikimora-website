import { Button } from "@/components/ui/button";
import { Target, ShieldCheck, ArrowRight } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

function CoPilotSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col items-center py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
        Your Co-Pilot for the Journey
      </h2>
      <p className="text-center text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto">
        Whether you need a powerful platform to manage security in-house or a
        dedicated team of experts to do it for you, Kikimora grows with you.
      </p>
      <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-white">
        What does your startup need right now?
      </h3>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center w-full max-w-6xl px-4">
        {/* Card 1 */}
        <div
          className="flex-1 bg-[#31c9b7]/10 border border-[#31c9b7]/20 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center px-10 py-12 min-w-[300px] md:min-w-[400px] transition hover:shadow-lg focus-within:ring-2 focus-within:ring-[#31c9b7]"
          tabIndex={0}
          aria-label="I want to manage security myself"
        >
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#31c9b7]/20 mb-4">
            <Target className="text-[#31c9b7]" size={36} strokeWidth={2.2} />
          </span>
          <h4 className="text-lg font-bold text-gray-900 mb-2 text-center w-full">
            I want to manage security myself
          </h4>
          <p className="text-gray-600 text-center text-base mb-6 w-full">
            For hands-on technical teams who need a unified command center.
          </p>
          <Button
            variant="ghost"
            className="text-primary font-semibold flex items-center justify-center gap-2 mt-auto mx-auto"
          >
            <span>Learn More</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
        {/* Card 2 */}
        <div
          className="flex-1 bg-green-50 border border-green-100 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center px-10 py-12 min-w-[300px] md:min-w-[400px] transition hover:shadow-lg focus-within:ring-2 focus-within:ring-green-400"
          tabIndex={0}
          aria-label="I need an expert team to handle security"
        >
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <ShieldCheck
              className="text-green-600"
              size={36}
              strokeWidth={2.2}
            />
          </span>
          <h4 className="text-lg font-bold text-gray-900 mb-2 text-center w-full">
            I need an expert team to handle security
          </h4>
          <p className="text-gray-600 text-center text-base mb-6 w-full">
            For founders who need to delegate security and focus on their
            product.
          </p>
          <Button
            variant="ghost"
            className="text-primary font-semibold flex items-center justify-center gap-2 mt-auto mx-auto"
          >
            <span>Learn More</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </AnimatedBackground>
  );
}

export { CoPilotSection };
