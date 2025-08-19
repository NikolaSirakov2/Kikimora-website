import { FiDownload } from "react-icons/fi";

interface LogoItem {
  id: string;
  name: string;
  format: string;
  size: string;
}

interface CompanyLogosProps {
  title?: string;
  logos?: LogoItem[];
  onDownloadAll?: () => void;
  className?: string;
}

const CompanyLogos = ({
  title = "Company Logos",
  logos = [
    {
      id: "full-color",
      name: "Kikimora Logo - Full Color",
      format: "PNG",
      size: "2.1 MB",
    },
    {
      id: "white",
      name: "Kikimora Logo - White",
      format: "PNG",
      size: "1.8 MB",
    },
    {
      id: "black",
      name: "Kikimora Logo - Black",
      format: "PNG",
      size: "1.9 MB",
    },
    {
      id: "vector",
      name: "Kikimora Logo - Vector",
      format: "SVG",
      size: "0.5 MB",
    },
  ],
  onDownloadAll,
  className = "",
}: CompanyLogosProps) => {
  const handleDownloadAll = () => {
    onDownloadAll?.();
    console.log("Downloading all logos");
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="w-6 h-6 bg-teal-500 rounded-lg flex items-center justify-center mr-3">
          <FiDownload className="w-4 h-4 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>

      {/* Logo List */}
      <div className="space-y-4 mb-6">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
          >
            <div className="flex-1">
              <h3 className="text-gray-900 font-medium">
                {logo.name} ({logo.format})
              </h3>
              <p className="text-sm text-gray-500 mt-1">{logo.size}</p>
            </div>

            <FiDownload className="w-5 h-5 text-black" />
          </div>
        ))}
      </div>

      {/* Download All Button */}
      <button
        onClick={handleDownloadAll}
        className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        Download All
      </button>
    </div>
  );
};

export default CompanyLogos;
