import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function StatsSection() {
  return (
    <AnimatedBackground
      className="w-[99.1vw] py-20 flex flex-col items-center"
      aria-labelledby="stats-title"
    >
      <h1
        id="stats-title"
        className="text-4xl md:text-4xl font-bold text-center text-white mb-6"
      >
        Why Choose Kikimora Managed Security?
      </h1>
      <p className="text-lg md:text-xl text-center text-white/80 max-w-3xl mx-auto mb-16">
        Building and managing an in-house security team can be challenging when
        you are growing. Our proven approach ensures your business is protected.
      </p>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
        <div className="flex flex-col items-center justify-between bg-white rounded-xl p-8 shadow-sm border border-[#e5e7eb] h-[320px] text-center transition-all duration-200 hover:shadow-lg hover:scale-105">
          <div className="flex-1 flex items-center justify-center">
            <span className="text-5xl md:text-5xl font-semibold text-[#2563eb] leading-none">
              250%
            </span>
          </div>
          <div className="h-[60px] flex items-center justify-center">
            <span className="text-base md:text-lg text-[#0a1626] text-center opacity-80">
              Rise in SME Cyberattacks
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between bg-white rounded-xl p-8 shadow-sm border border-[#e5e7eb] h-[320px] text-center transition-all duration-200 hover:shadow-lg hover:scale-105">
          <div className="flex-1 flex items-center justify-center">
            <span className="text-5xl md:text-5xl font-semibold text-[#2563eb] leading-none">
              61%
            </span>
          </div>
          <div className="h-[60px] flex items-center justify-center">
            <span className="text-base md:text-lg text-[#0a1626] text-center opacity-80">
              SMEs Have Experienced Attack
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between bg-white rounded-xl p-8 shadow-sm border border-[#e5e7eb] h-[320px] text-center transition-all duration-200 hover:shadow-lg hover:scale-105">
          <div className="flex-1 flex items-center justify-center">
            <span className="text-5xl md:text-5xl font-semibold text-[#2563eb] leading-none">
              $120,000
            </span>
          </div>
          <div className="h-[60px] flex items-center justify-center">
            <span className="text-base md:text-lg text-[#0a1626] text-center opacity-80">
              Average Cost of Cyberattack
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between bg-white rounded-xl p-8 shadow-sm border border-[#e5e7eb] h-[320px] text-center transition-all duration-200 hover:shadow-lg hover:scale-105">
          <div className="flex-1 flex items-center justify-center">
            <span className="text-5xl md:text-5xl font-semibold text-[#2563eb] leading-none">
              24/7
            </span>
          </div>
          <div className="h-[60px] flex items-center justify-center">
            <span className="text-base md:text-lg text-[#0a1626] text-center opacity-80">
              Security Monitoring
            </span>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
