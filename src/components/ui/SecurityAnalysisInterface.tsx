import { useState } from "react";

interface SecurityOption {
  id: string;
  title: string;
  description: string;
}

interface TerminalStep {
  id: string;
  text: string;
  status: "completed" | "in-progress" | "pending";
}

interface SecurityAnalysisInterfaceProps {
  title?: string;
  subtitle?: string;
  options: SecurityOption[];
  terminalCommand?: string;
  terminalSteps: TerminalStep[];
  onOptionSelect?: (optionId: string) => void;
}

const SecurityAnalysisInterface = ({
  title = "Perform complex actions",
  subtitle = "Choose your security analysis and watch our AI agent process it in real-time.",
  options,
  terminalCommand = "> kikimora-agent recon --target=external --mode=deep",
  terminalSteps,
  onOptionSelect,
}: SecurityAnalysisInterfaceProps) => {
  const [selectedOption, setSelectedOption] = useState<string>(
    options[0]?.id || ""
  );

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    onOptionSelect?.(optionId);
  };

  const getStatusIcon = (status: TerminalStep["status"]) => {
    switch (status) {
      case "completed":
        return <span className="text-blue-500 text-sm">✓</span>;
      case "in-progress":
        return <span className="text-blue-400 text-sm animate-pulse">*</span>;
      case "pending":
        return <span className="text-gray-500 text-sm">○</span>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Left Panel - Security Analysis Options */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-white">{title}</h1>
              <p className="text-gray-300 text-lg">{subtitle}</p>
            </div>

            <div className="space-y-4">
              {options.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    selectedOption === option.id
                      ? "border-blue-400 bg-blue-900/20"
                      : "border-gray-700 bg-gray-800 hover:border-gray-600"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-300">{option.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - AI Agent Process Output */}
          <div className="bg-black rounded-lg border border-gray-700 overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-3 border-b border-gray-700 flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm">Terminal</span>
            </div>

            {/* Terminal Content */}
            <div className="p-4 font-mono text-sm">
              {/* Command Line */}
              <div className="text-blue-500 mb-4">{terminalCommand}</div>

              {/* Process Steps */}
              <div className="space-y-2">
                {terminalSteps.map((step) => (
                  <div key={step.id} className="flex items-center space-x-2">
                    <span className="text-gray-400">
                      {getStatusIcon(step.status)}
                    </span>
                    <span
                      className={`${
                        step.status === "completed"
                          ? "text-gray-300"
                          : step.status === "in-progress"
                            ? "text-blue-400"
                            : "text-gray-500"
                      }`}
                    >
                      {step.text}
                    </span>
                    {step.status === "in-progress" && (
                      <span className="text-blue-400 animate-pulse">|</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityAnalysisInterface;
