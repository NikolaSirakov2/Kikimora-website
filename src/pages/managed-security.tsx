import { HeroSection } from "@/components/managed-security/HeroSection";
import { PartnersSection } from "@/components/managed-security/PartnersSection";
import { SecurityFeatures } from "@/components/managed-security/SecurityFeatures";
import { TestimonialSection } from "@/components/managed-security/TestimonialSection";
import { SecureOrganization } from "../components/managed-security/SecureOrganization";
import { PricingSection } from "../components/managed-security/PricingSection";
import { GovernanceSection } from "../components/managed-security/GovernanceSection";
import { SecurityOverview } from "../components/managed-security/SecurityOverview";
import { ConsultationForm } from "../components/managed-security/ConsultationForm";

export default function ManagedSecurity() {
  return (
    <main className="min-h-screen bg-[#001324]">
      <HeroSection
        title="Kikimora Managed Security:"
        subtitle={{
          line1: "SME Cybersecurity.",
          line2: "Simplified.",
        }}
        description="Kikimora Managed Security offers a blend of robust tools, tailored to meet the requirements of growing companies facing the pain of managing complex compliance and cybersecurity tasks."
      />
      <PartnersSection />
      <SecurityFeatures />
      <TestimonialSection />
      <SecureOrganization />
      <PricingSection />
      <GovernanceSection />
      <SecurityOverview />
      <ConsultationForm />
    </main>
  );
}
