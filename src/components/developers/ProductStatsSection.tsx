import React from "react";

export function ProductStatsSection() {
  return (
    <section
      className="w-full bg-gradient-to-br from-[#172347] to-[#1a2a4e] py-20 flex flex-col items-center"
      aria-labelledby="product-stats-title"
    >
      <h2
        id="product-stats-title"
        className="text-3xl md:text-4xl font-bold text-center text-white mb-4"
      >
        Check out the product
      </h2>
      <p className="text-base md:text-lg text-center text-white/80 mb-12 max-w-xl">
        Trusted by developers worldwide for reliable security solutions
      </p>
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
        <div className="flex-1 min-w-[220px] bg-white/10 rounded-xl px-8 py-10 flex flex-col items-center shadow-md">
          <span className="text-4xl md:text-5xl font-bold text-[#2de0c2] mb-2">
            99%
          </span>
          <span className="text-lg text-white/90">Uptime</span>
        </div>
        <div className="flex-1 min-w-[220px] bg-white/10 rounded-xl px-8 py-10 flex flex-col items-center shadow-md">
          <span className="text-4xl md:text-5xl font-bold text-[#2de0c2] mb-2">
            &lt; 1s
          </span>
          <span className="text-lg text-white/90">Response Time</span>
        </div>
        <div className="flex-1 min-w-[220px] bg-white/10 rounded-xl px-8 py-10 flex flex-col items-center shadow-md">
          <span className="text-4xl md:text-5xl font-bold text-[#2de0c2] mb-2">
            24/7
          </span>
          <span className="text-lg text-white/90">Support</span>
        </div>
      </div>
    </section>
  );
}
