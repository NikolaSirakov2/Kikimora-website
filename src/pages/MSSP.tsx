import { MSSPHero } from "@/components/mssp/MSSPHero";
import { MSSPBenefitsSection } from "@/components/mssp/MSSPBenefitsSection";
import { MSSPQandASection } from "@/components/mssp/MSSPQandASection";
import { MSSPBookCallSection } from "@/components/mssp/MSSPBookCallSection";
import { EUFunding } from "@/components/shared/EUFunding";

export function MSSP() {
  return (
    <div className="w-[99.1vw] min-h-screen">
      <MSSPHero />
      <MSSPBenefitsSection />
      <MSSPQandASection />
      <MSSPBookCallSection />
      <EUFunding />
    </div>
  );
}
