import React from 'react';
import data_product from '../assets/data';
import ItemTemplate from '../items/item'
import './relatedProduct.css';

const  RelatedProducts =()=> {

    // show the data being passed
    console.log(`this is the data from ReatedProducts: `+ JSON.stringify(data_product, null, 2)); // Log data_product to see its contents

    
    return (
        <div className='relatedProducts'>
            <h1>Related Products</h1>
            <hr />
            <div className="relatedProducts-item">
                {data_product.map((item, i) => (
                    <ItemTemplate 
                        key={i} 
                        id={item.id} 
                        name={item.name} 
                        image={item.image} 
                        new_price={item.new_price} 
                        old_price={item.old_price} 
                    />
                ))}
            </div>
        </div>
    );
};
        

export default RelatedProducts
