import React, { useState } from 'react'
import './Navbar.css'
import logo from './../Assests/logo.png'
import cartlogo from './../Assests/cart-icon.png'

export const Navbar = () => {

    const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className="nav-logo">
        <img src={logo} alt="" />
        <p>PORJOSHOP</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("bags")}}>Bag{menu==="bags"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("cloths")}}>Clothing{menu==="cloths"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("tents")}}>Tent{menu==="tents"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("others")}}>Others{menu==="others"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cartlogo} alt="" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
