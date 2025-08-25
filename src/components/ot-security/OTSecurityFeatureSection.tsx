import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const features = [
  {
    heading: "Your Data. Your Network. Your Rules.",
    subheading: (
      <a
        href="#on-premise"
        className="text-[#31c9b7] underline font-semibold"
        aria-label="Achieve Maximum Security with On-Premise Deployment."
      >
        Achieve Maximum Security with On-Premise Deployment.
      </a>
    ),
    description:
      "For critical industrial environments, control is non-negotiable. Cloud-only security solutions are not an option. Kikimora gives you the power of choice. Deploy our entire platform within your own infrastructure for complete data sovereignty and an air-gapped-ready architecture.\n\nMeet the strictest security and compliance mandates without ever sending sensitive operational data off-site. This is your security, under your absolute control.",
    button: {
      label: "Learn About On-Premise Deployment",
      href: "#on-premise",
      color: "bg-[#31c9b7] hover:bg-[#2bb3a3] text-white",
    },
    card: {
      bg: "bg-[#e6f7f5] border-[#b8e8e0]",
      icon: (
        <svg
          width="48"
          height="48"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <rect width="48" height="48" rx="12" fill="#E6F7F5" />
          <path
            d="M24 16a4 4 0 0 1 4 4v2h-8v-2a4 4 0 0 1 4-4Zm-8 6a8 8 0 1 1 16 0v2h1a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h1v-2Zm2 2v2h12v-2a6 6 0 1 0-12 0Zm-3 5v7a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H15a1 1 0 0 0-1 1Z"
            fill="#31c9b7"
          />
        </svg>
      ),
      label: "Secure On-Premise Architecture",
    },
    reverse: false,
  },
  {
    heading: "Go Beyond Compliance. Achieve Demonstrable Governance.",
    subheading: (
      <span className="text-[#22c55e] font-semibold">
        Master NIS2, ISO 27001, and DORA with Automated Tooling.
      </span>
    ),
    description:
      "Don't just aim for compliance, prove it. Kikimora's built-in compliance engine provides pre-built checklists and deployable agents for NIS2 and other key frameworks. Automate evidence collection, generate board-ready reports at the click of a button.\n\nProvide auditors with a single, comprehensive view of your security posture. Turn a complex regulatory burden into a streamlined, manageable process and protect your leadership from liability.",
    button: {
      label: "View Compliance Features",
      href: "#compliance",
      color: "bg-[#22c55e] hover:bg-[#16a34a] text-white",
    },
    card: {
      bg: "bg-[#e7f9ef] border-[#b6e7d0]",
      icon: (
        <svg
          width="48"
          height="48"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <rect width="48" height="48" rx="12" fill="#E7F9EF" />
          <path
            d="M34 18.5l-12 12-6-6"
            stroke="#22c55e"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      label: "NIS2 Compliance Dashboard",
    },
    reverse: true,
    list: [
      "Automated evidence collection",
      "Board-ready compliance reports",
      "Deployable NIS2 agents",
      "Streamlined audit process",
    ],
  },
  {
    heading: "Stop Chasing Every Alert. Focus on What Truly Matters.",
    subheading: (
      <a
        href="#smart-score"
        className="text-[#a21caf] underline font-semibold"
        aria-label="The Kikimora Smart Score for OT-Aware Risk Prioritization."
      >
        The Kikimora Smart Score for OT-Aware Risk Prioritization.
      </a>
    ),
    description:
      "A critical vulnerability on a guest Wi-Fi network is not the same as a moderate one on your primary production line controller. Generic CVSS scores don't understand your operational context.\n\nOur Kikimora Smart Score analyzes vulnerabilities through the lens of your unique business risk—asset criticality, network exposure, and operational impact—so your team can focus their limited resources on fixing the threats that pose a genuine danger to your operations.",
    button: {
      label: "See Smart Score in Action",
      href: "#smart-score",
      color: "bg-[#a21caf] hover:bg-[#86198f] text-white",
    },
    card: {
      bg: "bg-[#f3e8fd] border-[#e9d5ff]",
      icon: (
        <svg
          width="48"
          height="48"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <rect width="48" height="48" rx="12" fill="#F3E8FD" />
          <circle cx="24" cy="24" r="10" stroke="#a21caf" strokeWidth="2.5" />
          <path
            d="M24 18v6l4 2"
            stroke="#a21caf"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      label: "Smart Risk Prioritization",
    },
    reverse: false,
  },
];

function OTSecurityFeatureSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col gap-20 py-16 px-4">
      <h2 id="ot-features-heading" className="sr-only">
        OT Security Features
      </h2>
      {features.map((feature) => (
        <div
          key={feature.heading}
          className={`flex flex-col md:flex-row ${feature.reverse ? "md:flex-row-reverse" : ""} items-center gap-8 md:gap-20 bg-white rounded-2xl shadow-md p-8 md:p-12 lg:mb-10 w-full max-w-6xl mx-auto`}
          role="region"
          aria-label={feature.heading}
        >
          {/* Heading and Card (Icon/Image) Side */}
          <div className="flex-1 flex flex-col items-start justify-center max-w-xl gap-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[#111827] font-montserrat mb-0">
              {feature.heading}
            </h3>
            <div
              className={`w-full max-w-xs md:max-w-sm lg:max-w-md aspect-video flex flex-col items-center justify-center rounded-xl border p-4 ${feature.card.bg}`}
            >
              {feature.card.icon}
              <span className="text-center text-sm text-[#374151] font-montserrat mt-2">
                {feature.card.label}
              </span>
            </div>
          </div>
          {/* Subheader, Description, List, and Button Side */}
          <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
            <div
              className="text-base md:text-lg mb-2 font-semibold"
              style={{
                color: feature.reverse
                  ? "#22c55e"
                  : feature.button.color?.includes("#31c9b7")
                    ? "#31c9b7"
                    : feature.button.color?.includes("#a21caf")
                      ? "#a21caf"
                      : undefined,
              }}
            >
              {feature.subheading}
            </div>
            <p className="text-sm md:text-base text-[#374151] mb-4 whitespace-pre-line">
              {feature.description}
            </p>
            {feature.list && (
              <ul className="list-disc pl-5 mb-4 text-sm md:text-base text-[#374151]">
                {feature.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            <Button asChild className={feature.button.color}>
              <a
                href={feature.button.href}
                className="mt-2"
                aria-label={feature.button.label}
              >
                {feature.button.label}
              </a>
            </Button>
          </div>
        </div>
      ))}
    </AnimatedBackground>
  );
}

export { OTSecurityFeatureSection };
