export function Partners() {
  return (
    <div className="bg-[#001E38] w-full">
      <div className="w-screen px-[5%] flex flex-col items-center">
        <div className="max-w-[1300px] w-full py-20">
          {/* Partner Card */}
          <div className="bg-gradient-to-r from-[#002A4E] to-[#004275] rounded-3xl p-12 relative overflow-hidden">
            {/* Content */}
            <div className="flex justify-between items-center relative z-10">
              {/* Left side */}
              <div className="flex flex-col max-w-[50%]">
                {/* Logo and tagline */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Logo placeholder */}
                  <div className="bg-white rounded-lg p-2 w-12 h-12 flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-800/80 backdrop-blur-md" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-2xl">SoCyber</span>
                    <span className="text-white/60 font-montserrat text-sm">
                      makes you feel secure
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/80 font-montserrat mb-8">
                  Test your company for vulnerabilities with SoCyber
                </p>

                {/* Button */}
                <button className="bg-primary text-white font-montserrat font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors w-fit flex items-center gap-2">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {/* Right side - Illustration placeholder */}
              <div className="relative">
                <div className="absolute top-0 right-0 w-[400px] h-[200px]">
                  {/* Wave pattern */}
                  <div className="absolute inset-0 opacity-20">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute right-0 w-[2px] bg-[#00E5BE]"
                        style={{
                          height: "200px",
                          right: `${i * 20}px`,
                          opacity: 0.1 + i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                  {/* Floating cubes */}
                  <div className="absolute right-20 top-10">
                    <div className="w-16 h-16 bg-[#00E5BE] rounded-lg opacity-20" />
                  </div>
                  <div className="absolute right-40 top-20">
                    <div className="w-12 h-12 bg-[#00E5BE] rounded-lg opacity-30" />
                  </div>
                  <div className="absolute right-60 top-30">
                    <div className="w-8 h-8 bg-[#00E5BE] rounded-lg opacity-40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
