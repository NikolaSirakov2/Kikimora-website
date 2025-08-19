import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

// --- TypeScript Interfaces ---
interface Challenge {
  id: string;
  title: string;
  content: {
    nature: string;
    impact: string[];
    examples: Array<{
      title: string;
      text: string;
    }>;
    insight: {
      title: string;
      text: string;
    };
  };
  visualization: {
    type: "bar" | "line" | "doughnut";
    title: string;
    intro: string;
    data: {
      labels: string[];
      datasets: Array<{
        label: string;
        data: number[];
        backgroundColor?: string | string[];
        borderColor?: string | string[];
        borderWidth?: number;
        fill?: boolean;
        tension?: number;
        hoverOffset?: number;
      }>;
    };
    options: Record<string, unknown>;
  };
}

interface ImpactMatrix {
  sectors: string[];
  challenges: string[];
  data: string[][];
}

interface ChallengeTabsProps {
  challenges: Challenge[];
  activeChallengeId: string;
  onTabClick: (id: string) => void;
}

interface ChallengeContentProps {
  challenge: Challenge;
}

interface VisualizationPanelProps {
  challenge: Challenge;
}

interface ImpactMatrixProps {
  matrix: ImpactMatrix;
}

// --- Data Store ---
// This object holds all the content for the report.
const reportData = {
  challenges: [
    {
      id: "geopolitics",
      title: "Geopolitical Weaponization",
      content: {
        nature:
          "Cyberspace is now an active battlefield for geopolitical competition. State-sponsored actors use digital attacks for espionage, sabotage of critical national infrastructure, and as part of broader 'hybrid warfare' campaigns to destabilize European societies.",
        impact: [
          "Critical infrastructure (energy, transport) is now on the front line, with attacks potentially causing physical consequences like power outages.",
          "Erodes trust in the global technology supply chain, forcing costly re-evaluation of vendors from adversarial nations.",
          "Significantly increases the operational cost of defense to counter sophisticated, persistent state-level threats.",
        ],
        examples: [
          {
            title: "Energy Infrastructure",
            text: "The 2022 Nord Stream pipeline sabotage and persistent Russian cyberattacks on Ukraine's energy grid highlight the physical risk to Europe's interconnected energy systems.",
          },
          {
            title: "Transport Networks",
            text: "Deliberate sabotage of German rail communications in 2022 and DDoS attacks on European airports demonstrate a campaign to disrupt logistics and public movement.",
          },
          {
            title: "Public & Health Sectors",
            text: "A 2024 ransomware attack took 25 Romanian hospitals offline, while state actors targeted German political parties, showing the broad scope of geopolitical cyber conflict.",
          },
        ],
        insight: {
          title: "Actionable Insight: Hybrid Warfare is a Business Risk",
          text: "CISOs must now collaborate with physical security teams to model integrated threats. A cyberattack could be a precursor to physical sabotage, or vice versa. This integrated risk management is a core requirement for resilience.",
        },
      },
      visualization: {
        type: "bar" as const,
        title: "Escalation of State-Sponsored Activity",
        intro:
          "Geopolitical tensions directly fuel cyberattacks. For example, Russian cyberattacks targeting Ukraine's critical energy sector surged dramatically, demonstrating a persistent and escalating campaign.",
        data: {
          labels: ["Baseline Activity", "Post-Escalation Surge"],
          datasets: [
            {
              label: "Increase in Attacks on Energy Sector",
              data: [100, 170],
              backgroundColor: ["#38bdf8", "#ef4444"],
              borderColor: ["#0ea5e9", "#dc2626"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: { callback: (value: number) => value + "%" },
            },
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (context: { raw: number }) =>
                  `Relative Attack Volume: ${context.raw}%`,
              },
            },
          },
        },
      },
    },
    {
      id: "supplychain",
      title: "Systemic Supply Chain Risk",
      content: {
        nature:
          "An organization's security is now inextricably linked to the security of thousands of third-party vendors and software dependencies. A single vulnerability in a widely used product can lead to a cascading failure and mass compromise.",
        impact: [
          "Mass compromise from a single point of failure, as seen with the MOVEit vulnerability affecting over 8,000 organizations.",
          "Creates profound systemic risk, especially in finance, where a breach at a critical cloud provider could trigger a sector-wide crisis.",
          "Significant operational disruption, financial loss, and erosion of customer trust, even when the fault lies with a supplier.",
        ],
        examples: [
          {
            title: "Software Vulnerability (MOVEit)",
            text: "The Cl0p ransomware group exploited a single flaw in the MOVEit file transfer tool to exfiltrate data from thousands of downstream customers across Europe.",
          },
          {
            title: "ICT Provider Compromise",
            text: "DORA directly addresses the risk of an attack on a major cloud platform impacting a vast number of financial institutions simultaneously.",
          },
          {
            title: "Targeted Industries",
            text: "While IT companies are the initial target, the manufacturing and finance sectors in Europe are heavily impacted through their specialized software providers.",
          },
        ],
        insight: {
          title: "Actionable Insight: The Compliance Cascade",
          text: "NIS2 and DORA force large companies to mandate high security standards for their suppliers. This places an immense strain on SMEs, who must invest heavily in security to remain in critical supply chains, potentially leading to a market shakeout.",
        },
      },
      visualization: {
        type: "line" as const,
        title: "Growth in Supply Chain Attacks",
        intro:
          "Software supply chain attacks are increasing. The monthly average of incidents has risen sharply, with global economic costs projected to more than double by 2031.",
        data: {
          labels: ["2023", "2024", "2025 (Projected)"],
          datasets: [
            {
              label: "Monthly Attack Incidents (Indexed)",
              data: [100, 125, 150],
              fill: false,
              borderColor: "#0ea5e9",
              tension: 0.1,
            },
          ],
        },
        options: {
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (context: { raw: number }) =>
                  `Indexed Attack Volume: ${context.raw}`,
              },
            },
          },
        },
      },
    },
    {
      id: "convergence",
      title: "IT/OT/IoT Convergence",
      content: {
        nature:
          "The erosion of the 'air gap' between corporate IT networks and industrial Operational Technology (OT) systems creates pathways for cyber threats to manipulate the physical world. This is compounded by legacy OT and insecure Internet of Things (IoT) devices.",
        impact: [
          "The potential for cyberattacks to have kinetic (physical) consequences, such as power blackouts, transport disruption, or endangering patient lives.",
          "Operational paralysis from ransomware targeting OT systems, which could halt manufacturing or critical infrastructure functions.",
          "A massively expanded attack surface due to millions of insecure, unpatchable IoT and IoMT (Medical Things) devices.",
        ],
        examples: [
          {
            title: "Energy Sector Blind Spot",
            text: "A recent ENISA report found that 32% of European energy operators do not monitor any of their critical OT processes, leaving them blind to attacks on their most sensitive systems.",
          },
          {
            title: "Transport Disruption",
            text: "ENISA warns that ransomware attacks are increasingly likely to cross the IT/OT divide in the transport sector to disrupt physical operations like railway signaling.",
          },
          {
            title: "Healthcare (IoMT)",
            text: "Network-connected infusion pumps and patient monitors often run on outdated software, creating risks of manipulated medication dosages or vital signs.",
          },
        ],
        insight: {
          title: "Actionable Insight: The IT/OT Cultural Chasm",
          text: "A fundamental conflict exists between IT teams (prioritizing security updates) and OT engineers (prioritizing physical safety and stability). Bridging this cultural divide is the greatest challenge to securing converged environments.",
        },
      },
      visualization: {
        type: "doughnut" as const,
        title: "Energy Sector OT Monitoring Gap",
        intro:
          "A significant portion of Europe's energy sector lacks visibility into threats against their core operational systems, representing a critical security gap.",
        data: {
          labels: ["OT Processes Monitored by SOC", "No OT Monitoring"],
          datasets: [
            {
              label: "Status",
              data: [68, 32],
              backgroundColor: ["#0ea5e9", "#f97316"],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          plugins: {
            tooltip: {
              callbacks: {
                label: (context: { raw: number; label: string }) =>
                  `${context.label}: ${context.raw}%`,
              },
            },
          },
        },
      },
    },
    {
      id: "sophistication",
      title: "Threat Sophistication",
      content: {
        nature:
          "Adversaries are in a constant arms race with defenders, leveraging AI and advanced tactics. AI is used to generate flawless phishing emails at scale, create deepfakes for social engineering, and develop malware that evades detection.",
        impact: [
          "Higher rate of successful breaches as the human element becomes even more vulnerable to hyper-realistic, AI-powered attacks.",
          "Increased financial and operational damage from multi-extortion ransomware tactics.",
          "Defensive systems are overwhelmed by hyper-volumetric and complex DDoS attacks.",
        ],
        examples: [
          {
            title: "AI-Enhanced Phishing",
            text: "AI-generated phishing is now empirically more effective than human-crafted attempts. The volume of phishing has reportedly increased 4,000% since the advent of generative AI tools.",
          },
          {
            title: "Evolving Ransomware",
            text: "Groups like LockBit and Cl0p continue to successfully target major European sectors using a resilient Ransomware-as-a-Service (RaaS) model.",
          },
          {
            title: "Hyper-Volumetric DDoS",
            text: "Security vendors have observed an unprecedented surge in the size and complexity of DDoS attacks, using multi-vector techniques to bypass defenses.",
          },
        ],
        insight: {
          title: "Actionable Insight: The Obsolescence of Traditional Training",
          text: "AI-driven phishing renders traditional awareness training (spotting typos, etc.) useless. The strategy must pivot to a defense-in-depth model that assumes user compromise, focusing on technical controls like phishing-resistant MFA and Zero Trust architecture.",
        },
      },
      visualization: {
        type: "bar" as const,
        title: "AI vs. Human Phishing Effectiveness",
        intro:
          "An ongoing experiment shows AI-generated phishing campaigns are now significantly more effective at deceiving users than those crafted by elite security professionals.",
        data: {
          labels: ["Human-Crafted Phishing", "AI-Powered Phishing"],
          datasets: [
            {
              label: "Success Rate (Indexed)",
              data: [100, 124],
              backgroundColor: ["#38bdf8", "#ef4444"],
              borderColor: ["#0ea5e9", "#dc2626"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          indexAxis: "y",
          scales: { x: { beginAtZero: true } },
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (context: { raw: number }) =>
                  `Relative Effectiveness: ${context.raw}`,
              },
            },
          },
        },
      },
    },
    {
      id: "compliance",
      title: "Compliance Burden",
      content: {
        nature:
          "European companies face a 'deluge' of complex, overlapping regulations (NIS2, DORA, CRA, GDPR). This creates a dense compliance environment with potential for ambiguity and fragmented national laws, demanding significant investment.",
        impact: [
          "Significant drain on resources for legal interpretation, gap analysis, and evidence collection, with many firms yet to secure the necessary budget.",
          "Immense operational strain from tight incident reporting timelines (e.g., 24-hour 'early warning' under NIS2).",
          "Direct personal liability for senior management under NIS2, elevating cybersecurity to a critical corporate governance and personal risk issue.",
        ],
        examples: [
          {
            title: "Multi-Jurisdictional Conflict",
            text: "A pan-European firm may face personal fines for management in one country's NIS2 implementation but not another, requiring complex, tailored governance.",
          },
          {
            title: "Complex Reporting",
            text: "A single breach can trigger parallel but distinct reporting obligations under GDPR, NIS2, and DORA, creating a significant crisis management challenge.",
          },
          {
            title: "Contract Renegotiation",
            text: "A major bank must renegotiate hundreds of supplier contracts to include DORA-mandated clauses, a massive legal and procurement exercise.",
          },
        ],
        insight: {
          title: 'Actionable Insight: The Risk of "Compliance Fatigue"',
          text: 'The overwhelming pressure risks a shift from genuine risk reduction to a "tick-box" approach. This can misallocate resources to documentation over proactive security, creating a paradox where the rules, designed to improve security, could foster a less agile culture.',
        },
      },
      visualization: {
        type: "doughnut" as const,
        title: "Financial Firms' DORA Compliance Hurdles",
        intro:
          "A recent survey highlights the financial strain of new regulations, with many firms facing increased costs from vendors and struggling to secure their own implementation budgets.",
        data: {
          labels: [
            "Facing Higher Vendor Costs",
            "Have Not Secured Budget",
            "Other Challenges",
          ],
          datasets: [
            {
              label: "% of Firms",
              data: [37, 20, 43],
              backgroundColor: ["#f97316", "#ef4444", "#d1d5db"],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          plugins: {
            tooltip: {
              callbacks: {
                label: (context: { raw: number; label: string }) =>
                  `${context.label}: ${context.raw}%`,
              },
            },
          },
        },
      },
    },
    {
      id: "talent",
      title: "Talent & Resource Gap",
      content: {
        nature:
          "A severe and worsening shortage of skilled cybersecurity professionals underpins all other challenges. The demand, driven by new regulations and threats, far outstrips the supply, with an estimated deficit of 424,000 professionals in Europe.",
        impact: [
          "Diminished capacity to defend against threats and a significant risk of regulatory non-compliance due to a lack of expertise.",
          "Exacerbates every other challenge, leading to misconfigured tools, unpatched systems, and slow incident response.",
          "Creates a highly unequal landscape where large firms attract talent, leaving SMEs and the public sector dangerously exposed.",
        ],
        examples: [
          {
            title: "The SME Compliance Struggle",
            text: "A medium-sized manufacturer under NIS2 often lacks the budget to hire a qualified risk analyst, leaving it struggling to meet legal obligations.",
          },
          {
            title: "Public Sector Vulnerability",
            text: "A regional hospital cannot recruit an IoMT security specialist due to salary competition, leaving critical patient care systems vulnerable.",
          },
          {
            title: "Inefficient Spending",
            text: "Despite rising security budgets, the percentage of IT staff dedicated to security has declined, as organizations are unable to fill open roles.",
          },
        ],
        insight: {
          title: "Actionable Insight: A Systemic Threat to EU Strategy",
          text: 'The talent gap threatens to create a two-tiered Europe: a few well-resourced "haves" and a vast number of "have-nots" left legally exposed and practically vulnerable. This could undermine the entire goal of a high, common level of security across the Union.',
        },
      },
      visualization: {
        type: "bar" as const,
        title: "European Cybersecurity Workforce Gap",
        intro:
          "The gap between demand for and supply of cybersecurity professionals is large and growing, creating a foundational vulnerability for the entire European economy.",
        data: {
          labels: ["Workforce Gap"],
          datasets: [
            {
              label: "Estimated Deficit",
              data: [424000],
              backgroundColor: ["#ef4444"],
              borderColor: ["#dc2626"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (context: { raw: number }) =>
                  `Estimated Shortage: ${new Intl.NumberFormat().format(context.raw)} professionals`,
              },
            },
          },
        },
      },
    },
  ],
  impactMatrix: {
    sectors: [
      "Energy",
      "Transport",
      "Banking & Financial Markets",
      "Health",
      "Digital Providers",
      "Public Administration",
    ],
    challenges: [
      "Geopolitical Weaponization",
      "Systemic Supply Chain Risk",
      "IT/OT/IoT Convergence",
      "Threat Sophistication",
      "Compliance Burden",
      "Talent & Resource Gap",
    ],
    data: [
      ["High", "High", "Medium", "Medium", "High", "High"],
      ["Medium", "Medium", "High", "High", "High", "Medium"],
      ["High", "High", "Low", "High", "Medium", "Low"],
      ["Medium", "Medium", "High", "High", "High", "High"],
      ["High", "High", "High", "High", "High", "High"],
      ["Medium", "Medium", "Low", "High", "Low", "High"],
    ],
  },
};

// --- Reusable Components ---

const Header = () => (
  <header className="text-center mb-10">
    <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
      The New Frontline
    </h1>
    <p className="text-lg md:text-xl text-white max-w-4xl mx-auto">
      An Interactive Analysis of Europe's Premier Cybersecurity Challenges in
      the Era of NIS2 & DORA
    </p>
  </header>
);

const ChallengeTabs: React.FC<ChallengeTabsProps> = ({
  challenges,
  activeChallengeId,
  onTabClick,
}) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 mb-8">
    {challenges.map((challenge) => (
      <button
        key={challenge.id}
        onClick={() => onTabClick(challenge.id)}
        className={`w-full text-center font-semibold p-3 rounded-lg border transition-all duration-200 ${activeChallengeId === challenge.id ? "bg-sky-600 text-white border-sky-600" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"}`}
      >
        {challenge.title}
      </button>
    ))}
  </div>
);

const ChallengeContent: React.FC<ChallengeContentProps> = ({ challenge }) => (
  <div className="animate-fadeIn">
    <h3 className="text-xl font-bold text-slate-800 mb-4">{challenge.title}</h3>
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold text-slate-700 mb-2">
          Nature of the Challenge
        </h4>
        <p className="text-slate-600">{challenge.content.nature}</p>
      </div>
      <div>
        <h4 className="font-semibold text-slate-700 mb-2">
          Impact on European Companies
        </h4>
        <ul className="list-disc list-inside space-y-1 text-slate-600">
          {challenge.content.impact.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-slate-700 mb-2">
          Specific Examples & Scenarios
        </h4>
        <div className="space-y-3">
          {challenge.content.examples.map((ex, index) => (
            <div key={index} className="p-3 bg-slate-50 rounded-md">
              <p className="font-medium text-slate-800">{ex.title}</p>
              <p className="text-sm text-slate-500">{ex.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 rounded-md bg-sky-50 border-l-4 border-sky-500">
        <h4 className="font-bold text-sky-800 mb-1">
          {challenge.content.insight.title}
        </h4>
        <p className="text-sky-700">{challenge.content.insight.text}</p>
      </div>
    </div>
  </div>
);

const VisualizationPanel: React.FC<VisualizationPanelProps> = ({
  challenge,
}) => {
  const chartContainer = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    if (chartContainer.current && challenge) {
      const ctx = chartContainer.current.getContext("2d");
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: challenge.visualization.type,
          data: challenge.visualization.data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
              duration: 500,
            },
            ...challenge.visualization.options,
          },
        });
      }
    }
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [challenge]);

  if (!challenge) return null;

  return (
    <div className="bg-slate-50 rounded-lg p-6 flex flex-col items-center justify-center min-h-[400px] animate-fadeIn">
      <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">
        {challenge.visualization.title}
      </h3>
      <p className="text-slate-600 mb-4 text-center max-w-md">
        {challenge.visualization.intro}
      </p>
      <div className="relative w-full max-w-xl mx-auto h-80">
        <canvas ref={chartContainer}></canvas>
      </div>
    </div>
  );
};

