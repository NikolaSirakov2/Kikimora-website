


function ContactPage() {
  return (
    <div className="w-[99.1vw] min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1a2980] to-[#263859] px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 mt-40">
        Ready to Secure Your Business?
      </h1>
      <p className="text-lg md:text-xl text-[#23b098] text-center mb-8 max-w-2xl">
        Get a free consultation and learn how our managed security services can
        protect your organization
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-40 mb-8">
        <div className="text-center">
          <h2 className="text-lg font-bold text-white mb-1">Address</h2>
          <p className="text-[#23b098]">
            zh.k. Hipodruma
            <br />
            Building 107A, Ap. 1<br />
            1612 Sofia
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-bold text-white mb-1">Contact</h2>
          <p className="text-[#23b098]">
            + 359 876 761 555
            <br />
            office@so-cyber.com
          </p>
        </div>
      </div>
      <div className="w-full max-w-4xl bg-white/10 rounded-lg shadow-lg p-8 backdrop-blur-md border border-white/20 mb-20">
        <h2
          className="text-2xl font-semibold text-white text-center mb-6"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Request a Free Security Assessment
        </h2>
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-1 px-4 py-3 rounded bg-transparent border border-white/40 text-white placeholder-[#23b098] focus:outline-none focus:ring-2 focus:ring-[#29ABE2]"
              required
              aria-label="Your Name"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-3 rounded bg-transparent border border-white/40 text-white placeholder-[#23b098] focus:outline-none focus:ring-2 focus:ring-[#29ABE2]"
              required
              aria-label="Email Address"
            />
          </div>
          <input
            type="text"
            placeholder="Company Name"
            className="w-full px-4 py-3 rounded bg-transparent border border-white/40 text-white placeholder-[#23b098] focus:outline-none focus:ring-2 focus:ring-[#29ABE2]"
            aria-label="Company Name"
          />
          <textarea
            placeholder="Tell us about your security needs..."
            className="w-full px-4 py-3 rounded bg-transparent border border-white/40 text-white placeholder-[#23b098] focus:outline-none focus:ring-2 focus:ring-[#29ABE2] min-h-[120px]"
            aria-label="Tell us about your security needs"
          />
          <button
            type="submit"
            className="w-full bg-[#23b098] hover:bg-[#1e9a8a] text-white font-semibold py-3 rounded transition-colors duration-200 text-lg mt-2 shadow"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Get Your Free Assessment
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
