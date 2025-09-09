import { useState } from "react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

interface ComplianceItem {
  title: string;
  description: string;
}

interface ComplianceTab {
  id: string;
  name: string;
  title: string;
  description: string;
  requirementsTitle: string;
  requirements: ComplianceItem[];
}

const complianceData: ComplianceTab[] = [
  {
    id: "hipaa",
    name: "HIPAA Compliance",
    title: "HIPAA Security Rule Compliance",
    description:
      "Go beyond a simple checklist. Kikimora provides the continuous risk analysis, documented safeguards (Administrative, Technical, and Physical), audit trails, and workforce training mandated by the HIPAA Security Rule. We help you protect ePHI and avoid costly OCR penalties that now target organizations for failing to perform adequate risk analysis.",
    requirementsTitle: "Key HIPAA Requirements We Address:",
    requirements: [
      {
        title: "Security Management Process:",
        description: "Continuous risk analysis and vulnerability assessment",
      },
      {
        title: "Audit Controls:",
        description: "Comprehensive logging and monitoring of ePHI access",
      },
      {
        title: "Security Training:",
        description:
          "Regular cybersecurity awareness and secure practices training",
      },
      {
        title: "Periodic Evaluation:",
        description: "Annual penetration testing and security assessments",
      },
    ],
  },
  {
    id: "nis2",
    name: "NIS2 Directive",
    title: "NIS2 Directive Compliance",
    description:
      "Prepare for the upcoming NIS2 Directive. Kikimora helps you implement robust cybersecurity measures, including supply chain security, incident handling, and vulnerability disclosure policies, ensuring you meet the stringent requirements for critical infrastructure protection across the EU.",
    requirementsTitle: "Key NIS2 Requirements We Address:",
    requirements: [
      {
        title: "Risk Management:",
        description: "Implement cybersecurity risk-management measures.",
      },
      {
        title: "Reporting Obligations:",
        description: "Notify relevant authorities of significant incidents.",
      },
      {
        title: "Supply Chain Security:",
        description: "Address security of supply chains and procurement.",
      },
      {
        title: "Cybersecurity Hygiene:",
        description: "Promote basic computer hygiene practices and training.",
      },
    ],
  },
];

function ComplianceSection() {
  const [activeTab, setActiveTab] = useState(complianceData[0].id);

  const activeTabData = complianceData.find((tab) => tab.id === activeTab);

  return (
    <AnimatedBackground className="w-[99.1vw] py-16 sm:py-24">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Master Your Compliance: Achieve and Maintain HIPAA & NIS2 Adherence
            with Confidence
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-white/80">
            Go beyond simple checklists with continuous compliance monitoring
            and expert guidance.
          </p>
        </div>
        <div className="mt-12 rounded-lg shadow-lg overflow-hidden">
          <div className="flex bg-gray-100">
            {complianceData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-1/2 py-4 text-center font-medium transition-colors duration-200 focus:outline-none ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div className="p-8 bg-white">
            {activeTabData && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {activeTabData.title}
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  {activeTabData.description}
                </p>
                <div className="p-6 mt-6 bg-blue-600/10">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {activeTabData.requirementsTitle}
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {activeTabData.requirements.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon />
                        <p className="text-gray-700">
                          <span className="font-semibold">{item.title}</span>{" "}
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}

export { ComplianceSection };
