import * as React from "react";
import { cn } from "@/lib/utils";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"; size?: "sm" | "md" | "lg";
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant="default", size="md", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-2xl border transition-colors disabled:opacity-50 disabled:pointer-events-none";
    const variants = {
      default: "bg-[#15B3C0] hover:bg-[#109AA4] text-white border-transparent",
      outline: "bg-transparent border-[color:rgba(21,179,192,0.4)] text-[#0A293F] hover:bg-[color:rgba(21,179,192,0.1)]"
    };
    const sizes = { sm:"h-9 px-3 text-sm", md:"h-10 px-4 text-sm", lg:"h-11 px-5 text-base" };
    return <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />;
  }
);
Button.displayName = "Button";
