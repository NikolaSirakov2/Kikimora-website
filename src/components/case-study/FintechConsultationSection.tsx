import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

function FintechConsultationSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] py-24 flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-white font-bold text-3xl md:text-5xl mb-6">
        Secure Your Financial Innovation
      </h2>
      <p className="text-white/90 max-w-2xl mx-auto text-base md:text-lg mb-8">
        Move beyond spreadsheets and fragmented tools. Unify your security
        posture with the platform and expertise required to scale securely.
        Connect with one of our financial sector security specialists to design
        a security and compliance roadmap tailored to your organization.
      </p>
      <Button
        className="font-semibold py-6 px-8 rounded-lg shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2 text-base md:text-lg"
        onClick={() => window.open("mailto:contact@kikimora.io", "_blank")}
      >
        Request a Consultation
      </Button>
    </AnimatedBackground>
  );
}

export { FintechConsultationSection };
