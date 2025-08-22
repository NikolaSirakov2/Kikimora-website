import TryKikimoraHero from "@/components/try-kikimora/TryKikimoraHero";
import CommunityFeatureSection from "@/components/try-kikimora/CommunityFeatureSection";
import TryKikimoraBenefits from "@/components/try-kikimora/TryKikimoraBenefits";
import QandASection from "@/components/try-kikimora/QandASection";
import BookCallSection from "@/components/try-kikimora/BookCallSection";

export default function TryKikimora() {
  return (
    <main className="w-[99.1vw] flex flex-col items-center justify-center px-4">
      <TryKikimoraHero />
      <CommunityFeatureSection />
      <TryKikimoraBenefits />
      <QandASection />
      <BookCallSection />
    </main>
  );
}
