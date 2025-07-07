const GCCard = ({
  children,
  className = "",
  padding = "md",
  hover = false,
}) => {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={`
        rounded-3xl backdrop-blur-2xl bg-gradient-to-br from-[#f8fafc]/90 via-[#e0e7ff]/80 to-[#f0fdf4]/90
        border border-[#c7d2fe]/40 shadow-2xl shadow-[#a5b4fc]/10 transition-all duration-300 ease-in-out
        ${paddingClasses[padding]}
        ${hover ? "hover:bg-[#e0e7ff]/80 hover:shadow-2xl hover:scale-105" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GCCard;
