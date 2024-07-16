import React from "react";
import Hero from "../components/hero/hero";
import Popular from "../components/popular/popular";
import Offers from "../components/offers/offers";
import NewCollections from "../components/newCollections/newCollections";
import NewsLetter from "../components/newsLetter/newsLetter";
// import ProductDisplay from "../components/productDisplay/productDisplay";
// import Footer from "../components/footer/footer";

// home page

const Shop = () => {

    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
          
        </div>
    )
}

export default Shop
