import React, { useState, useEffect, useRef, useMemo } from "react";
import { CircleCheckBig } from "lucide-react";
import ServiceFeatureCard from "../../ui/ServiceFeatureCard";

// Component data
const componentData = {
  hero: {
    title: "The future of security is agentic",
    subtitle: "Address security concerns with speed and confidence.",
  },
  services: [
    {
      id: "asm",
      title: "Attack Surface Management",
      description:
        "Continuously discover and inventory all your internet-facing assets, including domains, subdomains, IPs, and web applications, to eliminate blind spots.",
    },
    {
      id: "pvd",
      title: "Proactive Vulnerability Discovery",
      description:
        "Automatically scan your assets for thousands of vulnerabilities, from misconfigurations to critical software flaws, before attackers can exploit them.",
    },
    {
      id: "arp",
      title: "Actionable Risk Prioritization",
      description:
        "Receive prioritized, context-rich vulnerability reports that allow your team to focus on fixing the most critical issues first, reducing your mean time to remediation.",
    },
  ],
  featureList: {
    titlePrefix: "Your Personal",
    rotatingWords: [
      "Security Analyst",
      "Cloud Security Specialist",
      "Security Administrator",
      "Risk Analyst",
      "CISO",
    ],
    features: [
      "Discovers entire external attack surface without prior knowledge.",
      "Identifies unknown assets, subdomains, and misconfigurations.",
      "Maintains continuously updated inventory of all external assets.",
      "Prioritizes vulnerabilities based on real-world risk factors.",
      "Correlates asset importance, severity, and exploitation evidence.",
      "Provides clear, actionable guidance for security focus.",
    ],
  },
};

// Types
interface FeatureListData {
  titlePrefix: string;
  rotatingWords: string[];
  features: string[];
}

// Reusable Components
const HeroSection = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className="mx-auto mb-12 max-w-4xl text-center">
    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{title}</h2>
    <p className="text-xl text-gray-500">{subtitle}</p>
  </div>
);

const FeatureList = ({ featureList }: { featureList: FeatureListData }) => {
  const [typedText, setTypedText] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Memoize the rotating words to prevent infinite re-renders
  const rotatingWords = useMemo(
    () => featureList.rotatingWords,
    [featureList.rotatingWords]
  );

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 75;
    const delayBetweenWords = 1500;
    const delayAfterDelete = 500;

    function type() {
      const currentWord = rotatingWords[wordIndex];

      if (isDeleting) {
        setTypedText(currentWord.substring(0, charIndex - 1));
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % rotatingWords.length;
          timeoutRef.current = setTimeout(type, delayAfterDelete);
          return;
        }

        timeoutRef.current = setTimeout(type, deletingSpeed);
      } else {
        setTypedText(currentWord.substring(0, charIndex + 1));
        charIndex++;

        if (charIndex === currentWord.length) {
          isDeleting = true;
          timeoutRef.current = setTimeout(type, delayBetweenWords);
          return;
        }

        timeoutRef.current = setTimeout(type, typingSpeed);
      }
    }

    timeoutRef.current = setTimeout(type, 500);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [rotatingWords]);

  return (
    <div>
      <div className="mb-6 flex items-baseline">
        <h3 className="mr-2 text-2xl font-bold text-white">
          {featureList.titlePrefix}
        </h3>
        <div className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {typedText}
          </span>
          <span className="animate-pulse text-blue-400">|</span>
        </div>
      </div>
      <ul className="space-y-3">
        {featureList.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start">
            <CircleCheckBig className="mr-3 mt-1 h-4 w-4 flex-shrink-0 text-green-400" />
            <span className="text-lg text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main Component
const SecurityAnalystSection = () => {
  return (
    <section className="relative px-6 py-40">
      <div className="absolute inset-0 bg-black"></div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="relative">
          <HeroSection
            title={componentData.hero.title}
            subtitle={componentData.hero.subtitle}
          />

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5 lg:gap-20">
            <div className="flex flex-col justify-around gap-8 lg:col-span-2">
              {componentData.services.map((service, index) => (
                <ServiceFeatureCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              ))}
            </div>
            <div className="relative lg:col-span-3">
              <div className="relative rounded-2xl border border-gray-700/30 bg-black/20 p-8 backdrop-blur-xl">
                <div className="absolute left-0 top-0 h-6 w-6 rounded-tl-2xl border-l-2 border-t-2 border-blue-500/70"></div>
                <div className="absolute right-0 top-0 h-6 w-6 rounded-tr-2xl border-r-2 border-t-2 border-purple-500/70"></div>
                <div className="absolute bottom-0 left-0 h-6 w-6 rounded-bl-2xl border-b-2 border-l-2 border-blue-500/70"></div>
                <div className="absolute bottom-0 right-0 h-6 w-6 rounded-br-2xl border-b-2 border-r-2 border-purple-500/70"></div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5"></div>

                <div className="relative z-10">
                  <FeatureList featureList={componentData.featureList} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityAnalystSection;
