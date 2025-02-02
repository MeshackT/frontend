import React from 'react'
import './footer.css';
import instagram_icon from '../assets/images/instagram_icon.png';
import logo from '../assets/icons/apple.png';
import facebook_icon from '../assets/images/facebook_icon.png';
import whatsapp_icon from '../assets/images/whatsapp_icon.png';


const  Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={logo} alt="" />
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offers</li>
                <li>About</li>
                <li>Contact</li>
              
            </ul>
            <div className="footer-social-icon">
               <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
               </div>
               <div className="footer-icons-container">
                     <img src={facebook_icon} alt="" />
               </div>
               <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
               </div>

            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
