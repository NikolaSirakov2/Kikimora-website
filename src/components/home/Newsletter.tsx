import { useState } from "react";
import { Resend } from "resend";
import { Button } from "@/components/ui/button";
import { ScheduleDemoModal } from "@/components/ui/ScheduleDemoModal";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const resend = new Resend("re_4yQzv6Uz_FKEzv4TbmCYo4tWXqejqA5F7");

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "nikolasirakov1@gmail.com",
        subject: "New Newsletter Subscription",
        text: `New subscriber email: ${email}`,
      });

      setSuccess(true);
      setEmail("");
    } catch (err) {
      setError("Failed to subscribe. Please try again later.");
      console.error("Error sending email:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AnimatedBackground className="w-[99.1vw]">
        <div className="w-full px-[5%] py-6">
          <div className="max-w-[1400px] mx-auto flex items-start justify-between">
            {/* Left side navigation */}
            <div className="flex items-center gap-12">
              <a href="/" className="text-white   text-lg">
                Kikimora
              </a>
              <div className="flex gap-12">
                {/* First column */}
                <nav className="flex flex-col gap-3">
                  <a
                    href="/"
                    className="text-white/60 hover:text-white font-montserrat text-sm"
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="text-white/60 hover:text-white font-montserrat text-sm"
                  >
                    About us
                  </a>
                  <a
                    href="/developers"
                    className="text-white/60 hover:text-white font-montserrat text-sm"
                  >
                    Developers
                  </a>
                </nav>
                {/* Second column */}
                <nav className="flex flex-col gap-3">
                  <a
                    href="/blog"
                    className="text-white/60 hover:text-white font-montserrat text-sm"
                  >
                    Blog
                  </a>
                  <a
                    href="/documentation"
                    className="text-white/60 hover:text-white font-montserrat text-sm"
                  >
                    Documentation
                  </a>
                </nav>
              </div>
            </div>

            {/* Center section */}
            <div className="flex flex-row items-center justify-center gap-6 h-full mt-6">
              <span className="text-white/60 font-montserrat text-sm text-center max-w-[180px] whitespace-pre-line">
                {"Request a demo to see\nthe full power of Kikimora"}
              </span>
              <Button
                className="font-montserrat text-sm font-semibold hover:bg-[#00E5BE]/90 whitespace-nowrap"
                onClick={() => setIsScheduleDemoModalOpen(true)}
              >
                Book Demo
              </Button>
            </div>

            {/* Right side newsletter */}
            <div className="flex flex-col gap-3">
              <span className="text-white/60 font-montserrat text-sm max-w-[270px] whitespace-pre-line">
                {
                  "Subscribe for our newsletter to\nbe always updated for the latest news"
                }
              </span>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-montserrat text-sm placeholder:text-white/40 focus:outline-none focus:border-[#00E5BE]"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#00E5BE] text-[#001E38] font-montserrat text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#00E5BE]/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </form>
              {error && <span className="text-red-400 text-sm">{error}</span>}
              {success && (
                <span className="text-[#00E5BE] text-sm">
                  Successfully subscribed!
                </span>
              )}
            </div>
          </div>
        </div>
      </AnimatedBackground>

      {/* Schedule Demo Modal */}
      <ScheduleDemoModal
        isOpen={isScheduleDemoModalOpen}
        onClose={() => setIsScheduleDemoModalOpen(false)}
      />
    </>
  );
}
