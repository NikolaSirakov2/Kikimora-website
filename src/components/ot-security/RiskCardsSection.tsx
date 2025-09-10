import React from "react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

interface RiskCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function RiskCard({ icon, title, description }: RiskCardProps) {
  return (
    <div
      className="flex flex-col bg-white rounded-2xl shadow-md p-8 w-full max-w-lg min-h-[260px] transition-transform hover:-translate-y-1 hover:shadow-lg"
      role="region"
      aria-label={title}
    >
      <div className="mb-4 self-start">{icon}</div>
      <h3 className="text-lg font-bold text-[#111827] mb-2 text-left w-full">
        {title}
      </h3>
      <p className="text-sm text-[#374151] text-left w-full leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function RiskCardsSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col items-center py-16 px-4">
      <h1
        id="risks-heading"
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
      >
        Your World, Your Risks. We Get It.
      </h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch w-full max-w-6xl">
        <RiskCard
          icon={
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100">
              {/* Eye SVG */}
              <svg
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  stroke="#F87171"
                  strokeWidth="2"
                  fill="#FEE2E2"
                />
                <circle
                  cx="16"
                  cy="16"
                  r="5"
                  stroke="#F87171"
                  strokeWidth="2"
                  fill="#fff"
                />
                <circle cx="16" cy="16" r="2" fill="#F87171" />
              </svg>
            </span>
          }
          title="The Visibility Gap"
          description={`Your attack surface is expanding. From legacy PLCs to new IIoT
sensors, you can't protect what you can't see. A single blind-
spot can become your biggest liability.`}
        />
        <RiskCard
          icon={
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100">
              {/* Chart/Operations SVG */}
              <svg
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <rect x="6" y="18" width="4" height="8" rx="2" fill="#FDBA74" />
                <rect
                  x="14"
                  y="12"
                  width="4"
                  height="14"
                  rx="2"
                  fill="#FDBA74"
                />
                <rect
                  x="22"
                  y="8"
                  width="4"
                  height="18"
                  rx="2"
                  fill="#FDBA74"
                />
                <rect
                  x="4"
                  y="4"
                  width="24"
                  height="24"
                  rx="12"
                  stroke="#FDBA74"
                  strokeWidth="2"
                  fill="#FFEDD5"
                />
              </svg>
            </span>
          }
          title="The Operational Dilemma"
          description={`You can't afford downtime. But unpatchable legacy systems and
the IT/OT divide leave you exposed. How do you secure your oper-
ations without disrupting them?`}
        />
        <RiskCard
          icon={
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
              {/* Compliance/Check SVG */}
              <svg
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <rect
                  x="4"
                  y="4"
                  width="24"
                  height="24"
                  rx="12"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  fill="#dbeafe"
                />
                <path
                  d="M11 17l4 4 6-8"
                  stroke="#3b82f6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          }
          title="The Compliance Pressure"
          description={`Regulators are watching. NIS2 and other mandates place direct
liability on management for cybersecurity failures. Proving com-
pliance is now as critical as maintaining production.`}
        />
      </div>
    </AnimatedBackground>
  );
}

export { RiskCardsSection };
