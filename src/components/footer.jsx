import React from 'react'
import logo from './images/kai and karo.svg'
import light_logo from './images/logo-dark-mode.svg'

import './footer.css'
export const Footer = () => {
    const date=new Date()
    const year=date.getFullYear()
  return (
    <div className='footer'>
        <div className="kai">
            <div className="logo">
                <img src={document.body.classList.contains("toggleTheme")?light_logo:logo} alt="" />
            </div>
            <div className="copy-social">
                <p>&copy; {year} Kai and Karo All rights reserved</p>
                <div className="socials">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    <div className="company">
        <h3>Company</h3>
        <ul>
            <li>About</li>
            <li>Sell Your Car</li>
            <li>Contact</li>
            <li>Location</li>
        </ul>
    </div>
    <div className="company">
        <h3>Support</h3>
        <ul>
            <li>Frequently Asked Questions</li>
            <li>Sell On Behalf Terms Of Service</li>
        </ul>
    </div>

    <div className="newsletter">
        <h3>Stay up to date</h3>
        <form action="" className='email'>
            <input type="email" placeholder='Your Email' required />
            <button><i class="fa-solid fa-envelope"></i></button>
        </form>
            
       
    </div>

    </div>
  )
}
