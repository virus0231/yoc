"use client";

const GCButton = ({
  children,
  onClick = () => {},
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
  className = "",
}) => {
  const baseClasses = `
    relative overflow-hidden rounded-xl backdrop-blur-md border border-white/20
    transition-all duration-300 ease-in-out font-medium
    focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-transparent
    disabled:opacity-50 disabled:cursor-not-allowed
    hover:scale-105 hover:shadow-lg active:scale-95
  `;

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#62bd72]/20 to-[#39bbec]/20 hover:from-[#62bd72]/30 hover:to-[#39bbec]/30 text-white shadow-lg shadow-[#39bbec]/20",
    secondary:
      "bg-white/10 hover:bg-gradient-to-r hover:from-[#aa5ea4]/20 hover:to-white/20 text-gray-800 shadow-lg shadow-black/10",
    danger:
      "bg-red-500/20 hover:bg-red-500/30 text-white shadow-lg shadow-red-500/20",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

export default GCButton;
