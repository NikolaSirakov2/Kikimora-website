
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function MissionSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col items-center justify-center py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left: Mission Text */}
      <div className="flex-1 max-w-xl text-left">
        <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
        <p className="text-lg text-white/80 mb-4">
          At Kikimora, we believe that cybersecurity shouldn't be a burden. Our
          mission is to provide world-class managed security services that give
          you peace of mind and let you focus on growing your business.
        </p>
        <p className="text-lg text-white/80">
          With over a decade of experience in cybersecurity, our team of experts
          works around the clock to protect your digital assets and ensure your
          business stays secure.
        </p>
      </div>
      {/* Right: Features Grid */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
        {/* Security First */}
        <div className="bg-[#F5F8FE] rounded-xl flex flex-col items-center justify-center p-8 text-center shadow-sm">
          <svg
            className="w-12 h-12 mb-4 text-[#3A66E5]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3l7 4v5c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V7l7-4z"
            />
          </svg>
          <span className="font-semibold text-lg text-[#101C3C]">
            Security First
          </span>
        </div>
        {/* Expert Team */}
        <div className="bg-[#F5F8FE] rounded-xl flex flex-col items-center justify-center p-8 text-center shadow-sm">
          <svg
            className="w-12 h-12 mb-4 text-[#3A66E5]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5a4 4 0 11-8 0 4 4 0 018 0zm6 6v2a2 2 0 01-2 2h-1.5"
            />
          </svg>
          <span className="font-semibold text-lg text-[#101C3C]">
            Expert Team
          </span>
        </div>
        {/* Proven Results */}
        <div className="bg-[#F5F8FE] rounded-xl flex flex-col items-center justify-center p-8 text-center shadow-sm">
          <svg
            className="w-12 h-12 mb-4 text-[#3A66E5]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 9V7a5 5 0 00-10 0v2a5 5 0 0010 0zm-2 6h-6a2 2 0 00-2 2v2a2 2 0 002 2h6a2 2 0 002-2v-2a2 2 0 00-2-2z"
            />
          </svg>
          <span className="font-semibold text-lg text-[#101C3C]">
            Proven Results
          </span>
        </div>
        {/* 24/7 Support */}
        <div className="bg-[#F5F8FE] rounded-xl flex flex-col items-center justify-center p-8 text-center shadow-sm">
          <svg
            className="w-12 h-12 mb-4 text-[#3A66E5]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2"
            />
          </svg>
          <span className="font-semibold text-lg text-[#101C3C]">
            24/7 Support
          </span>
        </div>
      </div>
      </div>
    </AnimatedBackground>
  );
}
