import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar"
import Produts from "./components/Produts";
import Cart from  "./components/Cart";
import NotFound from "./components/NotFound";
import './App.css';
import ProductsContextProvider from './Global/ProductsContext';
import CartContextProvider from "./Global/CartContext"
function App() {
  return (
    <div className="App">
       <ProductsContextProvider>
         <CartContextProvider>
         <Router>
           <Navbar/>
      
           <Switch>
              <Route exact path='/' component={Produts}/>
              <Route exact path='/cart' component={Cart}/>
              <Route component={NotFound}/>
           </Switch>
         </Router>
         </CartContextProvider>
        
       </ProductsContextProvider>
    </div>
  );
}

export default App;
