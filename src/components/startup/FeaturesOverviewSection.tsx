import {
  ShieldCheck,
  Radar,
  FileText,
  Users,
  LayoutDashboard,
  Brain,
} from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const FEATURES = [
  {
    icon: (
      <LayoutDashboard
        className="text-blue-600"
        size={32}
        aria-hidden="true"
      />
    ),
    title: "Unified Dashboard",
    description:
      "Identify and manage assets within your organisation via a clear overview of your security posture.",
  },
  {
    icon: (
      <ShieldCheck className="text-blue-600" size={32} aria-hidden="true" />
    ),
    title: "Integrated Scanning",
    description:
      "Integrated access to the most popular scanning and monitoring tools.",
  },
  {
    icon: <FileText className="text-blue-600" size={32} aria-hidden="true" />,
    title: "Vulnerabilities Overview",
    description:
      "A comprehensive summary of all recorded vulnerabilities and remediation timelines.",
  },
  {
    icon: <Users className="text-blue-600" size={32} aria-hidden="true" />,
    title: "Project Management",
    description: "Track, manage and report cross-team collaboration with Jira.",
  },
  {
    icon: <Radar className="text-blue-600" size={32} aria-hidden="true" />,
    title: "Compliance Checklists",
    description:
      "Use a variety of frameworks for security compliance checks and monitoring.",
  },
  {
    icon: <Brain className="text-blue-600" size={32} aria-hidden="true" />,
    title: "AI Tools",
    description:
      "Designed to analyze local vulnerability data, providing advanced classification and actionable recommendations.",
  },
];

const INTEGRATIONS = [
  "Qualys",
  "BurpSuite",
  "Jira",
  "RAPID7",
  "Nessus",
  "Wazuh",
];

function FeaturesOverviewSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col items-center py-20 px-2">
      <h2 className="text-4xl md:text-5xl text-center mb-2 text-white">
        Platform Features Overview
      </h2>
      <p className="text-lg md:text-xl text-center text-white/80 mb-12 max-w-2xl mx-auto font-montserrat">
        Kikimora offers an essential blend of interconnected features and
        integrations to help with your vulnerability management and regulatory
        compliance efforts.
      </p>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {FEATURES.map((feature, i) => (
          <div
            key={feature.title}
            className="bg-[#fafcff] rounded-xl shadow-sm p-6 flex flex-col gap-2 items-start min-h-[160px]"
            role="region"
            aria-labelledby={`feature-title-${i}`}
          >
            <span className="mb-2" aria-hidden="true">
              {feature.icon}
            </span>
            <h3
              id={`feature-title-${i}`}
              className="font-bold text-lg mb-1 text-gray-900 font-montserrat"
            >
              {feature.title}
            </h3>
            <p className="text-gray-600 text-base font-montserrat">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full max-w-7xl bg-blue-50 rounded-2xl py-10 px-4 flex flex-col items-center">
        <h3 className="text-2xl font-bold text-center mb-8 text-white font-montserrat">
          Integrations
        </h3>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {INTEGRATIONS.map((name) => (
            <div
              key={name}
              className="bg-white rounded-lg shadow-sm px-10 py-5 min-w-[190px] text-center font-semibold text-gray-800 text-base font-montserrat"
              tabIndex={0}
              aria-label={name}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </AnimatedBackground>
  );
}

export { FeaturesOverviewSection };
