const GCDropdown = ({ trigger, items, className = "", align = "left" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div
          className={`
          absolute top-full mt-2 w-56 z-50 animate-fade-in
          rounded-xl backdrop-blur-md bg-white/90 border border-white/20 
          shadow-xl shadow-black/10 overflow-hidden
          ${align === "right" ? "right-0" : "left-0"}
        `}
        >
          <div className="py-2">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                {item.separator ? (
                  <div className="my-2 border-t border-white/20" />
                ) : (
                  <button
                    onClick={() => {
                      item.onClick?.();
                      setIsOpen(false);
                    }}
                    disabled={item.disabled}
                    className="
                      w-full flex items-center space-x-3 px-4 py-2 text-left text-gray-800
                      transition-colors duration-150 hover:bg-gradient-to-r hover:from-[#62bd72]/20 hover:to-[#39bbec]/20
                      focus:bg-gradient-to-r focus:from-[#62bd72]/20 focus:to-[#39bbec]/20 focus:outline-none
                      disabled:opacity-50 disabled:cursor-not-allowed
                    "
                  >
                    {item.icon && (
                      <span className="text-gray-600">{item.icon}</span>
                    )}
                    <span>{item.label}</span>
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GCDropdown;
