import React from 'react'
import './popular.css'
import data_product from '../assets/data'
import ItemTemplate from '../items/item'

function Popular() {
    console.log("Popular data", JSON.stringify(data_product, null, 2));

    return (
        <div className='popular'> 
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item, i)=>{
                    return <ItemTemplate 
                    key = {i} 
                    id = {item.id} 
                    name = {item.name} 
                    image = {item.image} 
                    new_price = {item.new_price} 
                    old_price = {item.old_price}/>
                })}
            </div>
        </div>
    )
}

export default Popular
