import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function ROISection() {
  return (
    <AnimatedBackground
      className="w-[99.1vw] py-20 flex flex-col items-center"
      aria-labelledby="roi-title"
    >
      <h2
        id="roi-title"
        className="text-4xl md:text-5xl font-bold text-center text-white mb-6"
      >
        Why Choose Kikimora Managed Security?
      </h2>
      <div className="w-full flex justify-center mb-16">
        <p className="text-lg md:text-xl text-center text-white/80 max-w-3xl px-4">
          Building and managing an in-house security team can be challenging when
          you are growing. Our proven approach ensures your business is protected.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <div className="max-w-6xl flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8 px-4">
        <div className="flex-1 flex flex-col items-center mb-12 md:mb-0">
          <span className="text-5xl md:text-6xl font-semibold text-blue-600 leading-none">
            250%
          </span>
          <span className="mt-4 text-base md:text-lg text-white/80 text-center">
            Rise in SME Cyberattacks
          </span>
        </div>
        <div
          className="hidden md:block w-px h-20 bg-[#0a1626]/10 mx-8"
          aria-hidden="true"
        />
        <div className="flex-1 flex flex-col items-center mb-12 md:mb-0">
          <span className="text-5xl md:text-6xl font-semibold text-blue-600 leading-none">
            61%
          </span>
          <span className="mt-4 text-base md:text-md text-white/80 text-center">
            SMEs Have Experienced Attack
          </span>
        </div>
        <div
          className="hidden md:block w-px h-20 bg-[#0a1626]/10 mx-8"
          aria-hidden="true"
        />
        <div className="flex-1 flex flex-col items-center mb-12 md:mb-0">
          <span className="text-5xl md:text-6xl font-semibold text-blue-600 leading-none">
            $120,000
          </span>
          <span className="mt-4 text-base md:text-lg text-white/80 text-center">
            Average Cost of Cyberattack
          </span>
        </div>
        <div
          className="hidden md:block w-px h-20 bg-[#0a1626]/10 mx-8"
          aria-hidden="true"
        />
        <div className="flex-1 flex flex-col items-center">
          <span className="text-5xl md:text-6xl font-semibold text-blue-600 leading-none">
            24/7
          </span>
          <span className="mt-4 text-base md:text-lg text-white/80 text-center">
            Security Monitoring
          </span>
        </div>
      </div>
      </div>
    </AnimatedBackground>
  );
}
