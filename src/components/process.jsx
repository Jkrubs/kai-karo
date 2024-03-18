import React from 'react'
import './process.css'

export const Process = () => {
  return (
    <div className="main">
      <p>Getting your car is a <span>3 step process</span></p>
    <div className='processes'>
        <div className="process">
        <i class="fa-solid fa-car"></i>
            <p>Select your car</p>
        </div>
        <div className="process">
        <i class="fa-regular fa-pen-to-square"></i>
            <p>Enquire</p>
        </div>
        <div className="process">
        <i class="fa-solid fa-credit-card"></i>
            <p>Pay</p>
        </div>
        
      </div>
    </div>
  )
}
