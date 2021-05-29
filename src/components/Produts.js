import React ,{useContext}from 'react';
import  {ProductsContext}from "../Global/ProductsContext";
import {CartContext} from "../Global/CartContext"
import Banner from "./Banner";
function Produts() {
    const {products}=useContext(ProductsContext)
    const {dispatch}=useContext(CartContext);
    
    return (
        <div className="container">
        <Banner/>
      <div className="products">
       {products.map((product)=>{
          return( <div className="product" key={product.id}>
                 <div className="product-image">
                     <img src={product.image} alt="not found"/>
                </div>
                <div className="product-deatils">
                     <div className="product-name">
                         {product.name}
                     </div>
                     <div className="product-price">
                         ${product.price}.00
                     </div> 
                     <div className="add-to-cart" onClick={()=>dispatch({type:'ADD_TO_CART', id:product.id, product:product})}> add to cart</div>
                   
                </div>
             
             
           </div>
        ) } ) }
      </div>
      </div>
    )
}

export default Produts
