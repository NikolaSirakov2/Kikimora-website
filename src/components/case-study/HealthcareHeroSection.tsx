import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

function HealthcareHeroSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] min-h-[80vh] flex items-center justify-center overflow-hidden px-4 py-24">
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto text-center pt-24">
        <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-5xl leading-tight mb-4">
          Protect Your Mission-Critical Operations
          <br />
          <span className="text-[#31c9b7] font-bold text-5xl md:text-6xl lg:text-6xl block mt-2">
            While Ensuring Patient Safety
          </span>
        </h1>
        <p className="text-white text-lg md:text-xl mb-4 font-light max-w-4xl">
          Comprehensive cybersecurity designed specifically for healthcare
          executives who need to balance patient care, regulatory compliance,
          and operational efficiency.
        </p>
        <p className="text-white text-base md:text-lg mb-8 max-w-3xl mx-auto font-light">
          Kikimora eliminates the complexity of healthcare cybersecurity
          management. We protect your organization from the cyber threats that
          can shut down operations, compromise patient data, and result in
          millions in fines—while ensuring your teams can focus on delivering
          exceptional patient care.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full">
          <button
            className="px-8 py-3 text-lg font-normal shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#31c9b7] focus:ring-offset-2"
            type="button"
          >
            Schedule Executive Briefing
          </button>
          <button
            className="bg-transparent hover:bg-white/10 text-white font-normal py-3 px-8 rounded-md border border-[#31c9b7]/50 shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#31c9b7] focus:ring-offset-2"
            type="button"
          >
            View ROI Calculator
          </button>
        </div>
      </div>
    </AnimatedBackground>
  );
}

export { HealthcareHeroSection };
