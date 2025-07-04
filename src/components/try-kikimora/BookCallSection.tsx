import { Button } from "../ui/button";
import { Phone } from "lucide-react";

export default function BookCallSection() {
  return (
    <section className="w-[99.2vw] flex flex-col items-center justify-center bg-[#0D1321] py-16 px-4">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <Phone className="w-10 h-10 text-[#31c9b7]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
          Not sure what is the right solution for you?
        </h2>
        <p className="text-white text-center mb-6 text-base md:text-lg">
          Book a free consultation with our team!
        </p>
        <Button
          className="bg-[#31c9b7] text-white font-semibold px-8 py-2 rounded-lg text-base hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#31c9b7] focus:ring-offset-2 transition"
          onClick={() =>
            window.open("https://calendly.com/o-antonov", "_blank")
          }
        >
          Book Call
        </Button>
      </div>
    </section>
  );
}
