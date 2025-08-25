import { Cloud, Users, Lock } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

function DilemmaSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] py-16 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
        The Startup's Dilemma
      </h2>
      <p className="text-center text-base md:text-lg font-medium text-red-600 mb-12 max-w-2xl mx-auto px-4">
        Startups are 250% more likely to be targeted by cyberattacks. Your
        agility is your strength, but it's also your biggest vulnerability.
      </p>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch w-full max-w-6xl px-4">
        {/* Card 1 */}
        <div className="flex-1 bg-white rounded-2xl shadow-md flex flex-col items-start px-8 py-10 min-w-[294px] max-w-[360px] mx-auto">
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
            <Cloud className="text-red-400" size={36} strokeWidth={2.2} />
          </span>
          <h3 className="text-lg font-bold text-gray-900 mb-2 text-left">
            The Sprawling Attack Surface
          </h3>
          <p className="text-gray-600 text-left text-base">
            Your modern stack of SaaS tools, APIs, and cloud servers creates
            endless, often unseen, entry points for attackers.
          </p>
        </div>
        {/* Card 2 */}
        <div className="flex-1 bg-white rounded-2xl shadow-md flex flex-col items-start px-8 py-10 min-w-[294px] max-w-[360px] mx-auto">
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-4">
            <Users className="text-orange-400" size={36} strokeWidth={2.2} />
          </span>
          <h3 className="text-lg font-bold text-gray-900 mb-2 text-left">
            The Critical Human Element
          </h3>
          <p className="text-gray-600 text-left text-base">
            With 82% of breaches involving a human element, sophisticated
            phishing attacks target your team—your most valuable asset.
          </p>
        </div>
        {/* Card 3 */}
        <div className="flex-1 bg-white rounded-2xl shadow-md flex flex-col items-start px-8 py-10 min-w-[294px] max-w-[360px] mx-auto">
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#31c9b7]/20 mb-4">
            <Lock className="text-[#31c9b7]" size={36} strokeWidth={2.2} />
          </span>
          <h3 className="text-lg font-bold text-gray-900 mb-2 text-left">
            The Enterprise Compliance Wall
          </h3>
          <p className="text-gray-600 text-left text-base">
            Winning enterprise deals means proving you meet standards like ISO
            27001, NIS2, and DORA. Are you prepared to pass the audit?
          </p>
        </div>
      </div>
    </AnimatedBackground>
  );
}

export { DilemmaSection };
