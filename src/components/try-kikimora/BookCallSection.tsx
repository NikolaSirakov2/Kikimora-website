import { Button } from "../ui/button";
import { Phone } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export default function BookCallSection() {
  return (
    <AnimatedBackground className="w-[99.1vw] flex flex-col items-center justify-center py-16 px-4">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <Phone className="w-10 h-10 text-blue-600" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
          Not sure what is the right solution for you?
        </h1>
        <p className="text-white text-center mb-6 text-base md:text-lg">
          Book a free consultation with our team!
        </p>
        <Button
          className="bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg text-base hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition"
          onClick={() =>
            window.open("https://meetings.hubspot.com/oleg-antonov/meeting-with-socyber-kikimora", "_blank")
          }
        >
          Book Call
        </Button>
      </div>
    </AnimatedBackground>
  );
}
