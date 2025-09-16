import { FiZap, FiDatabase, FiCloud, FiUsers } from "react-icons/fi";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

interface StatCardProps {
  statistic: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({
  statistic,
  description,
}) => {
  return (
    <div className="bg-transparent">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="text-4xl font-bold text-blue-500">{statistic}</div>
        <div className="text-sm text-gray-300 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};

export function FintechStatisticsSection() {
  const stats = [
    {
      icon: <FiZap />,
      statistic: "3,000%",
      description: "Five-Year Surge in API Attacks",
    },
    {
      icon: <FiDatabase />,
      statistic: "€6.03M",
      description: "Mean Loss per Financial Breach",
    },
    {
      icon: <FiCloud />,
      statistic: "81%",
      description: "Fintechs Exposing Public Cloud Assets",
    },
    {
      icon: <FiUsers />,
      statistic: "58%",
      description: "UK FS Firms Hit by Supply-Chain Attacks",
    },
  ];

  return (
    <AnimatedBackground className="w-[99.1vw] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Critical Security Statistics for Financial Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                statistic={stat.statistic}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
