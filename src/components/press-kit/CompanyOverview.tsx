import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function CompanyOverview() {
  return (
    <AnimatedBackground className="w-full flex flex-col items-center justify-center py-16 px-2 md:px-0">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-6"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Company Overview
      </h2>
      <div className="bg-gray-50 rounded-xl shadow flex flex-col items-center w-full max-w-6xl px-6 py-10">
        <p className="text-lg md:text-xl text-gray-700 text-center max-w-6xl mb-10">
          Kikimora is a leading provider of managed cybersecurity services,
          offering comprehensive threat detection, monitoring, and response
          solutions for businesses of all sizes. Founded in 2018, we protect
          over 10,000 organizations worldwide with our AI-powered security
          platform and 24/7 expert monitoring services.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
          <div className="flex flex-col items-center min-w-[120px]">
            <span
              className="text-2xl md:text-3xl font-bold text-blue-500"
            >
              2018
            </span>
            <span className="text-gray-500 text-sm mt-1">Founded</span>
          </div>
          <div className="flex flex-col items-center min-w-[120px]">
            <span
              className="text-2xl md:text-3xl font-bold text-center text-blue-500"
            >
              San Francisco
            </span>
            <span className="text-gray-500 text-sm mt-1">Headquarters</span>
          </div>
          <div className="flex flex-col items-center min-w-[120px]">
            <span
              className="text-2xl md:text-3xl font-bold text-blue-500"
            >
              250+
            </span>
            <span className="text-gray-500 text-sm mt-1">Employees</span>
          </div>
          <div className="flex flex-col items-center min-w-[120px]">
            <span
              className="text-2xl md:text-3xl font-bold text-blue-500"
            >
              10,000+
            </span>
            <span className="text-gray-500 text-sm mt-1">Customers</span>
          </div>
          <div className="flex flex-col items-center min-w-[120px]">
            <span
              className="text-2xl md:text-3xl font-bold text-blue-500"
            >
              45+
            </span>
            <span className="text-gray-500 text-sm mt-1">Countries Served</span>
          </div>
          <div className="flex flex-col items-center min-w-[120px]">
            <span
              className="text-2xl md:text-3xl font-bold text-blue-500"
            >
              $85M
            </span>
            <span className="text-gray-500 text-sm mt-1">Funding Raised</span>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
