import { format } from "date-fns";
import { Link } from "react-router-dom";
import { ArrowSquareRight, ArrowSquareLeft } from "@phosphor-icons/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useYouTubePodcasts } from "../../hooks/use-youtube-podcasts";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

// Fallback episodes in case YouTube API fails
const fallbackEpisodes = [
  {
    id: "ByEgZ9ST1tA", // Example YouTube video ID for episode 5
    title: "White Hat Riddles Podcast Ep. 05",
    description:
      "Watch on YouTube: Episode 5 of the White Hat Riddles Podcast.",
    publishedAt: "2024-06-01T00:00:00Z",
    thumbnails: {
      medium: { url: "/podcast-thumbs/SmartRisk.png", width: 320, height: 180 },
      high: { url: "/podcast-thumbs/SmartRisk.png", width: 480, height: 360 },
    },
    duration: "1:12:35",
  },
  {
    id: "dQw4w9WgXcQ", // Example YouTube video ID for episode 4
    title: "White Hat Riddles Podcast Ep. 04",
    description:
      "Watch on YouTube: Episode 4 of the White Hat Riddles Podcast.",
    publishedAt: "2024-05-01T00:00:00Z",
    thumbnails: {
      medium: {
        url: "/podcast-thumbs/Ransomware.png",
        width: 320,
        height: 180,
      },
      high: { url: "/podcast-thumbs/Ransomware.png", width: 480, height: 360 },
    },
    duration: "1:30:16",
  },
  {
    id: "jNQXAC9IVRw", // Example YouTube video ID for episode 3
    title: "White Hat Riddles Podcast Ep. 03",
    description:
      "Watch on YouTube: Episode 3 of the White Hat Riddles Podcast.",
    publishedAt: "2024-04-01T00:00:00Z",
    thumbnails: {
      medium: {
        url: "/podcast-thumbs/Personal Security.png",
        width: 320,
        height: 180,
      },
      high: {
        url: "/podcast-thumbs/Personal Security.png",
        width: 480,
        height: 360,
      },
    },
    duration: "1:07:40",
  },
  {
    id: "Ch9BhBxgUp4", // Real YouTube video ID from the description
    title: "Understanding Ransomware | White Hat Riddles Podcast Ep. 02",
    description:
      "SoCyber321 views3 months ago. 50 minutes. Watch on YouTube: https://youtu.be/Ch9BhBxgUp4",
    publishedAt: "2024-03-01T00:00:00Z",
    thumbnails: {
      medium: {
        url: "/podcast-thumbs/Hybrid Warfare.png",
        width: 320,
        height: 180,
      },
      high: {
        url: "/podcast-thumbs/Hybrid Warfare.png",
        width: 480,
        height: 360,
      },
    },
    duration: "50:41",
  },
  {
    id: "eEqAtV5pjdE", // Real YouTube video ID from the description
    title:
      "Conversational AI security with Kristian Kamber, Splx.ai | White Hat Riddles Podcast Ep. 01",
    description:
      "Welcome to White Hat Riddles, episode 1 - A podcast where we dive into essential cybersecurity knowledge, analyze current trends, and explore the innovations and investments pushing the industry forward. Watch on YouTube: https://youtu.be/eEqAtV5pjdE",
    publishedAt: "2024-02-01T00:00:00Z",
    thumbnails: {
      medium: {
        url: "/podcast-thumbs/AI Security.png",
        width: 320,
        height: 180,
      },
      high: { url: "/podcast-thumbs/AI Security.png", width: 480, height: 360 },
    },
    duration: "52:29",
  },
];

export function SoCyberPodcast() {
  // Use YouTube API to fetch podcast episodes from your channel
  const { episodes, loading, error } = useYouTubePodcasts({
    channelId: "UCfW3aw7jTQwqepbcE3etsTw", // Your actual channel ID
    maxResults: 10,
    autoFetch: true,
  });

  // Use fetched episodes or fallback to static data
  const podcastEpisodes = episodes.length > 0 ? episodes : fallbackEpisodes;

  // Log the episodes being used in the carousel
  console.log(
    "🎙️ EPISODES BEING USED IN PODCAST CAROUSEL:",
    podcastEpisodes.map((episode) => ({
      id: episode.id,
      title: episode.title,
      publishedAt: episode.publishedAt,
      duration: episode.duration,
    }))
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    nextArrow: (
      <div className="next-arrow">
        <ArrowSquareRight size={32} weight="bold" className="text-white" />
      </div>
    ),
    prevArrow: (
      <div className="prev-arrow">
        <ArrowSquareLeft size={32} weight="bold" className="text-white" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <AnimatedBackground className="w-[99.1vw]">
      <section className="w-full bg-[#001E38] pt-20 pb-32">
        <style>
          {`
          .slick-prev:before,
          .slick-next:before {
            display: none !important;
          }
          .slick-prev,
          .slick-next {
            top: 110px !important;
            width: 32px !important;
            height: 32px !important;
            z-index: 1;
          }
          .slick-prev {
            left: -40px !important;
          }
          .slick-next {
            right: -40px !important;
          }
          .slick-prev:hover,
          .slick-next:hover {
            opacity: 0.8;
          }
          .slick-dots li button:before {
            color: #fff !important;
            opacity: 0.5;
          }
          .slick-dots .slick-active button:before {
            color: #fff !important;
            opacity: 1;
          }
        `}
        </style>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl text-white   mb-4">SoCyber Podcast</h1>
            <p className="text-white/60 text-lg font-montserrat">
              Expert insights and deep dives into the world of cybersecurity
              through our engaging podcast series.
            </p>
          </div>

          {/* Loading and Error States */}
          {loading && (
            <div className="text-center py-8">
              <div className="text-white text-lg">
                Loading podcast episodes...
              </div>
            </div>
          )}

          {error && (
            <div className="text-center py-8">
              <div className="text-red-400 text-lg mb-4">
                Error loading episodes: {error}
              </div>
              <div className="text-white/60">Using fallback episodes</div>
            </div>
          )}

          {/* Podcast Carousel */}
          <div className="px-4">
            <div className="max-w-[1200px] mx-auto">
              <Slider {...settings}>
                {podcastEpisodes.map((episode) => (
                  <div key={episode.id} className="px-2">
                    <Link
                      to={`/podcast/${episode.id}`}
                      className="w-[300px] bg-gradient-to-b from-[#002A4E] to-[#001E38] rounded-xl overflow-hidden transition-transform hover:scale-[1.01] h-full"
                    >
                      <div className="aspect-[16/9] relative">
                        <img
                          src={
                            episode.thumbnails?.medium?.url ||
                            episode.thumbnails?.high?.url ||
                            "/podcast-thumbs/AI Security.png"
                          }
                          alt={episode.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <div className="text-[#00E5BE] text-xs font-montserrat">
                            {format(
                              new Date(episode.publishedAt),
                              "MMMM dd, yyyy"
                            )}
                          </div>
                          <div className="text-[#00E5BE] text-xs font-montserrat">
                            {episode.duration}
                          </div>
                        </div>
                        <h3 className="text-white text-lg   mb-2 line-clamp-2">
                          {episode.title}
                        </h3>
                        <p className="text-white/60 font-montserrat text-sm line-clamp-3">
                          {episode.description}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
}
