import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

function FeaturesCaseStudy() {
  return (
    <AnimatedBackground className="w-[99.1vw] py-16 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-4xl font-bold text-white mb-12 text-center">
        Solutions That Scale With Your Organization
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full">
          <h3 className="text-2xl font-bold text-[#071C2C] mb-4 text-center">
            Kikimora Community
          </h3>
          <p className="text-[#071C2C] text-base mb-6 text-center flex-grow">
            Ideal for emerging companies. Establish a foundational security
            baseline with monthly scans and essential compliance templates.
          </p>
          <div className="mt-auto">
            <div className="text-2xl font-extrabold text-[#31c9b7] mb-4 text-center">
              Free
            </div>
            <div className="flex flex-col gap-2">
              <Button variant="outline" className="w-full font-semibold">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full">
          <h3 className="text-2xl font-bold text-[#071C2C] mb-4 text-center">
            Kikimora Platform
          </h3>
          <p className="text-[#071C2C] text-base mb-6 text-center flex-grow">
            For scaling businesses with in-house teams. A powerful SaaS platform
            to manage your comprehensive security and compliance program.
            Pricing scales transparently with your assets.
          </p>
          <div className="mt-auto">
            <div className="text-2xl font-extrabold text-[#31c9b7] mb-4 text-center">
              Based on Assets
            </div>
            <Button className="w-full font-semibold">
              Explore the Platform
            </Button>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col h-full">
          <h3 className="text-2xl font-bold text-[#071C2C] mb-4 text-center">
            Kikimora Managed Security
          </h3>
          <p className="text-[#071C2C] text-base mb-6 text-center flex-grow">
            For established organizations. Delegate your security operations to
            our expert team for comprehensive, professionally managed protection
            and compliance oversight.
          </p>
          <div className="mt-auto">
            <div className="text-2xl font-extrabold text-[#31c9b7] mb-4 text-center">
              Tiered Plans
            </div>
            <Button className="w-full font-semibold">
              Discover Managed Services
            </Button>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}

export { FeaturesCaseStudy };
