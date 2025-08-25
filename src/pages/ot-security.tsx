import { OTSecurityHero } from "@/components/ot-security/OTSecurityHero";
import { RiskCardsSection } from "@/components/ot-security/RiskCardsSection";
import { SecurityPlatformSection } from "@/components/ot-security/SecurityPlatformSection";
import { OTSecurityFeatureSection } from "@/components/ot-security/OTSecurityFeatureSection";
import { PartnershipSection } from "@/components/ot-security/PartnershipSection";
import { FinancialCaseStudySection } from "@/components/ot-security/FinancialCaseStudySection";
import { ScheduleDemoSection } from "@/components/ot-security/ScheduleDemoSection";
import { EUFunding } from "@/components/shared/EUFunding";

function OTSecurityPage() {
  return (
    <main>
      <OTSecurityHero />
      <RiskCardsSection />
      <SecurityPlatformSection />
      <OTSecurityFeatureSection />
      <PartnershipSection />
      <FinancialCaseStudySection />
      <ScheduleDemoSection />
      <EUFunding />
    </main>
  );
}

export { OTSecurityPage as default };
