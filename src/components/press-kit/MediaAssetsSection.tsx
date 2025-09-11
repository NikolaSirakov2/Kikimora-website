import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

interface Asset {
  name: string;
  size: string;
}

interface AssetGroup {
  title: string;
  assets: Asset[];
}

const assetGroups: AssetGroup[] = [
  {
    title: "Company Logos",
    assets: [
      { name: "Kikimora Logo - Full Color (PNG)", size: "2.1 MB" },
      { name: "Kikimora Logo - White (PNG)", size: "1.8 MB" },
      { name: "Kikimora Logo - Black (PNG)", size: "1.9 MB" },
      { name: "Kikimora Logo - Vector (SVG)", size: "0.5 MB" },
    ],
  },
  {
    title: "Product Screenshots",
    assets: [
      { name: "Dashboard Overview", size: "3.2 MB" },
      { name: "Threat Detection Interface", size: "2.8 MB" },
      { name: "Analytics Dashboard", size: "3.1 MB" },
      { name: "Mobile App Screenshots", size: "4.5 MB" },
    ],
  },
  {
    title: "Executive Photos",
    assets: [
      { name: "CEO - Professional Headshot", size: "2.5 MB" },
      { name: "CTO - Professional Headshot", size: "2.3 MB" },
      { name: "Leadership Team Photo", size: "5.2 MB" },
    ],
  },
];

export function MediaAssetsSection() {
  return (
    <AnimatedBackground className="w-full py-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Media Assets</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center">
        {assetGroups.map((group) => (
          <div
            key={group.title}
            className="flex flex-col bg-white rounded-2xl shadow-md p-8 w-full md:w-1/3 min-w-[300px] max-w-[400px] h-[420px]"
          >
            <div className="flex items-center gap-2 mb-6">
              <Download className="text-blue-500" />
              <span className="text-xl font-semibold">{group.title}</span>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              {group.assets.map((asset) => (
                <div
                  key={asset.name}
                  className="flex items-center justify-between"
                >
                  <div>
                    <div className="font-medium text-base text-gray-900">
                      {asset.name}
                    </div>
                    <div className="text-xs text-gray-400">{asset.size}</div>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label={`Download ${asset.name}`}
                  >
                    <Download className="w-5 h-5" />
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-6">
              <Button
                className="w-full h-12 text-base font-semibold bg-blue-500 hover:bg-blue-600"
                size="lg"
              >
                Download All
              </Button>
            </div>
          </div>
        ))}
      </div>
    </AnimatedBackground>
  );
}
