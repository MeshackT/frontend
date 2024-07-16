import React from 'react'
import './newCollections.css'
import ItemTemplate from '../items/item'
import new_collection from '../assets/new_collections'

function NewCollections() {

    console.log("New Collection data", JSON.stringify(new_collection, null, 2));
    return (
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr className='hr'/>
            <div className="collections">
                {new_collection.map((item, i)=>{
                    return <ItemTemplate 
                    key = {i} 
                    id = {item.id} 
                    name = {item.name} 
                    image = {item.image} 
                    new_price = {item.new_price} 
                    old_price = {item.old_price}
                    />
                })}
            </div>
        </div>
    )
}
export default NewCollections
