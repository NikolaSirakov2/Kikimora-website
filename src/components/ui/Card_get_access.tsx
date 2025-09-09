import React from "react";

interface CardGetAccessProps {
  className?: string;
}

const Card_get_access: React.FC<CardGetAccessProps> = ({ className = "" }) => {
  return (
    <div
      className={`bg-gray-900 rounded-lg p-8 max-w-md mx-auto shadow-2xl ${className}`}
    >
      {/* Heading */}
      <h2 className="text-2xl font-bold text-white mb-4 text-center">
        Start Exploring Now
      </h2>

      {/* Body Text */}
      <div className="text-white text-center mb-6 space-y-2">
        <p className="text-sm leading-relaxed">
          Get a feel for the platform with our free Community
        </p>
        <p className="text-sm leading-relaxed">
          Edition. Scan up to 30 assets and see your security
        </p>
        <p className="text-sm leading-relaxed">
          posture today. No credit card required.
        </p>
      </div>

      {/* Call to Action Button */}
      <div className="flex justify-center">
        <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          Get Free Community Access
        </button>
      </div>
    </div>
  );
};

export default Card_get_access;
