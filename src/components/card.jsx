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
        rounded-xl backdrop-blur-md bg-white/10 border border-white/20 
        shadow-lg shadow-black/5 transition-all duration-300 ease-in-out
        ${paddingClasses[padding]}
        ${hover ? "hover:bg-white/20 hover:shadow-xl hover:scale-105" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GCCard;
