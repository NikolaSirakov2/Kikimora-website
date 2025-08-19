import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function ComparisonTableSection() {
  return (
    <AnimatedBackground className="w-[99.1vw]">
      <section className="py-16 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Perfect Synergy: Technology + Human Expertise
            </h2>
          </div>

          <div className="overflow-x-auto relative z-20">
            <div className="border border-gray-200 rounded-lg bg-white shadow-lg relative z-20 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b">
                      Software Only
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b">
                      Managed Team Only
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 border-b bg-green-50">
                      Our Combined Approach
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      24/7 Monitoring
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-700">
                      ✓ Automated
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-700">
                      ✓ Human oversight
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-700 bg-green-50">
                      ✓ Both automated + human
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Threat Context
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-700">
                      Limited
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-700">
                      ✓ Expert analysis
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-700 bg-green-50">
                      ✓ AI + expert interpretation
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Scalability
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-700">
                      ✓ Unlimited
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-700">
                      Limited by team size
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-700 bg-green-50">
                      ✓ Best of both
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Strategic Guidance
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-700">
                      None
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-700">
                      ✓ Available
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-700 bg-green-50">
                      ✓ Built-in
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 max-w-3xl mx-auto">
              Our platform combines automated vulnerability detection with human
              expertise, giving you the speed of technology and the insight of
              experienced security professionals.
            </p>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
}
