import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "white";
}

export function Logo({ className = "", size = "md", variant = "default" }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl md:text-2xl",
    lg: "text-2xl md:text-4xl",
  };

  const iconSizes = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  const isWhite = variant === "white";

  return (
    <Link to="/" className={`inline-flex items-center gap-2 group ${className}`}>
      <div className={`flex items-center justify-center rounded-full p-2 transition-all duration-300 group-hover:scale-110 ${
        isWhite ? "bg-white/20" : "bg-primary/10"
      }`}>
        <Sparkles className={`${iconSizes[size]} ${isWhite ? "text-white" : "text-primary"}`} />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-heading font-bold tracking-wide ${sizeClasses[size]} ${
          isWhite ? "text-white" : "text-foreground"
        }`}>
          JMR
        </span>
        <span className={`font-sans font-medium tracking-[0.2em] uppercase ${
          isWhite ? "text-white/80" : "text-primary"
        } ${size === "sm" ? "text-[7px]" : size === "md" ? "text-[9px]" : "text-[11px]"}`}>
          Cleaning
        </span>
      </div>
    </Link>
  );
}
