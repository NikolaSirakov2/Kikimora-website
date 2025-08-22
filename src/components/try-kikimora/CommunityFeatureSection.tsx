
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const checkIcon = (
  <svg
    className="text-[#3EDDCA]"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="12" fill="#E6F9F6" />
    <path
      d="M7 12.5l3 3 7-7"
      stroke="#3EDDCA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const userIcon = (
  <svg
    className="text-[#3970F7]"
    width="28"
    height="28"
    fill="none"
    viewBox="0 0 28 28"
  >
    <circle cx="14" cy="14" r="14" fill="#E6F0FA" />
    <path
      d="M14 15.5c2.485 0 4.5-2.015 4.5-4.5S16.485 6.5 14 6.5 9.5 8.515 9.5 11s2.015 4.5 4.5 4.5zm0 2c-3.038 0-9 1.52-9 4.5V24h18v-2c0-2.98-5.962-4.5-9-4.5z"
      fill="#3970F7"
    />
  </svg>
);

const freeTrialFeatures = [
  "Onboarding Guide",
  "Access to scanners and tools",
  "Expert support",
  "No fees or cancellation requirements",
];

const communityEssentials = [
  "ISO27001, NIST templates",
  "1 Custom Compliance Agent",
  "1 monthly Network Scan",
  "1 monthly Web Application Scan",
  "Up to 30 assets",
];

export default function CommunityFeatureSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col items-center justify-center py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
        Explore Kikimora Community
      </h1>
      <p className="text-white/80 text-lg text-center mb-10 max-w-2xl">
        Kikimora Community is a lightweight client allowing you to improve your
        security posture at no starting cost.
      </p>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center">
        {/* Free Trial Card */}
        <div className="bg-gray-100 rounded-xl p-8 flex-1 min-w-[320px] shadow-md flex flex-col">
          <div className="flex items-center mb-4">
            {checkIcon}
            <span className="text-xl font-semibold text-[#181F3A] ml-2">
              Free Trial Includes:
            </span>
          </div>
          <ul className="space-y-4 mt-2">
            {freeTrialFeatures.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center text-[#4B5563] text-base"
              >
                <svg
                  className="mr-2"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <circle cx="10" cy="10" r="10" fill="#E6F9F6" />
                  <path
                    d="M6 10.5l2 2 5-5"
                    stroke="#3EDDCA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        {/* Community Essentials Card */}
        <div className="bg-gray-100 rounded-xl p-8 flex-1 min-w-[320px] shadow-md flex flex-col">
          <div className="flex items-center mb-4">
            {userIcon}
            <span className="text-xl font-semibold text-[#181F3A] ml-2">
              Community includes all the essentials:
            </span>
          </div>
          <ul className="space-y-4 mt-2">
            {communityEssentials.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center text-[#4B5563] text-base"
              >
                <svg
                  className="mr-2"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <circle cx="10" cy="10" r="10" fill="#E6F0FA" />
                  <path
                    d="M6 10.5l2 2 5-5"
                    stroke="#3970F7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedBackground>
  );
}
