import { useState } from "react";
import { FaUsers, FaDesktop, FaShieldAlt } from "react-icons/fa";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

interface SectionData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  heading: string;
  description: string;
  buttonText: string;
  buttonAction: () => void;
}

export function InteractiveApproachSection() {
  const [activeSection, setActiveSection] = useState("community");

  const sections: SectionData[] = [
    {
      id: "community",
      title: "Kikimora Community",
      subtitle: "Your Starting Point",
      icon: <FaUsers className="w-5 h-5" />,
      heading: "Learn. Connect. Secure.",
      description:
        "For startups and developers, our community offers free access to essential tools, expert-led resources, and a network of peers to build a strong security foundation from day one.",
      buttonText: "Join Our Community",
      buttonAction: () => window.open("/try-kikimora", "_blank"),
    },
    {
      id: "platform",
      title: "Kikimora Platform",
      subtitle: "Your Command Center",
      icon: <FaDesktop className="w-5 h-5" />,
      heading: "Empower. Automate. Control.",
      description:
        "As you grow, our AI-driven platform provides a unified view of your security posture. With powerful automation and deep integration capabilities, we empower your in-house team to manage threats efficiently and effectively.",
      buttonText: "Explore the Platform",
      buttonAction: () => window.open("/developers", "_blank"),
    },
    {
      id: "managed",
      title: "Kikimora Managed Security",
      subtitle: "Your Expert Team",
      icon: <FaShieldAlt className="w-5 h-5" />,
      heading: "Defend. Respond. Evolve.",
      description:
        "For businesses requiring comprehensive protection, our managed security service acts as an extension of your team. We provide 24/7 monitoring, incident response, and strategic guidance to handle complex challenges and ensure compliance.",
      buttonText: "Schedule a Strategic Briefing",
      buttonAction: () => window.open("/contact", "_blank"),
    },
  ];

  const activeSectionData = sections.find(
    (section) => section.id === activeSection
  );

  return (
    <AnimatedBackground className="w-[99.1vw] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Approach: A Continuous Path to Cyber Resilience
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We've built a unique security ecosystem designed to provide the
            right level of support at every stage of your business journey. This
            ensures your protection is always aligned with your needs and
            resources, preventing you from being over-burdened or
            under-protected.
          </p>
        </div>

        {/* Interactive Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                    activeSection === section.id
                      ? "bg-gray-800 border-l-4 border-blue-500"
                      : "bg-gray-900 hover:bg-gray-800"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {section.title}
                  </h3>
                  <p className="text-sm text-gray-400">{section.subtitle}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg p-8 h-[300px] flex flex-col">
              {activeSectionData && (
                <>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {activeSectionData.heading}
                    </h3>
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                      {activeSectionData.icon}
                    </div>
                  </div>

                  <div className="relative mb-8">
                    <p className="text-gray-300 text-lg leading-relaxed pr-16">
                      {activeSectionData.description}
                    </p>
                  </div>

                  <button
                    onClick={activeSectionData.buttonAction}
                    className="bg-blue-500 hover:blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 mt-auto"
                  >
                    {activeSectionData.buttonText}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
