import { useState } from "react";
import { ScheduleDemoModal } from "@/components/ui/ScheduleDemoModal";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function AddonGovernanceSection() {
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);

  return (
    <>
      <AnimatedBackground className="w-[99.1vw] flex flex-col items-center py-16">
        <div
          className="w-full max-w-7xl rounded-lg p-8 shadow-lg relative"
          style={{
            backgroundImage: "url('/eu-governance.jpeg')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#1e3a8a",
          }}
        >
          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left Section */}
            <div className="flex-1">
              <div className="mt-20 ml-10">
                <span className="inline-block px-3 py-1 bg-blue-400 text-white text-sm font-semibold rounded mb-4">
                  ADD-ON
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  Add a Strategic Security Partner: Our vCISO Governance Module
                </h2>
                <p className="text-white text-lg leading-relaxed mb-8">
                  For organizations requiring executive-level security
                  leadership, strategic guidance, and sophisticated risk
                  management, our Governance module provides a dedicated Virtual
                  CISO (vCISO) to align security with your business objectives.
                </p>
                <button
                  onClick={() => setIsScheduleDemoModalOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  <div className="text-center">
                    <div className="text-lg">
                      Schedule a Governance Consultation
                    </div>
                    <div className="text-sm opacity-90">
                      Discuss Your Strategic Needs
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Section - Card Format */}
            <div className="flex-1">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 mt-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Key Governance Benefits:
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-400 mt-1 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <span className="font-bold text-white">
                        Strategic Roadmap Development:
                      </span>
                      <span className="text-white">
                        {" "}
                        Partner with an expert to develop and execute a
                        long-term security strategy.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-400 mt-1 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <span className="font-bold text-white">
                        Proactive Risk Management:
                      </span>
                      <span className="text-white">
                        {" "}
                        Conduct gap analyses, manage risks, and ensure your
                        security posture meets evolving threats.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-400 mt-1 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <span className="font-bold text-white">
                        Policy & Procedure Excellence:
                      </span>
                      <span className="text-white">
                        {" "}
                        Establish and maintain robust security policies and
                        procedures for operational consistency and compliance.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-400 mt-1 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <span className="font-bold text-white">
                        Business Continuity & Disaster Recovery:
                      </span>
                      <span className="text-white">
                        {" "}
                        Develop and test plans to ensure your business can
                        withstand and recover from significant incidents.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-400 mt-1 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <span className="font-bold text-white">
                        Executive-Level Reporting:
                      </span>
                      <span className="text-white">
                        {" "}
                        Get clear, concise updates for your board and leadership
                        on security posture and risk.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-400 mt-1 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <span className="font-bold text-white">
                        Emerging Technology Advisory:
                      </span>
                      <span className="text-white">
                        {" "}
                        Receive expert guidance on integrating new security
                        technologies and adapting to the latest threat
                        landscape.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-400 mt-1 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <span className="font-bold text-white">
                        Internal Team Development:
                      </span>
                      <span className="text-white">
                        {" "}
                        Guidance on building and mentoring your internal
                        security team.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedBackground>

      {/* Schedule Demo Modal */}
      <ScheduleDemoModal
        isOpen={isScheduleDemoModalOpen}
        onClose={() => setIsScheduleDemoModalOpen(false)}
      />
    </>
  );
}
