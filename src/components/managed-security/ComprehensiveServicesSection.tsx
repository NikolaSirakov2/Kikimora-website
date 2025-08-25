import { Shield, Link, ShieldCheck, Lock, Users, Clock } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 flex flex-col items-center shadow-sm border border-[#e5e7eb] min-h-[280px] text-center transition hover:shadow-md">
      <div className="flex flex-col items-center h-full justify-between">
        <div className="flex flex-col items-center">
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#31c9b7] mb-6">
            {icon}
          </span>
          <h3 className="text-xl font-bold mb-4 text-[#111827] font-montserrat">
            {title}
          </h3>
          <p className="text-[#374151] text-base font-montserrat leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ComprehensiveServicesSection() {
  const services = [
    {
      title: "Strategic Security Roadmap",
      description:
        "Gain a deep understanding of your current security posture, assets, and potential risks to build a tailored protection strategy.",
      icon: <Shield size={32} strokeWidth={2} color="#fff" />,
    },
    {
      title: "Proactive Exposure Reduction",
      description:
        "Continuously identify and reduce your digital footprint to minimize entry points for attackers, protecting vulnerable services and data.",
      icon: <Link size={32} strokeWidth={2} color="#fff" />,
    },
    {
      title: "Holistic Risk Identification",
      description:
        "Receive comprehensive evaluations of your assets, vulnerabilities, and system hardening, ensuring a robust defensive posture.",
      icon: <ShieldCheck size={32} strokeWidth={2} color="#fff" />,
    },
    {
      title: "Validate Your Defenses",
      description:
        "Rigorous simulation of real-world attacks to assess the true resilience of your applications and networks.",
      icon: <Lock size={32} strokeWidth={2} color="#fff" />,
    },
    {
      title: "Empower Your Team's Awareness",
      description:
        "Proactive cybersecurity education for your employees, turning them into your first line of defense against social engineering and common threats.",
      icon: <Users size={32} strokeWidth={2} color="#fff" />,
    },
    {
      title: "Relentless Vigilance & Rapid Action",
      description:
        "Gain continuous oversight and expert incident response, ensuring fast detection and neutralization of threats, minimizing impact.",
      icon: <Clock size={32} strokeWidth={2} color="#fff" />,
    },
  ];

  return (
    <AnimatedBackground className="w-[99.1vw] py-28 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#31c9b7] uppercase tracking-wider mb-4">
            OUR SOLUTIONS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6 leading-tight max-w-5xl">
            Our Comprehensive Managed Security Services: Protecting What Matters
            Most.
          </h2>
          <p className="text-lg text-white/80 text-center max-w-4xl leading-relaxed">
            Kikimora provides a complete suite of cybersecurity solutions
            designed to deliver continuous protection and ensure compliance,
            allowing you to operate with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </AnimatedBackground>
  );
}
