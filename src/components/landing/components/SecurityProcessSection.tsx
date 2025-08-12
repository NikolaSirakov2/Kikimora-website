import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Info, Loader } from "lucide-react";
// import useLocalize from '~/hooks/useLocalize'; // TODO: Uncomment when useLocalize is available

// Mock data simulating the output for each action with proper typing
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
} as const;

type ActionId = keyof typeof actionsData;
type StepStatus = "success" | "info" | "command";

interface Step {
  text: string;
  status: StepStatus;
}

interface TerminalLineProps {
  text: string;
  status: StepStatus;
  isLast: boolean;
}

interface AnimatedTerminalProps {
  actionId: ActionId;
  onAnimationComplete?: () => void;
}

// Action titles and descriptions with proper typing
const actionItems: Array<{
  id: ActionId;
  title: string;
  description: string;
}> = [
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
const TerminalLine: React.FC<TerminalLineProps> = ({
  text,
  status,
  isLast,
}) => {
  const getIcon = useCallback(() => {
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
  }, [isLast, status]);

  const getTextColor = useCallback(() => {
    if (isLast) return "text-gray-300";
    switch (status) {
      case "success":
        return "text-green-400";
      case "info":
        return "text-blue-400";
      default:
        return "text-gray-300";
    }
  }, [isLast, status]);

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
const AnimatedTerminal: React.FC<AnimatedTerminalProps> = ({
  actionId,
  onAnimationComplete,
}) => {
  const [lines, setLines] = useState<Step[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const data = useMemo(() => actionsData[actionId], [actionId]);

  useEffect(() => {
    if (!data) {
      setLines([]);
      setIsRunning(false);
      return;
    }

    const commandLine: Step = { text: data.command, status: "command" };
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
  }, [actionId, data, onAnimationComplete]);

  return (
    <div className="flex h-full w-full flex-col rounded-lg border border-gray-700 bg-gray-900/80 p-6 shadow-2xl shadow-blue-500/10 backdrop-blur-sm">
      <div className="mb-4 flex flex-shrink-0 items-center space-x-2">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      <div className="flex-grow space-y-2 overflow-y-auto pr-2">
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
            <span className="h-4 w-2 animate-pulse bg-blue-500"></span>
          </div>
        )}
        {!isRunning && lines.length > 0 && (
          <div className="flex items-center space-x-3 pt-2">
            <ChevronRight size={16} className="text-gray-500" />
            <span className="font-mono text-sm text-gray-400">
              Ready for next security operation.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Component
const SecurityProcessSection: React.FC = () => {
  const [selectedAction, setSelectedAction] = useState<ActionId>(
    actionItems[0].id
  );
  // const localize = useLocalize(); // TODO: Uncomment when useLocalize is available

  const handleCardClick = useCallback((itemId: ActionId) => {
    setSelectedAction(itemId);
  }, []);

  const handleTerminalAnimationComplete = useCallback(() => {
    // Move to next action after animation completes
    const currentIndex = actionItems.findIndex(
      (item) => item.id === selectedAction
    );
    const nextIndex = (currentIndex + 1) % actionItems.length;
    setSelectedAction(actionItems[nextIndex].id);
  }, [selectedAction]);

  return (
    <div className="bg-white px-4 py-12 font-sans text-gray-900 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {/* {localize('com_security_section_title')} */}{" "}
            {/* TODO: Uncomment when useLocalize is available */}
            Security Process Automation
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            {/* {localize('com_security_section_description')} */}{" "}
            {/* TODO: Uncomment when useLocalize is available */}
            Streamline your security operations with AI-powered automation and
            real-time analysis.
          </p>
        </header>

        <main className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5 lg:gap-12">
          <div className="h-[420px] lg:col-span-3">
            <AnimatedTerminal
              actionId={selectedAction}
              onAnimationComplete={handleTerminalAnimationComplete}
            />
          </div>

          <div className="space-y-4 lg:col-span-2">
            {actionItems.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => handleCardClick(item.id)}
                className="cursor-pointer rounded-lg border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-gray-300 hover:shadow-md"
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: "16px",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  borderColor:
                    selectedAction === item.id
                      ? "rgba(59, 130, 246, 0.7)"
                      : "rgba(0, 0, 0, 0.1)",
                  boxShadow:
                    selectedAction === item.id
                      ? "0 0 15px rgba(59, 130, 246, 0.3)"
                      : "0 8px 32px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-600">
                  <span className="text-lg font-semibold italic text-gray-900">
                    {item.title}
                  </span>
                  <span> - {item.description}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SecurityProcessSection;
