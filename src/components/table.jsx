const GCTable = ({ headers, rows, className = "" }) => {
  return (
    <div
      className={`overflow-hidden rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg shadow-black/5 ${className}`}
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-white/20">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-800 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/20">
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-white/10 transition-colors duration-200"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
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
        <div className="px-6 py-8 text-center text-gray-500">
          No data available
        </div>
      )}
    </div>
  );
};

export default GCTable;
