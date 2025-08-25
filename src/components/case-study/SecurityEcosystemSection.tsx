import { useState } from "react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

interface TabContentProps {
  isActive: boolean;
  title: string;
  description: string;
}

const TabContent: React.FC<TabContentProps> = ({ isActive, description }) => {
  if (!isActive) return null;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <p className="text-gray-700 mb-6 text-center shadow-md rounded-lg p-4 bg-white">
        {description}
      </p>
    </div>
  );
};

export function SecurityEcosystemSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Achieve Continuous Compliance",
      label: "Secure Your Code, Secure Your Business",
      description:
        "Embed security directly into your development lifecycle. Our SAST/DAST testing identifies flaws before they reach production. Native Jira integration delivers actionable tickets directly to developers, while our Secure Code Training empowers your team to prevent vulnerabilities at the source.",
    },
    {
      title: "Proactive Vulnerability Management",
      label: "Stay Ahead of Threats",
      description:
        "Move beyond basic scanning with unified threat intelligence. Our platform consolidates data into a single dashboard, while the Kikimora Smart Score applies business context to prioritize the risks that truly matter. Our expert team proactively identifies vulnerabilities across your entire attack surface.",
    },
    {
      title: "Expert-Led Defense",
      label: "24/7 Security Operations",
      description:
        "Gain on-demand access to a world-class security team. Our Managed Security service functions as an extension of your own, handling everything from in-depth penetration testing and attack surface management to 24/7 monitoring and incident response.",
    },
    {
      title: "Secure Your Code, Secure Your Business",
      label: "Secure Your Code, Secure Your Business",
      description:
        "Embed security directly into your development lifecycle. Our SAST/DAST testing identifies flaws before they reach production. Native Jira integration delivers actionable tickets directly to developers, while our Secure Code Training empowers your team to prevent vulnerabilities at the source.",
    },
  ];

  return (
    <AnimatedBackground className="w-[99.1vw] py-16">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-white">
          A Unified Security and Compliance Ecosystem
        </h1>

        <div className="flex justify-center mb-8">
          <div className="flex flex-nowrap items-center justify-center max-w-5xl w-full">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-2 text-sm transition-colors duration-200 outline-none focus:outline-none focus:ring-0
                  border-solid
                  ${
                    activeTab === index
                      ? "text-[#31c9b7] bg-white border-2 border-[#31c9b7] z-10"
                      : "text-white bg-white/10 border border-white/20 hover:bg-white/20"
                  }
                  ${index === 0 ? "rounded-l-xl" : ""}
                  ${index === tabs.length - 1 ? "rounded-r-xl" : ""}
                  ${index !== tabs.length - 1 ? "-mr-px" : ""}
                  w-1/4 min-w-[180px] h-16`}
                style={{
                  marginRight: index !== tabs.length - 1 ? "-1px" : undefined,
                }}
              >
                <span className="block w-full line-clamp-2 leading-snug text-center">
                  {tab.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {tabs.map((tab, index) => (
          <TabContent
            key={index}
            isActive={activeTab === index}
            title={tab.label}
            description={tab.description}
          />
        ))}
      </div>
    </section>
  );
}
