import React, { useState } from "react";
import ProductCard from './ProductCard'
import "./Products.css"
import Header from "./Header";
import Footer from "./Footer";
import Filter from "./Filter";
import SearchBar from "./SearchBar";

function Products({products, setProducts, customData,cart,setCart,loading}) {
  const [filters, setFilters] = useState({
    gender: '',
    color: '',
    price: '',
    type: '',
  });
  const [searchInput, setSearchInput] = useState('');


   // Function to add a product to the cart
   const addToCart = (product) => {
    const existingCartItem = cart.find((item) => item.id === product.id);  
    if (existingCartItem) {
      if (existingCartItem.quantity < product.quantity) {
        const updatedCart = cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
        alert("Product Quantity Updated")
      } else {
        alert('Product is out of stock.');
      }
    }
     else {
      if (product.quantity > 0) {
        setCart([...cart, { ...product, quantity: 1 }]);
        alert("Product added to Cart")
      } else {
        alert('Product is out of stock.');
      }
    }
  };

  return (
    <div>
          <Header cart={cart}/>
          <div>
          <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} products={products} setProducts={setProducts} customData={customData}/>    
          </div>
         <div className="contentDiv">
               <Filter filters={filters} setFilters={setFilters} products={products} setProducts={setProducts} customData={customData} searchInput={searchInput}/>
           {loading ?(
           <img className='loaderImage' src='https://media2.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif?cid=ecf05e4753aabltvud183bd7pgp5ti7ppqneh6o4eaq7c4bt&ep=v1_gifs_search&rid=giphy.gif&ct=g' alt="No img chosen"/> 
           ) :
           ( <div className='product_list_div'>
                   {products.map((product,ind)=>{
                        return(
                   <ProductCard product={product} addToCart={addToCart} key={ind}/>
                  )
                })}
              </div>)
              }
          </div>
          <Footer/>

    </div>
 
   
  )
}

export default Products