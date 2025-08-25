import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function KikimoraAdvantageSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col items-center py-24 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          The Kikimora Advantage
        </h2>
        <p className="text-lg text-white/80 font-montserrat max-w-4xl mx-auto">
          We're more than just another security vendor. We're your partner in
          resilience.
        </p>
      </div>

      {/* Three Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Left Card: The Hybrid Advantage */}
        <div className="bg-white rounded-xl p-10 flex flex-col shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md">
          <h3 className="text-xl font-bold text-[#111827] font-montserrat mb-4">
            The Hybrid Advantage
          </h3>
          <p className="text-[#374151] text-base font-montserrat">
            Whether you manage it yourself or we do, it's all powered by our
            proprietary platform. No patchwork of third-party tools means
            greater efficiency and deeper visibility.
          </p>
        </div>

        {/* Middle Card: European Roots, Global Expertise */}
        <div className="bg-white rounded-xl p-10 flex flex-col shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md">
          <h3 className="text-xl font-bold text-[#111827] font-montserrat mb-4">
            European Roots, Global Expertise
          </h3>
          <p className="text-[#374151] text-base font-montserrat">
            As a European company, we deeply understand GDPR and regional
            regulations. Our team holds top certifications like OSCP, OSWE, and
            CEH.
          </p>
        </div>

        {/* Right Card: Transparent & Predictable */}
        <div className="bg-white rounded-xl p-10 flex flex-col shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md">
          <h3 className="text-xl font-bold text-[#111827] font-montserrat mb-4">
            Transparent & Predictable
          </h3>
          <p className="text-[#374151] text-base font-montserrat">
            No complex per-device fees. Just clear, predictable pricing that
            scales with your business, including a powerful free Community tier
            to get you started.
          </p>
        </div>
      </div>
    </AnimatedBackground>
  );
}
