import React from 'react'
import { CgProfile } from "react-icons/cg";

function header() {
  return (
    <div className='header'>
        <div className='header_box'>
            <div className='header_content'>
                <div>
                    <select className='glass_layer p-1'>
                        <option>All</option>
                        <option>Mausa</option>
                        <option>Amoud</option>
                    </select>
                </div>
                <div className='profile'>
                    <CgProfile className='glass_layer'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default header