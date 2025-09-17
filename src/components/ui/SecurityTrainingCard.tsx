import { useState } from "react";

export function SecurityTrainingCard() {
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
        aria-label="Security Training Card"
      >
        <h3 className="text-sm font-bold text-gray-900 whitespace-nowrap">
          Security Training
        </h3>
      </div>

      {/* Expanded Card - Hover State */}
      <div
        className={`fixed bg-white rounded-2xl shadow-lg p-6 w-80 max-w-[90vw] max-h-[80vh] overflow-y-auto flex flex-col drop-shadow-xl transition-all duration-300 ease-in-out ${
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
        aria-label="Security Training Card Details"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
          Security Training
        </h2>
        <div className="bg-gray-100 rounded-md px-4 py-2 w-fit">
          <span className="text-md font-semibold text-gray-700 whitespace-nowrap">
            Building a Culture
          </span>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-600 text-base mt-2">
          <li>Phishing Campaigns</li>
          <li>Security Awareness</li>
          <li>Secure Code Practices</li>
        </ul>
      </div>
    </div>
  );
}
