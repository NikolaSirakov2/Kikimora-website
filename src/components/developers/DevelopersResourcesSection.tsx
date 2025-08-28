import { FiCode } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

interface ResourceCardProps {
  title: string;
  description: string;
  onClick: () => void;
}

function ResourceCard({ title, description, onClick }: ResourceCardProps) {
  return (
    <div className="bg-white/5 rounded-xl p-6 flex flex-col justify-between shadow-md min-h-[140px]">
      <div>
        <h3 className="text-white font-bold text-lg mb-1 font-montserrat">
          {title}
        </h3>
        <p className="text-white/70 text-sm mb-4 font-montserrat">
          {description}
        </p>
      </div>
      <Button
        variant="outline"
        className="border-primary text-primary hover:bg-primary/10 font-montserrat font-semibold px-4 py-2 rounded-lg w-fit"
        onClick={onClick}
        aria-label={`Learn more about ${title}`}
      >
        Learn More
      </Button>
    </div>
  );
}

export function DevelopersResourcesSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] py-16 flex justify-center items-center">
      <div className="w-full max-w-6xl bg-[#22325a] rounded-2xl px-6 py-10 md:px-12 md:py-14 shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <FiCode size={28} color="#00E5BE" aria-hidden="true" />
          <h2 className="text-3xl md:text-4xl font-bold text-white  ">
            Developers
          </h2>
        </div>
        <p className="text-white/80 text-base md:text-lg font-montserrat mb-8">
          Get building
        </p>
        <p className="text-white/80 text-base md:text-lg font-montserrat mb-8">
          Everything you need to integrate Kikimora's security platform into
          your applications. From comprehensive APIs to detailed documentation,
          we've got you covered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ResourceCard
            title="API Documentation"
            description="Complete REST API reference with examples and authentication guides."
            onClick={() => window.open("#api-docs", "_blank")}
          />
          <ResourceCard
            title="SDK Libraries"
            description="Official SDKs for Python, JavaScript, Go, and other popular languages."
            onClick={() => window.open("#sdk-libraries", "_blank")}
          />
          <ResourceCard
            title="Code Examples"
            description="Sample implementations and integration patterns for common use cases."
            onClick={() => window.open("#code-examples", "_blank")}
          />
          <ResourceCard
            title="Webhooks Guide"
            description="Real-time event notifications to keep your applications in sync."
            onClick={() => window.open("#webhooks-guide", "_blank")}
          />
        </div>
      </div>
    </AnimatedBackground>
  );
}
