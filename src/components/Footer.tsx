import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import { useState } from "react";
import { PrivacyPolicyModal } from "./ui/PrivacyPolicyModal";
import { CookiePolicyModal } from "./ui/CookiePolicyModal";
import { Button } from "./ui/button";
import { ScheduleDemoModal } from "./ui/ScheduleDemoModal";
import colorAndBlackLogo from "/logos/color_and_white.png";

export function Footer() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);

  return (
    <>
      <footer className="w-full bg-[#020609] z-10">
        {/* Navigation and Demo Section */}
        <div className="w-full px-[5%] py-6 border-b border-white/10">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between">
            {/* Logo - Left side */}
            <div className="flex flex-col items-start max-w-[400px]">
              <a href="/" className="flex items-center mb-4">
                <img
                  src={colorAndBlackLogo}
                  alt="Kikimora Logo"
                  className="h-16 w-auto"
                />
              </a>
              <p className="text-white/60 font-montserrat text-sm leading-relaxed">
                The essential toolset to meet your security and compliance
                objectives. Let us handle the security complexities while you
                focus on your business objectives.
              </p>
            </div>

            {/* Navigation - Center */}
            <div className="flex items-start justify-center gap-12">
              <div className="flex gap-12">
                {/* First column - Main Navigation */}
                <nav className="flex flex-col gap-3">
                  <a
                    href="/"
                    className="text-white/60 hover:text-white font-montserrat text-sm"
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="text-white/60 hover:text-white font-montserrat text-sm"
                  >
                    About us
                  </a>
                  <a
                    href="/developers"
                    className="text-white/60 hover:text-white font-montserrat text-sm"
                  >
                    Developers
                  </a>
                  <a
                    href="/blog"
                    className="text-white/60 hover:text-white font-montserrat text-sm"
                  >
                    Blog
                  </a>
                  <a
                    href="/documentation"
                    className="text-white/60 hover:text-white font-montserrat text-sm"
                  >
                    Documentation
                  </a>
                </nav>
                
                {/* Second column - Product */}
                <nav className="flex flex-col gap-3">
                  <a
                    href="/trykikimora"
                    className="text-white/60 hover:text-white font-montserrat text-sm"
                  >
                    Try Kikimora
                  </a>
                  <a
                    href="/managed-security"
                    className="text-white/60 hover:text-white font-montserrat text-sm"
                  >
                    Managed Security
                  </a>
                  <a
                    href="/mssp"
                    className="text-white/60 hover:text-white font-montserrat text-sm"
                  >
                    MSSP
                  </a>
                  <a
                    href="/security-bundle"
                    className="text-white/60 hover:text-white font-montserrat text-sm"
                  >
                    Security Bundle
                  </a>
                </nav>
                
                {/* Third column - Use Cases */}
                <nav className="flex flex-col gap-3">
                  <a
                    href="/startup"
                    className="text-white/60 hover:text-white font-montserrat text-sm"
                  >
                    Startup
                  </a>
                  <a
                    href="/healthcare"
                    className="text-white/60 hover:text-white font-montserrat text-sm"
                  >
                    Healthcare
                  </a>
                  <a
                    href="/fintech"
                    className="text-white/60 hover:text-white font-montserrat text-sm"
                  >
                    Fintech
                  </a>
                  <a
                    href="/sme"
                    className="text-white/60 hover:text-white font-montserrat text-sm"
                  >
                    SME
                  </a>
                  <a
                    href="/ot-security"
                    className="text-white/60 hover:text-white font-montserrat text-sm"
                  >
                    OT Security
                  </a>
                </nav>
              </div>
            </div>

            {/* Demo section - Right side */}
            <div className="flex flex-col items-center justify-center gap-4">
              <span className="text-white/60 font-montserrat text-sm text-center max-w-[180px] whitespace-pre-line">
                {"Request a demo to see\nthe full power of Kikimora"}
              </span>
              <Button
                className="font-montserrat text-sm font-semibold hover:bg-[#00E5BE]/90 whitespace-nowrap"
                onClick={() => setIsScheduleDemoModalOpen(true)}
              >
                Book Demo
              </Button>
            </div>
          </div>
        </div>
        <div className="h-16 max-w-[1920px] mx-auto px-[10%] flex items-center justify-between">
          {/* Left side - Social Media Icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/kikimora.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#29ABE2] transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/kikimora-io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#29ABE2] transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/people/Kikimoraio/100065283930889/?_rdr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#29ABE2] transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#29ABE2] transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>

          {/* Middle - Copyright Text */}
          <div className="text-white text-sm font-montserrat">
            © 2025 Kikimora. All rights reserved.
          </div>

          {/* Right side - Policy Links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsPrivacyModalOpen(true)}
              className="text-white text-sm hover:text-[#29ABE2] transition-colors font-montserrat bg-transparent border-none cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setIsCookieModalOpen(true)}
              className="text-white text-sm hover:text-[#29ABE2] transition-colors font-montserrat bg-transparent border-none cursor-pointer"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />

      {/* Cookie Policy Modal */}
      <CookiePolicyModal
        isOpen={isCookieModalOpen}
        onClose={() => setIsCookieModalOpen(false)}
      />

      {/* Schedule Demo Modal */}
      <ScheduleDemoModal
        isOpen={isScheduleDemoModalOpen}
        onClose={() => setIsScheduleDemoModalOpen(false)}
      />
    </>
  );
}
