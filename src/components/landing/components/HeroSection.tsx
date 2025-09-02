import { useState, useEffect, useMemo } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  SendHorizontal,
  AlertTriangle,
  BarChart3,
  Target,
  Search,
} from "lucide-react";
import DarkVeil from "./DarkVeil";
import { AnimatedShinyText } from "../ui/animated-shiny-text";

interface HeroSectionProps {
  onRegisterClick?: () => void;
}

export const HeroSection = ({ onRegisterClick }: HeroSectionProps) => {
  const [chatInput, setChatInput] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const placeholderTexts = useMemo(
    () => [
      "Scan my attack surface",
      "Find vulnerabilities",
      "Analyze web applications",
      "Discover endpoints",
    ],
    []
  );

  useEffect(() => {
    const currentText = placeholderTexts[placeholderIndex];
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const startTyping = () => {
      intervalId = setInterval(
        () => {
          setDisplayedText((prev) => {
            if (isDeleting) {
              const newText = prev.substring(0, prev.length - 1);
              if (newText === "") {
                clearInterval(intervalId);
                timeoutId = setTimeout(() => {
                  setIsDeleting(false);
                  setPlaceholderIndex(
                    (prev) => (prev + 1) % placeholderTexts.length
                  );
                }, 500);
              }
              return newText;
            } else {
              const newText = currentText.substring(0, prev.length + 1);
              if (newText === currentText) {
                clearInterval(intervalId);
                timeoutId = setTimeout(() => {
                  setIsDeleting(true);
                }, 2000);
              }
              return newText;
            }
          });
        },
        isDeleting ? 50 : 100 + Math.random() * 50
      );
    };

    // Small delay before starting to prevent immediate execution
    timeoutId = setTimeout(startTyping, 100);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [placeholderIndex, isDeleting, placeholderTexts]);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatInput.trim()) {
      if (onRegisterClick) {
        onRegisterClick();
      }
    }
  };

  return (
    <div className="relative flex min-h-[70vh] items-center justify-center px-4 pb-52 pt-32 pt-24">
      {/* WebGL Background */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <DarkVeil />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl space-y-8 text-center">
        {/* AI Chat Prompt Interface */}
        <div className="group relative mt-[50px]">
          {/* Main container */}
          <div
            className="animate-fade-up relative mx-auto mb-[40px] mt-[100px] w-full max-w-[400px] scale-100 transform rounded-3xl border border-gray-700/50 p-4 shadow-2xl shadow-blue-500/10 backdrop-blur-xl transition-all duration-300 sm:max-w-[500px] sm:scale-110 sm:p-5 md:max-w-[600px] md:scale-125 lg:max-w-[667px] lg:scale-[1.373]"
            style={{
              animationDelay: "0.2s",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "16px",
              boxShadow:
                "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
            }}
          >
            <div className="space-y-6">
              {/* Header section */}
              <div className="space-y-3 text-center">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800/50 px-4 py-2 text-sm text-primary">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <AnimatedShinyText>AI-Powered Security</AnimatedShinyText>
                </div>

                <h1 className="mx-auto max-w-sm bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-4xl font-bold text-transparent">
                  <span className="text-white">Explore </span>
                  <br />
                  <span className="bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Kikimora Agent
                  </span>
                </h1>

                <p className="mx-auto max-w-xs text-sm leading-relaxed text-gray-300">
                  Discover and secure your digital assets with AI-driven
                  cybersecurity
                </p>
              </div>

              <div className="h-8"></div>

              {/* Chat input form */}
              <form onSubmit={handleChatSubmit} className="space-y-4">
                <div className="group/form relative">
                  <div className="relative">
                    {/* Input glow effect */}
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500/40 to-purple-500/40 opacity-0 blur transition-opacity duration-300 group-hover/form:opacity-100"></div>

                    <div className="relative">
                      <Input
                        type="text"
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        placeholder={displayedText + (displayedText ? "|" : "")}
                        className="min-h-[80px] w-full rounded-2xl border-gray-600/50 bg-gray-800/50 px-4 py-6 pb-16 text-white transition-all duration-300 placeholder:text-gray-400 focus:scale-[1.01]"
                      />
                      <div className="absolute bottom-3 right-3">
                        <Button
                          type="submit"
                          size="icon"
                          className="group h-8 w-8 rounded-full transition-all duration-300 hover:scale-110"
                          disabled={!chatInput.trim()}
                        >
                          <SendHorizontal
                            size={16}
                            className="transition-transform duration-300"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              {/* Popular queries */}
              <div className="space-y-3">
                <p className="text-center text-xs font-medium text-gray-400">
                  Popular queries
                </p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {[
                    {
                      text: "Scan my website",
                      icon: <Search className="h-4 w-4 text-white" />,
                    },
                    {
                      text: "Prioritize vulnerabilities",
                      icon: <AlertTriangle className="h-4 w-4 text-white" />,
                    },
                    {
                      text: "Analyze endpoints",
                      icon: <BarChart3 className="h-4 w-4 text-white" />,
                    },
                    {
                      text: "Map attack surface",
                      icon: <Target className="h-4 w-4 text-white" />,
                    },
                  ].map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => setChatInput(suggestion.text)}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-700/50 bg-gray-800/50 p-3 text-left transition-all duration-300 hover:border-gray-600/50 hover:bg-gray-800/80"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                          {suggestion.icon}
                        </div>
                        <div className="flex-1">
                          <span className="text-xs font-medium text-gray-100">
                            {suggestion.text}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>
              </div>

              {/* Features */}
              <div className="flex items-center justify-center gap-6 text-center">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                  <p className="text-xs text-gray-500">Threat Detection</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-400"></div>
                  <p className="text-xs text-gray-500">AI Analysis</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                  <p className="text-xs text-gray-500">Real-time Protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
