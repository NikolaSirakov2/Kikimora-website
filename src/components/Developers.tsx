import React from "react";
import { Button } from "@/components/ui/button";

export function Developers() {
  return (
    <div className="bg-[#001E38] py-24">
      <div className="w-full px-[10%] flex flex-col items-center">
        <div className="w-full max-w-[1200px] bg-[#2A1D4C] rounded-3xl p-12 flex justify-between">
          {/* Left side content */}
          <div className="max-w-[500px]">
            <h2 className="text-5xl text-white font-conthrax mb-4">
              Developers
            </h2>
            <h3 className="text-4xl text-[#29ABE2] font-conthrax mb-6">
              case study
            </h3>
            <p className="text-white/80 text-lg font-montserrat mb-8">
              A robust platform for efficient and comprehensive vulnerability
              management, designed to streamline your cybersecurity processes.
            </p>
            <Button className="bg-[#3EDDCA] text-black hover:bg-[#3EDDCA]/90 rounded-full px-8 py-6 font-montserrat">
              View All
            </Button>
          </div>

          {/* Right side case study card */}
          <div className="bg-[#1B4E5F] rounded-2xl overflow-hidden max-w-[400px]">
            {/* Placeholder image container */}
            <div className="p-6 pt-6 pb-0">
              <div className="w-full h-[200px] bg-[#8C50C8] rounded-lg"></div>
            </div>

            {/* Case study content */}
            <div className="p-6">
              <h4 className="text-white text-2xl font-montserrat mb-4">
                Recent Case Study
              </h4>
              <p className="text-white/80 font-montserrat mb-4">
                Lorem ipsum dolor sit amet consecto tur adipiscing elit semper
                dalar consectetur elementum tempus hac.
              </p>
              <a
                href="#"
                className="text-[#3EDDCA] font-montserrat hover:underline"
              >
                View case study
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
