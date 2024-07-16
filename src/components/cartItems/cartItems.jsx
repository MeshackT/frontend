import React, {useContext} from 'react';
// import './cartItem.css';

import { ShopContext } from '../../context/shopContext';
// import shopping_cart from '../assets/icons/shopping-cart.png'

const CartItems = () => {

    const {getTotalCartAmout
        // , 
        // all_product,
        //  CartItems, 
        //  removeFroCart
        } = useContext(ShopContext);
        
        console.log("CartItem data: "+CartItems); // Log cartItems to check its contents


    return (
        <div className="cartItems">
            <div className="cartItem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Remove</p>
            </div>
            <hr />
            <div>
               {/* {all_product.map((e)=> {
                    if(CartItems[e.id]>0){
                        return <div>
                            <div className="cartItems-format">
                                <img src={e.image} alt="" className='cartIcon-product-icon'/>
                                <p>e.name</p>
                                <p>${e.new_price}</p>
                                <button className='cartItems-quantity'>{CartItems[e.id]}</button>
                                <p>${e.new_price*CartItems[e.id]}</p> 
                                <img className='cartItems-remove-icon src={shopping_cart} alt="" onClick={removeFroCart(e.id)}/>
                            </div>
                            <hr />
                        </div>
                        }
                        return null;
                    })}      */}
                </div>

                <div className='cartItems-down'>
                    <div className="cartitems-total">
                        <h1>Cart Totals</h1>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmout()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping fee</p>
                            <p>${0}</p>
                        </div>
                        <hr />  <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmout()}</h3>
                        </div>
                    </div>
                    <button className='cartitems-promocode'>
                        <p>If you have a promocode, enter it here</p>
                        <div className="cartitems-promobo">
                            <input type="text" placeholder='promo code' />
                            <button>Submit</button>
                        </div>
                    </button>

                </div>


        </div>
    )
}

export default CartItems