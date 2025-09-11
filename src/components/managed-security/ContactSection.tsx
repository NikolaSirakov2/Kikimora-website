import { useState, useEffect } from "react";
import { ScheduleDemoModal } from "@/components/ui/ScheduleDemoModal";
import Lottie from "lottie-react";

export function ContactSection() {
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);
  const [auctionAnimation, setAuctionAnimation] = useState(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        // Load the lottie JSON file directly
        const response = await fetch("/lottie/Auction.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const animationData = await response.json();
        setAuctionAnimation(animationData);
      } catch (error) {
        console.error("Failed to load auction animation:", error);
      }
    };

    loadAnimation();
  }, []);

  return (
    <>
      <section className="w-full flex flex-col items-center py-16 bg-white">
        <div className="w-full max-w-7xl bg-gray-300 rounded-lg p-8">
          <h2 className="text-3xl md:text-4xl text-black text-center mb-6">
            Add-on: Governance
          </h2>
          <h3 className="text-2xl md:text-3xl text-blue-500 text-center mb-3">
            TAILORED PRICING
          </h3>
          <p className="text-center text-black max-w-3xl mb-6 px-4 mx-auto">
            Delegate the core components of managing your IT infrastructure to a
            dedicated expert, allowing leadership to focus on core operations
            rather than cybersecurity complexity.
          </p>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 max-w-6xl ml-40 my-20">
            <div className="flex-1">
              <h4 className="text-xl font-semibold mb-3 text-black">
                Governance Features:
              </h4>
              <ul className="space-y-2 text-black">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#31c9b7] mt-1 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Gap analysis and risk management
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#31c9b7] mt-1 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Security procedures and policy maintenance
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#31c9b7] mt-1 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Security strategy development
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#31c9b7] mt-1 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Business continuity/disaster recovery training
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#31c9b7] mt-1 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Operational-level involvement (approvals, audits)
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#31c9b7] mt-1 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Advisory on emerging technology
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#31c9b7] mt-1 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Development of internal security team
                </li>
              </ul>
            </div>
            <div className="w-full md:w-2/5 mt-10 mr-20 flex flex-col items-center justify-center p-6 h-[180px]">
              {auctionAnimation ? (
                <Lottie
                  animationData={auctionAnimation}
                  loop={true}
                  autoplay={true}
                  style={{ width: "400%", height: "300%" }}
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#31c9b7]"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Demo Modal */}
      <ScheduleDemoModal
        isOpen={isScheduleDemoModalOpen}
        onClose={() => setIsScheduleDemoModalOpen(false)}
      />
    </>
  );
}
