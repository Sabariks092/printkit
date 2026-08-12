import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "neutral" | "success" | "warning" | "info";
  children: React.ReactNode;
}

export const Badge = ({ className = "", variant = "brand", children, ...props }: BadgeProps) => {
  const variantStyles = {
    brand: "bg-[#FDECEC] text-[#CC0000] border-[#CC0000]/20",
    neutral: "bg-[#F2F2EF] text-[#0E0F08] border-[#E3E3DE]",
    success: "bg-emerald-50 text-[#247A45] border-emerald-200",
    warning: "bg-amber-50 text-[#B77900] border-amber-200",
    info: "bg-sky-50 text-[#315E8C] border-sky-200",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[6px] border text-xs font-semibold ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
