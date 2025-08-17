import React from "react";
import { Lock } from "lucide-react";

interface BulletPointsCardProps {
  title: string;
  description: string;
  bulletPoints: string[];
  icon?: React.ReactNode;
  className?: string;
}

const BulletPointsCard: React.FC<BulletPointsCardProps> = ({
  title,
  description,
  bulletPoints,
  icon,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className}`}
    >
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
          {icon || <Lock className="w-6 h-6 text-white" />}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-center text-sm mb-6 leading-relaxed">
        {description}
      </p>

      {/* Bullet Points */}
      <ul className="space-y-2">
        {bulletPoints.map((point, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 text-sm">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletPointsCard;
