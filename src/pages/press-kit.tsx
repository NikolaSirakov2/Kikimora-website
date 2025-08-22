import { PressKitHero } from "../components/press-kit/PressKitHero";
import { CompanyOverview } from "../components/press-kit/CompanyOverview";
import { MediaAssetsSection } from "../components/press-kit/MediaAssetsSection";
import { ExecutiveTeamSection } from "../components/press-kit/ExecutiveTeamSection";
import { PressReleasesSection } from "../components/press-kit/PressReleasesSection";
import { MediaContactSection } from "../components/press-kit/MediaContactSection";

export default function PressKitPage() {
  return (
    <div className="flex flex-col min-h-screen w-[99.1vw]">
      <PressKitHero />
      <CompanyOverview />
      <MediaAssetsSection />
      <ExecutiveTeamSection />
      <PressReleasesSection />
      <MediaContactSection />
    </div>
  );
}
