import React from 'react';
import './breadcum.css';
import arrow_icon from '../assets/images/arrow_icon.png'

function Breadcum(props) {
    const {product} = props;
    console.log("BreadCrum data", JSON.stringify(props, null, 2));

    if (!product.category) {
        return null; // or return some default value or component
      }
    return (
        <div className="breadcum">
             HOME <img src={arrow_icon} alt="" />
             SHOPE<img src={arrow_icon} alt="" /> { product.category } 
             <img src={ arrow_icon } alt="" /> 
             { product.name }<img src={ arrow_icon } alt="" />  
        </div>
    )
}

export default Breadcum
