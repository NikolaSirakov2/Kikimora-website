import { FiChevronRight } from "react-icons/fi";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

function FinancialCaseStudySection() {
  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col items-center py-20 px-4">
      <h1
        id="financial-case-heading"
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-white"
      >
        Proven in High-Stakes Financial Environments
      </h1>
      <div className="w-full max-w-6xl flex flex-col gap-8 items-center">
        {/* Cards Row */}
        <div className="flex flex-col md:flex-row items-center w-full gap-4 md:gap-6 mb-4">
          {/* Challenge Card */}
          <div className="flex-1 bg-[#e6f7f5] rounded-2xl p-6 min-h-[200px] shadow-md min-w-[280px] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-bold mb-2 text-[#111827]">Challenge</h3>
            <p className="text-base text-[#374151]">
              Needed to centralize security assessments, prioritize
              vulnerabilities effectively, and streamline remediation.
            </p>
          </div>
          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center mx-2">
            <FiChevronRight
              size={32}
              className="text-[#31c9b7]"
              aria-label="Next"
            />
          </div>
          {/* Solution Card */}
          <div className="flex-1 bg-[#e6f7f5] rounded-2xl p-6 shadow-md min-h-[200px] min-w-[280px] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-bold mb-2 text-[#111827]">Solution</h3>
            <p className="text-base text-[#374151]">
              Optimized vulnerability management, reduced time-to-remediate, and
              gained full visibility of the vulnerability lifecycle.
            </p>
          </div>
          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center mx-2">
            <FiChevronRight
              size={32}
              className="text-[#31c9b7]"
              aria-label="Next"
            />
          </div>
          {/* Result Card */}
          <div className="flex-1 bg-[#e6f7f5] rounded-2xl p-6 shadow-md min-h-[200px] min-w-[280px] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-bold mb-2 text-[#111827]">Result</h3>
            <p className="text-base text-[#374151]">
              Streamlined security operations with comprehensive vulnerability
              management platform.
            </p>
          </div>
        </div>
        {/* Mobile Arrows */}
        <div className="flex md:hidden flex-col w-full items-center gap-2 mb-2">
          <FiChevronRight
            size={28}
            className="text-[#31c9b7] rotate-90"
            aria-label="Next"
          />
          <FiChevronRight
            size={28}
            className="text-[#31c9b7] rotate-90"
            aria-label="Next"
          />
        </div>
        {/* Testimonial Card */}
        <div
          className="w-full bg-[#e6f7f5] rounded-2xl p-8 shadow-md flex flex-col items-center"
          role="region"
          aria-label="testimonial"
        >
          <blockquote
            className="italic text-[#22223b] text-lg text-center mb-4 max-w-3xl mx-auto"
            style={{
              fontFamily: "'Italianno', 'Dancing Script', cursive, serif",
            }}
          >
            "Should you need a 5-tier, flexible, all-in-one platform for
            vulnerability management, we strongly recommend Kikimora."
          </blockquote>
          <cite className="not-italic text-[#31c9b7] text-base font-medium text-center block">
            — Stefan Tsonev, Head of IT Security Department, D Commerce Bank AD
          </cite>
        </div>
      </div>
    </AnimatedBackground>
  );
}

export { FinancialCaseStudySection };
