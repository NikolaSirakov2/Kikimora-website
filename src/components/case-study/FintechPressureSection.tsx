import {
  FiBriefcase,
  FiLink,
  FiCloud,
  FiZap,
  FiUsers,
  FiCpu,
} from "react-icons/fi";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

interface PressureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PressureCard: React.FC<PressureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-colors duration-200">
      <div className="flex flex-col space-y-4">
        <div className="text-red-500 text-2xl">{icon}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export function FintechPressureSection() {
  const pressures = [
    {
      icon: <FiBriefcase />,
      title: "Regulatory Scrutiny",
      description:
        "Imminent deadlines for DORA (Jan 2025), PSD3, and NIS2 (fines up to €10M) create immense compliance pressure.",
    },
    {
      icon: <FiLink />,
      title: "Sophisticated API Attacks",
      description:
        "A 3,000% five-year surge in API attacks with an average loss of $580,000 per breach threatens open banking.",
    },
    {
      icon: <FiCloud />,
      title: "Cloud Misconfiguration",
      description:
        "81% of fintechs expose public cloud assets, making misconfiguration the #1 driver of cloud breaches.",
    },
    {
      icon: <FiZap />,
      title: "Ransomware & DDoS",
      description:
        "Double-extortion tactics now lead to a mean loss of €6.03 million per financial services breach.",
    },
    {
      icon: <FiUsers />,
      title: "Supply Chain Risk",
      description:
        "With 58% of UK financial firms hit by supply-chain attacks, DORA Article 30 mandates strict vendor oversight.",
    },
    {
      icon: <FiCpu />,
      title: "The Quantum Threat",
      description:
        "'Harvest-now, decrypt-later' campaigns are actively targeting long-term financial data, with a projected impact of €450-€850 billion.",
    },
  ];

  return (
    <AnimatedBackground className="w-[99.1vw] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The Pressure on European Fintechs
            </h2>
            <p className="text-cyan-400 text-lg">
              Regulatory Deadlines, Escalating Threats & Unseen Vulnerabilities
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressures.map((pressure, index) => (
              <PressureCard
                key={index}
                icon={pressure.icon}
                title={pressure.title}
                description={pressure.description}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
