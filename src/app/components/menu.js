// components/Menu.js
'use client';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveIndex } from '../redux/activeIndexSlice';  // Import the action
import Link from 'next/link';
import { IoMdHome } from 'react-icons/io';
import { MdAdminPanelSettings } from 'react-icons/md';
import { BiSolidReport } from 'react-icons/bi';
import { GrStorage } from 'react-icons/gr';
import { LuCrown } from 'react-icons/lu';

function Menu() {
  const items = [
    { id: 1, icon: <IoMdHome />, href: '/home' },
    { id: 2, icon: <MdAdminPanelSettings />, href: '/admin' },
    { id: 3, icon: <BiSolidReport />, href: '/reports' },
    { id: 4, icon: <GrStorage />, href: '/cause' },
    { id: 5, icon: <LuCrown />, href: '/donor' },
  ];

  const dispatch = useDispatch();
  const activeIndex = useSelector((state) => state.activeIndex.activeIndex); // Access activeIndex from Redux

  const indicatorRef = useRef(null);

  const handleClick = (e, index) => {
    dispatch(setActiveIndex(index)); // Dispatch the action to update Redux state

    const target = e.currentTarget;
    if (indicatorRef.current && target) {
      indicatorRef.current.style.left = target.offsetLeft + 'px';
      indicatorRef.current.style.width = target.offsetWidth + 'px';
    }
  };

  return (
    <div className="w-[100vw]">
      <div className="menu_box glass_wrapper">
        <div className="menu_bar glass_layer">
          <div ref={indicatorRef} className="selected_liquid_1"></div>
          <ul>
            {items.map((item, index) => {
              let extraClass = '';
              if (index === activeIndex) {
                extraClass = 'active'; // Apply active class to selected menu item
              }

              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`menu_btn ${extraClass}`}
                    onClick={(e) => handleClick(e, index)}
                  >
                    {item.icon}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="glass_shadow"></div>
      </div>
    </div>
  );
}

export default Menu;
