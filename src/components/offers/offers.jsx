import React from 'react'
import './offers.css'
import exclusive_image from '../assets/images/p1_img.jpg'

function Offers() {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers
