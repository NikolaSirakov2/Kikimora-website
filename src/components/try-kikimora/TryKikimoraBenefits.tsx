import {
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  ArrowPathIcon,
  BoltIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const BENEFITS = [
  {
    icon: <ShieldCheckIcon className="w-8 h-8 text-[#23b098]" />,
    title: "Protection Against Cyber Threats",
    description:
      "Don't make the mistake of thinking your business is too small to be a target. In fact, over 43% of cyberattacks are aimed at small businesses. A vulnerability management tool helps you proactively identify and fix security weaknesses in your systems before they can be exploited by cybercriminals.",
  },
  {
    icon: <ClipboardDocumentCheckIcon className="w-8 h-8 text-[#23b098]" />,
    title: "Ensure Regulatory Compliance",
    description:
      "Many industries have strict data protection regulations (like GDPR, HIPAA, or PCI-DSS). A vulnerability management tool helps you stay compliant with these standards by identifying and addressing vulnerabilities that could lead to non-compliance and hefty fines.",
  },
  {
    icon: <ArrowPathIcon className="w-8 h-8 text-[#23b098]" />,
    title: "Maintain Business Continuity",
    description:
      "A single cyberattack can bring your business to a halt, leading to significant financial losses and damage to your reputation. By proactively managing vulnerabilities, you can prevent disruptions and ensure your business operations continue to run smoothly.",
  },
  {
    icon: <BoltIcon className="w-8 h-8 text-blue-700" />,
    title: "Gain a Competitive Advantage",
    description:
      "Demonstrating a commitment to cybersecurity can be a powerful differentiator. It builds trust with your customers and partners, who are increasingly concerned about the security of their data.",
  },
  {
    icon: <CurrencyDollarIcon className="w-8 h-8 text-blue-700" />,
    title: "Cost-Effectiveness",
    description:
      "The cost of a data breach can be devastating for a small business. Proactively managing vulnerabilities is far more cost-effective than dealing with the aftermath of a successful cyberattack. A free trial allows you to experience the benefits without any initial financial commitment.",
  },
  {
    icon: <ChartBarIcon className="w-8 h-8 text-blue-700" />,
    title: "Proactive vs. Reactive Security",
    description:
      "Many businesses only address security issues after they've been attacked. This is a risky and expensive approach. Vulnerability management allows you to be proactive, identifying and fixing security holes before they can be used against you.",
  },
];

export default function TryKikimoraBenefits() {
  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col items-center py-20 px-2">
      <h1 className="text-3xl md:text-3xl   text-center mb-3 text-white">
        Benefits of a Vulnerability Management Tool for SMEs
      </h1>
      <p className="text-white/80 text-center max-w-2xl mb-12 font-montserrat">
        For a small or medium-sized enterprise, the prospect of managing
        cybersecurity can be daunting. However, with the right tools, you can
        significantly enhance your security posture. A vulnerability management
        tool, especially one with a free trial, offers numerous benefits:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {BENEFITS.slice(0, 3).map((benefit) => (
          <div
            key={benefit.title}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 flex flex-col items-start text-left min-h-[260px] max-w-[400px] mx-auto"
          >
            <div className="mb-4">{benefit.icon}</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900 font-montserrat">
              {benefit.title}
            </h3>
            <p className="text-gray-600 text-sm font-montserrat">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
      <div className="h-6" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {BENEFITS.slice(3).map((benefit) => (
          <div
            key={benefit.title}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 flex flex-col items-start text-left min-h-[260px] max-w-[400px] mx-auto"
          >
            <div className="mb-4">{benefit.icon}</div>
            <h3 className="font-bold text-lg mb-2 text-gray-900 font-montserrat">
              {benefit.title}
            </h3>
            <p className="text-gray-600 text-sm font-montserrat">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </AnimatedBackground>
  );
}
