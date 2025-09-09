import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const KikimoraDifferenceSection = () => {
  const features = [
    {
      title: "Ensure Continuity of Care",
      description:
        "Prevent cyber-attacks from disrupting critical hospital operations and compromising patient services.",
    },
    {
      title: "Reduce Financial & Legal Risk",
      description:
        "Avoid multi-million dollar breach costs, regulatory fines, and the high cost of operational downtime.",
    },
    {
      title: "Gain Total Visibility & Control",
      description:
        "Unify your security posture across IT, cloud, and IoMT assets into a single pane of glass.",
    },
    {
      title: "Augment Your Team, Not Your Payroll",
      description:
        "Access a dedicated team of cybersecurity experts without the high overhead of hiring and training.",
    },
    {
      title: "Build and Maintain Patient Trust",
      description:
        "Protect sensitive patient data and safeguard your reputation as a secure and reliable healthcare provider.",
    },
    {
      title: "Make Compliance Auditable & Achievable",
      description:
        "Streamline audits with automated reporting, continuous monitoring, and documented evidence of compliance.",
    },
  ];

  return (
    <AnimatedBackground className="w-[99.1vw] py-12 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl  ">
            The Kikimora Difference: Secure Patients, Empower Clinicians,
            Protect Your Organization
          </h2>
          <p className="mt-4 text-lg text-white/80 sm:mt-6">
            Clear business outcomes that resonate with healthcare leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:mt-16 xl:mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 transition-all duration-200 bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-gray-50"
            >
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mr-5 bg-blue-600 rounded-full">
                  <span className="text-white"></span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
                <svg
                  className="w-6 h-6 ml-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedBackground>
  );
};

export { KikimoraDifferenceSection };
