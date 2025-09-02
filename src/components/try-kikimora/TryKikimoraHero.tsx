import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import React from "react";

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#16213A] rounded-xl p-8 flex flex-col items-center text-center shadow-md min-w-[260px] max-w-[300px] flex-1 border border-[#23b098]/20">
      <div className="mb-4">{icon}</div>
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-[#B0B8D1] text-sm">{description}</p>
    </div>
  );
}

export default function TryKikimoraHero() {
  return (
    <AnimatedBackground className="min-h-[90vh] w-[99.1vw] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center mb-12 pt-24">
        <span className="bg-[#22305A] text-[#7FB3FF] px-6 py-2 rounded-full text-base font-medium mb-6">
          Everything you need
        </span>
        <h1 className="text-white text-5xl md:text-6xl font-semibold text-center mb-6">
          No server? No problem.
        </h1>
        <p className="text-[#B0B8D1] text-lg text-center max-w-2xl mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.
        </p>
        <Button className="px-8 py-3 rounded-lg text-lg font-medium shadow-md">
          Get Started
        </Button>
      </div>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl justify-center">
        <FeatureCard
          icon={
            <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
              <rect width="36" height="36" rx="8" fill="#1B2A4B" />
              <path
                d="M18 10l6 4v8l-6 4-6-4v-8l6-4z"
                stroke="#3EDDCA"
                strokeWidth="2"
              />
            </svg>
          }
          title="Compliance and Regulatory Adherence"
          description="Meet industry standards and regulatory requirements with automated compliance tracking and reporting."
        />
        <FeatureCard
          icon={
            <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
              <rect width="36" height="36" rx="8" fill="#1B2A4B" />
              <circle cx="18" cy="18" r="8" stroke="#3EDDCA" strokeWidth="2" />
              <circle cx="18" cy="18" r="3" fill="#3EDDCA" />
            </svg>
          }
          title="Enhancing Cybersecurity Posture"
          description="Strengthen your security defenses with comprehensive vulnerability management and threat detection."
        />
        <FeatureCard
          icon={
            <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
              <rect width="36" height="36" rx="8" fill="#1B2A4B" />
              <path
                d="M12 24v-2a4 4 0 014-4h4a4 4 0 014 4v2"
                stroke="#3EDDCA"
                strokeWidth="2"
              />
              <circle cx="18" cy="14" r="3" stroke="#3EDDCA" strokeWidth="2" />
            </svg>
          }
          title="Comprehensive View of Assets"
          description="Gain complete visibility into your digital infrastructure with centralized asset management."
        />
        <FeatureCard
          icon={
            <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
              <rect width="36" height="36" rx="8" fill="#1B2A4B" />
              <path d="M18 10v16M10 18h16" stroke="#3EDDCA" strokeWidth="2" />
              <path d="M14 14l8 8" stroke="#3EDDCA" strokeWidth="2" />
            </svg>
          }
          title="Resource Optimization"
          description="Maximize efficiency and reduce costs through intelligent resource allocation and automation."
        />
      </div>
    </AnimatedBackground>
  );
}
