import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-5xl",
  };

  return (
    <Link to="/" className={`inline-block ${className}`}>
      <div className="flex flex-col items-start">
        <span className={`font-heading font-bold text-gradient-hero ${sizeClasses[size]}`}>
          JMR
        </span>
        <span className={`font-sans font-light tracking-[0.3em] uppercase text-foreground/80 ${
          size === "sm" ? "text-[8px]" : size === "md" ? "text-[10px]" : "text-xs"
        }`}>
          Cleaning
        </span>
      </div>
    </Link>
  );
}
