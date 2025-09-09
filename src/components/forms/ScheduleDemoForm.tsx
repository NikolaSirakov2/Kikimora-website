import { useForm, ValidationError } from "@formspree/react";
import { Button } from "../ui/button";

interface ScheduleDemoFormProps {
  formId?: string;
  className?: string;
}

export function ScheduleDemoForm({
  formId = "mblkjgzo", // Using the same form ID as ContactForm for now
  className = "",
}: ScheduleDemoFormProps) {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className="text-center py-8">
        <div className="text-blue-600 text-lg font-semibold mb-2">
          Demo Request Submitted!
        </div>
        <p className="text-gray-600">
          We'll contact you shortly to schedule your personalized demo.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full px-4 py-3 rounded-lg bg-transparent border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#29ABE2] focus:border-[#29ABE2] transition-colors duration-200";
  const labelClasses = "block text-gray-700 mb-2 font-medium text-sm";

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div>
        <label htmlFor="email" className={labelClasses}>
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className={inputClasses}
          placeholder="Enter your email address"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Additional Information
        </label>
        <textarea
          id="message"
          name="message"
          className={`${inputClasses} min-h-[120px] resize-vertical`}
          placeholder="Tell us about your security needs, preferred demo time, or any specific questions..."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 text-sm mt-1"
        />
      </div>

      <Button
        type="submit"
        disabled={state.submitting}
        className="w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-base shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        {state.submitting ? "Submitting..." : "Schedule Demo"}
      </Button>
    </form>
  );
}

export default ScheduleDemoForm;
