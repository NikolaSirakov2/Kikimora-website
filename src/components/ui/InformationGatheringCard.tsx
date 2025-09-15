import { useState } from "react";
import { RiBox3Fill } from "react-icons/ri";

export function InformationGatheringCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Red Cube Icon - Default State */}
      <div
        className={`transition-all duration-300 ease-in-out cursor-pointer ${
          isHovered ? "opacity-0 scale-75" : "opacity-100 scale-100"
        }`}
        role="button"
        aria-label="Information Gathering Card"
      >
        <RiBox3Fill 
          className="w-6 h-6 text-red-500 drop-shadow-lg hover:text-red-400 transition-colors duration-200" 
        />
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
          transform: "translate(-50%, -50%)"
        }}
        role="region"
        aria-label="Information Gathering Card Details"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Information Gathering
        </h2>
        <div className="flex flex-col gap-4">
          <div>
            <div className="bg-gray-100 rounded-md px-4 py-2 mb-2 w-fit">
              <span className="text-md font-semibold text-gray-700">
                Asset Inventory
              </span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
              <li>Cloud Infrastructure</li>
              <li>Application Layer</li>
              <li>OS Layer</li>
              <li>Network Infrastructure</li>
            </ul>
          </div>
          <div>
            <div className="bg-gray-100 rounded-md px-4 py-2 mb-2 w-fit">
              <span className="text-md font-semibold text-gray-700">
                Attack Surface Management
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-gray-600 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li>Certificate Issues</li>
                <li>Exposed Services</li>
                <li>User Accounts Monitoring</li>
                <li>Unapproved Software</li>
              </ul>
              <ul className="list-disc list-inside space-y-1">
                <li>Network Segmentation</li>
                <li>Domain Issues</li>
                <li>File Integrity Monitoring</li>
                <li>Data Leakage Issues</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
