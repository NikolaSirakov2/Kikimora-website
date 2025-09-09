import { ShieldCheck, Radar, Lock, Users, Eye } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

interface SecurityFeatureProps {
  title: string;
  description: string;
  icon: JSX.Element;
  bullets?: string[];
}

function SecurityFeature({
  title,
  description,
  icon,
  bullets,
}: SecurityFeatureProps) {
  return (
    <div
      className="bg-white rounded-xl p-10 flex flex-col items-center shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md w-full max-w-[360px] mx-auto relative justify-between"
      style={{ minHeight: 340 }}
    >
      <div className="flex flex-col items-center flex-grow">
        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 mb-6">
          {icon}
        </span>
        <h3 className="text-xl font-bold mb-2 text-[#111827] font-montserrat">
          {title}
        </h3>
        <p className="text-[#374151] text-base font-montserrat mb-3">
          {description}
        </p>
      </div>
      {bullets && (
        <ul
          className="list-disc pl-5 space-y-1 text-[#374151] text-sm mt-auto w-full text-left flex flex-col items-start justify-end"
        >
          {bullets.map((b, i) => (
            <li key={i} className="text-[#374151]">
              <span className="text-[#374151]">
                {b}
              </span>
            </li>
          ))}
        </ul>
      )}
      <style>{`
        .list-disc > li::marker {
          color: #2563eb;
        }
      `}</style>
    </div>
  );
}

export function SecurityFeatures() {
  const features = [
    {
      title: "Discovery Phase",
      description:
        "Starting with Kikimora is easy! The beginning is all about gaining a deep understanding of your organization's current security posture and the environment it operates in.",
      icon: <SearchIcon size={36} strokeWidth={2.2} color="#fff" />,
      bullets: [
        "Review of data ownership, access and storage",
        "Analysis of proprietary and customer data",
        "Identification of potential attack vectors",
        "Threat modelling updates after significant changes",
      ],
    },
    {
      title: "Attack Surface Management",
      description:
        "Kikimora provides an integrated attack surface management module, which is particularly important for identifying, monitoring, analyzing, and reducing potential vulnerabilities.",
      icon: <ShieldCheck size={36} strokeWidth={2.2} color="#fff" />,
      bullets: [
        "Monitoring exposed services and ports",
        "SSL/TLS certificate issue tracking",
        "Subdomain discovery and management",
        "Data leakage identification",
      ],
    },
    {
      title: "Cybersecurity Assessment",
      description:
        "Comprehensive security evaluation including asset inventory, vulnerability scanning, and system hardening to maintain a robust security posture.",
      icon: <Radar size={36} strokeWidth={2.2} color="#fff" />,
      bullets: [
        "Asset inventory (initial + continuous)",
        "Agent-based vulnerability scanning",
        "Infrastructure and cloud scanning",
        "System hardening and policy compliance",
      ],
    },
    {
      title: "Penetration Testing",
      description:
        "Regular penetration testing plays a critical role in ensuring the effectiveness of your app's security controls through comprehensive testing methodologies.",
      icon: <Lock size={36} strokeWidth={2.2} color="#fff" />,
      bullets: [
        "Web Application Pen Testing (Annual)",
        "API Pen Testing (Annual)",
        "Internal/External Network Testing",
        "WiFi Penetration Testing",
      ],
    },
    {
      title: "Security Training",
      description:
        "Proactive cybersecurity training is a core component of a successful defensive strategy, preparing your teams for various attack vectors.",
      icon: <Users size={36} strokeWidth={2.2} color="#fff" />,
      bullets: [
        "Cybersecurity awareness training",
        "Social engineering simulations",
        "Secure code practices training",
        "Phishing campaign simulations",
      ],
    },
    {
      title: "24/7 Monitoring & Response",
      description:
        "Gain access to real-time data and monitoring capabilities for your whole organization. Detect and address vulnerabilities proactively and effectively.",
      icon: <Eye size={36} strokeWidth={2.2} color="#fff" />,
      bullets: [
        "Continuous security monitoring",
        "Real-time threat detection",
        "Incident response planning",
        "Compliance reporting and management",
      ],
    },
  ];

  return (
    <AnimatedBackground className="w-[99.1vw] py-28 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-5xl font-bold text-white text-center mb-6 leading-tight">
          Our Managed Security Services
        </h2>
        <p className="text-lg text-white/80 text-center max-w-4xl mb-16">
          Comprehensive cybersecurity solutions that protect your business from
          evolving threats while ensuring compliance and operational excellence
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full justify-center">
          {features.slice(0, 3).map((feature, index) => (
            <div className="flex justify-center" key={index}>
              <SecurityFeature
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                bullets={feature.bullets}
              />
            </div>
          ))}
        </div>
        <div className="h-6" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full justify-center">
          {features.slice(3).map((feature, index) => (
            <div className="flex justify-center" key={index}>
              <SecurityFeature
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                bullets={feature.bullets}
              />
            </div>
          ))}
        </div>
      </div>
    </AnimatedBackground>
  );
}

// Custom Search icon for Discovery Phase
function SearchIcon({ size = 36, strokeWidth = 2.2, color = "#fff" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
