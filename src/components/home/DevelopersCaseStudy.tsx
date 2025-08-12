import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function DevelopersCaseStudy() {
  return (
    <AnimatedBackground className="py-16">
      <div className="w-full px-[5%] flex flex-col items-center">
        <div className="w-full max-w-[1400px] bg-[#2A1D4C] rounded-3xl p-10 flex justify-between z-10">
          {/* Left side content */}
          <div className="max-w-[600px]">
            <h2 className="text-5xl text-white   mb-3">Developers</h2>
            <h3 className="text-4xl text-[#29ABE2]   mb-4">case study</h3>
            <p className="text-white/80 text-lg font-montserrat mb-6">
              A robust platform for efficient and comprehensive vulnerability
              management, designed to streamline your cybersecurity processes.
            </p>
            <Button className="rounded-lg px-8 py-6 font-montserrat">
              Learn More
            </Button>
          </div>

          {/* Right side case study card */}
          <div className="bg-[#1B4E5F] rounded-2xl overflow-hidden max-w-[500px]">
            {/* Placeholder image container */}
            <div className="p-6 pt-6 pb-0">
              <div className="w-full h-[160px] bg-[#8C50C8] rounded-lg"></div>
            </div>

            {/* Case study content */}
            <div className="p-6">
              <h4 className="text-white text-2xl font-montserrat mb-3">
                Recent Case Study
              </h4>
              <p className="text-white/80 font-montserrat mb-3">
                Lorem ipsum dolor sit amet consecto tur adipiscing elit semper
                dalar consectetur elementum tempus hac.
              </p>
              <a
                href="#"
                className="text-[#3EDDCA] font-montserrat hover:underline"
              >
                View case study
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
