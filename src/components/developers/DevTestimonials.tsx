import { useRef, useState } from "react";

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
    <div className="min-w-[400px] bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 flex flex-col">
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

export function DevTestimonials() {
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
    <div className="bg-[#001E38] py-20">
      <div className="w-full px-[5%] flex flex-col items-center">
        <div className="max-w-[1400px] w-full">
          <h2 className="text-5xl text-white   text-center mb-4">
            See how our security solutions have upgraded developers' workflows
          </h2>
          <p className="text-white/80 text-lg font-montserrat text-center mb-12">
            Learn from their experiences and see how our tools can fit into your
            workflow.
          </p>

          {/* Testimonials carousel */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="snap-start">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
