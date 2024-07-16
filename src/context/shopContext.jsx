import React, { createContext, useState } from "react";
import all_product from "../components/assets/all_products"; // all products for men,women, kids
import CartItems from "../components/cartItems/cartItems";

export const ShopContext = createContext(null);

// add to cart function
const getDefaultCart = () => {

    // create an empty cart
    let cart = {};
    
    for(let index = 0; index < all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) =>{
 
    const [cartItems, setCartItems] = useState(getDefaultCart());


    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId] +1}))
        console.log("Here is adding to cart: "+JSON.stringify(cartItems))
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId] -1}))
        console.log("Here is removing from cart: "+cartItems)

    }

    const getTotalCartAmout=()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfor = all_product.find((product)=>product.id ===Number(item))
                totalAmount += itemInfor.new_price* cartItems[item];
            }
            return totalAmount;
        }
    }
    // for nav
    const  getTotalCartItems=()=>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem += cartItems[item];
            }
            return totalItem;
        }
    }

    const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmout,getDefaultCart, getTotalCartItems};
    console.log("Cart Items data", JSON.stringify(CartItems, null, 2));

    return (
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider

// now you can respond