interface FeatureComparisonProps {
  title?: string;
  features: {
    name: string;
    softwareOnly: string;
    managedTeamOnly: string;
    combinedApproach: string;
  }[];
  className?: string;
}

export function FeatureComparison({
  title = "The Perfect Synergy: Technology + Human Expertise",
  features,
  className = "",
}: FeatureComparisonProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden ${className}`}
    >
      <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 text-center">
          {title}
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-1/4">
                Feature
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 w-1/4">
                Software Only
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 w-1/4">
                Managed Team Only
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 w-1/4 bg-green-50 border-l-2 border-green-200">
                Our Combined Approach
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {features.map((feature, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {feature.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 text-center">
                  {feature.softwareOnly}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 text-center">
                  {feature.managedTeamOnly}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 text-center bg-green-50 font-medium">
                  {feature.combinedApproach}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FeatureComparison;
