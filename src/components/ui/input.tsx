import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, error, helperText, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={inputId} className="text-xs font-bold text-[#0E0F08] uppercase tracking-wider">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={`w-full h-11 px-3.5 bg-white text-[#0E0F08] placeholder-[#777970] text-sm rounded-[8px] border transition-all duration-200 focus-ring-red ${
            error ? "border-[#CC0000]" : "border-[#E3E3DE] hover:border-[#CFCFC8]"
          } ${className}`}
          {...props}
        />
        {error && <span className="text-xs font-medium text-[#CC0000]">{error}</span>}
        {!error && helperText && <span className="text-xs text-[#777970]">{helperText}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
