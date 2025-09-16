import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function AboutHeader() {
  return (
    <AnimatedBackground className="w-[99.1vw] py-20 pt-48 flex flex-col items-center justify-center text-center">
      <h1
        className="text-white text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg mt-20"
        aria-label="Security That Scales With You"
      >
        <span className="text-white">Security</span>{" "}
        <span className="text-purple-300">That Scales With You</span>
      </h1>
      <p className="text-gray-300 font-montserrat text-xl md:text-2xl max-w-5xl mx-auto leading-relaxed">
        We are your dedicated partner in cyber resilience, providing a seamless
        security journey from community support to enterprise-grade protection
        so you can focus on what matters most: your growth.
      </p>
    </AnimatedBackground>
  );
}
