import React, { useState } from "react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

interface ImageOption {
  id: number;
  label: string;
  src: string;
}

const imageOptions: ImageOption[] = [
  { id: 1, label: "All-in-One Security", src: "/menu1.jfif" },
  { id: 2, label: "AI Auto Triangle", src: "/menu2.jfif" },
  { id: 3, label: "AI AutoFix", src: "/menu3.jfif" },
  { id: 4, label: "CI/CD Flow", src: "/menu4.jfif" },
  { id: 5, label: "Runtime Protection", src: "/menu5.jfif" },
];

export function ImageSwitcher() {
  const [selectedImage, setSelectedImage] = useState<number>(1);

  return (
    <AnimatedBackground className="w-[99.1vw]">
      <section className="py-4 px-4 bg-white relative z-2">
        <div className="flex flex-col items-center gap-8 bg-white pb-8 max-w-[1200px] mx-auto rounded-lg relative z-2">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mt-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Security Solutions
            </h1>
            <p className="text-lg text-gray-600 font-montserrat">
              Explore our suite of advanced security features designed to
              protect your applications at every stage of development and
              deployment.
            </p>
          </div>

          {/* Image switcher text links */}
          <div className="flex justify-center items-center bg-gray-200 rounded-full p-2 mt-8 shadow-sm">
            {imageOptions.map((option, idx) => (
              <React.Fragment key={option.id}>
                <button
                  onClick={() => setSelectedImage(option.id)}
                  className={`px-6 py-2 font-montserrat text-base focus:outline-none transition-colors duration-200
                    ${
                      selectedImage === option.id
                        ? "bg-white text-primary rounded-full shadow"
                        : "bg-transparent text-gray-600 hover:text-primary"
                    }
                  `}
                  style={{ border: "none", outline: "none" }}
                  aria-pressed={selectedImage === option.id}
                >
                  {option.label}
                </button>
                {idx < imageOptions.length - 1 && (
                  <div
                    className="h-6 w-px bg-gray-300 mx-1"
                    aria-hidden="true"
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Image display with gradient border effect */}
          <div className="w-[1040px] h-[640px] relative rounded-2xl p-[1px] bg-gradient-to-b from-white/10 via-white/10 to-transparent">
            <div className="w-full h-full p-5 rounded-2xl bg-[#001E38]">
              <div className="w-[1000px] h-[600px] relative overflow-hidden">
                {imageOptions.map((option) => (
                  <img
                    key={option.id}
                    src={option.src}
                    alt={`Menu ${option.id}`}
                    className={`w-full h-full object-cover transition-opacity duration-300 absolute top-0 left-0 rounded-t-xl ${
                      selectedImage === option.id ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                {/* Gradient overlay */}
                <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#001E38] via-[#001E38]/60 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
}
