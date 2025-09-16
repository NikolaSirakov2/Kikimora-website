export function GetInTouch() {
  const today = new Date();
  const month = today.toLocaleString("default", { month: "short" });
  const year = today.getFullYear();
  const currentDay = today.getDate();

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

  return (
    <div className="relative">
      {/* Dark blue top section */}
      <div className="bg-[#001E38] h-[200px] w-full"></div>

      {/* Teal gradient section with slanted top edge */}
      <div className="bg-[#006466] relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-[#001E38] transform -skew-y-3 origin-left"></div>
        <div className="relative z-10 pt-20 pb-32">
          <div className="px-[5%] mx-auto max-w-[1400px]">
            <h2 className="text-5xl text-white   text-center mb-4">
              Get in touch today
            </h2>
            <p className="text-white/60 font-montserrat text-center mb-12 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipiscing elit nulla
              adipiscing tincidunt interdum tellus du.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Names"
                  className="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white font-montserrat placeholder:text-white/40 focus:outline-none focus:border-[#00E5BE]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white font-montserrat placeholder:text-white/40 focus:outline-none focus:border-[#00E5BE]"
                />
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white font-montserrat placeholder:text-white/40 focus:outline-none focus:border-[#00E5BE] resize-none"
                />
                <button className="font-montserrat font-semibold rounded-lg px-6 py-3 w-fit hover:bg-[#00E5BE]/90 transition-colors">
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
                        <button className="p-1">
                          <svg
                            className="w-5 h-5"
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
                      {Array.from({ length: daysInMonth }, (_, i) => (
                        <div
                          key={i}
                          className={`py-1 rounded-full cursor-pointer ${
                            i + 1 === currentDay
                              ? "bg-primary text-white"
                              : "hover:bg-gray-100"
                          }`}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>

                    {/* Time Slots */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                        <span>09:00 AM</span>
                        <button className="text-primary px-4 py-1 rounded-lg border border-primary">
                          Select
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                        <span>10:00 AM</span>
                        <button className="text-primary px-4 py-1 rounded-lg border border-primary">
                          Select
                        </button>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                        <span>11:00 AM</span>
                        <button className="text-primary px-4 py-1 rounded-lg border border-primary">
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
    </div>
  );
}
