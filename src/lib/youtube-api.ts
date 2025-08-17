import { YOUTUBE_CONFIG } from "./youtube-config";

const YOUTUBE_API_KEY = YOUTUBE_CONFIG.API_KEY;

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnails: {
    medium: {
      url: string;
      width: number;
      height: number;
    };
    high: {
      url: string;
      width: number;
      height: number;
    };
  };
  duration?: string;
  viewCount?: string;
  tags?: string[];
  categoryId?: string;
  defaultLanguage?: string;
  defaultAudioLanguage?: string;
  topics?: string[];
  keyTakeaways?: string[];
  hasCaptions?: boolean;
  captionLanguages?: string[];
}

export interface YouTubeApiResponse {
  items: Array<{
    id: string;
    snippet: {
      title: string;
      description: string;
      publishedAt: string;
      thumbnails: {
        medium: {
          url: string;
          width: number;
          height: number;
        };
        high: {
          url: string;
          width: number;
          height: number;
        };
      };
      resourceId?: {
        videoId: string;
      };
    };
    contentDetails?: {
      duration: string;
    };
    statistics?: {
      viewCount: string;
    };
  }>;
  nextPageToken?: string;
}

export class YouTubeApiService {
  private static formatDuration(duration: string): string {
    // Convert ISO 8601 duration to readable format
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return "0:00";

    const hours = parseInt(match[1] || "0");
    const minutes = parseInt(match[2] || "0");
    const seconds = parseInt(match[3] || "0");

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  static async getChannelVideos(
    channelId: string,
    maxResults: number = 10
  ): Promise<YouTubeVideo[]> {
    try {
      console.log(
        `🎯 Fetching channel videos with filters: ${YOUTUBE_CONFIG.MIN_VIDEO_DURATION} seconds minimum, ${YOUTUBE_CONFIG.MIN_PUBLISH_YEAR}+ only`
      );
      // First, get the uploads playlist ID
      const channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${YOUTUBE_API_KEY}`
      );

      if (!channelResponse.ok) {
        throw new Error(
          `Failed to fetch channel: ${channelResponse.statusText}`
        );
      }

      const channelData = await channelResponse.json();

      if (!channelData.items || channelData.items.length === 0) {
        throw new Error("Channel not found");
      }

      const uploadsPlaylistId =
        channelData.items[0].contentDetails.relatedPlaylists.uploads;

      // Get more videos initially to filter out shorts
      const initialMaxResults = Math.max(maxResults * 3, 30); // Get more videos to filter

      // Then, get the videos from the uploads playlist
      const playlistResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${initialMaxResults}&key=${YOUTUBE_API_KEY}`
      );

      if (!playlistResponse.ok) {
        throw new Error(
          `Failed to fetch playlist: ${playlistResponse.statusText}`
        );
      }

      const playlistData: YouTubeApiResponse = await playlistResponse.json();

      // Get video details including duration and view count
      const videoIds = playlistData.items
        .map((item) => item.snippet.resourceId?.videoId)
        .filter(Boolean)
        .join(",");

      const videoDetailsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
      );

      if (!videoDetailsResponse.ok) {
        throw new Error(
          `Failed to fetch video details: ${videoDetailsResponse.statusText}`
        );
      }

      const videoDetailsData: YouTubeApiResponse =
        await videoDetailsResponse.json();

      // Combine playlist data with video details and filter out shorts
      const allVideos: YouTubeVideo[] = playlistData.items.map(
        (item, index) => {
          const videoDetail = videoDetailsData.items[index];
          const duration = videoDetail?.contentDetails?.duration
            ? this.formatDuration(videoDetail.contentDetails.duration)
            : undefined;

          return {
            id: item.snippet.resourceId?.videoId || item.id,
            title: item.snippet.title,
            description: item.snippet.description,
            publishedAt: item.snippet.publishedAt,
            thumbnails: item.snippet.thumbnails,
            duration,
            viewCount: videoDetail?.statistics?.viewCount,
          };
        }
      );

      // Log all videos before filtering
      console.log(
        "🎬 ALL VIDEOS FROM YOUTUBE API (BEFORE FILTERING):",
        allVideos.map((video) => ({
          id: video.id,
          title: video.title,
          publishedAt: new Date(video.publishedAt).toLocaleDateString(),
          duration: video.duration,
          viewCount: video.viewCount,
        }))
      );

      // Filter and log only videos with "Episode", "Ep", or "Ep." in the title
      const episodeVideos = allVideos.filter((video) => {
        const title = video.title.toLowerCase();
        return (
          title.includes("episode") ||
          title.includes("ep ") ||
          title.includes("ep.")
        );
      });

      console.log(
        "🎙️ VIDEOS WITH 'EPISODE', 'EP', OR 'EP.' IN TITLE:",
        episodeVideos.map((video) => ({
          id: video.id,
          title: video.title,
          publishedAt: new Date(video.publishedAt).toLocaleDateString(),
          duration: video.duration,
          viewCount: video.viewCount,
        }))
      );

      // Sort by publish date (newest first) and limit results
      const finalVideos = episodeVideos
        .sort((a, b) => {
          return (
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
          );
        })
        .slice(0, maxResults);

      console.log(
        "🎙️ FINAL EPISODE VIDEOS FOR CAROUSEL:",
        finalVideos.map((video) => ({
          id: video.id,
          title: video.title,
          publishedAt: new Date(video.publishedAt).toLocaleDateString(),
          duration: video.duration,
          viewCount: video.viewCount,
        }))
      );

      return finalVideos;
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
      throw error;
    }
  }

  static async searchVideos(
    query: string,
    maxResults: number = 10
  ): Promise<YouTubeVideo[]> {
    try {
      // Get more videos initially to filter out shorts
      const initialMaxResults = Math.max(maxResults * 3, 30);

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=${initialMaxResults}&key=${YOUTUBE_API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`Failed to search videos: ${response.statusText}`);
      }

      const data = await response.json();

      // Get video details including duration and view count
      const videoIds = data.items.map((item: any) => item.id.videoId).join(",");

      const videoDetailsResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
      );

      if (!videoDetailsResponse.ok) {
        throw new Error(
          `Failed to fetch video details: ${videoDetailsResponse.statusText}`
        );
      }

      const videoDetailsData: YouTubeApiResponse =
        await videoDetailsResponse.json();

      const allVideos: YouTubeVideo[] = data.items.map(
        (item: any, index: number) => {
          const videoDetail = videoDetailsData.items[index];
          const duration = videoDetail?.contentDetails?.duration
            ? this.formatDuration(videoDetail.contentDetails.duration)
            : undefined;

          return {
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            publishedAt: item.snippet.publishedAt,
            thumbnails: item.snippet.thumbnails,
            duration,
            viewCount: videoDetail?.statistics?.viewCount,
          };
        }
      );

      // Log all videos before filtering
      console.log(
        "🎬 ALL SEARCH VIDEOS FROM YOUTUBE API (BEFORE FILTERING):",
        allVideos.map((video) => ({
          id: video.id,
          title: video.title,
          publishedAt: new Date(video.publishedAt).toLocaleDateString(),
          duration: video.duration,
          viewCount: video.viewCount,
        }))
      );

      // Filter and log only videos with "Episode", "Ep", or "Ep." in the title
      const episodeVideos = allVideos.filter((video) => {
        const title = video.title.toLowerCase();
        return (
          title.includes("episode") ||
          title.includes("ep ") ||
          title.includes("ep.")
        );
      });

      console.log(
        "🎙️ SEARCH VIDEOS WITH 'EPISODE', 'EP', OR 'EP.' IN TITLE:",
        episodeVideos.map((video) => ({
          id: video.id,
          title: video.title,
          publishedAt: new Date(video.publishedAt).toLocaleDateString(),
          duration: video.duration,
          viewCount: video.viewCount,
        }))
      );

      // Sort by publish date (newest first) and limit results
      const finalVideos = episodeVideos
        .sort((a, b) => {
          return (
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
          );
        })
        .slice(0, maxResults);

      console.log(
        "🎙️ FINAL SEARCH EPISODE VIDEOS FOR CAROUSEL:",
        finalVideos.map((video) => ({
          id: video.id,
          title: video.title,
          publishedAt: new Date(video.publishedAt).toLocaleDateString(),
          duration: video.duration,
          viewCount: video.viewCount,
        }))
      );

      return finalVideos;
    } catch (error) {
      console.error("Error searching YouTube videos:", error);
      throw error;
    }
  }

  static async getVideoDetails(videoId: string): Promise<YouTubeVideo | null> {
    try {
      console.log(`🎯 Fetching video details for ID: ${videoId}`);

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${YOUTUBE_API_KEY}`
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch video details: ${response.statusText}`
        );
      }

      const data = await response.json();

      if (!data.items || data.items.length === 0) {
        console.log(`❌ No video found with ID: ${videoId}`);
        return null;
      }

      const video = data.items[0];
      const duration = video.contentDetails?.duration
        ? this.formatDuration(video.contentDetails.duration)
        : undefined;

      // Extract topics and key takeaways from description
      const { topics, keyTakeaways } = this.extractContentFromDescription(
        video.snippet.description
      );

      // Check for captions
      const captionInfo = await this.getCaptionInfo(videoId);

      const videoData: YouTubeVideo = {
        id: video.id,
        title: video.snippet.title,
        description: video.snippet.description,
        publishedAt: video.snippet.publishedAt,
        thumbnails: video.snippet.thumbnails,
        duration,
        viewCount: video.statistics?.viewCount,
        tags: video.snippet.tags || [],
        categoryId: video.snippet.categoryId,
        defaultLanguage: video.snippet.defaultLanguage,
        defaultAudioLanguage: video.snippet.defaultAudioLanguage,
        topics,
        keyTakeaways,
        hasCaptions: captionInfo.hasCaptions,
        captionLanguages: captionInfo.languages,
      };

      console.log(`✅ Successfully fetched video: "${videoData.title}"`);
      return videoData;
    } catch (error) {
      console.error("Error fetching video details:", error);
      throw error;
    }
  }

  private static async getCaptionInfo(
    videoId: string
  ): Promise<{ hasCaptions: boolean; languages: string[] }> {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/captions?part=snippet&videoId=${videoId}&key=${YOUTUBE_API_KEY}`
      );

      if (!response.ok) {
        // If captions endpoint fails, assume no captions
        return { hasCaptions: false, languages: [] };
      }

      const data = await response.json();
      const hasCaptions = data.items && data.items.length > 0;
      const languages = hasCaptions
        ? data.items.map((item: any) => item.snippet.language).filter(Boolean)
        : [];

      return { hasCaptions, languages };
    } catch (error) {
      console.log("Could not fetch caption info:", error);
      return { hasCaptions: false, languages: [] };
    }
  }

  private static extractContentFromDescription(description: string): {
    topics: string[];
    keyTakeaways: string[];
  } {
    const topics: string[] = [];
    const keyTakeaways: string[] = [];

    // Extract topics from common patterns in podcast descriptions
    const topicPatterns = [
      /topics?[:\s]+([^.\n]+)/gi,
      /discuss(?:ing|ed)?[:\s]+([^.\n]+)/gi,
      /cover(?:ing|ed)?[:\s]+([^.\n]+)/gi,
      /focus(?:ing|ed)?[:\s]+([^.\n]+)/gi,
      /about[:\s]+([^.\n]+)/gi,
      /explor(?:ing|ed)?[:\s]+([^.\n]+)/gi,
      /dive\s+(?:into|deep)[:\s]+([^.\n]+)/gi,
    ];

    // Extract key takeaways from common patterns
    const takeawayPatterns = [
      /key\s+(?:takeaways?|points?|insights?)[:\s]+([^.\n]+)/gi,
      /main\s+(?:points?|takeaways?)[:\s]+([^.\n]+)/gi,
      /learn(?:ing)?[:\s]+([^.\n]+)/gi,
      /understand(?:ing)?[:\s]+([^.\n]+)/gi,
      /discuss(?:ing|ed)?[:\s]+([^.\n]+)/gi,
    ];

    // Extract topics
    topicPatterns.forEach((pattern) => {
      const matches = description.matchAll(pattern);
      for (const match of matches) {
        if (match[1]) {
          const topic = match[1].trim();
          if (topic && !topics.includes(topic)) {
            topics.push(topic);
          }
        }
      }
    });

    // Extract key takeaways
    takeawayPatterns.forEach((pattern) => {
      const matches = description.matchAll(pattern);
      for (const match of matches) {
        if (match[1]) {
          const takeaway = match[1].trim();
          if (takeaway && !keyTakeaways.includes(takeaway)) {
            keyTakeaways.push(takeaway);
          }
        }
      }
    });

    // If no specific topics found, try to extract from title and description
    if (topics.length === 0) {
      const commonTopics = [
        "Cybersecurity",
        "AI Security",
        "Ransomware",
        "Data Protection",
        "Network Security",
        "Cloud Security",
        "Incident Response",
        "Threat Intelligence",
        "Security Awareness",
        "Compliance",
        "Risk Management",
        "Penetration Testing",
        "Vulnerability Management",
        "Conversational AI",
        "Artificial Intelligence",
        "Machine Learning",
        "Hybrid Warfare",
        "Personal Security",
        "Digital Privacy",
        "Online Safety",
        "Smart Risk Management",
        "Business Protection",
      ];

      const descriptionLower = description.toLowerCase();

      commonTopics.forEach((topic) => {
        if (descriptionLower.includes(topic.toLowerCase())) {
          if (!topics.includes(topic)) {
            topics.push(topic);
          }
        }
      });

      // If still no topics, try to extract from the first few sentences
      if (topics.length === 0) {
        const sentences = description.split(/[.!?]+/).slice(0, 2);
        sentences.forEach((sentence) => {
          const cleanSentence = sentence.trim();
          if (cleanSentence.length > 10 && cleanSentence.length < 100) {
            topics.push(cleanSentence);
          }
        });
      }
    }

    // If no key takeaways found, generate some from the description
    if (keyTakeaways.length === 0) {
      const sentences = description
        .split(/[.!?]+/)
        .filter((s) => s.trim().length > 20);
      const relevantSentences = sentences.slice(0, 3); // Take first 3 relevant sentences

      relevantSentences.forEach((sentence) => {
        const cleanSentence = sentence.trim();
        if (cleanSentence && !keyTakeaways.includes(cleanSentence)) {
          keyTakeaways.push(cleanSentence);
        }
      });
    }

    return { topics, keyTakeaways };
  }
}
