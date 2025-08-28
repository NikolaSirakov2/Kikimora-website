import {
  BriefcaseBusiness,
  Megaphone,
  Server,
  Shield,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export const roles = [
  {
    slug: "sharepoint-onedrive-specialist",
    icon: (
      <BriefcaseBusiness
        size={48}
        className="text-[#29ABE2]"
        aria-hidden="true"
      />
    ),
    title: "SharePoint & OneDrive Specialist",
    tags: [
      { label: "Contract", color: "bg-[#01486B]" },
      { label: "Technical", color: "bg-[#23406C]" },
      { label: "Senior", color: "bg-[#1A6B6B]" },
      { label: "Remote", color: "bg-[#6B4C6B]" },
    ],
    description:
      "We are looking for several profiles for a SharePoint and OneDrive migration specialist. The key requested skill is being a real expert with SharePoint and OneDrive migration (Migrations done) AND Sharegate and Planner with Apps4.Pro Enterprise. Those requirements are MANDATORY; otherwise, candidates are rejected. The starting date is ASAP. Please send a CV and rate if you have suitable specialists.",
    jobTitle: "SharePoint and OneDrive Migration",
    startDate: "01/02/2025",
    endDate: "30/09/2025",
    location: "Remote",
    overview:
      "We are seeking an experienced SharePoint and Planner Migration Specialist to lead the migration of SharePoint using Sharegate and Planner with Apps4.Pro Enterprise. The ideal candidate should possess deep expertise in Office 365 and Microsoft Azure and have hands-on experience with migration tools and best practices.",
    responsibilities: [
      "Develop and execute a comprehensive migration plan for SharePoint and Planner using the appropriate tools.",
      "Conduct pre-migration assessments to identify potential challenges and risks.",
      "Perform post-migration validations to ensure successful data transfer and system functionality.",
      "Document migration processes, methodologies, and troubleshooting steps.",
      "Provide technical support to end users during and after the migration process.",
      "Effectively communicate project progress and updates to stakeholders.",
    ],
    requiredSkills: [
      "Bachelor's degree in Computer Science, IT, or a related field.",
      "Minimum of 3 years of experience in IT migrations within large-scale environments.",
      "Proven expertise in SharePoint and email migrations in enterprise settings.",
      "Strong knowledge of Office 365 and Microsoft Azure.",
      "Proficiency in PowerShell for automation and administration.",
      "Excellent problem-solving skills and attention to detail.",
      "Ability to work collaboratively in a team-oriented environment.",
      "Strong written and verbal communication skills.",
    ],
    preferredSkills: [
      "Microsoft certifications (e.g., MCSA, MCSE)",
      "Experience in project management",
      "Advanced PowerShell scripting expertise",
      "Strong knowledge of Active Directory and DNS",
      "In-depth experience with SharePoint, ShareGate, and Apps4.Pro Enterprise",
    ],
  },
  {
    slug: "marketing-specialist",
    icon: <Megaphone size={48} className="text-[#29ABE2]" aria-hidden="true" />,
    title: "Marketing Specialist",
    tags: [
      { label: "Full-time", color: "bg-[#01486B]" },
      { label: "Marketing", color: "bg-[#23406C]" },
      { label: "Remote", color: "bg-[#1A6B6B]" },
    ],
    description:
      "We are seeking a creative Marketing Specialist to join our team. You will be responsible for developing and executing marketing strategies, managing campaigns, and analyzing performance metrics. Experience with digital marketing and content creation is a plus.",
  },
  {
    slug: "backend-developer-contractor",
    icon: <Server size={48} className="text-[#29ABE2]" aria-hidden="true" />,
    title: "Backend Developer - Contractor",
    tags: [
      { label: "Contract", color: "bg-[#01486B]" },
      { label: "Backend", color: "bg-[#23406C]" },
      { label: "Remote", color: "bg-[#1A6B6B]" },
    ],
    description:
      "Join our engineering team as a Backend Developer (Contractor). You will design, build, and maintain scalable backend systems. Strong experience with Node.js, TypeScript, and cloud infrastructure is required.",
  },
  {
    slug: "penetration-tester",
    icon: <Shield size={48} className="text-[#29ABE2]" aria-hidden="true" />,
    title: "Penetration Tester",
    tags: [
      { label: "Full-time", color: "bg-[#01486B]" },
      { label: "Security", color: "bg-[#23406C]" },
      { label: "Remote", color: "bg-[#1A6B6B]" },
    ],
    description:
      "We are looking for a skilled Penetration Tester to assess the security of our applications and infrastructure. You will perform vulnerability assessments, penetration tests, and provide actionable recommendations.",
  },
  {
    slug: "information-security-auditor",
    icon: (
      <ShieldCheck size={48} className="text-[#29ABE2]" aria-hidden="true" />
    ),
    title: "Information Security Auditor",
    tags: [
      { label: "Contract", color: "bg-[#01486B]" },
      { label: "Audit", color: "bg-[#23406C]" },
      { label: "Senior", color: "bg-[#1A6B6B]" },
    ],
    description:
      "Seeking an experienced Information Security Auditor to conduct audits, ensure compliance, and identify risks. Familiarity with ISO 27001 and other standards is required.",
  },
];

export function Careers() {
  return (
    <AnimatedBackground className="w-[99.1vw] min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="w-full py-14 flex flex-col items-center my-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center tracking-tight drop-shadow-lg">
          Open Positions
        </h1>
        <p className="text-white text-center text-xl mt-10">
          Join our team of cybersecurity experts and help build the future of
          managed security services.
        </p>
      </header>
      {/* Cards Section */}
      <section className="w-[1200px] flex flex-col gap-10 justify-center z-10 mb-10">
        {roles.map((role) => (
          <div
            key={role.title}
            className="w-full max-w-[1200px] rounded-3xl bg-white shadow-2xl p-8 flex flex-col border border-gray-200"
          >
            <div className="flex flex-col items-start ml-[10px]">
              <div className="flex flex-row items-center gap-4 mb-10">
                {role.icon}
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-0">
                  {role.title}
                </h2>
              </div>
              <div className="flex gap-3 mb-4">
                {role.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`${tag.color} text-white px-4 py-2 rounded-lg text-sm font-medium`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              <p className="text-black text-base md:text-lg mb-6">
                {role.description}
              </p>
              <Link
                to={`/careers/${role.slug}`}
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-full transition-colors text-base w-fit inline-block text-center"
                aria-label={`Learn more about the ${role.title} position`}
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </section>
      {/* More open position cards will be added here */}
    </AnimatedBackground>
  );
}

export default Careers;
