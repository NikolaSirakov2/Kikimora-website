export function SecurityOverview() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#001324]">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left side - Image with monitor */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative w-full max-w-2xl mx-auto">
            {/* Monitor with code */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform -rotate-6">
                <div className="bg-[#1a1a2e] rounded-lg p-4">
                  <div className="h-4 w-32 bg-purple-500/30 rounded mb-2"></div>
                  <div className="h-3 w-48 bg-blue-600/30 rounded mb-2"></div>
                  <div className="h-3 w-40 bg-blue-500/30 rounded"></div>
                </div>
              </div>
            </div>

            {/* Kikimora character */}
            <div className="absolute right-0 top-1/2 transform translate-x-1/4 -translate-y-1/2">
              <img
                src="/Kikimora.png"
                alt="Kikimora Security Character"
                className="w-64 h-64 object-contain"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 left-8 w-8 h-8 bg-purple-500/30 rounded-full blur-sm"></div>
            <div className="absolute top-1/2 left-0 w-6 h-6 bg-blue-600/30 rounded-full blur-sm"></div>
            <div className="absolute bottom-8 right-1/4 w-10 h-10 bg-blue-500/30 rounded-full blur-sm"></div>
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="w-full lg:w-1/2 text-white pl-20">
          <h2 className="text-4xl md:text-4xl font-bold mb-6">
            Get The security you need!
            <br />
            <span className="text-3xl md:text-4xl">
              Nothing more, nothing less!
            </span>
          </h2>

          <p className="text-lg text-gray-300">
            Kikimora Managed Security offers a blend of robust tools, tailored
            to meet the requirements of growing companies facing the pain of
            managing complex compliance and cybersecurity tasks.
          </p>
        </div>
      </div>
    </section>
  );
}