const ImpactMatrix: React.FC<ImpactMatrixProps> = ({ matrix }) => {
  const [selectedSectorIndex, setSelectedSectorIndex] = useState<string>("all");

  const getImpactClass = (impact: string) => {
    switch (impact.toLowerCase()) {
      case "high":
        return "bg-red-500 text-white";
      case "medium":
        return "bg-orange-500 text-white";
      case "low":
        return "bg-yellow-500 text-white";
      default:
        return "bg-slate-200 text-slate-800";
    }
  };

  return (
    <section className="mt-12 bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-200/50 relative z-20 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Interactive Impact Matrix
        </h2>
        <p className="text-slate-600">
          Not all threats impact every sector equally. Use the filter to
          highlight the risk profile for a specific sector and understand the
          unique pressures it faces.
        </p>
      </div>
      <div className="mb-6">
        <label
          htmlFor="sector-filter"
          className="font-semibold text-slate-700 mr-4"
        >
          Filter by Sector:
        </label>
        <select
          id="sector-filter"
          className="p-2 bg-white rounded-md border border-slate-300"
          value={selectedSectorIndex}
          onChange={(e) => setSelectedSectorIndex(e.target.value)}
        >
          <option value="all">Show All Sectors</option>
          {matrix.sectors.map((sector, index) => (
            <option key={index} value={index}>
              {sector}
            </option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="p-3 text-left font-bold text-slate-700 border-b-2 border-slate-200">
                Challenge
              </th>
              {matrix.sectors.map((sector, index) => (
                <th
                  key={index}
                  className={`p-3 text-center font-bold text-slate-700 border-b-2 border-slate-200 transition-opacity duration-300 ${selectedSectorIndex !== "all" && selectedSectorIndex != index.toString() ? "opacity-20" : "opacity-100"}`}
                >
                  {sector}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matrix.challenges.map((challenge, rowIndex) => (
              <tr key={rowIndex}>
                <td className="p-3 font-medium text-slate-800 border-b border-slate-200">
                  {challenge}
                </td>
                {matrix.data[rowIndex].map((impact, colIndex) => (
                  <td
                    key={colIndex}
                    className={`p-3 text-center border-b border-slate-200 transition-opacity duration-300 ${selectedSectorIndex !== "all" && selectedSectorIndex != colIndex.toString() ? "opacity-20" : "opacity-100"}`}
                  >
                    <span
                      className={`px-3 py-1 text-sm font-bold rounded-full ${getImpactClass(impact)}`}
                    >
                      {impact}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="text-center mt-12 py-6 border-t border-slate-200">
    <p className="text-slate-500">
      This interactive report is a synthesized analysis based on the "European
      Cybersecurity Challenges Deep Dive" document.
    </p>
  </footer>
);

// --- Main Component ---

export function CybersecurityChallengesSection() {
  const [activeChallengeId, setActiveChallengeId] = useState(
    reportData.challenges[0].id
  );

  const activeChallenge = reportData.challenges.find(
    (c) => c.id === activeChallengeId
  );

  return (
    <AnimatedBackground className="w-[99.1vw]">
      <div className=" font-sans text-white relative">
        <div className="container mx-auto p-4 md:p-8 relative z-10">
          <Header />
          <main>
            <section className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-200/50 relative z-20 max-w-7xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Challenge Dashboard
                </h2>
                <p className="text-slate-600">
                  The European digital landscape is defined by six
                  interconnected challenges. Select a challenge below to explore
                  its nature, impact, and the data behind the threat.
                </p>
              </div>
              <ChallengeTabs
                challenges={reportData.challenges as Challenge[]}
                activeChallengeId={activeChallengeId}
                onTabClick={setActiveChallengeId}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {activeChallenge && (
                  <ChallengeContent challenge={activeChallenge} />
                )}
                {activeChallenge && (
                  <VisualizationPanel challenge={activeChallenge} />
                )}
              </div>
            </section>

            <ImpactMatrix matrix={reportData.impactMatrix} />
          </main>
          <Footer />
        </div>
      </div>
    </AnimatedBackground>
  );
}
