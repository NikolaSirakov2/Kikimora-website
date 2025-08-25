import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const FIT_OPTIONS = [
  {
    title: "For the Tech-Savvy Team",
    description:
      '"I have a technical team in-house, and we need better tools to manage security and compliance efficiently."',
    href: "#tech-savvy",
  },
  {
    title: "For the Resource-Strapped Business",
    description:
      '"I don\'t have a dedicated security expert on staff, and I need help meeting client and regulatory compliance demands."',
    href: "#resource-strapped",
  },
  {
    title: "For Those Just Starting Out",
    description:
      '"I\'m just beginning my security journey and need to understand my risks on a limited budget."',
    href: "#just-starting",
  },
];

function FitForBusinessSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col items-center py-20 px-4">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-10 text-white">
        What&apos;s the Right Fit for Your Business?
      </h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
        {FIT_OPTIONS.map(({ title, description }) => (
          <div
            key={title}
            className="bg-white rounded-xl p-10 flex flex-col items-center shadow-sm border border-[#e5e7eb] min-h-[220px] text-center transition hover:shadow-md"
            role="region"
            aria-label={title}
          >
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#111827] font-montserrat">
                {title}
              </h3>
              <p className="text-[#374151] text-base font-montserrat mb-4">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedBackground>
  );
}

export { FitForBusinessSection };
