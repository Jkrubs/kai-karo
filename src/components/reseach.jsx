import React, { useState } from 'react'
import './research.css'
import audi from './images/audi.svg'
import bimmer from './images/bmw.svg'
import mazda from './images/mazda.svg'
import benz from './images/mercedes.svg'
import land_rover from './images/land_rover.svg'
import lexus from './images/lexus.svg'
import vokks from './images/VW.svg'
import subaru from './images/subaru.svg'
import toyota from './images/toyota.svg'
import hyundai from './images/hyundai.svg'
import nissan from './images/nissan.svg'
import honda from './images/honda.svg'
import {Form} from './form'
import suv from './images/suvs.svg'
import saloon from './images/saloons.svg'
import pickups from './images/pickups.svg'
import convertibles from './images/convertibles.svg'
import van from './images/vans.svg'
import hatchback from './images/hatchbacks.svg'

export const Research = () => {
  const[active , setActive]=useState("advanced")
 
  return (
    <>

    <div className='research'>
        <h1>Research Before Buying</h1>
        <p>We help you find a car that fits your Personality, dream and Pocket</p>
        <div className="optimize">
            <ul>
                <li onClick={()=>{setActive("advanced")}}>Advanced Search{active==="advanced"?<hr className='under'/>:<></>}</li>
                <li onClick={()=>{setActive("brand")}}>Search by Brand{active==="brand"?<hr className='under'/>:<></>}</li>
                <li onClick={()=>{setActive("body")}}>Body type{active==="body"?<hr className='under'/>:<></>}</li>
            </ul>
            <hr className='after' />
        </div>
        
    </div>
    <div className="container">
      {active==="advanced"&& <Form/>}
      {
        active==="brand"&&<div className="brand">
        <div className="tile">
          <img src={audi} alt="" />
        </div>
        <div className="tile">
          <img src={bimmer} alt="" />
        </div>
        <div className="tile">
          <img src={benz} alt="" />
        </div>
        <div className="tile">
          <img src={mazda} alt="" />
        </div><div className="tile">
          <img src={toyota} alt="" />
        </div><div className="tile">
          <img src={honda} alt="" />
        </div>
        <div className="tile">
          <img src={land_rover} alt="" />
        </div><div className="tile">
          <img src={subaru} alt="" />
        </div><div className="tile">
          <img src={lexus} alt="" />
        </div>
        <div className="tile">
          <img src={vokks} alt="" />
        </div>
        <div className="tile">
          <img src={nissan} alt="" />
        </div>
        <div className="tile">
          <img src={hyundai} alt="" />
        </div>
      </div>
      }

      {
        active==="body"&&<div className='brand'>
           <div className="tile">
          <img src={suv} alt="" />
        </div>
        <div className="tile">
          <img src={saloon} alt="" />
        </div>
        <div className="tile">
          <img src={hatchback} alt="" />
        </div>
        <div className="tile">
          <img src={pickups} alt="" />
        </div>
        <div className="tile">
          <img src={convertibles} alt="" />
        </div>
        <div className="tile">
          <img src={van} alt="" />
        </div>
        </div>
      }
        
      
    </div>
    </>
    
  )
}
