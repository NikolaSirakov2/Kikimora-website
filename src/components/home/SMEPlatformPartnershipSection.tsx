import {
  EyeIcon,
  BoltIcon,
  CheckCircleIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const PLATFORM_FEATURES: Feature[] = [
  {
    icon: EyeIcon,
    title: "Unified Dashboard",
    description:
      "See all your assets, vulnerabilities, and compliance data in one simple, clear interface.",
  },
  {
    icon: BoltIcon,
    title: "AI Assistant",
    description:
      "Get instant answers to security questions and remediation advice from your 24/7 virtual security analyst.",
  },
  {
    icon: CheckCircleIcon,
    title: "Compliance Center",
    description:
      "Turn complex EU regulations into a simple, manageable checklist and generate audit-ready reports.",
  },
  {
    icon: Cog6ToothIcon,
    title: "Automated Workflows",
    description:
      "Fix issues up to 10x faster by automatically turning vulnerabilities into development tasks with our seamless Jira integration.",
  },
];

const EXPERT_FEATURES: Feature[] = [
  {
    icon: ShieldCheckIcon,
    title: "Managed Security",
    description:
      "Let our experts handle 24/7 monitoring, threat management, and security operations for you.",
  },
  {
    icon: UserGroupIcon,
    title: "Penetration Testing",
    description:
      "We find your security weaknesses before hackers do, with annual tests conducted by our elite team.",
  },
  {
    icon: AcademicCapIcon,
    title: "Security Training",
    description:
      "We turn your employees into your strongest line of defense with engaging training on phishing, social engineering, and cyber hygiene.",
  },
];

function SMEPlatformPartnershipSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col items-center py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
        The Smarter Way to Secure Your SME: Platform + Partnership
      </h2>
      <p className="text-lg md:text-xl text-center mb-10 font-montserrat text-white/80 max-w-4xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl mb-16">
        {PLATFORM_FEATURES.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="bg-white rounded-xl p-10 flex flex-col items-center shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md"
          >
            <div className="bg-[#f5f8ff] rounded-full p-4 mb-4 flex items-center justify-center">
              <Icon className="w-12 h-12 text-[#31c9b7]" aria-hidden="true" />
            </div>
            <h4 className="text-xl font-bold mb-2 text-[#111827] font-montserrat">
              {title}
            </h4>
            <p className="text-[#374151] text-base font-montserrat">
              {description}
            </p>
          </div>
        ))}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">
        The Experts - Your On-Demand Security Team
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mb-12">
        {EXPERT_FEATURES.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="bg-white rounded-xl p-10 flex flex-col items-center shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md"
          >
            <Icon
              className="w-14 h-14 text-[#31c9b7] mb-6"
              aria-hidden="true"
            />
            <h4 className="text-xl font-bold mb-2 text-[#111827] font-montserrat">
              {title}
            </h4>
            <p className="text-[#374151] text-base font-montserrat">
              {description}
            </p>
          </div>
        ))}
      </div>
      <Button
        className="bg-[#31c9b7] text-white hover:bg-[#2bb3a3] px-8 py-4 rounded-lg font-montserrat text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#31c9b7] mt-4"
        onClick={() => window.open("#platform-services", "_self")}
        aria-label="Explore Our Platform & Services"
      >
        Explore Our Platform & Services
      </Button>
    </AnimatedBackground>
  );
}

export { SMEPlatformPartnershipSection };
