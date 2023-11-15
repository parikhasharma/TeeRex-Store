import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
import "./Cart.css"

function Cart({cart,setCart,customData}) {
  const navigate=useNavigate();
  let totalPrice=0;
  
  const updateCartItem = (itemId, newQuantity) => {
    const productInCustomData = customData.find((item) => item.id === itemId);
    if (!productInCustomData) {
      return;
    }
    if (newQuantity > 0 && newQuantity <= productInCustomData.quantity) {
      const updatedCart = cart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
      setCart(updatedCart);
    } else {
      alert('Item is out of stock');
    }
  };
  const decreaseCartItem = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
    );
    setCart(updatedCart);
  };

  const removeCartItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  return (
    <div>
      <Header/>
      <div className="cart_container">
       <p>Shopping Cart</p> 
       <div className="cart_content">
          {
            cart.length? cart.map((product , i)=>{
              {totalPrice= totalPrice+(product.price*product.quantity)}
              return (
                <div className="cart_content_main" id={product.id}>
              <img src={product.imageURL} alt="" />
               <div className="price_box">
                <p>{product.name}</p>
                <h4>Rs {product.price * product.quantity}</h4>
               </div>
               <div className="button_box">
                 <div className="increment_decrement">
                  <button onClick={()=>{
                    updateCartItem(product.id,product.quantity+1);
                  }}>+</button>
                  <div style={{marginTop:"6px"}}>{product.quantity}</div>
                  <button onClick={()=>{
                     decreaseCartItem(product.id);
                  }}>-</button>
                 </div>
                  <button onClick={()=>{
                      removeCartItem(product.id)
                  }}>Delete</button>
               </div>
          </div>
              )
            }):  <div className='empty_cart_div'>
                   <h2 onClick={()=>{navigate("/")}}>Add to Cart</h2>
                  <img src="https://media4.giphy.com/media/jtECu4KjK3cqiAUMyR/giphy.gif?cid=ecf05e479uru8koy1jd6we8iv8ptav7887uja0qpxikpqbcw&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />
            </div>
          }
          
        </div>

        <h4> {totalPrice==0?"":`Total Amount : ${totalPrice}`}</h4>
    </div>


      <Footer/>
    </div>
  )
}

export default Cart