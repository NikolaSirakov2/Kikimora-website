import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function AdvantagesSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col items-center py-16">
      <div className="w-full max-w-7xl bg-gray-50 dark:bg-[#1a2736] rounded-2xl px-6 py-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="w-24 h-24 mb-6">
            <img
              src="/logos/colorAndBlack.png"
              alt="Kikimora Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-4xl font-semibold text-black mb-4">
            Not just a tool in your arsenal!
          </h1>
          <p className="text-lg text-black/80 max-w-4xl">
            The Kikimora team will act as a trusted advisor, foster a culture of
            security awareness within your organization and integrate security
            seamlessly into your business operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4">
          {/* In-House Expertise */}
          <div className="bg-white rounded-xl p-10 flex flex-col items-center shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-[#111827] font-montserrat">
                In-House Expertise
              </h3>
            </div>
            <p className="text-[#374151] text-base font-montserrat">
              Access to a team of cybersecurity specialists with extensive
              knowledge and experience in threat detection, vulnerability
              management, and incident response.
            </p>
          </div>

          {/* 24/7 Monitoring */}
          <div className="bg-white rounded-xl p-10 flex flex-col items-center shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-[#111827] font-montserrat">
                24/7 Monitoring
              </h3>
            </div>
            <p className="text-[#374151] text-base font-montserrat">
              Gain access to real-time data and monitoring capabilities for your
              whole organization. Detect and address vulnerabilities and
              misconfiguration proactively and effectively.
            </p>
          </div>

          {/* Flexibility */}
          <div className="bg-white rounded-xl p-10 flex flex-col items-center shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-[#111827] font-montserrat">
                Flexibility
              </h3>
            </div>
            <p className="text-[#374151] text-base font-montserrat">
              Kikimora Managed Security evolves with the needs of your business,
              scaling seamlessly as your organization grows and your security
              and compliance requirements change.
            </p>
          </div>

          {/* Compliance-ready */}
          <div className="bg-white rounded-xl p-10 flex flex-col items-center shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-[#111827] font-montserrat">
                Compliance-ready
              </h3>
            </div>
            <p className="text-[#374151] text-base font-montserrat">
              Get the right tools to meeting industry-specific regulations and
              standards, such as HIPAA or PCI DSS, ensuring compliance.
            </p>
          </div>

          {/* Cost-Effectiveness */}
          <div className="bg-white rounded-xl p-10 flex flex-col items-center shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-[#111827] font-montserrat">
                Cost-Effectiveness
              </h3>
            </div>
            <p className="text-[#374151] text-base font-montserrat">
              Access to the best latest cybersecurity solutions and tools
              without the overhead and training.
            </p>
          </div>

          {/* Trust Partner */}
          <div className="bg-white rounded-xl p-10 flex flex-col items-center shadow-sm border border-[#e5e7eb] min-h-[320px] text-center transition hover:shadow-md">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-[#111827] font-montserrat">
                Trust Partner
              </h3>
            </div>
            <p className="text-[#374151] text-base font-montserrat">
              Trust Partner with an expert in-house cybersecurity team, ready to
              support your organization in overcoming complex challenges and
              achieving security goals.
            </p>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
