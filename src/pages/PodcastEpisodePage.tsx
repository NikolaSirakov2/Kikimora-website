import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Play,
  ChevronDown,
  ExternalLink,
  Calendar,
  Clock,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";
import { format } from "date-fns";
import { YouTubeApiService, YouTubeVideo } from "../lib/youtube-api";

// Transcript data from WHR-SRT-Test.txt
const episodeTranscript = [
  {
    id: 1,
    time: "00:00:03,660",
    endTime: "00:00:05,720",
    text: "Hello and welcome to White Hat Riddles.",
  },
  {
    id: 2,
    time: "00:00:06,040",
    endTime: "00:00:12,500",
    text: "I'm Angel and I'm Krasi and today we're gonna talk about first steps in your cybersecurity strategy.",
  },
  { id: 3, time: "00:00:12,780", endTime: "00:00:13,040", text: "Indeed." },
  {
    id: 4,
    time: "00:00:13,580",
    endTime: "00:00:15,560",
    text: "So what is why this is important right?",
  },
  {
    id: 5,
    time: "00:00:15,640",
    endTime: "00:00:29,820",
    text: "There's a lot of compliance regulations and other requirements that are happening in multiple industries right now and we think that it's very important to take a step back and see how to start implementing a comprehensive cybersecurity strategy.",
  },
  {
    id: 6,
    time: "00:00:30,120",
    endTime: "00:00:36,600",
    text: "That being said our CEO Krasi here will tell you what's the best first steps.",
  },
  {
    id: 7,
    time: "00:00:37,480",
    endTime: "00:01:37,360",
    text: "Yeah I think the first steps is actually knowing what you have to comply with right so so let's let's first differentiate compliance and security those are different things we talked about it in one of our episodes in more details but basically compliance gives you a framework that you have to comply with it gives you a set of rules security controls that you have to apply to your systems it defines how you manage your data your customers your employees data and then it gives you some guidance how you can establish basic measures and then on top of this one you start building your security so security doesn't come by default neither compliance you have to do some steps some initial steps so that you can start onboarding yourself with specific regulation or with some security framework the practice shows that the best steps to start is",
  },
  {
    id: 8,
    time: "00:01:37,360",
    endTime: "00:02:36,320",
    text: "knowing your threat model that's one of the first steps of course every organization takes different measures as a first step but one of the main things is knowing your threat model and establishing this across the organization so let's talk about this one I think that the first and most important part is to define what a threat is right so to define the threat first of all obviously this is based on the most important probably word in cyber security which is context what is the type of organization that you are managing what is the potential threat actor that would want to get access to your systems so by starting with these two we can narrow down essentially our search for the perfect protection for our systems in general organization right now there's obviously a lot of tools that will assist you in this right but there are there also general accepted industry-wide rules about establishing proper threat models right where would you start to",
  },
  {
    id: 9,
    time: "00:02:36,320",
    endTime: "00:03:36,040",
    text: "establish your threat model first you need to know what data you have to secure what data you provide to your customers what data you collect from your customers where is the data stored what happens with this data during transition so these are very important questions to start with when you are establishing the threat model and this also includes knowing your infrastructure knowing your architecture what happens with the data when the user provides the data from the user input from the user input fields then all the way from the front end to the back end how you store your data in in the database basically how the data transitions through the different boundaries the second thing is knowing who might be interested to compromise your company knowing your potential hacker knowing your malicious sector and this might",
  },
  {
    id: 10,
    time: "00:03:36,040",
    endTime: "00:04:35,720",
    text: "be your competitors or someone who is well funded and they have I don't know they have huge budget they can spend week or weeks or even months trying to break into your specific company and knowing your your person knowing your threat actor is very important so that you can define what security expertise the person needs to have so that they can break into your systems and based on this one you can secure your applications infrastructure based on this one you establish rules for the security of your employees the security awareness of your employees and the third approach is actually knowing what assets you have and what type of data and based on the the assets like what operating systems what type of infrastructure that's how you can also think about okay maybe some script kid is I have like publicly exposed infrastructure there is a lot of public services which are available to the internet",
  },
  // Add more transcript entries as needed - this is a sample of the first 10 entries
];

