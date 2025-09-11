import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";

type PaymentPeriod = "yearly" | "monthly";

const IT_ASSETS_POINTS = [10, 30, 62, 126, 254, 510, 1022];
const WAS_POINTS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function Pricing() {
  const [paymentPeriod, setPaymentPeriod] = useState<PaymentPeriod>("yearly");
  const [itAssetsValue, setItAssetsValue] = useState(512);
  const [wasValue, setWasValue] = useState(0);

  const baseMonthlyPrice = useMemo(() => {
    if (itAssetsValue === 1022) return 2102.2;
    if (itAssetsValue === 510) return 1119.2;
    if (itAssetsValue === 254) return 627.7;
    if (itAssetsValue === 126) return 381.9;
    if (itAssetsValue === 62) return 259;
    if (itAssetsValue === 30) return 197.6;
    return 159.2; // Default base price for other IT Assets values
  }, [itAssetsValue]);

  const wasPriceIncrement = 30;

  const monthlyPrice = useMemo(() => {
    return baseMonthlyPrice + wasValue * wasPriceIncrement;
  }, [baseMonthlyPrice, wasValue]);

  const yearlyPrice = useMemo(() => {
    return monthlyPrice * 12; // Full yearly price without discount
  }, [monthlyPrice]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    // Find the closest point in IT_ASSETS_POINTS
    const closest = IT_ASSETS_POINTS.reduce((prev, curr) => {
      return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;
    });
    setItAssetsValue(closest);
  };

  const handleWasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    // Find the closest point in WAS_POINTS
    const closest = WAS_POINTS.reduce((prev, curr) => {
      return Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev;
    });
    setWasValue(closest);
  };

  return (
    <div className="w-full max-w-[800px] px-0 flex flex-col items-center">
      <div className="w-full z-10">
        {/* Pricing Card */}
        <div className="bg-gradient-to-r from-[#60348c] via-[#2A1D4C] to-[#492d65] rounded-3xl p-6">
          <div className="flex justify-between h-full">
            {/* Left side - Pricing details */}
            <div className="flex-1">
              <h2 className="text-3xl text-white   mb-3">Pricing</h2>
              <p className="text-white/80 text-base font-montserrat mb-4">
                Pricing based on your company needs.
              </p>

              {/* Pricing items */}
              <div className="space-y-4">
                {/* IT Assets */}
                <div className="flex items-center gap-2">
                  <span className="text-white font-montserrat text-sm w-32">
                    IT Assets
                  </span>
                  <div className="flex-1 h-0.5 bg-[#159ECE]/30 mx-2 relative">
                    {IT_ASSETS_POINTS.map((point) => (
                      <div
                        key={point}
                        className="absolute h-3 w-[1px] bg-[#159ECE]/50 top-1/2 transform -translate-y-1/2"
                        style={{
                          left: `${
                            ((point - IT_ASSETS_POINTS[0]) /
                              (IT_ASSETS_POINTS[IT_ASSETS_POINTS.length - 1] -
                                IT_ASSETS_POINTS[0])) *
                            100
                          }%`,
                        }}
                      />
                    ))}
                    <div
                      className="absolute w-3 h-3 bg-[#159ECE] rounded-full top-1/2 transform -translate-y-1/2 cursor-pointer animate-pulse"
                      style={{
                        left: `${
                          ((itAssetsValue - IT_ASSETS_POINTS[0]) /
                            (IT_ASSETS_POINTS[IT_ASSETS_POINTS.length - 1] -
                              IT_ASSETS_POINTS[0])) *
                          100
                        }%`,
                      }}
                    />
                    <input
                      type="range"
                      min={IT_ASSETS_POINTS[0]}
                      max={IT_ASSETS_POINTS[IT_ASSETS_POINTS.length - 1]}
                      value={itAssetsValue}
                      onChange={handleSliderChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                  <span className="text-[#159ECE] font-montserrat text-lg font-bold w-16 text-right">
                    {itAssetsValue}
                  </span>
                </div>

                {/* Qualys WAS Assets */}
                <div className="flex items-center gap-2">
                  <span className="text-white font-montserrat text-sm w-32">
                    Qualys WAS Assets
                  </span>
                  <div className="flex-1 h-0.5 bg-[#159ECE]/30 mx-2 relative">
                    {WAS_POINTS.map((point) => (
                      <div
                        key={point}
                        className="absolute h-3 w-[1px] bg-[#159ECE]/50 top-1/2 transform -translate-y-1/2"
                        style={{
                          left: `${
                            ((point - WAS_POINTS[0]) /
                              (WAS_POINTS[WAS_POINTS.length - 1] -
                                WAS_POINTS[0])) *
                            100
                          }%`,
                        }}
                      />
                    ))}
                    <div
                      className="absolute w-3 h-3 bg-[#159ECE] rounded-full top-1/2 transform -translate-y-1/2 cursor-pointer animate-pulse"
                      style={{
                        left: `${
                          ((wasValue - WAS_POINTS[0]) /
                            (WAS_POINTS[WAS_POINTS.length - 1] -
                              WAS_POINTS[0])) *
                          100
                        }%`,
                      }}
                    />
                    <input
                      type="range"
                      min={WAS_POINTS[0]}
                      max={WAS_POINTS[WAS_POINTS.length - 1]}
                      value={wasValue}
                      onChange={handleWasChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                  <span className="text-[#159ECE] font-montserrat text-lg font-bold w-16 text-right">
                    {wasValue}
                  </span>
                </div>

                {/* Consulting Hours */}
                <div className="flex items-center gap-2">
                  <span className="text-white font-montserrat text-sm w-32">
                    Consulting Hours
                  </span>
                  <span className="text-[#3b82f6] font-montserrat text-lg font-bold w-24 text-right whitespace-nowrap">
                    80€/HOUR
                  </span>
                </div>
              </div>
            </div>

            {/* Right side - Total price and illustration */}
            <div className="flex-1 flex flex-col items-end">
              <div className="flex items-center gap-4 mb-4 border border-[#3b82f6] rounded-full">
                {/* Payment period buttons */}
                <div className="flex">
                  <button
                    className={`px-4 py-1.5 font-montserrat text-sm transition-colors border-none bg-transparent outline-none focus:outline-none focus:ring-0 ${
                      paymentPeriod === "yearly"
                        ? "text-[#58f9e6]"
                        : "text-[#3b82f6]/50 hover:text-[#3b82f6]"
                    }`}
                    onClick={() => setPaymentPeriod("yearly")}
                  >
                    Year
                  </button>
                  <div className="w-[1px] h-6 bg-[#3b82f6] mx-2 self-center" />
                  <button
                    className={`px-4 py-1.5 font-montserrat text-sm transition-colors border-none bg-transparent outline-none focus:outline-none focus:ring-0 ${
                      paymentPeriod === "monthly"
                        ? "text-[#58f9e6]"
                        : "text-[#3b82f6]/50 hover:text-[#3b82f6]"
                    }`}
                    onClick={() => setPaymentPeriod("monthly")}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              <div className="text-right flex-1 flex flex-col">
                <div>
                  <div className="flex items-center justify-end gap-2 mb-1">
                    <span className="text-white/60 font-montserrat text-sm">
                      {paymentPeriod === "yearly"
                        ? "Annual Price:"
                        : "Monthly Price:"}
                    </span>
                    <span className="text-[#3b82f6] font-montserrat text-xl">
                      €{" "}
                      {paymentPeriod === "yearly"
                        ? yearlyPrice.toFixed(2)
                        : monthlyPrice.toFixed(2)}
                    </span>
                  </div>
                  {paymentPeriod === "yearly" && (
                    <p className="text-white/60 font-montserrat text-xs mb-2">
                      One time payment will get you a 10% discount
                    </p>
                  )}
                  <p className="text-white/60 font-montserrat text-xs mb-3 ml-20">
                    To get more detailed information about the pricing you can
                    contact us at
                  </p>
                </div>
                <div className="mt-auto">
                  <Button className="rounded-lg px-6 py-3 font-montserrat text-sm">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
