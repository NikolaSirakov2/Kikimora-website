const newsArticles = [
  {
    id: 1,
    date: "December 13, 2023",
    title: "Funding round completed!",
    description:
      "Kikimora has successfully secured €393K in funding for the development of our innovative vulnerability management software.",
    image: "/images/news/funding.jpg",
    isFeatured: true,
  },
  {
    id: 2,
    date: "November 20, 2023",
    title: "Understanding the CVSS Base Score",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    image: "/images/news/cvss.jpg",
  },
  {
    id: 3,
    date: "April 22, 2021",
    title: "Pulse Connect Secure – Critical 0-DAY Vulnerability",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynas...",
    image: "/images/news/pulse.jpg",
  },
];

export function News() {
  return (
    <div className="bg-[#001E38] w-full py-20">
      <div className="w-screen px-[5%] flex flex-col items-center">
        <div className="max-w-[1300px] w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-white text-5xl mb-4">News about us</h2>
            <p className="text-white/60 font-montserrat text-lg">
              Stay up to date with
            </p>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Featured Article */}
            {newsArticles
              .filter((article) => article.isFeatured)
              .map((article) => (
                <div key={article.id} className="relative group cursor-pointer">
                  {/* Image Placeholder */}
                  <div className="aspect-[20/9] rounded-3xl overflow-hidden bg-gray-800/80 backdrop-blur-md mb-4">
                    <div className="w-full h-full bg-gradient-to-br from-[#002A4E] to-[#001E38] flex items-center justify-center">
                      <span className="text-white/30 font-montserrat">
                        Team Photo
                      </span>
                    </div>
                  </div>
                  <div className="text-[#00E5BE] font-montserrat text-sm mb-2">
                    {article.date}
                  </div>
                  <h3 className="text-white text-2xl mb-2 group-hover:text-[#00E5BE] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-white/60 font-montserrat">
                    {article.description}
                  </p>
                </div>
              ))}

            {/* News List */}
            <div className="space-y-8">
              {newsArticles
                .filter((article) => !article.isFeatured)
                .map((article) => (
                  <div
                    key={article.id}
                    className="flex gap-6 group cursor-pointer"
                  >
                    {/* Image Placeholder */}
                    <div className="w-[19rem] h-48 rounded-2xl overflow-hidden bg-gray-800/80 backdrop-blur-md flex-shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-[#002A4E] to-[#001E38] flex items-center justify-center">
                        <span className="text-white/30 font-montserrat text-sm">
                          {article.title.includes("CVSS")
                            ? "Graph"
                            : "Security"}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="text-[#00E5BE] font-montserrat text-sm mb-2">
                        {article.date}
                      </div>
                      <h3 className="text-white text-xl mb-2 group-hover:text-[#00E5BE] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-white/60 font-montserrat text-sm">
                        {article.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
