import React from "react";
import { MdSecurity } from "react-icons/md";
import { MdBalance } from "react-icons/md";
import { MdTrendingUp } from "react-icons/md";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

interface ChallengeCardProps {
  icon: string;
  title: string;
  description: string;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex flex-col items-start text-left p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out h-[500px]">
    <div
      className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${icon === "shield" ? "bg-red-100" : icon === "scale" ? "bg-yellow-100" : "bg-blue-100"}`}
    >
      {icon === "shield" && <MdSecurity className="h-8 w-8 text-red-500" />}
      {icon === "scale" && <MdBalance className="h-8 w-8 text-yellow-500" />}
      {icon === "graph" && <MdTrendingUp className="h-8 w-8 text-blue-500" />}
    </div>
    <h3 className="text-xl font-bold mb-4 w-full">{title}</h3>
    <p className="text-gray-600 leading-relaxed w-full">{description}</p>
  </div>
);

export function FintechIntroSection() {
  const challenges = [
    {
      icon: "shield",
      title: "Sophisticated Attack Vectors",
      description:
        "The threat landscape has fundamentally shifted. Your organization faces AI-powered phishing, advanced ransomware designed to exfiltrate data, and persistent attacks against the APIs that power your services. Digital innovation makes you a prime target.",
    },
    {
      icon: "scale",
      title: "Intensive Regulatory Scrutiny",
      description:
        "Navigating the dense web of regulations is a significant operational burden. Mandates like DORA, NIS2, GDPR, and PCI DSS demand constant vigilance, rigorous testing, and demonstrable proof, with severe penalties for non-compliance.",
    },
    {
      icon: "graph",
      title: "Specialized Talent Scarcity",
      description:
        "The cybersecurity talent gap is a major business risk. Acquiring and retaining the expert team needed to manage enterprise-grade threats and complex compliance mandates is a challenge that can impede growth and increase exposure.",
    },
  ];

  return (
    <AnimatedBackground className="w-[99.1vw] py-20 px-4">
      <div className="container w-[1300px] mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 text-white">
          The Modern Financial Landscape: A Dual Challenge of Innovation and Risk
        </h1>
      <div className="grid md:grid-cols-3 gap-12">
        {challenges.map((challenge, index) => (
          <ChallengeCard
            key={index}
            icon={challenge.icon}
            title={challenge.title}
            description={challenge.description}
          />
        ))}
      </div>
      </div>
    </AnimatedBackground>
  );
}
