import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "darkOutline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-ring-red disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-[#CC0000] text-white hover:bg-[#A80000] active:bg-[#8F0000] shadow-sm border border-transparent",
      secondary:
        "bg-[#F7F7F5] text-[#0E0F08] hover:bg-[#E3E3DE] border border-[#E3E3DE] hover:border-[#CFCFC8]",
      outline:
        "bg-white text-[#0E0F08] border border-[#CFCFC8] hover:bg-[#F7F7F5] hover:border-[#0E0F08]",
      darkOutline:
        "bg-transparent text-[#0E0F08] border-2 border-[#0E0F08] hover:bg-[#0E0F08] hover:text-white",
      ghost:
        "bg-transparent text-[#CC0000] hover:bg-[#FDECEC] border border-transparent",
    };

    const sizeStyles = {
      sm: "h-9 px-3.5 text-xs rounded-[6px] gap-1.5",
      md: "h-11 px-5 text-sm rounded-[8px] gap-2",
      lg: "h-13 px-7 text-base rounded-[8px] gap-2.5",
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return (
      <button ref={ref} disabled={disabled} className={combinedClassName} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
