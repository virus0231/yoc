const GCRadioButton = ({
  options = [],
  name,
  value = "",
  onChange = () => {},
  disabled = false,
  className = "",
  label,
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {label && (
        <div className="text-sm font-medium text-gray-700">{label}</div>
      )}
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={`
              flex items-center space-x-3 p-3 rounded-xl backdrop-blur-md bg-white/10 
              border border-white/20 shadow-lg shadow-black/5 cursor-pointer
              transition-all duration-300 ease-in-out
              hover:bg-gradient-to-r hover:from-[#62bd72]/10 hover:to-[#39bbec]/10 
              focus-within:ring-2 focus-within:ring-[#39bbec]/30
              ${disabled ? "opacity-50 cursor-not-allowed" : ""}
              ${
                value === option.value
                  ? "bg-gradient-to-r from-[#62bd72]/20 to-[#39bbec]/20 border-[#39bbec]/30"
                  : ""
              }
            `}
          >
            <div className="relative">
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={(e) => onChange?.(e.target.value)}
                disabled={disabled}
                className="sr-only"
              />
              <div
                className={`
                w-5 h-5 rounded-full border-2 transition-all duration-200
                ${
                  value === option.value
                    ? "border-[#39bbec] bg-gradient-to-r from-[#62bd72]/20 to-[#39bbec]/20"
                    : "border-gray-400 bg-white/20"
                }
              `}
              >
                {value === option.value && (
                  <div className="w-3 h-3 rounded-full bg-[#39bbec] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                )}
              </div>
            </div>
            <span className="text-gray-800 font-medium">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default GCRadioButton;
