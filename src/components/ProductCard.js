import React from 'react';
import "./ProductCard.css"

const ProductCard = ({product,addToCart}) => {
    return (
      <>
         <div className="product_content">
            <p className='product_title'>{product.name}</p>
            <img src={`${product.imageURL}`} alt="No img displayed" />
             <div className="product_details">
                <p>Rs {product.price}</p>
                <button onClick={()=>addToCart(product)}>Add to Cart</button>
             </div>
         </div>
        </>
    );
  };
  
  export default ProductCard;