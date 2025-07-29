import { useState } from "react";

interface TabItem {
  id: string;
  label: string;
  header: string;
  placeholderText: string;
}

const tabs: TabItem[] = [
  {
    id: "vulnerability-scanning",
    label: "Vulnerability Scanning",
    header: "Vulnerability Scanning",
    placeholderText: "Vulnerability Scanner",
  },
  {
    id: "penetration-testing",
    label: "Penetration Testing",
    header: "Penetration Testing",
    placeholderText: "Penetration Test Dashboard",
  },
  {
    id: "system-hardening",
    label: "System Hardening",
    header: "System Hardening",
    placeholderText: "System Hardening Tools",
  },
  {
    id: "attack-surface-mgmt",
    label: "Attack Surface Mgmt",
    header: "Attack Surface Management",
    placeholderText: "Attack Surface Map",
  },
];

export function DigitalDefenseSection() {
  const [activeTab, setActiveTab] = useState("attack-surface-mgmt");

  const activeTabData = tabs.find((tab) => tab.id === activeTab) || tabs[3];

  return (
    <section className="w-full bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Demystifying Digital Defense
          </h1>
          <p className="text-cyan-400 text-lg">See Kikimora in Action</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "text-cyan-400 border-b-2 border-cyan-400"
                  : "text-white hover:text-cyan-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            {activeTabData.header}
          </h2>
        </div>

        {/* Main Content Area - Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-8 min-h-[400px] flex items-center justify-center border border-gray-700">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
                {activeTabData.placeholderText}
              </h3>
              <p className="text-gray-400 text-sm">
                Interactive visualization will be displayed here
              </p>
            </div>
          </div>
        </div>

        {/* Descriptive Text */}
        <div className="max-w-3xl mx-auto mt-8 text-center">
          <p className="text-gray-400 text-sm leading-relaxed">
            Discover and map your external attack surface in real-time,
            identifying critical service exposures, data leakage, and domain
            issues before attackers do.
          </p>
        </div>
      </div>
    </section>
  );
}
