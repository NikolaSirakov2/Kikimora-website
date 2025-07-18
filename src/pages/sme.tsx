import  SMEHero  from "@/components/home/SMEHero";
import { SMEFrontsSection } from "@/components/home/SMEFrontsSection";
import { PlatformFeaturesSection } from "@/components/home/PlatformFeaturesSection";
import { SMEWhyTraditionalSection } from "@/components/home/SMEWhyTraditionalSection";
import { SMEPlatformPartnershipSection } from "@/components/home/SMEPlatformPartnershipSection";
import { FitForBusinessSection } from "@/components/home/FitForBusinessSection";
import { TrustedByEuropeSection } from "@/components/home/TrustedByEuropeSection";
import { SMEFinalCTASection } from "@/components/home/SMEFinalCTASection";
import { EUFunding } from "@/components/shared/EUFunding";


function SME() {
  return (
    <main className="w-[99.1vw]">
      <SMEHero />
      <SMEFrontsSection />
      <PlatformFeaturesSection />
      <SMEWhyTraditionalSection />
      <FitForBusinessSection />
      <SMEPlatformPartnershipSection />
      <TrustedByEuropeSection />
      <SMEFinalCTASection />
      <EUFunding />
    </main>
  );
}

export { SME };
