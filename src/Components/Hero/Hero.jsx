import React from 'react'
import './Hero.css'
import arrowIcon from '../Assests/arrow_icon.png'
import handIcon from '../Assests/hand_icon.png'
import heroImage from '../Assests/hero_image.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>make</p>
                    <img src={handIcon} alt="" />
                </div>
                <p>your travel</p>
                <p>comfortable</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Products</div>
                <img src={arrowIcon} alt="" />
            </div>

        </div>
        <div className="hero-right">
            <img src={heroImage} alt="" />

        </div>
    </div>
  )
}
