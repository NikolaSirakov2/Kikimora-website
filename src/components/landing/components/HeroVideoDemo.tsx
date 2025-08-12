import React, { useState } from "react";
// import useLocalize from '~/hooks/useLocalize'; // TODO: Uncomment when useLocalize is available
import HeroVideo from "./HeroVideo";
import VerticalIconBar from "./VerticalIconBar";
// import FeatureDisplay from './FeatureDisplay'; // TODO: Uncomment when FeatureDisplay is available

// Utility function for class name concatenation
const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(" ");
};

// Types for better type safety
interface HeroVideoSectionProps {
  className?: string;
}

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Main HeroVideoSection component with black background and full-width video
const HeroVideoSection: React.FC<HeroVideoSectionProps> = ({ className }) => {
  // const localize = useLocalize(); // TODO: Uncomment when useLocalize is available
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null); // eslint-disable-line @typescript-eslint/no-unused-vars

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-black px-6 py-40",
        // Subtle texture overlay for depth
        "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.02),transparent_70%)]",
        className
      )}
    >
      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Motivational text above video */}
        <div className="mb-12 text-center">
          <p className="text-2xl font-medium text-white sm:text-3xl">
            It's not about saving time.
          </p>
          <p className="mt-2 text-xl text-gray-500 sm:text-2xl">
            It's about feeling like you're never wasting it.
          </p>
        </div>

        {/* Video section with vertical icon bar */}
        <div className="mb-8 flex items-start gap-8">
          {/* Video takes most of the space */}
          <div className="flex-1">
            <HeroVideo className="w-full" />
          </div>

          {/* Vertical icon bar on the right */}
          <div className="flex-shrink-0">
            <VerticalIconBar
              onFeatureSelect={setSelectedFeature}
              className="sticky top-8"
            />
          </div>
        </div>

        {/* Feature display under video */}
        {/* <FeatureDisplay feature={selectedFeature} /> */}
      </div>

      {/* Ambient lighting effects */}
      <div
        className="absolute left-1/4 top-1/3 h-3 w-3 animate-pulse rounded-full bg-cyan-400/20 blur-sm"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute right-1/4 top-1/2 h-2 w-2 animate-pulse rounded-full bg-blue-400/15 blur-sm"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 h-2.5 w-2.5 animate-pulse rounded-full bg-purple-400/10 blur-sm"
        style={{ animationDelay: "4s" }}
      />
    </section>
  );
};

// Export with the original name for backward compatibility
export const HeroVideoDialogDemoTopInBottomOut = HeroVideoSection;

export default HeroVideoSection;
