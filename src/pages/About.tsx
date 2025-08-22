import { AboutHeader } from "../components/about/AboutHeader";
import { MissionSection } from "../components/about/MissionSection";
import { StatsSection } from "../components/managed-security/StatsSection";
import { AdvantagesSection } from "../components/managed-security/AdvantagesSection";
import { RecentSecurityStatisticsSection } from "../components/managed-security/RecentSecurityStatisticsSection";
import { InteractiveApproachSection } from "../components/managed-security/InteractiveApproachSection";
import { WhyWeExistSection } from "../components/about/WhyWeExistSection";
import { BeginSecurityJourneySection } from "../components/about/BeginSecurityJourneySection";

export function About() {
  return (
    <div className="w-[99.1vw]">
      <AboutHeader />
      <MissionSection />
      <StatsSection />
      <AdvantagesSection />
      <RecentSecurityStatisticsSection />
      <InteractiveApproachSection />
      <WhyWeExistSection />
      <BeginSecurityJourneySection />
    </div>
  );
}
