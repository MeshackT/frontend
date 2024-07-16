import React, { useContext } from "react";
import { ShopContext } from '../context/shopContext';
import { useParams } from 'react-router-dom';
import Breadcum from "../components/Breadcrums/breadcum";
import ProductDisplay from "../components/productDisplay/productDisplay";
import DescriptionBox from "../components/descriptionBox/descriptionBox";
import RelatedProducts from "../components/relatedProducts/relatedProducts";

const Product = () => {

    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e) => e.id === Number(productId));

    // useEffect(() => {
        // console.log(`Product data: ${product}`); 
        // console.log('product.jsx data:', JSON.stringify(product, null, 2));// Log product to inspect its properties
    // }, [product]);

    
     // Check if product is found
     if (!product) {
        // console.log('Product not found! to pass on Product display and breadcum');
     }else{
        // console.log('Product found! to pass on Product display and breadcum');
        // console.log("Here is the data found",JSON.stringify(product, null, 2));

     }
        
    
    return (
        <div>
            <Breadcum product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelatedProducts/>
        </div>
    )
}

export default Product