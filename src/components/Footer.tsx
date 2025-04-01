import React from "react";
import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-16 bg-[#00539B] flex items-center justify-between px-48">
      {/* Left side - Social Media Icons */}
      <div className="flex items-center gap-6">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#29ABE2] transition-colors"
        >
          <Instagram className="h-5 w-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#29ABE2] transition-colors"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="https://facebook.com"
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
        © 2024 Kikimora. All rights reserved.
      </div>

      {/* Right side - Policy Links */}
      <div className="flex items-center gap-6">
        <Link
          to="/privacy"
          className="text-white text-sm hover:text-[#29ABE2] transition-colors font-montserrat"
        >
          Privacy Policy
        </Link>
        <Link
          to="/terms"
          className="text-white text-sm hover:text-[#29ABE2] transition-colors font-montserrat"
        >
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
}
