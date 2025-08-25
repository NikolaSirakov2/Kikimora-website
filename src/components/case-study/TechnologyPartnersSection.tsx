import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

function TechnologyPartnersSection() {
  const technologies = ["Qualys", "Wazuh", "Nessus", "Jira"];

  return (
    <AnimatedBackground className="w-[99.1vw] py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-white/60 mb-6">
          Powered by Best-in-Class Technology
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xl text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </AnimatedBackground>
  );
}

export { TechnologyPartnersSection };
