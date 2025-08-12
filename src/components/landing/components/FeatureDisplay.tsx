import React from 'react';

// Utility function for class name concatenation
const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Types for better type safety
interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureDisplayProps {
  feature: Feature | null;
  className?: string;
}

const FeatureDisplay: React.FC<FeatureDisplayProps> = ({ feature, className }) => {
  if (!feature) {
    return (
      <div className={cn('py-8 text-center', className)}>
        <p className="text-sm text-gray-500">Click an icon to learn more about our capabilities</p>
      </div>
    );
  }

  return (
    <div className={cn('space-y-3 py-8 text-center', className)}>
      <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
      <p className="mx-auto max-w-2xl leading-relaxed text-gray-400">{feature.description}</p>
    </div>
  );
};

export default FeatureDisplay;
