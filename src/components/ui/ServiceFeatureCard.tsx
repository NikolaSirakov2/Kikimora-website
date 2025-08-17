interface ServiceFeatureCardProps {
  title: string;
  description: string;
  index: number;
  className?: string;
}

const ServiceFeatureCard = ({
  title,
  description,
  index,
  className = "",
}: ServiceFeatureCardProps) => {
  const getLineGradient = (index: number) => {
    if (index === 0) return "from-blue-500 to-blue-400";
    if (index === 1) return "from-blue-400 to-purple-400";
    return "from-purple-400 to-purple-500";
  };

  const getLineStyle = (index: number) => {
    if (index === 0) return "linear-gradient(to bottom, #3B82F6, #60A5FA)";
    if (index === 1) return "linear-gradient(to bottom, #60A5FA, #A78BFA)";
    return "linear-gradient(to bottom, #A78BFA, #A855F7)";
  };

  const getDotColor = (index: number) => {
    if (index === 0) return "bg-blue-500";
    if (index === 1) return "bg-purple-400";
    return "bg-purple-500";
  };

  return (
    <div className={`relative mb-8 pl-8 ${className}`}>
      {/* Progressive line element */}
      <div className="absolute left-0 top-0 h-full w-1">
        <div
          className={`h-full w-full rounded-full bg-gradient-to-b transition-all duration-1000 delay-${
            index * 200
          } ${getLineGradient(index)}`}
          style={{
            background: getLineStyle(index),
          }}
        />
        {/* Connecting dot */}
        <div
          className={`absolute -left-1 -top-1 h-3 w-3 rounded-full border-2 border-gray-900 transition-all duration-500 delay-${
            index * 300
          } ${getDotColor(index)}`}
        />
      </div>

      <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
      <p className="text-base text-gray-500">{description}</p>
    </div>
  );
};

export default ServiceFeatureCard;
