import React from "react";
import '../hero/hero.css';
import hand_icon from '../assets/images/hand_icon.png';
import arrow_icon from '../assets/images/arrow_icon.png';
import hero_image from '../assets/images/test.png';


const Hero = () => {

    return (
        <div className="hero">
            <div className="hero-left">
                <h2>New Arrivals Only</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div className="hero-latest-text">Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>

            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>

        </div>
    )
}

export default Hero