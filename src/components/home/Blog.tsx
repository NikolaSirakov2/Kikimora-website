interface BlogPostProps {
  image: string;
  date: string;
  title: string;
  description: string;
  isLarge?: boolean;
}

function BlogPost({ date, title, description, isLarge }: BlogPostProps) {
  if (isLarge) {
    return (
      <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl overflow-hidden h-full">
        <div className="relative aspect-[16/9]">
          <div className="w-full h-full bg-[#00539B]" />
        </div>
        <div className="p-8">
          <p className="text-white/60 font-montserrat text-sm mb-2">{date}</p>
          <h3 className="text-white   mb-4 text-3xl">{title}</h3>
          <p className="text-white/80 font-montserrat">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl overflow-hidden flex">
      <div className="relative w-[240px] flex-shrink-0">
        <div className="w-full h-full bg-[#00539B]" />
      </div>
      <div className="p-6">
        <p className="text-white/60 font-montserrat text-sm mb-2">{date}</p>
        <h3 className="text-white   mb-3 text-xl">{title}</h3>
        <p className="text-white/80 font-montserrat text-sm">{description}</p>
      </div>
    </div>
  );
}

import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

export function Blog() {
  const blogPosts = [
    {
      image: "/images/blog/funding.jpg",
      date: "December 15, 2023",
      title: "Funding round completed!",
      description:
        "Kikimora has successfully secured €596K in funding for the development of our innovative vulnerability management software.",
    },
    {
      image: "/images/blog/cvss.jpg",
      date: "November 20, 2023",
      title: "Understanding the CVSS Base Score",
      description:
        "Like to know the secrets of transforming a 24-team into a Super Bowl-winning Dynasty?",
    },
    {
      image: "/images/blog/pulse.jpg",
      date: "April 02, 2023",
      title: "Pulse Connect Secure - Critical 0-DAY Vulnerability",
      description:
        "Like to know the secrets of transforming a 24-team into a Super Bowl-winning Dynas...",
    },
  ];

  return (
    <AnimatedBackground className="py-20">
      <div className="w-full px-[5%] flex flex-col items-center">
        <div className="max-w-[1400px] w-full">
          <h2 className="text-5xl text-white   text-center mb-4">
            Stay updated with the latest in
          </h2>
          <h2 className="text-5xl text-white   text-center mb-8">
            secure development
          </h2>
          <p className="text-white/80 text-lg font-montserrat text-center mb-12">
            Discover our new features and stay up to date with security trends
            and best coding practices.
          </p>

          {/* Blog posts grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Large post on the left */}
            <div>
              <BlogPost {...blogPosts[0]} isLarge={true} />
            </div>

            {/* Two smaller posts stacked on the right */}
            <div className="grid grid-rows-2 gap-6">
              <BlogPost {...blogPosts[1]} />
              <BlogPost {...blogPosts[2]} />
            </div>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
