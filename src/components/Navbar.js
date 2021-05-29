import React,{useContext} from 'react'
import {Link} from "react-router-dom";
import {CartContext} from "../Global/CartContext"
function Navbar() {
    const {qty}=useContext(CartContext);
   
    return (
       <nav>
           <ul className="left"> 
               <li><Link to="/">plipcart</Link></li>
           </ul>
           <ul className="right">
         <li><Link to="/cart"><span className="shoppigCart"> 
                <i class="fas fa-cart-plus"></i></span>
                 <span className="cartCount">{qty}</span>
                  </Link></li>
           </ul>
       </nav>
    )
}

export default Navbar
