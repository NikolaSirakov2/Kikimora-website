import { Button } from "@/components/ui/button";

export function InvestmentCTA() {
  return (
    <div className="bg-[#001E38] w-full">
      <div className="w-screen px-[5%] flex flex-col items-center">
        <div className="max-w-[1300px] w-full py-20 flex justify-between items-center">
          {/* Left Side - Form */}
          <div className="w-[45%]">
            <h2 className="text-white text-5xl leading-tight mb-8">
              Interested in investing?
            </h2>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-transparent border border-[#1E3D59] rounded-lg px-4 py-3 text-white placeholder:text-white/40 font-montserrat focus:outline-none focus:border-[#00E5BE]"
              />
              <Button className="font-montserrat px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                Get Started
              </Button>
            </div>
          </div>

          {/* Right Side - Graph Illustration Placeholder */}
          <div className="w-[50%] relative">
            <div className="w-full aspect-[4/3] relative">
              {/* Graph Container */}
              <div className="absolute inset-0 bg-[#1E3D59]/30 rounded-2xl overflow-hidden">
                {/* Graph Lines Placeholder */}
                <div className="absolute inset-0 flex items-end">
                  <div className="w-full h-[70%] bg-gradient-to-t from-[#00E5BE]/20 to-transparent" />
                </div>
                <div className="absolute inset-0">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 70 Q 25 60, 50 40 T 100 20"
                      stroke="#00E5BE"
                      strokeWidth="0.5"
                      fill="none"
                    />
                  </svg>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-[#B66BFF] rounded-full opacity-70"
                    />
                  ))}
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 bg-[#FFD700] rounded-full opacity-70"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
