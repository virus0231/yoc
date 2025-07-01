'use client'
import React, { useState } from 'react'
import Home from '../home/page' 

function page() {

  const [name, setName] = useState("");

  return (
    <Home>
      <div className='theme_box donor_box glass_layer h-fit'>

        <div className='items_holder theme_inner_box grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div>
            <p>From:</p>
            <input
                id={"from_date"}
                type="date"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="border rounded p-2"
              />
          </div>
          <div>
            <p>From:</p>
            <input
                id={"from_date"}
                type="date"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="border rounded p-2"
              />
          </div>
          <div>
            <p>From:</p>
            <input
                id={"from_date"}
                type="date"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="border rounded p-2"
              />
          </div>
        </div>

      </div>
    </Home>
  )
}

export default page