
import { Button } from "../ui/button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

interface Executive {
  name: string;
  title: string;
  titleUrl: string;
  description: string;
}

const executives: Executive[] = [
  {
    name: "Sarah Chen",
    title: "Chief Executive Officer",
    titleUrl: "#",
    description:
      "Former VP of Security at CloudTech, 15+ years in cybersecurity leadership. MBA from Stanford.",
  },
  {
    name: "Marcus Rodriguez",
    title: "Chief Technology Officer",
    titleUrl: "#",
    description:
      "Previously Lead Security Architect at CyberDefense Corp. PhD in Computer Science from MIT.",
  },
  {
    name: "Elena Volkov",
    title: "Chief Product Officer",
    titleUrl: "#",
    description:
      "Former Product Director at SecureStack. Expert in security product development and user experience.",
  },
];

function ExecutiveAvatar() {
  return (
    <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center mb-6">
      {/* Placeholder SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 64 64"
        className="w-16 h-16 text-gray-400"
      >
        <circle cx="32" cy="32" r="32" fill="#e5e7eb" />
        <path
          d="M32 34c6.627 0 12-5.373 12-12S38.627 10 32 10 20 15.373 20 22s5.373 12 12 12Zm0 4c-8.837 0-16 4.03-16 9v3a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3v-3c0-4.97-7.163-9-16-9Z"
          fill="#cbd5e1"
        />
      </svg>
    </div>
  );
}

export function ExecutiveTeamSection() {
  return (
    <AnimatedBackground className="w-full flex flex-col items-center justify-center py-16 px-2 md:px-0">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-white"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Executive Team
      </h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center">
        {executives.map((exec) => (
          <div
            key={exec.name}
            className="flex flex-col items-center bg-white rounded-2xl shadow-md p-8 w-full md:w-1/3 min-w-[300px] max-w-[400px] border border-gray-100"
            role="region"
            aria-label={exec.name}
          >
            <ExecutiveAvatar />
            <h3
              className="text-xl font-bold text-gray-900 mb-1 text-center"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {exec.name}
            </h3>
            <Button
              asChild
              variant="link"
              className="text-base font-medium mb-4 p-0 h-auto min-h-0 text-blue-500"
              aria-label={exec.title}
            >
              <a
                href={exec.titleUrl}
                tabIndex={0}
                target="_blank"
                rel="noopener noreferrer"
              >
                {exec.title}
              </a>
            </Button>
            <p className="text-gray-600 text-base text-center leading-relaxed">
              {exec.description}
            </p>
          </div>
        ))}
      </div>
    </AnimatedBackground>
  );
}
