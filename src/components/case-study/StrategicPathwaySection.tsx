import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

function StrategicPathwaySection() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Scoping",
      description:
        "We begin with a deep analysis of your business logic, data flows, and specific regulatory obligations.",
    },
    {
      number: "02",
      title: "Attack Surface Management",
      description:
        "We build a comprehensive inventory of your digital assets and continuously monitor your external footprint for exposed services, data leaks, and undocumented APIs.",
    },
    {
      number: "03",
      title: "Comprehensive Security Assessment",
      description:
        "We combine continuous, automated vulnerability scanning with expert-led penetration testing to identify weaknesses across your infrastructure, applications, and cloud environments.",
    },
    {
      number: "04",
      title: "System Hardening & Remediation",
      description:
        "We assist in implementing defensive mechanisms, hardening critical systems, and utilizing our unified platform to track and manage vulnerability remediation efficiently.",
    },
    {
      number: "05",
      title: "Team Empowerment & Training",
      description:
        "We strengthen your human defenses with realistic phishing simulations and targeted security training for all personnel, from executive leadership to development teams.",
    },
  ];

  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col items-center py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        Our Strategic Pathway to Resilience
      </h1>
      <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto p-8 items-center">
        {steps.map((step) => (
          <div key={step.number} className="flex items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 border border-white flex items-center justify-center text-white text-2xl font-bold">
                {step.number}
              </div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-white mb-1">
                {step.title}
              </div>
              <div className="text-base md:text-lg text-white/80 max-w-2xl">
                {step.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedBackground>
  );
}

export { StrategicPathwaySection };
