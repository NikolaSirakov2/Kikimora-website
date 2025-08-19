import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Info, Loader } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

// Mock data simulating the output for each action
const actionsData = {
  "public-exposure": {
    command: "> kikimora-agent recon --target=external --mode=deep",
    steps: [
      { text: "Initializing reconnaissance process...", status: "success" },
      { text: "Discovering public-facing assets...", status: "success" },
      { text: "Scanning open ports and services...", status: "success" },
      { text: "Identifying potential attack vectors...", status: "success" },
      { text: "Correlating data for exposure summary...", status: "success" },
      { text: "Analysis completed successfully.", status: "info" },
    ],
  },
  "analyze-vulnerabilities": {
    command: "> kikimora-agent vuln-scan --scope=all --level=critical",
    steps: [
      {
        text: "Fetching latest vulnerability definitions...",
        status: "success",
      },
      { text: "Scanning network infrastructure...", status: "success" },
      { text: "Analyzing installed software packages...", status: "success" },
      { text: "Checking for outdated system libraries...", status: "success" },
      {
        text: "Prioritizing vulnerabilities by CVSS score...",
        status: "success",
      },
      { text: "Analysis completed successfully.", status: "info" },
    ],
  },
  "scan-webapp": {
    command: "> kikimora-agent web-scan --url=app.example.com --test=all",
    steps: [
      { text: "Starting web application security scan...", status: "success" },
      {
        text: "Testing for SQL Injection vulnerabilities...",
        status: "success",
      },
      { text: "Checking for Cross-Site Scripting (XSS)...", status: "success" },
      {
        text: "Analyzing security headers and configurations...",
        status: "success",
      },
      { text: "Generating actionable results report...", status: "success" },
      { text: "Analysis completed successfully.", status: "info" },
    ],
  },
  "analyze-endpoints": {
    command: "> kikimora-agent endpoint-analysis --scope=enterprise",
    steps: [
      { text: "Fetching available endpoints...", status: "success" },
      { text: "Analyzing hardening assessment results...", status: "success" },
      { text: "Checking Windows registries...", status: "success" },
      { text: "Looking for malicious services...", status: "success" },
      { text: "Checking for unapproved software...", status: "success" },
      { text: "Providing comprehensive analysis...", status: "success" },
      { text: "Analysis completed successfully.", status: "info" },
    ],
  },
};

// Action titles and descriptions
const actionItems = [
  {
    id: "public-exposure",
    title: "Identify my public exposure",
    description:
      "We prioritize discovering and analyzing your external attack surface in our reconnaissance process.",
  },
  {
    id: "analyze-vulnerabilities",
    title: "Analyze my vulnerabilities",
    description:
      "Let our AI agent process and prioritize your vulnerability landscape for actionable insights.",
  },
  {
    id: "scan-webapp",
    title: "Scan my web application",
    description:
      "Receive instant, actionable results from comprehensive web application security testing.",
  },
  {
    id: "analyze-endpoints",
    title: "Analyze my endpoints",
    description:
      "Continuous improvement through comprehensive endpoint security analysis and monitoring.",
  },
];

interface TerminalLineProps {
  text: string;
  status: string;
  isLast: boolean;
}

// Component for each line in the terminal
const TerminalLine: React.FC<TerminalLineProps> = ({
  text,
  status,
  isLast,
}) => {
  const getIcon = () => {
    if (isLast)
      return <Loader size={16} className="animate-spin text-gray-400" />;
    switch (status) {
      case "success":
        return <CheckCircle2 size={16} className="text-green-400" />;
      case "info":
        return <Info size={16} className="text-blue-400" />;
      default:
        return <ChevronRight size={16} className="text-gray-500" />;
    }
  };

  const getTextColor = () => {
    if (isLast) return "text-gray-300";
    switch (status) {
      case "success":
        return "text-green-400";
      case "info":
        return "text-blue-400";
      default:
        return "text-gray-300";
    }
  };

  return (
    <motion.div
      className="flex items-center space-x-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {getIcon()}
      <span className={`${getTextColor()} font-mono text-sm`}>{text}</span>
    </motion.div>
  );
};

interface AnimatedTerminalProps {
  actionId: string;
}

// Main Terminal Display Component
const AnimatedTerminal: React.FC<AnimatedTerminalProps> = ({ actionId }) => {
  const [lines, setLines] = useState<Array<{ text: string; status: string }>>(
    []
  );
  const [isRunning, setIsRunning] = useState(false);
  const data = actionsData[actionId as keyof typeof actionsData];

  useEffect(() => {
    if (!data) {
      setLines([]);
      setIsRunning(false);
      return;
    }

    const commandLine = { text: data.command, status: "command" };
    setLines([commandLine]);
    setIsRunning(true);

    let stepIndex = 0;
    const intervalId = setInterval(() => {
      if (stepIndex < data.steps.length) {
        const nextLine = data.steps[stepIndex];
        setLines((currentLines) => [...currentLines, nextLine]);
        stepIndex++;
      } else {
        clearInterval(intervalId);
        setIsRunning(false);
      }
    }, 700);

    return () => clearInterval(intervalId);
  }, [actionId, data]);

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 w-full h-full shadow-2xl shadow-blue-500/10 flex flex-col">
      <div className="flex items-center space-x-2 mb-4 flex-shrink-0">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="space-y-2 overflow-y-auto flex-grow pr-2">
        <AnimatePresence>
          {lines
            .filter((line) => !!line)
            .map((line, index) => (
              <TerminalLine
                key={`${index}-${line.text}`}
                text={line.text}
                status={line.status}
                isLast={isRunning && index === lines.length - 1}
              />
            ))}
        </AnimatePresence>
        {isRunning && lines.length > 1 && (
          <div className="flex items-center space-x-3 pl-9">
            <span className="bg-blue-500 w-2 h-4 animate-pulse"></span>
          </div>
        )}
        {!isRunning && lines.length > 0 && (
          <div className="flex items-center space-x-3 pt-2">
            <ChevronRight size={16} className="text-gray-500" />
            <span className="text-gray-400 font-mono text-sm">
              Ready for next security operation.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Component
export const AnimatedTerminalSection: React.FC = () => {
  const [selectedAction, setSelectedAction] = useState("analyze-endpoints");

  return (
    <AnimatedBackground className="w-[99.1vw]">
      <section className="bg-gray-900 text-white py-16 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <header className="text-left mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Perform complex actions
            </h2>
            <p className="text-lg text-gray-400 mt-2">
              Choose your security analysis and watch our AI agent process it in
              real-time.
            </p>
          </header>

          <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-4 bg-gray-900/80 rounded-lg backdrop-blur-sm">
              {actionItems.map((item) => (
                <motion.div
                  key={item.id}
                  onClick={() => setSelectedAction(item.id)}
                  className="bg-gray-800/50 border border-gray-700 rounded-lg p-5 cursor-pointer transition-all duration-300 hover:bg-gray-800/80"
                  animate={{
                    borderColor:
                      selectedAction === item.id
                        ? "rgba(59, 130, 246, 0.7)"
                        : "#374151",
                    boxShadow:
                      selectedAction === item.id
                        ? "0 0 15px rgba(59, 130, 246, 0.3)"
                        : "none",
                  }}
                >
                  <p className="text-gray-400">
                    <span className="font-semibold text-lg text-gray-100">
                      {item.title}
                    </span>
                    <span> - {item.description}</span>
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="h-[450px]">
              <AnimatedTerminal actionId={selectedAction} />
            </div>
          </main>
        </div>
      </section>
    </AnimatedBackground>
  );
};
