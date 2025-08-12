import { useRef, useState } from "react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

function TestimonialCard({
  quote,
  author,
  position,
  company,
}: TestimonialCardProps) {
  return (
    <div className="min-w-[400px] bg-[#002A4E] rounded-3xl p-8 flex flex-col">
      <p className="text-white/80 text-lg font-montserrat mb-8 flex-grow">
        "{quote}"
      </p>
      <div>
        <p className="text-white font-montserrat font-bold">{author}</p>
        <p className="text-white/60 font-montserrat text-sm">
          {position}, {company}
        </p>
      </div>
    </div>
  );
}

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0));
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll speed multiplier
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const testimonials = [
    {
      quote:
        "At Designership, they ship truly brilliant products! It's easy to use and scale, and is really handy to customize for any projects.",
      author: "Loki Bright",
      position: "Founder",
      company: "Brown BRC",
    },
    {
      quote:
        "At Designership, they ship truly brilliant products! It's easy to use and scale, and is really handy to customize for any projects.",
      author: "Loki Bright",
      position: "Founder",
      company: "Brown BRC",
    },
    {
      quote:
        "At Designership, they ship truly brilliant products! It's easy to use and scale, and is really handy to customize for any projects.",
      author: "Loki Bright",
      position: "Founder",
      company: "Brown BRC",
    },
    {
      quote:
        "At Designership, they ship truly brilliant products! It's easy to use and scale, and is really handy to customize for any projects.",
      author: "Loki Bright",
      position: "Founder",
      company: "Brown BRC",
    },
    {
      quote:
        "At Designership, they ship truly brilliant products! It's easy to use and scale, and is really handy to customize for any projects.",
      author: "Loki Bright",
      position: "Founder",
      company: "Brown BRC",
    },
  ];

  return (
    <AnimatedBackground className="py-20">
      <div className="w-full px-[5%] flex flex-col items-center">
        <div className="max-w-[1400px] w-full">
          <h2 className="text-5xl text-white   text-center mb-4">
            What our clients say
          </h2>
          <p className="text-white/80 text-lg font-montserrat text-center mb-12">
            Learn from their experiences and see how our tools can fit into your
            workflow.
          </p>

          {/* Testimonials carousel */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing mx-auto"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              width: "calc(3 * 400px + 2 * 20px)", // 3 cards * 400px width + 2 gaps * 20px
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="snap-start z-10">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
