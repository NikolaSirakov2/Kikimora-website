import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Info, Loader } from "lucide-react";

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
      "discover and map my external attack surface to uncover risks.",
  },
  {
    id: "analyze-vulnerabilities",
    title: "Analyze my vulnerabilities",
    description: "process and prioritize vulnerabilities with contextual data",
  },
  {
    id: "scan-webapp",
    title: "Scan my web application",
    description:
      "perform security scans to detect and report web app vulnerabilities in real time",
  },
  {
    id: "analyze-endpoints",
    title: "Analyze my endpoints",
    description: "monitor and analyze endpoint security for up-to date status",
  },
];

// Component for each line in the terminal
const TerminalLine = ({ text, status, isLast }: { text: string; status: string; isLast: boolean }) => {
  const getIcon = () => {
    if (isLast)
      return <Loader size={16} className="animate-spin text-gray-400" />;
    switch (status) {
      case "success":
        return <CheckCircle2 size={16} className="text-blue-500" />;
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
        return "text-blue-500";
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

// Main Terminal Display Component
const AnimatedTerminal = ({ actionId, onAnimationComplete }: { actionId: string; onAnimationComplete: () => void }) => {
  const [lines, setLines] = useState<Array<{ text: string; status: string }>>([]);
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
        // Wait 5 seconds after the last row before calling completion
        setTimeout(() => {
          if (onAnimationComplete) {
            onAnimationComplete();
          }
        }, 5000);
      }
    }, 1200); // Slowed down from 700ms to 1200ms

    return () => clearInterval(intervalId);
  }, [actionId, data]);

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg p-6 w-full h-full shadow-2xl shadow-blue-500/10 flex flex-col">
      <div className="flex items-center space-x-2 mb-4 flex-shrink-0">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
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

// Main App Component
export default function SecurityProcessSection() {
  const [selectedAction, setSelectedAction] = useState(actionItems[0].id);

  const handleCardClick = (itemId: string) => {
    setSelectedAction(itemId);
  };

  const handleTerminalAnimationComplete = () => {
    // Move to next action after animation completes
    const currentIndex = actionItems.findIndex(
      (item) => item.id === selectedAction
    );
    const nextIndex = (currentIndex + 1) % actionItems.length;
    setSelectedAction(actionItems[nextIndex].id);
  };

  return (
    <div className="bg-gray-900 text-white font-sans py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-left mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Introducing Vibe Security!
          </h1>
          <p className="text-lg text-gray-400 mt-2">
            Choose your security analysis and watch our AI agent process it in
            real-time.
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-4">
            {actionItems.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => handleCardClick(item.id)}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-5 cursor-pointer transition-all duration-300 hover:bg-gray-800/80"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "16px",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  borderColor:
                    selectedAction === item.id
                      ? "rgba(59, 130, 246, 0.7)"
                      : "#374151",
                  boxShadow:
                    selectedAction === item.id
                      ? "0 0 15px rgba(59, 130, 246, 0.3)"
                      : "none",
                }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-400">
                  <span className="font-semibold text-lg text-gray-100 italic">
                    {item.title}
                  </span>
                  <span> - {item.description}</span>
                </p>
              </motion.div>
            ))}
          </div>

          <div className="h-[420px]">
            <AnimatedTerminal
              actionId={selectedAction}
              onAnimationComplete={handleTerminalAnimationComplete}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
