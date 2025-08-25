import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

function SMEThreatsSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-6xl text-center">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Your Business is a Bigger Target Than You Think
        </h2>

        {/* Introductory Paragraph */}
        <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto font-montserrat">
          A single ransomware click can halt your operations. A data breach can
          mean thousands in GDPR fines. The threats are enterprise-level, but
          your resources aren't. We understand.
        </p>

        {/* Statistical Data Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Box */}
          <div className="bg-[#f8fafc] rounded-lg p-8 text-center shadow-sm border border-[#e5e7eb]">
            <div className="text-4xl md:text-5xl font-bold text-[#f97316] mb-2">
              250
            </div>
            <div className="text-[#374151] text-base font-montserrat">
              % Increase in Attacks on SMEs
            </div>
          </div>

          {/* Middle Box */}
          <div className="bg-[#f8fafc] rounded-lg p-8 text-center shadow-sm border border-[#e5e7eb]">
            <div className="text-4xl md:text-5xl font-bold text-[#f97316] mb-2">
              61
            </div>
            <div className="text-[#374151] text-base font-montserrat">
              % of SMEs Already Attacked
            </div>
          </div>

          {/* Right Box */}
          <div className="bg-[#f8fafc] rounded-lg p-8 text-center shadow-sm border border-[#e5e7eb]">
            <div className="text-4xl md:text-5xl font-bold text-[#f97316] mb-2">
              $120,000
            </div>
            <div className="text-[#374151] text-base font-montserrat">
              Average Cost of a Cyberattack
            </div>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}

export { SMEThreatsSection };
