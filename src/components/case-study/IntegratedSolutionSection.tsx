import {
  FiShield,
  FiEye,
  FiKey,
  FiCloud,
  FiMonitor,
  FiHome,
  FiTarget,
  FiUsers,
  FiDatabase,
} from "react-icons/fi";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <div className="flex flex-col space-y-4">
        <div className="text-teal-400 text-2xl">{icon}</div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export function IntegratedSolutionSection() {
  const features = [
    {
      icon: <FiShield />,
      title: "Comprehensive Vulnerability Scanning",
      description:
        "End-to-end scanning across your Application, Network, OS, and Cloud Infrastructure to identify weaknesses before they are exploited.",
    },
    {
      icon: <FiEye />,
      title: "Attack Surface Management",
      description:
        "Continuous monitoring of your attack surface, including critical service exposure, domain issues, and data leakage identification.",
    },
    {
      icon: <FiKey />,
      title: "Penetration Testing & API Security",
      description:
        "In-depth penetration testing for Applications and APIs, combined with SAST/DAST methodologies to secure your code.",
    },
    {
      icon: <FiCloud />,
      title: "System & Cloud Hardening",
      description:
        "Hardening for Windows, Linux, and Kubernetes systems, plus policy compliance for your cloud infrastructure.",
    },
    {
      icon: <FiMonitor />,
      title: "Darknet Intelligence",
      description:
        "Monitoring darknet channels to identify threats and compromised credentials specific to your organization.",
    },
    {
      icon: <FiHome />,
      title: "Threat Modelling & Governance",
      description:
        "Business logic analysis, threat modelling, and firewall rule analysis to ensure robust security governance.",
    },
    {
      icon: <FiTarget />,
      title: "Continuous Endpoint Monitoring",
      description:
        "Agent-based continuous scanning, file change monitoring, and identification of unapproved software.",
    },
    {
      icon: <FiUsers />,
      title: "Human Layer Security",
      description:
        "Phishing campaigns, secure code training for developers, and security awareness programs for all employees.",
    },
    {
      icon: <FiDatabase />,
      title: "Complete Asset Inventory",
      description:
        "Discover and maintain a complete inventory of all your digital assets to ensure nothing is left unprotected.",
    },
  ];

  return (
    <AnimatedBackground className="w-[99.1vw] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Beyond Compliance: Kikimora's Integrated Solution
          </h2>
          <h3 className="text-xl text-teal-400 mb-6">
            Your Pathway to Unmatched Fintech Resilience
          </h3>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Kikimora's layered response—Managed SOC, Security Platform, and
            Knowledge Community—work in concert to deliver operational
            resilience, continuous assurance, and shared intelligence at
            enterprise scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto border border-gray-700 rounded-lg p-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </AnimatedBackground>
  );
}
