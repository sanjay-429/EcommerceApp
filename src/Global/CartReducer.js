import React from 'react'
// reducer take tow thing state nd action
//cartreducer goes to cartcontext
function CartReducer(state,action) {
    const{ShoppingCart, totalPrice, qty}=state;
     let product;
     let index;
     let updatedQty;
     let updatedPrice;
    switch(action.type)
     { 
         case 'ADD_TO_CART':            //action id comes from action
          const check=ShoppingCart.find(product=>product.id===action.id)
          if(check){
            return state;
          }
          else{
              product=action.product;
              product['qty']=1;
              updatedQty=qty+1;
              updatedPrice=totalPrice+product.price;
              return {ShoppingCart: [product, ...ShoppingCart], totalPrice:updatedPrice,qty:updatedQty}
          }
          break;

          case 'INC':
              product=action.cart;
              product.qty=product.qty+1;
              updatedPrice=totalPrice+product.price;
              updatedQty=qty+1;
              index=ShoppingCart.findIndex(cart=>cart.id===action.id);
              ShoppingCart[index]=product;
              return {ShoppingCart: [...ShoppingCart],totalPrice:updatedPrice, qty:
            updatedQty}
            break;

            case 'DEC':
                product=action.cart;
                if(product.qty>1){
                    product.qty=product.qty-1;
                    updatedPrice=totalPrice - product.price;
                    updatedQty=qty - 1;
                    index=ShoppingCart.findIndex(cart=>cart.id===action.id);
                    ShoppingCart[index]=product;
                    return {ShoppingCart: [...ShoppingCart],totalPrice:updatedPrice, qty:
                        updatedQty}
                }
                else{
                    return state;
                }
                break;

                case "DELETE":
                    const filtered=ShoppingCart.filter(product=>product.id!==action.id)
                    product=action.cart;
                    updatedQty=qty-product.qty;
                    updatedPrice=totalPrice - product.price*product.qty;
                    return {ShoppingCart: [...filtered],totalPrice:updatedPrice, qty:
                        updatedQty}
                        break;


          default:
              return state;

}
}

export default CartReducer
