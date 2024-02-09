import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/logo_big.png'
import instagram_logo from '../Assests/instagram_icon.png'
import whatsapp_logo from '../Assests/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>PORJOSHOP</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={instagram_logo} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_logo} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2024 - All Rights Reserved.</p>
        </div>
    </div>
  )
}
