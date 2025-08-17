import React from "react";

interface ConsoleSnippetProps {
  className?: string;
}

const ConsoleSnippet: React.FC<ConsoleSnippetProps> = ({ className = "" }) => {
  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      {/* Terminal Window */}
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-gray-700 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Window Control Buttons */}
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="text-gray-400 text-sm font-mono">Terminal</div>
        </div>

        {/* Terminal Content */}
        <div className="p-4 font-mono text-sm">
          {/* Command Line */}
          <div className="text-white mb-2">
            <span className="text-green-400">$</span>{" "}
            <span className="text-blue-400">kikimora-agent</span>{" "}
            <span className="text-yellow-400">recon</span>{" "}
            <span className="text-gray-400">--target=external</span>{" "}
            <span className="text-gray-400">--mode=deep</span>
          </div>

          {/* Status Messages */}
          <div className="space-y-2 text-white">
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✅</span>
              <span>Initializing reconnaissance process...</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✅</span>
              <span>Discovering public-facing assets...</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✅</span>
              <span>Scanning open ports and services...</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✅</span>
              <span>Identifying potential attack vectors...</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✅</span>
              <span>Correlating data for exposure summary...</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-400">ℹ️</span>
              <span>Analysis completed successfully.</span>
            </div>
          </div>

          {/* Next Command Prompt */}
          <div className="text-white mt-4">
            <span className="text-green-400">$</span>{" "}
            <span className="text-gray-400">
              Ready for next security operation.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsoleSnippet;
