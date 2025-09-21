import React, {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
} from "react";

interface VideoCarouselProps {
  className?: string;
}

// Context for sharing video state between carousel and buttons
interface VideoContextType {
  currentVideoIndex: number;
  setCurrentVideoIndex: (index: number) => void;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  videoRefs: React.RefObject<(HTMLVideoElement | null)[]>;
  playVideo: (index: number) => void;
  pauseAllVideos: () => void;
}

const VideoContext = createContext<VideoContextType | null>(null);

const videos = [
  {
    src: "/videos/ASM_KikiAgent_Voiceover.mp4",
    title: "Attack Surface Management",
    description: "Comprehensive visibility into your digital attack surface",
    icon: "🛡️",
  },
  {
    src: "/videos/Endpoints_KikiAgent_Voiceover.mp4",
    title: "Endpoint Security",
    description: "Advanced protection for all your endpoints",
    icon: "🔒",
  },
  {
    src: "/videos/WebScan_KikiAgent_VoiceOver.mp4",
    title: "Web Application Scanning",
    description: "Automated vulnerability detection for web applications",
    icon: "🔍",
  },
];

function VideoCarouselInner({ className = "" }: VideoCarouselProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const playVideo = (index: number) => {
    // Pause all videos first
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
        video.currentTime = 0;
      }
    });

    // Play the target video
    const targetVideo = videoRefs.current[index];
    if (targetVideo) {
      targetVideo.play();
      setIsPlaying(true);
    }
  };

  const pauseAllVideos = () => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
    setIsPlaying(false);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    // Auto-advance to next video after a short delay
    setTimeout(() => {
      const nextIndex = (currentVideoIndex + 1) % videos.length;
      setCurrentVideoIndex(nextIndex);
      playVideo(nextIndex);
    }, 2000);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  // Pause all other videos when switching
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentVideoIndex) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [currentVideoIndex]);

  const contextValue: VideoContextType = {
    currentVideoIndex,
    setCurrentVideoIndex,
    isPlaying,
    setIsPlaying,
    videoRefs,
    playVideo,
    pauseAllVideos,
  };

  return (
    <VideoContext.Provider value={contextValue}>
      <div
        className={`space-y-8 ${className} relative w-[110%] max-w-none h-[420px] rounded-2xl overflow-hidden border border-white/10`}
        style={{
          backgroundImage: 'url(/videos-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Video Carousel */}
        <div className="relative w-full h-[320px] flex items-center justify-center">
          {/* Video Container */}
          <div className="relative w-[90%] h-[90%] pt-8 flex items-center justify-center rounded-2xl">
            {videos.map((video, index) => (
              <video
                key={index}
                ref={(el) => (videoRefs.current[index] = el)}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 rounded-2xl ${
                  index === currentVideoIndex ? "opacity-100" : "opacity-0"
                }`}
                src={video.src}
                muted
                loop={false}
                onEnded={handleVideoEnd}
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
              />
            ))}
          </div>
        </div>

        {/* Hover-activated buttons */}
        <div className="flex justify-center gap-6 px-4">
          {videos.map((video, index) => (
            <HoverVideoButton key={index} index={index} title={video.title} />
          ))}
        </div>
      </div>
    </VideoContext.Provider>
  );
}

// Individual hover button component
function HoverVideoButton({ index, title }: { index: number; title: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const context = useContext(VideoContext);

  if (!context) {
    return null;
  }

  const { currentVideoIndex, setCurrentVideoIndex, playVideo, pauseAllVideos } =
    context;

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCurrentVideoIndex(index);
    playVideo(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    pauseAllVideos();
  };

  return (
    <button
      className={`
        px-6 py-1 font-montserrat font-medium text-base
        border border-white/30 border-transparent focus:border-transparent focus-visible:border-transparent
        rounded-full
        transition-all duration-300 whitespace-nowrap truncate
        outline-none ring-0 focus:outline-none focus:ring-0 active:outline-none active:ring-0 focus-visible:outline-none focus-visible:ring-0
        ${
          currentVideoIndex === index
            ? "bg-white text-black border-white/80"
            : "bg-transparent text-white hover:bg-white/10 hover:border-white/50"
        }
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
    >
      {title}
    </button>
  );
}

// Export the main component
export function VideoCarouselWithButtons(props: VideoCarouselProps) {
  return <VideoCarouselInner {...props} />;
}

// Keep the original VideoCarousel for backward compatibility
export function VideoCarousel(props: VideoCarouselProps) {
  return <VideoCarouselInner {...props} />;
}
