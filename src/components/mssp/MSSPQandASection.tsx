import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { RiQuestionLine } from "react-icons/ri";

export function MSSPQandASection() {
  const qaData = [
    {
      question:
        "How does Kikimora help an MSSP manage multiple clients efficiently in one platform?",
      answer:
        "Kikimora is built for multi-client management. It provides a unified dashboard that consolidates security data from all your clients into a single view. This eliminates the need to switch between different tools and platforms. You can automate tasks like ticket creation with Jira integration, provide role-based access to data for different stakeholders, and manage everything from vulnerability scanning to compliance monitoring in one place.",
    },
    {
      question:
        "How can Kikimora help me deliver better compliance reports to my clients?",
      answer:
        "Kikimora streamlines compliance reporting. It has built-in support and tools for major regulations like GDPR, NIS2, ISO27k, and DORA. You can deploy compliance agents to continuously scan for vulnerabilities and unauthorized changes. The platform generates detailed logs and audit trails and creates reports, including executive summaries, that make complex data easy for your clients' business leaders to understand.",
    },
    {
      question:
        "How does Kikimora prioritize vulnerabilities for different clients with different needs?",
      answer:
        "Kikimora uses an advanced prioritization feature called Kikimora Smart Score. Unlike generic scoring, it allows for a more precise, contextual evaluation based on factors unique to each client, such as their industry, company size, critical assets, and specific security goals. This ensures you are always focusing on the most significant risks for each individual client.",
    },
    {
      question:
        "My clients use a variety of their own scanning tools. Can Kikimora integrate with them?",
      answer:
        "Yes. Kikimora is designed for tool consolidation. It allows for data parsing from leading vulnerability discovery tools, including Tenable Nessus, Rapid7, and Burp Professional. It also has an active integration with Qualys, embedding its powerful scanner directly into the platform. This allows you to store all collected data in one place for better insight into your clients' security postures.",
    },
    {
      question:
        "What does the pricing structure look like? Is it suitable for a growing MSSP?",
      answer:
        "The pricing is flexible, transparent, and designed to scale with your business. The cost is primarily determined by the number of assets (like IP addresses and applications) you manage, with optional consulting available. This adaptive model fits any organizational context, from the small businesses to large enterprises you may service. You can also start at no cost with the Kikimora Community edition to test the platform.",
    },
    {
      question:
        "What happens if my team needs help with a particularly complex security issue for a client?",
      answer:
        "Kikimora provides expert backup. Recognizing that not all organizations have in-house experts for every situation, the platform offers built-in consulting services. You have access to our expert in-house cybersecurity team for help with complex challenges. Subscription packages come with a starting grant of free consulting hours, with more available in higher-tier packages.",
    },
  ];

  return (
    <AnimatedBackground className="py-16 w-[99.1vw]">
      <div className="max-w-[1300px] mx-auto w-full">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Q&A for MSSPs
            </h2>
            <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
              Here are some common questions that Managed Security Service
              Providers have about implementing Kikimora for their operations:
            </p>
          </div>

          {/* Q&A Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {qaData.map((item, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-sm">
                <div className="flex items-start mb-4">
                  <div className="mr-3 mt-1">
                    <RiQuestionLine className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                    {item.question}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
