import {
  BuildingOffice2Icon,
  Cog6ToothIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

interface CardData {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
}

const CARDS: CardData[] = [
  {
    icon: BuildingOffice2Icon,
    title: "Too Complex & Costly",
    subtitle: "Enterprise Tools",
    description:
      "Enterprise platforms are built for Fortune 500 companies with dedicated security teams and budgets to match. They are overkill for the needs and resources of an SME.",
  },
  {
    icon: Cog6ToothIcon,
    title: "Too Fragmented & Inefficient",
    subtitle: "DIY Approach",
    description:
      "Stitching together separate, free, or low-cost tools creates security blind spots, wastes valuable time your team doesn't have, and makes proving compliance nearly impossible.",
  },
  {
    icon: LockClosedIcon,
    title: "Too Opaque & Inflexible",
    subtitle: "Black Box Services",
    description:
      "Traditional security consultants can be expensive and often leave you in the dark, without giving you the tools or visibility to manage your own security posture day-to-day.",
  },
];

function SMEWhyTraditionalSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col items-center py-24 px-4">
      <h2 className="text-4xl md:text-4xl font-bold text-center mb-16 text-white">
        Why Traditional Security Solutions Fail Growing Businesses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {CARDS.map(({ icon: Icon, title, subtitle, description }) => (
          <div
            key={title}
            className="bg-white rounded-xl p-10 flex flex-col items-center shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md"
            role="region"
            aria-labelledby={title.replace(/\s+/g, "-").toLowerCase()}
          >
            <Icon
              className="w-14 h-14 text-[#9ca3af] mb-6"
              aria-hidden="true"
            />
            <h3
              id={title.replace(/\s+/g, "-").toLowerCase()}
              className="text-xl font-bold mb-2 text-[#111827] font-montserrat"
            >
              {title}
            </h3>
            <div className="text-[#6b7280] text-base font-montserrat mb-4">
              {subtitle}
            </div>
            <p className="text-[#374151] text-base font-montserrat">
              {description}
            </p>
          </div>
        ))}
      </div>
    </AnimatedBackground>
  );
}

export { SMEWhyTraditionalSection };
