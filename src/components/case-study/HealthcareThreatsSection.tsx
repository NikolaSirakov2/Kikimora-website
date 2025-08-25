import { AlertTriangle, FileText, Target } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const HealthcareThreatsSection = () => {
  const threats = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-white" />,
      title: "Operational Shutdowns from Ransomware",
      stat: "60% of hospitals hit by ransomware in 2024",
      description:
        "Ransomware attacks are crippling hospitals, forcing ambulance diversions and canceling critical procedures. We help you prevent attacks that put patient safety at risk.",
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Crippling Data Breaches & Fines",
      stat: "$9.7M average breach cost",
      description:
        "With the average healthcare breach costing over $9.7 million and stolen patient records worth 10x more than credit cards, protecting ePHI is paramount.",
    },
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Unseen Vulnerabilities in IoMT & Legacy Systems",
      stat: "82% of breaches linked to human error",
      description:
        "Your attack surface is expanding with every new medical device and telehealth platform. Our continuous monitoring finds and fixes vulnerabilities before exploitation.",
    },
  ];
  return (
    <AnimatedBackground className="w-[99.1vw] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Your Organization is a Target. The Consequences Are More Than
            Financial.
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Healthcare organizations face unique cybersecurity challenges that
            directly impact patient safety and operational continuity.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {threats.map((threat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-500 mx-auto mb-6">
                {threat.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {threat.title}
              </h3>
              <p className="text-3xl font-bold text-red-500 my-2">
                {threat.stat}
              </p>
              <p className="text-gray-600">{threat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedBackground>
  );
};
export { HealthcareThreatsSection };
