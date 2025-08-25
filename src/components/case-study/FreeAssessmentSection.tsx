import { FC } from "react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export const FreeAssessmentSection: FC = () => {
  return (
    <AnimatedBackground className="w-[99.1vw] py-20 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Build a More Resilient Healthcare Organization?
        </h2>
        <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
          Let's discuss your unique security and compliance challenges. Schedule
          a personalized, no-obligation assessment with our cybersecurity
          experts today.
        </p>
        <div className="max-w-3xl mx-auto bg-black bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-8">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#31c9b7]"
              />
              <input
                type="text"
                placeholder="Organization"
                className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#31c9b7]"
              />
              <input
                type="text"
                placeholder="Your Role"
                className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#31c9b7]"
              />
              <input
                type="email"
                placeholder="Business Email"
                className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#31c9b7]"
              />
            </div>
            <textarea
              placeholder="Key Challenge (Optional)"
              rows={4}
              className="w-full bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#31c9b7] mb-6"
            ></textarea>
            <button
              type="submit"
              className="w-full font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Request My Free Assessment
            </button>
          </form>
        </div>
      </div>
    </AnimatedBackground>
  );
};
