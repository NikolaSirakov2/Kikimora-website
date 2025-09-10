import colorAndBlackLogo from "/public/logos/colorAndBlack.png";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

function TrustedByEuropeSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col items-center py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        Trusted by Growing Businesses Across Europe
      </h2>
      <div className="w-full max-w-6xl bg-blue-50 rounded-xl border border-blue-600 p-8 md:p-12 flex flex-col relative">
        <img
          src={colorAndBlackLogo}
          alt="Kikimora color logo"
          className="absolute top-6 right-6 w-16 h-16 object-contain hidden md:block"
        />
        <div className="flex flex-col md:flex-row gap-8 mb-6">
          <div className="flex-1">
            <h3 className="font-bold mb-1 text-[#111827]">D Commerce Bank</h3>
            <p className="text-sm text-[#374151] mb-4">
              Digital Banking Innovation Leader
            </p>
            <div>
              <h4 className="font-semibold text-[#111827] mb-1">Challenge</h4>
              <p className="text-sm text-[#374151]">
                Needed to centralize security assessments, prioritize
                vulnerabilities effectively, and gain full visibility into their
                security posture across all digital banking operations.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-[#111827] mb-1">Results</h4>
            <ul className="list-disc pl-5 text-sm text-[#374151] space-y-1">
              <li>Optimized security assessment process</li>
              <li>Dramatically reduced response time</li>
              <li>Achieved full security visibility</li>
            </ul>
          </div>
        </div>
        <blockquote className="border-l-4 border-blue-600 bg-white p-4 rounded-md mb-2">
          <p className="font-semibold text-[#111827] mb-2">
            "Kikimora has transformed how we approach cybersecurity. The
            platform gives us the clarity and control we need to protect our
            digital banking services while meeting all regulatory requirements."
          </p>
          <footer className="text-sm text-[#374151] mt-2">
            — Stefan Tsonev, Head of IT Security, D Commerce Bank
          </footer>
        </blockquote>
      </div>
      <div className="mt-12 flex flex-col items-center">
        <p className="text-lg font-montserrat text-white mb-4 text-center">
          Trusted by innovative companies across Europe
        </p>
        <div className="flex flex-row flex-wrap gap-12 items-center justify-center text-2xl font-bold text-gray-500">
          <span className="tracking-wide">DRONAMICS</span>
          <span className="tracking-wide">CASHWAVE</span>
          <span className="tracking-wide">tbi bank</span>
        </div>
      </div>
    </AnimatedBackground>
  );
}

export { TrustedByEuropeSection };
