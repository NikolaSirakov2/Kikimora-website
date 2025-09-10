import { useState } from "react";
import { Check } from "lucide-react";
import { ScheduleDemoModal } from "@/components/ui/ScheduleDemoModal";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

type TabType = "it-team" | "business-leaders";

export function TwoPathsSection() {
  const [activeTab, setActiveTab] = useState<TabType>("it-team");
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);

  const itTeamContent = {
    title: "The Kikimora Platform",
    description:
      "The unified vulnerability and compliance platform that makes your IT team more efficient and your business more secure.",
    features: [
      {
        title: "Stop Flying Blind",
        description:
          "Get a complete, real-time view of your entire attack surface—from cloud infrastructure to the application layer.",
      },
      {
        title: "Focus on What Matters",
        description:
          "Go beyond generic CVSS scores with our contextual Smart Score that tells your team exactly what to fix first.",
      },
      {
        title: "Simplify Compliance",
        description:
          "Automate security checks for GDPR, NIS2, and PCI DSS, with reports that make sense to auditors and management.",
      },
    ],
    ctaText: "Start Free with Community",
    videoPlaceholder: "Platform Dashboard UI",
  };

  const businessLeadersContent = {
    title: "Kikimora Managed Security",
    description:
      "Focus on your growth. Our European-based experts will manage your security 24/7, from threat detection to employee training.",
    features: [
      {
        title: "Sleep Soundly",
        description:
          "Our Security Operations Center is always watching, ready to detect and neutralize threats before they impact your business.",
      },
      {
        title: "Stay Ahead of Attackers",
        description:
          "We proactively test your defenses with annual penetration testing to find and fix weaknesses before criminals do.",
      },
      {
        title: "Build a Human Firewall",
        description:
          "We train your team to spot and avoid sophisticated phishing attacks, turning your biggest risk into your strongest defense.",
      },
    ],
    ctaText: "Get Your Custom Quote",
    videoPlaceholder: "Managed Security Concept",
  };

  const currentContent =
    activeTab === "it-team" ? itTeamContent : businessLeadersContent;

  return (
    <>
      <AnimatedBackground className="w-[99.1vw] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Two Paths to Complete Cybersecurity Confidence
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-white/80 leading-relaxed">
              Like the legendary guardian spirit, Kikimora protects your digital
              home. We believe powerful security shouldn't be complicated.
              That's why we offer two clear solutions, tailored to how you work.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab("it-team")}
                className={`text-lg font-medium px-6 py-3 rounded-lg transition-colors duration-200 border ${
                  activeTab === "it-team"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50"
                }`}
              >
                For Your IT Team
              </button>
              <button
                onClick={() => setActiveTab("business-leaders")}
                className={`text-lg font-medium px-6 py-3 rounded-lg transition-colors duration-200 border ${
                  activeTab === "business-leaders"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50"
                }`}
              >
                For Your Business Leaders
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {currentContent.title}
                </h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  {currentContent.description}
                </p>
              </div>

              <div className="space-y-6">
                {currentContent.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        {feature.title}:
                      </h3>
                      <p className="text-white/80 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="">
                <button
                  onClick={() => setIsScheduleDemoModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 border-none outline-none"
                >
                  Get Your Custom Quote
                </button>
              </div>
            </div>

            {/* Right Content - Video Placeholder */}
            <div className="relative">
              <div className="bg-gray-800 rounded-lg p-8 min-h-[400px] flex items-center justify-center border border-gray-700 relative">
                {/* Placeholder Text */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {currentContent.videoPlaceholder}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Interactive visualization will be displayed here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedBackground>

      {/* Schedule Demo Modal */}
      <ScheduleDemoModal
        isOpen={isScheduleDemoModalOpen}
        onClose={() => setIsScheduleDemoModalOpen(false)}
      />
    </>
  );
}
