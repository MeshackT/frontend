import React, {useContext} from 'react';
import './productDisplay.css';
import star_icon from '../assets/images/star_icon.png';
import { ShopContext } from '../../context/shopContext';
// import star_dull_icon from '../assets/images/star_dull_icon.png';


function ProductDisplay(props) {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    console.log("Product display data", JSON.stringify(props, null, 2));

     

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="priductdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>

            <div className="productdisplay-right">

                <h1>{ product.name }</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    {/* <img src={star_dull_icon} alt="" /> */}
                    <p>(122)</p>

                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    or higher. You are currently using plaintext http to connect. Please visit the GitHub blog for more information: https://github.blog/2021-08-23-npm-registry-deprecating-tls-1-0-tls-1-1/
                    npm notice Beginning October 4, 2021, all connections to the npm registry - including for package installation - must use TLS 1.2 or higher. You are currently using plaintext http to connect. Please visit the GitHub blog for more i
                    nformation: https://github.blog/2021-08-23-npm-registry-deprecating-tls-1-0-tls-1-1/
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
               
                <button 
                    onClick={()=> {addToCart(product.id)} }>
                        ADD TO CART
               
                </button>
               
                <p className='productdisplay-right-category'>
                    <span>Category :</span>
                    Women , T-Shirt,
                    Crop Top
                </p>
                <p className='productdisplay-right-category'>
                    <span>Tags :</span>
                    Modern , Latest
                </p>
            </div>

        </div>
    )
}

export default ProductDisplay
