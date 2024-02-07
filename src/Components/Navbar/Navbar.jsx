import React, { useState } from 'react'
import './Navbar.css'
import logo from './../Assests/logo.png'
import cartlogo from './../Assests/cart-icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className="nav-logo">
        <img src={logo} alt="" />
        <p>PORJOSHOP</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("bags")}}><Link style={{textDecoration: 'none'}} to='/bags'>Bag</Link>{menu==="bags"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("cloths")}}><Link style={{textDecoration: 'none'}} to='/cloths'>Clothing</Link>{menu==="cloths"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("tents")}}><Link style={{textDecoration: 'none'}} to='/tents'>Tent</Link>{menu==="tents"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("others")}}><Link style={{textDecoration: 'none'}} to='/others'>Other</Link>{menu==="others"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cartlogo} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
