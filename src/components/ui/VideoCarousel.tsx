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
        className={`relative ${className} w-[110%] max-w-none h-[420px] rounded-2xl overflow-hidden border border-white/10`}
        style={{
          backgroundImage: "url(/videos-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Video Container - takes almost full size with more padding */}
        <div className="absolute inset-x-6 inset-y-2 flex items-center justify-center overflow-hidden rounded-2xl">
          {videos.map((video, index) => (
            <video
              key={index}
              ref={(el) => (videoRefs.current[index] = el)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 rounded-2xl ${
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

        {/* Hover-activated buttons - positioned at bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center gap-3 px-4">
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
  const context = useContext(VideoContext);

  if (!context) {
    return null;
  }

  const { currentVideoIndex, setCurrentVideoIndex, playVideo, pauseAllVideos } =
    context;

  const handleMouseEnter = () => {
    setCurrentVideoIndex(index);
    playVideo(index);
  };

  const handleMouseLeave = () => {
    pauseAllVideos();
  };

  return (
    <button
      className={`
        px-3 py-1 font-montserrat font-medium text-sm
        border focus:border-transparent focus-visible:border-transparent
        rounded-lg
        transition-all duration-300 whitespace-nowrap truncate
        outline-none ring-0 focus:outline-none focus:ring-0 active:outline-none active:ring-0 focus-visible:outline-none focus-visible:ring-0
        ${
          currentVideoIndex === index
            ? "bg-blue-200/80 text-black border-blue-200/80"
            : "bg-blue-50/80 text-black border-blue-100/80 hover:bg-blue-200/80"
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
