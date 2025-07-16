import { MSSPHero } from "@/components/mssp/MSSPHero";
import { MSSPBenefitsSection } from "@/components/mssp/MSSPBenefitsSection";
import { MSSPQandASection } from "@/components/mssp/MSSPQandASection";
import { MSSPBookCallSection } from "@/components/mssp/MSSPBookCallSection";

export function MSSP() {
  return (
    <div className="w-[99.1vw] min-h-screen bg-[#001324]">
      <MSSPHero />
      <MSSPBenefitsSection />
      <MSSPQandASection />
      <MSSPBookCallSection />
    </div>
  );
}
