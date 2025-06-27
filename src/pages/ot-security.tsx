import { OTSecurityHero } from "@/components/ot-security/OTSecurityHero";
import { TrustedByCriticalIndustriesSection } from "@/components/ot-security/TrustedByCriticalIndustriesSection";
import { RiskCardsSection } from "@/components/ot-security/RiskCardsSection";
import { SecurityPlatformSection } from "@/components/ot-security/SecurityPlatformSection";
import { OTSecurityFeatureSection } from "@/components/ot-security/OTSecurityFeatureSection";
import { PartnershipSection } from "@/components/ot-security/PartnershipSection";
import { FinancialCaseStudySection } from "@/components/ot-security/FinancialCaseStudySection";
import { ScheduleDemoSection } from "@/components/ot-security/ScheduleDemoSection";
import { EUFunding } from "@/components/shared/EUFunding";

function OTSecurityPage() {
  return (
    <main className="w-[99.2vw]">
      <OTSecurityHero />
      <TrustedByCriticalIndustriesSection />
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
