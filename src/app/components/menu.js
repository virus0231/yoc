"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { GrStorage } from "react-icons/gr";
import { LuCrown } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIndex } from "../redux/activeIndexSlice";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";

function Menu() {
  const items = [
    { id: 1, icon: <User />, href: "/users" },
    { id: 2, icon: <MdAdminPanelSettings />, href: "/admin" },
    { id: 3, icon: <BiSolidReport />, href: "/reports" },
    { id: 4, icon: <GrStorage />, href: "/cause" },
    { id: 5, icon: <LuCrown />, href: "/donor" },
  ];

  const activeIndex = useSelector((state) => state.activeIndex.activeIndex);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = (e, index, href) => {
    e.preventDefault();
    if (activeIndex !== index) {
      dispatch(setActiveIndex(index));
      router.push(href);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center pointer-events-none">
      <nav className="relative flex items-center justify-center bg-gradient-to-br from-[#23272f]/80 via-[#18181b]/80 to-[#0f172a]/90 border border-[#334155]/60 shadow-2xl backdrop-blur-xl rounded-2xl px-6 py-3 mb-6 overflow-x-auto min-w-[340px] max-w-2xl pointer-events-auto">
        <div className="absolute inset-0 bg-white/10 rounded-2xl pointer-events-none backdrop-blur-[6px]" />
        <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-white/20 rounded-full blur-2xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-1/4 h-1/3 bg-[#a5b4fc]/20 rounded-full blur-2xl opacity-10" />
        <ul className="flex flex-row gap-2 relative z-10 w-full justify-between">
          {items.map((item, index) => (
            <li key={item.id} className="flex-1 flex justify-center">
              <button
                onClick={(e) => handleClick(e, index, item.href)}
                className={`flex items-center justify-center w-16 h-12 rounded-xl transition-all duration-200 text-2xl
                  ${
                    activeIndex === index
                      ? "bg-white/30 shadow-xl text-[#a5b4fc] scale-110 backdrop-blur-md border border-[#a5b4fc]/40 ring-2 ring-[#a5b4fc]/30"
                      : "bg-white/5 hover:bg-white/10 text-[#cbd5e1]"
                  }
                `}
                aria-current={activeIndex === index ? "page" : undefined}
              >
                <span className="drop-shadow-md">{item.icon}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
