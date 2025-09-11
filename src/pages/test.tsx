import { useState } from "react";
import SecurityAnalysisInterface from "../components/ui/SecurityAnalysisInterface";
import BookCallButton from "../components/ui/BookCallButton";
import LearnMoreButton from "../components/ui/LearnMoreButton";
import CompanyLogos from "../components/ui/CompanyLogos";
import BulletPointsCard from "../components/ui/BulletPointsCard";
import Card_get_access from "../components/ui/Card_get_access";
import ChallengeToOpportunity from "../components/ChallengeToOpportunity";
import ConsoleSnippet from "../components/ui/ConsoleSnippet";
import FeatureComparison from "../components/ui/FeatureComparison";

const TestPage = () => {
  const [activeSection, setActiveSection] =
    useState<string>("security-interface");

  // Sample data for the Security Analysis Interface
  const securityOptions = [
    {
      id: "lorem-ipsum-1",
      title: "Lorem ipsum dolor sit amet",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: "lorem-ipsum-2",
      title: "Sed ut perspiciatis unde omnis",
      description:
        "Iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
      id: "lorem-ipsum-3",
      title: "Nemo enim ipsam voluptatem quia",
      description:
        "Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
    {
      id: "lorem-ipsum-4",
      title: "At vero eos et accusamus et iusto",
      description:
        "Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    },
  ];

  const terminalSteps = [
    {
      id: "init",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      status: "completed" as const,
    },
    {
      id: "discover",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      status: "completed" as const,
    },
    {
      id: "scan",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
      status: "completed" as const,
    },
    {
      id: "identify",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum...",
      status: "in-progress" as const,
    },
    {
      id: "process",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia...",
      status: "pending" as const,
    },
  ];

  const handleOptionSelect = (optionId: string) => {
    console.log("Selected option:", optionId);
    // You can add custom logic here when an option is selected
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Test Page</h1>
              <p className="text-gray-600 mt-1">
                A playground for testing new components and features
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveSection("security-interface")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === "security-interface"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Security Interface
              </button>
              <button
                onClick={() => setActiveSection("components")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === "components"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Components
              </button>
              <button
                onClick={() => setActiveSection("layouts")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === "layouts"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Layouts
              </button>
              <button
                onClick={() => setActiveSection("utilities")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === "utilities"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Utilities
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === "security-interface" && (
          <div className="space-y-8">
            {/* The Security Analysis Interface Component */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <SecurityAnalysisInterface
                title="Lorem ipsum dolor sit amet"
                subtitle="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                terminalCommand="> lorem-ipsum-agent process --mode=test --verbose=true"
                options={securityOptions}
                terminalSteps={terminalSteps}
                onOptionSelect={handleOptionSelect}
              />
            </div>

            {/* Book Call Button Component */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Book Call Button Component
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <BookCallButton />
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Variants:</h4>
                  <div className="flex space-x-4">
                    <BookCallButton variant="default">Book Call</BookCallButton>
                    <BookCallButton variant="outline">Book Call</BookCallButton>
                    <BookCallButton variant="ghost">Book Call</BookCallButton>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Sizes:</h4>
                  <div className="flex space-x-4">
                    <BookCallButton size="sm">Book Call</BookCallButton>
                    <BookCallButton size="md">Book Call</BookCallButton>
                    <BookCallButton size="lg">Book Call</BookCallButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Learn More Button Component */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Learn More Button Component
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <LearnMoreButton />
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Variants:</h4>
                  <div className="bg-gray-900 p-6 rounded-lg">
                    <div className="flex space-x-4">
                      <LearnMoreButton variant="default">
                        Learn More
                      </LearnMoreButton>
                      <LearnMoreButton variant="outline">
                        Learn More
                      </LearnMoreButton>
                      <LearnMoreButton variant="ghost">
                        Learn More
                      </LearnMoreButton>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Sizes:</h4>
                  <div className="bg-gray-900 p-6 rounded-lg">
                    <div className="flex space-x-4">
                      <LearnMoreButton size="sm">Learn More</LearnMoreButton>
                      <LearnMoreButton size="md">Learn More</LearnMoreButton>
                      <LearnMoreButton size="lg">Learn More</LearnMoreButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Logos Component */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Company Logos Component
              </h3>
              <div className="max-w-md">
                <CompanyLogos
                  title="Lorem Ipsum Logos"
                  logos={[
                    {
                      id: "full-color",
                      name: "Lorem Ipsum Logo - Full Color",
                      format: "PNG",
                      size: "2.1 MB",
                    },
                    {
                      id: "white",
                      name: "Lorem Ipsum Logo - White",
                      format: "PNG",
                      size: "1.8 MB",
                    },
                    {
                      id: "black",
                      name: "Lorem Ipsum Logo - Black",
                      format: "PNG",
                      size: "1.9 MB",
                    },
                    {
                      id: "vector",
                      name: "Lorem Ipsum Logo - Vector",
                      format: "SVG",
                      size: "0.5 MB",
                    },
                  ]}
                  onDownloadAll={() => console.log("Downloading all logos")}
                />
              </div>
            </div>
          </div>
        )}

        {activeSection === "components" && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Component Testing Area
              </h2>
              <p className="text-gray-600 mb-6">
                Add your new components here to test them in isolation.
              </p>

              {/* Example component placeholder */}
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <div className="text-gray-500 text-lg mb-2">🧪</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Component Test Zone
                </h3>
                <p className="text-gray-600">
                  Import and render your new components in this area
                </p>
              </div>
            </div>

            {/* Component Examples */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Card Examples
                </h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900">Info Card</h4>
                    <p className="text-blue-700 text-sm mt-1">
                      This is an example info card component.
                    </p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900">Success Card</h4>
                    <p className="text-blue-700 text-sm mt-1">
                      This is an example success card component.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Call Button Component */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Book Call Button Component
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <BookCallButton />
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Variants:</h4>
                  <div className="flex space-x-4">
                    <BookCallButton variant="default">Book Call</BookCallButton>
                    <BookCallButton variant="outline">Book Call</BookCallButton>
                    <BookCallButton variant="ghost">Book Call</BookCallButton>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Sizes:</h4>
                  <div className="flex space-x-4">
                    <BookCallButton size="sm">Book Call</BookCallButton>
                    <BookCallButton size="md">Book Call</BookCallButton>
                    <BookCallButton size="lg">Book Call</BookCallButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "layouts" && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Layout Testing Area
              </h2>
              <p className="text-gray-600 mb-6">
                Test different layout patterns and responsive designs.
              </p>

              {/* Grid Layout Example */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Grid Layout
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                      key={item}
                      className="bg-gray-100 rounded-lg p-4 text-center"
                    >
                      <div className="text-2xl mb-2">📦</div>
                      <p className="text-gray-600">Grid Item {item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flexbox Layout Example */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Flexbox Layout
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 bg-gray-100 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">📱</div>
                    <p className="text-gray-600">Flex Item 1</p>
                  </div>
                  <div className="flex-1 bg-gray-100 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">💻</div>
                    <p className="text-gray-600">Flex Item 2</p>
                  </div>
                  <div className="flex-1 bg-gray-100 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🖥️</div>
                    <p className="text-gray-600">Flex Item 3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "utilities" && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Utility Testing Area
              </h2>
              <p className="text-gray-600 mb-6">
                Test utility functions, hooks, and helper components.
              </p>

              {/* Utility Examples */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Color Utilities
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <span className="text-sm text-gray-600">bg-red-500</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <span className="text-sm text-gray-600">
                        bg-blue-500
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <span className="text-sm text-gray-600">bg-blue-500</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                      <span className="text-sm text-gray-600">
                        bg-yellow-500
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Spacing Utilities
                  </h3>
                  <div className="space-y-2">
                    <div className="bg-white p-2 rounded border">
                      <span className="text-sm text-gray-600">p-2 (8px)</span>
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <span className="text-sm text-gray-600">p-4 (16px)</span>
                    </div>
                    <div className="bg-white p-6 rounded border">
                      <span className="text-sm text-gray-600">p-6 (24px)</span>
                    </div>
                    <div className="bg-white p-8 rounded border">
                      <span className="text-sm text-gray-600">p-8 (32px)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bullet Points Card Component */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Bullet Points Card Component
            </h3>
            <div className="max-w-sm">
              <BulletPointsCard
                title="Lorem Ipsum Testing"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
                bulletPoints={[
                  "Lorem ipsum dolor sit amet (Annual)",
                  "Consectetur adipiscing elit (Annual)",
                  "Sed do eiusmod tempor incididunt",
                  "Ut labore et dolore magna aliqua",
                ]}
              />
            </div>
          </div>
        </div>

        {/* Card Get Access Component */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Card Get Access Component
            </h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className="relative">
              <Card_get_access />
            </div>
          </div>
        </div>

        {/* Console Snippet Component */}
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Console Snippet Component
            </h3>
            <p className="text-gray-600 mb-6">
              A terminal-style component that displays security reconnaissance
              operations with status indicators and command output.
            </p>
            <ConsoleSnippet />
          </div>
        </div>
      </div>

      {/* Challenge to Opportunity Component */}
      <ChallengeToOpportunity />

      {/* Feature Comparison Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Feature Comparison Component
          </h3>
          <p className="text-gray-600 mb-6">
            A reusable comparison table component that highlights the advantages
            of different approaches.
          </p>
          <FeatureComparison
            features={[
              {
                name: "24/7 Monitoring",
                softwareOnly: "✓ Automated",
                managedTeamOnly: "✓ Human oversight",
                combinedApproach: "✓ Both automated + human",
              },
              {
                name: "Threat Context",
                softwareOnly: "Limited",
                managedTeamOnly: "✓ Expert analysis",
                combinedApproach: "✓ AI + expert interpretation",
              },
              {
                name: "Scalability",
                softwareOnly: "✓ Unlimited",
                managedTeamOnly: "Limited by team size",
                combinedApproach: "✓ Best of both",
              },
              {
                name: "Strategic Guidance",
                softwareOnly: "None",
                managedTeamOnly: "✓ Available",
                combinedApproach: "✓ Built-in",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default TestPage;
