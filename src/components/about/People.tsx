
const teamMembers = [
  {
    name: "Krasimir Kotsev",
    position: "Founder and CEO",
    linkedin: "#",
  },
  {
    name: "Martin Malinov",
    position: "Head of Product",
    linkedin: "#",
  },
  {
    name: "Yordan Rafailov",
    position: "CPO",
    linkedin: "#",
  },
  {
    name: "Rumen Arsenov",
    position: "Head of Business Development",
    linkedin: "#",
  },
  {
    name: "Veselina Mileva",
    position: "Business Development",
    linkedin: "#",
  },
  {
    name: "Kristiyan Petrov",
    position: "Software Engineer",
    linkedin: "#",
  },
  {
    name: "Kikimora",
    position: "AI Assistant",
    socials: {
      instagram: "#",
      youtube: "#",
    },
  },
];

export function People() {
  return (
    <div className="bg-[#001E38] w-full">
      <div className="w-screen px-[5%] flex flex-col items-center">
        <div className="max-w-[1300px] w-full py-20">
          {/* Header */}
          <h2 className="text-5xl text-white font-conthrax text-center mb-16">
            People behind Kikimora
          </h2>

          {/* Team Grid */}
          <div className="grid grid-cols-4 gap-6">
            {/* Team Members */}
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col">
                {/* Photo Placeholder */}
                <div className="aspect-square bg-[#002A4E] rounded-3xl mb-4" />

                {/* Info */}
                <h3 className="text-white font-conthrax text-lg mb-1">
                  {member.name}
                </h3>
                <p className="text-white/60 font-montserrat text-sm mb-3">
                  {member.position}
                </p>

                {/* Social Links */}
                <div className="flex gap-2">
                  {"socials" in member ? (
                    <>
                      <a
                        href={member.socials?.instagram}
                        className="text-white/60 hover:text-white"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a
                        href={member.socials?.youtube}
                        className="text-white/60 hover:text-white"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>
                    </>
                  ) : (
                    <a
                      href={member.linkedin}
                      className="text-white/60 hover:text-white"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Join Us Card */}
            <div className="flex flex-col">
              <div className="aspect-square bg-[#002A4E] rounded-3xl mb-4 flex flex-col items-center justify-center p-8 text-center">
                <h3 className="text-white font-conthrax text-2xl mb-2">
                  You can be the
                </h3>
                <span className="text-[#00E5BE] font-conthrax text-2xl mb-4">
                  next
                </span>
                <button className="text-white/60 hover:text-white font-montserrat text-sm">
                  Send an open application
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
