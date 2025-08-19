import { useState } from "react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function GetInTouch() {
  const today = new Date();
  const month = today.toLocaleString("default", { month: "short" });
  const year = today.getFullYear();
  const currentDay = today.getDate();
  const [selectedDate, setSelectedDate] = useState<number | null>(currentDay);

  // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  ).getDay();
  // Adjust to make Monday the first day (0 = Monday, 6 = Sunday)
  const firstDayAdjusted = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  // Get the number of days in the current month
  const daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  ).getDate();

  const handleDateClick = (day: number) => {
    setSelectedDate(day);
  };

  return (
    <AnimatedBackground className="w-[99.1vw]">
      {/* Full-width section with gradient background */}
      <div className="w-screen relative -ml-[50vw] left-1/2">
        <div className="py-20">
          <div className="px-[5%] mx-auto max-w-[1400px]">
            <h2 className="text-5xl text-white   text-center mb-4">
              Get in touch today
            </h2>
            <p className="text-white/60 font-montserrat text-center mb-12 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
              adipiscing tincidunt interdum tellus eu.
            </p>

            <div className="grid grid-cols-2 gap-8 ml-20">
              {/* Contact Form */}
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white font-montserrat placeholder:text-white/40 focus:outline-none focus:border-[#00E5BE]"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white font-montserrat placeholder:text-white/40 focus:outline-none focus:border-[#00E5BE]"
                />
                <textarea
                  placeholder="Enter your message"
                  rows={6}
                  className="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white font-montserrat placeholder:text-white/40 focus:outline-none focus:border-[#00E5BE] resize-none"
                />
                <button className="font-montserrat font-semibold text-white bg-gradient-to-b from-blue-500 to-blue-600 rounded-xl px-8 py-4 w-fit shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-400 hover:to-blue-500">
                  Get Started
                </button>
              </div>

              {/* Calendar Preview */}
              <div className="flex items-center justify-center">
                <div className="bg-white rounded-3xl p-6 w-[400px] shadow-xl">
                  <div className="bg-white rounded-2xl">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">
                        Select a Date & Time
                      </h3>
                      <div className="flex items-center gap-2">
                        <span>
                          {month} {year}
                        </span>
                        <button className="p-1 bg-white hover:bg-gray-50 rounded-full transition-colors">
                          <svg
                            className="w-5 h-5 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-1 text-center text-sm mb-4">
                      {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                        <div key={day} className="py-1 text-gray-500">
                          {day}
                        </div>
                      ))}
                      {/* Empty cells for days before the first day of the month */}
                      {Array.from({ length: firstDayAdjusted }, (_, i) => (
                        <div key={`empty-${i}`} className="py-1" />
                      ))}
                      {/* Calendar days */}
                      {Array.from({ length: daysInMonth }, (_, i) => {
                        const day = i + 1;
                        const isSelected = day === selectedDate;
                        const isToday = day === currentDay;

                        return (
                          <div
                            key={i}
                            onClick={() => handleDateClick(day)}
                            className={`py-1 rounded-full cursor-pointer transition-colors ${
                              isSelected
                                ? "bg-[#00E5BE] text-[#001E38]"
                                : isToday
                                  ? "bg-primary text-white"
                                  : "hover:bg-gray-100"
                            }`}
                          >
                            {day}
                          </div>
                        );
                      })}
                    </div>

                    {/* Time Slots */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                        <span>09:00 AM</span>
                        <button className="font-montserrat font-semibold px-4 py-1 rounded-full hover:bg-[#00E5BE]/90 transition-colors">
                          Select
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                        <span>10:00 AM</span>
                        <button className="font-montserrat font-semibold px-4 py-1 rounded-full hover:bg-[#00E5BE]/90 transition-colors">
                          Select
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                        <span>11:00 AM</span>
                        <button className="font-montserrat font-semibold px-4 py-1 rounded-full hover:bg-[#00E5BE]/90 transition-colors">
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
