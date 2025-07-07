const GCTextField = ({
  type = "text",
  placeholder = "",
  value = "",
  onChange = () => {},
  disabled = false,
  required = false,
  className = "",
  label = "",
  id,
}) => {
  const inputId =
    id || `glass-input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className="
          w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20
          placeholder-gray-500 text-gray-800 shadow-lg shadow-black/5
          transition-all duration-300 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-[#39bbec]/30 focus:border-[#39bbec]/30
          focus:bg-gradient-to-r focus:from-[#62bd72]/10 focus:to-[#39bbec]/10 hover:bg-white/15
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      />
    </div>
  );
};

export default GCTextField;
