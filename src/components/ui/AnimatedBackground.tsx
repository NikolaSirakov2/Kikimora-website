import React from "react";

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedBackground({
  children,
  className = "",
}: AnimatedBackgroundProps) {
  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      {/* Animated background glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] animate-pulse rounded-full bg-purple-500/15 blur-3xl delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 h-32 w-[600px] -translate-x-1/2 transform bg-gradient-to-t from-blue-600/30 to-transparent blur-2xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50">
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="animate-pulse">
            <defs>
              <pattern
                id="grid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="rgb(59, 130, 246)"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 animate-bounce rounded-full bg-blue-400 opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
