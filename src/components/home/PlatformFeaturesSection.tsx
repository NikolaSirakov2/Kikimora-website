import {
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  UsersIcon,
  CheckBadgeIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const FEATURES = [
  {
    icon: ShieldCheckIcon,
    title: "Unified Dashboard",
    description:
      "Identify and manage assets within your organisation via a clear overview of your security posture.",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Integrated Scanning",
    description:
      "Integrated access to the most popular scanning and monitoring tools.",
  },
  {
    icon: ChartBarIcon,
    title: "Vulnerabilities Overview",
    description:
      "A comprehensive summary of all recorded vulnerabilities and remediation timelines.",
  },
  {
    icon: UsersIcon,
    title: "Project Management",
    description: "Track, manage and report cross-team collaboration with Jira.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Compliance Checklists",
    description:
      "Use a variety of frameworks for security compliance checks and monitoring.",
  },
  {
    icon: CpuChipIcon,
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

function PlatformFeaturesSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col items-center py-24 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
        Platform Features Overview
      </h2>
      <p className="text-lg text-white/80 font-montserrat text-center max-w-2xl mb-12">
        Kikimora offers an essential blend of interconnected features and
        integrations to help with your vulnerability management and regulatory
        compliance efforts.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-16">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="bg-white rounded-xl p-10 flex flex-col items-center shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md"
          >
            <Icon
              className="w-14 h-14 text-[#31c9b7] mb-6"
              aria-hidden="true"
            />
            <h3 className="text-xl font-bold mb-2 text-[#111827] font-montserrat">
              {title}
            </h3>
            <p className="text-[#374151] text-base font-montserrat">
              {description}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full max-w-6xl bg-green-50 rounded-2xl py-10 px-4 flex flex-col items-center">
        <h3 className="text-2xl font-bold text-white mb-6">Integrations</h3>
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {INTEGRATIONS.map((name) => (
            <div
              key={name}
              className="bg-white rounded-lg shadow px-10 py-4 font-montserrat text-lg font-semibold text-[#222] min-w-[160px] text-center"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </AnimatedBackground>
  );
}

export { PlatformFeaturesSection };
