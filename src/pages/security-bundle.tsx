import React, { useRef } from "react";
import { DiscoveryCard } from "../components/ui/DiscoveryCard";
import { SecurityTrainingCard } from "../components/ui/SecurityTrainingCard";
import { InformationGatheringCard } from "../components/ui/InformationGatheringCard";
import { SecurityAssessmentCard } from "../components/ui/SecurityAssessmentCard";
import { DefenseMechanismsCard } from "../components/ui/DefenseMechanismsCard";
import { AnimatedBackground } from "../components/ui/AnimatedBackground";
import { RiBox3Fill } from "react-icons/ri";
// import { LoginCard } from "../components/ui/LoginCard";

const SecurityBundle: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLImageElement>(null);

  return (
    <AnimatedBackground className="min-h-screen w-[99.1vw]">
      {/* Hero Section */}
      <section className="mt-10 pt-12">
        <div className="max-w-[1300px] mx-auto py-20 flex flex-col md:flex-row gap-8 items-start relative">
          {/* Security Center Image and Cards */}
          <div className="flex-1 flex justify-center items-center relative">
            {/* Main Security Center Image */}
            <img
              ref={laptopRef}
              src="/security-centre.svg"
              alt="Security Center"
              className="w-[80vw] md:w-[40vw] h-[70vh] object-contain mb-40"
            />

            {/* Red Cubes positioned directly on the image */}
            {/* Discovery Card - Top Left area of the image */}
            <div
              ref={cardRef}
              className="absolute z-10"
              style={{
                top: "15%",
                left: "10%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <DiscoveryCard />
            </div>

            {/* Security Training Card - Left side of the image */}
            <div
              className="absolute z-10"
              style={{
                top: "45%",
                left: "5%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <SecurityTrainingCard />
            </div>

            {/* Information Gathering Card - Top Right area of the image */}
            <div
              className="absolute z-10"
              style={{
                top: "20%",
                right: "0%",
                transform: "translate(50%, -50%)",
              }}
            >
              <InformationGatheringCard />
            </div>

            {/* Security Assessment Card - Right side of the image */}
            <div
              className="absolute z-10"
              style={{
                top: "55%",
                right: "0%",
                transform: "translate(50%, -50%)",
              }}
            >
              <SecurityAssessmentCard />
            </div>

            {/* Defense Mechanisms Card - Bottom center of the image */}
            <div
              className="absolute z-10"
              style={{
                top: "85%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <DefenseMechanismsCard />
            </div>

            {/* Independent Red Cubes in Original Positions */}
            {/* Red Cube 1 - Top Left area of the image */}
            <div
              className="absolute z-5"
              style={{
                top: "23%",
                left: "20%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <RiBox3Fill className="w-6 h-6 text-red-500 drop-shadow-lg hover:text-red-400 transition-colors duration-200" />
            </div>

            {/* Red Cube 2 - Left side of the image */}
            <div
              className="absolute z-5"
              style={{
                top: "57%",
                left: "22%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <RiBox3Fill className="w-6 h-6 text-red-500 drop-shadow-lg hover:text-red-400 transition-colors duration-200" />
            </div>

            {/* Red Cube 3 - Top Right area of the image */}
            <div
              className="absolute z-5"
              style={{
                top: "29%",
                right: "15%",
                transform: "translate(50%, -50%)",
              }}
            >
              <RiBox3Fill className="w-6 h-6 text-red-500 drop-shadow-lg hover:text-red-400 transition-colors duration-200" />
            </div>

            {/* Red Cube 4 - Right side of the image */}
            <div
              className="absolute z-5"
              style={{
                top: "48%",
                right: "17%",
                transform: "translate(50%, -50%)",
              }}
            >
              <RiBox3Fill className="w-6 h-6 text-red-500 drop-shadow-lg hover:text-red-400 transition-colors duration-200" />
            </div>

            {/* Red Cube 5 - Bottom center of the image */}
            <div
              className="absolute z-5"
              style={{
                top: "70%",
                left: "55%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <RiBox3Fill className="w-6 h-6 text-red-500 drop-shadow-lg hover:text-red-400 transition-colors duration-200" />
            </div>

            {/* Connection Lines from Cards to Red Cubes */}
            {/* Line 1: Discovery Card (15%, 10%) to Red Cube 1 (23%, 20%) */}
            <div
              className="absolute z-4"
              style={{
                top: "15%",
                left: "13%",
                width: "9%",
                height: "2px",
                background: "linear-gradient(135deg, #dc2626, #ef4444)",
                transform: "rotate(38deg)",
                transformOrigin: "0 0",
                boxShadow: "0 0 4px rgba(239, 68, 68, 0.6)",
              }}
            />

            {/* Line 2: Security Training Card (45%, 5%) to Red Cube 2 (57%, 22%) */}
            <div
              className="absolute z-4"
              style={{
                top: "45%",
                left: "10%",
                width: "15%",
                height: "2px",
                background: "linear-gradient(90deg, #dc2626, #ef4444)",
                transform: "rotate(35deg)",
                transformOrigin: "0 0",
                boxShadow: "0 0 4px rgba(239, 68, 68, 0.6)",
              }}
            />

            {/* Line 3: Information Gathering Card (20%, right: 0%) to Red Cube 3 (29%, right: 15%) */}
            <div
              className="absolute z-4"
              style={{
                top: "20%",
                right: "0%",
                width: "16%",
                height: "2px",
                background: "linear-gradient(90deg, #dc2626, #ef4444)",
                transform: "rotate(-25deg)",
                transformOrigin: "100% 0",
                boxShadow: "0 0 4px rgba(239, 68, 68, 0.6)",
              }}
            />

            {/* Line 4: Security Assessment Card (55%, right: 0%) to Red Cube 4 (48%, right: 17%) */}
            <div
              className="absolute z-4"
              style={{
                top: "55%",
                right: "0%",
                width: "17%",
                height: "2px",
                background: "linear-gradient(90deg, #dc2626, #ef4444)",
                transform: "rotate(16deg)",
                transformOrigin: "100% 0",
                boxShadow: "0 0 4px rgba(239, 68, 68, 0.6)",
              }}
            />

            {/* Line 5: Defense Mechanisms Card (85%, 50%) to Red Cube 5 (70%, 55%) */}
            <div
              className="absolute z-4"
              style={{
                top: "85%",
                left: "53%",
                width: "11%",
                height: "2px",
                background: "linear-gradient(90deg, #dc2626, #ef4444)",
                transform: "rotate(-80deg)",
                transformOrigin: "0 0",
                boxShadow: "0 0 4px rgba(239, 68, 68, 0.6)",
              }}
            />
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default SecurityBundle;
