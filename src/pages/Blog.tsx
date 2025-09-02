import { BlogHero } from "@/components/blog/BlogHero";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function Blog() {
  return (
    <AnimatedBackground className="w-[99.1vw]">
      <div className="pt-24">
        <BlogHero />
      </div>
    </AnimatedBackground>
  );
}
