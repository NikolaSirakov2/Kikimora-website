import { Team } from "@/components/about/Team";
import { AboutTeam } from "@/components/about/AboutTeam";
import { Journey } from "@/components/about/Journey";
import { Partners } from "@/components/about/Partners";
import { People } from "@/components/about/People";
import { Investors } from "@/components/about/Investors";
import { InvestmentCTA } from "@/components/about/InvestmentCTA";
import { InvestorTestimonials } from "@/components/about/InvestorTestimonials";
import { News } from "@/components/about/News";
import { SocialFollow } from "@/components/about/SocialFollow";
import { GetInTouch } from "@/components/shared/GetInTouch";

export function About() {
  return (
    <div className="w-[99.1vw]">
      <Team />
      <AboutTeam />
      <Journey />
      <Partners />
      <People />
      <Investors />
      <InvestmentCTA />
      <InvestorTestimonials />
      <News />
      <SocialFollow />
      <GetInTouch />
      {/* Other About page components will be added here */}
    </div>
  );
}
