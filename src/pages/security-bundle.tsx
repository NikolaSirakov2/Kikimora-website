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
      <section className="mt-10 pt-24">
        <div className="max-w-[1300px] mx-auto py-20 flex flex-col md:flex-row gap-8 items-start relative">
          {/* Security Center Image and Cards */}
          <div className="flex-1 flex justify-center items-center relative">
            <img
              ref={laptopRef}
              src="/security-centre.svg"
              alt="Security Center"
              className="w-[80vw] md:w-[40vw] h-[70vh] object-contain mb-40"
            />
            {/* Discovery Card Overlapping */}
            <div
              ref={cardRef}
              className="absolute z-10"
              style={{ top: "100px", left: 50 }}
            >
              <DiscoveryCard />
            </div>
            {/* Security Training Card Overlapping, below DiscoveryCard */}
            <div className="absolute z-10" style={{ top: "400px", left: 40 }}>
              <SecurityTrainingCard />
            </div>
            {/* Information Gathering Card Overlapping, top right */}
            <div className="absolute z-10" style={{ top: "-30px", right: 0 }}>
              <InformationGatheringCard />
            </div>
            {/* Security Assessment Card Overlapping, bottom right */}
            <div className="absolute z-10" style={{ top: "270px", right: 0 }}>
              <SecurityAssessmentCard />
            </div>
            {/* Defense Mechanisms Card at bottom middle */}
            <div className="absolute z-10" style={{ top: "540px", right: 400 }}>
              <DefenseMechanismsCard />
            </div>
            {/* Login Card Overlapping, below SecurityTrainingCard */}
            {/* <div className="absolute z-10" style={{ top: "370px", left: 0 }}>
              <LoginCard />
            </div> */}
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default SecurityBundle;
