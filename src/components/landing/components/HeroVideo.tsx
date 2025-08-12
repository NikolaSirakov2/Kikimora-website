import React from "react";
// import useLocalize from '~/hooks/useLocalize'; // TODO: Uncomment when useLocalize is available

// Utility function for class name concatenation
const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(" ");
};

// Types for better type safety
interface HeroVideoProps {
  className?: string;
}

// Main HeroVideo component with TV-like frame and sleek styling
const HeroVideo: React.FC<HeroVideoProps> = ({ className }) => {
  // const localize = useLocalize(); // TODO: Uncomment when useLocalize is available

  return (
    <div className={cn("relative w-full", className)}>
      {/* TV-like frame container */}
      <div className="relative">
        {/* Enhanced ambient glow effects - positioned behind the frame with better blending */}
        <div
          className="absolute -inset-2 inset-y-1 -z-10 animate-pulse rounded-2xl bg-gradient-to-r from-cyan-500/35 via-blue-500/45 to-purple-500/35 opacity-75 blur-xl"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute -inset-4 inset-y-0 -z-10 animate-pulse rounded-2xl bg-gradient-to-r from-cyan-400/20 via-blue-400/25 to-purple-400/20 opacity-55 blur-2xl"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        />
        <div
          className="from-cyan-300/12 to-purple-300/12 absolute -inset-6 inset-y-1 -z-10 animate-pulse rounded-2xl bg-gradient-to-r via-blue-300/15 opacity-35 blur-3xl"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        />

        {/* Outer frame with glow - made thinner and more visible */}
        <div className="relative z-10 rounded-2xl border border-gray-600/60 bg-gradient-to-br from-gray-800 via-gray-900 to-black p-3 shadow-2xl">
          {/* Inner screen bezel - reduced padding */}
          <div className="relative rounded-xl border border-gray-700/40 bg-black p-2 shadow-inner">
            {/* Screen with subtle inner shadow */}
            <div className="relative overflow-hidden rounded-lg border border-gray-800/30 shadow-2xl shadow-black/50">
              {/* Video container */}
              <div className="relative aspect-video w-full">
                {/* Local MP4 video */}
                <video
                  src="/assets/demo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full w-full rounded-lg object-cover"
                  preload="metadata"
                />

                {/* Aesthetic filter overlay */}
                <div className="pointer-events-none absolute inset-0 rounded-lg">
                  {/* Main filter - reduces brightness and adds warmth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-slate-800/15 to-slate-900/25 mix-blend-multiply" />

                  {/* Subtle blue tint for modern look */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/10 via-transparent to-cyan-950/10 mix-blend-overlay" />

                  {/* Grainy texture overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                  />

                  {/* Subtle vignette effect */}
                  <div className="bg-gradient-radial absolute inset-0 from-transparent via-transparent to-black/10" />
                </div>
              </div>
            </div>
          </div>

          {/* TV brand badge */}
          <div className="absolute bottom-1 right-6">
            <div className="rounded-full border border-gray-600/30 bg-gray-700/90 px-2 py-0.5 backdrop-blur-sm">
              <span className="text-xs font-medium text-gray-200">
                KIKIMORA
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
