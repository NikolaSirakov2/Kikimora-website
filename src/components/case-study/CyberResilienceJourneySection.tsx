import React from "react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const journeySteps = [
  {
    title: "Discover & Assess",
    description:
      "We begin with a deep dive into your unique environment, assets, data flows, and threat landscape to establish a comprehensive security baseline.",
  },
  {
    title: "Unify & Prioritize",
    description:
      "We deploy the Kikimora.io platform to centralize your security data, continuously manage your attack surface, and use AI-driven analysis to prioritize the most critical risks.",
  },
  {
    title: "Harden & Defend",
    description:
      "Our expert team implements proactive defenses, including system hardening, 24/7 monitoring, and rigorous penetration testing to strengthen your security posture.",
  },
  {
    title: "Train & Govern",
    description:
      "We empower your staff through targeted security training and provide ongoing governance and strategic advisory to ensure continuous improvement, maturity, and compliance.",
  },
];

export const CyberResilienceJourneySection: React.FC = () => {
  return (
    <AnimatedBackground className="w-[99.1vw] py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Your Journey to Cyber Resilience in Four Steps
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            A clear, structured, and manageable journey to healthcare
            cybersecurity excellence.
          </p>
        </div>

        <div className="max-w-6xl mx-auto rounded-2xl">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

              {/* Timeline items */}
              {journeySteps.map((step, index) => (
                <div key={index} className="relative mb-12 last:mb-0">
                  <div className="flex items-center">
                    {/* Left side - Title */}
                    <div className="w-1/2 pr-8 text-right">
                      <h3 className="text-3xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>

                    {/* Center - Circle */}
                    <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full border-8 border-blue-500 shadow-lg relative z-10"></div>

                    {/* Right side - Description */}
                    <div className="w-1/2 pl-8">
                      <p className="text-base text-white/80 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
};
