import React from "react";
import { AboutHero } from "@/components/about/AboutHero";
import { Team } from "@/components/about/Team";
import { AboutTeam } from "@/components/about/AboutTeam";
import { Journey } from "@/components/about/Journey";
import { Partners } from "@/components/about/Partners";
import { People } from "@/components/about/People";
import { Investors } from "@/components/about/Investors";
import { InvestmentCTA } from "@/components/about/InvestmentCTA";
import { InvestorTestimonials } from "@/components/about/InvestorTestimonials";

export function About() {
  return (
    <div className="w-full">
      <AboutHero />
      <Team />
      <AboutTeam />
      <Journey />
      <Partners />
      <People />
      <Investors />
      <InvestmentCTA />
      <InvestorTestimonials />
      {/* Other About page components will be added here */}
    </div>
  );
}
