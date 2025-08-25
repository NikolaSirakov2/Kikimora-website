import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function EUFunding() {
  return (
    <AnimatedBackground className="w-[99.1vw] py-8">
      <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between">
        {/* Shield Logo */}
        <div className="flex-shrink-0">
          <img
            src="/logos/colorAndBlack.png"
            alt="EU Funding Logo"
            className="w-48 h-48 object-contain"
          />
        </div>

        {/* Navigation Buttons */}
        <nav className="flex flex-col gap-2 flex-shrink-0">
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="/product" className="text-white hover:text-gray-300">
            Product
          </a>
          <a href="/developers" className="text-white hover:text-gray-300">
            Developers
          </a>
          <a href="/support" className="text-white hover:text-gray-300">
            Support
          </a>
          <a href="/blog" className="text-white hover:text-gray-300">
            Blog
          </a>
          <a href="/contacts" className="text-white hover:text-gray-300">
            Contacts
          </a>
        </nav>

        {/* EU Flag */}
        <div className="flex-shrink-0">
          <img
            src="/eu-flag.png"
            alt="European Union Flag"
            className="h-32 object-contain"
          />
        </div>

        {/* Innovation and Funds Logos */}
        <div className="flex flex-col gap-4 flex-shrink-0">
          <img
            src="/innovation.png"
            alt="Innovation and Competitiveness Logo"
            className="h-16 object-contain"
          />
          <img
            src="/funds.png"
            alt="Fund of Funds Logo"
            className="h-16 object-contain"
          />
        </div>

        {/* Funding Text */}
        <div className="max-w-xs flex-shrink-0">
          <p className="text-white text-sm">
            Kikimora has been supported by "Vitosha Venture Partners Fund I",
            a private equity fund, co-financed by the European Structural and
            Investment Funds under the operational program "Innovation and
            Competitiveness 2014-2020", managed by the Fund Manager of Financial
            Instruments in Bulgaria.
          </p>
        </div>
      </div>
    </AnimatedBackground>
  );
}
