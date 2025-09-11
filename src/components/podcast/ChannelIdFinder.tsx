import { useState } from "react";
import {
  findYourChannelId,
  getChannelIdFromHandle,
} from "../../lib/youtube-utils";

export function ChannelIdFinder() {
  const [channelId, setChannelId] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleFindChannelId = async () => {
    setLoading(true);
    setError("");

    try {
      await findYourChannelId();
    } catch (err) {
      setError("Failed to find channel ID. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  const handleCustomSearch = async () => {
    if (!channelId.trim()) {
      setError("Please enter a channel handle");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const foundChannelId = await getChannelIdFromHandle(channelId);
      if (foundChannelId) {
        alert(`Found channel ID: ${foundChannelId}`);
        console.log("Channel ID:", foundChannelId);
      } else {
        setError("Could not find channel ID for this handle");
      }
    } catch (err) {
      setError("Failed to search for channel ID");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-gray-900 text-white max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Find Your Channel ID</h2>

      <div className="space-y-4">
        <div>
          <button
            onClick={handleFindChannelId}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-4 py-2 rounded"
          >
            {loading ? "Searching..." : "Find My Channel ID (@socyberbg)"}
          </button>
          <p className="text-sm text-gray-400 mt-2">
            This will search for your channel ID using your handle
          </p>
        </div>

        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold mb-2">Or search by handle:</h3>
          <div className="flex gap-2">
            <input
              type="text"
              value={channelId}
              onChange={(e) => setChannelId(e.target.value)}
              placeholder="@channelname"
              className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white"
            />
            <button
              onClick={handleCustomSearch}
              disabled={loading || !channelId.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-4 py-2 rounded"
            >
              Search
            </button>
          </div>
        </div>

        {error && <div className="text-red-400 text-sm">{error}</div>}

        <div className="bg-gray-800 p-4 rounded text-sm">
          <h4 className="font-semibold mb-2">Instructions:</h4>
          <ol className="list-decimal list-inside space-y-1 text-gray-300">
            <li>Click "Find My Channel ID" to search automatically</li>
            <li>Check the browser console for results</li>
            <li>Copy the channel ID (starts with "UC")</li>
            <li>Update the config file with your channel ID</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
