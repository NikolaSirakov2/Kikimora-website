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
      <p className="text-lg md:text-xl text-center text-white/80 max-w-3xl mb-16">
        Building and managing an in-house security team can be challenging when
        you are growing. Our proven approach ensures your business is protected.
      </p>
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center items-center gap-12 md:gap-0 ml-10">
        <div className="flex-1 flex flex-col items-center bg-white rounded-xl p-10 shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md mb-12 md:mb-0">
          <span className="text-5xl md:text-6xl font-semibold text-[#2563eb] leading-none">
            250%
          </span>
          <span className="mt-4 text-base md:text-lg text-[#0a1626] text-center opacity-80">
            Rise in SME Cyberattacks
          </span>
        </div>
        <div
          className="hidden md:block w-px h-20 bg-[#0a1626]/10 mx-8"
          aria-hidden="true"
        />
        <div className="flex-1 flex flex-col items-center bg-white rounded-xl p-10 shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md mb-12 md:mb-0">
          <span className="text-5xl md:text-6xl font-semibold text-[#2563eb] leading-none">
            61%
          </span>
          <span className="mt-4 text-base md:text-md text-[#0a1626] text-center opacity-80">
            SMEs Have Experienced Attack
          </span>
        </div>
        <div
          className="hidden md:block w-px h-20 bg-[#0a1626]/10 mx-8"
          aria-hidden="true"
        />
        <div className="flex-1 flex flex-col items-center bg-white rounded-xl p-10 shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md mb-12 md:mb-0">
          <span className="text-5xl md:text-6xl font-semibold text-[#2563eb] leading-none">
            $120,000
          </span>
          <span className="mt-4 text-base md:text-lg text-[#0a1626] text-center opacity-80">
            Average Cost of Cyberattack
          </span>
        </div>
        <div
          className="hidden md:block w-px h-20 bg-[#0a1626]/10 mx-8"
          aria-hidden="true"
        />
        <div className="flex-1 flex flex-col items-center bg-white rounded-xl p-10 shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md">
          <span className="text-5xl md:text-6xl font-semibold text-[#2563eb] leading-none">
            24/7
          </span>
          <span className="mt-4 text-base md:text-lg text-[#0a1626] text-center opacity-80">
            Security Monitoring
          </span>
        </div>
      </div>
    </AnimatedBackground>
  );
}
