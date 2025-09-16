import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import DarkVeil from "@/components/ui/DarkVeil";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

const HeroSection = () => {
  const [chatInput, setChatInput] = useState("");
  const [showRegistration, setShowRegistration] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const { toast } = useToast();
  const placeholderTexts = [
    "Ask Kikimora to analyze your attack surface...",
    "Ask Kikimora to analyze my vulnerabilities...",
    "Ask Kikimora to scan my web application...",
    "Ask Kikimora to analyze my endpoints...",
  ];
  useEffect(() => {
    const currentText = placeholderTexts[placeholderIndex];
    let charIndex = 0;
    setDisplayedText("");
    setIsTyping(true);
    const typewriterInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typewriterInterval);

        // Wait 2 seconds before switching to next text
        setTimeout(() => {
          setPlaceholderIndex((prev) => (prev + 1) % placeholderTexts.length);
        }, 2000);
      }
    }, 50); // Type each character every 50ms

    return () => clearInterval(typewriterInterval);
  }, [placeholderIndex, placeholderTexts.length]);
  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatInput.trim()) {
      setShowRegistration(true);
    }
  };
  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      toast({
        title: "Registration Successful!",
        description: "Welcome to Kikimora Agent. We'll be in touch soon.",
      });
      setShowRegistration(false);
      setChatInput("");
      setEmail("");
      setName("");
      setCompany("");
    }
  };
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center px-4 w-[99.12vw] pt-48">
      {/* WebGL Background */}
      <div className="absolute inset-0 overflow-hidden">
        <DarkVeil />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Logo and title */}

        {/* AI Chat Prompt Interface */}
        <div className="relative group mt-[50px]">
          {/* Glow effect background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 rounded-3xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

          {/* Main container */}
          <div
            className="relative backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl shadow-blue-500/10 p-5 w-full max-w-[513px] mx-auto mt-[100px] mb-[40px] transform transition-all duration-300 animate-fade-up scale-[1.056]"
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
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full mb-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                  <AnimatedShinyText className="text-sm font-medium text-gray-100">
                    AI-Powered Security
                  </AnimatedShinyText>
                </div>
                <h3 className="text-2xl font-bold leading-tight">
                  <span className="text-white">Explore </span>
                  <span className="bg-gradient-to-r from-white via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Kikimora Agent
                  </span>
                </h3>
                <p className="text-base text-gray-300 max-w-md mx-auto leading-relaxed">
                  Ask me anything about your cybersecurity needs and get
                  intelligent insights
                </p>
              </div>

              {/* Input section */}
              <div className="relative group/form">
                <div className="relative">
                  {/* Input glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-2xl blur opacity-0 group-hover/form:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative flex items-center">
                    <Input
                      type="text"
                      placeholder={displayedText + (isTyping ? "|" : "")}
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleChatSubmit(e)
                      }
                      className="w-full h-14 text-base rounded-2xl border-2 border-gray-600/60 focus:border-blue-500/60 bg-gray-800/50 backdrop-blur-sm pl-6 pr-20 placeholder:text-gray-400 text-white shadow-lg focus:shadow-xl focus:shadow-blue-500/10 transition-all duration-300 focus:scale-[1.01]"
                    />
                    <Button
                      onClick={handleChatSubmit}
                      className="absolute right-3 h-8 w-8 rounded-xl bg-gray-800/50 border border-gray-700/30 hover:bg-gray-800/70 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 group"
                    >
                      <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Suggestion buttons */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-400 text-center">
                  Popular queries:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    {
                      id: "scan",
                      text: "Scan my web applications",
                      emoji: "🔍",
                    },
                    {
                      id: "priorities",
                      text: "Show vulnerability priorities",
                      emoji: "🛡️",
                    },
                    {
                      id: "endpoints",
                      text: "Analyze my endpoints",
                      emoji: "📊",
                    },
                    {
                      id: "surface",
                      text: "Review attack surface",
                      emoji: "🎯",
                    },
                  ].map((suggestion) => (
                    <button
                      key={suggestion.id}
                      onClick={() => setChatInput(suggestion.text)}
                      className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:bg-gray-800/80 text-left relative overflow-hidden"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0 text-lg transition-transform duration-300 hover:scale-110">
                          {suggestion.emoji}
                        </div>
                        <div className="flex-1">
                          <span className="font-semibold text-[0.8rem] text-gray-100">
                            {suggestion.text}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="text-center pt-2 border-t border-gray-700/50 space-y-3">
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <Button
                    variant="hero"
                    className="text-base px-8 py-2 h-auto"
                    onClick={() => setShowRegistration(true)}
                  >
                    Get Started Free
                  </Button>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-800/70 hover:border-gray-600">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                    <AnimatedShinyText className="text-sm font-medium text-gray-100">
                      Try Agentic
                    </AnimatedShinyText>
                  </div>
                </div>
                <p className="text-xs text-gray-400">
                  Powered by advanced AI • Enterprise-grade security
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      <Dialog open={showRegistration} onOpenChange={setShowRegistration}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">
              Join Kikimora Agent
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleRegistration} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company (Optional)</Label>
              <Input
                id="company"
                type="text"
                placeholder="Your company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="border-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-3 pt-4">
              <Button type="submit" variant="cyber" className="w-full">
                Start Free Trial
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                By signing up, you agree to our Terms of Service and Privacy
                Policy
              </p>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HeroSection;
