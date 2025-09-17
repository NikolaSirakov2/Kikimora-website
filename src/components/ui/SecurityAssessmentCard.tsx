import { useState } from "react";

export function SecurityAssessmentCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header - Default State */}
      <div
        className={`transition-all duration-300 ease-in-out cursor-pointer bg-white rounded-lg shadow-md px-4 py-2 ${
          isHovered ? "opacity-0 scale-75" : "opacity-100 scale-100"
        }`}
        role="button"
        aria-label="Cybersecurity Assessment Card"
      >
        <h3 className="text-sm font-bold text-gray-900 whitespace-nowrap">
          Cybersecurity Assessment
        </h3>
      </div>

      {/* Expanded Card - Hover State */}
      <div
        className={`fixed bg-white rounded-2xl shadow-lg p-6 w-96 max-w-[90vw] max-h-[80vh] overflow-y-auto flex flex-col drop-shadow-xl transition-all duration-300 ease-in-out ${
          isHovered
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{
          boxShadow: "0 4px 24px 0 rgba(0,0,0,0.25)",
          zIndex: 9999,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        role="region"
        aria-label="Cybersecurity Assessment Card Details"
      >
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Cybersecurity Assessment
        </h2>
        {/* Penetration Testing */}
        <div className="mb-3">
          <div className="bg-gray-100 rounded-lg px-6 py-2 mb-1 w-full font-semibold text-md text-gray-700 text-center shadow-sm">
            Penetration Testing
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-base mt-2">
            <li>Applications</li>
            <li>APIs</li>
            <li>SAST/DAST testing</li>
            <li>Network Infrastructure</li>
          </ul>
        </div>
        {/* Vulnerability Scanning */}
        <div className="mb-3">
          <div className="bg-gray-100 rounded-lg px-6 py-2 mb-1 w-full font-semibold text-md text-gray-700 text-center shadow-sm">
            Vulnerability Scanning
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-base mt-2">
            <li>Cloud Infrastructure</li>
            <li>Application Layer</li>
            <li>OS Layer</li>
            <li>Network Infrastructure</li>
          </ul>
        </div>
        {/* Agent Deployment */}
        <div>
          <div className="bg-gray-100 rounded-lg px-6 py-2 mb-1 w-full font-semibold text-md text-gray-700 text-center shadow-sm">
            Agent Deployment
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-600 text-base mt-2">
            <li>Vulnerability Monitoring</li>
            <li>Policy Compliance</li>
            <li>System Hardening</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
