import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

function FintechTestimonialSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] py-16 px-4 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-16">
        How D Commerce Bank Optimized Vulnerability
        <br className="hidden md:block" />
        Management with Kikimora
      </h1>
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        {/* Left: Bank Logo and Subtitle */}
        <div className="flex flex-col items-center md:items-start flex-shrink-0 min-w-[220px]">
          <span className="text-4xl md:text-5xl font-extrabold text-[#31c9b7] mb-2 text-center md:text-left">
            D Commerce Bank
          </span>
          <span className="text-white/60 text-base md:text-lg mt-2 text-center md:text-left">
            Leading Financial Institution
          </span>
        </div>
        {/* Right: Testimonial Card */}
        <div className="bg-[#fafbfc] rounded-2xl shadow-lg p-8 md:p-10 max-w-xl w-full flex flex-col gap-4">
          <span className="text-[#31c9b7] text-6xl mb-2" aria-hidden="true">
            &#x275E;
          </span>
          <p className="text-[#071C2C] italic text-lg md:text-xl mb-2">
            "We are entirely satisfied with the results achieved and the quality
            of the software. The implementation of Kikimora opened new
            opportunities for the bank's security department to manage cyber
            security risks more effectively... we strongly recommend
            Kikimora."
          </p>
          <span className="font-bold text-[#071C2C] mt-2">
            – Stefan Tsonev, Head of IT Security Department at D Commerce Bank
            AD
          </span>
        </div>
      </div>
    </AnimatedBackground>
  );
}

export { FintechTestimonialSection };
