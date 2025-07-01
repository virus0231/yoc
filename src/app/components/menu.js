'use client'
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { IoMdHome } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { GrStorage } from "react-icons/gr";
import { LuCrown } from "react-icons/lu";

function Menu() {

  const items = [
    { id: 1, icon: <IoMdHome />, href: '/home' },
    { id: 2, icon: <MdAdminPanelSettings />, href: '/admin' },
    { id: 3, icon: <BiSolidReport />, href: '/reports' },
    { id: 4, icon: <GrStorage />, href: '/cause' },
    { id: 5, icon: <LuCrown />, href: '/donor' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const indicatorRef = useRef(null);
  const indicatorRef2 = useRef(null);

  const handleClick = (e, index) => {
    setActiveIndex(index);

    const items_length = items.length - 1;

    const target = e.currentTarget;

    if (indicatorRef.current && target) {
      indicatorRef.current.style.left = target.offsetLeft + "px";     
    }

    if(index == 0){
      indicatorRef.current.style.width = "10rem";
      indicatorRef.current.style.marginLeft = "-5rem";
    }else if(items_length == index){
      indicatorRef.current.style.width = "10rem";
      indicatorRef.current.style.marginLeft = ".5rem";
    }
    else{
      indicatorRef.current.style.width =  "5.2rem";
      indicatorRef.current.style.marginLeft = "0rem";
    }

  };

  return (
    <div className='w-[100vw]'>
      <div className='menu_box glass_wrapper'>
        <div className='menu_bar glass_layer'>
          <div ref={indicatorRef} className='selected_liquid_1'></div>
          {/* <div ref={indicatorRef2} className='selected_liquid_2'></div> */}
            <ul>
            {items.map((item, index) => {
              let extraClass = '';
              if (index === 0 && index === activeIndex) {
                extraClass = 'first-active';
              } else if (index === items.length - 1 && index === activeIndex) {
                extraClass = 'last-active';
              } else if (index === activeIndex) {
                extraClass = 'active';
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
  )
}

export default Menu;