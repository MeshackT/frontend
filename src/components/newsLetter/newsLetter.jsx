import React from 'react'
import './newsLetter.css'

const NewsLetter = () => {
   return (
    <div className="newsletter">
        <h1>Get exclusive offers on your email</h1>
        <p>Subscribe to our newletter and stay updated</p>

        <div >
            <input type="email" placeholder= 'Enter your email' name="" id="" />
            <button>Subscribe</button>
        </div>
    </div>
   )
}

export default NewsLetter