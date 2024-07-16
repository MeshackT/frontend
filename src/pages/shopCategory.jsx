import React, {useContext} from "react";
import './css/shopCategory.css'
import { ShopContext } from "../context/shopContext";
import dropdown_icon from '../components/assets/images/dropdown_icon.png'
import ItemTemplate from "../components/items/item";


const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
    console.log("ShopCategory data", JSON.stringify(all_product, null, 2));


    return (
        <div className="shop-category">
            <img className='shop-category-banner' src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span>
                    out of 36 products
                </p>
                <div className='shopcategory-sort'>
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
                
            </div>
            <div className="shopcategory-products">
                    {all_product.map((item,i)=>{
                        if(props.category === item.category){
                            console.log("Category data equals category in Shop Category", JSON.stringify(props, null, 2));

                            return <ItemTemplate
                            key = {i} 
                            id = {item.id} 
                            name = {item.name} 
                            image = {item.image} 
                            new_price = {item.new_price} 
                            old_price = {item.old_price}
                            />
                        }else{
                            return null;
                        }
                    })}
                </div>
                <div className="shopcategory-loadmore">
                    Explore More
                    </div>
        </div>
        
    )
}

export default ShopCategory