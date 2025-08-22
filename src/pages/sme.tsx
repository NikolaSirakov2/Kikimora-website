import SMEHero from "@/components/home/SMEHero";
import { SMEFrontsSection } from "@/components/home/SMEFrontsSection";
import { PlatformFeaturesSection } from "@/components/home/PlatformFeaturesSection";
import { SMEWhyTraditionalSection } from "@/components/home/SMEWhyTraditionalSection";
import { SMEThreatsSection } from "@/components/home/SMEThreatsSection";
import { SMEPlatformPartnershipSection } from "@/components/home/SMEPlatformPartnershipSection";
import { FitForBusinessSection } from "@/components/home/FitForBusinessSection";
import { TrustedByEuropeSection } from "@/components/home/TrustedByEuropeSection";
import { SMEFinalCTASection } from "@/components/home/SMEFinalCTASection";
import { KikimoraAdvantageSection } from "@/components/home/KikimoraAdvantageSection";
import { TwoPathsSection } from "@/components/home/TwoPathsSection";
import { ComparisonChartSection } from "@/components/home/ComparisonChartSection";

function SME() {
  return (
    <main className="w-[99.1vw]">
      <SMEHero />
      <SMEFrontsSection />
      <PlatformFeaturesSection />
      <SMEWhyTraditionalSection />
      <SMEThreatsSection />
      <KikimoraAdvantageSection />
      <FitForBusinessSection />
      <SMEPlatformPartnershipSection />
      <TrustedByEuropeSection />
      <SMEFinalCTASection />
      <TwoPathsSection />
      <ComparisonChartSection />
    </main>
  );
}

export { SME };
