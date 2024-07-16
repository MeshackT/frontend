import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/shopCategory';
import Shop from './pages/shop';
import Product from './pages/product';
import LoginSignUp from './pages/LoginSignUp';
import Cart from './pages/cart';
import Footer from './components/footer/footer';
import men_banner from './components/assets/images/banner_mens.png';
import women_banner from './components/assets/images/banner_women.jpg';
import kids_banner from './components/assets/images/banner_kids.jpg';




function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Shop/>}/>
          <Route path='/mens' element = {<ShopCategory banner={men_banner} category = "mens"/>}/>
          <Route path='/womens' element = {<ShopCategory banner={women_banner} category = "womens"/>}/>
          <Route path='/kids' element = {<ShopCategory banner={kids_banner} category = "kids"/>}/>
          <Route path='/product' element = { <Product/> }>
            <Route path=':productId' element = {<Product/>}/></Route>
          <Route path='/cart' element = {<Cart/>}/>
          <Route path='/login' element = {<LoginSignUp/>}/>
        </Routes>
        <Footer/>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
