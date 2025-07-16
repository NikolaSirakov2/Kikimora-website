import React from "react";

export function MSSPHero() {
  return (
    <section className="min-h-[50vh] bg-[#0f172a] flex items-center justify-center py-16">
      <div className="max-w-[1300px] mx-auto w-full">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center ml-20">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-4xl leading-tight">
                <span className="text-white">Your go-to solution for </span>
                <span className="text-teal-400">
                  managed security services!
                </span>
              </h1>

              <div className="space-y-4 text-white text-md">
                <p>
                  <span className="text-teal-400">Kikimora</span> manages
                  vulnerabilities and provides a consolidated overview of
                  security testing.
                </p>
                <p>
                  <span className="text-teal-400">Kikimora</span> is a versatile
                  platform that adapts to your security needs.
                </p>

                <ul className="space-y-2 mt-6">
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Consolidated vulnerability data across multiple clients
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Enhanced reporting and compliance capabilities
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Gain access to numerous scanning and intel providers
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-400 mr-2">•</span>
                    Flexible pricing bundles for optimized budgeting
                  </li>
                </ul>

                <p className="text-lg font-medium">
                  Starting with Kikimora is easy and convenient!
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-lg p-4 shadow-xl my-20 max-w-[500px]">
              <form className="space-y-3">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-md bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-md bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Company"
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-md bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="size"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Size
                  </label>
                  <input
                    type="text"
                    id="size"
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-md bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="assets"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Number of Assets
                  </label>
                  <input
                    type="text"
                    id="assets"
                    className="w-full px-3 py-1.5 border border-gray-300 rounded-md bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-400 text-white font-semibold px-6 rounded-md hover:bg-teal-500 transition-colors duration-200"
                >
                  Book Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
