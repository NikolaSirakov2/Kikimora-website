import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="relative overflow-hidden bg-black py-20">
      {/* Animated background glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] animate-pulse rounded-full bg-purple-500/15 blur-3xl delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 h-32 w-[600px] -translate-x-1/2 transform bg-gradient-to-t from-blue-600/30 to-transparent blur-2xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50">
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="animate-pulse">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="rgb(59, 130, 246)"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Main footer content */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo/Brand section */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="relative mb-2 text-2xl font-bold text-white">Kikimora Agent</h3>
              <p className="max-w-md text-lg text-gray-400">
                Advanced cybersecurity solutions for the modern digital landscape. Protect your
                assets with intelligent threat detection.
              </p>
            </div>

            {/* Animated CTA button */}
            <div className="group relative inline-block">
              <div className="absolute inset-0 animate-pulse rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-60 blur-sm transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
              <a
                href="https://form.typeform.com/to/BMxcTAOX"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block rounded-lg bg-black px-6 py-3 font-medium text-white transition-colors hover:text-blue-300"
              >
                Share Your Thoughts ✨
              </a>
            </div>
          </div>

          {/* Links sections */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Product</h4>
            <ul className="space-y-2">
              {['Features', 'Security', 'Integrations', 'Pricing'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-block !font-normal !text-gray-400 transition-colors duration-300 hover:!text-gray-300 hover:!underline"
                    style={{ textDecoration: 'none' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-block !font-normal !text-gray-400 transition-colors duration-300 hover:!text-gray-300 hover:!underline"
                    style={{ textDecoration: 'none' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Animated divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="h-0.5 w-36 animate-pulse bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 text-sm text-gray-500 md:mb-0">
            © 2025 Kikimora IO. All rights reserved.
          </div>

          {/* Social links with glow effect */}
          <div className="flex space-x-6">
            {[
              { name: 'LinkedIn', url: 'https://linkedin.com/company/kikimora-io' },
              { name: 'Instagram', url: 'https://instagram.com/kikimora.io' },
              { name: 'Youtube', url: 'https://youtube.com/@socyberbg' },
            ].map((social) => (
              <a
                key={`social-${social.name.toLowerCase()}`}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-gray-400 transition-all duration-300 hover:text-white"
              >
                <span className="relative z-10">{social.name}</span>
                <div className="absolute inset-0 scale-150 rounded-full bg-gradient-to-r from-blue-500/50 to-purple-500/50 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="pointer-events-none absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 animate-bounce rounded-full bg-blue-400 opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
