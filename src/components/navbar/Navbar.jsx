import React, { useContext, useState } from "react";
import './Navbar.css';
import logo from '../assets/icons/apple.png';
import shopping_cart from '../assets/icons/shopping-cart.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);

    console.log("Total data for cart", JSON.stringify(getTotalCartItems(), null, 2));


    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Elevate</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}>
                     <Link 
                     style={{ textDecoration: 'none'}}
                     to = '/'>Shop</Link>
                     {menu==="shop"
                     ?<hr />
                     :<></>} 
                </li>
                
                <li onClick={()=>{setMenu("men")}}>  
                     <Link 
                      style={{ textDecoration: 'none'}}
                     to = '/mens'>Men</Link>
                     {menu==="mens"
                     ?<hr />
                     :<></>} 
                </li>
                <li onClick={()=>{setMenu("womens")}}>
                <Link 
                 style={{ textDecoration: 'none'}}
                to = '/womens'>Women</Link>
                     {menu==="womens"
                     ?<hr />
                     :<></>} 
                </li>
                <li onClick={()=>{setMenu("kids")}}>
                <Link 
                 style={{ textDecoration: 'none'}}
                to = '/kids'>Kids</Link>
                     {menu==="kids"
                     ?<hr />
                     :<></>} 
                </li>

            </ul>
            <div className="nav-login-cart">
            <Link to = '/login'>
                <button>
                    Login
                </button>
            </Link>
            <Link to = '/cart'>
                <img src={shopping_cart} alt="" />
            </Link>              
            <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}
export default Navbar