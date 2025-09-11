import { Button } from "../ui/button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

interface PressRelease {
  date: string;
  title: string;
  description: string;
  url: string;
}

const pressReleases: PressRelease[] = [
  {
    date: "March 15, 2024",
    title:
      "Kikimora Announces $50M Series B Funding to Expand Managed Security Services",
    description:
      "Investment will accelerate product development and global expansion of cybersecurity solutions for SMEs and enterprises.",
    url: "#",
  },
  {
    date: "February 8, 2024",
    title:
      "Kikimora Partners with Major Cloud Providers for Enhanced Security Integration",
    description:
      "New partnerships enable seamless security monitoring across multi-cloud environments.",
    url: "#",
  },
  {
    date: "January 20, 2024",
    title:
      "Industry Recognition: Kikimora Named 'Cybersecurity Innovator of the Year'",
    description:
      "Award recognizes Kikimora's breakthrough approach to automated threat detection and response.",
    url: "#",
  },
];

export function PressReleasesSection() {
  return (
    <AnimatedBackground className="w-full flex flex-col items-center justify-center py-16 px-2 md:px-0">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-white"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Recent Press Releases
      </h2>
      <div className="flex flex-col gap-8 w-full max-w-4xl">
        {pressReleases.map((release) => (
          <div
            key={release.title}
            className="bg-white rounded-2xl shadow-md px-8 py-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
            role="article"
            aria-label={release.title}
          >
            <div className="flex flex-row items-start gap-3 md:w-1/4 min-w-[120px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="w-6 h-6 mt-1 flex-shrink-0 stroke-blue-500"
                aria-hidden="true"
              >
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="4"
                  fill="#e0e7ef"
                />
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 2v4M16 2v4M4 10h16"
                />
              </svg>
              <span className="text-gray-500 text-sm font-montserrat mt-1">
                {release.date}
              </span>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 font-montserrat mb-1">
                {release.title}
              </h3>
              <p className="text-gray-600 text-base font-montserrat mb-2">
                {release.description}
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-fit mt-2 font-montserrat"
                aria-label={`Read full release: ${release.title}`}
              >
                <a
                  href={release.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  Read Full Release
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 ml-1"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75V17.25M17.25 6.75H6.75M17.25 6.75L6.75 17.25"
                    />
                  </svg>
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </AnimatedBackground>
  );
}
