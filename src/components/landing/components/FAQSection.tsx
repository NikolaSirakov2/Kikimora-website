import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import FooterComponent from "./FooterComponent";

const faqData = [
  {
    question: "What is an 'attack surface'?",
    answer:
      'Your attack surface is the sum of all possible points (or "attack vectors") where an unauthorized user could try to enter data to or extract data from an environment. Kikimora Agent focuses on your external attack surface, which includes all your internet-facing assets like websites, servers, and cloud services.',
  },
  {
    question:
      "How is Kikimora Agent different from a traditional vulnerability scanner?",
    answer:
      "Traditional scanners typically require you to specify the targets (IP addresses, hostnames) to scan. Kikimora Agent combines Attack Surface Management (ASM) with vulnerability scanning. It first discovers your assets (including ones you might not be aware of) and then scans them, providing a more comprehensive and proactive approach to security.",
  },
  {
    question: "Is the agent difficult to set up?",
    answer:
      "No, Kikimora Agent is a cloud-based service. You can start your first discovery scan in minutes by simply providing your primary domain. There is no software to install or complex configuration required to get started.",
  },
  {
    question: "What kind of vulnerabilities can it find?",
    answer:
      "Kikimora Agent can detect a wide range of security issues, including web application vulnerabilities (like SQL injection and XSS), infrastructure misconfigurations (like open ports and exposed databases), outdated software with known CVEs, and sensitive information exposure.",
  },
  {
    question:
      "How do you ensure the scanning process is safe and non-disruptive?",
    answer:
      "Our scanning engine is designed to be non-intrusive and mimic the reconnaissance activities of an attacker without performing any disruptive or exploitative actions. We use safe, industry-standard techniques to probe for information and vulnerabilities without impacting the performance or availability of your services.",
  },
];

const FAQSection = () => {
  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-300">
              Common questions about Kikimora Agent's cybersecurity capabilities
            </p>
          </div>

          <div className="rounded-lg border border-gray-700 bg-black p-6">
            <Accordion type="single" collapsible className="space-y-0">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-gray-700 bg-black focus-within:outline-none focus:outline-none focus-visible:outline-none"
                >
                  <AccordionTrigger className="text-lg text-white focus-within:outline-none hover:text-gray-200 focus:outline-none focus-visible:border-0 focus-visible:outline-none focus-visible:ring-0">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <FooterComponent />
    </>
  );
};

export default FAQSection;
