'use client'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { IoMdHome } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { GrStorage } from "react-icons/gr";
import { LuCrown } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveIndex } from '../redux/activeIndexSlice';
import { useRouter } from 'next/navigation';


function Menu() {

  const items = [
    { id: 1, icon: <IoMdHome />, href: '/dashboard' },
    { id: 2, icon: <MdAdminPanelSettings />, href: '/admin' },
    { id: 3, icon: <BiSolidReport />, href: '/reports' },
    { id: 4, icon: <GrStorage />, href: '/cause' },
    { id: 5, icon: <LuCrown />, href: '/donor' },
  ];

  const activeIndex = useSelector((state) => state.activeIndex.activeIndex);
  const dispatch = useDispatch();
  const indicatorRef = useRef(null);

  useEffect(() => {
    const target = document.querySelectorAll('.menu_btn')[activeIndex];
    if (indicatorRef.current && target) {
      indicatorRef.current.style.left = target.offsetLeft + "px";

      if (activeIndex === 0) {
        indicatorRef.current.style.width = "10rem";
        indicatorRef.current.style.marginLeft = "-5rem";
      } else if (activeIndex === items.length - 1) {
        indicatorRef.current.style.width = "10rem";
        indicatorRef.current.style.marginLeft = ".5rem";
      } else {
        indicatorRef.current.style.width = "5.2rem";
        indicatorRef.current.style.marginLeft = "0rem";
      }
    }
  }, [activeIndex, items.length]);

  const router = useRouter();

  const handleClick = (e, index, href) => {
     e.preventDefault();
    dispatch(setActiveIndex(index));
    setTimeout(() => {
      router.push(href);
    }, 200);
  };

  return (
    <div className='w-[100vw]'>
      <div className='menu_box glass_wrapper'>
        <div className='menu_bar glass_layer'>
          <div ref={indicatorRef} className='selected_liquid_1'></div>
          <ul>
            {items.map((item, index) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className='menu_btn'
                  onClick={(e) => {
                      handleClick(e, index, item.href)}
                  }
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="glass_shadow"></div>
      </div>
    </div>
  )
}

export default Menu;
