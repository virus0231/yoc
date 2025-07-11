const GCTable = ({ headers, rows, className = "" }) => {
  return (
    <div
      className={`overflow-hidden rounded-2xl bg-gradient-to-br from-[#23272f]/80 via-[#18181b]/80 to-[#0f172a]/90 border border-[#334155]/60 shadow-2xl backdrop-blur-xl ${className} relative`}
    >
      {/* Glassmorphism overlays */}
      <div className="absolute inset-0 bg-white/10 rounded-2xl pointer-events-none backdrop-blur-[6px] z-0" />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-white/20 rounded-full blur-2xl opacity-20 z-0" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#a5b4fc]/20 rounded-full blur-2xl opacity-10 z-0" />
      <div className="overflow-x-auto relative z-10">
        <table className="w-full">
          <thead className="bg-white/10">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-4 text-left text-sm font-semibold text-[#a5b4fc] uppercase tracking-wider backdrop-blur-md"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-white/10 transition-colors duration-200"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-6 py-4 whitespace-nowrap text-sm text-[#e0e7ff] backdrop-blur-sm"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {rows.length === 0 && (
        <div className="px-6 py-8 text-center text-[#a5b4fc] relative z-10">
          No data available
        </div>
      )}
    </div>
  );
};

export default GCTable;
