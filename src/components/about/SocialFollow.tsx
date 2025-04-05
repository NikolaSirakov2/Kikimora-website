import React from "react";

export function SocialFollow() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "#",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "#",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "#",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#001E38]">
      <div className="flex justify-center w-full px-[5%] py-16">
        <div className="bg-[#006466] rounded-2xl max-w-[1400px] w-full relative overflow-hidden">
          <div className="px-16 py-16 flex flex-col items-center">
            <div className="max-w-[1400px] w-full relative">
              {/* Content */}
              <div className="text-center relative z-10">
                <h2 className="text-white font-conthrax text-5xl mb-2">
                  Follow our journey
                </h2>
                <p className="text-white/60 font-montserrat text-lg mb-8">
                  Cyber
                </p>
                {/* Social Links */}
                <div className="flex justify-center items-center gap-8">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="text-white hover:text-[#00E5BE] transition-colors"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                {/* Butterfly */}
                <div className="w-16 h-16 text-[#B66BFF] opacity-80">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.402 0.504587C12.4993 0.342544 12.7467 0.342544 12.844 0.504587L14.6394 3.49541C14.7367 3.65746 14.63 3.85 14.4446 3.85H10.8014C10.616 3.85 10.5093 3.65746 10.6066 3.49541L12.402 0.504587Z" />
                    <path d="M14.402 3.50459C14.4993 3.34254 14.7467 3.34254 14.844 3.50459L16.6394 6.49541C16.7367 6.65746 16.63 6.85 16.4446 6.85H12.8014C12.616 6.85 12.5093 6.65746 12.6066 6.49541L14.402 3.50459Z" />
                    <path d="M10.402 3.50459C10.4993 3.34254 10.7467 3.34254 10.844 3.50459L12.6394 6.49541C12.7367 6.65746 12.63 6.85 12.4446 6.85H8.80139C8.61599 6.85 8.50934 6.65746 8.60665 6.49541L10.402 3.50459Z" />
                  </svg>
                </div>
                {/* Dotted Line */}
                <div className="absolute top-1/2 left-16 w-32 border-t-2 border-dashed border-[#B66BFF] opacity-40" />
              </div>

              {/* Right Decorative Element */}
              <div className="absolute right-0 bottom-0">
                <div className="w-32 h-32">
                  <div className="w-full h-full bg-[#B66BFF] opacity-20 rounded-tl-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
