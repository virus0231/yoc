import React from 'react'
import Home from '../home/page'
import React, { useState } from 'react' 

function page() {
  return (
    <Home>
      <div className='theme_box donor_box glass_layer h-fit'>

        <div className='items_holder theme_inner_box grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <div>
           <input
              type="text"
              value={"Name"}
              placeholder="Enter your text here"
              className="border rounded p-2"
            />
          </div>
        </div>

      </div>
    </Home>
  )
}

export default page