import React from "react";

const GCCheckboxField = ({
  checked = false,
  onChange = () => {},
  label = "",
  disabled = false,
  className = "",
  id,
}) => {
  const checkboxId =
    id || `glass-checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <label
      htmlFor={checkboxId}
      className={`
        flex items-center space-x-3 p-3 rounded-xl backdrop-blur-md bg-white/10 
        border border-white/20 shadow-lg shadow-black/5 cursor-pointer
        transition-all duration-300 ease-in-out
        hover:bg-gradient-to-r hover:from-[#62bd72]/10 hover:to-[#39bbec]/10 
        focus-within:ring-2 focus-within:ring-[#39bbec]/30
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${
          checked
            ? "bg-gradient-to-r from-[#62bd72]/20 to-[#39bbec]/20 border-[#39bbec]/30"
            : ""
        }
        ${className}
      `}
    >
      <div className="relative">
        <input
          id={checkboxId}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
          className="sr-only"
        />
        <div
          className={`
          w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center
          ${
            checked
              ? "border-[#39bbec] bg-gradient-to-r from-[#62bd72]/20 to-[#39bbec]/20"
              : "border-gray-400 bg-white/20"
          }
        `}
        >
          {checked && (
            <svg
              className="w-3 h-3 text-[#39bbec]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
      {label && <span className="text-gray-800 font-medium">{label}</span>}
    </label>
  );
};

export default GCCheckboxField;
