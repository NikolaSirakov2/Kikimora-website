import { Button } from "@/components/ui/button";
import { FloatingStatsImage } from "@/components/ui/FloatingStatsImage";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function Hero() {
  const stats = [
    {
      text: "Reduce security incidents by up to",
      value: "35%",
      valueColor: "green" as const,
      position: {
        top: "-30px",
        left: "60%",
      },
    },
    {
      text: "Cut operational costs by up to",
      value: "70%",
      valueColor: "red" as const,
      position: {
        top: "65%",
        left: "-10px",
        translate: "-50%",
      },
    },
    {
      text: "Complete compliance tasks",
      value: "40% quicker",
      valueColor: "green" as const,
      position: {
        bottom: "-40px",
        left: "50%",
        translate: "-50%",
      },
    },
    {
      text: "Reduction of 'Critical' Vulnerabilities",
      value: "99%",
      valueColor: "red" as const,
      position: {
        top: "46.67%",
        right: "-120px",
        translate: "-50%",
      },
    },
  ];

  return (
    <AnimatedBackground className="w-[99.1vw]">
      <div className="max-w-[1500px] mx-auto py-20 pt-48">
        <section className="h-3/5 relative z-10">
          <div className="h-3/4 flex items-center">
            {/* Left side - Content */}
            <div className="flex flex-col gap-6 w-1/2 pl-[10%] mt-10">
              <h1 className="text-5xl text-white font-orbitron font-semibold leading-tight">
                Elevating your security posture
              </h1>
              <p className="text-white/80 text-lg font-montserrat">
                Integrate, prioritize, and build efficient vulnerability
                management teams with AI-powered insights and user-friendly
                control
              </p>
              <div className="flex gap-4 mt-4">
                <Button className="bg-primary text-white hover:bg-primary/90 rounded-lg px-8 py-6 font-montserrat">
                  Learn More
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-6 border border-[#3b82f6] rounded-full py-2 px-4 w-fit">
                <span className="text-[#3b82f6]">⚡</span>
                <span className="text-white/60 text-sm font-montserrat">
                  Discover Kikimora for software developers
                </span>
                <span className="text-[#3b82f6] ml-2 cursor-pointer hover:underline font-montserrat">
                  Explore →
                </span>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="w-1/2 flex justify-center mt-10">
              <FloatingStatsImage
                imageSrc="/menu3.jfif"
                imageAlt="Kikimora Security"
                stats={stats}
              />
            </div>
          </div>
        </section>
      </div>
    </AnimatedBackground>
  );
}
