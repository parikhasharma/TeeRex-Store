import React from 'react';
import {useNavigate} from "react-router-dom";
import "./Header.css"

function Header({cart}) {
  const navigate=useNavigate();
  return (
    <div>
      <div id="navBar">  
        <h2 className="store-title">TeeRex Store</h2>
        <h2 className="products-title" onClick={()=>{navigate("/")}}>Products</h2>
        <p className='shopping-cart-icon' onClick={()=>{navigate("/cart")}}>🛒</p>
        <span className='cart-item-count'>{cart?.length?cart?.length:""}</span>     
    </div>
    </div>
  )
}

export default Header