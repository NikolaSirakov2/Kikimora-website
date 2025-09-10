import { DemoButton } from "@/components/ui/DemoButton";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

function ScheduleDemoSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col items-center py-20 px-4">
      <h2
        id="schedule-demo-heading"
        className="text-3xl md:text-4xl font-bold text-center mb-4 text-white font-montserrat"
      >
        Take Control of Your Industrial Cyber Risk
      </h2>
      <p className="text-lg text-white/80 font-montserrat text-center max-w-2xl mb-10">
        See how Kikimora can provide unified visibility and control for your
        unique IT/OT environment. Schedule a personalized demo with one of our
        industrial security specialists today.
      </p>
      <form
        className="w-full max-w-2xl bg-[#232b3b] rounded-2xl p-8 flex flex-col items-center shadow-md"
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault(); /* handle submit */
        }}
        aria-label="Schedule Demo Form"
      >
        <div className="flex flex-col md:flex-row w-full gap-6 mb-6">
          <div className="flex-1 flex flex-col mb-4 md:mb-0">
            <label htmlFor="name" className="text-white mb-2 font-semibold">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#353f54] text-white border border-[#3d465a] focus:border-blue-500 focus:outline-none placeholder:text-white/60"
              placeholder="Your Name"
              aria-label="Your Name"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label htmlFor="company" className="text-white mb-2 font-semibold">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#353f54] text-white border border-[#3d465a] focus:border-blue-500 focus:outline-none placeholder:text-white/60"
              placeholder="Company Name"
              aria-label="Company Name"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-6 mb-8">
          <div className="flex-1 flex flex-col mb-4 md:mb-0">
            <label htmlFor="role" className="text-white mb-2 font-semibold">
              Role
            </label>
            <input
              id="role"
              name="role"
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#353f54] text-white border border-[#3d465a] focus:border-blue-500 focus:outline-none placeholder:text-white/60"
              placeholder="Your Role"
              aria-label="Your Role"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label htmlFor="email" className="text-white mb-2 font-semibold">
              Business Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#353f54] text-white border border-[#3d465a] focus:border-blue-500 focus:outline-none placeholder:text-white/60"
              placeholder="email@company.com"
              aria-label="Business Email"
            />
          </div>
        </div>
        <DemoButton
          className="w-full bg-blue-500 hover:bg-blue-600 text-white text-base font-semibold px-8 py-3 rounded-lg shadow mt-2"
          size="lg"
        >
          Schedule Your Demo
        </DemoButton>
      </form>
    </AnimatedBackground>
  );
}

export { ScheduleDemoSection };
