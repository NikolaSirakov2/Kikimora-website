export function MediaContactSection() {
  return (
    <section className="flex flex-col items-center justify-center py-12 w-full">
      <h2 className="text-3xl font-bold mb-8 text-center">Media Contact</h2>
      <div
        className="rounded-xl shadow-sm px-8 py-10 max-w-5xl w-full flex flex-col items-center"
        style={{ backgroundColor: "#f0f9f8" }}
      >
        <h3 className="text-xl font-semibold mb-4 text-center">
          Press Inquiries
        </h3>
        <div className="space-y-2 text-center mb-6">
          <div>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:press@kikimora.com"
              className="underline focus:outline-none focus:ring-2"
              style={{ color: "#23b098" }}
              aria-label="Email press@kikimora.com"
            >
              press@kikimora.com
            </a>
          </div>
          <div>
            <span className="font-semibold">Phone:</span>{" "}
            <a
              href="tel:+15551234567"
              className="underline focus:outline-none focus:ring-2"
              style={{ color: "#23b098" }}
              aria-label="Call +1 (555) 123-4567"
            >
              +1 (555) 123-4567
            </a>
          </div>
          <div>
            <span className="font-semibold">Response Time:</span> Within 24
            hours
          </div>
        </div>
        <button
          className="text-white font-medium py-2 px-6 rounded-lg focus:outline-none focus:ring-2 transition-colors"
          style={{ backgroundColor: "#23b098" }}
          type="button"
          aria-label="Contact Press Team"
        >
          Contact Press Team
        </button>
      </div>
    </section>
  );
}