export function PodcastEpisodePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isTranscriptOpen, setIsTranscriptOpen] = useState(true);
  const [episodeData, setEpisodeData] = useState<YouTubeVideo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Audio player states
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Audio player functions
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (!id) {
      navigate("/podcasts");
      return;
    }

    const fetchEpisodeData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch specific video data from YouTube API
        const videoData = await YouTubeApiService.getVideoDetails(id);

        if (videoData) {
          setEpisodeData(videoData);
        } else {
          setError("Episode not found");
        }
      } catch (err) {
        console.error("Error fetching episode data:", err);
        setError("Failed to load episode data");
      } finally {
        setLoading(false);
      }
    };

    fetchEpisodeData();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 pt-20 w-[99.1vw] flex items-center justify-center">
        <div className="text-white text-xl">Loading episode...</div>
      </div>
    );
  }

  if (error || !episodeData) {
    return (
      <div className="min-h-screen bg-slate-900 pt-20 w-[99.1vw] flex items-center justify-center">
        <div className="text-center">
          <div className="text-white text-xl mb-4">
            {error || "Episode not found"}
          </div>
          <button
            onClick={() => navigate("/podcasts")}
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Back to Podcasts
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-20 w-[99.1vw]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Episode Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {episodeData.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>
                {format(new Date(episodeData.publishedAt), "MMMM dd, yyyy")}
              </span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{episodeData.duration}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="flex-1">
            {/* YouTube Video Player with Audio Player */}
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Watch on YouTube
              </h3>
              <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center mb-6">
                <img
                  src={
                    episodeData.thumbnails?.high?.url ||
                    episodeData.thumbnails?.medium?.url
                  }
                  alt={episodeData.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Audio Player - Positioned under thumbnail */}
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-300 font-medium">
                      Audio
                    </span>
                  </div>
                  <a
                    href="/SoCyber - Cyber Security Career.mp3"
                    download
                    className="text-blue-400 hover:text-blue-300 text-xs transition-colors"
                  >
                    Download
                  </a>
                </div>

                <audio
                  ref={audioRef}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                  className="hidden"
                >
                  <source
                    src="/SoCyber - Cyber Security Career.mp3"
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>

                <div className="flex items-center gap-3">
                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                  >
                    {isPlaying ? (
                      <Pause size={16} className="text-white" />
                    ) : (
                      <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-0.5"></div>
                    )}
                  </button>

                  {/* Progress Bar */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-gray-400 font-mono">
                        {formatTime(currentTime)}
                      </span>
                      <div className="flex-1">
                        <input
                          type="range"
                          min="0"
                          max={duration || 0}
                          value={currentTime}
                          onChange={handleSeek}
                          className="w-full h-1.5 bg-gray-700 rounded-full appearance-none cursor-pointer slider"
                          style={{
                            background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(currentTime / (duration || 1)) * 100}%, #4b5563 ${(currentTime / (duration || 1)) * 100}%, #4b5563 100%)`,
                          }}
                        />
                      </div>
                      <span className="text-xs text-gray-400 font-mono">
                        {formatTime(duration)}
                      </span>
                    </div>
                  </div>

                  {/* Volume Control */}
                  <button
                    onClick={toggleMute}
                    className="text-gray-400 hover:text-white transition-colors p-1.5 rounded hover:bg-gray-700"
                  >
                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  </button>
                </div>

                {/* YouTube Button - Inside audio player container */}
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-700/50">
                  <a
                    href={`https://youtu.be/${episodeData.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-colors relative"
                  >
                    <Play size={16} className="text-white ml-0.5 absolute" />
                  </a>
                  <a
                    href={`https://youtu.be/${episodeData.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm hover:text-red-400 transition-colors"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Episode Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                Episode Description
              </h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                {episodeData.description}
              </p>
            </div>

            {/* Key Takeaways - AI Generated Section */}
            {episodeData.keyTakeaways && episodeData.keyTakeaways.length > 0 ? (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Key Takeaways
                </h2>
                <ul className="space-y-2">
                  {episodeData.keyTakeaways.map(
                    (takeaway: string, index: number) => (
                      <li
                        key={index}
                        className="text-gray-300 flex items-start gap-3"
                      >
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{takeaway}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ) : (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Key Takeaways (AI-Generated)
                </h2>
                <div className="bg-gray-800 rounded-lg p-4">
                  <p className="text-gray-400 text-sm">
                    AI-generated key takeaways will be available here. This
                    feature analyzes the episode content to extract the most
                    important points and insights.
                  </p>
                </div>
              </div>
            )}

            {/* Full Interactive Transcript */}
            <div className="mb-8">
              <button
                onClick={() => setIsTranscriptOpen(!isTranscriptOpen)}
                className="flex items-center gap-3 text-xl font-semibold text-white mb-4 hover:text-blue-400 transition-colors group"
              >
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
                Full Interactive Transcript
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-200 group-hover:text-blue-400 ${isTranscriptOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isTranscriptOpen && (
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 shadow-xl">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-gray-700">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <h4 className="text-lg font-semibold text-white">
                          Episode Transcript
                        </h4>
                        <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
                          {episodeTranscript.length} entries
                        </span>
                      </div>
                      <a
                        href={`https://youtu.be/${episodeData.id}?t=0`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm bg-blue-500/10 px-3 py-1 rounded-lg hover:bg-blue-500/20"
                      >
                        <ExternalLink size={14} />
                        <span>View on YouTube</span>
                      </a>
                    </div>

                    {/* Transcript Content */}
                    <div className="max-h-96 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                      {episodeTranscript.map((entry) => (
                        <div
                          key={entry.id}
                          className="group hover:bg-gray-800/50 rounded-lg p-3 transition-all duration-200 border-l-4 border-transparent hover:border-blue-500"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex flex-col items-center">
                              <span className="text-blue-400 text-xs font-mono bg-gray-800 px-2 py-1 rounded border border-gray-600">
                                {entry.time}
                              </span>
                              <div className="w-px h-4 bg-gray-600 mt-1"></div>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-200 text-sm leading-relaxed group-hover:text-white transition-colors">
                                {entry.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="text-center pt-4 border-t border-gray-700 bg-gray-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <p className="text-gray-300 text-sm font-medium">
                          White Hat Riddles
                        </p>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <p className="text-gray-400 text-xs">
                        Episode about first steps in cybersecurity strategy
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
