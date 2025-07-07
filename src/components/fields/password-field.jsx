const GCPasswordField = ({
  placeholder = "Enter password",
  value = "",
  onChange = () => {},
  disabled = false,
  required = false,
  className = "",
  label = "",
  id,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId =
    id || `glass-password-${Math.random().toString(36).substr(2, 9)}`;

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
      <div className="relative">
        <input
          id={inputId}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className="
            w-full px-4 py-3 pr-12 rounded-xl backdrop-blur-md bg-white/10 border border-white/20
            placeholder-gray-500 text-gray-800 shadow-lg shadow-black/5
            transition-all duration-300 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-[#39bbec]/30 focus:border-[#39bbec]/30
            focus:bg-gradient-to-r focus:from-[#62bd72]/10 focus:to-[#39bbec]/10 hover:bg-white/15
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="
            absolute right-3 top-1/2 transform -translate-y-1/2
            text-gray-500 hover:text-[#39bbec] focus:outline-none
            focus:ring-2 focus:ring-[#39bbec]/30 rounded
            p-1 transition-colors duration-200
          "
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464M14.12 14.12l1.414 1.414"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default GCPasswordField;
