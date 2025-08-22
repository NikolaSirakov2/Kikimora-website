

import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const qandas = [
  {
    question:
      "Why is vulnerability management so important for a small business like mine?",
    answer:
      "Small businesses are prime targets for cybercriminals because they often have fewer security resources than larger companies. A successful attack can be devastating, leading to financial loss, reputational damage, and even business closure. Vulnerability management is crucial because it helps you identify and fix the security weaknesses that attackers look for, significantly reducing your risk of a breach.",
  },
  {
    question: "What exactly does a vulnerability management tool do?",
    answer:
      "A vulnerability management tool automates the process of finding, assessing, and fixing security vulnerabilities in your IT environment. It can scan your network, servers, and applications for known vulnerabilities, prioritize vulnerabilities based on their severity and potential impact on your business, provide guidance on how to fix the identified vulnerabilities, and generate reports to track your security posture over time.",
  },
  {
    question:
      "We don't have a dedicated cybersecurity team. Can we still use a vulnerability management tool?",
    answer:
      "Absolutely. Many vulnerability management tools are designed with ease of use in mind, especially those aimed at SMEs. They often feature user-friendly dashboards, automated scanning, and clear, actionable reports. A free trial can be a great way to determine if a particular tool is a good fit for your team's technical skills. Additionally, some providers offer managed services to help you with the process.",
  },
  {
    question:
      "We're ready to improve our security, but where do we even start with vulnerability management?",
    answer:
      "A great starting point is to take advantage of a free trial from a reputable vendor. This will allow you to discover your assets, run your first scan to identify initial vulnerabilities, and prioritize and remediate by focusing on the most critical vulnerabilities first. A good tool will guide you through this process.",
  },
  {
    question: "How does a free trial help us?",
    answer:
      "A free trial offers several advantages. It allows you to evaluate the tool to see if it's easy to use and meets your needs, identify immediate risks by uncovering and potentially fixing high-risk vulnerabilities during the trial period, and build a case for investment by using the results to justify the cost of a full subscription to your management team.",
  },
  {
    question: "What should we look for in a vulnerability management tool?",
    answer:
      "When evaluating vulnerability management tools, consider ease of use with an intuitive interface and clear reporting, comprehensive scanning that covers all your assets including on-premises and cloud-based systems, risk-based prioritization to focus on vulnerabilities that pose the greatest risk, remediation guidance with clear instructions on how to fix vulnerabilities, and reporting and analytics to track your progress and demonstrate the value to your business.",
  },
];

export default function QandASection() {
  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col items-center justify-center py-16">
      <div className="text-center mb-8 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
          Q&amp;A: Vulnerability Management for SMEs
        </h1>
        <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
          Here are some common questions that small and medium-sized business
          owners have about vulnerability management:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        {qandas.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#E3E8F0] rounded-xl p-6 shadow-sm flex flex-col gap-2 text-left hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-2 mb-1">
              <span className="text-[#3970F7] mt-1">
                <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                  <circle cx="9" cy="9" r="9" fill="#EAF1FF" />
                  <text x="6.5" y="13" fontSize="10" fill="#3970F7">
                    ?
                  </text>
                </svg>
              </span>
              <h3 className="font-semibold text-[#181F3A] text-base leading-snug">
                {item.question}
              </h3>
            </div>
            <p className="text-[#5A6273] text-sm leading-relaxed">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </AnimatedBackground>
  );
}
