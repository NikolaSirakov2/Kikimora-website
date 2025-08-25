import { HealthcareHeroSection } from "../components/case-study/HealthcareHeroSection";
import { TechnologyPartnersSection } from "../components/case-study/TechnologyPartnersSection";
import { HealthcareThreatsSection } from "../components/case-study/HealthcareThreatsSection";
import { KikimoraDifferenceSection } from "../components/case-study/KikimoraDifferenceSection";
import { CyberResilienceJourneySection } from "../components/case-study/CyberResilienceJourneySection";
import { ComplianceSection } from "@/components/case-study/ComplianceSection";
import { UnifiedDefenseSection } from "@/components/case-study/UnifiedDefenseSection";
import { EUFunding } from "@/components/shared/EUFunding";
import { FreeAssessmentSection } from "@/components/case-study/FreeAssessmentSection";

function Healthcare() {
  return (
    <main>
      <HealthcareHeroSection />
      <TechnologyPartnersSection />
      <HealthcareThreatsSection />
      <UnifiedDefenseSection />
      <ComplianceSection />
      <KikimoraDifferenceSection />
      <CyberResilienceJourneySection />
      <FreeAssessmentSection />
      <EUFunding />
    </main>
  );
}

export { Healthcare };
