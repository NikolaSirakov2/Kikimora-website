import { Button } from "@/components/ui/button";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { FloatingStatsImage } from "@/components/ui/FloatingStatsImage";

export function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

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
    <div className="bg-[#001E38] relative w-[99.1vw]">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#3EDDCA",
            },
            shape: {
              type: "image",
              image: {
                src: "/logos/color_and_black.svg",
                width: 20,
                height: 20,
              },
            },
            opacity: {
              value: 0.5,
              random: true,
            },
            size: {
              value: 10,
              random: true,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
            },
            links: {
              enable: false,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: false,
                mode: "grab",
              },
              onClick: {
                enable: false,
                mode: "push",
              },
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 4,
              },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />
      <div className="max-w-[1500px] mx-auto py-20">
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
                <Button className="bg-[#3EDDCA] text-black hover:bg-[#3EDDCA]/90 rounded-lg px-8 py-6 font-montserrat">
                  Learn More
                </Button>
              </div>
              <div className="flex items-center gap-2 mt-6 border border-[#3EDDCA] rounded-full py-2 px-4 w-fit">
                <span className="text-[#3EDDCA]">⚡</span>
                <span className="text-white/60 text-sm font-montserrat">
                  Discover Kikimora for software developers
                </span>
                <span className="text-[#3EDDCA] ml-2 cursor-pointer hover:underline font-montserrat">
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
    </div>
  );
}
