import { DemoButton } from "../ui/DemoButton";
import { Button } from "../ui/button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

function SecureGrowthSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col items-center py-20 px-2">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-10">
        Ready to Secure Your Growth?
      </h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center">
        {/* Left Card */}
        <div
          className="flex-[2]  bg-white/10 rounded-xl shadow-lg p-8 flex flex-col justify-between items-center text-center min-w-[320px] min-h-[320px]"
          role="region"
          aria-labelledby="explore-now-title"
        >
          <div>
            <h3
              id="explore-now-title"
              className="text-xl font-bold text-white mb-4 font-montserrat"
            >
              Start Exploring Now
            </h3>
            <p className="text-base md:text-lg text-white mb-8 font-montserrat">
              Get a feel for the platform with our free Community Edition. Scan
              up to 30 assets and see your security posture today. No credit
              card required.
            </p>
          </div>
          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-100 font-bold"
            onClick={() =>
              window.open("https://app.kikimora.io/register", "_blank")
            }
            aria-label="Get Free Community Access"
          >
            Get Free Community Access
          </Button>
        </div>
        {/* Right Card */}
        <div
          className="flex-[2]  bg-white/10 rounded-xl shadow-lg p-8 flex flex-col justify-between items-center text-center min-w-[320px] min-h-[320px]"
          role="region"
          aria-labelledby="custom-strategy-title"
        >
          <div>
            <h3
              id="custom-strategy-title"
              className="text-xl font-bold text-white mb-4 font-montserrat"
            >
              Get a Custom Security Strategy
            </h3>
            <p className="text-base md:text-lg text-blue-50 mb-8 font-montserrat">
              Talk to an expert who understands the unique challenges of
              startups. We'll assess your needs and show you exactly how
              Kikimora can help you meet your security and compliance goals.
            </p>
          </div>
          <DemoButton
            variant="default"
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-100 font-bold"
            showIcon={false}
          >
            Book Your Free Demo
          </DemoButton>
        </div>
      </div>
    </AnimatedBackground>
  );
}

export { SecureGrowthSection };
