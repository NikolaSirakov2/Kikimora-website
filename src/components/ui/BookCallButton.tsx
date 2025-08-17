import { ButtonHTMLAttributes } from "react";

interface BookCallButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const BookCallButton = ({
  children = "Book Call",
  variant = "default",
  size = "md",
  className = "",
  ...props
}: BookCallButtonProps) => {
  const baseClasses =
    "font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeClasses = {
    sm: "px-6 py-2 text-sm rounded-lg",
    md: "px-8 py-2.5 text-base rounded-xl",
    lg: "px-12 py-3 text-lg rounded-xl",
  };

  const variantClasses = {
    default:
      "bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
    outline:
      "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    ghost: "text-blue-500 hover:bg-blue-50",
  };

  const glowEffect =
    "shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]";

  return (
    <button
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${variant === "default" ? glowEffect : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default BookCallButton;
