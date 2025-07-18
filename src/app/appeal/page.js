'use client'
import React, { useState } from 'react'
import Home from '../home/page' 

function page() {

    const [imageUploadType, setImageUploadType] = useState("file");

  return (
    <Home>
      <div className='theme_box donor_box glass_layer h-fit'>

        <div className='items_holder theme_inner_box'>

          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8'>
            <div>
                <p>Status:</p>
                <select>
                  <option>Enabled</option>
                  <option>Disabled</option>
                </select>
            </div>
            <div>
                <p>Appeal Name:</p>
                <input
                    id={"appeal_name"}
                    type="text"
                    placeholder='Appeal Name'
                />
            </div>
            <div>
                <p>Description:</p>
                <textarea
                    id={"description"}
                    placeholder='Description'
                />
            </div>
            <div>
                <p>Image:</p>
                <select id={"image_upload_type"} value={imageUploadType} onChange={(e) => setImageUploadType(e.target.value)}>
                    <option value="file">Upload Image By File</option>
                    <option value="url">Upload Image By URL</option>
                </select>
                <input
                    id={"image"}
                    type="text"
                    placeholder='Image URL'
                    style={{ display: imageUploadType === "url" ? "block" : "none" }}
                />
                <input
                    id={"image"}
                    type="file"
                    style={{ display: imageUploadType === "file" ? "block" : "none" }}
                />
            </div>
            <div>
                <p>Category:</p>
                <select id={"category"}>
                    <option value="">Select Category</option>
                    <option value="1">Emergency Response</option>
                    <option value="2">Health Care</option>
                    <option value="3">Food Aid</option>
                    <option value="4">Clean Water</option>
                    <option value="5">Economic Development</option>
                    <option value="6">Religious Dues</option>
                    <option value="7">Child Sponsorship</option>
                    <option value="8">Winterization</option>
                    <option value="9">Education</option>
                    <option value="10">Ramadhan</option>
                </select>
            </div>
            <div>
                <p>Sort:</p>
                <input
                    id={"sort"}
                    type="text"
                    value={0}
                    placeholder='0'
                />
            </div>
            <div>
                <p>On Home:</p>
                <select>
                  <option>Yes</option>
                  <option>No</option>
                </select>
            </div>
            <div>
                <p>On Footer:</p>
                <select>
                  <option>Yes</option>
                  <option>No</option>
                </select>
            </div>
            <div>
                <p>On Donate:</p>
                <select>
                  <option>Yes</option>
                  <option>No</option>
                </select>
            </div>
            <div>
                <p>Allow Custome Amount:</p>
                <select>
                  <option>Yes</option>
                  <option>No</option>
                </select>
            </div>
            <div>
                <p>Allow Quantity:</p>
                <select>
                  <option>Yes</option>
                  <option>No</option>
                </select>
            </div>
            <div>
                <p>Allow Association:</p>
                <select>
                  <option>Yes</option>
                  <option>No</option>
                </select>
            </div>
            <div>
                <p>Allow Dropdown amount:</p>
                <select>
                  <option>Yes</option>
                  <option>No</option>
                </select>
            </div>
            <div>
                <p>Allow Recurring Type:</p>
                <select>
                  <option>Yes</option>
                  <option>No</option>
                </select>
            </div>
            <div>
                <p>Recurring Interval:</p>
                <div className='flex gap-2'>
                    <div className='flex'>
                        <input type='checkbox' value={"oneoff"}/>
                        <p>oneoff</p>
                    </div>
                    <div className='flex'>
                        <input type='checkbox' value={"monthly"}/>
                        <p>monthly</p>
                    </div>
                    <div className='flex'>
                        <input type='checkbox' value={"yearly"}/>
                        <p>yearly</p>
                    </div>
                    <div className='flex'>
                        <input type='checkbox' value={"daily"}/>
                        <p>daily</p>
                    </div>
                </div>
            </div>
            <div>
                <p>Goal:</p>
                <input type='text' placeholder='Enter your goal'/>
            </div>
            <div>
                <p>Appeal Type:</p>
                <select>
                     <option value="Suggested">Suggested</option>
                     <option value="Sponsorship">Sponsorship</option>
                     <option value="MTN">MTN</option>
                     <option value="hybrid">hybrid</option>
                     <option value="Qurbani">Qurbani</option>
                </select>
            </div>

            <button className='bg-emerald-700'>Add Appeal</button>

          </div>

        </div>

      </div>
    </Home>
  )
}

export default page