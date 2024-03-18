import React, { useState } from 'react'
import './header.css'
import logo from './images/kai and karo.svg'
import light_logo from './images/logo-dark-mode.svg'

export const Header = () => {
  const[isMobile, setIsMobile]=useState(true)
  const[isDark, setIsDark]=useState(false)
  function showMenu(){
    setIsMobile(false)
  }

  function hideMenu(){
    setIsMobile(true)
  }
  function toggle(){
    document.body.classList.toggle("toggleTheme") 
    setIsDark((prev)=>{return !prev})
}
  return (
    <div className='header'>
        <div className="logo">
            <img src={isDark?light_logo:logo} alt="" />
            <h3>Kai&Karo</h3>
        </div>
        <div className={isMobile?"menu":"hide"}>
            <ul>
            <i onClick={hideMenu} class="fa-solid fa-xmark"></i>
                <li><a href="##">Vehicles in Kenya</a></li>
                <li><a href="##">International Stock</a></li>
                <li><a href="##">Sell Your Car</a></li>
                <li><a href="##">About</a></li>
                <li><a href="##">Contact</a></li>
                <li><a href="##">Frequently asked questions</a></li>
               
            </ul>
            
        </div>
        <div className="icons">
        <i onClick={showMenu} id='menu-icon' class="fa-solid fa-bars"></i>
         <a onClick={toggle} href="##">{isDark?<i class="fa-solid fa-sun"></i>:<i class="fa-solid fa-moon"></i>}</a>
        </div>
    </div>
  )
}
