import {
  Activity,
  Eye,
  FileText,
  Lock,
  Search,
  Shield,
  Target,
  Users,
} from "lucide-react";

const platformFeatures = [
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: "Unified Vulnerability Management",
    description: "See all risks in one place",
    bgColor: "bg-[#31c9b7]",
  },
  {
    icon: <Eye className="w-6 h-6 text-white" />,
    title: "Continuous Asset & Attack Surface Management",
    description: "Know what you need to protect",
    bgColor: "bg-[#31c9b7]",
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: "Automated Compliance Monitoring",
    description: "Simplify HIPAA & NIS2 audits with our Compliance Agents",
    bgColor: "bg-[#31c9b7]",
  },
  {
    icon: <Target className="w-6 h-6 text-white" />,
    title: "AI-Powered Prioritization",
    description: "Focus on the threats that matter most",
    bgColor: "bg-[#31c9b7]",
  },
];

const securityFeatures = [
  {
    icon: <Search className="w-6 h-6 text-white" />,
    title: "In-Depth Discovery & Threat Modeling",
    description: "Understand your unique risk profile from day one",
    bgColor: "bg-green-500",
  },
  {
    icon: <Lock className="w-6 h-6 text-white" />,
    title: "Penetration Testing (Web, Network, API)",
    description: "Proactively test your defenses against real-world attacks",
    bgColor: "bg-green-500",
  },
  {
    icon: <Activity className="w-6 h-6 text-white" />,
    title: "24/7 Monitoring & System Hardening",
    description: "Benefit from continuous vigilance and proactive protection",
    bgColor: "bg-green-500",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Security & Secure Code Training",
    description: "Transform your staff from weakness into human firewall",
    bgColor: "bg-green-500",
  },
];

function UnifiedDefenseSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="w-[70%] mx-auto text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Your Complete Defense: A Unified Platform Backed by Expert Guardians
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A Unified Platform, Backed by Security Experts
          </p>
        </div>

        <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kikimora.io Platform Card */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 text-center">
              The Kikimora Platform
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 text-center">
              Your Centralized Command Center
            </p>
            <div className="space-y-6">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${feature.bgColor}`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 dark:text-white">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kikimora Managed Security Card */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 text-center">
              Kikimora Managed Security
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 text-center">
              Your Dedicated Expert Team
            </p>
            <div className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${feature.bgColor}`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 dark:text-white">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { UnifiedDefenseSection };
