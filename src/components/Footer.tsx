import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import { useState } from "react";
import { PrivacyPolicyModal } from "./ui/PrivacyPolicyModal";
import { CookiePolicyModal } from "./ui/CookiePolicyModal";

export function Footer() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);

  return (
    <>
      <footer className="w-full bg-[#020609] z-10">
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
    </>
  );
}
