const GCSelectbox = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  className = "",
  label,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef < HTMLDivElement > null;
  const selectId =
    id || `glass-select-${Math.random().toString(36).substr(2, 9)}`;

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen(!isOpen);
    } else if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div className={`relative space-y-2 ${className}`} ref={selectRef}>
      {label && (
        <label
          htmlFor={selectId}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className={`
          w-full px-4 py-3 rounded-xl backdrop-blur-md bg-white/10 border border-white/20
          text-gray-800 shadow-lg shadow-black/5 cursor-pointer
          transition-all duration-300 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-[#39bbec]/30 focus:border-[#39bbec]/30
          focus:bg-gradient-to-r focus:from-[#62bd72]/10 focus:to-[#39bbec]/10 hover:bg-white/15
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          flex items-center justify-between
        `}
      >
        <span className={selectedOption ? "text-gray-800" : "text-gray-500"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`w-5 h-5 text-[#39bbec] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <div
          className="
          absolute top-full left-0 right-0 z-50 mt-1 rounded-xl backdrop-blur-md bg-white/90 
          border border-white/20 shadow-xl shadow-black/10 max-h-60 overflow-auto
          animate-fade-in
        "
        >
          <ul role="listbox" className="py-2">
            {options.map((option) => (
              <li
                key={option.value}
                role="option"
                aria-selected={value === option.value}
                onClick={() => {
                  onChange?.(option.value);
                  setIsOpen(false);
                }}
                className="
                  px-4 py-2 text-gray-800 cursor-pointer transition-colors duration-150
                  hover:bg-gradient-to-r hover:from-[#62bd72]/20 hover:to-[#39bbec]/20 
                  focus:bg-gradient-to-r focus:from-[#62bd72]/20 focus:to-[#39bbec]/20 focus:outline-none
                  flex items-center justify-between
                "
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onChange?.(option.value);
                    setIsOpen(false);
                  }
                }}
              >
                {option.label}
                {value === option.value && (
                  <svg
                    className="w-4 h-4 text-[#39bbec]"
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
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GCSelectbox;
