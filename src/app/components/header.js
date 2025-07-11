import React, { useState, useRef } from "react";
import { CgProfile } from "react-icons/cg";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full px-4 py-3 flex items-center justify-between bg-gradient-to-br from-[#23272f]/80 via-[#18181b]/80 to-[#0f172a]/90 border-b border-[#334155]/60 shadow-lg backdrop-blur-xl relative z-40">
      <div className="flex items-center gap-2">
        <img
          src="logo-half.png"
          alt="Logo"
          className="h-10 w-10 object-contain rounded-xl shadow-md bg-white/10 p-1"
        />
        <span className="text-xl font-bold text-[#a5b4fc] tracking-wide select-none">
          Client Name
        </span>
      </div>

      <div className="flex-1 flex justify-center">
        <select className="rounded-xl bg-white/10 px-4 py-2 text-[#a5b4fc] font-semibold shadow-sm backdrop-blur-md border border-[#a5b4fc]/20 focus:outline-none focus:ring-2 focus:ring-[#a5b4fc]/30">
          <option>All</option>
          <option>Mausa</option>
          <option>Amoud</option>
        </select>
      </div>

      <div className="relative flex items-center" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen((v) => !v)}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-[#a5b4fc]/30 shadow-md text-[#a5b4fc] text-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#a5b4fc]/30"
        >
          <CgProfile />
        </button>
        {dropdownOpen && (
          <div className="absolute top-12 right-0 w-48 rounded-xl bg-gradient-to-br from-[#23272f]/90 via-[#18181b]/90 to-[#0f172a]/95 border border-[#334155]/60 shadow-xl backdrop-blur-xl py-2 z-50 animate-fade-in flex flex-col">
            <button className="w-full text-left px-4 py-2 rounded-lg text-[#a5b4fc] hover:bg-white/10 transition font-medium">
              Settings
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg text-red-400 hover:bg-white/10 transition font-medium">
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
