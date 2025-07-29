import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";

const data = [
  { subject: "Technology", Kikimora: 9, Enterprise: 8, MSSPs: 7, Tools: 9 },
  { subject: "Usability", Kikimora: 8, Enterprise: 6, MSSPs: 5, Tools: 4 },
  { subject: "Service", Kikimora: 9, Enterprise: 5, MSSPs: 6, Tools: 3 },
  {
    subject: "Compliance Focus",
    Kikimora: 7,
    Enterprise: 9,
    MSSPs: 8,
    Tools: 4,
  },
  {
    subject: "Price Accessibility",
    Kikimora: 8,
    Enterprise: 4,
    MSSPs: 6,
    Tools: 3,
  },
];

export function ComparisonChartSection() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Kikimora Compares
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
            The European SME cybersecurity market is crowded. Many solutions are
            too complex, too expensive, or lack a true service partnership. We
            built Kikimora to fill those gaps, providing a balanced, powerful,
            and user-friendly solution. This chart shows how typical competitors
            stack up across key areas.
          </p>
        </div>

        {/* Radar Chart Container */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-2xl flex items-center justify-center min-h-[500px]">
            <RadarChart
              cx="50%"
              cy="50%"
              outerRadius="63%"
              width={500}
              height={500}
              data={data}
            >
              <PolarGrid />
              <PolarAngleAxis
                dataKey="subject"
                tick={({ payload, x, y, textAnchor }) => {
                  if (payload.value === "Price Accessibility") {
                    const yNum = typeof y === "number" ? y : 0;
                    return (
                      <g>
                        <text
                          x={x}
                          y={yNum - 5}
                          textAnchor={textAnchor}
                          fontSize="12"
                          fill="#374151"
                        >
                          Price
                        </text>
                        <text
                          x={x}
                          y={yNum + 10}
                          textAnchor={textAnchor}
                          fontSize="12"
                          fill="#374151"
                        >
                          Accessibility
                        </text>
                      </g>
                    );
                  }
                  return (
                    <text
                      x={x}
                      y={y}
                      textAnchor={textAnchor}
                      fontSize="12"
                      fill="#374151"
                    >
                      {payload.value}
                    </text>
                  );
                }}
              />
              <PolarRadiusAxis angle={30} domain={[0, 10]} />
              <Radar
                name="Kikimora"
                dataKey="Kikimora"
                stroke="#f97316"
                fill="#f97316"
                fillOpacity={0.6}
              />
              <Radar
                name="Enterprise Vendors"
                dataKey="Enterprise"
                stroke="#4b5563"
                fill="#4b5563"
                fillOpacity={0.3}
              />
              <Radar
                name="Typical MSSPs"
                dataKey="MSSPs"
                stroke="#9ca3af"
                fill="#9ca3af"
                fillOpacity={0.3}
              />
              <Radar
                name="Niche Technical Tools"
                dataKey="Tools"
                stroke="#d1d5db"
                fill="#d1d5db"
                fillOpacity={0.2}
              />
              <Tooltip />
            </RadarChart>
          </div>
        </div>

        {/* Legend - Keeping the existing legend for consistency */}
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span className="text-sm font-medium text-gray-700">
                Kikimora
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-600 rounded"></div>
              <span className="text-sm font-medium text-gray-700">
                Enterprise Vendors
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-400 rounded"></div>
              <span className="text-sm font-medium text-gray-700">
                Typical MSSPs
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
              <span className="text-sm font-medium text-gray-700">
                Niche Technical Tools
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
