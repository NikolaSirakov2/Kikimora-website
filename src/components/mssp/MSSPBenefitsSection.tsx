import {
  RiDatabase2Line,
  RiSettings3Line,
  RiFileTextLine,
  RiAddLine,
  RiBarChartLine,
  RiMoneyDollarCircleLine,
  RiCustomerService2Line,
} from "react-icons/ri";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function MSSPBenefitsSection() {
  const benefits = [
    {
      icon: <RiDatabase2Line className="w-8 h-8 text-blue-600" />,
      title: "Centralized Multi-Client Management",
      description:
        "Manage vulnerabilities, weaknesses, and security misconfigurations for all your clients from a single, unified dashboard. Kikimora consolidates vulnerability data across multiple clients, providing a clear overview of each client's security posture without switching between tools.",
    },
    {
      icon: <RiSettings3Line className="w-8 h-8 text-blue-600" />,
      title: "Enhanced Efficiency and Automation",
      description:
        "Save time and reduce manual errors by automating key processes. The platform's advanced data analysis eliminates the need for time-consuming manual review of findings. With Jira integration, you can track, manage, and report on cross-team collaboration, automatically creating and closing remediation tasks.",
    },
    {
      icon: <RiFileTextLine className="w-8 h-8 text-blue-600" />,
      title: "Superior Reporting and Compliance",
      description:
        "Deliver exceptional value to your clients with enhanced reporting and compliance capabilities. The platform generates everything from detailed technical data to executive summaries, making risks and security posture understandable for business leaders. Use built-in compliance agents and frameworks for regulations like NIS2, DORA, GDPR, and ISO27k.",
    },
    {
      icon: <RiAddLine className="w-8 h-8 text-blue-600" />,
      title: "Flexible Tool Integration",
      description:
        "Gain access to numerous scanning and intel providers. Kikimora integrates with top-notch vulnerability discovery tools like Qualys, Nessus, Rapid7, and Burp Suite. This allows you to parse data from various sources into one platform, maintaining historical data even if your client's or your own toolset changes.",
    },
    {
      icon: <RiBarChartLine className="w-8 h-8 text-blue-600" />,
      title: "Intelligent, Context-Aware Prioritization",
      description:
        "Move beyond standard vulnerability management with the Kikimora Smart Score. This feature allows you to prioritize vulnerabilities based on unique risk factors specific to each client's industry, size, critical assets, and operational context. The AI Assistant can also help prioritize by correlating various sources of information.",
    },
    {
      icon: <RiMoneyDollarCircleLine className="w-8 h-8 text-blue-600" />,
      title: "Scalable and Optimized Budgeting",
      description:
        "Kikimora offers flexible pricing bundles for optimized budgeting. The pricing model is scalable and based on the number of assets, making it adaptable for any organizational context, from small businesses to large enterprises. Starting with Kikimora is easy, and you can test the platform for free using Kikimora Community.",
    },
    {
      icon: <RiCustomerService2Line className="w-8 h-8 text-blue-600" />,
      title: "Expert Support on Demand",
      description:
        "Even the most experienced MSSPs can face complex challenges. Kikimora has built-in consulting services with an expert in-house cybersecurity team ready to assist you. Subscription packages include free consulting hours, providing you with expert backup when you need it most.",
    },
  ];

  return (
    <AnimatedBackground className="py-16 w-[99.1vw]">
      <div className="max-w-[1300px] mx-auto w-full">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Benefits for MSSP Providers
            </h2>
            <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
              Kikimora is a versatile platform designed to help you manage and
              run security services for your clients efficiently. By
              consolidating security testing tools and manual activities into a
              single unified interface, Kikimora empowers MSSPs to enhance
              service delivery, optimize budgeting, and scale operations
              seamlessly.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
