"use client";

const GCButton = ({
  children,
  onClick = () => {},
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
  className = "",
  ...rest
}) => {
  const baseClasses = `
    relative overflow-hidden rounded-2xl backdrop-blur-xl border border-white/30
    transition-all duration-300 ease-in-out font-semibold
    focus:outline-none focus:ring-2 focus:ring-[#a5b4fc]/40 focus:ring-offset-2 focus:ring-offset-transparent
    disabled:opacity-50 disabled:cursor-not-allowed
    hover:scale-105 hover:shadow-2xl active:scale-95
  `;

  const variantClasses = {
    primary:
      "bg-gradient-to-br from-[#a5b4fc]/70 via-[#6ee7b7]/60 to-[#f0fdf4]/80 text-[#312e81] shadow-xl shadow-[#a5b4fc]/20 hover:from-[#6366f1]/80 hover:to-[#6ee7b7]/80 hover:text-[#1e293b]",
    secondary:
      "bg-white/30 backdrop-blur-lg border border-[#c7d2fe]/40 text-[#312e81] shadow-md shadow-[#a5b4fc]/10 hover:bg-white/50 hover:text-[#6366f1]",
    danger:
      "bg-gradient-to-br from-[#fee2e2]/80 to-[#fca5a5]/80 text-[#991b1b] shadow-lg shadow-[#fca5a5]/20 hover:from-[#f87171]/80 hover:to-[#fee2e2]/80 hover:text-[#7f1d1d]",
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
      {...rest}
    >
      <span className="relative z-10 drop-shadow-sm">{children}</span>
      <div className="absolute inset-0 rounded-2xl pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/30 blur-md opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-80" />
      </div>
    </button>
  );
};

export default GCButton;
