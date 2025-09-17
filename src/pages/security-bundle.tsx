import React, { useRef } from "react";
import { DiscoveryCard } from "../components/ui/DiscoveryCard";
import { SecurityTrainingCard } from "../components/ui/SecurityTrainingCard";
import { InformationGatheringCard } from "../components/ui/InformationGatheringCard";
import { SecurityAssessmentCard } from "../components/ui/SecurityAssessmentCard";
import { DefenseMechanismsCard } from "../components/ui/DefenseMechanismsCard";
import { AnimatedBackground } from "../components/ui/AnimatedBackground";
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
                left: "20%",
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
                left: "15%",
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
                right: "15%",
                transform: "translate(50%, -50%)",
              }}
            >
              <InformationGatheringCard />
            </div>

            {/* Security Assessment Card - Right side of the image */}
            <div
              className="absolute z-10"
              style={{
                top: "50%",
                right: "10%",
                transform: "translate(50%, -50%)",
              }}
            >
              <SecurityAssessmentCard />
            </div>

            {/* Defense Mechanisms Card - Bottom center of the image */}
            <div
              className="absolute z-10"
              style={{
                top: "75%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <DefenseMechanismsCard />
            </div>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default SecurityBundle;
