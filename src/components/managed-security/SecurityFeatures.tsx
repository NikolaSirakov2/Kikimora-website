import { Button } from "@/components/ui/button";

interface SecurityFeatureProps {
  title: string;
  description: string;
}

function SecurityFeature({ title, description }: SecurityFeatureProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-[#003A66] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#004B7A]">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export function SecurityFeatures() {
  const features = [
    {
      title: "Cybersecurity Assessments",
      description:
        "Identify vulnerabilities, weaknesses & misconfigurations in your security posture",
    },
    {
      title: "Threat Detection & Monitoring",
      description:
        "Implement proactive defense mechanisms against evolving cyber threats",
    },
    {
      title: "Penetration Testing",
      description: "Regular tests of your infrastructure, networks and assets",
    },
    {
      title: "Compliance & Reporting",
      description: "Quick access to compliance data and comprehens",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-[#001324] to-[#002847] py-32 px-4">
      <div className="container mx-auto max-w-[1200px]">
        <div className="bg-gradient-to-br from-[#002847] to-[#722195] rounded-xl p-16 shadow-2xl border border-gray">
          <h2 className="text-5xl font-bold text-white text-center mb-20">
            Comprehensive SME Security, Simplified
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {features.map((feature, index) => (
              <SecurityFeature
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-12">
              Let Kikimora handle cybersecurity, so you can focus on growing
              your business.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6 max-w-[1000px] mx-auto items-center">
            <input
              type="text"
              placeholder="Full Name"
              className="flex-1 px-6 py-4 rounded-lg bg-[#004B7A] text-white border border-gray-600 focus:outline-none focus:border-blue-500 text-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-6 py-4 rounded-lg bg-[#004B7A] text-white border border-gray-600 focus:outline-none focus:border-blue-500 text-lg"
            />
            <Button
              className="px-10 py-4 bg-[#4169E1] hover:bg-[#3154b3] text-white font-bold rounded-lg text-lg transition-all duration-300 hover:scale-105"
              onClick={() =>
                window.open("https://calendly.com/o-antonov", "_blank")
              }
            >
              BOOK DEMO
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
