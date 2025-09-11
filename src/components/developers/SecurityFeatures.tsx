import {
  FiShield,
  FiDatabase,
  FiCloud,
  FiZap,
  FiUsers,
  FiCheckCircle,
} from "react-icons/fi";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const features = [
  {
    icon: <FiShield size={32} color="#3b82f6" aria-hidden="true" />,
    title: "Powerful threat detection",
    description: "Advanced algorithms to detect and prevent security threats",
  },
  {
    icon: <FiDatabase size={32} color="#3b82f6" aria-hidden="true" />,
    title: "Secure data handling",
    description: "Enterprise-grade security for your sensitive data",
  },
  {
    icon: <FiCloud size={32} color="#3b82f6" aria-hidden="true" />,
    title: "Comprehensive threat reports",
    description: "Detailed insights and analytics on security events",
  },
  {
    icon: <FiZap size={32} color="#3b82f6" aria-hidden="true" />,
    title: "Real-time monitoring",
    description: "24/7 continuous monitoring and instant alerts",
  },
  {
    icon: <FiUsers size={32} color="#3b82f6" aria-hidden="true" />,
    title: "Multi-user support",
    description: "Team collaboration and role-based access control",
  },
  {
    icon: <FiCheckCircle size={32} color="#3b82f6" aria-hidden="true" />,
    title: "Compliance automation",
    description: "Automated compliance reporting and documentation",
  },
];

export function SecurityFeatures() {
  return (
    <AnimatedBackground className="w-[99.1vw] pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white   font-bold mb-4">
            Enhance security, stay compliant
          </h2>
          <p className="text-white/60 text-lg font-montserrat">
            Powerful features designed for developers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="bg-[#1B2342]/80 rounded-xl p-8 flex flex-col items-start shadow-lg min-h-[180px]"
              role="region"
              aria-labelledby={`feature-title-${idx}`}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3
                id={`feature-title-${idx}`}
                className="text-white text-xl font-semibold mb-2 font-montserrat"
              >
                {feature.title}
              </h3>
              <p className="text-white/70 font-montserrat text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedBackground>
  );
}
