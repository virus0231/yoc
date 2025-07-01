'use client'
import React, { useState } from 'react'
import Home from '../home/page' 

function page() {

  const [name, setName] = useState("");

  return (
    <Home>
      <div className='theme_box donor_box glass_layer h-fit'>

        <div className='items_holder theme_inner_box'>

          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-8'>
            <div>
              <p>Start Date:</p>
              <input
                  id={"from_date"}
                  type="date"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  className="border rounded p-2"
                />
            </div>

            <div>
              <p>To Date:</p>
              <input
                  id={"from_date"}
                  type="date"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  className="border rounded p-2"
                />
            </div>

            <div>
              <p>Payment Status:</p>
              <select>
                <option>option 1</option>
                <option>option 1</option>
                <option>option 1</option>
              </select>
            </div>

            <div>
              <p>Payment Type:</p>
              <select>
                <option>option 1</option>
                <option>option 1</option>
                <option>option 1</option>
              </select>
            </div>

            <div>
              <p>Search:</p>
              <input
                  id={"from_date"}
                  type="text"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  className="border rounded p-2"
                  placeholder='Email/Phone/FirstName/Lastname/Organization'
                />
            </div>

            <div>
              <p>Appeal Type:</p>
              <select>
                <option>option 1</option>
                <option>option 1</option>
                <option>option 1</option>
              </select>
            </div>

            <div>
              <p>Order Id / Transaction Id:</p>
              <input
                  id={"from_date"}
                  type="text"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  className="border rounded p-2"
                  placeholder='Order Id / Transaction Id'
                />
            </div>

            <div>
              <p>Frequency:</p>
              <select>
                <option>option 1</option>
                <option>option 1</option>
                <option>option 1</option>
              </select>
            </div>

            <div>
              <p>Season:</p>
              <select>
                <option>option 1</option>
                <option>option 1</option>
                <option>option 1</option>
              </select>
            </div>
          </div>

          <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 mt-6'>
            <button className='btn btn-primary'>Get Report</button>
            <button className='btn btn-primary'>Export Detail CSV</button>
            <button className='btn btn-primary'>Export Summary CSV</button>
          </div>

        </div>

      </div>
    </Home>
  )
}

export default page