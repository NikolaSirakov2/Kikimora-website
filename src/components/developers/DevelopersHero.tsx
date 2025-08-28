import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function DevelopersHero() {
  return (
    <AnimatedBackground className="relative">
      <div className="px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative z-10">
        {/* Main heading */}
        <h1 className="text-5xl text-white   text-center max-w-5xl mx-auto leading-tight mb-6 mt-20">
          Empower your application with advanced security
        </h1>

        {/* Subtitle */}
        <p className="text-white/60 text-lg font-montserrat text-center max-w-3xl mx-auto mb-10">
          Build secure applications with our comprehensive API and developer
          tools. Integrate enterprise-grade security features with just a few
          lines of code.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 mb-20">
          <Button
            className="rounded-lg px-6 py-3 font-montserrat font-semibold flex items-center gap-2"
            onClick={() =>
              window.open(
                "https://meetings.hubspot.com/oleg-antonov/meeting-with-socyber-kikimora",
                "_blank"
              )
            }
          >
            Get Started
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="rounded-lg px-6 py-3 font-montserrat font-semibold"
            onClick={() =>
              window.open(
                "https://meetings.hubspot.com/oleg-antonov/meeting-with-socyber-kikimora",
                "_blank"
              )
            }
          >
            Book a Consultation
          </Button>
        </div>
      </div>
    </AnimatedBackground>
  );
}
