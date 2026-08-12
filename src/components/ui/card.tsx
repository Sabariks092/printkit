import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "surface" | "offwhite" | "subtle";
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", variant = "surface", children, ...props }, ref) => {
    const variantStyles = {
      surface: "bg-white border-[#E3E3DE]",
      offwhite: "bg-[#F7F7F5] border-[#E3E3DE]",
      subtle: "bg-[#F2F2EF] border-[#CFCFC8]",
    };

    return (
      <div
        ref={ref}
        className={`rounded-[12px] border p-6 text-[#0E0F08] transition-all duration-200 ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
