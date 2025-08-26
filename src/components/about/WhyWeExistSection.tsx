import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function WhyWeExistSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Why We Exist: To Eliminate the Security Burden
        </h2>
        <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto">
          In today's digital world, cybersecurity is essential, but it has
          become a significant burden for businesses of all sizes. Companies are
          forced to navigate a complex market of disconnected tools, facing the
          constant threat of evolving attacks. Kikimora was founded with a clear
          mission: to replace this complexity with clarity. We believe that
          world-class security should be accessible, adaptable, and grow
          alongside your ambition.
        </p>
      </div>
    </AnimatedBackground>
  );
}
