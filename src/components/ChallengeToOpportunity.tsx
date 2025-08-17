import React from "react";
import { FaUser, FaCheck, FaBolt } from "react-icons/fa";

const ChallengeToOpportunity: React.FC = () => {
  return (
    <div className="bg-[#0f172a] min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Turn Challenges into opportunities
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-[#7dd3fc] mb-16">
          Meet regulatory standards with ease
        </p>

        {/* Three-Step Process */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 mb-16">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#7dd3fc] rounded-full flex items-center justify-center mb-4">
              <FaUser className="w-8 h-8 text-[#0f172a]" />
            </div>
            <p className="text-white text-lg font-medium">
              Meet security standards
            </p>
          </div>

          {/* Arrow 1 */}
          <div className="hidden md:block">
            <svg
              className="w-8 h-8 text-[#7dd3fc]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#22c55e] rounded-full flex items-center justify-center mb-4">
              <FaCheck className="w-8 h-8 text-white" />
            </div>
            <p className="text-white text-lg font-medium">Achieve compliance</p>
          </div>

          {/* Arrow 2 */}
          <div className="hidden md:block">
            <svg
              className="w-8 h-8 text-[#7dd3fc]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#eab308] rounded-full flex items-center justify-center mb-4">
              <FaBolt className="w-8 h-8 text-white" />
            </div>
            <p className="text-white text-lg font-medium">
              Continuous Monitoring
            </p>
          </div>
        </div>

        {/* Testimonial Box */}
        <div className="bg-[#1e293b] rounded-lg p-6 max-w-4xl mx-auto">
          <p className="text-white text-lg leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="text-white text-right font-medium">
            - Lorem Ipsum Customer
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeToOpportunity;
