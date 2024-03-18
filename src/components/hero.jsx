import React from 'react'
import Range from './images/range.webp'
import './hero.css'
export const Hero = () => {
  return (
    <div className='hero'>
        <h1>Find Your Dream Car</h1>
        <img src={Range} alt="" />
        <div className="btn">
        <button className='active'>Vehicles In Kenya</button>
        <button>International Stock</button>
        <button>Sell Your Car</button>

        </div>
    </div>
  )
}
