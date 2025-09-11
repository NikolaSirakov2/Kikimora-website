
function IntroCaseStudy() {
  return (
    <div className="w-screen bg-blue-950 flex justify-center py-12">
      <section
        className="max-w-md md:max-w-[800px] bg-gradient-to-br from-blue-800 to-purple-800 rounded-xl shadow-lg p-6 md:p-8 m-4 text-white"
        aria-label="Project Introduction"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2 font-sans">
          Intorduction
        </h2>
        <div className="flex flex-row items-center gap-4 mb-2 text-sm md:text-base">
          <span className="flex items-center gap-1">
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="inline-block text-blue-500"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M8 12.5l2 2 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            3-4 months
          </span>
          <span className="flex items-center gap-1">
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="inline-block text-blue-500"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M8 12.5l2 2 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Google
          </span>
          <span className="flex items-center gap-1">
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="inline-block text-blue-500"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M8 12.5l2 2 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Manage Security Assessments
          </span>
        </div>
        <div className="mb-1">
          <span className="font-semibold text-white">Project summary:</span>
        </div>
        <p className="text-xs md:text-sm text-[#B0C4D9] leading-snug">
          Experience firsthand how our tools make security integration a breeze.
          Discover how our features can streamline your development process and
          enhance the security of your applications.
        </p>
      </section>
    </div>
  );
}

export { IntroCaseStudy };
